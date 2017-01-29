(ns play-cljs.sketch
  (:require [p5.core]))

;(set! *warn-on-infer* true)

(defn update-opts [opts parent-opts defaults]
  (let [parent-opts (merge defaults parent-opts)]
    (-> (merge defaults (dissoc parent-opts :x :y) opts)
        (update :x + (:x parent-opts))
        (update :y + (:y parent-opts)))))

(def ^:const basic-defaults {:x 0 :y 0 :scale-x 1 :scale-y 1})
(def ^:const text-defaults (merge basic-defaults {:size 32 :font "Helvetica" :halign :left :valign :baseline :leading 0 :style :normal}))
(def ^:const img-defaults (merge basic-defaults {:sx 0 :sy 0}))
(def ^:const rgb-defaults (merge basic-defaults {:max-r 255 :max-g 255 :max-b 255 :max-a 1}))
(def ^:const hsb-defaults (merge basic-defaults {:max-h 360 :max-s 100 :max-b 100 :max-a 1}))

(defn halign->constant [^js/p5 renderer halign]
  (get {:left (.-LEFT renderer) :center (.-CENTER renderer) :right (.-RIGHT renderer)} halign))

(defn valign->constant [^js/p5 renderer valign]
  (get {:top (.-TOP renderer) :center (.-CENTER renderer) :bottom (.-BOTTOM renderer) :baseline (.-BASELINE renderer)} valign))

(defn style->constant [^js/p5 renderer style]
  (get {:normal (.-NORMAL renderer) :italic (.-ITALIC renderer) :bold (.-BOLD renderer)} style))

(defmulti draw-sketch! (fn [^js/p5 renderer content parent-opts state]
                         (first content)))

(defmethod draw-sketch! :div [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        opts (update-opts opts parent-opts basic-defaults)]
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :text [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [value x y size font halign valign leading style] :as opts}
        (update-opts opts parent-opts text-defaults)]
    (doto renderer
      (.textSize size)
      (.textFont font)
      (.textAlign (halign->constant renderer halign) (valign->constant renderer valign))
      (.textLeading leading)
      (.textStyle (style->constant renderer style))
      (.text value x y))
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :arc [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [x y width height start stop] :as opts}
        (update-opts opts parent-opts basic-defaults)]
    (.arc renderer x y width height start stop)
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :ellipse [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [x y width height] :as opts}
        (update-opts opts parent-opts basic-defaults)]
    (.ellipse renderer x y width height)
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :line [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        opts (update-opts opts parent-opts basic-defaults)
        {:keys [x1 y1 x2 y2] :as opts}
        (-> opts
            (update :x1 + (:x opts))
            (update :y1 + (:y opts))
            (update :x2 + (:x opts))
            (update :y2 + (:y opts)))]
    (.line renderer x1 y1 x2 y2)
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :point [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [x y] :as opts}
        (update-opts opts parent-opts basic-defaults)]
    (.point renderer x y)
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :quad [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        opts (update-opts opts parent-opts basic-defaults)
        {:keys [x1 y1 x2 y2 x3 y3 x4 y4] :as opts}
        (-> opts
            (update :x1 + (:x opts))
            (update :y1 + (:y opts))
            (update :x2 + (:x opts))
            (update :y2 + (:y opts))
            (update :x3 + (:x opts))
            (update :y3 + (:y opts))
            (update :x4 + (:x opts))
            (update :y4 + (:y opts)))]
    (.quad renderer x1 y1 x2 y2 x3 y3 x4 y4)
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :rect [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [x y width height] :as opts}
        (update-opts opts parent-opts basic-defaults)]
    (.rect renderer x y width height)
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :triangle [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        opts (update-opts opts parent-opts basic-defaults)
        {:keys [x1 y1 x2 y2 x3 y3] :as opts}
        (-> opts
            (update :x1 + (:x opts))
            (update :y1 + (:y opts))
            (update :x2 + (:x opts))
            (update :y2 + (:y opts))
            (update :x3 + (:x opts))
            (update :y3 + (:y opts)))]
    (.triangle renderer x1 y1 x2 y2 x3 y3)
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :image [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [value name x y width height sx sy swidth sheight scale-x scale-y] :as opts}
        (update-opts opts parent-opts img-defaults)
        ^js/p5.Image value (or value (get-in @state [:assets name]))
        swidth (or swidth (.-width value))
        sheight (or sheight (.-height value))]
    (.scale renderer scale-x scale-y)
    (.image renderer value
      sx sy swidth sheight
      x y (or width swidth) (or height sheight))
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :animation [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [duration] :as opts} (update-opts opts parent-opts basic-defaults)
        total-time (:total-time @state)
        images (vec children)
        cycle-time (mod total-time (* duration (count images)))
        index (int (/ cycle-time duration))
        image (get images index)]
    (draw-sketch! renderer image opts state)))

(defmethod draw-sketch! :fill [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [grayscale color colors] :as opts}
        (update-opts opts parent-opts basic-defaults)
        fill-fn (cond
                  grayscale
                  #(.fill renderer grayscale)
                  color
                  #(.fill renderer color)
                  colors
                  (let [[n1 n2 n3] colors]
                    #(.fill renderer n1 n2 n3))
                  :else
                  #(.noFill renderer))]
    (fill-fn)
    (draw-sketch! renderer children (assoc opts :fill-fn fill-fn) state)
    ; reset fill to its default
    (.fill renderer "white")
    (set! (.-_fillSet (.-_renderer renderer)) false)
    ; if there is a fill function in a parent, re-apply it
    (when-let [fill-fn (:fill-fn parent-opts)]
      (fill-fn))))

(defmethod draw-sketch! :stroke [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [grayscale color colors] :as opts}
        (update-opts opts parent-opts basic-defaults)
        stroke-fn (cond
                    grayscale
                    #(.stroke renderer grayscale)
                    color
                    #(.stroke renderer color)
                    colors
                    (let [[n1 n2 n3] colors]
                      #(.stroke renderer n1 n2 n3))
                    :else
                    #(.noStroke renderer))]
    (stroke-fn)
    (draw-sketch! renderer children (assoc opts :stroke-fn stroke-fn) state)
    ; reset stroke to its default
    (.stroke renderer "black")
    (set! (.-_strokeSet (.-_renderer renderer)) false)
    ; if there is a stroke function in a parent, re-apply it
    (when-let [stroke-fn (:stroke-fn parent-opts)]
      (stroke-fn))))

(defmethod draw-sketch! :bezier [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        opts (update-opts opts parent-opts basic-defaults)
        {:keys [x1 y1 x2 y2 x3 y3 x4 y4
                z1 z2 z3 z4] :as opts}
        (-> opts
            (update :x1 + (:x opts))
            (update :y1 + (:y opts))
            (update :x2 + (:x opts))
            (update :y2 + (:y opts))
            (update :x3 + (:x opts))
            (update :y3 + (:y opts))
            (update :x4 + (:x opts))
            (update :y4 + (:y opts)))]
    (cond
      (and x1 y1 x2 y2 x3 y3 x4 y4)
      (.bezier renderer x1 y1 x2 y2 x3 y3 x4 y4)
      (and z1 z2 z3 z4)
      (.bezier renderer z1 z2 z3 z4)
      :else
      (throw "Invalid args for bezier"))
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :curve [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        opts (update-opts opts parent-opts basic-defaults)
        {:keys [x1 y1 x2 y2 x3 y3 x4 y4
                z1 z2 z3 z4] :as opts}
        (-> opts
            (update :x1 + (:x opts))
            (update :y1 + (:y opts))
            (update :x2 + (:x opts))
            (update :y2 + (:y opts))
            (update :x3 + (:x opts))
            (update :y3 + (:y opts))
            (update :x4 + (:x opts))
            (update :y4 + (:y opts)))]
    (cond
      (and x1 y1 x2 y2 x3 y3 x4 y4)
      (.curve renderer x1 y1 x2 y2 x3 y3 x4 y4)
      (and z1 z2 z3 z4)
      (.curve renderer z1 z2 z3 z4)
      :else
      (throw "Invalid args for curve"))
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :rgb [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [max-r max-g max-b max-a] :as opts}
        (update-opts opts parent-opts rgb-defaults)
        color-fn #(.colorMode renderer (.-RGB renderer) max-r max-g max-b max-a)]
    (color-fn)
    (draw-sketch! renderer children (assoc opts :color-fn color-fn) state)
    ; reset colorMode to its default
    (let [{:keys [max-r max-g max-b max-a]} rgb-defaults]
      (.colorMode renderer (.-RGB renderer) max-r max-g max-b max-a))
    ; if there is a color function in a parent, re-apply it
    (when-let [color-fn (:color-fn parent-opts)]
      (color-fn))))

(defmethod draw-sketch! :hsb [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [max-h max-s max-b max-a] :as opts}
        (update-opts opts parent-opts hsb-defaults)
        color-fn #(.colorMode renderer (.-HSB renderer) max-h max-s max-b max-a)]
    (color-fn)
    (draw-sketch! renderer children (assoc opts :color-fn color-fn) state)
    ; reset colorMode to its default
    (let [{:keys [max-r max-g max-b max-a]} rgb-defaults]
      (.colorMode renderer (.-RGB renderer) max-r max-g max-b max-a))
    ; if there is a color function in a parent, re-apply it
    (when-let [color-fn (:color-fn parent-opts)]
      (color-fn))))

(defmethod draw-sketch! :tiled-map [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        {:keys [value name x y] :as opts}
        (update-opts opts parent-opts basic-defaults)
        ^js/p5.TiledMap value (or value (get-in @state [:assets name]))]
    (.draw value x y)
    (draw-sketch! renderer children opts state)))

(defmethod draw-sketch! :shape [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        opts (update-opts opts parent-opts basic-defaults)
        points (:points opts)]
    (cond (odd? (count points))
          (throw ":shape requires :points to contain a seq'able with an even number of values (x and y pairs)")
          :else
          (do (.beginShape renderer)
              (loop [[x y & rest] points]
                    (.vertex renderer x y)
                    (when rest
                      (recur rest)))
              (draw-sketch! renderer children opts state)
              (.endShape renderer (.-CLOSE renderer))))))

(defmethod draw-sketch! :contour [^js/p5 renderer content parent-opts state]
  (let [[command opts & children] content
        opts (update-opts opts parent-opts basic-defaults)
        points (:points opts)]
    (cond (odd? (count points))
          (throw ":contour requires :points to contain a seq'able with an even number of values (x and y pairs)")
          :else
          (do (.beginContour renderer)
              (loop [[x y & rest] points]
                    (.vertex renderer x y)
                    (when rest
                      (recur rest)))
              (draw-sketch! renderer children opts state)
              (.endContour renderer (.-CLOSE renderer))))))

(defmethod draw-sketch! :default [^js/p5 renderer content parent-opts state]
  (cond
    (sequential? (first content))
    (run! #(draw-sketch! renderer % parent-opts state) content)
    (nil? (first content))
    nil
    :else
    (throw (js/Error. (str "Invalid sketch command: " (pr-str content))))))

