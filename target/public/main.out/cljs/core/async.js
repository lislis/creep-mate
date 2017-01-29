// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13857 = [];
var len__7981__auto___13863 = arguments.length;
var i__7982__auto___13864 = (0);
while(true){
if((i__7982__auto___13864 < len__7981__auto___13863)){
args13857.push((arguments[i__7982__auto___13864]));

var G__13865 = (i__7982__auto___13864 + (1));
i__7982__auto___13864 = G__13865;
continue;
} else {
}
break;
}

var G__13859 = args13857.length;
switch (G__13859) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13857.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13860 = (function (f,blockable,meta13861){
this.f = f;
this.blockable = blockable;
this.meta13861 = meta13861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13862,meta13861__$1){
var self__ = this;
var _13862__$1 = this;
return (new cljs.core.async.t_cljs$core$async13860(self__.f,self__.blockable,meta13861__$1));
});

cljs.core.async.t_cljs$core$async13860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13862){
var self__ = this;
var _13862__$1 = this;
return self__.meta13861;
});

cljs.core.async.t_cljs$core$async13860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13861","meta13861",1112540471,null)], null);
});

cljs.core.async.t_cljs$core$async13860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13860";

cljs.core.async.t_cljs$core$async13860.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async13860");
});

cljs.core.async.__GT_t_cljs$core$async13860 = (function cljs$core$async$__GT_t_cljs$core$async13860(f__$1,blockable__$1,meta13861){
return (new cljs.core.async.t_cljs$core$async13860(f__$1,blockable__$1,meta13861));
});

}

return (new cljs.core.async.t_cljs$core$async13860(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13869 = [];
var len__7981__auto___13872 = arguments.length;
var i__7982__auto___13873 = (0);
while(true){
if((i__7982__auto___13873 < len__7981__auto___13872)){
args13869.push((arguments[i__7982__auto___13873]));

var G__13874 = (i__7982__auto___13873 + (1));
i__7982__auto___13873 = G__13874;
continue;
} else {
}
break;
}

var G__13871 = args13869.length;
switch (G__13871) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13869.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13876 = [];
var len__7981__auto___13879 = arguments.length;
var i__7982__auto___13880 = (0);
while(true){
if((i__7982__auto___13880 < len__7981__auto___13879)){
args13876.push((arguments[i__7982__auto___13880]));

var G__13881 = (i__7982__auto___13880 + (1));
i__7982__auto___13880 = G__13881;
continue;
} else {
}
break;
}

var G__13878 = args13876.length;
switch (G__13878) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13876.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13883 = [];
var len__7981__auto___13886 = arguments.length;
var i__7982__auto___13887 = (0);
while(true){
if((i__7982__auto___13887 < len__7981__auto___13886)){
args13883.push((arguments[i__7982__auto___13887]));

var G__13888 = (i__7982__auto___13887 + (1));
i__7982__auto___13887 = G__13888;
continue;
} else {
}
break;
}

var G__13885 = args13883.length;
switch (G__13885) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13883.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13890 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13890);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13890,ret){
return (function (){
return fn1.call(null,val_13890);
});})(val_13890,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13891 = [];
var len__7981__auto___13894 = arguments.length;
var i__7982__auto___13895 = (0);
while(true){
if((i__7982__auto___13895 < len__7981__auto___13894)){
args13891.push((arguments[i__7982__auto___13895]));

var G__13896 = (i__7982__auto___13895 + (1));
i__7982__auto___13895 = G__13896;
continue;
} else {
}
break;
}

var G__13893 = args13891.length;
switch (G__13893) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13891.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7791__auto___13898 = n;
var x_13899 = (0);
while(true){
if((x_13899 < n__7791__auto___13898)){
(a[x_13899] = (0));

var G__13900 = (x_13899 + (1));
x_13899 = G__13900;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13901 = (i + (1));
i = G__13901;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13905 = (function (flag,meta13906){
this.flag = flag;
this.meta13906 = meta13906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13907,meta13906__$1){
var self__ = this;
var _13907__$1 = this;
return (new cljs.core.async.t_cljs$core$async13905(self__.flag,meta13906__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13907){
var self__ = this;
var _13907__$1 = this;
return self__.meta13906;
});})(flag))
;

cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13905.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13906","meta13906",-1392303832,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13905";

cljs.core.async.t_cljs$core$async13905.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async13905");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13905 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13905(flag__$1,meta13906){
return (new cljs.core.async.t_cljs$core$async13905(flag__$1,meta13906));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13905(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13911 = (function (flag,cb,meta13912){
this.flag = flag;
this.cb = cb;
this.meta13912 = meta13912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13913,meta13912__$1){
var self__ = this;
var _13913__$1 = this;
return (new cljs.core.async.t_cljs$core$async13911(self__.flag,self__.cb,meta13912__$1));
});

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13913){
var self__ = this;
var _13913__$1 = this;
return self__.meta13912;
});

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13912","meta13912",793611483,null)], null);
});

cljs.core.async.t_cljs$core$async13911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13911";

cljs.core.async.t_cljs$core$async13911.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async13911");
});

cljs.core.async.__GT_t_cljs$core$async13911 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13911(flag__$1,cb__$1,meta13912){
return (new cljs.core.async.t_cljs$core$async13911(flag__$1,cb__$1,meta13912));
});

}

return (new cljs.core.async.t_cljs$core$async13911(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13914_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13914_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13915_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13915_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6873__auto__ = wport;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13916 = (i + (1));
i = G__13916;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6873__auto__ = ret;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6861__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6861__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6861__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___13922 = arguments.length;
var i__7982__auto___13923 = (0);
while(true){
if((i__7982__auto___13923 < len__7981__auto___13922)){
args__7988__auto__.push((arguments[i__7982__auto___13923]));

var G__13924 = (i__7982__auto___13923 + (1));
i__7982__auto___13923 = G__13924;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((1) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7989__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13919){
var map__13920 = p__13919;
var map__13920__$1 = ((((!((map__13920 == null)))?((((map__13920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13920):map__13920);
var opts = map__13920__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13917){
var G__13918 = cljs.core.first.call(null,seq13917);
var seq13917__$1 = cljs.core.next.call(null,seq13917);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13918,seq13917__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13925 = [];
var len__7981__auto___13975 = arguments.length;
var i__7982__auto___13976 = (0);
while(true){
if((i__7982__auto___13976 < len__7981__auto___13975)){
args13925.push((arguments[i__7982__auto___13976]));

var G__13977 = (i__7982__auto___13976 + (1));
i__7982__auto___13976 = G__13977;
continue;
} else {
}
break;
}

var G__13927 = args13925.length;
switch (G__13927) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13925.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13812__auto___13979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___13979){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___13979){
return (function (state_13951){
var state_val_13952 = (state_13951[(1)]);
if((state_val_13952 === (7))){
var inst_13947 = (state_13951[(2)]);
var state_13951__$1 = state_13951;
var statearr_13953_13980 = state_13951__$1;
(statearr_13953_13980[(2)] = inst_13947);

(statearr_13953_13980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (1))){
var state_13951__$1 = state_13951;
var statearr_13954_13981 = state_13951__$1;
(statearr_13954_13981[(2)] = null);

(statearr_13954_13981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (4))){
var inst_13930 = (state_13951[(7)]);
var inst_13930__$1 = (state_13951[(2)]);
var inst_13931 = (inst_13930__$1 == null);
var state_13951__$1 = (function (){var statearr_13955 = state_13951;
(statearr_13955[(7)] = inst_13930__$1);

return statearr_13955;
})();
if(cljs.core.truth_(inst_13931)){
var statearr_13956_13982 = state_13951__$1;
(statearr_13956_13982[(1)] = (5));

} else {
var statearr_13957_13983 = state_13951__$1;
(statearr_13957_13983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (13))){
var state_13951__$1 = state_13951;
var statearr_13958_13984 = state_13951__$1;
(statearr_13958_13984[(2)] = null);

(statearr_13958_13984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (6))){
var inst_13930 = (state_13951[(7)]);
var state_13951__$1 = state_13951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13951__$1,(11),to,inst_13930);
} else {
if((state_val_13952 === (3))){
var inst_13949 = (state_13951[(2)]);
var state_13951__$1 = state_13951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13951__$1,inst_13949);
} else {
if((state_val_13952 === (12))){
var state_13951__$1 = state_13951;
var statearr_13959_13985 = state_13951__$1;
(statearr_13959_13985[(2)] = null);

(statearr_13959_13985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (2))){
var state_13951__$1 = state_13951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13951__$1,(4),from);
} else {
if((state_val_13952 === (11))){
var inst_13940 = (state_13951[(2)]);
var state_13951__$1 = state_13951;
if(cljs.core.truth_(inst_13940)){
var statearr_13960_13986 = state_13951__$1;
(statearr_13960_13986[(1)] = (12));

} else {
var statearr_13961_13987 = state_13951__$1;
(statearr_13961_13987[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (9))){
var state_13951__$1 = state_13951;
var statearr_13962_13988 = state_13951__$1;
(statearr_13962_13988[(2)] = null);

(statearr_13962_13988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (5))){
var state_13951__$1 = state_13951;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13963_13989 = state_13951__$1;
(statearr_13963_13989[(1)] = (8));

} else {
var statearr_13964_13990 = state_13951__$1;
(statearr_13964_13990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (14))){
var inst_13945 = (state_13951[(2)]);
var state_13951__$1 = state_13951;
var statearr_13965_13991 = state_13951__$1;
(statearr_13965_13991[(2)] = inst_13945);

(statearr_13965_13991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (10))){
var inst_13937 = (state_13951[(2)]);
var state_13951__$1 = state_13951;
var statearr_13966_13992 = state_13951__$1;
(statearr_13966_13992[(2)] = inst_13937);

(statearr_13966_13992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13952 === (8))){
var inst_13934 = cljs.core.async.close_BANG_.call(null,to);
var state_13951__$1 = state_13951;
var statearr_13967_13993 = state_13951__$1;
(statearr_13967_13993[(2)] = inst_13934);

(statearr_13967_13993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto___13979))
;
return ((function (switch__13700__auto__,c__13812__auto___13979){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_13971 = [null,null,null,null,null,null,null,null];
(statearr_13971[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_13971[(1)] = (1));

return statearr_13971;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_13951){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_13951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e13972){if((e13972 instanceof Object)){
var ex__13704__auto__ = e13972;
var statearr_13973_13994 = state_13951;
(statearr_13973_13994[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13995 = state_13951;
state_13951 = G__13995;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_13951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_13951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___13979))
})();
var state__13814__auto__ = (function (){var statearr_13974 = f__13813__auto__.call(null);
(statearr_13974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___13979);

return statearr_13974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___13979))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14183){
var vec__14184 = p__14183;
var v = cljs.core.nth.call(null,vec__14184,(0),null);
var p = cljs.core.nth.call(null,vec__14184,(1),null);
var job = vec__14184;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13812__auto___14370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___14370,res,vec__14184,v,p,job,jobs,results){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___14370,res,vec__14184,v,p,job,jobs,results){
return (function (state_14191){
var state_val_14192 = (state_14191[(1)]);
if((state_val_14192 === (1))){
var state_14191__$1 = state_14191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14191__$1,(2),res,v);
} else {
if((state_val_14192 === (2))){
var inst_14188 = (state_14191[(2)]);
var inst_14189 = cljs.core.async.close_BANG_.call(null,res);
var state_14191__$1 = (function (){var statearr_14193 = state_14191;
(statearr_14193[(7)] = inst_14188);

return statearr_14193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14191__$1,inst_14189);
} else {
return null;
}
}
});})(c__13812__auto___14370,res,vec__14184,v,p,job,jobs,results))
;
return ((function (switch__13700__auto__,c__13812__auto___14370,res,vec__14184,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0 = (function (){
var statearr_14197 = [null,null,null,null,null,null,null,null];
(statearr_14197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__);

(statearr_14197[(1)] = (1));

return statearr_14197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1 = (function (state_14191){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14198){if((e14198 instanceof Object)){
var ex__13704__auto__ = e14198;
var statearr_14199_14371 = state_14191;
(statearr_14199_14371[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14372 = state_14191;
state_14191 = G__14372;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = function(state_14191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1.call(this,state_14191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___14370,res,vec__14184,v,p,job,jobs,results))
})();
var state__13814__auto__ = (function (){var statearr_14200 = f__13813__auto__.call(null);
(statearr_14200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___14370);

return statearr_14200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___14370,res,vec__14184,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14201){
var vec__14202 = p__14201;
var v = cljs.core.nth.call(null,vec__14202,(0),null);
var p = cljs.core.nth.call(null,vec__14202,(1),null);
var job = vec__14202;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7791__auto___14373 = n;
var __14374 = (0);
while(true){
if((__14374 < n__7791__auto___14373)){
var G__14205_14375 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14205_14375) {
case "compute":
var c__13812__auto___14377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14374,c__13812__auto___14377,G__14205_14375,n__7791__auto___14373,jobs,results,process,async){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (__14374,c__13812__auto___14377,G__14205_14375,n__7791__auto___14373,jobs,results,process,async){
return (function (state_14218){
var state_val_14219 = (state_14218[(1)]);
if((state_val_14219 === (1))){
var state_14218__$1 = state_14218;
var statearr_14220_14378 = state_14218__$1;
(statearr_14220_14378[(2)] = null);

(statearr_14220_14378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14219 === (2))){
var state_14218__$1 = state_14218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14218__$1,(4),jobs);
} else {
if((state_val_14219 === (3))){
var inst_14216 = (state_14218[(2)]);
var state_14218__$1 = state_14218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14218__$1,inst_14216);
} else {
if((state_val_14219 === (4))){
var inst_14208 = (state_14218[(2)]);
var inst_14209 = process.call(null,inst_14208);
var state_14218__$1 = state_14218;
if(cljs.core.truth_(inst_14209)){
var statearr_14221_14379 = state_14218__$1;
(statearr_14221_14379[(1)] = (5));

} else {
var statearr_14222_14380 = state_14218__$1;
(statearr_14222_14380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14219 === (5))){
var state_14218__$1 = state_14218;
var statearr_14223_14381 = state_14218__$1;
(statearr_14223_14381[(2)] = null);

(statearr_14223_14381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14219 === (6))){
var state_14218__$1 = state_14218;
var statearr_14224_14382 = state_14218__$1;
(statearr_14224_14382[(2)] = null);

(statearr_14224_14382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14219 === (7))){
var inst_14214 = (state_14218[(2)]);
var state_14218__$1 = state_14218;
var statearr_14225_14383 = state_14218__$1;
(statearr_14225_14383[(2)] = inst_14214);

(statearr_14225_14383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14374,c__13812__auto___14377,G__14205_14375,n__7791__auto___14373,jobs,results,process,async))
;
return ((function (__14374,switch__13700__auto__,c__13812__auto___14377,G__14205_14375,n__7791__auto___14373,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0 = (function (){
var statearr_14229 = [null,null,null,null,null,null,null];
(statearr_14229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__);

(statearr_14229[(1)] = (1));

return statearr_14229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1 = (function (state_14218){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14230){if((e14230 instanceof Object)){
var ex__13704__auto__ = e14230;
var statearr_14231_14384 = state_14218;
(statearr_14231_14384[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14385 = state_14218;
state_14218 = G__14385;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = function(state_14218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1.call(this,state_14218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__;
})()
;})(__14374,switch__13700__auto__,c__13812__auto___14377,G__14205_14375,n__7791__auto___14373,jobs,results,process,async))
})();
var state__13814__auto__ = (function (){var statearr_14232 = f__13813__auto__.call(null);
(statearr_14232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___14377);

return statearr_14232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(__14374,c__13812__auto___14377,G__14205_14375,n__7791__auto___14373,jobs,results,process,async))
);


break;
case "async":
var c__13812__auto___14386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14374,c__13812__auto___14386,G__14205_14375,n__7791__auto___14373,jobs,results,process,async){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (__14374,c__13812__auto___14386,G__14205_14375,n__7791__auto___14373,jobs,results,process,async){
return (function (state_14245){
var state_val_14246 = (state_14245[(1)]);
if((state_val_14246 === (1))){
var state_14245__$1 = state_14245;
var statearr_14247_14387 = state_14245__$1;
(statearr_14247_14387[(2)] = null);

(statearr_14247_14387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14246 === (2))){
var state_14245__$1 = state_14245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14245__$1,(4),jobs);
} else {
if((state_val_14246 === (3))){
var inst_14243 = (state_14245[(2)]);
var state_14245__$1 = state_14245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14245__$1,inst_14243);
} else {
if((state_val_14246 === (4))){
var inst_14235 = (state_14245[(2)]);
var inst_14236 = async.call(null,inst_14235);
var state_14245__$1 = state_14245;
if(cljs.core.truth_(inst_14236)){
var statearr_14248_14388 = state_14245__$1;
(statearr_14248_14388[(1)] = (5));

} else {
var statearr_14249_14389 = state_14245__$1;
(statearr_14249_14389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14246 === (5))){
var state_14245__$1 = state_14245;
var statearr_14250_14390 = state_14245__$1;
(statearr_14250_14390[(2)] = null);

(statearr_14250_14390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14246 === (6))){
var state_14245__$1 = state_14245;
var statearr_14251_14391 = state_14245__$1;
(statearr_14251_14391[(2)] = null);

(statearr_14251_14391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14246 === (7))){
var inst_14241 = (state_14245[(2)]);
var state_14245__$1 = state_14245;
var statearr_14252_14392 = state_14245__$1;
(statearr_14252_14392[(2)] = inst_14241);

(statearr_14252_14392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14374,c__13812__auto___14386,G__14205_14375,n__7791__auto___14373,jobs,results,process,async))
;
return ((function (__14374,switch__13700__auto__,c__13812__auto___14386,G__14205_14375,n__7791__auto___14373,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0 = (function (){
var statearr_14256 = [null,null,null,null,null,null,null];
(statearr_14256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__);

(statearr_14256[(1)] = (1));

return statearr_14256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1 = (function (state_14245){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14257){if((e14257 instanceof Object)){
var ex__13704__auto__ = e14257;
var statearr_14258_14393 = state_14245;
(statearr_14258_14393[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14394 = state_14245;
state_14245 = G__14394;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = function(state_14245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1.call(this,state_14245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__;
})()
;})(__14374,switch__13700__auto__,c__13812__auto___14386,G__14205_14375,n__7791__auto___14373,jobs,results,process,async))
})();
var state__13814__auto__ = (function (){var statearr_14259 = f__13813__auto__.call(null);
(statearr_14259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___14386);

return statearr_14259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(__14374,c__13812__auto___14386,G__14205_14375,n__7791__auto___14373,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14395 = (__14374 + (1));
__14374 = G__14395;
continue;
} else {
}
break;
}

var c__13812__auto___14396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___14396,jobs,results,process,async){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___14396,jobs,results,process,async){
return (function (state_14281){
var state_val_14282 = (state_14281[(1)]);
if((state_val_14282 === (1))){
var state_14281__$1 = state_14281;
var statearr_14283_14397 = state_14281__$1;
(statearr_14283_14397[(2)] = null);

(statearr_14283_14397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (2))){
var state_14281__$1 = state_14281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14281__$1,(4),from);
} else {
if((state_val_14282 === (3))){
var inst_14279 = (state_14281[(2)]);
var state_14281__$1 = state_14281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14281__$1,inst_14279);
} else {
if((state_val_14282 === (4))){
var inst_14262 = (state_14281[(7)]);
var inst_14262__$1 = (state_14281[(2)]);
var inst_14263 = (inst_14262__$1 == null);
var state_14281__$1 = (function (){var statearr_14284 = state_14281;
(statearr_14284[(7)] = inst_14262__$1);

return statearr_14284;
})();
if(cljs.core.truth_(inst_14263)){
var statearr_14285_14398 = state_14281__$1;
(statearr_14285_14398[(1)] = (5));

} else {
var statearr_14286_14399 = state_14281__$1;
(statearr_14286_14399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (5))){
var inst_14265 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14281__$1 = state_14281;
var statearr_14287_14400 = state_14281__$1;
(statearr_14287_14400[(2)] = inst_14265);

(statearr_14287_14400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (6))){
var inst_14267 = (state_14281[(8)]);
var inst_14262 = (state_14281[(7)]);
var inst_14267__$1 = cljs.core.async.chan.call(null,(1));
var inst_14268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14269 = [inst_14262,inst_14267__$1];
var inst_14270 = (new cljs.core.PersistentVector(null,2,(5),inst_14268,inst_14269,null));
var state_14281__$1 = (function (){var statearr_14288 = state_14281;
(statearr_14288[(8)] = inst_14267__$1);

return statearr_14288;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14281__$1,(8),jobs,inst_14270);
} else {
if((state_val_14282 === (7))){
var inst_14277 = (state_14281[(2)]);
var state_14281__$1 = state_14281;
var statearr_14289_14401 = state_14281__$1;
(statearr_14289_14401[(2)] = inst_14277);

(statearr_14289_14401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (8))){
var inst_14267 = (state_14281[(8)]);
var inst_14272 = (state_14281[(2)]);
var state_14281__$1 = (function (){var statearr_14290 = state_14281;
(statearr_14290[(9)] = inst_14272);

return statearr_14290;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14281__$1,(9),results,inst_14267);
} else {
if((state_val_14282 === (9))){
var inst_14274 = (state_14281[(2)]);
var state_14281__$1 = (function (){var statearr_14291 = state_14281;
(statearr_14291[(10)] = inst_14274);

return statearr_14291;
})();
var statearr_14292_14402 = state_14281__$1;
(statearr_14292_14402[(2)] = null);

(statearr_14292_14402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto___14396,jobs,results,process,async))
;
return ((function (switch__13700__auto__,c__13812__auto___14396,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0 = (function (){
var statearr_14296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__);

(statearr_14296[(1)] = (1));

return statearr_14296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1 = (function (state_14281){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14297){if((e14297 instanceof Object)){
var ex__13704__auto__ = e14297;
var statearr_14298_14403 = state_14281;
(statearr_14298_14403[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14404 = state_14281;
state_14281 = G__14404;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = function(state_14281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1.call(this,state_14281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___14396,jobs,results,process,async))
})();
var state__13814__auto__ = (function (){var statearr_14299 = f__13813__auto__.call(null);
(statearr_14299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___14396);

return statearr_14299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___14396,jobs,results,process,async))
);


var c__13812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto__,jobs,results,process,async){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto__,jobs,results,process,async){
return (function (state_14337){
var state_val_14338 = (state_14337[(1)]);
if((state_val_14338 === (7))){
var inst_14333 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
var statearr_14339_14405 = state_14337__$1;
(statearr_14339_14405[(2)] = inst_14333);

(statearr_14339_14405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (20))){
var state_14337__$1 = state_14337;
var statearr_14340_14406 = state_14337__$1;
(statearr_14340_14406[(2)] = null);

(statearr_14340_14406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (1))){
var state_14337__$1 = state_14337;
var statearr_14341_14407 = state_14337__$1;
(statearr_14341_14407[(2)] = null);

(statearr_14341_14407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (4))){
var inst_14302 = (state_14337[(7)]);
var inst_14302__$1 = (state_14337[(2)]);
var inst_14303 = (inst_14302__$1 == null);
var state_14337__$1 = (function (){var statearr_14342 = state_14337;
(statearr_14342[(7)] = inst_14302__$1);

return statearr_14342;
})();
if(cljs.core.truth_(inst_14303)){
var statearr_14343_14408 = state_14337__$1;
(statearr_14343_14408[(1)] = (5));

} else {
var statearr_14344_14409 = state_14337__$1;
(statearr_14344_14409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (15))){
var inst_14315 = (state_14337[(8)]);
var state_14337__$1 = state_14337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14337__$1,(18),to,inst_14315);
} else {
if((state_val_14338 === (21))){
var inst_14328 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
var statearr_14345_14410 = state_14337__$1;
(statearr_14345_14410[(2)] = inst_14328);

(statearr_14345_14410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (13))){
var inst_14330 = (state_14337[(2)]);
var state_14337__$1 = (function (){var statearr_14346 = state_14337;
(statearr_14346[(9)] = inst_14330);

return statearr_14346;
})();
var statearr_14347_14411 = state_14337__$1;
(statearr_14347_14411[(2)] = null);

(statearr_14347_14411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (6))){
var inst_14302 = (state_14337[(7)]);
var state_14337__$1 = state_14337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14337__$1,(11),inst_14302);
} else {
if((state_val_14338 === (17))){
var inst_14323 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
if(cljs.core.truth_(inst_14323)){
var statearr_14348_14412 = state_14337__$1;
(statearr_14348_14412[(1)] = (19));

} else {
var statearr_14349_14413 = state_14337__$1;
(statearr_14349_14413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (3))){
var inst_14335 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14337__$1,inst_14335);
} else {
if((state_val_14338 === (12))){
var inst_14312 = (state_14337[(10)]);
var state_14337__$1 = state_14337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14337__$1,(14),inst_14312);
} else {
if((state_val_14338 === (2))){
var state_14337__$1 = state_14337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14337__$1,(4),results);
} else {
if((state_val_14338 === (19))){
var state_14337__$1 = state_14337;
var statearr_14350_14414 = state_14337__$1;
(statearr_14350_14414[(2)] = null);

(statearr_14350_14414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (11))){
var inst_14312 = (state_14337[(2)]);
var state_14337__$1 = (function (){var statearr_14351 = state_14337;
(statearr_14351[(10)] = inst_14312);

return statearr_14351;
})();
var statearr_14352_14415 = state_14337__$1;
(statearr_14352_14415[(2)] = null);

(statearr_14352_14415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (9))){
var state_14337__$1 = state_14337;
var statearr_14353_14416 = state_14337__$1;
(statearr_14353_14416[(2)] = null);

(statearr_14353_14416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (5))){
var state_14337__$1 = state_14337;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14354_14417 = state_14337__$1;
(statearr_14354_14417[(1)] = (8));

} else {
var statearr_14355_14418 = state_14337__$1;
(statearr_14355_14418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (14))){
var inst_14317 = (state_14337[(11)]);
var inst_14315 = (state_14337[(8)]);
var inst_14315__$1 = (state_14337[(2)]);
var inst_14316 = (inst_14315__$1 == null);
var inst_14317__$1 = cljs.core.not.call(null,inst_14316);
var state_14337__$1 = (function (){var statearr_14356 = state_14337;
(statearr_14356[(11)] = inst_14317__$1);

(statearr_14356[(8)] = inst_14315__$1);

return statearr_14356;
})();
if(inst_14317__$1){
var statearr_14357_14419 = state_14337__$1;
(statearr_14357_14419[(1)] = (15));

} else {
var statearr_14358_14420 = state_14337__$1;
(statearr_14358_14420[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (16))){
var inst_14317 = (state_14337[(11)]);
var state_14337__$1 = state_14337;
var statearr_14359_14421 = state_14337__$1;
(statearr_14359_14421[(2)] = inst_14317);

(statearr_14359_14421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (10))){
var inst_14309 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
var statearr_14360_14422 = state_14337__$1;
(statearr_14360_14422[(2)] = inst_14309);

(statearr_14360_14422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (18))){
var inst_14320 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
var statearr_14361_14423 = state_14337__$1;
(statearr_14361_14423[(2)] = inst_14320);

(statearr_14361_14423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (8))){
var inst_14306 = cljs.core.async.close_BANG_.call(null,to);
var state_14337__$1 = state_14337;
var statearr_14362_14424 = state_14337__$1;
(statearr_14362_14424[(2)] = inst_14306);

(statearr_14362_14424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__13812__auto__,jobs,results,process,async))
;
return ((function (switch__13700__auto__,c__13812__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0 = (function (){
var statearr_14366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__);

(statearr_14366[(1)] = (1));

return statearr_14366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1 = (function (state_14337){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14367){if((e14367 instanceof Object)){
var ex__13704__auto__ = e14367;
var statearr_14368_14425 = state_14337;
(statearr_14368_14425[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14426 = state_14337;
state_14337 = G__14426;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__ = function(state_14337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1.call(this,state_14337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto__,jobs,results,process,async))
})();
var state__13814__auto__ = (function (){var statearr_14369 = f__13813__auto__.call(null);
(statearr_14369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto__);

return statearr_14369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto__,jobs,results,process,async))
);

return c__13812__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14427 = [];
var len__7981__auto___14430 = arguments.length;
var i__7982__auto___14431 = (0);
while(true){
if((i__7982__auto___14431 < len__7981__auto___14430)){
args14427.push((arguments[i__7982__auto___14431]));

var G__14432 = (i__7982__auto___14431 + (1));
i__7982__auto___14431 = G__14432;
continue;
} else {
}
break;
}

var G__14429 = args14427.length;
switch (G__14429) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14427.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14434 = [];
var len__7981__auto___14437 = arguments.length;
var i__7982__auto___14438 = (0);
while(true){
if((i__7982__auto___14438 < len__7981__auto___14437)){
args14434.push((arguments[i__7982__auto___14438]));

var G__14439 = (i__7982__auto___14438 + (1));
i__7982__auto___14438 = G__14439;
continue;
} else {
}
break;
}

var G__14436 = args14434.length;
switch (G__14436) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14434.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14441 = [];
var len__7981__auto___14494 = arguments.length;
var i__7982__auto___14495 = (0);
while(true){
if((i__7982__auto___14495 < len__7981__auto___14494)){
args14441.push((arguments[i__7982__auto___14495]));

var G__14496 = (i__7982__auto___14495 + (1));
i__7982__auto___14495 = G__14496;
continue;
} else {
}
break;
}

var G__14443 = args14441.length;
switch (G__14443) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14441.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13812__auto___14498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___14498,tc,fc){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___14498,tc,fc){
return (function (state_14469){
var state_val_14470 = (state_14469[(1)]);
if((state_val_14470 === (7))){
var inst_14465 = (state_14469[(2)]);
var state_14469__$1 = state_14469;
var statearr_14471_14499 = state_14469__$1;
(statearr_14471_14499[(2)] = inst_14465);

(statearr_14471_14499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (1))){
var state_14469__$1 = state_14469;
var statearr_14472_14500 = state_14469__$1;
(statearr_14472_14500[(2)] = null);

(statearr_14472_14500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (4))){
var inst_14446 = (state_14469[(7)]);
var inst_14446__$1 = (state_14469[(2)]);
var inst_14447 = (inst_14446__$1 == null);
var state_14469__$1 = (function (){var statearr_14473 = state_14469;
(statearr_14473[(7)] = inst_14446__$1);

return statearr_14473;
})();
if(cljs.core.truth_(inst_14447)){
var statearr_14474_14501 = state_14469__$1;
(statearr_14474_14501[(1)] = (5));

} else {
var statearr_14475_14502 = state_14469__$1;
(statearr_14475_14502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (13))){
var state_14469__$1 = state_14469;
var statearr_14476_14503 = state_14469__$1;
(statearr_14476_14503[(2)] = null);

(statearr_14476_14503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (6))){
var inst_14446 = (state_14469[(7)]);
var inst_14452 = p.call(null,inst_14446);
var state_14469__$1 = state_14469;
if(cljs.core.truth_(inst_14452)){
var statearr_14477_14504 = state_14469__$1;
(statearr_14477_14504[(1)] = (9));

} else {
var statearr_14478_14505 = state_14469__$1;
(statearr_14478_14505[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (3))){
var inst_14467 = (state_14469[(2)]);
var state_14469__$1 = state_14469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14469__$1,inst_14467);
} else {
if((state_val_14470 === (12))){
var state_14469__$1 = state_14469;
var statearr_14479_14506 = state_14469__$1;
(statearr_14479_14506[(2)] = null);

(statearr_14479_14506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (2))){
var state_14469__$1 = state_14469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14469__$1,(4),ch);
} else {
if((state_val_14470 === (11))){
var inst_14446 = (state_14469[(7)]);
var inst_14456 = (state_14469[(2)]);
var state_14469__$1 = state_14469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14469__$1,(8),inst_14456,inst_14446);
} else {
if((state_val_14470 === (9))){
var state_14469__$1 = state_14469;
var statearr_14480_14507 = state_14469__$1;
(statearr_14480_14507[(2)] = tc);

(statearr_14480_14507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (5))){
var inst_14449 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14450 = cljs.core.async.close_BANG_.call(null,fc);
var state_14469__$1 = (function (){var statearr_14481 = state_14469;
(statearr_14481[(8)] = inst_14449);

return statearr_14481;
})();
var statearr_14482_14508 = state_14469__$1;
(statearr_14482_14508[(2)] = inst_14450);

(statearr_14482_14508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (14))){
var inst_14463 = (state_14469[(2)]);
var state_14469__$1 = state_14469;
var statearr_14483_14509 = state_14469__$1;
(statearr_14483_14509[(2)] = inst_14463);

(statearr_14483_14509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (10))){
var state_14469__$1 = state_14469;
var statearr_14484_14510 = state_14469__$1;
(statearr_14484_14510[(2)] = fc);

(statearr_14484_14510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14470 === (8))){
var inst_14458 = (state_14469[(2)]);
var state_14469__$1 = state_14469;
if(cljs.core.truth_(inst_14458)){
var statearr_14485_14511 = state_14469__$1;
(statearr_14485_14511[(1)] = (12));

} else {
var statearr_14486_14512 = state_14469__$1;
(statearr_14486_14512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto___14498,tc,fc))
;
return ((function (switch__13700__auto__,c__13812__auto___14498,tc,fc){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_14490 = [null,null,null,null,null,null,null,null,null];
(statearr_14490[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_14490[(1)] = (1));

return statearr_14490;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_14469){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14491){if((e14491 instanceof Object)){
var ex__13704__auto__ = e14491;
var statearr_14492_14513 = state_14469;
(statearr_14492_14513[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14514 = state_14469;
state_14469 = G__14514;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_14469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_14469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___14498,tc,fc))
})();
var state__13814__auto__ = (function (){var statearr_14493 = f__13813__auto__.call(null);
(statearr_14493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___14498);

return statearr_14493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___14498,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto__){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto__){
return (function (state_14578){
var state_val_14579 = (state_14578[(1)]);
if((state_val_14579 === (7))){
var inst_14574 = (state_14578[(2)]);
var state_14578__$1 = state_14578;
var statearr_14580_14601 = state_14578__$1;
(statearr_14580_14601[(2)] = inst_14574);

(statearr_14580_14601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14579 === (1))){
var inst_14558 = init;
var state_14578__$1 = (function (){var statearr_14581 = state_14578;
(statearr_14581[(7)] = inst_14558);

return statearr_14581;
})();
var statearr_14582_14602 = state_14578__$1;
(statearr_14582_14602[(2)] = null);

(statearr_14582_14602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14579 === (4))){
var inst_14561 = (state_14578[(8)]);
var inst_14561__$1 = (state_14578[(2)]);
var inst_14562 = (inst_14561__$1 == null);
var state_14578__$1 = (function (){var statearr_14583 = state_14578;
(statearr_14583[(8)] = inst_14561__$1);

return statearr_14583;
})();
if(cljs.core.truth_(inst_14562)){
var statearr_14584_14603 = state_14578__$1;
(statearr_14584_14603[(1)] = (5));

} else {
var statearr_14585_14604 = state_14578__$1;
(statearr_14585_14604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14579 === (6))){
var inst_14565 = (state_14578[(9)]);
var inst_14558 = (state_14578[(7)]);
var inst_14561 = (state_14578[(8)]);
var inst_14565__$1 = f.call(null,inst_14558,inst_14561);
var inst_14566 = cljs.core.reduced_QMARK_.call(null,inst_14565__$1);
var state_14578__$1 = (function (){var statearr_14586 = state_14578;
(statearr_14586[(9)] = inst_14565__$1);

return statearr_14586;
})();
if(inst_14566){
var statearr_14587_14605 = state_14578__$1;
(statearr_14587_14605[(1)] = (8));

} else {
var statearr_14588_14606 = state_14578__$1;
(statearr_14588_14606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14579 === (3))){
var inst_14576 = (state_14578[(2)]);
var state_14578__$1 = state_14578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14578__$1,inst_14576);
} else {
if((state_val_14579 === (2))){
var state_14578__$1 = state_14578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14578__$1,(4),ch);
} else {
if((state_val_14579 === (9))){
var inst_14565 = (state_14578[(9)]);
var inst_14558 = inst_14565;
var state_14578__$1 = (function (){var statearr_14589 = state_14578;
(statearr_14589[(7)] = inst_14558);

return statearr_14589;
})();
var statearr_14590_14607 = state_14578__$1;
(statearr_14590_14607[(2)] = null);

(statearr_14590_14607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14579 === (5))){
var inst_14558 = (state_14578[(7)]);
var state_14578__$1 = state_14578;
var statearr_14591_14608 = state_14578__$1;
(statearr_14591_14608[(2)] = inst_14558);

(statearr_14591_14608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14579 === (10))){
var inst_14572 = (state_14578[(2)]);
var state_14578__$1 = state_14578;
var statearr_14592_14609 = state_14578__$1;
(statearr_14592_14609[(2)] = inst_14572);

(statearr_14592_14609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14579 === (8))){
var inst_14565 = (state_14578[(9)]);
var inst_14568 = cljs.core.deref.call(null,inst_14565);
var state_14578__$1 = state_14578;
var statearr_14593_14610 = state_14578__$1;
(statearr_14593_14610[(2)] = inst_14568);

(statearr_14593_14610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto__))
;
return ((function (switch__13700__auto__,c__13812__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13701__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13701__auto____0 = (function (){
var statearr_14597 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14597[(0)] = cljs$core$async$reduce_$_state_machine__13701__auto__);

(statearr_14597[(1)] = (1));

return statearr_14597;
});
var cljs$core$async$reduce_$_state_machine__13701__auto____1 = (function (state_14578){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14598){if((e14598 instanceof Object)){
var ex__13704__auto__ = e14598;
var statearr_14599_14611 = state_14578;
(statearr_14599_14611[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14612 = state_14578;
state_14578 = G__14612;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13701__auto__ = function(state_14578){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13701__auto____1.call(this,state_14578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13701__auto____0;
cljs$core$async$reduce_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13701__auto____1;
return cljs$core$async$reduce_$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto__))
})();
var state__13814__auto__ = (function (){var statearr_14600 = f__13813__auto__.call(null);
(statearr_14600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto__);

return statearr_14600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto__))
);

return c__13812__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto__,f__$1){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto__,f__$1){
return (function (state_14632){
var state_val_14633 = (state_14632[(1)]);
if((state_val_14633 === (1))){
var inst_14627 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14632__$1 = state_14632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14632__$1,(2),inst_14627);
} else {
if((state_val_14633 === (2))){
var inst_14629 = (state_14632[(2)]);
var inst_14630 = f__$1.call(null,inst_14629);
var state_14632__$1 = state_14632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14632__$1,inst_14630);
} else {
return null;
}
}
});})(c__13812__auto__,f__$1))
;
return ((function (switch__13700__auto__,c__13812__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13701__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13701__auto____0 = (function (){
var statearr_14637 = [null,null,null,null,null,null,null];
(statearr_14637[(0)] = cljs$core$async$transduce_$_state_machine__13701__auto__);

(statearr_14637[(1)] = (1));

return statearr_14637;
});
var cljs$core$async$transduce_$_state_machine__13701__auto____1 = (function (state_14632){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14638){if((e14638 instanceof Object)){
var ex__13704__auto__ = e14638;
var statearr_14639_14641 = state_14632;
(statearr_14639_14641[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14642 = state_14632;
state_14632 = G__14642;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13701__auto__ = function(state_14632){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13701__auto____1.call(this,state_14632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13701__auto____0;
cljs$core$async$transduce_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13701__auto____1;
return cljs$core$async$transduce_$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto__,f__$1))
})();
var state__13814__auto__ = (function (){var statearr_14640 = f__13813__auto__.call(null);
(statearr_14640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto__);

return statearr_14640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto__,f__$1))
);

return c__13812__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14643 = [];
var len__7981__auto___14695 = arguments.length;
var i__7982__auto___14696 = (0);
while(true){
if((i__7982__auto___14696 < len__7981__auto___14695)){
args14643.push((arguments[i__7982__auto___14696]));

var G__14697 = (i__7982__auto___14696 + (1));
i__7982__auto___14696 = G__14697;
continue;
} else {
}
break;
}

var G__14645 = args14643.length;
switch (G__14645) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14643.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto__){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto__){
return (function (state_14670){
var state_val_14671 = (state_14670[(1)]);
if((state_val_14671 === (7))){
var inst_14652 = (state_14670[(2)]);
var state_14670__$1 = state_14670;
var statearr_14672_14699 = state_14670__$1;
(statearr_14672_14699[(2)] = inst_14652);

(statearr_14672_14699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (1))){
var inst_14646 = cljs.core.seq.call(null,coll);
var inst_14647 = inst_14646;
var state_14670__$1 = (function (){var statearr_14673 = state_14670;
(statearr_14673[(7)] = inst_14647);

return statearr_14673;
})();
var statearr_14674_14700 = state_14670__$1;
(statearr_14674_14700[(2)] = null);

(statearr_14674_14700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (4))){
var inst_14647 = (state_14670[(7)]);
var inst_14650 = cljs.core.first.call(null,inst_14647);
var state_14670__$1 = state_14670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14670__$1,(7),ch,inst_14650);
} else {
if((state_val_14671 === (13))){
var inst_14664 = (state_14670[(2)]);
var state_14670__$1 = state_14670;
var statearr_14675_14701 = state_14670__$1;
(statearr_14675_14701[(2)] = inst_14664);

(statearr_14675_14701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (6))){
var inst_14655 = (state_14670[(2)]);
var state_14670__$1 = state_14670;
if(cljs.core.truth_(inst_14655)){
var statearr_14676_14702 = state_14670__$1;
(statearr_14676_14702[(1)] = (8));

} else {
var statearr_14677_14703 = state_14670__$1;
(statearr_14677_14703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (3))){
var inst_14668 = (state_14670[(2)]);
var state_14670__$1 = state_14670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14670__$1,inst_14668);
} else {
if((state_val_14671 === (12))){
var state_14670__$1 = state_14670;
var statearr_14678_14704 = state_14670__$1;
(statearr_14678_14704[(2)] = null);

(statearr_14678_14704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (2))){
var inst_14647 = (state_14670[(7)]);
var state_14670__$1 = state_14670;
if(cljs.core.truth_(inst_14647)){
var statearr_14679_14705 = state_14670__$1;
(statearr_14679_14705[(1)] = (4));

} else {
var statearr_14680_14706 = state_14670__$1;
(statearr_14680_14706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (11))){
var inst_14661 = cljs.core.async.close_BANG_.call(null,ch);
var state_14670__$1 = state_14670;
var statearr_14681_14707 = state_14670__$1;
(statearr_14681_14707[(2)] = inst_14661);

(statearr_14681_14707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (9))){
var state_14670__$1 = state_14670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14682_14708 = state_14670__$1;
(statearr_14682_14708[(1)] = (11));

} else {
var statearr_14683_14709 = state_14670__$1;
(statearr_14683_14709[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (5))){
var inst_14647 = (state_14670[(7)]);
var state_14670__$1 = state_14670;
var statearr_14684_14710 = state_14670__$1;
(statearr_14684_14710[(2)] = inst_14647);

(statearr_14684_14710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (10))){
var inst_14666 = (state_14670[(2)]);
var state_14670__$1 = state_14670;
var statearr_14685_14711 = state_14670__$1;
(statearr_14685_14711[(2)] = inst_14666);

(statearr_14685_14711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (8))){
var inst_14647 = (state_14670[(7)]);
var inst_14657 = cljs.core.next.call(null,inst_14647);
var inst_14647__$1 = inst_14657;
var state_14670__$1 = (function (){var statearr_14686 = state_14670;
(statearr_14686[(7)] = inst_14647__$1);

return statearr_14686;
})();
var statearr_14687_14712 = state_14670__$1;
(statearr_14687_14712[(2)] = null);

(statearr_14687_14712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto__))
;
return ((function (switch__13700__auto__,c__13812__auto__){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_14691 = [null,null,null,null,null,null,null,null];
(statearr_14691[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_14691[(1)] = (1));

return statearr_14691;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_14670){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_14670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e14692){if((e14692 instanceof Object)){
var ex__13704__auto__ = e14692;
var statearr_14693_14713 = state_14670;
(statearr_14693_14713[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14714 = state_14670;
state_14670 = G__14714;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_14670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_14670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto__))
})();
var state__13814__auto__ = (function (){var statearr_14694 = f__13813__auto__.call(null);
(statearr_14694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto__);

return statearr_14694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto__))
);

return c__13812__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7536__auto__ = (((_ == null))?null:_);
var m__7537__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,_);
} else {
var m__7537__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7536__auto__ = (((m == null))?null:m);
var m__7537__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7537__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7536__auto__ = (((m == null))?null:m);
var m__7537__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,m,ch);
} else {
var m__7537__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7536__auto__ = (((m == null))?null:m);
var m__7537__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,m);
} else {
var m__7537__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14940 = (function (ch,cs,meta14941){
this.ch = ch;
this.cs = cs;
this.meta14941 = meta14941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14942,meta14941__$1){
var self__ = this;
var _14942__$1 = this;
return (new cljs.core.async.t_cljs$core$async14940(self__.ch,self__.cs,meta14941__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14942){
var self__ = this;
var _14942__$1 = this;
return self__.meta14941;
});})(cs))
;

cljs.core.async.t_cljs$core$async14940.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14940.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14940.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14940.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14940.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14940.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14941","meta14941",52915229,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14940";

cljs.core.async.t_cljs$core$async14940.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async14940");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14940 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14940(ch__$1,cs__$1,meta14941){
return (new cljs.core.async.t_cljs$core$async14940(ch__$1,cs__$1,meta14941));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14940(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13812__auto___15165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___15165,cs,m,dchan,dctr,done){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___15165,cs,m,dchan,dctr,done){
return (function (state_15077){
var state_val_15078 = (state_15077[(1)]);
if((state_val_15078 === (7))){
var inst_15073 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15079_15166 = state_15077__$1;
(statearr_15079_15166[(2)] = inst_15073);

(statearr_15079_15166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (20))){
var inst_14976 = (state_15077[(7)]);
var inst_14988 = cljs.core.first.call(null,inst_14976);
var inst_14989 = cljs.core.nth.call(null,inst_14988,(0),null);
var inst_14990 = cljs.core.nth.call(null,inst_14988,(1),null);
var state_15077__$1 = (function (){var statearr_15080 = state_15077;
(statearr_15080[(8)] = inst_14989);

return statearr_15080;
})();
if(cljs.core.truth_(inst_14990)){
var statearr_15081_15167 = state_15077__$1;
(statearr_15081_15167[(1)] = (22));

} else {
var statearr_15082_15168 = state_15077__$1;
(statearr_15082_15168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (27))){
var inst_14945 = (state_15077[(9)]);
var inst_15020 = (state_15077[(10)]);
var inst_15025 = (state_15077[(11)]);
var inst_15018 = (state_15077[(12)]);
var inst_15025__$1 = cljs.core._nth.call(null,inst_15018,inst_15020);
var inst_15026 = cljs.core.async.put_BANG_.call(null,inst_15025__$1,inst_14945,done);
var state_15077__$1 = (function (){var statearr_15083 = state_15077;
(statearr_15083[(11)] = inst_15025__$1);

return statearr_15083;
})();
if(cljs.core.truth_(inst_15026)){
var statearr_15084_15169 = state_15077__$1;
(statearr_15084_15169[(1)] = (30));

} else {
var statearr_15085_15170 = state_15077__$1;
(statearr_15085_15170[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (1))){
var state_15077__$1 = state_15077;
var statearr_15086_15171 = state_15077__$1;
(statearr_15086_15171[(2)] = null);

(statearr_15086_15171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (24))){
var inst_14976 = (state_15077[(7)]);
var inst_14995 = (state_15077[(2)]);
var inst_14996 = cljs.core.next.call(null,inst_14976);
var inst_14954 = inst_14996;
var inst_14955 = null;
var inst_14956 = (0);
var inst_14957 = (0);
var state_15077__$1 = (function (){var statearr_15087 = state_15077;
(statearr_15087[(13)] = inst_14995);

(statearr_15087[(14)] = inst_14954);

(statearr_15087[(15)] = inst_14955);

(statearr_15087[(16)] = inst_14957);

(statearr_15087[(17)] = inst_14956);

return statearr_15087;
})();
var statearr_15088_15172 = state_15077__$1;
(statearr_15088_15172[(2)] = null);

(statearr_15088_15172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (39))){
var state_15077__$1 = state_15077;
var statearr_15092_15173 = state_15077__$1;
(statearr_15092_15173[(2)] = null);

(statearr_15092_15173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (4))){
var inst_14945 = (state_15077[(9)]);
var inst_14945__$1 = (state_15077[(2)]);
var inst_14946 = (inst_14945__$1 == null);
var state_15077__$1 = (function (){var statearr_15093 = state_15077;
(statearr_15093[(9)] = inst_14945__$1);

return statearr_15093;
})();
if(cljs.core.truth_(inst_14946)){
var statearr_15094_15174 = state_15077__$1;
(statearr_15094_15174[(1)] = (5));

} else {
var statearr_15095_15175 = state_15077__$1;
(statearr_15095_15175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (15))){
var inst_14954 = (state_15077[(14)]);
var inst_14955 = (state_15077[(15)]);
var inst_14957 = (state_15077[(16)]);
var inst_14956 = (state_15077[(17)]);
var inst_14972 = (state_15077[(2)]);
var inst_14973 = (inst_14957 + (1));
var tmp15089 = inst_14954;
var tmp15090 = inst_14955;
var tmp15091 = inst_14956;
var inst_14954__$1 = tmp15089;
var inst_14955__$1 = tmp15090;
var inst_14956__$1 = tmp15091;
var inst_14957__$1 = inst_14973;
var state_15077__$1 = (function (){var statearr_15096 = state_15077;
(statearr_15096[(14)] = inst_14954__$1);

(statearr_15096[(18)] = inst_14972);

(statearr_15096[(15)] = inst_14955__$1);

(statearr_15096[(16)] = inst_14957__$1);

(statearr_15096[(17)] = inst_14956__$1);

return statearr_15096;
})();
var statearr_15097_15176 = state_15077__$1;
(statearr_15097_15176[(2)] = null);

(statearr_15097_15176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (21))){
var inst_14999 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15101_15177 = state_15077__$1;
(statearr_15101_15177[(2)] = inst_14999);

(statearr_15101_15177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (31))){
var inst_15025 = (state_15077[(11)]);
var inst_15029 = done.call(null,null);
var inst_15030 = cljs.core.async.untap_STAR_.call(null,m,inst_15025);
var state_15077__$1 = (function (){var statearr_15102 = state_15077;
(statearr_15102[(19)] = inst_15029);

return statearr_15102;
})();
var statearr_15103_15178 = state_15077__$1;
(statearr_15103_15178[(2)] = inst_15030);

(statearr_15103_15178[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (32))){
var inst_15019 = (state_15077[(20)]);
var inst_15020 = (state_15077[(10)]);
var inst_15017 = (state_15077[(21)]);
var inst_15018 = (state_15077[(12)]);
var inst_15032 = (state_15077[(2)]);
var inst_15033 = (inst_15020 + (1));
var tmp15098 = inst_15019;
var tmp15099 = inst_15017;
var tmp15100 = inst_15018;
var inst_15017__$1 = tmp15099;
var inst_15018__$1 = tmp15100;
var inst_15019__$1 = tmp15098;
var inst_15020__$1 = inst_15033;
var state_15077__$1 = (function (){var statearr_15104 = state_15077;
(statearr_15104[(20)] = inst_15019__$1);

(statearr_15104[(10)] = inst_15020__$1);

(statearr_15104[(21)] = inst_15017__$1);

(statearr_15104[(12)] = inst_15018__$1);

(statearr_15104[(22)] = inst_15032);

return statearr_15104;
})();
var statearr_15105_15179 = state_15077__$1;
(statearr_15105_15179[(2)] = null);

(statearr_15105_15179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (40))){
var inst_15045 = (state_15077[(23)]);
var inst_15049 = done.call(null,null);
var inst_15050 = cljs.core.async.untap_STAR_.call(null,m,inst_15045);
var state_15077__$1 = (function (){var statearr_15106 = state_15077;
(statearr_15106[(24)] = inst_15049);

return statearr_15106;
})();
var statearr_15107_15180 = state_15077__$1;
(statearr_15107_15180[(2)] = inst_15050);

(statearr_15107_15180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (33))){
var inst_15036 = (state_15077[(25)]);
var inst_15038 = cljs.core.chunked_seq_QMARK_.call(null,inst_15036);
var state_15077__$1 = state_15077;
if(inst_15038){
var statearr_15108_15181 = state_15077__$1;
(statearr_15108_15181[(1)] = (36));

} else {
var statearr_15109_15182 = state_15077__$1;
(statearr_15109_15182[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (13))){
var inst_14966 = (state_15077[(26)]);
var inst_14969 = cljs.core.async.close_BANG_.call(null,inst_14966);
var state_15077__$1 = state_15077;
var statearr_15110_15183 = state_15077__$1;
(statearr_15110_15183[(2)] = inst_14969);

(statearr_15110_15183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (22))){
var inst_14989 = (state_15077[(8)]);
var inst_14992 = cljs.core.async.close_BANG_.call(null,inst_14989);
var state_15077__$1 = state_15077;
var statearr_15111_15184 = state_15077__$1;
(statearr_15111_15184[(2)] = inst_14992);

(statearr_15111_15184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (36))){
var inst_15036 = (state_15077[(25)]);
var inst_15040 = cljs.core.chunk_first.call(null,inst_15036);
var inst_15041 = cljs.core.chunk_rest.call(null,inst_15036);
var inst_15042 = cljs.core.count.call(null,inst_15040);
var inst_15017 = inst_15041;
var inst_15018 = inst_15040;
var inst_15019 = inst_15042;
var inst_15020 = (0);
var state_15077__$1 = (function (){var statearr_15112 = state_15077;
(statearr_15112[(20)] = inst_15019);

(statearr_15112[(10)] = inst_15020);

(statearr_15112[(21)] = inst_15017);

(statearr_15112[(12)] = inst_15018);

return statearr_15112;
})();
var statearr_15113_15185 = state_15077__$1;
(statearr_15113_15185[(2)] = null);

(statearr_15113_15185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (41))){
var inst_15036 = (state_15077[(25)]);
var inst_15052 = (state_15077[(2)]);
var inst_15053 = cljs.core.next.call(null,inst_15036);
var inst_15017 = inst_15053;
var inst_15018 = null;
var inst_15019 = (0);
var inst_15020 = (0);
var state_15077__$1 = (function (){var statearr_15114 = state_15077;
(statearr_15114[(20)] = inst_15019);

(statearr_15114[(10)] = inst_15020);

(statearr_15114[(27)] = inst_15052);

(statearr_15114[(21)] = inst_15017);

(statearr_15114[(12)] = inst_15018);

return statearr_15114;
})();
var statearr_15115_15186 = state_15077__$1;
(statearr_15115_15186[(2)] = null);

(statearr_15115_15186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (43))){
var state_15077__$1 = state_15077;
var statearr_15116_15187 = state_15077__$1;
(statearr_15116_15187[(2)] = null);

(statearr_15116_15187[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (29))){
var inst_15061 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15117_15188 = state_15077__$1;
(statearr_15117_15188[(2)] = inst_15061);

(statearr_15117_15188[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (44))){
var inst_15070 = (state_15077[(2)]);
var state_15077__$1 = (function (){var statearr_15118 = state_15077;
(statearr_15118[(28)] = inst_15070);

return statearr_15118;
})();
var statearr_15119_15189 = state_15077__$1;
(statearr_15119_15189[(2)] = null);

(statearr_15119_15189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (6))){
var inst_15009 = (state_15077[(29)]);
var inst_15008 = cljs.core.deref.call(null,cs);
var inst_15009__$1 = cljs.core.keys.call(null,inst_15008);
var inst_15010 = cljs.core.count.call(null,inst_15009__$1);
var inst_15011 = cljs.core.reset_BANG_.call(null,dctr,inst_15010);
var inst_15016 = cljs.core.seq.call(null,inst_15009__$1);
var inst_15017 = inst_15016;
var inst_15018 = null;
var inst_15019 = (0);
var inst_15020 = (0);
var state_15077__$1 = (function (){var statearr_15120 = state_15077;
(statearr_15120[(20)] = inst_15019);

(statearr_15120[(29)] = inst_15009__$1);

(statearr_15120[(10)] = inst_15020);

(statearr_15120[(21)] = inst_15017);

(statearr_15120[(30)] = inst_15011);

(statearr_15120[(12)] = inst_15018);

return statearr_15120;
})();
var statearr_15121_15190 = state_15077__$1;
(statearr_15121_15190[(2)] = null);

(statearr_15121_15190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (28))){
var inst_15017 = (state_15077[(21)]);
var inst_15036 = (state_15077[(25)]);
var inst_15036__$1 = cljs.core.seq.call(null,inst_15017);
var state_15077__$1 = (function (){var statearr_15122 = state_15077;
(statearr_15122[(25)] = inst_15036__$1);

return statearr_15122;
})();
if(inst_15036__$1){
var statearr_15123_15191 = state_15077__$1;
(statearr_15123_15191[(1)] = (33));

} else {
var statearr_15124_15192 = state_15077__$1;
(statearr_15124_15192[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (25))){
var inst_15019 = (state_15077[(20)]);
var inst_15020 = (state_15077[(10)]);
var inst_15022 = (inst_15020 < inst_15019);
var inst_15023 = inst_15022;
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_15023)){
var statearr_15125_15193 = state_15077__$1;
(statearr_15125_15193[(1)] = (27));

} else {
var statearr_15126_15194 = state_15077__$1;
(statearr_15126_15194[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (34))){
var state_15077__$1 = state_15077;
var statearr_15127_15195 = state_15077__$1;
(statearr_15127_15195[(2)] = null);

(statearr_15127_15195[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (17))){
var state_15077__$1 = state_15077;
var statearr_15128_15196 = state_15077__$1;
(statearr_15128_15196[(2)] = null);

(statearr_15128_15196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (3))){
var inst_15075 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15077__$1,inst_15075);
} else {
if((state_val_15078 === (12))){
var inst_15004 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15129_15197 = state_15077__$1;
(statearr_15129_15197[(2)] = inst_15004);

(statearr_15129_15197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (2))){
var state_15077__$1 = state_15077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15077__$1,(4),ch);
} else {
if((state_val_15078 === (23))){
var state_15077__$1 = state_15077;
var statearr_15130_15198 = state_15077__$1;
(statearr_15130_15198[(2)] = null);

(statearr_15130_15198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (35))){
var inst_15059 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15131_15199 = state_15077__$1;
(statearr_15131_15199[(2)] = inst_15059);

(statearr_15131_15199[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (19))){
var inst_14976 = (state_15077[(7)]);
var inst_14980 = cljs.core.chunk_first.call(null,inst_14976);
var inst_14981 = cljs.core.chunk_rest.call(null,inst_14976);
var inst_14982 = cljs.core.count.call(null,inst_14980);
var inst_14954 = inst_14981;
var inst_14955 = inst_14980;
var inst_14956 = inst_14982;
var inst_14957 = (0);
var state_15077__$1 = (function (){var statearr_15132 = state_15077;
(statearr_15132[(14)] = inst_14954);

(statearr_15132[(15)] = inst_14955);

(statearr_15132[(16)] = inst_14957);

(statearr_15132[(17)] = inst_14956);

return statearr_15132;
})();
var statearr_15133_15200 = state_15077__$1;
(statearr_15133_15200[(2)] = null);

(statearr_15133_15200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (11))){
var inst_14976 = (state_15077[(7)]);
var inst_14954 = (state_15077[(14)]);
var inst_14976__$1 = cljs.core.seq.call(null,inst_14954);
var state_15077__$1 = (function (){var statearr_15134 = state_15077;
(statearr_15134[(7)] = inst_14976__$1);

return statearr_15134;
})();
if(inst_14976__$1){
var statearr_15135_15201 = state_15077__$1;
(statearr_15135_15201[(1)] = (16));

} else {
var statearr_15136_15202 = state_15077__$1;
(statearr_15136_15202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (9))){
var inst_15006 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15137_15203 = state_15077__$1;
(statearr_15137_15203[(2)] = inst_15006);

(statearr_15137_15203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (5))){
var inst_14952 = cljs.core.deref.call(null,cs);
var inst_14953 = cljs.core.seq.call(null,inst_14952);
var inst_14954 = inst_14953;
var inst_14955 = null;
var inst_14956 = (0);
var inst_14957 = (0);
var state_15077__$1 = (function (){var statearr_15138 = state_15077;
(statearr_15138[(14)] = inst_14954);

(statearr_15138[(15)] = inst_14955);

(statearr_15138[(16)] = inst_14957);

(statearr_15138[(17)] = inst_14956);

return statearr_15138;
})();
var statearr_15139_15204 = state_15077__$1;
(statearr_15139_15204[(2)] = null);

(statearr_15139_15204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (14))){
var state_15077__$1 = state_15077;
var statearr_15140_15205 = state_15077__$1;
(statearr_15140_15205[(2)] = null);

(statearr_15140_15205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (45))){
var inst_15067 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15141_15206 = state_15077__$1;
(statearr_15141_15206[(2)] = inst_15067);

(statearr_15141_15206[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (26))){
var inst_15009 = (state_15077[(29)]);
var inst_15063 = (state_15077[(2)]);
var inst_15064 = cljs.core.seq.call(null,inst_15009);
var state_15077__$1 = (function (){var statearr_15142 = state_15077;
(statearr_15142[(31)] = inst_15063);

return statearr_15142;
})();
if(inst_15064){
var statearr_15143_15207 = state_15077__$1;
(statearr_15143_15207[(1)] = (42));

} else {
var statearr_15144_15208 = state_15077__$1;
(statearr_15144_15208[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (16))){
var inst_14976 = (state_15077[(7)]);
var inst_14978 = cljs.core.chunked_seq_QMARK_.call(null,inst_14976);
var state_15077__$1 = state_15077;
if(inst_14978){
var statearr_15145_15209 = state_15077__$1;
(statearr_15145_15209[(1)] = (19));

} else {
var statearr_15146_15210 = state_15077__$1;
(statearr_15146_15210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (38))){
var inst_15056 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15147_15211 = state_15077__$1;
(statearr_15147_15211[(2)] = inst_15056);

(statearr_15147_15211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (30))){
var state_15077__$1 = state_15077;
var statearr_15148_15212 = state_15077__$1;
(statearr_15148_15212[(2)] = null);

(statearr_15148_15212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (10))){
var inst_14955 = (state_15077[(15)]);
var inst_14957 = (state_15077[(16)]);
var inst_14965 = cljs.core._nth.call(null,inst_14955,inst_14957);
var inst_14966 = cljs.core.nth.call(null,inst_14965,(0),null);
var inst_14967 = cljs.core.nth.call(null,inst_14965,(1),null);
var state_15077__$1 = (function (){var statearr_15149 = state_15077;
(statearr_15149[(26)] = inst_14966);

return statearr_15149;
})();
if(cljs.core.truth_(inst_14967)){
var statearr_15150_15213 = state_15077__$1;
(statearr_15150_15213[(1)] = (13));

} else {
var statearr_15151_15214 = state_15077__$1;
(statearr_15151_15214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (18))){
var inst_15002 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15152_15215 = state_15077__$1;
(statearr_15152_15215[(2)] = inst_15002);

(statearr_15152_15215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (42))){
var state_15077__$1 = state_15077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15077__$1,(45),dchan);
} else {
if((state_val_15078 === (37))){
var inst_15045 = (state_15077[(23)]);
var inst_14945 = (state_15077[(9)]);
var inst_15036 = (state_15077[(25)]);
var inst_15045__$1 = cljs.core.first.call(null,inst_15036);
var inst_15046 = cljs.core.async.put_BANG_.call(null,inst_15045__$1,inst_14945,done);
var state_15077__$1 = (function (){var statearr_15153 = state_15077;
(statearr_15153[(23)] = inst_15045__$1);

return statearr_15153;
})();
if(cljs.core.truth_(inst_15046)){
var statearr_15154_15216 = state_15077__$1;
(statearr_15154_15216[(1)] = (39));

} else {
var statearr_15155_15217 = state_15077__$1;
(statearr_15155_15217[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (8))){
var inst_14957 = (state_15077[(16)]);
var inst_14956 = (state_15077[(17)]);
var inst_14959 = (inst_14957 < inst_14956);
var inst_14960 = inst_14959;
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_14960)){
var statearr_15156_15218 = state_15077__$1;
(statearr_15156_15218[(1)] = (10));

} else {
var statearr_15157_15219 = state_15077__$1;
(statearr_15157_15219[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});})(c__13812__auto___15165,cs,m,dchan,dctr,done))
;
return ((function (switch__13700__auto__,c__13812__auto___15165,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13701__auto__ = null;
var cljs$core$async$mult_$_state_machine__13701__auto____0 = (function (){
var statearr_15161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15161[(0)] = cljs$core$async$mult_$_state_machine__13701__auto__);

(statearr_15161[(1)] = (1));

return statearr_15161;
});
var cljs$core$async$mult_$_state_machine__13701__auto____1 = (function (state_15077){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_15077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e15162){if((e15162 instanceof Object)){
var ex__13704__auto__ = e15162;
var statearr_15163_15220 = state_15077;
(statearr_15163_15220[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15221 = state_15077;
state_15077 = G__15221;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13701__auto__ = function(state_15077){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13701__auto____1.call(this,state_15077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13701__auto____0;
cljs$core$async$mult_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13701__auto____1;
return cljs$core$async$mult_$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___15165,cs,m,dchan,dctr,done))
})();
var state__13814__auto__ = (function (){var statearr_15164 = f__13813__auto__.call(null);
(statearr_15164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___15165);

return statearr_15164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___15165,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15222 = [];
var len__7981__auto___15225 = arguments.length;
var i__7982__auto___15226 = (0);
while(true){
if((i__7982__auto___15226 < len__7981__auto___15225)){
args15222.push((arguments[i__7982__auto___15226]));

var G__15227 = (i__7982__auto___15226 + (1));
i__7982__auto___15226 = G__15227;
continue;
} else {
}
break;
}

var G__15224 = args15222.length;
switch (G__15224) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15222.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7536__auto__ = (((m == null))?null:m);
var m__7537__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,m,ch);
} else {
var m__7537__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7536__auto__ = (((m == null))?null:m);
var m__7537__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,m,ch);
} else {
var m__7537__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7536__auto__ = (((m == null))?null:m);
var m__7537__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,m);
} else {
var m__7537__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7536__auto__ = (((m == null))?null:m);
var m__7537__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,m,state_map);
} else {
var m__7537__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7536__auto__ = (((m == null))?null:m);
var m__7537__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,m,mode);
} else {
var m__7537__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___15239 = arguments.length;
var i__7982__auto___15240 = (0);
while(true){
if((i__7982__auto___15240 < len__7981__auto___15239)){
args__7988__auto__.push((arguments[i__7982__auto___15240]));

var G__15241 = (i__7982__auto___15240 + (1));
i__7982__auto___15240 = G__15241;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((3) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7989__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15233){
var map__15234 = p__15233;
var map__15234__$1 = ((((!((map__15234 == null)))?((((map__15234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15234):map__15234);
var opts = map__15234__$1;
var statearr_15236_15242 = state;
(statearr_15236_15242[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__15234,map__15234__$1,opts){
return (function (val){
var statearr_15237_15243 = state;
(statearr_15237_15243[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15234,map__15234__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15238_15244 = state;
(statearr_15238_15244[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15229){
var G__15230 = cljs.core.first.call(null,seq15229);
var seq15229__$1 = cljs.core.next.call(null,seq15229);
var G__15231 = cljs.core.first.call(null,seq15229__$1);
var seq15229__$2 = cljs.core.next.call(null,seq15229__$1);
var G__15232 = cljs.core.first.call(null,seq15229__$2);
var seq15229__$3 = cljs.core.next.call(null,seq15229__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15230,G__15231,G__15232,seq15229__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15412 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15413){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15413 = meta15413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15414,meta15413__$1){
var self__ = this;
var _15414__$1 = this;
return (new cljs.core.async.t_cljs$core$async15412(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15413__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15414){
var self__ = this;
var _15414__$1 = this;
return self__.meta15413;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15413","meta15413",-1332096295,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15412";

cljs.core.async.t_cljs$core$async15412.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async15412");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15412 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15412(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15413){
return (new cljs.core.async.t_cljs$core$async15412(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15413));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15412(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13812__auto___15579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___15579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___15579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15516){
var state_val_15517 = (state_15516[(1)]);
if((state_val_15517 === (7))){
var inst_15431 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
var statearr_15518_15580 = state_15516__$1;
(statearr_15518_15580[(2)] = inst_15431);

(statearr_15518_15580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (20))){
var inst_15443 = (state_15516[(7)]);
var state_15516__$1 = state_15516;
var statearr_15519_15581 = state_15516__$1;
(statearr_15519_15581[(2)] = inst_15443);

(statearr_15519_15581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (27))){
var state_15516__$1 = state_15516;
var statearr_15520_15582 = state_15516__$1;
(statearr_15520_15582[(2)] = null);

(statearr_15520_15582[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (1))){
var inst_15418 = (state_15516[(8)]);
var inst_15418__$1 = calc_state.call(null);
var inst_15420 = (inst_15418__$1 == null);
var inst_15421 = cljs.core.not.call(null,inst_15420);
var state_15516__$1 = (function (){var statearr_15521 = state_15516;
(statearr_15521[(8)] = inst_15418__$1);

return statearr_15521;
})();
if(inst_15421){
var statearr_15522_15583 = state_15516__$1;
(statearr_15522_15583[(1)] = (2));

} else {
var statearr_15523_15584 = state_15516__$1;
(statearr_15523_15584[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (24))){
var inst_15467 = (state_15516[(9)]);
var inst_15476 = (state_15516[(10)]);
var inst_15490 = (state_15516[(11)]);
var inst_15490__$1 = inst_15467.call(null,inst_15476);
var state_15516__$1 = (function (){var statearr_15524 = state_15516;
(statearr_15524[(11)] = inst_15490__$1);

return statearr_15524;
})();
if(cljs.core.truth_(inst_15490__$1)){
var statearr_15525_15585 = state_15516__$1;
(statearr_15525_15585[(1)] = (29));

} else {
var statearr_15526_15586 = state_15516__$1;
(statearr_15526_15586[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (4))){
var inst_15434 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
if(cljs.core.truth_(inst_15434)){
var statearr_15527_15587 = state_15516__$1;
(statearr_15527_15587[(1)] = (8));

} else {
var statearr_15528_15588 = state_15516__$1;
(statearr_15528_15588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (15))){
var inst_15461 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
if(cljs.core.truth_(inst_15461)){
var statearr_15529_15589 = state_15516__$1;
(statearr_15529_15589[(1)] = (19));

} else {
var statearr_15530_15590 = state_15516__$1;
(statearr_15530_15590[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (21))){
var inst_15466 = (state_15516[(12)]);
var inst_15466__$1 = (state_15516[(2)]);
var inst_15467 = cljs.core.get.call(null,inst_15466__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15468 = cljs.core.get.call(null,inst_15466__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15469 = cljs.core.get.call(null,inst_15466__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15516__$1 = (function (){var statearr_15531 = state_15516;
(statearr_15531[(12)] = inst_15466__$1);

(statearr_15531[(9)] = inst_15467);

(statearr_15531[(13)] = inst_15468);

return statearr_15531;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15516__$1,(22),inst_15469);
} else {
if((state_val_15517 === (31))){
var inst_15498 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
if(cljs.core.truth_(inst_15498)){
var statearr_15532_15591 = state_15516__$1;
(statearr_15532_15591[(1)] = (32));

} else {
var statearr_15533_15592 = state_15516__$1;
(statearr_15533_15592[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (32))){
var inst_15475 = (state_15516[(14)]);
var state_15516__$1 = state_15516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15516__$1,(35),out,inst_15475);
} else {
if((state_val_15517 === (33))){
var inst_15466 = (state_15516[(12)]);
var inst_15443 = inst_15466;
var state_15516__$1 = (function (){var statearr_15534 = state_15516;
(statearr_15534[(7)] = inst_15443);

return statearr_15534;
})();
var statearr_15535_15593 = state_15516__$1;
(statearr_15535_15593[(2)] = null);

(statearr_15535_15593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (13))){
var inst_15443 = (state_15516[(7)]);
var inst_15450 = inst_15443.cljs$lang$protocol_mask$partition0$;
var inst_15451 = (inst_15450 & (64));
var inst_15452 = inst_15443.cljs$core$ISeq$;
var inst_15453 = (cljs.core.PROTOCOL_SENTINEL === inst_15452);
var inst_15454 = (inst_15451) || (inst_15453);
var state_15516__$1 = state_15516;
if(cljs.core.truth_(inst_15454)){
var statearr_15536_15594 = state_15516__$1;
(statearr_15536_15594[(1)] = (16));

} else {
var statearr_15537_15595 = state_15516__$1;
(statearr_15537_15595[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (22))){
var inst_15475 = (state_15516[(14)]);
var inst_15476 = (state_15516[(10)]);
var inst_15474 = (state_15516[(2)]);
var inst_15475__$1 = cljs.core.nth.call(null,inst_15474,(0),null);
var inst_15476__$1 = cljs.core.nth.call(null,inst_15474,(1),null);
var inst_15477 = (inst_15475__$1 == null);
var inst_15478 = cljs.core._EQ_.call(null,inst_15476__$1,change);
var inst_15479 = (inst_15477) || (inst_15478);
var state_15516__$1 = (function (){var statearr_15538 = state_15516;
(statearr_15538[(14)] = inst_15475__$1);

(statearr_15538[(10)] = inst_15476__$1);

return statearr_15538;
})();
if(cljs.core.truth_(inst_15479)){
var statearr_15539_15596 = state_15516__$1;
(statearr_15539_15596[(1)] = (23));

} else {
var statearr_15540_15597 = state_15516__$1;
(statearr_15540_15597[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (36))){
var inst_15466 = (state_15516[(12)]);
var inst_15443 = inst_15466;
var state_15516__$1 = (function (){var statearr_15541 = state_15516;
(statearr_15541[(7)] = inst_15443);

return statearr_15541;
})();
var statearr_15542_15598 = state_15516__$1;
(statearr_15542_15598[(2)] = null);

(statearr_15542_15598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (29))){
var inst_15490 = (state_15516[(11)]);
var state_15516__$1 = state_15516;
var statearr_15543_15599 = state_15516__$1;
(statearr_15543_15599[(2)] = inst_15490);

(statearr_15543_15599[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (6))){
var state_15516__$1 = state_15516;
var statearr_15544_15600 = state_15516__$1;
(statearr_15544_15600[(2)] = false);

(statearr_15544_15600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (28))){
var inst_15486 = (state_15516[(2)]);
var inst_15487 = calc_state.call(null);
var inst_15443 = inst_15487;
var state_15516__$1 = (function (){var statearr_15545 = state_15516;
(statearr_15545[(15)] = inst_15486);

(statearr_15545[(7)] = inst_15443);

return statearr_15545;
})();
var statearr_15546_15601 = state_15516__$1;
(statearr_15546_15601[(2)] = null);

(statearr_15546_15601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (25))){
var inst_15512 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
var statearr_15547_15602 = state_15516__$1;
(statearr_15547_15602[(2)] = inst_15512);

(statearr_15547_15602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (34))){
var inst_15510 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
var statearr_15548_15603 = state_15516__$1;
(statearr_15548_15603[(2)] = inst_15510);

(statearr_15548_15603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (17))){
var state_15516__$1 = state_15516;
var statearr_15549_15604 = state_15516__$1;
(statearr_15549_15604[(2)] = false);

(statearr_15549_15604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (3))){
var state_15516__$1 = state_15516;
var statearr_15550_15605 = state_15516__$1;
(statearr_15550_15605[(2)] = false);

(statearr_15550_15605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (12))){
var inst_15514 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15516__$1,inst_15514);
} else {
if((state_val_15517 === (2))){
var inst_15418 = (state_15516[(8)]);
var inst_15423 = inst_15418.cljs$lang$protocol_mask$partition0$;
var inst_15424 = (inst_15423 & (64));
var inst_15425 = inst_15418.cljs$core$ISeq$;
var inst_15426 = (cljs.core.PROTOCOL_SENTINEL === inst_15425);
var inst_15427 = (inst_15424) || (inst_15426);
var state_15516__$1 = state_15516;
if(cljs.core.truth_(inst_15427)){
var statearr_15551_15606 = state_15516__$1;
(statearr_15551_15606[(1)] = (5));

} else {
var statearr_15552_15607 = state_15516__$1;
(statearr_15552_15607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (23))){
var inst_15475 = (state_15516[(14)]);
var inst_15481 = (inst_15475 == null);
var state_15516__$1 = state_15516;
if(cljs.core.truth_(inst_15481)){
var statearr_15553_15608 = state_15516__$1;
(statearr_15553_15608[(1)] = (26));

} else {
var statearr_15554_15609 = state_15516__$1;
(statearr_15554_15609[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (35))){
var inst_15501 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
if(cljs.core.truth_(inst_15501)){
var statearr_15555_15610 = state_15516__$1;
(statearr_15555_15610[(1)] = (36));

} else {
var statearr_15556_15611 = state_15516__$1;
(statearr_15556_15611[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (19))){
var inst_15443 = (state_15516[(7)]);
var inst_15463 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15443);
var state_15516__$1 = state_15516;
var statearr_15557_15612 = state_15516__$1;
(statearr_15557_15612[(2)] = inst_15463);

(statearr_15557_15612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (11))){
var inst_15443 = (state_15516[(7)]);
var inst_15447 = (inst_15443 == null);
var inst_15448 = cljs.core.not.call(null,inst_15447);
var state_15516__$1 = state_15516;
if(inst_15448){
var statearr_15558_15613 = state_15516__$1;
(statearr_15558_15613[(1)] = (13));

} else {
var statearr_15559_15614 = state_15516__$1;
(statearr_15559_15614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (9))){
var inst_15418 = (state_15516[(8)]);
var state_15516__$1 = state_15516;
var statearr_15560_15615 = state_15516__$1;
(statearr_15560_15615[(2)] = inst_15418);

(statearr_15560_15615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (5))){
var state_15516__$1 = state_15516;
var statearr_15561_15616 = state_15516__$1;
(statearr_15561_15616[(2)] = true);

(statearr_15561_15616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (14))){
var state_15516__$1 = state_15516;
var statearr_15562_15617 = state_15516__$1;
(statearr_15562_15617[(2)] = false);

(statearr_15562_15617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (26))){
var inst_15476 = (state_15516[(10)]);
var inst_15483 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15476);
var state_15516__$1 = state_15516;
var statearr_15563_15618 = state_15516__$1;
(statearr_15563_15618[(2)] = inst_15483);

(statearr_15563_15618[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (16))){
var state_15516__$1 = state_15516;
var statearr_15564_15619 = state_15516__$1;
(statearr_15564_15619[(2)] = true);

(statearr_15564_15619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (38))){
var inst_15506 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
var statearr_15565_15620 = state_15516__$1;
(statearr_15565_15620[(2)] = inst_15506);

(statearr_15565_15620[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (30))){
var inst_15467 = (state_15516[(9)]);
var inst_15476 = (state_15516[(10)]);
var inst_15468 = (state_15516[(13)]);
var inst_15493 = cljs.core.empty_QMARK_.call(null,inst_15467);
var inst_15494 = inst_15468.call(null,inst_15476);
var inst_15495 = cljs.core.not.call(null,inst_15494);
var inst_15496 = (inst_15493) && (inst_15495);
var state_15516__$1 = state_15516;
var statearr_15566_15621 = state_15516__$1;
(statearr_15566_15621[(2)] = inst_15496);

(statearr_15566_15621[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (10))){
var inst_15418 = (state_15516[(8)]);
var inst_15439 = (state_15516[(2)]);
var inst_15440 = cljs.core.get.call(null,inst_15439,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15441 = cljs.core.get.call(null,inst_15439,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15442 = cljs.core.get.call(null,inst_15439,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15443 = inst_15418;
var state_15516__$1 = (function (){var statearr_15567 = state_15516;
(statearr_15567[(16)] = inst_15442);

(statearr_15567[(17)] = inst_15441);

(statearr_15567[(18)] = inst_15440);

(statearr_15567[(7)] = inst_15443);

return statearr_15567;
})();
var statearr_15568_15622 = state_15516__$1;
(statearr_15568_15622[(2)] = null);

(statearr_15568_15622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (18))){
var inst_15458 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
var statearr_15569_15623 = state_15516__$1;
(statearr_15569_15623[(2)] = inst_15458);

(statearr_15569_15623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (37))){
var state_15516__$1 = state_15516;
var statearr_15570_15624 = state_15516__$1;
(statearr_15570_15624[(2)] = null);

(statearr_15570_15624[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15517 === (8))){
var inst_15418 = (state_15516[(8)]);
var inst_15436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15418);
var state_15516__$1 = state_15516;
var statearr_15571_15625 = state_15516__$1;
(statearr_15571_15625[(2)] = inst_15436);

(statearr_15571_15625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__13812__auto___15579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13700__auto__,c__13812__auto___15579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13701__auto__ = null;
var cljs$core$async$mix_$_state_machine__13701__auto____0 = (function (){
var statearr_15575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15575[(0)] = cljs$core$async$mix_$_state_machine__13701__auto__);

(statearr_15575[(1)] = (1));

return statearr_15575;
});
var cljs$core$async$mix_$_state_machine__13701__auto____1 = (function (state_15516){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_15516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e15576){if((e15576 instanceof Object)){
var ex__13704__auto__ = e15576;
var statearr_15577_15626 = state_15516;
(statearr_15577_15626[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15627 = state_15516;
state_15516 = G__15627;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13701__auto__ = function(state_15516){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13701__auto____1.call(this,state_15516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13701__auto____0;
cljs$core$async$mix_$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13701__auto____1;
return cljs$core$async$mix_$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___15579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13814__auto__ = (function (){var statearr_15578 = f__13813__auto__.call(null);
(statearr_15578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___15579);

return statearr_15578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___15579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7536__auto__ = (((p == null))?null:p);
var m__7537__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7537__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7536__auto__ = (((p == null))?null:p);
var m__7537__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,p,v,ch);
} else {
var m__7537__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15628 = [];
var len__7981__auto___15631 = arguments.length;
var i__7982__auto___15632 = (0);
while(true){
if((i__7982__auto___15632 < len__7981__auto___15631)){
args15628.push((arguments[i__7982__auto___15632]));

var G__15633 = (i__7982__auto___15632 + (1));
i__7982__auto___15632 = G__15633;
continue;
} else {
}
break;
}

var G__15630 = args15628.length;
switch (G__15630) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15628.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7536__auto__ = (((p == null))?null:p);
var m__7537__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,p);
} else {
var m__7537__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7536__auto__ = (((p == null))?null:p);
var m__7537__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return m__7537__auto__.call(null,p,v);
} else {
var m__7537__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7537__auto____$1 == null))){
return m__7537__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15636 = [];
var len__7981__auto___15761 = arguments.length;
var i__7982__auto___15762 = (0);
while(true){
if((i__7982__auto___15762 < len__7981__auto___15761)){
args15636.push((arguments[i__7982__auto___15762]));

var G__15763 = (i__7982__auto___15762 + (1));
i__7982__auto___15762 = G__15763;
continue;
} else {
}
break;
}

var G__15638 = args15636.length;
switch (G__15638) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15636.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6873__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6873__auto__,mults){
return (function (p1__15635_SHARP_){
if(cljs.core.truth_(p1__15635_SHARP_.call(null,topic))){
return p1__15635_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15635_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6873__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15639 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15640){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15640 = meta15640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15641,meta15640__$1){
var self__ = this;
var _15641__$1 = this;
return (new cljs.core.async.t_cljs$core$async15639(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15640__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15641){
var self__ = this;
var _15641__$1 = this;
return self__.meta15640;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15639.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15639.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15640","meta15640",-1652514938,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15639";

cljs.core.async.t_cljs$core$async15639.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async15639");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15639 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15640){
return (new cljs.core.async.t_cljs$core$async15639(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15640));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15639(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13812__auto___15765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___15765,mults,ensure_mult,p){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___15765,mults,ensure_mult,p){
return (function (state_15713){
var state_val_15714 = (state_15713[(1)]);
if((state_val_15714 === (7))){
var inst_15709 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15715_15766 = state_15713__$1;
(statearr_15715_15766[(2)] = inst_15709);

(statearr_15715_15766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (20))){
var state_15713__$1 = state_15713;
var statearr_15716_15767 = state_15713__$1;
(statearr_15716_15767[(2)] = null);

(statearr_15716_15767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (1))){
var state_15713__$1 = state_15713;
var statearr_15717_15768 = state_15713__$1;
(statearr_15717_15768[(2)] = null);

(statearr_15717_15768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (24))){
var inst_15692 = (state_15713[(7)]);
var inst_15701 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15692);
var state_15713__$1 = state_15713;
var statearr_15718_15769 = state_15713__$1;
(statearr_15718_15769[(2)] = inst_15701);

(statearr_15718_15769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (4))){
var inst_15644 = (state_15713[(8)]);
var inst_15644__$1 = (state_15713[(2)]);
var inst_15645 = (inst_15644__$1 == null);
var state_15713__$1 = (function (){var statearr_15719 = state_15713;
(statearr_15719[(8)] = inst_15644__$1);

return statearr_15719;
})();
if(cljs.core.truth_(inst_15645)){
var statearr_15720_15770 = state_15713__$1;
(statearr_15720_15770[(1)] = (5));

} else {
var statearr_15721_15771 = state_15713__$1;
(statearr_15721_15771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (15))){
var inst_15686 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15722_15772 = state_15713__$1;
(statearr_15722_15772[(2)] = inst_15686);

(statearr_15722_15772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (21))){
var inst_15706 = (state_15713[(2)]);
var state_15713__$1 = (function (){var statearr_15723 = state_15713;
(statearr_15723[(9)] = inst_15706);

return statearr_15723;
})();
var statearr_15724_15773 = state_15713__$1;
(statearr_15724_15773[(2)] = null);

(statearr_15724_15773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (13))){
var inst_15668 = (state_15713[(10)]);
var inst_15670 = cljs.core.chunked_seq_QMARK_.call(null,inst_15668);
var state_15713__$1 = state_15713;
if(inst_15670){
var statearr_15725_15774 = state_15713__$1;
(statearr_15725_15774[(1)] = (16));

} else {
var statearr_15726_15775 = state_15713__$1;
(statearr_15726_15775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (22))){
var inst_15698 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15698)){
var statearr_15727_15776 = state_15713__$1;
(statearr_15727_15776[(1)] = (23));

} else {
var statearr_15728_15777 = state_15713__$1;
(statearr_15728_15777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (6))){
var inst_15644 = (state_15713[(8)]);
var inst_15694 = (state_15713[(11)]);
var inst_15692 = (state_15713[(7)]);
var inst_15692__$1 = topic_fn.call(null,inst_15644);
var inst_15693 = cljs.core.deref.call(null,mults);
var inst_15694__$1 = cljs.core.get.call(null,inst_15693,inst_15692__$1);
var state_15713__$1 = (function (){var statearr_15729 = state_15713;
(statearr_15729[(11)] = inst_15694__$1);

(statearr_15729[(7)] = inst_15692__$1);

return statearr_15729;
})();
if(cljs.core.truth_(inst_15694__$1)){
var statearr_15730_15778 = state_15713__$1;
(statearr_15730_15778[(1)] = (19));

} else {
var statearr_15731_15779 = state_15713__$1;
(statearr_15731_15779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (25))){
var inst_15703 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15732_15780 = state_15713__$1;
(statearr_15732_15780[(2)] = inst_15703);

(statearr_15732_15780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (17))){
var inst_15668 = (state_15713[(10)]);
var inst_15677 = cljs.core.first.call(null,inst_15668);
var inst_15678 = cljs.core.async.muxch_STAR_.call(null,inst_15677);
var inst_15679 = cljs.core.async.close_BANG_.call(null,inst_15678);
var inst_15680 = cljs.core.next.call(null,inst_15668);
var inst_15654 = inst_15680;
var inst_15655 = null;
var inst_15656 = (0);
var inst_15657 = (0);
var state_15713__$1 = (function (){var statearr_15733 = state_15713;
(statearr_15733[(12)] = inst_15656);

(statearr_15733[(13)] = inst_15654);

(statearr_15733[(14)] = inst_15655);

(statearr_15733[(15)] = inst_15679);

(statearr_15733[(16)] = inst_15657);

return statearr_15733;
})();
var statearr_15734_15781 = state_15713__$1;
(statearr_15734_15781[(2)] = null);

(statearr_15734_15781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (3))){
var inst_15711 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15713__$1,inst_15711);
} else {
if((state_val_15714 === (12))){
var inst_15688 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15735_15782 = state_15713__$1;
(statearr_15735_15782[(2)] = inst_15688);

(statearr_15735_15782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (2))){
var state_15713__$1 = state_15713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15713__$1,(4),ch);
} else {
if((state_val_15714 === (23))){
var state_15713__$1 = state_15713;
var statearr_15736_15783 = state_15713__$1;
(statearr_15736_15783[(2)] = null);

(statearr_15736_15783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (19))){
var inst_15644 = (state_15713[(8)]);
var inst_15694 = (state_15713[(11)]);
var inst_15696 = cljs.core.async.muxch_STAR_.call(null,inst_15694);
var state_15713__$1 = state_15713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15713__$1,(22),inst_15696,inst_15644);
} else {
if((state_val_15714 === (11))){
var inst_15654 = (state_15713[(13)]);
var inst_15668 = (state_15713[(10)]);
var inst_15668__$1 = cljs.core.seq.call(null,inst_15654);
var state_15713__$1 = (function (){var statearr_15737 = state_15713;
(statearr_15737[(10)] = inst_15668__$1);

return statearr_15737;
})();
if(inst_15668__$1){
var statearr_15738_15784 = state_15713__$1;
(statearr_15738_15784[(1)] = (13));

} else {
var statearr_15739_15785 = state_15713__$1;
(statearr_15739_15785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (9))){
var inst_15690 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15740_15786 = state_15713__$1;
(statearr_15740_15786[(2)] = inst_15690);

(statearr_15740_15786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (5))){
var inst_15651 = cljs.core.deref.call(null,mults);
var inst_15652 = cljs.core.vals.call(null,inst_15651);
var inst_15653 = cljs.core.seq.call(null,inst_15652);
var inst_15654 = inst_15653;
var inst_15655 = null;
var inst_15656 = (0);
var inst_15657 = (0);
var state_15713__$1 = (function (){var statearr_15741 = state_15713;
(statearr_15741[(12)] = inst_15656);

(statearr_15741[(13)] = inst_15654);

(statearr_15741[(14)] = inst_15655);

(statearr_15741[(16)] = inst_15657);

return statearr_15741;
})();
var statearr_15742_15787 = state_15713__$1;
(statearr_15742_15787[(2)] = null);

(statearr_15742_15787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (14))){
var state_15713__$1 = state_15713;
var statearr_15746_15788 = state_15713__$1;
(statearr_15746_15788[(2)] = null);

(statearr_15746_15788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (16))){
var inst_15668 = (state_15713[(10)]);
var inst_15672 = cljs.core.chunk_first.call(null,inst_15668);
var inst_15673 = cljs.core.chunk_rest.call(null,inst_15668);
var inst_15674 = cljs.core.count.call(null,inst_15672);
var inst_15654 = inst_15673;
var inst_15655 = inst_15672;
var inst_15656 = inst_15674;
var inst_15657 = (0);
var state_15713__$1 = (function (){var statearr_15747 = state_15713;
(statearr_15747[(12)] = inst_15656);

(statearr_15747[(13)] = inst_15654);

(statearr_15747[(14)] = inst_15655);

(statearr_15747[(16)] = inst_15657);

return statearr_15747;
})();
var statearr_15748_15789 = state_15713__$1;
(statearr_15748_15789[(2)] = null);

(statearr_15748_15789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (10))){
var inst_15656 = (state_15713[(12)]);
var inst_15654 = (state_15713[(13)]);
var inst_15655 = (state_15713[(14)]);
var inst_15657 = (state_15713[(16)]);
var inst_15662 = cljs.core._nth.call(null,inst_15655,inst_15657);
var inst_15663 = cljs.core.async.muxch_STAR_.call(null,inst_15662);
var inst_15664 = cljs.core.async.close_BANG_.call(null,inst_15663);
var inst_15665 = (inst_15657 + (1));
var tmp15743 = inst_15656;
var tmp15744 = inst_15654;
var tmp15745 = inst_15655;
var inst_15654__$1 = tmp15744;
var inst_15655__$1 = tmp15745;
var inst_15656__$1 = tmp15743;
var inst_15657__$1 = inst_15665;
var state_15713__$1 = (function (){var statearr_15749 = state_15713;
(statearr_15749[(12)] = inst_15656__$1);

(statearr_15749[(13)] = inst_15654__$1);

(statearr_15749[(14)] = inst_15655__$1);

(statearr_15749[(17)] = inst_15664);

(statearr_15749[(16)] = inst_15657__$1);

return statearr_15749;
})();
var statearr_15750_15790 = state_15713__$1;
(statearr_15750_15790[(2)] = null);

(statearr_15750_15790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (18))){
var inst_15683 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15751_15791 = state_15713__$1;
(statearr_15751_15791[(2)] = inst_15683);

(statearr_15751_15791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (8))){
var inst_15656 = (state_15713[(12)]);
var inst_15657 = (state_15713[(16)]);
var inst_15659 = (inst_15657 < inst_15656);
var inst_15660 = inst_15659;
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15660)){
var statearr_15752_15792 = state_15713__$1;
(statearr_15752_15792[(1)] = (10));

} else {
var statearr_15753_15793 = state_15713__$1;
(statearr_15753_15793[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__13812__auto___15765,mults,ensure_mult,p))
;
return ((function (switch__13700__auto__,c__13812__auto___15765,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_15757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15757[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_15757[(1)] = (1));

return statearr_15757;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_15713){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_15713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e15758){if((e15758 instanceof Object)){
var ex__13704__auto__ = e15758;
var statearr_15759_15794 = state_15713;
(statearr_15759_15794[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15795 = state_15713;
state_15713 = G__15795;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_15713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_15713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___15765,mults,ensure_mult,p))
})();
var state__13814__auto__ = (function (){var statearr_15760 = f__13813__auto__.call(null);
(statearr_15760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___15765);

return statearr_15760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___15765,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15796 = [];
var len__7981__auto___15799 = arguments.length;
var i__7982__auto___15800 = (0);
while(true){
if((i__7982__auto___15800 < len__7981__auto___15799)){
args15796.push((arguments[i__7982__auto___15800]));

var G__15801 = (i__7982__auto___15800 + (1));
i__7982__auto___15800 = G__15801;
continue;
} else {
}
break;
}

var G__15798 = args15796.length;
switch (G__15798) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15796.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15803 = [];
var len__7981__auto___15806 = arguments.length;
var i__7982__auto___15807 = (0);
while(true){
if((i__7982__auto___15807 < len__7981__auto___15806)){
args15803.push((arguments[i__7982__auto___15807]));

var G__15808 = (i__7982__auto___15807 + (1));
i__7982__auto___15807 = G__15808;
continue;
} else {
}
break;
}

var G__15805 = args15803.length;
switch (G__15805) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15803.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15810 = [];
var len__7981__auto___15881 = arguments.length;
var i__7982__auto___15882 = (0);
while(true){
if((i__7982__auto___15882 < len__7981__auto___15881)){
args15810.push((arguments[i__7982__auto___15882]));

var G__15883 = (i__7982__auto___15882 + (1));
i__7982__auto___15882 = G__15883;
continue;
} else {
}
break;
}

var G__15812 = args15810.length;
switch (G__15812) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15810.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__13812__auto___15885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___15885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___15885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15851){
var state_val_15852 = (state_15851[(1)]);
if((state_val_15852 === (7))){
var state_15851__$1 = state_15851;
var statearr_15853_15886 = state_15851__$1;
(statearr_15853_15886[(2)] = null);

(statearr_15853_15886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (1))){
var state_15851__$1 = state_15851;
var statearr_15854_15887 = state_15851__$1;
(statearr_15854_15887[(2)] = null);

(statearr_15854_15887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (4))){
var inst_15815 = (state_15851[(7)]);
var inst_15817 = (inst_15815 < cnt);
var state_15851__$1 = state_15851;
if(cljs.core.truth_(inst_15817)){
var statearr_15855_15888 = state_15851__$1;
(statearr_15855_15888[(1)] = (6));

} else {
var statearr_15856_15889 = state_15851__$1;
(statearr_15856_15889[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (15))){
var inst_15847 = (state_15851[(2)]);
var state_15851__$1 = state_15851;
var statearr_15857_15890 = state_15851__$1;
(statearr_15857_15890[(2)] = inst_15847);

(statearr_15857_15890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (13))){
var inst_15840 = cljs.core.async.close_BANG_.call(null,out);
var state_15851__$1 = state_15851;
var statearr_15858_15891 = state_15851__$1;
(statearr_15858_15891[(2)] = inst_15840);

(statearr_15858_15891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (6))){
var state_15851__$1 = state_15851;
var statearr_15859_15892 = state_15851__$1;
(statearr_15859_15892[(2)] = null);

(statearr_15859_15892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (3))){
var inst_15849 = (state_15851[(2)]);
var state_15851__$1 = state_15851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15851__$1,inst_15849);
} else {
if((state_val_15852 === (12))){
var inst_15837 = (state_15851[(8)]);
var inst_15837__$1 = (state_15851[(2)]);
var inst_15838 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15837__$1);
var state_15851__$1 = (function (){var statearr_15860 = state_15851;
(statearr_15860[(8)] = inst_15837__$1);

return statearr_15860;
})();
if(cljs.core.truth_(inst_15838)){
var statearr_15861_15893 = state_15851__$1;
(statearr_15861_15893[(1)] = (13));

} else {
var statearr_15862_15894 = state_15851__$1;
(statearr_15862_15894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (2))){
var inst_15814 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15815 = (0);
var state_15851__$1 = (function (){var statearr_15863 = state_15851;
(statearr_15863[(9)] = inst_15814);

(statearr_15863[(7)] = inst_15815);

return statearr_15863;
})();
var statearr_15864_15895 = state_15851__$1;
(statearr_15864_15895[(2)] = null);

(statearr_15864_15895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (11))){
var inst_15815 = (state_15851[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15851,(10),Object,null,(9));
var inst_15824 = chs__$1.call(null,inst_15815);
var inst_15825 = done.call(null,inst_15815);
var inst_15826 = cljs.core.async.take_BANG_.call(null,inst_15824,inst_15825);
var state_15851__$1 = state_15851;
var statearr_15865_15896 = state_15851__$1;
(statearr_15865_15896[(2)] = inst_15826);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15851__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (9))){
var inst_15815 = (state_15851[(7)]);
var inst_15828 = (state_15851[(2)]);
var inst_15829 = (inst_15815 + (1));
var inst_15815__$1 = inst_15829;
var state_15851__$1 = (function (){var statearr_15866 = state_15851;
(statearr_15866[(10)] = inst_15828);

(statearr_15866[(7)] = inst_15815__$1);

return statearr_15866;
})();
var statearr_15867_15897 = state_15851__$1;
(statearr_15867_15897[(2)] = null);

(statearr_15867_15897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (5))){
var inst_15835 = (state_15851[(2)]);
var state_15851__$1 = (function (){var statearr_15868 = state_15851;
(statearr_15868[(11)] = inst_15835);

return statearr_15868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15851__$1,(12),dchan);
} else {
if((state_val_15852 === (14))){
var inst_15837 = (state_15851[(8)]);
var inst_15842 = cljs.core.apply.call(null,f,inst_15837);
var state_15851__$1 = state_15851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15851__$1,(16),out,inst_15842);
} else {
if((state_val_15852 === (16))){
var inst_15844 = (state_15851[(2)]);
var state_15851__$1 = (function (){var statearr_15869 = state_15851;
(statearr_15869[(12)] = inst_15844);

return statearr_15869;
})();
var statearr_15870_15898 = state_15851__$1;
(statearr_15870_15898[(2)] = null);

(statearr_15870_15898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (10))){
var inst_15819 = (state_15851[(2)]);
var inst_15820 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15851__$1 = (function (){var statearr_15871 = state_15851;
(statearr_15871[(13)] = inst_15819);

return statearr_15871;
})();
var statearr_15872_15899 = state_15851__$1;
(statearr_15872_15899[(2)] = inst_15820);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15851__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (8))){
var inst_15833 = (state_15851[(2)]);
var state_15851__$1 = state_15851;
var statearr_15873_15900 = state_15851__$1;
(statearr_15873_15900[(2)] = inst_15833);

(statearr_15873_15900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto___15885,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13700__auto__,c__13812__auto___15885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_15877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15877[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_15877[(1)] = (1));

return statearr_15877;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_15851){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_15851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e15878){if((e15878 instanceof Object)){
var ex__13704__auto__ = e15878;
var statearr_15879_15901 = state_15851;
(statearr_15879_15901[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15902 = state_15851;
state_15851 = G__15902;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_15851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_15851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___15885,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13814__auto__ = (function (){var statearr_15880 = f__13813__auto__.call(null);
(statearr_15880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___15885);

return statearr_15880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___15885,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15904 = [];
var len__7981__auto___15962 = arguments.length;
var i__7982__auto___15963 = (0);
while(true){
if((i__7982__auto___15963 < len__7981__auto___15962)){
args15904.push((arguments[i__7982__auto___15963]));

var G__15964 = (i__7982__auto___15963 + (1));
i__7982__auto___15963 = G__15964;
continue;
} else {
}
break;
}

var G__15906 = args15904.length;
switch (G__15906) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15904.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13812__auto___15966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___15966,out){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___15966,out){
return (function (state_15938){
var state_val_15939 = (state_15938[(1)]);
if((state_val_15939 === (7))){
var inst_15918 = (state_15938[(7)]);
var inst_15917 = (state_15938[(8)]);
var inst_15917__$1 = (state_15938[(2)]);
var inst_15918__$1 = cljs.core.nth.call(null,inst_15917__$1,(0),null);
var inst_15919 = cljs.core.nth.call(null,inst_15917__$1,(1),null);
var inst_15920 = (inst_15918__$1 == null);
var state_15938__$1 = (function (){var statearr_15940 = state_15938;
(statearr_15940[(9)] = inst_15919);

(statearr_15940[(7)] = inst_15918__$1);

(statearr_15940[(8)] = inst_15917__$1);

return statearr_15940;
})();
if(cljs.core.truth_(inst_15920)){
var statearr_15941_15967 = state_15938__$1;
(statearr_15941_15967[(1)] = (8));

} else {
var statearr_15942_15968 = state_15938__$1;
(statearr_15942_15968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (1))){
var inst_15907 = cljs.core.vec.call(null,chs);
var inst_15908 = inst_15907;
var state_15938__$1 = (function (){var statearr_15943 = state_15938;
(statearr_15943[(10)] = inst_15908);

return statearr_15943;
})();
var statearr_15944_15969 = state_15938__$1;
(statearr_15944_15969[(2)] = null);

(statearr_15944_15969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (4))){
var inst_15908 = (state_15938[(10)]);
var state_15938__$1 = state_15938;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15938__$1,(7),inst_15908);
} else {
if((state_val_15939 === (6))){
var inst_15934 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
var statearr_15945_15970 = state_15938__$1;
(statearr_15945_15970[(2)] = inst_15934);

(statearr_15945_15970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (3))){
var inst_15936 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15938__$1,inst_15936);
} else {
if((state_val_15939 === (2))){
var inst_15908 = (state_15938[(10)]);
var inst_15910 = cljs.core.count.call(null,inst_15908);
var inst_15911 = (inst_15910 > (0));
var state_15938__$1 = state_15938;
if(cljs.core.truth_(inst_15911)){
var statearr_15947_15971 = state_15938__$1;
(statearr_15947_15971[(1)] = (4));

} else {
var statearr_15948_15972 = state_15938__$1;
(statearr_15948_15972[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (11))){
var inst_15908 = (state_15938[(10)]);
var inst_15927 = (state_15938[(2)]);
var tmp15946 = inst_15908;
var inst_15908__$1 = tmp15946;
var state_15938__$1 = (function (){var statearr_15949 = state_15938;
(statearr_15949[(11)] = inst_15927);

(statearr_15949[(10)] = inst_15908__$1);

return statearr_15949;
})();
var statearr_15950_15973 = state_15938__$1;
(statearr_15950_15973[(2)] = null);

(statearr_15950_15973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (9))){
var inst_15918 = (state_15938[(7)]);
var state_15938__$1 = state_15938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15938__$1,(11),out,inst_15918);
} else {
if((state_val_15939 === (5))){
var inst_15932 = cljs.core.async.close_BANG_.call(null,out);
var state_15938__$1 = state_15938;
var statearr_15951_15974 = state_15938__$1;
(statearr_15951_15974[(2)] = inst_15932);

(statearr_15951_15974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (10))){
var inst_15930 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
var statearr_15952_15975 = state_15938__$1;
(statearr_15952_15975[(2)] = inst_15930);

(statearr_15952_15975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (8))){
var inst_15919 = (state_15938[(9)]);
var inst_15918 = (state_15938[(7)]);
var inst_15917 = (state_15938[(8)]);
var inst_15908 = (state_15938[(10)]);
var inst_15922 = (function (){var cs = inst_15908;
var vec__15913 = inst_15917;
var v = inst_15918;
var c = inst_15919;
return ((function (cs,vec__15913,v,c,inst_15919,inst_15918,inst_15917,inst_15908,state_val_15939,c__13812__auto___15966,out){
return (function (p1__15903_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15903_SHARP_);
});
;})(cs,vec__15913,v,c,inst_15919,inst_15918,inst_15917,inst_15908,state_val_15939,c__13812__auto___15966,out))
})();
var inst_15923 = cljs.core.filterv.call(null,inst_15922,inst_15908);
var inst_15908__$1 = inst_15923;
var state_15938__$1 = (function (){var statearr_15953 = state_15938;
(statearr_15953[(10)] = inst_15908__$1);

return statearr_15953;
})();
var statearr_15954_15976 = state_15938__$1;
(statearr_15954_15976[(2)] = null);

(statearr_15954_15976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto___15966,out))
;
return ((function (switch__13700__auto__,c__13812__auto___15966,out){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_15958 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15958[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_15958[(1)] = (1));

return statearr_15958;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_15938){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_15938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e15959){if((e15959 instanceof Object)){
var ex__13704__auto__ = e15959;
var statearr_15960_15977 = state_15938;
(statearr_15960_15977[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15978 = state_15938;
state_15938 = G__15978;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_15938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_15938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___15966,out))
})();
var state__13814__auto__ = (function (){var statearr_15961 = f__13813__auto__.call(null);
(statearr_15961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___15966);

return statearr_15961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___15966,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15979 = [];
var len__7981__auto___16028 = arguments.length;
var i__7982__auto___16029 = (0);
while(true){
if((i__7982__auto___16029 < len__7981__auto___16028)){
args15979.push((arguments[i__7982__auto___16029]));

var G__16030 = (i__7982__auto___16029 + (1));
i__7982__auto___16029 = G__16030;
continue;
} else {
}
break;
}

var G__15981 = args15979.length;
switch (G__15981) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15979.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13812__auto___16032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___16032,out){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___16032,out){
return (function (state_16005){
var state_val_16006 = (state_16005[(1)]);
if((state_val_16006 === (7))){
var inst_15987 = (state_16005[(7)]);
var inst_15987__$1 = (state_16005[(2)]);
var inst_15988 = (inst_15987__$1 == null);
var inst_15989 = cljs.core.not.call(null,inst_15988);
var state_16005__$1 = (function (){var statearr_16007 = state_16005;
(statearr_16007[(7)] = inst_15987__$1);

return statearr_16007;
})();
if(inst_15989){
var statearr_16008_16033 = state_16005__$1;
(statearr_16008_16033[(1)] = (8));

} else {
var statearr_16009_16034 = state_16005__$1;
(statearr_16009_16034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16006 === (1))){
var inst_15982 = (0);
var state_16005__$1 = (function (){var statearr_16010 = state_16005;
(statearr_16010[(8)] = inst_15982);

return statearr_16010;
})();
var statearr_16011_16035 = state_16005__$1;
(statearr_16011_16035[(2)] = null);

(statearr_16011_16035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16006 === (4))){
var state_16005__$1 = state_16005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16005__$1,(7),ch);
} else {
if((state_val_16006 === (6))){
var inst_16000 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
var statearr_16012_16036 = state_16005__$1;
(statearr_16012_16036[(2)] = inst_16000);

(statearr_16012_16036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16006 === (3))){
var inst_16002 = (state_16005[(2)]);
var inst_16003 = cljs.core.async.close_BANG_.call(null,out);
var state_16005__$1 = (function (){var statearr_16013 = state_16005;
(statearr_16013[(9)] = inst_16002);

return statearr_16013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16005__$1,inst_16003);
} else {
if((state_val_16006 === (2))){
var inst_15982 = (state_16005[(8)]);
var inst_15984 = (inst_15982 < n);
var state_16005__$1 = state_16005;
if(cljs.core.truth_(inst_15984)){
var statearr_16014_16037 = state_16005__$1;
(statearr_16014_16037[(1)] = (4));

} else {
var statearr_16015_16038 = state_16005__$1;
(statearr_16015_16038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16006 === (11))){
var inst_15982 = (state_16005[(8)]);
var inst_15992 = (state_16005[(2)]);
var inst_15993 = (inst_15982 + (1));
var inst_15982__$1 = inst_15993;
var state_16005__$1 = (function (){var statearr_16016 = state_16005;
(statearr_16016[(10)] = inst_15992);

(statearr_16016[(8)] = inst_15982__$1);

return statearr_16016;
})();
var statearr_16017_16039 = state_16005__$1;
(statearr_16017_16039[(2)] = null);

(statearr_16017_16039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16006 === (9))){
var state_16005__$1 = state_16005;
var statearr_16018_16040 = state_16005__$1;
(statearr_16018_16040[(2)] = null);

(statearr_16018_16040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16006 === (5))){
var state_16005__$1 = state_16005;
var statearr_16019_16041 = state_16005__$1;
(statearr_16019_16041[(2)] = null);

(statearr_16019_16041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16006 === (10))){
var inst_15997 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
var statearr_16020_16042 = state_16005__$1;
(statearr_16020_16042[(2)] = inst_15997);

(statearr_16020_16042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16006 === (8))){
var inst_15987 = (state_16005[(7)]);
var state_16005__$1 = state_16005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16005__$1,(11),out,inst_15987);
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
});})(c__13812__auto___16032,out))
;
return ((function (switch__13700__auto__,c__13812__auto___16032,out){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_16024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16024[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_16024[(1)] = (1));

return statearr_16024;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_16005){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_16005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e16025){if((e16025 instanceof Object)){
var ex__13704__auto__ = e16025;
var statearr_16026_16043 = state_16005;
(statearr_16026_16043[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16044 = state_16005;
state_16005 = G__16044;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_16005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_16005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___16032,out))
})();
var state__13814__auto__ = (function (){var statearr_16027 = f__13813__auto__.call(null);
(statearr_16027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___16032);

return statearr_16027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___16032,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16052 = (function (f,ch,meta16053){
this.f = f;
this.ch = ch;
this.meta16053 = meta16053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16054,meta16053__$1){
var self__ = this;
var _16054__$1 = this;
return (new cljs.core.async.t_cljs$core$async16052(self__.f,self__.ch,meta16053__$1));
});

cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16054){
var self__ = this;
var _16054__$1 = this;
return self__.meta16053;
});

cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16055 = (function (f,ch,meta16053,_,fn1,meta16056){
this.f = f;
this.ch = ch;
this.meta16053 = meta16053;
this._ = _;
this.fn1 = fn1;
this.meta16056 = meta16056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16057,meta16056__$1){
var self__ = this;
var _16057__$1 = this;
return (new cljs.core.async.t_cljs$core$async16055(self__.f,self__.ch,self__.meta16053,self__._,self__.fn1,meta16056__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16057){
var self__ = this;
var _16057__$1 = this;
return self__.meta16056;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16045_SHARP_){
return f1.call(null,(((p1__16045_SHARP_ == null))?null:self__.f.call(null,p1__16045_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16055.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16053","meta16053",-256698896,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16052","cljs.core.async/t_cljs$core$async16052",1335699530,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16056","meta16056",349594508,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16055";

cljs.core.async.t_cljs$core$async16055.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async16055");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16055 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16055(f__$1,ch__$1,meta16053__$1,___$2,fn1__$1,meta16056){
return (new cljs.core.async.t_cljs$core$async16055(f__$1,ch__$1,meta16053__$1,___$2,fn1__$1,meta16056));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16055(self__.f,self__.ch,self__.meta16053,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6861__auto__ = ret;
if(cljs.core.truth_(and__6861__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6861__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16053","meta16053",-256698896,null)], null);
});

cljs.core.async.t_cljs$core$async16052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16052";

cljs.core.async.t_cljs$core$async16052.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async16052");
});

cljs.core.async.__GT_t_cljs$core$async16052 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16052(f__$1,ch__$1,meta16053){
return (new cljs.core.async.t_cljs$core$async16052(f__$1,ch__$1,meta16053));
});

}

return (new cljs.core.async.t_cljs$core$async16052(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16061 = (function (f,ch,meta16062){
this.f = f;
this.ch = ch;
this.meta16062 = meta16062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16063,meta16062__$1){
var self__ = this;
var _16063__$1 = this;
return (new cljs.core.async.t_cljs$core$async16061(self__.f,self__.ch,meta16062__$1));
});

cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16063){
var self__ = this;
var _16063__$1 = this;
return self__.meta16062;
});

cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16062","meta16062",778416924,null)], null);
});

cljs.core.async.t_cljs$core$async16061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16061";

cljs.core.async.t_cljs$core$async16061.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async16061");
});

cljs.core.async.__GT_t_cljs$core$async16061 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16061(f__$1,ch__$1,meta16062){
return (new cljs.core.async.t_cljs$core$async16061(f__$1,ch__$1,meta16062));
});

}

return (new cljs.core.async.t_cljs$core$async16061(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16067 = (function (p,ch,meta16068){
this.p = p;
this.ch = ch;
this.meta16068 = meta16068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16069,meta16068__$1){
var self__ = this;
var _16069__$1 = this;
return (new cljs.core.async.t_cljs$core$async16067(self__.p,self__.ch,meta16068__$1));
});

cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16069){
var self__ = this;
var _16069__$1 = this;
return self__.meta16068;
});

cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16068","meta16068",-1199449575,null)], null);
});

cljs.core.async.t_cljs$core$async16067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16067";

cljs.core.async.t_cljs$core$async16067.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write.call(null,writer__7480__auto__,"cljs.core.async/t_cljs$core$async16067");
});

cljs.core.async.__GT_t_cljs$core$async16067 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16067(p__$1,ch__$1,meta16068){
return (new cljs.core.async.t_cljs$core$async16067(p__$1,ch__$1,meta16068));
});

}

return (new cljs.core.async.t_cljs$core$async16067(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16070 = [];
var len__7981__auto___16114 = arguments.length;
var i__7982__auto___16115 = (0);
while(true){
if((i__7982__auto___16115 < len__7981__auto___16114)){
args16070.push((arguments[i__7982__auto___16115]));

var G__16116 = (i__7982__auto___16115 + (1));
i__7982__auto___16115 = G__16116;
continue;
} else {
}
break;
}

var G__16072 = args16070.length;
switch (G__16072) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16070.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13812__auto___16118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___16118,out){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___16118,out){
return (function (state_16093){
var state_val_16094 = (state_16093[(1)]);
if((state_val_16094 === (7))){
var inst_16089 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16095_16119 = state_16093__$1;
(statearr_16095_16119[(2)] = inst_16089);

(statearr_16095_16119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (1))){
var state_16093__$1 = state_16093;
var statearr_16096_16120 = state_16093__$1;
(statearr_16096_16120[(2)] = null);

(statearr_16096_16120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (4))){
var inst_16075 = (state_16093[(7)]);
var inst_16075__$1 = (state_16093[(2)]);
var inst_16076 = (inst_16075__$1 == null);
var state_16093__$1 = (function (){var statearr_16097 = state_16093;
(statearr_16097[(7)] = inst_16075__$1);

return statearr_16097;
})();
if(cljs.core.truth_(inst_16076)){
var statearr_16098_16121 = state_16093__$1;
(statearr_16098_16121[(1)] = (5));

} else {
var statearr_16099_16122 = state_16093__$1;
(statearr_16099_16122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (6))){
var inst_16075 = (state_16093[(7)]);
var inst_16080 = p.call(null,inst_16075);
var state_16093__$1 = state_16093;
if(cljs.core.truth_(inst_16080)){
var statearr_16100_16123 = state_16093__$1;
(statearr_16100_16123[(1)] = (8));

} else {
var statearr_16101_16124 = state_16093__$1;
(statearr_16101_16124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (3))){
var inst_16091 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16093__$1,inst_16091);
} else {
if((state_val_16094 === (2))){
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16093__$1,(4),ch);
} else {
if((state_val_16094 === (11))){
var inst_16083 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16102_16125 = state_16093__$1;
(statearr_16102_16125[(2)] = inst_16083);

(statearr_16102_16125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (9))){
var state_16093__$1 = state_16093;
var statearr_16103_16126 = state_16093__$1;
(statearr_16103_16126[(2)] = null);

(statearr_16103_16126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (5))){
var inst_16078 = cljs.core.async.close_BANG_.call(null,out);
var state_16093__$1 = state_16093;
var statearr_16104_16127 = state_16093__$1;
(statearr_16104_16127[(2)] = inst_16078);

(statearr_16104_16127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (10))){
var inst_16086 = (state_16093[(2)]);
var state_16093__$1 = (function (){var statearr_16105 = state_16093;
(statearr_16105[(8)] = inst_16086);

return statearr_16105;
})();
var statearr_16106_16128 = state_16093__$1;
(statearr_16106_16128[(2)] = null);

(statearr_16106_16128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (8))){
var inst_16075 = (state_16093[(7)]);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16093__$1,(11),out,inst_16075);
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
});})(c__13812__auto___16118,out))
;
return ((function (switch__13700__auto__,c__13812__auto___16118,out){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_16110 = [null,null,null,null,null,null,null,null,null];
(statearr_16110[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_16110[(1)] = (1));

return statearr_16110;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_16093){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_16093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e16111){if((e16111 instanceof Object)){
var ex__13704__auto__ = e16111;
var statearr_16112_16129 = state_16093;
(statearr_16112_16129[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16130 = state_16093;
state_16093 = G__16130;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_16093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_16093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___16118,out))
})();
var state__13814__auto__ = (function (){var statearr_16113 = f__13813__auto__.call(null);
(statearr_16113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___16118);

return statearr_16113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___16118,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16131 = [];
var len__7981__auto___16134 = arguments.length;
var i__7982__auto___16135 = (0);
while(true){
if((i__7982__auto___16135 < len__7981__auto___16134)){
args16131.push((arguments[i__7982__auto___16135]));

var G__16136 = (i__7982__auto___16135 + (1));
i__7982__auto___16135 = G__16136;
continue;
} else {
}
break;
}

var G__16133 = args16131.length;
switch (G__16133) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16131.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto__){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto__){
return (function (state_16303){
var state_val_16304 = (state_16303[(1)]);
if((state_val_16304 === (7))){
var inst_16299 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16305_16346 = state_16303__$1;
(statearr_16305_16346[(2)] = inst_16299);

(statearr_16305_16346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (20))){
var inst_16269 = (state_16303[(7)]);
var inst_16280 = (state_16303[(2)]);
var inst_16281 = cljs.core.next.call(null,inst_16269);
var inst_16255 = inst_16281;
var inst_16256 = null;
var inst_16257 = (0);
var inst_16258 = (0);
var state_16303__$1 = (function (){var statearr_16306 = state_16303;
(statearr_16306[(8)] = inst_16257);

(statearr_16306[(9)] = inst_16258);

(statearr_16306[(10)] = inst_16280);

(statearr_16306[(11)] = inst_16255);

(statearr_16306[(12)] = inst_16256);

return statearr_16306;
})();
var statearr_16307_16347 = state_16303__$1;
(statearr_16307_16347[(2)] = null);

(statearr_16307_16347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (1))){
var state_16303__$1 = state_16303;
var statearr_16308_16348 = state_16303__$1;
(statearr_16308_16348[(2)] = null);

(statearr_16308_16348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (4))){
var inst_16244 = (state_16303[(13)]);
var inst_16244__$1 = (state_16303[(2)]);
var inst_16245 = (inst_16244__$1 == null);
var state_16303__$1 = (function (){var statearr_16309 = state_16303;
(statearr_16309[(13)] = inst_16244__$1);

return statearr_16309;
})();
if(cljs.core.truth_(inst_16245)){
var statearr_16310_16349 = state_16303__$1;
(statearr_16310_16349[(1)] = (5));

} else {
var statearr_16311_16350 = state_16303__$1;
(statearr_16311_16350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (15))){
var state_16303__$1 = state_16303;
var statearr_16315_16351 = state_16303__$1;
(statearr_16315_16351[(2)] = null);

(statearr_16315_16351[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (21))){
var state_16303__$1 = state_16303;
var statearr_16316_16352 = state_16303__$1;
(statearr_16316_16352[(2)] = null);

(statearr_16316_16352[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (13))){
var inst_16257 = (state_16303[(8)]);
var inst_16258 = (state_16303[(9)]);
var inst_16255 = (state_16303[(11)]);
var inst_16256 = (state_16303[(12)]);
var inst_16265 = (state_16303[(2)]);
var inst_16266 = (inst_16258 + (1));
var tmp16312 = inst_16257;
var tmp16313 = inst_16255;
var tmp16314 = inst_16256;
var inst_16255__$1 = tmp16313;
var inst_16256__$1 = tmp16314;
var inst_16257__$1 = tmp16312;
var inst_16258__$1 = inst_16266;
var state_16303__$1 = (function (){var statearr_16317 = state_16303;
(statearr_16317[(14)] = inst_16265);

(statearr_16317[(8)] = inst_16257__$1);

(statearr_16317[(9)] = inst_16258__$1);

(statearr_16317[(11)] = inst_16255__$1);

(statearr_16317[(12)] = inst_16256__$1);

return statearr_16317;
})();
var statearr_16318_16353 = state_16303__$1;
(statearr_16318_16353[(2)] = null);

(statearr_16318_16353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (22))){
var state_16303__$1 = state_16303;
var statearr_16319_16354 = state_16303__$1;
(statearr_16319_16354[(2)] = null);

(statearr_16319_16354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (6))){
var inst_16244 = (state_16303[(13)]);
var inst_16253 = f.call(null,inst_16244);
var inst_16254 = cljs.core.seq.call(null,inst_16253);
var inst_16255 = inst_16254;
var inst_16256 = null;
var inst_16257 = (0);
var inst_16258 = (0);
var state_16303__$1 = (function (){var statearr_16320 = state_16303;
(statearr_16320[(8)] = inst_16257);

(statearr_16320[(9)] = inst_16258);

(statearr_16320[(11)] = inst_16255);

(statearr_16320[(12)] = inst_16256);

return statearr_16320;
})();
var statearr_16321_16355 = state_16303__$1;
(statearr_16321_16355[(2)] = null);

(statearr_16321_16355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (17))){
var inst_16269 = (state_16303[(7)]);
var inst_16273 = cljs.core.chunk_first.call(null,inst_16269);
var inst_16274 = cljs.core.chunk_rest.call(null,inst_16269);
var inst_16275 = cljs.core.count.call(null,inst_16273);
var inst_16255 = inst_16274;
var inst_16256 = inst_16273;
var inst_16257 = inst_16275;
var inst_16258 = (0);
var state_16303__$1 = (function (){var statearr_16322 = state_16303;
(statearr_16322[(8)] = inst_16257);

(statearr_16322[(9)] = inst_16258);

(statearr_16322[(11)] = inst_16255);

(statearr_16322[(12)] = inst_16256);

return statearr_16322;
})();
var statearr_16323_16356 = state_16303__$1;
(statearr_16323_16356[(2)] = null);

(statearr_16323_16356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (3))){
var inst_16301 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16303__$1,inst_16301);
} else {
if((state_val_16304 === (12))){
var inst_16289 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16324_16357 = state_16303__$1;
(statearr_16324_16357[(2)] = inst_16289);

(statearr_16324_16357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (2))){
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16303__$1,(4),in$);
} else {
if((state_val_16304 === (23))){
var inst_16297 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16325_16358 = state_16303__$1;
(statearr_16325_16358[(2)] = inst_16297);

(statearr_16325_16358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (19))){
var inst_16284 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16326_16359 = state_16303__$1;
(statearr_16326_16359[(2)] = inst_16284);

(statearr_16326_16359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (11))){
var inst_16269 = (state_16303[(7)]);
var inst_16255 = (state_16303[(11)]);
var inst_16269__$1 = cljs.core.seq.call(null,inst_16255);
var state_16303__$1 = (function (){var statearr_16327 = state_16303;
(statearr_16327[(7)] = inst_16269__$1);

return statearr_16327;
})();
if(inst_16269__$1){
var statearr_16328_16360 = state_16303__$1;
(statearr_16328_16360[(1)] = (14));

} else {
var statearr_16329_16361 = state_16303__$1;
(statearr_16329_16361[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (9))){
var inst_16291 = (state_16303[(2)]);
var inst_16292 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16303__$1 = (function (){var statearr_16330 = state_16303;
(statearr_16330[(15)] = inst_16291);

return statearr_16330;
})();
if(cljs.core.truth_(inst_16292)){
var statearr_16331_16362 = state_16303__$1;
(statearr_16331_16362[(1)] = (21));

} else {
var statearr_16332_16363 = state_16303__$1;
(statearr_16332_16363[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (5))){
var inst_16247 = cljs.core.async.close_BANG_.call(null,out);
var state_16303__$1 = state_16303;
var statearr_16333_16364 = state_16303__$1;
(statearr_16333_16364[(2)] = inst_16247);

(statearr_16333_16364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (14))){
var inst_16269 = (state_16303[(7)]);
var inst_16271 = cljs.core.chunked_seq_QMARK_.call(null,inst_16269);
var state_16303__$1 = state_16303;
if(inst_16271){
var statearr_16334_16365 = state_16303__$1;
(statearr_16334_16365[(1)] = (17));

} else {
var statearr_16335_16366 = state_16303__$1;
(statearr_16335_16366[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (16))){
var inst_16287 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16336_16367 = state_16303__$1;
(statearr_16336_16367[(2)] = inst_16287);

(statearr_16336_16367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (10))){
var inst_16258 = (state_16303[(9)]);
var inst_16256 = (state_16303[(12)]);
var inst_16263 = cljs.core._nth.call(null,inst_16256,inst_16258);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16303__$1,(13),out,inst_16263);
} else {
if((state_val_16304 === (18))){
var inst_16269 = (state_16303[(7)]);
var inst_16278 = cljs.core.first.call(null,inst_16269);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16303__$1,(20),out,inst_16278);
} else {
if((state_val_16304 === (8))){
var inst_16257 = (state_16303[(8)]);
var inst_16258 = (state_16303[(9)]);
var inst_16260 = (inst_16258 < inst_16257);
var inst_16261 = inst_16260;
var state_16303__$1 = state_16303;
if(cljs.core.truth_(inst_16261)){
var statearr_16337_16368 = state_16303__$1;
(statearr_16337_16368[(1)] = (10));

} else {
var statearr_16338_16369 = state_16303__$1;
(statearr_16338_16369[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__13812__auto__))
;
return ((function (switch__13700__auto__,c__13812__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13701__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13701__auto____0 = (function (){
var statearr_16342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16342[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13701__auto__);

(statearr_16342[(1)] = (1));

return statearr_16342;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13701__auto____1 = (function (state_16303){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_16303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e16343){if((e16343 instanceof Object)){
var ex__13704__auto__ = e16343;
var statearr_16344_16370 = state_16303;
(statearr_16344_16370[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16371 = state_16303;
state_16303 = G__16371;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13701__auto__ = function(state_16303){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13701__auto____1.call(this,state_16303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13701__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13701__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto__))
})();
var state__13814__auto__ = (function (){var statearr_16345 = f__13813__auto__.call(null);
(statearr_16345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto__);

return statearr_16345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto__))
);

return c__13812__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16372 = [];
var len__7981__auto___16375 = arguments.length;
var i__7982__auto___16376 = (0);
while(true){
if((i__7982__auto___16376 < len__7981__auto___16375)){
args16372.push((arguments[i__7982__auto___16376]));

var G__16377 = (i__7982__auto___16376 + (1));
i__7982__auto___16376 = G__16377;
continue;
} else {
}
break;
}

var G__16374 = args16372.length;
switch (G__16374) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16372.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16379 = [];
var len__7981__auto___16382 = arguments.length;
var i__7982__auto___16383 = (0);
while(true){
if((i__7982__auto___16383 < len__7981__auto___16382)){
args16379.push((arguments[i__7982__auto___16383]));

var G__16384 = (i__7982__auto___16383 + (1));
i__7982__auto___16383 = G__16384;
continue;
} else {
}
break;
}

var G__16381 = args16379.length;
switch (G__16381) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16379.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16386 = [];
var len__7981__auto___16437 = arguments.length;
var i__7982__auto___16438 = (0);
while(true){
if((i__7982__auto___16438 < len__7981__auto___16437)){
args16386.push((arguments[i__7982__auto___16438]));

var G__16439 = (i__7982__auto___16438 + (1));
i__7982__auto___16438 = G__16439;
continue;
} else {
}
break;
}

var G__16388 = args16386.length;
switch (G__16388) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16386.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13812__auto___16441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___16441,out){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___16441,out){
return (function (state_16412){
var state_val_16413 = (state_16412[(1)]);
if((state_val_16413 === (7))){
var inst_16407 = (state_16412[(2)]);
var state_16412__$1 = state_16412;
var statearr_16414_16442 = state_16412__$1;
(statearr_16414_16442[(2)] = inst_16407);

(statearr_16414_16442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16413 === (1))){
var inst_16389 = null;
var state_16412__$1 = (function (){var statearr_16415 = state_16412;
(statearr_16415[(7)] = inst_16389);

return statearr_16415;
})();
var statearr_16416_16443 = state_16412__$1;
(statearr_16416_16443[(2)] = null);

(statearr_16416_16443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16413 === (4))){
var inst_16392 = (state_16412[(8)]);
var inst_16392__$1 = (state_16412[(2)]);
var inst_16393 = (inst_16392__$1 == null);
var inst_16394 = cljs.core.not.call(null,inst_16393);
var state_16412__$1 = (function (){var statearr_16417 = state_16412;
(statearr_16417[(8)] = inst_16392__$1);

return statearr_16417;
})();
if(inst_16394){
var statearr_16418_16444 = state_16412__$1;
(statearr_16418_16444[(1)] = (5));

} else {
var statearr_16419_16445 = state_16412__$1;
(statearr_16419_16445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16413 === (6))){
var state_16412__$1 = state_16412;
var statearr_16420_16446 = state_16412__$1;
(statearr_16420_16446[(2)] = null);

(statearr_16420_16446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16413 === (3))){
var inst_16409 = (state_16412[(2)]);
var inst_16410 = cljs.core.async.close_BANG_.call(null,out);
var state_16412__$1 = (function (){var statearr_16421 = state_16412;
(statearr_16421[(9)] = inst_16409);

return statearr_16421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16412__$1,inst_16410);
} else {
if((state_val_16413 === (2))){
var state_16412__$1 = state_16412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16412__$1,(4),ch);
} else {
if((state_val_16413 === (11))){
var inst_16392 = (state_16412[(8)]);
var inst_16401 = (state_16412[(2)]);
var inst_16389 = inst_16392;
var state_16412__$1 = (function (){var statearr_16422 = state_16412;
(statearr_16422[(7)] = inst_16389);

(statearr_16422[(10)] = inst_16401);

return statearr_16422;
})();
var statearr_16423_16447 = state_16412__$1;
(statearr_16423_16447[(2)] = null);

(statearr_16423_16447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16413 === (9))){
var inst_16392 = (state_16412[(8)]);
var state_16412__$1 = state_16412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16412__$1,(11),out,inst_16392);
} else {
if((state_val_16413 === (5))){
var inst_16389 = (state_16412[(7)]);
var inst_16392 = (state_16412[(8)]);
var inst_16396 = cljs.core._EQ_.call(null,inst_16392,inst_16389);
var state_16412__$1 = state_16412;
if(inst_16396){
var statearr_16425_16448 = state_16412__$1;
(statearr_16425_16448[(1)] = (8));

} else {
var statearr_16426_16449 = state_16412__$1;
(statearr_16426_16449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16413 === (10))){
var inst_16404 = (state_16412[(2)]);
var state_16412__$1 = state_16412;
var statearr_16427_16450 = state_16412__$1;
(statearr_16427_16450[(2)] = inst_16404);

(statearr_16427_16450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16413 === (8))){
var inst_16389 = (state_16412[(7)]);
var tmp16424 = inst_16389;
var inst_16389__$1 = tmp16424;
var state_16412__$1 = (function (){var statearr_16428 = state_16412;
(statearr_16428[(7)] = inst_16389__$1);

return statearr_16428;
})();
var statearr_16429_16451 = state_16412__$1;
(statearr_16429_16451[(2)] = null);

(statearr_16429_16451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto___16441,out))
;
return ((function (switch__13700__auto__,c__13812__auto___16441,out){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_16433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16433[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_16433[(1)] = (1));

return statearr_16433;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_16412){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_16412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e16434){if((e16434 instanceof Object)){
var ex__13704__auto__ = e16434;
var statearr_16435_16452 = state_16412;
(statearr_16435_16452[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16453 = state_16412;
state_16412 = G__16453;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_16412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_16412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___16441,out))
})();
var state__13814__auto__ = (function (){var statearr_16436 = f__13813__auto__.call(null);
(statearr_16436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___16441);

return statearr_16436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___16441,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16454 = [];
var len__7981__auto___16524 = arguments.length;
var i__7982__auto___16525 = (0);
while(true){
if((i__7982__auto___16525 < len__7981__auto___16524)){
args16454.push((arguments[i__7982__auto___16525]));

var G__16526 = (i__7982__auto___16525 + (1));
i__7982__auto___16525 = G__16526;
continue;
} else {
}
break;
}

var G__16456 = args16454.length;
switch (G__16456) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16454.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13812__auto___16528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___16528,out){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___16528,out){
return (function (state_16494){
var state_val_16495 = (state_16494[(1)]);
if((state_val_16495 === (7))){
var inst_16490 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16496_16529 = state_16494__$1;
(statearr_16496_16529[(2)] = inst_16490);

(statearr_16496_16529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (1))){
var inst_16457 = (new Array(n));
var inst_16458 = inst_16457;
var inst_16459 = (0);
var state_16494__$1 = (function (){var statearr_16497 = state_16494;
(statearr_16497[(7)] = inst_16458);

(statearr_16497[(8)] = inst_16459);

return statearr_16497;
})();
var statearr_16498_16530 = state_16494__$1;
(statearr_16498_16530[(2)] = null);

(statearr_16498_16530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (4))){
var inst_16462 = (state_16494[(9)]);
var inst_16462__$1 = (state_16494[(2)]);
var inst_16463 = (inst_16462__$1 == null);
var inst_16464 = cljs.core.not.call(null,inst_16463);
var state_16494__$1 = (function (){var statearr_16499 = state_16494;
(statearr_16499[(9)] = inst_16462__$1);

return statearr_16499;
})();
if(inst_16464){
var statearr_16500_16531 = state_16494__$1;
(statearr_16500_16531[(1)] = (5));

} else {
var statearr_16501_16532 = state_16494__$1;
(statearr_16501_16532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (15))){
var inst_16484 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16502_16533 = state_16494__$1;
(statearr_16502_16533[(2)] = inst_16484);

(statearr_16502_16533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (13))){
var state_16494__$1 = state_16494;
var statearr_16503_16534 = state_16494__$1;
(statearr_16503_16534[(2)] = null);

(statearr_16503_16534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (6))){
var inst_16459 = (state_16494[(8)]);
var inst_16480 = (inst_16459 > (0));
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16480)){
var statearr_16504_16535 = state_16494__$1;
(statearr_16504_16535[(1)] = (12));

} else {
var statearr_16505_16536 = state_16494__$1;
(statearr_16505_16536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (3))){
var inst_16492 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16494__$1,inst_16492);
} else {
if((state_val_16495 === (12))){
var inst_16458 = (state_16494[(7)]);
var inst_16482 = cljs.core.vec.call(null,inst_16458);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16494__$1,(15),out,inst_16482);
} else {
if((state_val_16495 === (2))){
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(4),ch);
} else {
if((state_val_16495 === (11))){
var inst_16474 = (state_16494[(2)]);
var inst_16475 = (new Array(n));
var inst_16458 = inst_16475;
var inst_16459 = (0);
var state_16494__$1 = (function (){var statearr_16506 = state_16494;
(statearr_16506[(7)] = inst_16458);

(statearr_16506[(10)] = inst_16474);

(statearr_16506[(8)] = inst_16459);

return statearr_16506;
})();
var statearr_16507_16537 = state_16494__$1;
(statearr_16507_16537[(2)] = null);

(statearr_16507_16537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (9))){
var inst_16458 = (state_16494[(7)]);
var inst_16472 = cljs.core.vec.call(null,inst_16458);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16494__$1,(11),out,inst_16472);
} else {
if((state_val_16495 === (5))){
var inst_16462 = (state_16494[(9)]);
var inst_16467 = (state_16494[(11)]);
var inst_16458 = (state_16494[(7)]);
var inst_16459 = (state_16494[(8)]);
var inst_16466 = (inst_16458[inst_16459] = inst_16462);
var inst_16467__$1 = (inst_16459 + (1));
var inst_16468 = (inst_16467__$1 < n);
var state_16494__$1 = (function (){var statearr_16508 = state_16494;
(statearr_16508[(12)] = inst_16466);

(statearr_16508[(11)] = inst_16467__$1);

return statearr_16508;
})();
if(cljs.core.truth_(inst_16468)){
var statearr_16509_16538 = state_16494__$1;
(statearr_16509_16538[(1)] = (8));

} else {
var statearr_16510_16539 = state_16494__$1;
(statearr_16510_16539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (14))){
var inst_16487 = (state_16494[(2)]);
var inst_16488 = cljs.core.async.close_BANG_.call(null,out);
var state_16494__$1 = (function (){var statearr_16512 = state_16494;
(statearr_16512[(13)] = inst_16487);

return statearr_16512;
})();
var statearr_16513_16540 = state_16494__$1;
(statearr_16513_16540[(2)] = inst_16488);

(statearr_16513_16540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (10))){
var inst_16478 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16514_16541 = state_16494__$1;
(statearr_16514_16541[(2)] = inst_16478);

(statearr_16514_16541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (8))){
var inst_16467 = (state_16494[(11)]);
var inst_16458 = (state_16494[(7)]);
var tmp16511 = inst_16458;
var inst_16458__$1 = tmp16511;
var inst_16459 = inst_16467;
var state_16494__$1 = (function (){var statearr_16515 = state_16494;
(statearr_16515[(7)] = inst_16458__$1);

(statearr_16515[(8)] = inst_16459);

return statearr_16515;
})();
var statearr_16516_16542 = state_16494__$1;
(statearr_16516_16542[(2)] = null);

(statearr_16516_16542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto___16528,out))
;
return ((function (switch__13700__auto__,c__13812__auto___16528,out){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_16520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16520[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_16520[(1)] = (1));

return statearr_16520;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_16494){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_16494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e16521){if((e16521 instanceof Object)){
var ex__13704__auto__ = e16521;
var statearr_16522_16543 = state_16494;
(statearr_16522_16543[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16544 = state_16494;
state_16494 = G__16544;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_16494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_16494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___16528,out))
})();
var state__13814__auto__ = (function (){var statearr_16523 = f__13813__auto__.call(null);
(statearr_16523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___16528);

return statearr_16523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___16528,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16545 = [];
var len__7981__auto___16619 = arguments.length;
var i__7982__auto___16620 = (0);
while(true){
if((i__7982__auto___16620 < len__7981__auto___16619)){
args16545.push((arguments[i__7982__auto___16620]));

var G__16621 = (i__7982__auto___16620 + (1));
i__7982__auto___16620 = G__16621;
continue;
} else {
}
break;
}

var G__16547 = args16545.length;
switch (G__16547) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16545.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13812__auto___16623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13812__auto___16623,out){
return (function (){
var f__13813__auto__ = (function (){var switch__13700__auto__ = ((function (c__13812__auto___16623,out){
return (function (state_16589){
var state_val_16590 = (state_16589[(1)]);
if((state_val_16590 === (7))){
var inst_16585 = (state_16589[(2)]);
var state_16589__$1 = state_16589;
var statearr_16591_16624 = state_16589__$1;
(statearr_16591_16624[(2)] = inst_16585);

(statearr_16591_16624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (1))){
var inst_16548 = [];
var inst_16549 = inst_16548;
var inst_16550 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16589__$1 = (function (){var statearr_16592 = state_16589;
(statearr_16592[(7)] = inst_16550);

(statearr_16592[(8)] = inst_16549);

return statearr_16592;
})();
var statearr_16593_16625 = state_16589__$1;
(statearr_16593_16625[(2)] = null);

(statearr_16593_16625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (4))){
var inst_16553 = (state_16589[(9)]);
var inst_16553__$1 = (state_16589[(2)]);
var inst_16554 = (inst_16553__$1 == null);
var inst_16555 = cljs.core.not.call(null,inst_16554);
var state_16589__$1 = (function (){var statearr_16594 = state_16589;
(statearr_16594[(9)] = inst_16553__$1);

return statearr_16594;
})();
if(inst_16555){
var statearr_16595_16626 = state_16589__$1;
(statearr_16595_16626[(1)] = (5));

} else {
var statearr_16596_16627 = state_16589__$1;
(statearr_16596_16627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (15))){
var inst_16579 = (state_16589[(2)]);
var state_16589__$1 = state_16589;
var statearr_16597_16628 = state_16589__$1;
(statearr_16597_16628[(2)] = inst_16579);

(statearr_16597_16628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (13))){
var state_16589__$1 = state_16589;
var statearr_16598_16629 = state_16589__$1;
(statearr_16598_16629[(2)] = null);

(statearr_16598_16629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (6))){
var inst_16549 = (state_16589[(8)]);
var inst_16574 = inst_16549.length;
var inst_16575 = (inst_16574 > (0));
var state_16589__$1 = state_16589;
if(cljs.core.truth_(inst_16575)){
var statearr_16599_16630 = state_16589__$1;
(statearr_16599_16630[(1)] = (12));

} else {
var statearr_16600_16631 = state_16589__$1;
(statearr_16600_16631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (3))){
var inst_16587 = (state_16589[(2)]);
var state_16589__$1 = state_16589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16589__$1,inst_16587);
} else {
if((state_val_16590 === (12))){
var inst_16549 = (state_16589[(8)]);
var inst_16577 = cljs.core.vec.call(null,inst_16549);
var state_16589__$1 = state_16589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16589__$1,(15),out,inst_16577);
} else {
if((state_val_16590 === (2))){
var state_16589__$1 = state_16589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16589__$1,(4),ch);
} else {
if((state_val_16590 === (11))){
var inst_16557 = (state_16589[(10)]);
var inst_16553 = (state_16589[(9)]);
var inst_16567 = (state_16589[(2)]);
var inst_16568 = [];
var inst_16569 = inst_16568.push(inst_16553);
var inst_16549 = inst_16568;
var inst_16550 = inst_16557;
var state_16589__$1 = (function (){var statearr_16601 = state_16589;
(statearr_16601[(7)] = inst_16550);

(statearr_16601[(11)] = inst_16569);

(statearr_16601[(12)] = inst_16567);

(statearr_16601[(8)] = inst_16549);

return statearr_16601;
})();
var statearr_16602_16632 = state_16589__$1;
(statearr_16602_16632[(2)] = null);

(statearr_16602_16632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (9))){
var inst_16549 = (state_16589[(8)]);
var inst_16565 = cljs.core.vec.call(null,inst_16549);
var state_16589__$1 = state_16589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16589__$1,(11),out,inst_16565);
} else {
if((state_val_16590 === (5))){
var inst_16550 = (state_16589[(7)]);
var inst_16557 = (state_16589[(10)]);
var inst_16553 = (state_16589[(9)]);
var inst_16557__$1 = f.call(null,inst_16553);
var inst_16558 = cljs.core._EQ_.call(null,inst_16557__$1,inst_16550);
var inst_16559 = cljs.core.keyword_identical_QMARK_.call(null,inst_16550,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16560 = (inst_16558) || (inst_16559);
var state_16589__$1 = (function (){var statearr_16603 = state_16589;
(statearr_16603[(10)] = inst_16557__$1);

return statearr_16603;
})();
if(cljs.core.truth_(inst_16560)){
var statearr_16604_16633 = state_16589__$1;
(statearr_16604_16633[(1)] = (8));

} else {
var statearr_16605_16634 = state_16589__$1;
(statearr_16605_16634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (14))){
var inst_16582 = (state_16589[(2)]);
var inst_16583 = cljs.core.async.close_BANG_.call(null,out);
var state_16589__$1 = (function (){var statearr_16607 = state_16589;
(statearr_16607[(13)] = inst_16582);

return statearr_16607;
})();
var statearr_16608_16635 = state_16589__$1;
(statearr_16608_16635[(2)] = inst_16583);

(statearr_16608_16635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (10))){
var inst_16572 = (state_16589[(2)]);
var state_16589__$1 = state_16589;
var statearr_16609_16636 = state_16589__$1;
(statearr_16609_16636[(2)] = inst_16572);

(statearr_16609_16636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16590 === (8))){
var inst_16557 = (state_16589[(10)]);
var inst_16553 = (state_16589[(9)]);
var inst_16549 = (state_16589[(8)]);
var inst_16562 = inst_16549.push(inst_16553);
var tmp16606 = inst_16549;
var inst_16549__$1 = tmp16606;
var inst_16550 = inst_16557;
var state_16589__$1 = (function (){var statearr_16610 = state_16589;
(statearr_16610[(7)] = inst_16550);

(statearr_16610[(14)] = inst_16562);

(statearr_16610[(8)] = inst_16549__$1);

return statearr_16610;
})();
var statearr_16611_16637 = state_16589__$1;
(statearr_16611_16637[(2)] = null);

(statearr_16611_16637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13812__auto___16623,out))
;
return ((function (switch__13700__auto__,c__13812__auto___16623,out){
return (function() {
var cljs$core$async$state_machine__13701__auto__ = null;
var cljs$core$async$state_machine__13701__auto____0 = (function (){
var statearr_16615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16615[(0)] = cljs$core$async$state_machine__13701__auto__);

(statearr_16615[(1)] = (1));

return statearr_16615;
});
var cljs$core$async$state_machine__13701__auto____1 = (function (state_16589){
while(true){
var ret_value__13702__auto__ = (function (){try{while(true){
var result__13703__auto__ = switch__13700__auto__.call(null,state_16589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13703__auto__;
}
break;
}
}catch (e16616){if((e16616 instanceof Object)){
var ex__13704__auto__ = e16616;
var statearr_16617_16638 = state_16589;
(statearr_16617_16638[(5)] = ex__13704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16639 = state_16589;
state_16589 = G__16639;
continue;
} else {
return ret_value__13702__auto__;
}
break;
}
});
cljs$core$async$state_machine__13701__auto__ = function(state_16589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13701__auto____1.call(this,state_16589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13701__auto____0;
cljs$core$async$state_machine__13701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13701__auto____1;
return cljs$core$async$state_machine__13701__auto__;
})()
;})(switch__13700__auto__,c__13812__auto___16623,out))
})();
var state__13814__auto__ = (function (){var statearr_16618 = f__13813__auto__.call(null);
(statearr_16618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13812__auto___16623);

return statearr_16618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13814__auto__);
});})(c__13812__auto___16623,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

