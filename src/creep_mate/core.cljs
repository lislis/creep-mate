(ns creep-mate.core
  (:require [play-cljs.core :as p]
            [goog.events :as events]))

(defonce game (p/create-game 800 600))
(defonce state (atom {:x 0, :y 0}))

(def speed 10)

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
        [[:fill {:color "lightblue"}
          [:rect {:x (:x @state) :y (:y @state) :width 20 :height 20}]]])
      (swap! state update :text-x inc))))

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
