(ns creep-mate.core
  (:require [play-cljs.core :as p]
            [goog.events :as events]))

(def speed 1)
(def player-size 20)
(def screen-x 800)
(def screen-y 600)

(defonce game (p/create-game screen-x screen-y))
(defonce state (atom {:x 0, :y 0}))

(defn move [direction]
  (case direction
    :left (swap! state assoc :x (- (:x @state) speed))
    :right (swap! state assoc :x (+ (:x @state) speed))
    :up (swap! state assoc :y (- (:y @state) speed))
    :down (swap! state assoc :y (+ (:y @state) speed))))

(def main-screen
  (reify p/Screen
    (on-show [this]
      (reset! state {:text-x 20 :text-y 30}))
    (on-hide [this])
    (on-render [this]
      (p/render game
        (let [rendered-x (- (/ screen-x 2) (/ player-size 2))
              rendered-y (- (/ screen-y 2) (/ player-size 2))]
          [[:fill {:color "#ddd"}
            [:rect {:x 0 :y 0 :width screen-x :height screen-y}]]
           [:fill {:color "lightblue"}
            [:rect {:x rendered-x :y rendered-y :width player-size :height player-size}]]
           [:fill {:color "lightgreen"}
            [:rect {:x (+ rendered-x (- (:x @state)) 100)
                    :y (+ rendered-y (- (:y @state)) 100)
                    :width 100
                    :height 40}]]])))))

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
