// Compiled by ClojureScript 1.9.293 {}
goog.provide('play_cljs.sketch');
goog.require('cljs.core');
play_cljs.sketch.update_opts = (function play_cljs$sketch$update_opts(opts,parent_opts,defaults){
var parent_opts__$1 = cljs.core.merge.call(null,defaults,parent_opts);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,defaults,cljs.core.dissoc.call(null,parent_opts__$1,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),opts),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent_opts__$1)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent_opts__$1));
});
play_cljs.sketch.basic_defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null);
play_cljs.sketch.text_defaults = cljs.core.merge.call(null,play_cljs.sketch.basic_defaults,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"font","font",-1506159249),"Helvetica",new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"valign","valign",1485197511),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"leading","leading",-1239035032),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null));
play_cljs.sketch.img_defaults = cljs.core.merge.call(null,play_cljs.sketch.basic_defaults,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(0),new cljs.core.Keyword(null,"sy","sy",227523849),(0)], null));
play_cljs.sketch.rgb_defaults = cljs.core.merge.call(null,play_cljs.sketch.basic_defaults,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-r","max-r",1711699344),(255),new cljs.core.Keyword(null,"max-g","max-g",-1655662483),(255),new cljs.core.Keyword(null,"max-b","max-b",-1756758912),(255),new cljs.core.Keyword(null,"max-a","max-a",2065821478),(1)], null));
play_cljs.sketch.hsb_defaults = cljs.core.merge.call(null,play_cljs.sketch.basic_defaults,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-h","max-h",1409940394),(360),new cljs.core.Keyword(null,"max-s","max-s",781928940),(100),new cljs.core.Keyword(null,"max-b","max-b",-1756758912),(100),new cljs.core.Keyword(null,"max-a","max-a",2065821478),(1)], null));
play_cljs.sketch.halign__GT_constant = (function play_cljs$sketch$halign__GT_constant(renderer,halign){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),renderer.LEFT,new cljs.core.Keyword(null,"center","center",-748944368),renderer.CENTER,new cljs.core.Keyword(null,"right","right",-452581833),renderer.RIGHT], null),halign);
});
play_cljs.sketch.valign__GT_constant = (function play_cljs$sketch$valign__GT_constant(renderer,valign){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),renderer.TOP,new cljs.core.Keyword(null,"center","center",-748944368),renderer.CENTER,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),renderer.BOTTOM,new cljs.core.Keyword(null,"baseline","baseline",1151033280),renderer.BASELINE], null),valign);
});
play_cljs.sketch.style__GT_constant = (function play_cljs$sketch$style__GT_constant(renderer,style){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"normal","normal",-1519123858),renderer.NORMAL,new cljs.core.Keyword(null,"italic","italic",32599196),renderer.ITALIC,new cljs.core.Keyword(null,"bold","bold",-116809535),renderer.BOLD], null),style);
});
if(typeof play_cljs.sketch.draw_sketch_BANG_ !== 'undefined'){
} else {
play_cljs.sketch.draw_sketch_BANG_ = (function (){var method_table__7801__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7802__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7805__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"play-cljs.sketch","draw-sketch!"),((function (method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__,hierarchy__7805__auto__){
return (function (renderer,content,parent_opts,state){
return cljs.core.first.call(null,content);
});})(method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__,hierarchy__7805__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7805__auto__,method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__));
})();
}
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"div","div",1057191632),(function (renderer,content,parent_opts,state){
var vec__12245 = content;
var seq__12246 = cljs.core.seq.call(null,vec__12245);
var first__12247 = cljs.core.first.call(null,seq__12246);
var seq__12246__$1 = cljs.core.next.call(null,seq__12246);
var command = first__12247;
var first__12247__$1 = cljs.core.first.call(null,seq__12246__$1);
var seq__12246__$2 = cljs.core.next.call(null,seq__12246__$1);
var opts = first__12247__$1;
var children = seq__12246__$2;
var opts__$1 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (renderer,content,parent_opts,state){
var vec__12248 = content;
var seq__12249 = cljs.core.seq.call(null,vec__12248);
var first__12250 = cljs.core.first.call(null,seq__12249);
var seq__12249__$1 = cljs.core.next.call(null,seq__12249);
var command = first__12250;
var first__12250__$1 = cljs.core.first.call(null,seq__12249__$1);
var seq__12249__$2 = cljs.core.next.call(null,seq__12249__$1);
var opts = first__12250__$1;
var children = seq__12249__$2;
var map__12251 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.text_defaults);
var map__12251__$1 = ((((!((map__12251 == null)))?((((map__12251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12251):map__12251);
var opts__$1 = map__12251__$1;
var value = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"value","value",305978217));
var x = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var font = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var halign = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var valign = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var leading = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"leading","leading",-1239035032));
var style = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var G__12253_12254 = renderer;
G__12253_12254.textSize(size);

G__12253_12254.textFont(font);

G__12253_12254.textAlign(play_cljs.sketch.halign__GT_constant.call(null,renderer,halign),play_cljs.sketch.valign__GT_constant.call(null,renderer,valign));

G__12253_12254.textLeading(leading);

G__12253_12254.textStyle(play_cljs.sketch.style__GT_constant.call(null,renderer,style));

G__12253_12254.text(value,x,y);


return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"arc","arc",252411045),(function (renderer,content,parent_opts,state){
var vec__12255 = content;
var seq__12256 = cljs.core.seq.call(null,vec__12255);
var first__12257 = cljs.core.first.call(null,seq__12256);
var seq__12256__$1 = cljs.core.next.call(null,seq__12256);
var command = first__12257;
var first__12257__$1 = cljs.core.first.call(null,seq__12256__$1);
var seq__12256__$2 = cljs.core.next.call(null,seq__12256__$1);
var opts = first__12257__$1;
var children = seq__12256__$2;
var map__12258 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12258__$1 = ((((!((map__12258 == null)))?((((map__12258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12258):map__12258);
var opts__$1 = map__12258__$1;
var x = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
renderer.arc(x,y,width,height,start,stop);

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (renderer,content,parent_opts,state){
var vec__12260 = content;
var seq__12261 = cljs.core.seq.call(null,vec__12260);
var first__12262 = cljs.core.first.call(null,seq__12261);
var seq__12261__$1 = cljs.core.next.call(null,seq__12261);
var command = first__12262;
var first__12262__$1 = cljs.core.first.call(null,seq__12261__$1);
var seq__12261__$2 = cljs.core.next.call(null,seq__12261__$1);
var opts = first__12262__$1;
var children = seq__12261__$2;
var map__12263 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12263__$1 = ((((!((map__12263 == null)))?((((map__12263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12263):map__12263);
var opts__$1 = map__12263__$1;
var x = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.ellipse(x,y,width,height);

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"line","line",212345235),(function (renderer,content,parent_opts,state){
var vec__12265 = content;
var seq__12266 = cljs.core.seq.call(null,vec__12265);
var first__12267 = cljs.core.first.call(null,seq__12266);
var seq__12266__$1 = cljs.core.next.call(null,seq__12266);
var command = first__12267;
var first__12267__$1 = cljs.core.first.call(null,seq__12266__$1);
var seq__12266__$2 = cljs.core.next.call(null,seq__12266__$1);
var opts = first__12267__$1;
var children = seq__12266__$2;
var opts__$1 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12268 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12268__$1 = ((((!((map__12268 == null)))?((((map__12268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12268):map__12268);
var opts__$2 = map__12268__$1;
var x1 = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
renderer.line(x1,y1,x2,y2);

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$2,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"point","point",1813198264),(function (renderer,content,parent_opts,state){
var vec__12270 = content;
var seq__12271 = cljs.core.seq.call(null,vec__12270);
var first__12272 = cljs.core.first.call(null,seq__12271);
var seq__12271__$1 = cljs.core.next.call(null,seq__12271);
var command = first__12272;
var first__12272__$1 = cljs.core.first.call(null,seq__12271__$1);
var seq__12271__$2 = cljs.core.next.call(null,seq__12271__$1);
var opts = first__12272__$1;
var children = seq__12271__$2;
var map__12273 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12273__$1 = ((((!((map__12273 == null)))?((((map__12273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12273):map__12273);
var opts__$1 = map__12273__$1;
var x = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
renderer.point(x,y);

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"quad","quad",432820757),(function (renderer,content,parent_opts,state){
var vec__12275 = content;
var seq__12276 = cljs.core.seq.call(null,vec__12275);
var first__12277 = cljs.core.first.call(null,seq__12276);
var seq__12276__$1 = cljs.core.next.call(null,seq__12276);
var command = first__12277;
var first__12277__$1 = cljs.core.first.call(null,seq__12276__$1);
var seq__12276__$2 = cljs.core.next.call(null,seq__12276__$1);
var opts = first__12277__$1;
var children = seq__12276__$2;
var opts__$1 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12278 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12278__$1 = ((((!((map__12278 == null)))?((((map__12278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12278):map__12278);
var opts__$2 = map__12278__$1;
var x1 = cljs.core.get.call(null,map__12278__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12278__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12278__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12278__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__12278__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__12278__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12278__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y4 = cljs.core.get.call(null,map__12278__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
renderer.quad(x1,y1,x2,y2,x3,y3,x4,y4);

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$2,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (renderer,content,parent_opts,state){
var vec__12280 = content;
var seq__12281 = cljs.core.seq.call(null,vec__12280);
var first__12282 = cljs.core.first.call(null,seq__12281);
var seq__12281__$1 = cljs.core.next.call(null,seq__12281);
var command = first__12282;
var first__12282__$1 = cljs.core.first.call(null,seq__12281__$1);
var seq__12281__$2 = cljs.core.next.call(null,seq__12281__$1);
var opts = first__12282__$1;
var children = seq__12281__$2;
var map__12283 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12283__$1 = ((((!((map__12283 == null)))?((((map__12283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12283):map__12283);
var opts__$1 = map__12283__$1;
var x = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.rect(x,y,width,height);

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),(function (renderer,content,parent_opts,state){
var vec__12285 = content;
var seq__12286 = cljs.core.seq.call(null,vec__12285);
var first__12287 = cljs.core.first.call(null,seq__12286);
var seq__12286__$1 = cljs.core.next.call(null,seq__12286);
var command = first__12287;
var first__12287__$1 = cljs.core.first.call(null,seq__12286__$1);
var seq__12286__$2 = cljs.core.next.call(null,seq__12286__$1);
var opts = first__12287__$1;
var children = seq__12286__$2;
var opts__$1 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12288 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12288__$1 = ((((!((map__12288 == null)))?((((map__12288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12288):map__12288);
var opts__$2 = map__12288__$1;
var x1 = cljs.core.get.call(null,map__12288__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12288__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12288__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12288__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__12288__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__12288__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
renderer.triangle(x1,y1,x2,y2,x3,y3);

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$2,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"image","image",-58725096),(function (renderer,content,parent_opts,state){
var vec__12290 = content;
var seq__12291 = cljs.core.seq.call(null,vec__12290);
var first__12292 = cljs.core.first.call(null,seq__12291);
var seq__12291__$1 = cljs.core.next.call(null,seq__12291);
var command = first__12292;
var first__12292__$1 = cljs.core.first.call(null,seq__12291__$1);
var seq__12291__$2 = cljs.core.next.call(null,seq__12291__$1);
var opts = first__12292__$1;
var children = seq__12291__$2;
var map__12293 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.img_defaults);
var map__12293__$1 = ((((!((map__12293 == null)))?((((map__12293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12293):map__12293);
var opts__$1 = map__12293__$1;
var x = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var scale_x = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var swidth = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"swidth","swidth",-976864420));
var sheight = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"sheight","sheight",1322250621));
var height = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sy = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var width = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var scale_y = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var sx = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var value__$1 = (function (){var or__6873__auto__ = value;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),name], null));
}
})();
var swidth__$1 = (function (){var or__6873__auto__ = swidth;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return value__$1.width;
}
})();
var sheight__$1 = (function (){var or__6873__auto__ = sheight;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return value__$1.height;
}
})();
renderer.scale(scale_x,scale_y);

renderer.image(value__$1,sx,sy,swidth__$1,sheight__$1,x,y,(function (){var or__6873__auto__ = width;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return swidth__$1;
}
})(),(function (){var or__6873__auto__ = height;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return sheight__$1;
}
})());

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"animation","animation",-1248293244),(function (renderer,content,parent_opts,state){
var vec__12295 = content;
var seq__12296 = cljs.core.seq.call(null,vec__12295);
var first__12297 = cljs.core.first.call(null,seq__12296);
var seq__12296__$1 = cljs.core.next.call(null,seq__12296);
var command = first__12297;
var first__12297__$1 = cljs.core.first.call(null,seq__12296__$1);
var seq__12296__$2 = cljs.core.next.call(null,seq__12296__$1);
var opts = first__12297__$1;
var children = seq__12296__$2;
var map__12298 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12298__$1 = ((((!((map__12298 == null)))?((((map__12298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12298):map__12298);
var opts__$1 = map__12298__$1;
var duration = cljs.core.get.call(null,map__12298__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var total_time = new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var images = cljs.core.vec.call(null,children);
var cycle_time = cljs.core.mod.call(null,total_time,(duration * cljs.core.count.call(null,images)));
var index = ((cycle_time / duration) | (0));
var image = cljs.core.get.call(null,images,index);
return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,image,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (renderer,content,parent_opts,state){
var vec__12300 = content;
var seq__12301 = cljs.core.seq.call(null,vec__12300);
var first__12302 = cljs.core.first.call(null,seq__12301);
var seq__12301__$1 = cljs.core.next.call(null,seq__12301);
var command = first__12302;
var first__12302__$1 = cljs.core.first.call(null,seq__12301__$1);
var seq__12301__$2 = cljs.core.next.call(null,seq__12301__$1);
var opts = first__12302__$1;
var children = seq__12301__$2;
var map__12303 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12303__$1 = ((((!((map__12303 == null)))?((((map__12303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12303):map__12303);
var opts__$1 = map__12303__$1;
var grayscale = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var fill_fn = (cljs.core.truth_(grayscale)?((function (vec__12300,seq__12301,first__12302,seq__12301__$1,command,first__12302__$1,seq__12301__$2,opts,children,map__12303,map__12303__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.fill(grayscale);
});})(vec__12300,seq__12301,first__12302,seq__12301__$1,command,first__12302__$1,seq__12301__$2,opts,children,map__12303,map__12303__$1,opts__$1,grayscale,color,colors))
:(cljs.core.truth_(color)?((function (vec__12300,seq__12301,first__12302,seq__12301__$1,command,first__12302__$1,seq__12301__$2,opts,children,map__12303,map__12303__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.fill(color);
});})(vec__12300,seq__12301,first__12302,seq__12301__$1,command,first__12302__$1,seq__12301__$2,opts,children,map__12303,map__12303__$1,opts__$1,grayscale,color,colors))
:(cljs.core.truth_(colors)?(function (){var vec__12305 = colors;
var n1 = cljs.core.nth.call(null,vec__12305,(0),null);
var n2 = cljs.core.nth.call(null,vec__12305,(1),null);
var n3 = cljs.core.nth.call(null,vec__12305,(2),null);
return ((function (vec__12305,n1,n2,n3,vec__12300,seq__12301,first__12302,seq__12301__$1,command,first__12302__$1,seq__12301__$2,opts,children,map__12303,map__12303__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.fill(n1,n2,n3);
});
;})(vec__12305,n1,n2,n3,vec__12300,seq__12301,first__12302,seq__12301__$1,command,first__12302__$1,seq__12301__$2,opts,children,map__12303,map__12303__$1,opts__$1,grayscale,color,colors))
})():((function (vec__12300,seq__12301,first__12302,seq__12301__$1,command,first__12302__$1,seq__12301__$2,opts,children,map__12303,map__12303__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.noFill();
});})(vec__12300,seq__12301,first__12302,seq__12301__$1,command,first__12302__$1,seq__12301__$2,opts,children,map__12303,map__12303__$1,opts__$1,grayscale,color,colors))

)));
fill_fn.call(null);

play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"fill-fn","fill-fn",-323742174),fill_fn),state);

renderer.fill("white");

renderer._renderer._fillSet = false;

var temp__4657__auto__ = new cljs.core.Keyword(null,"fill-fn","fill-fn",-323742174).cljs$core$IFn$_invoke$arity$1(parent_opts);
if(cljs.core.truth_(temp__4657__auto__)){
var fill_fn__$1 = temp__4657__auto__;
return fill_fn__$1.call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (renderer,content,parent_opts,state){
var vec__12308 = content;
var seq__12309 = cljs.core.seq.call(null,vec__12308);
var first__12310 = cljs.core.first.call(null,seq__12309);
var seq__12309__$1 = cljs.core.next.call(null,seq__12309);
var command = first__12310;
var first__12310__$1 = cljs.core.first.call(null,seq__12309__$1);
var seq__12309__$2 = cljs.core.next.call(null,seq__12309__$1);
var opts = first__12310__$1;
var children = seq__12309__$2;
var map__12311 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12311__$1 = ((((!((map__12311 == null)))?((((map__12311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12311):map__12311);
var opts__$1 = map__12311__$1;
var grayscale = cljs.core.get.call(null,map__12311__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__12311__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__12311__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var stroke_fn = (cljs.core.truth_(grayscale)?((function (vec__12308,seq__12309,first__12310,seq__12309__$1,command,first__12310__$1,seq__12309__$2,opts,children,map__12311,map__12311__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.stroke(grayscale);
});})(vec__12308,seq__12309,first__12310,seq__12309__$1,command,first__12310__$1,seq__12309__$2,opts,children,map__12311,map__12311__$1,opts__$1,grayscale,color,colors))
:(cljs.core.truth_(color)?((function (vec__12308,seq__12309,first__12310,seq__12309__$1,command,first__12310__$1,seq__12309__$2,opts,children,map__12311,map__12311__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.stroke(color);
});})(vec__12308,seq__12309,first__12310,seq__12309__$1,command,first__12310__$1,seq__12309__$2,opts,children,map__12311,map__12311__$1,opts__$1,grayscale,color,colors))
:(cljs.core.truth_(colors)?(function (){var vec__12313 = colors;
var n1 = cljs.core.nth.call(null,vec__12313,(0),null);
var n2 = cljs.core.nth.call(null,vec__12313,(1),null);
var n3 = cljs.core.nth.call(null,vec__12313,(2),null);
return ((function (vec__12313,n1,n2,n3,vec__12308,seq__12309,first__12310,seq__12309__$1,command,first__12310__$1,seq__12309__$2,opts,children,map__12311,map__12311__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.stroke(n1,n2,n3);
});
;})(vec__12313,n1,n2,n3,vec__12308,seq__12309,first__12310,seq__12309__$1,command,first__12310__$1,seq__12309__$2,opts,children,map__12311,map__12311__$1,opts__$1,grayscale,color,colors))
})():((function (vec__12308,seq__12309,first__12310,seq__12309__$1,command,first__12310__$1,seq__12309__$2,opts,children,map__12311,map__12311__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.noStroke();
});})(vec__12308,seq__12309,first__12310,seq__12309__$1,command,first__12310__$1,seq__12309__$2,opts,children,map__12311,map__12311__$1,opts__$1,grayscale,color,colors))

)));
stroke_fn.call(null);

play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"stroke-fn","stroke-fn",636867052),stroke_fn),state);

renderer.stroke("black");

renderer._renderer._strokeSet = false;

var temp__4657__auto__ = new cljs.core.Keyword(null,"stroke-fn","stroke-fn",636867052).cljs$core$IFn$_invoke$arity$1(parent_opts);
if(cljs.core.truth_(temp__4657__auto__)){
var stroke_fn__$1 = temp__4657__auto__;
return stroke_fn__$1.call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"bezier","bezier",-539235327),(function (renderer,content,parent_opts,state){
var vec__12316 = content;
var seq__12317 = cljs.core.seq.call(null,vec__12316);
var first__12318 = cljs.core.first.call(null,seq__12317);
var seq__12317__$1 = cljs.core.next.call(null,seq__12317);
var command = first__12318;
var first__12318__$1 = cljs.core.first.call(null,seq__12317__$1);
var seq__12317__$2 = cljs.core.next.call(null,seq__12317__$1);
var opts = first__12318__$1;
var children = seq__12317__$2;
var opts__$1 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12319 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12319__$1 = ((((!((map__12319 == null)))?((((map__12319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12319):map__12319);
var opts__$2 = map__12319__$1;
var x1 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__6861__auto__ = x1;
if(cljs.core.truth_(and__6861__auto__)){
var and__6861__auto____$1 = y1;
if(cljs.core.truth_(and__6861__auto____$1)){
var and__6861__auto____$2 = x2;
if(cljs.core.truth_(and__6861__auto____$2)){
var and__6861__auto____$3 = y2;
if(cljs.core.truth_(and__6861__auto____$3)){
var and__6861__auto____$4 = x3;
if(cljs.core.truth_(and__6861__auto____$4)){
var and__6861__auto____$5 = y3;
if(cljs.core.truth_(and__6861__auto____$5)){
var and__6861__auto____$6 = x4;
if(cljs.core.truth_(and__6861__auto____$6)){
return y4;
} else {
return and__6861__auto____$6;
}
} else {
return and__6861__auto____$5;
}
} else {
return and__6861__auto____$4;
}
} else {
return and__6861__auto____$3;
}
} else {
return and__6861__auto____$2;
}
} else {
return and__6861__auto____$1;
}
} else {
return and__6861__auto__;
}
})())){
renderer.bezier(x1,y1,x2,y2,x3,y3,x4,y4);
} else {
if(cljs.core.truth_((function (){var and__6861__auto__ = z1;
if(cljs.core.truth_(and__6861__auto__)){
var and__6861__auto____$1 = z2;
if(cljs.core.truth_(and__6861__auto____$1)){
var and__6861__auto____$2 = z3;
if(cljs.core.truth_(and__6861__auto____$2)){
return z4;
} else {
return and__6861__auto____$2;
}
} else {
return and__6861__auto____$1;
}
} else {
return and__6861__auto__;
}
})())){
renderer.bezier(z1,z2,z3,z4);
} else {
throw "Invalid args for bezier";

}
}

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$2,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"curve","curve",-569677866),(function (renderer,content,parent_opts,state){
var vec__12321 = content;
var seq__12322 = cljs.core.seq.call(null,vec__12321);
var first__12323 = cljs.core.first.call(null,seq__12322);
var seq__12322__$1 = cljs.core.next.call(null,seq__12322);
var command = first__12323;
var first__12323__$1 = cljs.core.first.call(null,seq__12322__$1);
var seq__12322__$2 = cljs.core.next.call(null,seq__12322__$1);
var opts = first__12323__$1;
var children = seq__12322__$2;
var opts__$1 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12324 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12324__$1 = ((((!((map__12324 == null)))?((((map__12324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12324):map__12324);
var opts__$2 = map__12324__$1;
var x1 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__6861__auto__ = x1;
if(cljs.core.truth_(and__6861__auto__)){
var and__6861__auto____$1 = y1;
if(cljs.core.truth_(and__6861__auto____$1)){
var and__6861__auto____$2 = x2;
if(cljs.core.truth_(and__6861__auto____$2)){
var and__6861__auto____$3 = y2;
if(cljs.core.truth_(and__6861__auto____$3)){
var and__6861__auto____$4 = x3;
if(cljs.core.truth_(and__6861__auto____$4)){
var and__6861__auto____$5 = y3;
if(cljs.core.truth_(and__6861__auto____$5)){
var and__6861__auto____$6 = x4;
if(cljs.core.truth_(and__6861__auto____$6)){
return y4;
} else {
return and__6861__auto____$6;
}
} else {
return and__6861__auto____$5;
}
} else {
return and__6861__auto____$4;
}
} else {
return and__6861__auto____$3;
}
} else {
return and__6861__auto____$2;
}
} else {
return and__6861__auto____$1;
}
} else {
return and__6861__auto__;
}
})())){
renderer.curve(x1,y1,x2,y2,x3,y3,x4,y4);
} else {
if(cljs.core.truth_((function (){var and__6861__auto__ = z1;
if(cljs.core.truth_(and__6861__auto__)){
var and__6861__auto____$1 = z2;
if(cljs.core.truth_(and__6861__auto____$1)){
var and__6861__auto____$2 = z3;
if(cljs.core.truth_(and__6861__auto____$2)){
return z4;
} else {
return and__6861__auto____$2;
}
} else {
return and__6861__auto____$1;
}
} else {
return and__6861__auto__;
}
})())){
renderer.curve(z1,z2,z3,z4);
} else {
throw "Invalid args for curve";

}
}

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$2,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"rgb","rgb",1432123467),(function (renderer,content,parent_opts,state){
var vec__12326 = content;
var seq__12327 = cljs.core.seq.call(null,vec__12326);
var first__12328 = cljs.core.first.call(null,seq__12327);
var seq__12327__$1 = cljs.core.next.call(null,seq__12327);
var command = first__12328;
var first__12328__$1 = cljs.core.first.call(null,seq__12327__$1);
var seq__12327__$2 = cljs.core.next.call(null,seq__12327__$1);
var opts = first__12328__$1;
var children = seq__12327__$2;
var map__12329 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.rgb_defaults);
var map__12329__$1 = ((((!((map__12329 == null)))?((((map__12329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12329):map__12329);
var opts__$1 = map__12329__$1;
var max_r = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
var color_fn = ((function (vec__12326,seq__12327,first__12328,seq__12327__$1,command,first__12328__$1,seq__12327__$2,opts,children,map__12329,map__12329__$1,opts__$1,max_r,max_g,max_b,max_a){
return (function (){
return renderer.colorMode(renderer.RGB,max_r,max_g,max_b,max_a);
});})(vec__12326,seq__12327,first__12328,seq__12327__$1,command,first__12328__$1,seq__12327__$2,opts,children,map__12329,map__12329__$1,opts__$1,max_r,max_g,max_b,max_a))
;
color_fn.call(null);

play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"color-fn","color-fn",1518098073),color_fn),state);

var map__12331_12333 = play_cljs.sketch.rgb_defaults;
var map__12331_12334__$1 = ((((!((map__12331_12333 == null)))?((((map__12331_12333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12331_12333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12331_12333):map__12331_12333);
var max_r_12335__$1 = cljs.core.get.call(null,map__12331_12334__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g_12336__$1 = cljs.core.get.call(null,map__12331_12334__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b_12337__$1 = cljs.core.get.call(null,map__12331_12334__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a_12338__$1 = cljs.core.get.call(null,map__12331_12334__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.colorMode(renderer.RGB,max_r_12335__$1,max_g_12336__$1,max_b_12337__$1,max_a_12338__$1);

var temp__4657__auto__ = new cljs.core.Keyword(null,"color-fn","color-fn",1518098073).cljs$core$IFn$_invoke$arity$1(parent_opts);
if(cljs.core.truth_(temp__4657__auto__)){
var color_fn__$1 = temp__4657__auto__;
return color_fn__$1.call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(function (renderer,content,parent_opts,state){
var vec__12339 = content;
var seq__12340 = cljs.core.seq.call(null,vec__12339);
var first__12341 = cljs.core.first.call(null,seq__12340);
var seq__12340__$1 = cljs.core.next.call(null,seq__12340);
var command = first__12341;
var first__12341__$1 = cljs.core.first.call(null,seq__12340__$1);
var seq__12340__$2 = cljs.core.next.call(null,seq__12340__$1);
var opts = first__12341__$1;
var children = seq__12340__$2;
var map__12342 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.hsb_defaults);
var map__12342__$1 = ((((!((map__12342 == null)))?((((map__12342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12342):map__12342);
var opts__$1 = map__12342__$1;
var max_h = cljs.core.get.call(null,map__12342__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__12342__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_b = cljs.core.get.call(null,map__12342__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__12342__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
var color_fn = ((function (vec__12339,seq__12340,first__12341,seq__12340__$1,command,first__12341__$1,seq__12340__$2,opts,children,map__12342,map__12342__$1,opts__$1,max_h,max_s,max_b,max_a){
return (function (){
return renderer.colorMode(renderer.HSB,max_h,max_s,max_b,max_a);
});})(vec__12339,seq__12340,first__12341,seq__12340__$1,command,first__12341__$1,seq__12340__$2,opts,children,map__12342,map__12342__$1,opts__$1,max_h,max_s,max_b,max_a))
;
color_fn.call(null);

play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"color-fn","color-fn",1518098073),color_fn),state);

var map__12344_12346 = play_cljs.sketch.rgb_defaults;
var map__12344_12347__$1 = ((((!((map__12344_12346 == null)))?((((map__12344_12346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12344_12346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12344_12346):map__12344_12346);
var max_r_12348 = cljs.core.get.call(null,map__12344_12347__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g_12349 = cljs.core.get.call(null,map__12344_12347__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b_12350__$1 = cljs.core.get.call(null,map__12344_12347__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a_12351__$1 = cljs.core.get.call(null,map__12344_12347__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.colorMode(renderer.RGB,max_r_12348,max_g_12349,max_b_12350__$1,max_a_12351__$1);

var temp__4657__auto__ = new cljs.core.Keyword(null,"color-fn","color-fn",1518098073).cljs$core$IFn$_invoke$arity$1(parent_opts);
if(cljs.core.truth_(temp__4657__auto__)){
var color_fn__$1 = temp__4657__auto__;
return color_fn__$1.call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"tiled-map","tiled-map",1087696322),(function (renderer,content,parent_opts,state){
var vec__12352 = content;
var seq__12353 = cljs.core.seq.call(null,vec__12352);
var first__12354 = cljs.core.first.call(null,seq__12353);
var seq__12353__$1 = cljs.core.next.call(null,seq__12353);
var command = first__12354;
var first__12354__$1 = cljs.core.first.call(null,seq__12353__$1);
var seq__12353__$2 = cljs.core.next.call(null,seq__12353__$1);
var opts = first__12354__$1;
var children = seq__12353__$2;
var map__12355 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var map__12355__$1 = ((((!((map__12355 == null)))?((((map__12355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12355):map__12355);
var opts__$1 = map__12355__$1;
var value = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var x = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value__$1 = (function (){var or__6873__auto__ = value;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),name], null));
}
})();
value__$1.draw(x,y);

return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (renderer,content,parent_opts,state){
var vec__12357 = content;
var seq__12358 = cljs.core.seq.call(null,vec__12357);
var first__12359 = cljs.core.first.call(null,seq__12358);
var seq__12358__$1 = cljs.core.next.call(null,seq__12358);
var command = first__12359;
var first__12359__$1 = cljs.core.first.call(null,seq__12358__$1);
var seq__12358__$2 = cljs.core.next.call(null,seq__12358__$1);
var opts = first__12359__$1;
var children = seq__12358__$2;
var opts__$1 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":shape requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginShape();

var G__12363_12370 = points;
var vec__12364_12371 = G__12363_12370;
var seq__12365_12372 = cljs.core.seq.call(null,vec__12364_12371);
var first__12366_12373 = cljs.core.first.call(null,seq__12365_12372);
var seq__12365_12374__$1 = cljs.core.next.call(null,seq__12365_12372);
var x_12375 = first__12366_12373;
var first__12366_12376__$1 = cljs.core.first.call(null,seq__12365_12374__$1);
var seq__12365_12377__$2 = cljs.core.next.call(null,seq__12365_12374__$1);
var y_12378 = first__12366_12376__$1;
var rest_12379 = seq__12365_12377__$2;
var G__12363_12380__$1 = G__12363_12370;
while(true){
var vec__12367_12381 = G__12363_12380__$1;
var seq__12368_12382 = cljs.core.seq.call(null,vec__12367_12381);
var first__12369_12383 = cljs.core.first.call(null,seq__12368_12382);
var seq__12368_12384__$1 = cljs.core.next.call(null,seq__12368_12382);
var x_12385__$1 = first__12369_12383;
var first__12369_12386__$1 = cljs.core.first.call(null,seq__12368_12384__$1);
var seq__12368_12387__$2 = cljs.core.next.call(null,seq__12368_12384__$1);
var y_12388__$1 = first__12369_12386__$1;
var rest_12389__$1 = seq__12368_12387__$2;
renderer.vertex(x_12385__$1,y_12388__$1);

if(rest_12389__$1){
var G__12390 = rest_12389__$1;
G__12363_12380__$1 = G__12390;
continue;
} else {
}
break;
}

play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);

return renderer.endShape(renderer.CLOSE);

}
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"contour","contour",-943960423),(function (renderer,content,parent_opts,state){
var vec__12391 = content;
var seq__12392 = cljs.core.seq.call(null,vec__12391);
var first__12393 = cljs.core.first.call(null,seq__12392);
var seq__12392__$1 = cljs.core.next.call(null,seq__12392);
var command = first__12393;
var first__12393__$1 = cljs.core.first.call(null,seq__12392__$1);
var seq__12392__$2 = cljs.core.next.call(null,seq__12392__$1);
var opts = first__12393__$1;
var children = seq__12392__$2;
var opts__$1 = play_cljs.sketch.update_opts.call(null,opts,parent_opts,play_cljs.sketch.basic_defaults);
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":contour requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginContour();

var G__12397_12404 = points;
var vec__12398_12405 = G__12397_12404;
var seq__12399_12406 = cljs.core.seq.call(null,vec__12398_12405);
var first__12400_12407 = cljs.core.first.call(null,seq__12399_12406);
var seq__12399_12408__$1 = cljs.core.next.call(null,seq__12399_12406);
var x_12409 = first__12400_12407;
var first__12400_12410__$1 = cljs.core.first.call(null,seq__12399_12408__$1);
var seq__12399_12411__$2 = cljs.core.next.call(null,seq__12399_12408__$1);
var y_12412 = first__12400_12410__$1;
var rest_12413 = seq__12399_12411__$2;
var G__12397_12414__$1 = G__12397_12404;
while(true){
var vec__12401_12415 = G__12397_12414__$1;
var seq__12402_12416 = cljs.core.seq.call(null,vec__12401_12415);
var first__12403_12417 = cljs.core.first.call(null,seq__12402_12416);
var seq__12402_12418__$1 = cljs.core.next.call(null,seq__12402_12416);
var x_12419__$1 = first__12403_12417;
var first__12403_12420__$1 = cljs.core.first.call(null,seq__12402_12418__$1);
var seq__12402_12421__$2 = cljs.core.next.call(null,seq__12402_12418__$1);
var y_12422__$1 = first__12403_12420__$1;
var rest_12423__$1 = seq__12402_12421__$2;
renderer.vertex(x_12419__$1,y_12422__$1);

if(rest_12423__$1){
var G__12424 = rest_12423__$1;
G__12397_12414__$1 = G__12424;
continue;
} else {
}
break;
}

play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,children,opts__$1,state);

return renderer.endContour(renderer.CLOSE);

}
}));
cljs.core._add_method.call(null,play_cljs.sketch.draw_sketch_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (renderer,content,parent_opts,state){
if(cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,content))){
return cljs.core.run_BANG_.call(null,(function (p1__12425_SHARP_){
return play_cljs.sketch.draw_sketch_BANG_.call(null,renderer,p1__12425_SHARP_,parent_opts,state);
}),content);
} else {
if((cljs.core.first.call(null,content) == null)){
return null;
} else {
throw (new Error([cljs.core.str("Invalid sketch command: "),cljs.core.str(cljs.core.pr_str.call(null,content))].join('')));

}
}
}));
