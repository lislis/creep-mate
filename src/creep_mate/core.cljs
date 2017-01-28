(ns creep-mate.core
  (:require [play-cljs.core :as p]
            [goog.events :as events]))

(def speed 4)
(def player-size 20)
(def screen-x 800)
(def screen-y 600)

(defonce game (p/create-game screen-x screen-y))
(defonce state (atom {:x 0, :y 0, :creeps #{}}))

(defn move [direction]
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

(defn render-creep
  [creep]
  [[:fill {:color "lightred"}
     [:rect {:x (+ (rendered-x) (- (:x @state)) (:x creep))
             :y (+ (rendered-y) (- (:y @state)) (:y creep))
             :width player-size
             :height player-size}
      [:fill {:color "black"}
       [:rect (rotated-bar (:direction creep) player-size 2)]]]]])

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
      (swap! state assoc
        :creeps #{{:x 60 :y -40 :direction :up}
                  {:x 100 :y -40 :direction :right}
                  {:x 140 :y -40 :direction :down}
                  {:x 180 :y -40 :direction :left}}))
    (on-hide [this])
    (on-render [this]
      (p/render game
        [(render-background)
         (render-house 40 40 100 40)
         (render-player)])
      (p/render game
        (map render-creep (:creeps @state))))))

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
