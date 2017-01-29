// Compiled by ClojureScript 1.9.293 {}
goog.provide('creep_mate.core');
goog.require('cljs.core');
goog.require('play_cljs.core');
goog.require('goog.events');







creep_mate.core.speed = (4);
creep_mate.core.player_size = (28);
creep_mate.core.screen_x = (800);
creep_mate.core.screen_y = (600);
creep_mate.core.navigator = cljs.core.js__GT_clj.call(null,window.navigator);
creep_mate.core.user_agent = creep_mate.core.navigator.userAgent;
creep_mate.core.main_creeps = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(210),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"title","title",636505583),"congressman",new cljs.core.Keyword(null,"name","name",1843675177),"dave",new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello honey, can i get your number?","also, i am going to take away your\nreproductive rights!"], null),new cljs.core.Keyword(null,"sy","sy",227523849),(96)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(340),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"title","title",636505583),"techie",new cljs.core.Keyword(null,"name","name",1843675177),"james",new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sy","sy",227523849),(32)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(-50),new cljs.core.Keyword(null,"y","y",-1757859776),(50),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"title","title",636505583),"beauty industry",new cljs.core.Keyword(null,"name","name",1843675177),"steve",new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hey babe, can i take a peek at you?","also, i am going to make clothes\nthat will never fit you!","without pockets!"], null),new cljs.core.Keyword(null,"sy","sy",227523849),(64)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(220),new cljs.core.Keyword(null,"y","y",-1757859776),(30),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"title","title",636505583),"twitter egg",new cljs.core.Keyword(null,"name","name",1843675177),"john",new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sy","sy",227523849),(0)], null)], true);
if(typeof creep_mate.core.game !== 'undefined'){
} else {
creep_mate.core.game = play_cljs.core.create_game.call(null,creep_mate.core.screen_x,creep_mate.core.screen_y);
}
if(typeof creep_mate.core.state !== 'undefined'){
} else {
creep_mate.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(280),new cljs.core.Keyword(null,"player-look","player-look",-1562249712),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"player-moving","player-moving",-1852810861),false,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"creeps","creeps",614323658),creep_mate.core.main_creeps,new cljs.core.Keyword(null,"city-bg","city-bg",1570985489),play_cljs.core.load_image.call(null,creep_mate.core.game,"city.png")], null));
}
if(typeof creep_mate.core.dialog_next !== 'undefined'){
} else {
creep_mate.core.dialog_next = cljs.core.atom.call(null,(function (){
return cljs.core.List.EMPTY;
}));
}
if(typeof creep_mate.core.dialog_buffer !== 'undefined'){
} else {
creep_mate.core.dialog_buffer = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof creep_mate.core.fight_actions !== 'undefined'){
} else {
creep_mate.core.fight_actions = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ignore",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
creep_mate.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135));

creep_mate.core.push_dialog_BANG_.call(null,"you are trying to ignore the creep");

creep_mate.core.push_dialog_BANG_.call(null,"it is not very effective");

creep_mate.core.push_dialog_BANG_.call(null,"you are very annoyed");

return creep_mate.core.set_dialog_next_BANG_.call(null,(function (){
return creep_mate.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"fight-menu","fight-menu",-1283899782));
}));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"drain",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
creep_mate.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135));

creep_mate.core.push_dialog_BANG_.call(null,"you sink your teeth into the creep");

creep_mate.core.push_dialog_BANG_.call(null,"you suck all the blood");

creep_mate.core.push_dialog_BANG_.call(null,"it is very effective");

cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creeps","creeps",614323658)], null),cljs.core.disj,new cljs.core.Keyword(null,"current-creep","current-creep",-127669639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)));

return creep_mate.core.set_dialog_next_BANG_.call(null,(function (){
return play_cljs.core.set_screen.call(null,creep_mate.core.game,creep_mate.core.main_screen);
}));
})], null)], null));
}
if(typeof creep_mate.core.current_fight_action_index !== 'undefined'){
} else {
creep_mate.core.current_fight_action_index = cljs.core.atom.call(null,(0));
}
creep_mate.core.abs = (function creep_mate$core$abs(n){
var x__7204__auto__ = n;
var y__7205__auto__ = (- n);
return ((x__7204__auto__ > y__7205__auto__) ? x__7204__auto__ : y__7205__auto__);
});
creep_mate.core.fight_action_index = (function creep_mate$core$fight_action_index(){
return creep_mate.core.abs.call(null,cljs.core.mod.call(null,cljs.core.deref.call(null,creep_mate.core.current_fight_action_index),cljs.core.count.call(null,cljs.core.deref.call(null,creep_mate.core.fight_actions))));
});
creep_mate.core.fight_action = (function creep_mate$core$fight_action(){
return cljs.core.get.call(null,cljs.core.deref.call(null,creep_mate.core.fight_actions),creep_mate.core.fight_action_index.call(null));
});
creep_mate.core.set_mode_BANG_ = (function creep_mate$core$set_mode_BANG_(mode){
console.log("set-mode!",cljs.core.name.call(null,mode));

return cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode);
});
creep_mate.core.set_dialog_next_BANG_ = (function creep_mate$core$set_dialog_next_BANG_(next){
return cljs.core.reset_BANG_.call(null,creep_mate.core.dialog_next,next);
});
creep_mate.core.push_dialog_BANG_ = (function creep_mate$core$push_dialog_BANG_(msg){
return cljs.core.swap_BANG_.call(null,creep_mate.core.dialog_buffer,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});
creep_mate.core.consume_dialog_BANG_ = (function creep_mate$core$consume_dialog_BANG_(){
if(cljs.core.seq.call(null,cljs.core.deref.call(null,creep_mate.core.dialog_buffer))){
var msg = cljs.core.first.call(null,cljs.core.deref.call(null,creep_mate.core.dialog_buffer));
return cljs.core.swap_BANG_.call(null,creep_mate.core.dialog_buffer,cljs.core.rest);
} else {
return null;
}
});
creep_mate.core.current_dialog = (function creep_mate$core$current_dialog(){
return cljs.core.first.call(null,cljs.core.deref.call(null,creep_mate.core.dialog_buffer));
});
creep_mate.core.glitch_canvas_BANG_ = (function creep_mate$core$glitch_canvas_BANG_(){
return startGlitching(play_cljs.core.get_canvas.call(null,creep_mate.core.game));
});
creep_mate.core.enter_fight_screen_BANG_ = (function creep_mate$core$enter_fight_screen_BANG_(current_creep){
creep_mate.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"loading","loading",-737050189));

cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-creep","current-creep",-127669639),current_creep);

bgsound.stop();

battlesound.play();

if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.re_seq.call(null,/Firefox/,[cljs.core.str(creep_mate.core.user_agent)].join(''))))){
creep_mate.core.glitch_canvas_BANG_.call(null);
} else {
}

cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-data","canvas-data",-303423685),play_cljs.core.get_canvas.call(null,creep_mate.core.game).getContext("2d").getImageData((0),(0),play_cljs.core.get_canvas.call(null,creep_mate.core.game).width,play_cljs.core.get_canvas.call(null,creep_mate.core.game).height));

play_cljs.core.set_screen.call(null,creep_mate.core.game,creep_mate.core.fight_load_screen);

setTimeout((function (){
return play_cljs.core.set_screen.call(null,creep_mate.core.game,creep_mate.core.fight_load_screen_2);
}),(2000));

return setTimeout((function (){
return play_cljs.core.set_screen.call(null,creep_mate.core.game,creep_mate.core.fight_screen);
}),(5000));
});
creep_mate.core.is_peeping_QMARK_ = (function creep_mate$core$is_peeping_QMARK_(creep){
var fov = creep_mate.core.field_of_vision.call(null,creep);
var fov_x_abs = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(creep) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(fov));
var fov_y_abs = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(creep) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(fov));
var fov_left = fov_x_abs;
var fov_right = (fov_x_abs + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fov));
var fov_top = fov_y_abs;
var fov_bottom = (fov_y_abs + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(fov));
return ((((fov_left < (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) + creep_mate.core.player_size))) && (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) + creep_mate.core.player_size) < fov_right))) || (((fov_left < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) < fov_right)))) && ((((fov_top < (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) + creep_mate.core.player_size))) && (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) + creep_mate.core.player_size) < fov_bottom))) || (((fov_top < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) < fov_bottom))));
});
creep_mate.core.check_creeps_BANG_ = (function creep_mate$core$check_creeps_BANG_(){
var peeping_creeps = cljs.core.filter.call(null,creep_mate.core.is_peeping_QMARK_,new cljs.core.Keyword(null,"creeps","creeps",614323658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)));
var temp__4657__auto__ = cljs.core.first.call(null,peeping_creeps);
if(cljs.core.truth_(temp__4657__auto__)){
var current_creep = temp__4657__auto__;
return creep_mate.core.enter_fight_screen_BANG_.call(null,current_creep);
} else {
return null;
}
});
creep_mate.core.update_state_BANG_ = (function creep_mate$core$update_state_BANG_(){
return creep_mate.core.check_creeps_BANG_.call(null);
});
creep_mate.core.move = (function creep_mate$core$move(direction){
creep_mate.core.update_state_BANG_.call(null);

cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"player-look","player-look",-1562249712),direction);

cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"player-moving","player-moving",-1852810861),true);

var G__16867 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__16867) {
case "left":
return cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) - creep_mate.core.speed));

break;
case "right":
return cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) + creep_mate.core.speed));

break;
case "up":
return cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) - creep_mate.core.speed));

break;
case "down":
return cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) + creep_mate.core.speed));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(direction)].join('')));

}
});
creep_mate.core.stop_moving = (function creep_mate$core$stop_moving(direction){
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"player-look","player-look",-1562249712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)),cljs.core.swap_BANG_.call(null,creep_mate.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"player-moving","player-moving",-1852810861),false))){
return null;
} else {
return null;
}
});
creep_mate.core.fight = (function creep_mate$core$fight(key){
var G__16870 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__16870) {
case "enter":
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(creep_mate.core.fight_action.call(null)),cljs.core.PersistentVector.EMPTY);

break;
case "up":
return cljs.core.swap_BANG_.call(null,creep_mate.core.current_fight_action_index,cljs.core.dec);

break;
case "down":
return cljs.core.swap_BANG_.call(null,creep_mate.core.current_fight_action_index,cljs.core.inc);

break;
default:
return false;

}
});
creep_mate.core.rendered_x = (function creep_mate$core$rendered_x(){
return ((creep_mate.core.screen_x / (2)) - (creep_mate.core.player_size / (2)));
});
creep_mate.core.rendered_y = (function creep_mate$core$rendered_y(){
return ((creep_mate.core.screen_y / (2)) - (creep_mate.core.player_size / (2)));
});
creep_mate.core.render_background = (function creep_mate$core$render_background(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#A0A0A4ww"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),creep_mate.core.screen_x,new cljs.core.Keyword(null,"height","height",1025178622),creep_mate.core.screen_y], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"city-bg","city-bg",1570985489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)),new cljs.core.Keyword(null,"x","x",2099068185),(- new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state))),new cljs.core.Keyword(null,"y","y",-1757859776),(- new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state))),new cljs.core.Keyword(null,"width","width",-384071477),(1200),new cljs.core.Keyword(null,"height","height",1025178622),(900)], null)], null)], null);
});
creep_mate.core.render_fight_background = (function creep_mate$core$render_fight_background(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),creep_mate.core.screen_x,new cljs.core.Keyword(null,"height","height",1025178622),creep_mate.core.screen_y], null)], null)], null);
});
creep_mate.core.render_house = (function creep_mate$core$render_house(x,y,width,height){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((creep_mate.core.rendered_x.call(null) + (- new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)))) + x),new cljs.core.Keyword(null,"y","y",-1757859776),((creep_mate.core.rendered_y.call(null) + (- new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)))) + y),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null)], null);
});
creep_mate.core.rotated_bar = (function creep_mate$core$rotated_bar(direction,width,height){
var G__16873 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__16873) {
case "up":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(width - height),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),height,new cljs.core.Keyword(null,"height","height",1025178622),width], null);

break;
case "down":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(width - height),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),height,new cljs.core.Keyword(null,"height","height",1025178622),width], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(direction)].join('')));

}
});
creep_mate.core.field_of_vision = (function creep_mate$core$field_of_vision(creep){
var direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(creep);
var width = creep_mate.core.player_size;
var height = (creep_mate.core.player_size * (2));
var G__16876 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__16876) {
case "up":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(- height),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),width,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),height,new cljs.core.Keyword(null,"height","height",1025178622),width], null);

break;
case "down":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),width,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(- height),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),height,new cljs.core.Keyword(null,"height","height",1025178622),width], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(direction)].join('')));

}
});
creep_mate.core.render_creep = (function creep_mate$core$render_creep(creep){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sy","sy",227523849),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"swidth","swidth",-976864420),new cljs.core.Keyword(null,"sheight","sheight",1322250621),new cljs.core.Keyword(null,"height","height",1025178622)],[((creep_mate.core.rendered_y.call(null) + (- new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)))) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(creep)),"creep.png",new cljs.core.Keyword(null,"sy","sy",227523849).cljs$core$IFn$_invoke$arity$1(creep),creep_mate.core.player_size,(30),((creep_mate.core.rendered_x.call(null) + (- new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)))) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(creep)),(30),(30),creep_mate.core.player_size])], null)], null);
});
creep_mate.core.player_tiles = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stand","stand",-1484467872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(2),new cljs.core.Keyword(null,"sy","sy",227523849),(2)], null),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(2),new cljs.core.Keyword(null,"sy","sy",227523849),(36)], null)], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stand","stand",-1484467872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(83),new cljs.core.Keyword(null,"sy","sy",227523849),(2)], null),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(83),new cljs.core.Keyword(null,"sy","sy",227523849),(36)], null)], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stand","stand",-1484467872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(43),new cljs.core.Keyword(null,"sy","sy",227523849),(2)], null),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(43),new cljs.core.Keyword(null,"sy","sy",227523849),(36)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stand","stand",-1484467872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(120),new cljs.core.Keyword(null,"sy","sy",227523849),(2)], null),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(120),new cljs.core.Keyword(null,"sy","sy",227523849),(36)], null)], null)], null);
creep_mate.core.render_player = (function creep_mate$core$render_player(){
var direction = new cljs.core.Keyword(null,"player-look","player-look",-1562249712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state));
var common = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"player.png",new cljs.core.Keyword(null,"swidth","swidth",-976864420),(30),new cljs.core.Keyword(null,"sheight","sheight",1322250621),(32),new cljs.core.Keyword(null,"x","x",2099068185),creep_mate.core.rendered_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),creep_mate.core.rendered_y.call(null),new cljs.core.Keyword(null,"width","width",-384071477),creep_mate.core.player_size,new cljs.core.Keyword(null,"heigth","heigth",914329217),creep_mate.core.player_size], null);
var standing = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.merge.call(null,common,new cljs.core.Keyword(null,"stand","stand",-1484467872).cljs$core$IFn$_invoke$arity$1(direction.call(null,creep_mate.core.player_tiles)))], null);
var walking = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.merge.call(null,common,new cljs.core.Keyword(null,"stand","stand",-1484467872).cljs$core$IFn$_invoke$arity$1(direction.call(null,creep_mate.core.player_tiles)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.merge.call(null,common,new cljs.core.Keyword(null,"walk","walk",32921637).cljs$core$IFn$_invoke$arity$1(direction.call(null,creep_mate.core.player_tiles)))], null)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"player-moving","player-moving",-1852810861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)))){
return walking;
} else {
return standing;
}
});
creep_mate.core.main_screen = (function (){
if(typeof creep_mate.core.t_creep_mate$core16878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
creep_mate.core.t_creep_mate$core16878 = (function (meta16879){
this.meta16879 = meta16879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
creep_mate.core.t_creep_mate$core16878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16880,meta16879__$1){
var self__ = this;
var _16880__$1 = this;
return (new creep_mate.core.t_creep_mate$core16878(meta16879__$1));
});

creep_mate.core.t_creep_mate$core16878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16880){
var self__ = this;
var _16880__$1 = this;
return self__.meta16879;
});

creep_mate.core.t_creep_mate$core16878.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

creep_mate.core.t_creep_mate$core16878.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
play_cljs.core.load_image.call(null,creep_mate.core.game,"player.png");

play_cljs.core.load_image.call(null,creep_mate.core.game,"creep.png");

bgsound.play();

return creep_mate.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"walk","walk",32921637));
});

creep_mate.core.t_creep_mate$core16878.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return bgsound.stop();
});

creep_mate.core.t_creep_mate$core16878.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.render.call(null,creep_mate.core.game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [creep_mate.core.render_background.call(null),cljs.core.map.call(null,creep_mate.core.render_creep,new cljs.core.Keyword(null,"creeps","creeps",614323658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state))),creep_mate.core.render_player.call(null)], null));
});

creep_mate.core.t_creep_mate$core16878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta16879","meta16879",1164843332,null)], null);
});

creep_mate.core.t_creep_mate$core16878.cljs$lang$type = true;

creep_mate.core.t_creep_mate$core16878.cljs$lang$ctorStr = "creep-mate.core/t_creep_mate$core16878";

creep_mate.core.t_creep_mate$core16878.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"creep-mate.core/t_creep_mate$core16878");
});

creep_mate.core.__GT_t_creep_mate$core16878 = (function creep_mate$core$__GT_t_creep_mate$core16878(meta16879){
return (new creep_mate.core.t_creep_mate$core16878(meta16879));
});

}

return (new creep_mate.core.t_creep_mate$core16878(cljs.core.PersistentArrayMap.EMPTY));
})()
;
creep_mate.core.fight_load_screen = (function (){
if(typeof creep_mate.core.t_creep_mate$core16881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
creep_mate.core.t_creep_mate$core16881 = (function (meta16882){
this.meta16882 = meta16882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
creep_mate.core.t_creep_mate$core16881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16883,meta16882__$1){
var self__ = this;
var _16883__$1 = this;
return (new creep_mate.core.t_creep_mate$core16881(meta16882__$1));
});

creep_mate.core.t_creep_mate$core16881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16883){
var self__ = this;
var _16883__$1 = this;
return self__.meta16882;
});

creep_mate.core.t_creep_mate$core16881.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

creep_mate.core.t_creep_mate$core16881.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

creep_mate.core.t_creep_mate$core16881.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

creep_mate.core.t_creep_mate$core16881.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
play_cljs.core.get_canvas.call(null,creep_mate.core.game).getContext("2d").putImageData(new cljs.core.Keyword(null,"canvas-data","canvas-data",-303423685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)),(0),(0));

return play_cljs.core.render.call(null,creep_mate.core.game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(40),new cljs.core.Keyword(null,"y","y",-1757859776),(40),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(60),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(80),new cljs.core.Keyword(null,"y","y",-1757859776),(80),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(120),new cljs.core.Keyword(null,"y","y",-1757859776),(120),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(140),new cljs.core.Keyword(null,"y","y",-1757859776),(140),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(160),new cljs.core.Keyword(null,"y","y",-1757859776),(160),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(180),new cljs.core.Keyword(null,"y","y",-1757859776),(180),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(220),new cljs.core.Keyword(null,"y","y",-1757859776),(220),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null)], null)], null)], null));
});

creep_mate.core.t_creep_mate$core16881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta16882","meta16882",1011206908,null)], null);
});

creep_mate.core.t_creep_mate$core16881.cljs$lang$type = true;

creep_mate.core.t_creep_mate$core16881.cljs$lang$ctorStr = "creep-mate.core/t_creep_mate$core16881";

creep_mate.core.t_creep_mate$core16881.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"creep-mate.core/t_creep_mate$core16881");
});

creep_mate.core.__GT_t_creep_mate$core16881 = (function creep_mate$core$__GT_t_creep_mate$core16881(meta16882){
return (new creep_mate.core.t_creep_mate$core16881(meta16882));
});

}

return (new creep_mate.core.t_creep_mate$core16881(cljs.core.PersistentArrayMap.EMPTY));
})()
;
creep_mate.core.fight_load_screen_2 = (function (){
if(typeof creep_mate.core.t_creep_mate$core16884 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
creep_mate.core.t_creep_mate$core16884 = (function (meta16885){
this.meta16885 = meta16885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
creep_mate.core.t_creep_mate$core16884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16886,meta16885__$1){
var self__ = this;
var _16886__$1 = this;
return (new creep_mate.core.t_creep_mate$core16884(meta16885__$1));
});

creep_mate.core.t_creep_mate$core16884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16886){
var self__ = this;
var _16886__$1 = this;
return self__.meta16885;
});

creep_mate.core.t_creep_mate$core16884.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

creep_mate.core.t_creep_mate$core16884.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

creep_mate.core.t_creep_mate$core16884.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

creep_mate.core.t_creep_mate$core16884.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.render.call(null,creep_mate.core.game,(function (){var creep = new cljs.core.Keyword(null,"current-creep","current-creep",-127669639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [creep_mate.core.render_fight_background.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str("creepy "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(creep)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(creep)),cljs.core.str("\n"),cljs.core.str("wants to fight!")].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),((creep_mate.core.screen_y / (2)) - (20)),new cljs.core.Keyword(null,"size","size",1098693007),(40),new cljs.core.Keyword(null,"font","font",-1506159249),"Courier"], null)], null)], null)], null);
})());
});

creep_mate.core.t_creep_mate$core16884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta16885","meta16885",255922661,null)], null);
});

creep_mate.core.t_creep_mate$core16884.cljs$lang$type = true;

creep_mate.core.t_creep_mate$core16884.cljs$lang$ctorStr = "creep-mate.core/t_creep_mate$core16884";

creep_mate.core.t_creep_mate$core16884.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"creep-mate.core/t_creep_mate$core16884");
});

creep_mate.core.__GT_t_creep_mate$core16884 = (function creep_mate$core$__GT_t_creep_mate$core16884(meta16885){
return (new creep_mate.core.t_creep_mate$core16884(meta16885));
});

}

return (new creep_mate.core.t_creep_mate$core16884(cljs.core.PersistentArrayMap.EMPTY));
})()
;
creep_mate.core.render_dialog = (function creep_mate$core$render_dialog(msg){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(creep_mate.core.screen_y - (200)),new cljs.core.Keyword(null,"width","width",-384071477),creep_mate.core.screen_x,new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),msg,new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(60),new cljs.core.Keyword(null,"size","size",1098693007),(30),new cljs.core.Keyword(null,"font","font",-1506159249),"Courier"], null)], null)], null)], null)], null);
});
creep_mate.core.prefix_fight_menu_action = (function creep_mate$core$prefix_fight_menu_action(i,action){
return [cljs.core.str(((cljs.core._EQ_.call(null,creep_mate.core.fight_action_index.call(null),i))?"> ":"  ")),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(action))].join('');
});
creep_mate.core.render_fight_menu = (function creep_mate$core$render_fight_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(creep_mate.core.screen_y - (200)),new cljs.core.Keyword(null,"width","width",-384071477),creep_mate.core.screen_x,new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),(function (){var vec__16890 = cljs.core.deref.call(null,creep_mate.core.fight_actions);
var a = cljs.core.nth.call(null,vec__16890,(0),null);
var b = cljs.core.nth.call(null,vec__16890,(1),null);
var c = cljs.core.nth.call(null,vec__16890,(2),null);
var d = cljs.core.nth.call(null,vec__16890,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),creep_mate.core.prefix_fight_menu_action.call(null,(0),a),new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(60),new cljs.core.Keyword(null,"size","size",1098693007),(30),new cljs.core.Keyword(null,"font","font",-1506159249),"Courier"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),creep_mate.core.prefix_fight_menu_action.call(null,(1),b),new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(120),new cljs.core.Keyword(null,"size","size",1098693007),(30),new cljs.core.Keyword(null,"font","font",-1506159249),"Courier"], null)], null)], null);
})()], null)], null)], null);
});
creep_mate.core.fight_screen = (function (){
if(typeof creep_mate.core.t_creep_mate$core16894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
creep_mate.core.t_creep_mate$core16894 = (function (meta16895){
this.meta16895 = meta16895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
creep_mate.core.t_creep_mate$core16894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16896,meta16895__$1){
var self__ = this;
var _16896__$1 = this;
return (new creep_mate.core.t_creep_mate$core16894(meta16895__$1));
});

creep_mate.core.t_creep_mate$core16894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16896){
var self__ = this;
var _16896__$1 = this;
return self__.meta16895;
});

creep_mate.core.t_creep_mate$core16894.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

creep_mate.core.t_creep_mate$core16894.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
play_cljs.core.load_image.call(null,creep_mate.core.game,"images/dave.png");

cljs.core.reset_BANG_.call(null,creep_mate.core.current_fight_action_index,(0));

var creep_16901 = new cljs.core.Keyword(null,"current-creep","current-creep",-127669639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state));
var lines_16902 = cljs.core.map.call(null,((function (creep_16901,this$__$1){
return (function (p1__16893_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(creep_16901)),cljs.core.str(": "),cljs.core.str(p1__16893_SHARP_)].join('');
});})(creep_16901,this$__$1))
,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(creep_16901));
var seq__16897_16903 = cljs.core.seq.call(null,lines_16902);
var chunk__16898_16904 = null;
var count__16899_16905 = (0);
var i__16900_16906 = (0);
while(true){
if((i__16900_16906 < count__16899_16905)){
var line_16907 = cljs.core._nth.call(null,chunk__16898_16904,i__16900_16906);
creep_mate.core.push_dialog_BANG_.call(null,line_16907);

var G__16908 = seq__16897_16903;
var G__16909 = chunk__16898_16904;
var G__16910 = count__16899_16905;
var G__16911 = (i__16900_16906 + (1));
seq__16897_16903 = G__16908;
chunk__16898_16904 = G__16909;
count__16899_16905 = G__16910;
i__16900_16906 = G__16911;
continue;
} else {
var temp__4657__auto___16912 = cljs.core.seq.call(null,seq__16897_16903);
if(temp__4657__auto___16912){
var seq__16897_16913__$1 = temp__4657__auto___16912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16897_16913__$1)){
var c__7687__auto___16914 = cljs.core.chunk_first.call(null,seq__16897_16913__$1);
var G__16915 = cljs.core.chunk_rest.call(null,seq__16897_16913__$1);
var G__16916 = c__7687__auto___16914;
var G__16917 = cljs.core.count.call(null,c__7687__auto___16914);
var G__16918 = (0);
seq__16897_16903 = G__16915;
chunk__16898_16904 = G__16916;
count__16899_16905 = G__16917;
i__16900_16906 = G__16918;
continue;
} else {
var line_16919 = cljs.core.first.call(null,seq__16897_16913__$1);
creep_mate.core.push_dialog_BANG_.call(null,line_16919);

var G__16920 = cljs.core.next.call(null,seq__16897_16913__$1);
var G__16921 = null;
var G__16922 = (0);
var G__16923 = (0);
seq__16897_16903 = G__16920;
chunk__16898_16904 = G__16921;
count__16899_16905 = G__16922;
i__16900_16906 = G__16923;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(creep_mate.core.current_dialog.call(null))){
creep_mate.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135));

return creep_mate.core.set_dialog_next_BANG_.call(null,((function (this$__$1){
return (function (){
return creep_mate.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"fight-menu","fight-menu",-1283899782));
});})(this$__$1))
);
} else {
return creep_mate.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"fight-menu","fight-menu",-1283899782));
}
});

creep_mate.core.t_creep_mate$core16894.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return battlesound.stop();
});

creep_mate.core.t_creep_mate$core16894.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.render.call(null,creep_mate.core.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"images/dave.png",new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(20),new cljs.core.Keyword(null,"width","width",-384071477),(262),new cljs.core.Keyword(null,"height","height",1025178622),(270)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"images/dave.png",new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(20),new cljs.core.Keyword(null,"width","width",-384071477),(262),new cljs.core.Keyword(null,"height","height",1025178622),(270)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"images/dave.png",new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(20),new cljs.core.Keyword(null,"width","width",-384071477),(262),new cljs.core.Keyword(null,"height","height",1025178622),(270)], null)], null)], null),(function (){var temp__4655__auto__ = creep_mate.core.current_dialog.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var msg = temp__4655__auto__;
return creep_mate.core.render_dialog.call(null,msg);
} else {
return creep_mate.core.render_fight_menu.call(null);
}
})()], null));
});

creep_mate.core.t_creep_mate$core16894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta16895","meta16895",606498846,null)], null);
});

creep_mate.core.t_creep_mate$core16894.cljs$lang$type = true;

creep_mate.core.t_creep_mate$core16894.cljs$lang$ctorStr = "creep-mate.core/t_creep_mate$core16894";

creep_mate.core.t_creep_mate$core16894.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"creep-mate.core/t_creep_mate$core16894");
});

creep_mate.core.__GT_t_creep_mate$core16894 = (function creep_mate$core$__GT_t_creep_mate$core16894(meta16895){
return (new creep_mate.core.t_creep_mate$core16894(meta16895));
});

}

return (new creep_mate.core.t_creep_mate$core16894(cljs.core.PersistentArrayMap.EMPTY));
})()
;
var G__16924_16925 = creep_mate.core.game;
play_cljs.core.start.call(null,G__16924_16925);

play_cljs.core.set_screen.call(null,G__16924_16925,creep_mate.core.main_screen);

goog.events.listen(window,"keydown",(function (event){
var key = event.keyCode;
var G__16926 = (((new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)).fqn:null);
switch (G__16926) {
case "walk":
var G__16927 = key;
switch (G__16927) {
case (87):
return creep_mate.core.move.call(null,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case (65):
return creep_mate.core.move.call(null,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case (83):
return creep_mate.core.move.call(null,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case (68):
return creep_mate.core.move.call(null,new cljs.core.Keyword(null,"right","right",-452581833));

break;
default:
return false;

}

break;
case "dialog":
if(cljs.core._EQ_.call(null,key,(13))){
creep_mate.core.consume_dialog_BANG_.call(null);

if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,creep_mate.core.dialog_buffer))){
return cljs.core.deref.call(null,creep_mate.core.dialog_next).call(null);
} else {
return null;
}
} else {
return null;
}

break;
case "fight-menu":
var G__16928 = key;
switch (G__16928) {
case (13):
return creep_mate.core.fight.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624));

break;
case (87):
return creep_mate.core.fight.call(null,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case (65):
return creep_mate.core.fight.call(null,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case (83):
return creep_mate.core.fight.call(null,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case (68):
return creep_mate.core.fight.call(null,new cljs.core.Keyword(null,"right","right",-452581833));

break;
default:
return false;

}

break;
default:
return null;

}
}));
goog.events.listen(window,"keyup",(function (event){
var key = event.keyCode;
var G__16932 = (((new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,creep_mate.core.state)).fqn:null);
switch (G__16932) {
case "walk":
var G__16933 = key;
switch (G__16933) {
case (87):
return creep_mate.core.stop_moving.call(null,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case (65):
return creep_mate.core.stop_moving.call(null,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case (83):
return creep_mate.core.stop_moving.call(null,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case (68):
return creep_mate.core.stop_moving.call(null,new cljs.core.Keyword(null,"right","right",-452581833));

break;
default:
return false;

}

break;
default:
return null;

}
}));
