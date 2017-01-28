(ns creep-mate.core
  (:require [play-cljs.core :as p]
            [goog.events :as events]))

(def speed 4)
(def player-size 20)
(def screen-x 800)
(def screen-y 600)

(defonce game (p/create-game screen-x screen-y))
(defonce state (atom {:x 0 :y 0 :mode :walk :creeps #{}}))

(declare fight-load-screen fight-load-screen-2 fight-screen field-of-vision)

(defn glitch-canvas!
  []
  (js/startGlitching (p/get-canvas game)))

(defn enter-fight-screen!
  [current-creep]
  (swap! state assoc :mode :fight)
  (swap! state assoc :current-creep current-creep)
  (js/battlesound.play)
  (glitch-canvas!)
  (swap! state assoc :canvas-data
    (-> (p/get-canvas game)
        (.getContext "2d")
        (.getImageData 0 0
          (.-width (p/get-canvas game))
          (.-height (p/get-canvas game)))))
  (p/set-screen game fight-load-screen)
  (js/setTimeout #(p/set-screen game fight-load-screen-2) 2000)
  (js/setTimeout #(p/set-screen game fight-screen) 5000))

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
    (when-let [current-creep (first peeping-creeps)]
      (js/bgsound.stop)
      (enter-fight-screen! current-creep))))

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
        :creeps #{{:x 100 :y -40 :direction :up :name "dave"}
                  {:x 200 :y -40 :direction :right :name "steve"}
                  {:x 300 :y -40 :direction :down :name "john"}
                  {:x 400 :y -40 :direction :left :name "james"}}))
    (on-hide [this])
    (on-render [this]
      (p/render game
        [(render-background)
         (render-house 40 40 100 40)
         (map render-creep (:creeps @state))
         (render-player)]))))

(def fight-load-screen
  (reify p/Screen
    (on-show [this])
    (on-hide [this])
    (on-render [this]
      (-> (p/get-canvas game)
          (.getContext "2d")
          (.putImageData (:canvas-data @state) 0 0))
      (p/render game
        [:fill {:color "black"}
         [:animation {:duration 200}
          [[:rect {:x 0 :y 0 :width 20 :height 20}]
           [:rect {:x 20 :y 20 :width 20 :height 20}]
           [:rect {:x 40 :y 40 :width 20 :height 20}]
           [:rect {:x 60 :y 60 :width 20 :height 20}]
           [:rect {:x 80 :y 80 :width 20 :height 20}]
           [:rect {:x 100 :y 100 :width 20 :height 20}]
           [:rect {:x 120 :y 120 :width 20 :height 20}]
           [:rect {:x 140 :y 140 :width 20 :height 20}]
           [:rect {:x 160 :y 160 :width 20 :height 20}]
           [:rect {:x 180 :y 180 :width 20 :height 20}]
           [:rect {:x 200 :y 200 :width 20 :height 20}]
           [:rect {:x 220 :y 220 :width 20 :height 20}]]
          [[:rect {:x 0 :y 0 :width 20 :height 20}]]]]))))

(def fight-load-screen-2
  (reify p/Screen
    (on-show [this])
    (on-hide [this])
    (on-render [this]
      (p/render game
        [(render-fight-background)
         [:fill {:color "white"}
          [:text {:value (str "creepy " (:name (:current-creep @state)) " wants to fight!") :x 20 :y (- (/ screen-y 2) 20) :size 40 :font "Courier"}]]]))))

(def fight-screen
  (reify p/Screen
    (on-show [this]
      (p/load-image game "images/dave.png"))
    (on-hide [this])
    (on-render [this]
      (p/render game
        [[:animation {:duration 1000}
          [:animation {:duration 200}
            [:image {:name "images/dave.png"
                     :x 20 :y 20
                     :width 262 :height 270}]
            [:image {:name "images/dave.png"
                     :x 30 :y 20
                     :width 262 :height 270}]]
          [:image {:name "images/dave.png"
                   :x 20 :y 20
                   :width 262 :height 270}]]
         [:fill {:color "lightgrey"}
          [:rect {:x 0 :y (- screen-y 200) :width screen-x :height 200}
           [:fill {:color "black"}
            [:text {:value (str (:name (:current-creep @state)) ": hello honey, can i get your number?") :x 20 :y 60 :size 30 :font "Courier"}]]]]]))))

(doto game
  (p/start)
  (p/set-screen main-screen))

; (swap! state assoc :current-creep {:x 100 :y -40 :direction :up :name "dave"})
; (p/set-screen game fight-load-screen-2)

(events/listen js/window "keydown"
                 (fn [^js/KeyboardEvent event]
                   (when (= (:mode @state) :walk)
                     (let [key (.-keyCode event)]
                       (case key
                         87 (move :up)     ; w
                         65 (move :left)   ; a
                         83 (move :down)   ; s
                         68 (move :right)  ; d
                         false)))))
