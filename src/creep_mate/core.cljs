(ns creep-mate.core
  (:require [play-cljs.core :as p]
            [goog.events :as events]))

(declare main-screen fight-load-screen fight-load-screen-2 fight-screen field-of-vision set-mode! push-dialog! set-dialog-next!)

(def speed 4)
(def player-size 28)
(def screen-x 800)
(def screen-y 600)
(def navigator (js->clj (.-navigator js/window)))
(def user-agent (.-userAgent navigator))

(def main-creeps
  #{{:x 50 :y 210 :direction :up
     :title "congressman" :name "dave"
     :lines ["hello honey, can i get your number?"
             "also, i am going to take away your\nreproductive rights!"]
     :sy 96}
    {:x -50 :y 50 :direction :right
     :title "beauty industry" :name "steve"
     :lines ["hey babe, can i take a peek at you?"
             "also, i am going to make clothes\nthat will never fit you!"
             "without pockets!"]
     :sy 64}
    {:x 220 :y 30 :direction :down
     :title "twitter egg" :name "john"
     :lines []
     :sy 0}
    {:x 340 :y 200 :direction :left
     :title "techie" :name "james",
     :lines []
     :sy 32}})

(defonce game (p/create-game screen-x screen-y))
(defonce state
  (atom {:x 200 :y 280
         :player-look :right
         :player-moving false
         :mode :walk
         :creeps main-creeps
         :city-bg (p/load-image game "city.png")}))
(defonce dialog-next (atom #()))
(defonce dialog-buffer (atom []))
(defonce fight-actions
  (atom [{:name "ignore"
          :fn (fn []
                (set-mode! :dialog)
                (push-dialog! "you are trying to ignore the creep")
                (push-dialog! "it is not very effective")
                (push-dialog! "you are very annoyed")
                (set-dialog-next! #(set-mode! :fight-menu)))}
         {:name "drain"
          :fn (fn []
                (set-mode! :dialog)
                (push-dialog! "you sink your teeth into the creep")
                (push-dialog! "you suck all the blood")
                (push-dialog! "it is very effective")
                (swap! state update-in [:creeps] disj (:current-creep @state))
                (set-dialog-next! #(p/set-screen game main-screen)))}]))
(defonce current-fight-action-index (atom 0))

(defn abs [n] (max n (- n)))

(defn fight-action-index
  []
  (abs (mod @current-fight-action-index (count @fight-actions))))

(defn fight-action
  []
  (get @fight-actions (fight-action-index)))

(defn set-mode!
  [mode]
  (js/console.log "set-mode!" (name mode))
  (swap! state assoc :mode mode))

(defn set-dialog-next!
  [next]
  (reset! dialog-next next))

(defn push-dialog!
  [msg]
  (swap! dialog-buffer concat [msg]))

(defn consume-dialog!
  []
  (when (seq @dialog-buffer)
    (let [msg (first @dialog-buffer)]
      (swap! dialog-buffer rest))))

(defn current-dialog
  []
  (first @dialog-buffer))

(defn glitch-canvas!
  []
  (js/startGlitching (p/get-canvas game)))

(defn enter-fight-screen!
  [current-creep]
  (set-mode! :loading)
  (swap! state assoc :current-creep current-creep)
  (js/bgsound.stop)
  (js/battlesound.play)
  (when (not (seq (re-seq #"Firefox" (str user-agent))))
    (glitch-canvas!))
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
    (when-let [current-creep (first peeping-creeps)]
      (enter-fight-screen! current-creep))))

(defn update-state!
  []
  (check-creeps!))

(defn move [direction]
  (update-state!)
  (swap! state assoc :player-look direction)
  (swap! state assoc :player-moving true)
  (case direction
    :left (swap! state assoc :x (- (:x @state) speed))
    :right (swap! state assoc :x (+ (:x @state) speed))
    :up (swap! state assoc :y (- (:y @state) speed))
    :down (swap! state assoc :y (+ (:y @state) speed))))

(defn stop-moving!
  []
  (swap! state assoc :player-moving false))

(defn stop-moving
  [direction]
  (when (= direction (:player-look @state)
    (stop-moving!))))

(defn fight
  [key]
  (case key
    :enter (apply (:fn (fight-action)) [])
    :up (swap! current-fight-action-index dec)
    :down (swap! current-fight-action-index inc)
    false))

(defn rendered-x
  []
  (- (/ screen-x 2) (/ player-size 2)))

(defn rendered-y
  []
  (- (/ screen-y 2) (/ player-size 2)))

(defn render-background
  []
  [:fill {:color "#A0A0A4ww"}
   [:rect {:x 0 :y 0 :width screen-x :height screen-y}]
   [:image {:value (:city-bg @state) :x (- (:x @state)) :y (- (:y @state)) :width 1200 :height 900}]])

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
  (case direction
    :up {:x 0 :y 0 :width width :height height}
    :right {:x (- width height) :y 0 :width height :height width}
    :down {:x 0 :y (- width height) :width width :height height}
    :left {:x 0 :y 0 :width height :height width}))

(defn field-of-vision
  [creep]
  (let [direction (:direction creep)
        width player-size
        height (* player-size 2)]
    (case direction
      :up {:x 0 :y (- height) :width width :height height}
      :right {:x width :y 0 :width height :height width}
      :down {:x 0 :y width :width width :height height}
      :left {:x (- height) :y 0 :width height :height width})))

(defn render-creep
  [creep]
  [[:image {:name "creep.png"
            :swidth 30 :sheight 30 :sx 30 :sy (:sy creep)
            :x (+ (rendered-x) (- (:x @state)) (:x creep))
            :y (+ (rendered-y) (- (:y @state)) (:y creep))
            :width player-size
            :height player-size}]])

(def player-tiles
  {:down  {:stand {:sx 2 :sy 2}
           :walk  {:sx 2 :sy 36}}
   :up    {:stand {:sx 83 :sy 2}
           :walk  {:sx 83 :sy 36}}
   :left  {:stand {:sx 43 :sy 2}
           :walk  {:sx 43 :sy 36}}
   :right {:stand {:sx 120 :sy 2}
           :walk  {:sx 120 :sy 36}}})

(defn render-player
  []
  (let [direction (:player-look @state)
        common {:name "player.png" :swidth 30 :sheight 32
                :x (rendered-x) :y (rendered-y)
                :width player-size :heigth player-size}
        standing
          [:image (merge common (-> player-tiles direction :stand))]
        walking
          [:animation {:duration 200}
            [:image (merge common (-> player-tiles direction :stand))]
            [:image (merge common (-> player-tiles direction :walk))]]]
    (if (:player-moving @state)
      walking
      standing)))

(def main-screen
  (reify p/Screen
    (on-show [this]
      (p/load-image game "player.png")
      (p/load-image game "creep.png")
      (js/bgsound.play)
      (stop-moving!)
      (set-mode! :walk))
    (on-hide [this]
      (js/bgsound.stop))
    (on-render [this]
      (p/render game
        [(render-background)
         ;(render-house 25 -75 165 100)
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
        (let [creep (:current-creep @state)]
          [(render-fight-background)
           [:fill {:color "white"}
            [:text {:value (str "creepy " (:title creep) " " (:name creep)
                                "\n"
                                "wants to fight!")
                    :x 20
                    :y (- (/ screen-y 2) 20)
                    :size 40
                    :font "Courier"}]]])))))

(defn render-dialog
  [msg]
  [:fill {:color "lightgrey"}
   [:rect {:x 0 :y (- screen-y 200) :width screen-x :height 200}
    [:fill {:color "black"}
     [:text {:value msg :x 20 :y 60 :size 30 :font "Courier"}]]]])

(defn prefix-fight-menu-action
  [i action]
  (str (if (= (fight-action-index) i) "> " "  ")
       (:name action)))

(defn render-fight-menu
  []
  [:fill {:color "lightgrey"}
   [:rect {:x 0 :y (- screen-y 200) :width screen-x :height 200}
    [:fill {:color "black"}
     (let [[a b c d] @fight-actions]
       [[:text {:value (prefix-fight-menu-action 0 a) :x 20 :y 60 :size 30 :font "Courier"}]
        [:text {:value (prefix-fight-menu-action 1 b) :x 20 :y 120 :size 30 :font "Courier"}]])]]])

(def fight-screen
  (reify p/Screen
    (on-show [this]
      (p/load-image game "images/dave.png")
      (reset! current-fight-action-index 0)
      (let [creep (:current-creep @state)
            lines (map #(str (:name creep) ": " %) (:lines creep))]
        (doseq [line lines]
          (push-dialog! line)))
      (if (current-dialog)
        (do
          (set-mode! :dialog)
          (set-dialog-next! #(set-mode! :fight-menu)))
        (set-mode! :fight-menu)))
    (on-hide [this]
      (js/battlesound.stop))
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
         (if-let [msg (current-dialog)]
            (render-dialog msg)
            (render-fight-menu))]))))

(doto game
  (p/start)
  (p/set-screen main-screen))

; (swap! state assoc :current-creep (first main-creeps))
; (p/set-screen game fight-screen)

(events/listen js/window "keydown"
                 (fn [^js/KeyboardEvent event]
                   (let [key (.-keyCode event)]
                    (case (:mode @state)
                      :walk
                        (case key
                          87 (move :up)     ; w
                          65 (move :left)   ; a
                          83 (move :down)   ; s
                          68 (move :right)  ; d
                          false)
                      :dialog
                        (when (= key 13)    ; enter
                          (consume-dialog!)
                          (when (empty? @dialog-buffer)
                            (@dialog-next)))
                      :fight-menu
                        (case key
                          13 (fight :enter)  ; enter
                          87 (fight :up)     ; w
                          65 (fight :left)   ; a
                          83 (fight :down)   ; s
                          68 (fight :right)  ; d
                          false)
                      nil))))

(events/listen js/window "keyup"
                 (fn [^js/KeyboardEvent event]
                   (let [key (.-keyCode event)]
                    (case (:mode @state)
                      :walk
                        (case key
                          87 (stop-moving :up)     ; w
                          65 (stop-moving :left)   ; a
                          83 (stop-moving :down)   ; s
                          68 (stop-moving :right)  ; d
                          false)
                      nil))))
