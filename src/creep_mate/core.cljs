(ns creep-mate.core
  (:require [play-cljs.core :as p]
            [goog.events :as events]))

(def speed 4)
(def player-size 20)
(def screen-x 800)
(def screen-y 600)

(defonce game (p/create-game screen-x screen-y))
(defonce state (atom {:x 0, :y 0, :creeps #{}}))

(declare fight-screen field-of-vision)

(defn is-peeping?
  [creep]
  (let [fov (field-of-vision creep)
        fov-x-abs (+ (:x creep) (:x fov))
        fov-y-abs (+ (:y creep) (:y fov))
        fov-left fov-x-abs
        fov-right (+ fov-x-abs (:width fov))
        fov-top fov-y-abs
        fov-bottom (+ fov-y-abs (:height fov))]
    (and
      (or (< fov-left
             (+ (:x @state) player-size)
             fov-right)
          (< fov-left
             (:x @state)
             fov-right))
       (or (< fov-top
              (+ (:y @state) player-size)
              fov-bottom)
           (< fov-top
              (:y @state)
              fov-bottom)))))

(defn check-creeps!
  []
  (let [peeping-creeps (filter is-peeping? (:creeps @state))]
    ; (js/console.log (force peeping-creeps))
    (when-let [first-creep (first peeping-creeps)]
      (js/bgsound.stop)
      (p/set-screen game fight-screen))))

(defn update-state!
  []
  (check-creeps!))

(defn move [direction]
  (update-state!)
  (case direction
    :left (swap! state assoc :x (- (:x @state) speed))
    :right (swap! state assoc :x (+ (:x @state) speed))
    :up (swap! state assoc :y (- (:y @state) speed))
    :down (swap! state assoc :y (+ (:y @state) speed))))

(defn rendered-x
  []
  (- (/ screen-x 2) (/ player-size 2)))

(defn rendered-y
  []
  (- (/ screen-y 2) (/ player-size 2)))

(defn render-background
  []
  [:fill {:color "#ddd"}
    [:rect {:x 0 :y 0 :width screen-x :height screen-y}]])

(defn render-fight-background
  []
  [:fill {:color "black"}
    [:rect {:x 0 :y 0 :width screen-x :height screen-y}]])

(defn render-house
  [x y width height]
  [:fill {:color "lightgreen"}
   [:rect {:x (+ (rendered-x) (- (:x @state)) x)
           :y (+ (rendered-y) (- (:y @state)) y)
           :width width
           :height height}]])

(defn rotated-bar
  [direction width height]
  (condp = direction
    :up {:x 0 :y 0 :width width :height height}
    :right {:x (- width height) :y 0 :width height :height width}
    :down {:x 0 :y (- width height) :width width :height height}
    :left {:x 0 :y 0 :width height :height width}))

(defn field-of-vision
  [creep]
  (let [direction (:direction creep)
        width player-size
        height (* player-size 2)]
    (condp = direction
      :up {:x 0 :y (- height) :width width :height height}
      :right {:x width :y 0 :width height :height width}
      :down {:x 0 :y width :width width :height height}
      :left {:x (- height) :y 0 :width height :height width})))

(defn render-creep
  [creep]
  [[:fill {:color "hotpink"}
     [:rect {:x (+ (rendered-x) (- (:x @state)) (:x creep))
             :y (+ (rendered-y) (- (:y @state)) (:y creep))
             :width player-size
             :height player-size}
      [:fill {:color "black"}
       [:rect (rotated-bar (:direction creep) player-size 2)]]
      [:fill {:color "white"}
        [:rect (field-of-vision creep)]]]]])

(defn render-player
  []
  [:fill {:color "lightblue"}
    [:rect {:x (rendered-x)
            :y (rendered-y)
            :width player-size
            :height player-size}]])

(def main-screen
  (reify p/Screen
    (on-show [this]
      (js/bgsound.play)
      (swap! state assoc
        :creeps #{{:x 100 :y -40 :direction :up}
                  {:x 200 :y -40 :direction :right}
                  {:x 300 :y -40 :direction :down}
                  {:x 400 :y -40 :direction :left}}))
    (on-hide [this])
    (on-render [this]
      (p/render game
        [(render-background)
         (render-house 40 40 100 40)
         (map render-creep (:creeps @state))
         (render-player)]))))

(def fight-screen
  (reify p/Screen
    (on-show [this]
      (js/battlesound.play))
    (on-hide [this])
    (on-render [this]
      (p/render game
        [(render-fight-background)]))))

(doto game
  (p/start)
  (p/set-screen main-screen))

(events/listen js/window "keydown"
                 (fn [^js/KeyboardEvent event]
                   (let [key (.-keyCode event)]
                     (case key
                       87 (move :up)     ; w
                       65 (move :left)   ; a
                       83 (move :down)   ; s
                       68 (move :right)  ; d
                       false))))
