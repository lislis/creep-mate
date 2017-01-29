// Compiled by ClojureScript 1.9.293 {}
goog.provide('play_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('play_cljs.sketch');
goog.require('cljs.core.async');
p5.disableFriendlyErrors = true;

/**
 * A screen object provides the basic lifecycle for a game.
 * Simple games may only need to have one screen. They are a useful way to
 * isolate different aspects of your game. For example, you could make one
 * screen display the title and menu, and another screen contain the game
 * itself.
 * 
 * You can create a screen by using `reify` like this:
 * 
 * ```
 * (def main-screen
 *   (reify p/Screen
 *  (on-show [this])
 *  (on-hide [this])
 *  (on-render [this])))
 * ```
 * @interface
 */
play_cljs.core.Screen = function(){};

/**
 * Runs once, when the screen first appears.
 */
play_cljs.core.on_show = (function play_cljs$core$on_show(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_show$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_show$arity$1(this$);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (play_cljs.core.on_show[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,this$);
} else {
var m__7537__auto____$1 = (play_cljs.core.on_show["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-show",this$);
}
}
}
});

/**
 * Runs once, when the screen is no longer displayed.
 */
play_cljs.core.on_hide = (function play_cljs$core$on_hide(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_hide$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_hide$arity$1(this$);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (play_cljs.core.on_hide[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,this$);
} else {
var m__7537__auto____$1 = (play_cljs.core.on_hide["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-hide",this$);
}
}
}
});

/**
 * Runs each time the game is ready to render another frame.
 */
play_cljs.core.on_render = (function play_cljs$core$on_render(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_render$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_render$arity$1(this$);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (play_cljs.core.on_render[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,this$);
} else {
var m__7537__auto____$1 = (play_cljs.core.on_render["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-render",this$);
}
}
}
});


/**
 * A game object contains the internal renderer object and various bits of state
 * that are important to the overall execution of the game. Every play-cljs game
 * should create just one such object by calling [create-game](#create-game).
 * @interface
 */
play_cljs.core.Game = function(){};

/**
 * Creates the canvas element.
 */
play_cljs.core.start = (function play_cljs$core$start(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$start$arity$1 == null)))){
return game.play_cljs$core$Game$start$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.start[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.start["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.start",game);
}
}
}
});

/**
 * Renders the provided data structure.
 */
play_cljs.core.render = (function play_cljs$core$render(game,content){
if((!((game == null))) && (!((game.play_cljs$core$Game$render$arity$2 == null)))){
return game.play_cljs$core$Game$render$arity$2(game,content);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.render[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game,content);
} else {
var m__7537__auto____$1 = (play_cljs.core.render["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.render",game);
}
}
}
});

/**
 * Renders the provided data structure off-screen and associates it with the given name. Returns an [Image](#Image) object.
 */
play_cljs.core.pre_render = (function play_cljs$core$pre_render(game,image_name,width,height,content){
if((!((game == null))) && (!((game.play_cljs$core$Game$pre_render$arity$5 == null)))){
return game.play_cljs$core$Game$pre_render$arity$5(game,image_name,width,height,content);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.pre_render[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game,image_name,width,height,content);
} else {
var m__7537__auto____$1 = (play_cljs.core.pre_render["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game,image_name,width,height,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.pre-render",game);
}
}
}
});

/**
 * Loads an image. Returns an [Image](#Image) object.
 */
play_cljs.core.load_image = (function play_cljs$core$load_image(game,path){
if((!((game == null))) && (!((game.play_cljs$core$Game$load_image$arity$2 == null)))){
return game.play_cljs$core$Game$load_image$arity$2(game,path);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.load_image[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game,path);
} else {
var m__7537__auto____$1 = (play_cljs.core.load_image["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game,path);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-image",game);
}
}
}
});

/**
 * Loads a tiled map. Returns a [TiledMap](#TiledMap) object. 
 * A tiled map with the provided name must already be loaded 
 * (see the TiledMap docs for details).
 */
play_cljs.core.load_tiled_map = (function play_cljs$core$load_tiled_map(game,map_name){
if((!((game == null))) && (!((game.play_cljs$core$Game$load_tiled_map$arity$2 == null)))){
return game.play_cljs$core$Game$load_tiled_map$arity$2(game,map_name);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.load_tiled_map[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game,map_name);
} else {
var m__7537__auto____$1 = (play_cljs.core.load_tiled_map["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game,map_name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-tiled-map",game);
}
}
}
});

/**
 * Returns the [Screen](#Screen) object currently being displayed.
 */
play_cljs.core.get_screen = (function play_cljs$core$get_screen(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_screen$arity$1 == null)))){
return game.play_cljs$core$Game$get_screen$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.get_screen[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.get_screen["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-screen",game);
}
}
}
});

/**
 * Sets the [Screen](#Screen) object to be displayed.
 */
play_cljs.core.set_screen = (function play_cljs$core$set_screen(game,screen){
if((!((game == null))) && (!((game.play_cljs$core$Game$set_screen$arity$2 == null)))){
return game.play_cljs$core$Game$set_screen$arity$2(game,screen);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.set_screen[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game,screen);
} else {
var m__7537__auto____$1 = (play_cljs.core.set_screen["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-screen",game);
}
}
}
});

/**
 * Returns the internal renderer object.
 */
play_cljs.core.get_renderer = (function play_cljs$core$get_renderer(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_renderer$arity$1 == null)))){
return game.play_cljs$core$Game$get_renderer$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.get_renderer[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.get_renderer["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-renderer",game);
}
}
}
});

/**
 * Returns the internal canvas object.
 */
play_cljs.core.get_canvas = (function play_cljs$core$get_canvas(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_canvas$arity$1 == null)))){
return game.play_cljs$core$Game$get_canvas$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.get_canvas[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.get_canvas["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-canvas",game);
}
}
}
});

/**
 * Returns the total time transpired since the game started, in milliseconds.
 */
play_cljs.core.get_total_time = (function play_cljs$core$get_total_time(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_total_time$arity$1 == null)))){
return game.play_cljs$core$Game$get_total_time$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.get_total_time[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.get_total_time["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-total-time",game);
}
}
}
});

/**
 * Returns the time since the last frame was rendered, in milliseconds.
 */
play_cljs.core.get_delta_time = (function play_cljs$core$get_delta_time(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_delta_time$arity$1 == null)))){
return game.play_cljs$core$Game$get_delta_time$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.get_delta_time[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.get_delta_time["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-delta-time",game);
}
}
}
});

/**
 * Returns a set containing the key codes for the keys currently being pressed.
 */
play_cljs.core.get_pressed_keys = (function play_cljs$core$get_pressed_keys(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_pressed_keys$arity$1 == null)))){
return game.play_cljs$core$Game$get_pressed_keys$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.get_pressed_keys[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.get_pressed_keys["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-pressed-keys",game);
}
}
}
});

/**
 * Returns the virtual width of the game.
 */
play_cljs.core.get_width = (function play_cljs$core$get_width(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_width$arity$1 == null)))){
return game.play_cljs$core$Game$get_width$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.get_width[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.get_width["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-width",game);
}
}
}
});

/**
 * Returns the virtual height of the game.
 */
play_cljs.core.get_height = (function play_cljs$core$get_height(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_height$arity$1 == null)))){
return game.play_cljs$core$Game$get_height$arity$1(game);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.get_height[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game);
} else {
var m__7537__auto____$1 = (play_cljs.core.get_height["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-height",game);
}
}
}
});

/**
 * Sets the virtual width and height of the game.
 */
play_cljs.core.set_size = (function play_cljs$core$set_size(game,width,height){
if((!((game == null))) && (!((game.play_cljs$core$Game$set_size$arity$3 == null)))){
return game.play_cljs$core$Game$set_size$arity$3(game,width,height);
} else {
var x__7536__auto__ = (((game == null))?null:game);
var m__7537__auto__ = (play_cljs.core.set_size[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,game,width,height);
} else {
var m__7537__auto____$1 = (play_cljs.core.set_size["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,game,width,height);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-size",game);
}
}
}
});

/**
 * Returns a game object.
 */
play_cljs.core.create_game = (function play_cljs$core$create_game(width,height){
var renderer = (new p5((function (_){
return null;
})));
var hidden_state_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),(0),new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(0),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.PersistentArrayMap.EMPTY], null));
var setup_finished_QMARK_ = cljs.core.async.promise_chan.call(null);
var preloads = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
if(typeof play_cljs.core.t_play_cljs$core16742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Game}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
play_cljs.core.t_play_cljs$core16742 = (function (width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,meta16743){
this.width = width;
this.height = height;
this.renderer = renderer;
this.hidden_state_atom = hidden_state_atom;
this.setup_finished_QMARK_ = setup_finished_QMARK_;
this.preloads = preloads;
this.meta16743 = meta16743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
play_cljs.core.t_play_cljs$core16742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_16744,meta16743__$1){
var self__ = this;
var _16744__$1 = this;
return (new play_cljs.core.t_play_cljs$core16742(self__.width,self__.height,self__.renderer,self__.hidden_state_atom,self__.setup_finished_QMARK_,self__.preloads,meta16743__$1));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_16744){
var self__ = this;
var _16744__$1 = this;
return self__.meta16743;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$ = cljs.core.PROTOCOL_SENTINEL;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$get_screen$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$set_size$arity$3 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,width__$1,height__$1){
var self__ = this;
var this$__$1 = this;
return self__.renderer.resizeCanvas(width__$1,height__$1);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$get_canvas$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$pre_render$arity$5 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,image_name,width__$1,height__$1,content){
var self__ = this;
var this$__$1 = this;
var object = self__.renderer.createGraphics(width__$1,height__$1);
play_cljs.sketch.draw_sketch_BANG_.call(null,object,content,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,image_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$load_image$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,path){
var self__ = this;
var this$__$1 = this;
var finished_loading_QMARK_ = cljs.core.async.promise_chan.call(null);
var _ = cljs.core.swap_BANG_.call(null,self__.preloads,cljs.core.conj,finished_loading_QMARK_);
var object = self__.renderer.loadImage(path,((function (finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished_loading_QMARK_,true);
});})(finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,path,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$get_width$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.width;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$get_height$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.height;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$start$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
self__.renderer.setup = ((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var canvas_wrapper_16842 = self__.renderer.createCanvas(self__.width,self__.height);
var canvas_16843 = canvas_wrapper_16842.canvas;
canvas_16843.removeAttribute("style");

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas_16843);

return cljs.core.async.put_BANG_.call(null,self__.setup_finished_QMARK_,true);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

cljs.core.run_BANG_.call(null,goog.events.unlistenByKey,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom)));

return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(window,"keydown",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (e){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.conj,e.keyCode);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
),goog.events.listen(window,"keyup",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (e){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(91),null,(93),null], null), null),e.keyCode)){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.disj,e.keyCode);
}
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
),goog.events.listen(window,"blur",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
)], null));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$get_delta_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$get_pressed_keys$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$render$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,content){
var self__ = this;
var this$__$1 = this;
return play_cljs.sketch.draw_sketch_BANG_.call(null,self__.renderer,content,cljs.core.PersistentArrayMap.EMPTY,self__.hidden_state_atom);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$load_tiled_map$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,map_name){
var self__ = this;
var this$__$1 = this;
var finished_loading_QMARK_ = cljs.core.async.promise_chan.call(null);
var _ = cljs.core.swap_BANG_.call(null,self__.preloads,cljs.core.conj,finished_loading_QMARK_);
var object = self__.renderer.loadTiledMap(map_name,((function (finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished_loading_QMARK_,true);
});})(finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,map_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$set_screen$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,screen){
var self__ = this;
var this$__$1 = this;
var c__13812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (state_16805){
var state_val_16806 = (state_16805[(1)]);
if((state_val_16806 === (7))){
var inst_16799 = (state_16805[(2)]);
var inst_16800 = cljs.core.PersistentVector.EMPTY;
var inst_16801 = cljs.core.reset_BANG_.call(null,self__.preloads,inst_16800);
var inst_16802 = (function (){return ((function (inst_16799,inst_16800,inst_16801,state_val_16806,c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,((function (inst_16799,inst_16800,inst_16801,state_val_16806,c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (hidden_state){
var time = self__.renderer.millis();
return cljs.core.assoc.call(null,hidden_state,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),time,new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(time - new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(hidden_state)));
});})(inst_16799,inst_16800,inst_16801,state_val_16806,c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

self__.renderer.clear();

return play_cljs.core.on_render.call(null,screen);
});
;})(inst_16799,inst_16800,inst_16801,state_val_16806,c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var inst_16803 = self__.renderer.draw = inst_16802;
var state_16805__$1 = (function (){var statearr_16807 = state_16805;
(statearr_16807[(7)] = inst_16799);

(statearr_16807[(8)] = inst_16801);

return statearr_16807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16805__$1,inst_16803);
} else {
if((state_val_16806 === (1))){
var state_16805__$1 = state_16805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16805__$1,(2),self__.setup_finished_QMARK_);
} else {
if((state_val_16806 === (4))){
var inst_16748 = (state_16805[(9)]);
var inst_16752 = play_cljs.core.on_hide.call(null,inst_16748);
var state_16805__$1 = state_16805;
var statearr_16808_16844 = state_16805__$1;
(statearr_16808_16844[(2)] = inst_16752);

(statearr_16808_16844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (15))){
var inst_16777 = (state_16805[(10)]);
var inst_16781 = cljs.core.chunk_first.call(null,inst_16777);
var inst_16782 = cljs.core.chunk_rest.call(null,inst_16777);
var inst_16783 = cljs.core.count.call(null,inst_16781);
var inst_16763 = inst_16782;
var inst_16764 = inst_16781;
var inst_16765 = inst_16783;
var inst_16766 = (0);
var state_16805__$1 = (function (){var statearr_16809 = state_16805;
(statearr_16809[(11)] = inst_16765);

(statearr_16809[(12)] = inst_16766);

(statearr_16809[(13)] = inst_16764);

(statearr_16809[(14)] = inst_16763);

return statearr_16809;
})();
var statearr_16810_16845 = state_16805__$1;
(statearr_16810_16845[(2)] = null);

(statearr_16810_16845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (13))){
var state_16805__$1 = state_16805;
var statearr_16811_16846 = state_16805__$1;
(statearr_16811_16846[(2)] = null);

(statearr_16811_16846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (6))){
var inst_16765 = (state_16805[(11)]);
var inst_16766 = (state_16805[(12)]);
var inst_16768 = (inst_16766 < inst_16765);
var inst_16769 = inst_16768;
var state_16805__$1 = state_16805;
if(cljs.core.truth_(inst_16769)){
var statearr_16812_16847 = state_16805__$1;
(statearr_16812_16847[(1)] = (8));

} else {
var statearr_16813_16848 = state_16805__$1;
(statearr_16813_16848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (17))){
var inst_16792 = (state_16805[(2)]);
var state_16805__$1 = state_16805;
var statearr_16814_16849 = state_16805__$1;
(statearr_16814_16849[(2)] = inst_16792);

(statearr_16814_16849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (3))){
var state_16805__$1 = state_16805;
var statearr_16815_16850 = state_16805__$1;
(statearr_16815_16850[(2)] = null);

(statearr_16815_16850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (12))){
var inst_16777 = (state_16805[(10)]);
var inst_16779 = cljs.core.chunked_seq_QMARK_.call(null,inst_16777);
var state_16805__$1 = state_16805;
if(inst_16779){
var statearr_16819_16851 = state_16805__$1;
(statearr_16819_16851[(1)] = (15));

} else {
var statearr_16820_16852 = state_16805__$1;
(statearr_16820_16852[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (2))){
var inst_16748 = (state_16805[(9)]);
var inst_16746 = (state_16805[(2)]);
var inst_16748__$1 = play_cljs.core.get_screen.call(null,this$__$1);
var inst_16749 = (inst_16748__$1 == null);
var state_16805__$1 = (function (){var statearr_16821 = state_16805;
(statearr_16821[(15)] = inst_16746);

(statearr_16821[(9)] = inst_16748__$1);

return statearr_16821;
})();
if(cljs.core.truth_(inst_16749)){
var statearr_16822_16853 = state_16805__$1;
(statearr_16822_16853[(1)] = (3));

} else {
var statearr_16823_16854 = state_16805__$1;
(statearr_16823_16854[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (11))){
var inst_16765 = (state_16805[(11)]);
var inst_16766 = (state_16805[(12)]);
var inst_16764 = (state_16805[(13)]);
var inst_16763 = (state_16805[(14)]);
var inst_16773 = (state_16805[(2)]);
var inst_16774 = (inst_16766 + (1));
var tmp16816 = inst_16765;
var tmp16817 = inst_16764;
var tmp16818 = inst_16763;
var inst_16763__$1 = tmp16818;
var inst_16764__$1 = tmp16817;
var inst_16765__$1 = tmp16816;
var inst_16766__$1 = inst_16774;
var state_16805__$1 = (function (){var statearr_16824 = state_16805;
(statearr_16824[(16)] = inst_16773);

(statearr_16824[(11)] = inst_16765__$1);

(statearr_16824[(12)] = inst_16766__$1);

(statearr_16824[(13)] = inst_16764__$1);

(statearr_16824[(14)] = inst_16763__$1);

return statearr_16824;
})();
var statearr_16825_16855 = state_16805__$1;
(statearr_16825_16855[(2)] = null);

(statearr_16825_16855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (9))){
var inst_16777 = (state_16805[(10)]);
var inst_16763 = (state_16805[(14)]);
var inst_16777__$1 = cljs.core.seq.call(null,inst_16763);
var state_16805__$1 = (function (){var statearr_16826 = state_16805;
(statearr_16826[(10)] = inst_16777__$1);

return statearr_16826;
})();
if(inst_16777__$1){
var statearr_16827_16856 = state_16805__$1;
(statearr_16827_16856[(1)] = (12));

} else {
var statearr_16828_16857 = state_16805__$1;
(statearr_16828_16857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (5))){
var inst_16754 = (state_16805[(2)]);
var inst_16755 = cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),screen);
var inst_16756 = play_cljs.core.on_show.call(null,screen);
var inst_16761 = cljs.core.deref.call(null,self__.preloads);
var inst_16762 = cljs.core.seq.call(null,inst_16761);
var inst_16763 = inst_16762;
var inst_16764 = null;
var inst_16765 = (0);
var inst_16766 = (0);
var state_16805__$1 = (function (){var statearr_16829 = state_16805;
(statearr_16829[(11)] = inst_16765);

(statearr_16829[(12)] = inst_16766);

(statearr_16829[(17)] = inst_16754);

(statearr_16829[(13)] = inst_16764);

(statearr_16829[(18)] = inst_16756);

(statearr_16829[(19)] = inst_16755);

(statearr_16829[(14)] = inst_16763);

return statearr_16829;
})();
var statearr_16830_16858 = state_16805__$1;
(statearr_16830_16858[(2)] = null);

(statearr_16830_16858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (14))){
var inst_16795 = (state_16805[(2)]);
var state_16805__$1 = state_16805;
var statearr_16831_16859 = state_16805__$1;
(statearr_16831_16859[(2)] = inst_16795);

(statearr_16831_16859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (16))){
var inst_16777 = (state_16805[(10)]);
var inst_16786 = cljs.core.first.call(null,inst_16777);
var state_16805__$1 = state_16805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16805__$1,(18),inst_16786);
} else {
if((state_val_16806 === (10))){
var inst_16797 = (state_16805[(2)]);
var state_16805__$1 = state_16805;
var statearr_16832_16860 = state_16805__$1;
(statearr_16832_16860[(2)] = inst_16797);

(statearr_16832_16860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (18))){
var inst_16777 = (state_16805[(10)]);
var inst_16788 = (state_16805[(2)]);
var inst_16789 = cljs.core.next.call(null,inst_16777);
var inst_16763 = inst_16789;
var inst_16764 = null;
var inst_16765 = (0);
var inst_16766 = (0);
var state_16805__$1 = (function (){var statearr_16833 = state_16805;
(statearr_16833[(20)] = inst_16788);

(statearr_16833[(11)] = inst_16765);

(statearr_16833[(12)] = inst_16766);

(statearr_16833[(13)] = inst_16764);

(statearr_16833[(14)] = inst_16763);

return statearr_16833;
})();
var statearr_16834_16861 = state_16805__$1;
(statearr_16834_16861[(2)] = null);

(statearr_16834_16861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16806 === (8))){
var inst_16766 = (state_16805[(12)]);
var inst_16764 = (state_16805[(13)]);
var inst_16771 = cljs.core._nth.call(null,inst_16764,inst_16766);
var state_16805__$1 = state_16805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16805__$1,(11),inst_16771);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;
return ((function (switch__13700__auto__,c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function() {
var play_cljs$core$create_game_$_state_machine__13701__auto__ = null;
var play_cljs$core$create_game_$_state_machine__13701__auto____0 = (function (){
var statearr_16838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16838[(0)] = play_cljs$core$create_game_$_state_machine__13701__auto__);

(statearr_16838[(1)] = (1));

return statearr_16838;
});
var play_cljs$core$create_game_$_state_machine__13701__auto____1 = (function (state_16805){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_16805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e16839){if((e16839 instanceof Object)){
var ex__13704__auto__ = e16839;
var statearr_16840_16862 = state_16805;
(statearr_16840_16862[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16863 = state_16805;
state_16805 = G__16863;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
play_cljs$core$create_game_$_state_machine__13701__auto__ = function(state_16805){
switch(arguments.length){
case 0:
return play_cljs$core$create_game_$_state_machine__13701__auto____0.call(this);
case 1:
return play_cljs$core$create_game_$_state_machine__13701__auto____1.call(this,state_16805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_cljs$core$create_game_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = play_cljs$core$create_game_$_state_machine__13701__auto____0;
play_cljs$core$create_game_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = play_cljs$core$create_game_$_state_machine__13701__auto____1;
return play_cljs$core$create_game_$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var state__13814__auto__ = (function (){var statearr_16841 = f__13813__auto__.call(null);
(statearr_16841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto__);

return statearr_16841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

return c__13812__auto__;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$get_total_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.prototype.play_cljs$core$Game$get_renderer$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.getBasis = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","p5","js/p5",-237683270,null)], null)),new cljs.core.Symbol(null,"hidden-state-atom","hidden-state-atom",1737146278,null),new cljs.core.Symbol(null,"setup-finished?","setup-finished?",386963073,null),new cljs.core.Symbol(null,"preloads","preloads",-1034105580,null),new cljs.core.Symbol(null,"meta16743","meta16743",1240035303,null)], null);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core16742.cljs$lang$type = true;

play_cljs.core.t_play_cljs$core16742.cljs$lang$ctorStr = "play-cljs.core/t_play_cljs$core16742";

play_cljs.core.t_play_cljs$core16742.cljs$lang$ctorPrWriter = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"play-cljs.core/t_play_cljs$core16742");
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.__GT_t_play_cljs$core16742 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function play_cljs$core$create_game_$___GT_t_play_cljs$core16742(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta16743){
return (new play_cljs.core.t_play_cljs$core16742(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta16743));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

}

return (new play_cljs.core.t_play_cljs$core16742(width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,cljs.core.PersistentArrayMap.EMPTY));
});
