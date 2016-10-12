// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28599 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28599 = (function (fn_handler,f,meta28600){
this.fn_handler = fn_handler;
this.f = f;
this.meta28600 = meta28600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28601,meta28600__$1){
var self__ = this;
var _28601__$1 = this;
return (new cljs.core.async.t28599(self__.fn_handler,self__.f,meta28600__$1));
});

cljs.core.async.t28599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28601){
var self__ = this;
var _28601__$1 = this;
return self__.meta28600;
});

cljs.core.async.t28599.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28599.cljs$lang$type = true;

cljs.core.async.t28599.cljs$lang$ctorStr = "cljs.core.async/t28599";

cljs.core.async.t28599.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t28599");
});

cljs.core.async.__GT_t28599 = (function cljs$core$async$fn_handler_$___GT_t28599(fn_handler__$1,f__$1,meta28600){
return (new cljs.core.async.t28599(fn_handler__$1,f__$1,meta28600));
});

}

return (new cljs.core.async.t28599(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__28603 = buff;
if(G__28603){
var bit__18781__auto__ = null;
if(cljs.core.truth_((function (){var or__18107__auto__ = bit__18781__auto__;
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return G__28603.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28603.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28603);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28603);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__28605 = arguments.length;
switch (G__28605) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__28608 = arguments.length;
switch (G__28608) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28610 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28610);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28610,ret){
return (function (){
return fn1.call(null,val_28610);
});})(val_28610,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__28612 = arguments.length;
switch (G__28612) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__18992__auto___28614 = n;
var x_28615 = (0);
while(true){
if((x_28615 < n__18992__auto___28614)){
(a[x_28615] = (0));

var G__28616 = (x_28615 + (1));
x_28615 = G__28616;
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

var G__28617 = (i + (1));
i = G__28617;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28621 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28621 = (function (alt_flag,flag,meta28622){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28622 = meta28622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28623,meta28622__$1){
var self__ = this;
var _28623__$1 = this;
return (new cljs.core.async.t28621(self__.alt_flag,self__.flag,meta28622__$1));
});})(flag))
;

cljs.core.async.t28621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28623){
var self__ = this;
var _28623__$1 = this;
return self__.meta28622;
});})(flag))
;

cljs.core.async.t28621.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28621.cljs$lang$type = true;

cljs.core.async.t28621.cljs$lang$ctorStr = "cljs.core.async/t28621";

cljs.core.async.t28621.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t28621");
});})(flag))
;

cljs.core.async.__GT_t28621 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28621(alt_flag__$1,flag__$1,meta28622){
return (new cljs.core.async.t28621(alt_flag__$1,flag__$1,meta28622));
});})(flag))
;

}

return (new cljs.core.async.t28621(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28627 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28627 = (function (alt_handler,flag,cb,meta28628){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28628 = meta28628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28629,meta28628__$1){
var self__ = this;
var _28629__$1 = this;
return (new cljs.core.async.t28627(self__.alt_handler,self__.flag,self__.cb,meta28628__$1));
});

cljs.core.async.t28627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28629){
var self__ = this;
var _28629__$1 = this;
return self__.meta28628;
});

cljs.core.async.t28627.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28627.cljs$lang$type = true;

cljs.core.async.t28627.cljs$lang$ctorStr = "cljs.core.async/t28627";

cljs.core.async.t28627.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t28627");
});

cljs.core.async.__GT_t28627 = (function cljs$core$async$alt_handler_$___GT_t28627(alt_handler__$1,flag__$1,cb__$1,meta28628){
return (new cljs.core.async.t28627(alt_handler__$1,flag__$1,cb__$1,meta28628));
});

}

return (new cljs.core.async.t28627(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28630_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28630_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28631_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28631_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18107__auto__ = wport;
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28632 = (i + (1));
i = G__28632;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18107__auto__ = ret;
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18095__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18095__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18095__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19147__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19147__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28635){
var map__28636 = p__28635;
var map__28636__$1 = ((cljs.core.seq_QMARK_.call(null,map__28636))?cljs.core.apply.call(null,cljs.core.hash_map,map__28636):map__28636);
var opts = map__28636__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28633){
var G__28634 = cljs.core.first.call(null,seq28633);
var seq28633__$1 = cljs.core.next.call(null,seq28633);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28634,seq28633__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28638 = arguments.length;
switch (G__28638) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23191__auto___28687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___28687){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___28687){
return (function (state_28662){
var state_val_28663 = (state_28662[(1)]);
if((state_val_28663 === (7))){
var inst_28658 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28664_28688 = state_28662__$1;
(statearr_28664_28688[(2)] = inst_28658);

(statearr_28664_28688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (1))){
var state_28662__$1 = state_28662;
var statearr_28665_28689 = state_28662__$1;
(statearr_28665_28689[(2)] = null);

(statearr_28665_28689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (4))){
var inst_28641 = (state_28662[(7)]);
var inst_28641__$1 = (state_28662[(2)]);
var inst_28642 = (inst_28641__$1 == null);
var state_28662__$1 = (function (){var statearr_28666 = state_28662;
(statearr_28666[(7)] = inst_28641__$1);

return statearr_28666;
})();
if(cljs.core.truth_(inst_28642)){
var statearr_28667_28690 = state_28662__$1;
(statearr_28667_28690[(1)] = (5));

} else {
var statearr_28668_28691 = state_28662__$1;
(statearr_28668_28691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (13))){
var state_28662__$1 = state_28662;
var statearr_28669_28692 = state_28662__$1;
(statearr_28669_28692[(2)] = null);

(statearr_28669_28692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (6))){
var inst_28641 = (state_28662[(7)]);
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28662__$1,(11),to,inst_28641);
} else {
if((state_val_28663 === (3))){
var inst_28660 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28662__$1,inst_28660);
} else {
if((state_val_28663 === (12))){
var state_28662__$1 = state_28662;
var statearr_28670_28693 = state_28662__$1;
(statearr_28670_28693[(2)] = null);

(statearr_28670_28693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (2))){
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28662__$1,(4),from);
} else {
if((state_val_28663 === (11))){
var inst_28651 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
if(cljs.core.truth_(inst_28651)){
var statearr_28671_28694 = state_28662__$1;
(statearr_28671_28694[(1)] = (12));

} else {
var statearr_28672_28695 = state_28662__$1;
(statearr_28672_28695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (9))){
var state_28662__$1 = state_28662;
var statearr_28673_28696 = state_28662__$1;
(statearr_28673_28696[(2)] = null);

(statearr_28673_28696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (5))){
var state_28662__$1 = state_28662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28674_28697 = state_28662__$1;
(statearr_28674_28697[(1)] = (8));

} else {
var statearr_28675_28698 = state_28662__$1;
(statearr_28675_28698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (14))){
var inst_28656 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28676_28699 = state_28662__$1;
(statearr_28676_28699[(2)] = inst_28656);

(statearr_28676_28699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (10))){
var inst_28648 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28677_28700 = state_28662__$1;
(statearr_28677_28700[(2)] = inst_28648);

(statearr_28677_28700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (8))){
var inst_28645 = cljs.core.async.close_BANG_.call(null,to);
var state_28662__$1 = state_28662;
var statearr_28678_28701 = state_28662__$1;
(statearr_28678_28701[(2)] = inst_28645);

(statearr_28678_28701[(1)] = (10));


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
});})(c__23191__auto___28687))
;
return ((function (switch__23129__auto__,c__23191__auto___28687){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_28682 = [null,null,null,null,null,null,null,null];
(statearr_28682[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_28682[(1)] = (1));

return statearr_28682;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_28662){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_28662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e28683){if((e28683 instanceof Object)){
var ex__23133__auto__ = e28683;
var statearr_28684_28702 = state_28662;
(statearr_28684_28702[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28703 = state_28662;
state_28662 = G__28703;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_28662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_28662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___28687))
})();
var state__23193__auto__ = (function (){var statearr_28685 = f__23192__auto__.call(null);
(statearr_28685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___28687);

return statearr_28685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___28687))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28887){
var vec__28888 = p__28887;
var v = cljs.core.nth.call(null,vec__28888,(0),null);
var p = cljs.core.nth.call(null,vec__28888,(1),null);
var job = vec__28888;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23191__auto___29070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___29070,res,vec__28888,v,p,job,jobs,results){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___29070,res,vec__28888,v,p,job,jobs,results){
return (function (state_28893){
var state_val_28894 = (state_28893[(1)]);
if((state_val_28894 === (1))){
var state_28893__$1 = state_28893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28893__$1,(2),res,v);
} else {
if((state_val_28894 === (2))){
var inst_28890 = (state_28893[(2)]);
var inst_28891 = cljs.core.async.close_BANG_.call(null,res);
var state_28893__$1 = (function (){var statearr_28895 = state_28893;
(statearr_28895[(7)] = inst_28890);

return statearr_28895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28893__$1,inst_28891);
} else {
return null;
}
}
});})(c__23191__auto___29070,res,vec__28888,v,p,job,jobs,results))
;
return ((function (switch__23129__auto__,c__23191__auto___29070,res,vec__28888,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0 = (function (){
var statearr_28899 = [null,null,null,null,null,null,null,null];
(statearr_28899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__);

(statearr_28899[(1)] = (1));

return statearr_28899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1 = (function (state_28893){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_28893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e28900){if((e28900 instanceof Object)){
var ex__23133__auto__ = e28900;
var statearr_28901_29071 = state_28893;
(statearr_28901_29071[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29072 = state_28893;
state_28893 = G__29072;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = function(state_28893){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1.call(this,state_28893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___29070,res,vec__28888,v,p,job,jobs,results))
})();
var state__23193__auto__ = (function (){var statearr_28902 = f__23192__auto__.call(null);
(statearr_28902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___29070);

return statearr_28902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___29070,res,vec__28888,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28903){
var vec__28904 = p__28903;
var v = cljs.core.nth.call(null,vec__28904,(0),null);
var p = cljs.core.nth.call(null,vec__28904,(1),null);
var job = vec__28904;
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
var n__18992__auto___29073 = n;
var __29074 = (0);
while(true){
if((__29074 < n__18992__auto___29073)){
var G__28905_29075 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28905_29075) {
case "compute":
var c__23191__auto___29077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29074,c__23191__auto___29077,G__28905_29075,n__18992__auto___29073,jobs,results,process,async){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (__29074,c__23191__auto___29077,G__28905_29075,n__18992__auto___29073,jobs,results,process,async){
return (function (state_28918){
var state_val_28919 = (state_28918[(1)]);
if((state_val_28919 === (1))){
var state_28918__$1 = state_28918;
var statearr_28920_29078 = state_28918__$1;
(statearr_28920_29078[(2)] = null);

(statearr_28920_29078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28919 === (2))){
var state_28918__$1 = state_28918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28918__$1,(4),jobs);
} else {
if((state_val_28919 === (3))){
var inst_28916 = (state_28918[(2)]);
var state_28918__$1 = state_28918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28918__$1,inst_28916);
} else {
if((state_val_28919 === (4))){
var inst_28908 = (state_28918[(2)]);
var inst_28909 = process.call(null,inst_28908);
var state_28918__$1 = state_28918;
if(cljs.core.truth_(inst_28909)){
var statearr_28921_29079 = state_28918__$1;
(statearr_28921_29079[(1)] = (5));

} else {
var statearr_28922_29080 = state_28918__$1;
(statearr_28922_29080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28919 === (5))){
var state_28918__$1 = state_28918;
var statearr_28923_29081 = state_28918__$1;
(statearr_28923_29081[(2)] = null);

(statearr_28923_29081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28919 === (6))){
var state_28918__$1 = state_28918;
var statearr_28924_29082 = state_28918__$1;
(statearr_28924_29082[(2)] = null);

(statearr_28924_29082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28919 === (7))){
var inst_28914 = (state_28918[(2)]);
var state_28918__$1 = state_28918;
var statearr_28925_29083 = state_28918__$1;
(statearr_28925_29083[(2)] = inst_28914);

(statearr_28925_29083[(1)] = (3));


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
});})(__29074,c__23191__auto___29077,G__28905_29075,n__18992__auto___29073,jobs,results,process,async))
;
return ((function (__29074,switch__23129__auto__,c__23191__auto___29077,G__28905_29075,n__18992__auto___29073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0 = (function (){
var statearr_28929 = [null,null,null,null,null,null,null];
(statearr_28929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__);

(statearr_28929[(1)] = (1));

return statearr_28929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1 = (function (state_28918){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_28918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e28930){if((e28930 instanceof Object)){
var ex__23133__auto__ = e28930;
var statearr_28931_29084 = state_28918;
(statearr_28931_29084[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29085 = state_28918;
state_28918 = G__29085;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = function(state_28918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1.call(this,state_28918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__;
})()
;})(__29074,switch__23129__auto__,c__23191__auto___29077,G__28905_29075,n__18992__auto___29073,jobs,results,process,async))
})();
var state__23193__auto__ = (function (){var statearr_28932 = f__23192__auto__.call(null);
(statearr_28932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___29077);

return statearr_28932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(__29074,c__23191__auto___29077,G__28905_29075,n__18992__auto___29073,jobs,results,process,async))
);


break;
case "async":
var c__23191__auto___29086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29074,c__23191__auto___29086,G__28905_29075,n__18992__auto___29073,jobs,results,process,async){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (__29074,c__23191__auto___29086,G__28905_29075,n__18992__auto___29073,jobs,results,process,async){
return (function (state_28945){
var state_val_28946 = (state_28945[(1)]);
if((state_val_28946 === (1))){
var state_28945__$1 = state_28945;
var statearr_28947_29087 = state_28945__$1;
(statearr_28947_29087[(2)] = null);

(statearr_28947_29087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (2))){
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28945__$1,(4),jobs);
} else {
if((state_val_28946 === (3))){
var inst_28943 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28945__$1,inst_28943);
} else {
if((state_val_28946 === (4))){
var inst_28935 = (state_28945[(2)]);
var inst_28936 = async.call(null,inst_28935);
var state_28945__$1 = state_28945;
if(cljs.core.truth_(inst_28936)){
var statearr_28948_29088 = state_28945__$1;
(statearr_28948_29088[(1)] = (5));

} else {
var statearr_28949_29089 = state_28945__$1;
(statearr_28949_29089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (5))){
var state_28945__$1 = state_28945;
var statearr_28950_29090 = state_28945__$1;
(statearr_28950_29090[(2)] = null);

(statearr_28950_29090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (6))){
var state_28945__$1 = state_28945;
var statearr_28951_29091 = state_28945__$1;
(statearr_28951_29091[(2)] = null);

(statearr_28951_29091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (7))){
var inst_28941 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28952_29092 = state_28945__$1;
(statearr_28952_29092[(2)] = inst_28941);

(statearr_28952_29092[(1)] = (3));


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
});})(__29074,c__23191__auto___29086,G__28905_29075,n__18992__auto___29073,jobs,results,process,async))
;
return ((function (__29074,switch__23129__auto__,c__23191__auto___29086,G__28905_29075,n__18992__auto___29073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0 = (function (){
var statearr_28956 = [null,null,null,null,null,null,null];
(statearr_28956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__);

(statearr_28956[(1)] = (1));

return statearr_28956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1 = (function (state_28945){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_28945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e28957){if((e28957 instanceof Object)){
var ex__23133__auto__ = e28957;
var statearr_28958_29093 = state_28945;
(statearr_28958_29093[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29094 = state_28945;
state_28945 = G__29094;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = function(state_28945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1.call(this,state_28945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__;
})()
;})(__29074,switch__23129__auto__,c__23191__auto___29086,G__28905_29075,n__18992__auto___29073,jobs,results,process,async))
})();
var state__23193__auto__ = (function (){var statearr_28959 = f__23192__auto__.call(null);
(statearr_28959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___29086);

return statearr_28959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(__29074,c__23191__auto___29086,G__28905_29075,n__18992__auto___29073,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29095 = (__29074 + (1));
__29074 = G__29095;
continue;
} else {
}
break;
}

var c__23191__auto___29096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___29096,jobs,results,process,async){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___29096,jobs,results,process,async){
return (function (state_28981){
var state_val_28982 = (state_28981[(1)]);
if((state_val_28982 === (1))){
var state_28981__$1 = state_28981;
var statearr_28983_29097 = state_28981__$1;
(statearr_28983_29097[(2)] = null);

(statearr_28983_29097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (2))){
var state_28981__$1 = state_28981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28981__$1,(4),from);
} else {
if((state_val_28982 === (3))){
var inst_28979 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28981__$1,inst_28979);
} else {
if((state_val_28982 === (4))){
var inst_28962 = (state_28981[(7)]);
var inst_28962__$1 = (state_28981[(2)]);
var inst_28963 = (inst_28962__$1 == null);
var state_28981__$1 = (function (){var statearr_28984 = state_28981;
(statearr_28984[(7)] = inst_28962__$1);

return statearr_28984;
})();
if(cljs.core.truth_(inst_28963)){
var statearr_28985_29098 = state_28981__$1;
(statearr_28985_29098[(1)] = (5));

} else {
var statearr_28986_29099 = state_28981__$1;
(statearr_28986_29099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (5))){
var inst_28965 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28981__$1 = state_28981;
var statearr_28987_29100 = state_28981__$1;
(statearr_28987_29100[(2)] = inst_28965);

(statearr_28987_29100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (6))){
var inst_28967 = (state_28981[(8)]);
var inst_28962 = (state_28981[(7)]);
var inst_28967__$1 = cljs.core.async.chan.call(null,(1));
var inst_28968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28969 = [inst_28962,inst_28967__$1];
var inst_28970 = (new cljs.core.PersistentVector(null,2,(5),inst_28968,inst_28969,null));
var state_28981__$1 = (function (){var statearr_28988 = state_28981;
(statearr_28988[(8)] = inst_28967__$1);

return statearr_28988;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28981__$1,(8),jobs,inst_28970);
} else {
if((state_val_28982 === (7))){
var inst_28977 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_28989_29101 = state_28981__$1;
(statearr_28989_29101[(2)] = inst_28977);

(statearr_28989_29101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (8))){
var inst_28967 = (state_28981[(8)]);
var inst_28972 = (state_28981[(2)]);
var state_28981__$1 = (function (){var statearr_28990 = state_28981;
(statearr_28990[(9)] = inst_28972);

return statearr_28990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28981__$1,(9),results,inst_28967);
} else {
if((state_val_28982 === (9))){
var inst_28974 = (state_28981[(2)]);
var state_28981__$1 = (function (){var statearr_28991 = state_28981;
(statearr_28991[(10)] = inst_28974);

return statearr_28991;
})();
var statearr_28992_29102 = state_28981__$1;
(statearr_28992_29102[(2)] = null);

(statearr_28992_29102[(1)] = (2));


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
});})(c__23191__auto___29096,jobs,results,process,async))
;
return ((function (switch__23129__auto__,c__23191__auto___29096,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0 = (function (){
var statearr_28996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__);

(statearr_28996[(1)] = (1));

return statearr_28996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1 = (function (state_28981){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_28981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e28997){if((e28997 instanceof Object)){
var ex__23133__auto__ = e28997;
var statearr_28998_29103 = state_28981;
(statearr_28998_29103[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29104 = state_28981;
state_28981 = G__29104;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = function(state_28981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1.call(this,state_28981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___29096,jobs,results,process,async))
})();
var state__23193__auto__ = (function (){var statearr_28999 = f__23192__auto__.call(null);
(statearr_28999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___29096);

return statearr_28999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___29096,jobs,results,process,async))
);


var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__,jobs,results,process,async){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__,jobs,results,process,async){
return (function (state_29037){
var state_val_29038 = (state_29037[(1)]);
if((state_val_29038 === (7))){
var inst_29033 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
var statearr_29039_29105 = state_29037__$1;
(statearr_29039_29105[(2)] = inst_29033);

(statearr_29039_29105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (20))){
var state_29037__$1 = state_29037;
var statearr_29040_29106 = state_29037__$1;
(statearr_29040_29106[(2)] = null);

(statearr_29040_29106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (1))){
var state_29037__$1 = state_29037;
var statearr_29041_29107 = state_29037__$1;
(statearr_29041_29107[(2)] = null);

(statearr_29041_29107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (4))){
var inst_29002 = (state_29037[(7)]);
var inst_29002__$1 = (state_29037[(2)]);
var inst_29003 = (inst_29002__$1 == null);
var state_29037__$1 = (function (){var statearr_29042 = state_29037;
(statearr_29042[(7)] = inst_29002__$1);

return statearr_29042;
})();
if(cljs.core.truth_(inst_29003)){
var statearr_29043_29108 = state_29037__$1;
(statearr_29043_29108[(1)] = (5));

} else {
var statearr_29044_29109 = state_29037__$1;
(statearr_29044_29109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (15))){
var inst_29015 = (state_29037[(8)]);
var state_29037__$1 = state_29037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29037__$1,(18),to,inst_29015);
} else {
if((state_val_29038 === (21))){
var inst_29028 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
var statearr_29045_29110 = state_29037__$1;
(statearr_29045_29110[(2)] = inst_29028);

(statearr_29045_29110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (13))){
var inst_29030 = (state_29037[(2)]);
var state_29037__$1 = (function (){var statearr_29046 = state_29037;
(statearr_29046[(9)] = inst_29030);

return statearr_29046;
})();
var statearr_29047_29111 = state_29037__$1;
(statearr_29047_29111[(2)] = null);

(statearr_29047_29111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (6))){
var inst_29002 = (state_29037[(7)]);
var state_29037__$1 = state_29037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29037__$1,(11),inst_29002);
} else {
if((state_val_29038 === (17))){
var inst_29023 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
if(cljs.core.truth_(inst_29023)){
var statearr_29048_29112 = state_29037__$1;
(statearr_29048_29112[(1)] = (19));

} else {
var statearr_29049_29113 = state_29037__$1;
(statearr_29049_29113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (3))){
var inst_29035 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29037__$1,inst_29035);
} else {
if((state_val_29038 === (12))){
var inst_29012 = (state_29037[(10)]);
var state_29037__$1 = state_29037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29037__$1,(14),inst_29012);
} else {
if((state_val_29038 === (2))){
var state_29037__$1 = state_29037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29037__$1,(4),results);
} else {
if((state_val_29038 === (19))){
var state_29037__$1 = state_29037;
var statearr_29050_29114 = state_29037__$1;
(statearr_29050_29114[(2)] = null);

(statearr_29050_29114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (11))){
var inst_29012 = (state_29037[(2)]);
var state_29037__$1 = (function (){var statearr_29051 = state_29037;
(statearr_29051[(10)] = inst_29012);

return statearr_29051;
})();
var statearr_29052_29115 = state_29037__$1;
(statearr_29052_29115[(2)] = null);

(statearr_29052_29115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (9))){
var state_29037__$1 = state_29037;
var statearr_29053_29116 = state_29037__$1;
(statearr_29053_29116[(2)] = null);

(statearr_29053_29116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (5))){
var state_29037__$1 = state_29037;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29054_29117 = state_29037__$1;
(statearr_29054_29117[(1)] = (8));

} else {
var statearr_29055_29118 = state_29037__$1;
(statearr_29055_29118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (14))){
var inst_29015 = (state_29037[(8)]);
var inst_29017 = (state_29037[(11)]);
var inst_29015__$1 = (state_29037[(2)]);
var inst_29016 = (inst_29015__$1 == null);
var inst_29017__$1 = cljs.core.not.call(null,inst_29016);
var state_29037__$1 = (function (){var statearr_29056 = state_29037;
(statearr_29056[(8)] = inst_29015__$1);

(statearr_29056[(11)] = inst_29017__$1);

return statearr_29056;
})();
if(inst_29017__$1){
var statearr_29057_29119 = state_29037__$1;
(statearr_29057_29119[(1)] = (15));

} else {
var statearr_29058_29120 = state_29037__$1;
(statearr_29058_29120[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (16))){
var inst_29017 = (state_29037[(11)]);
var state_29037__$1 = state_29037;
var statearr_29059_29121 = state_29037__$1;
(statearr_29059_29121[(2)] = inst_29017);

(statearr_29059_29121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (10))){
var inst_29009 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
var statearr_29060_29122 = state_29037__$1;
(statearr_29060_29122[(2)] = inst_29009);

(statearr_29060_29122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (18))){
var inst_29020 = (state_29037[(2)]);
var state_29037__$1 = state_29037;
var statearr_29061_29123 = state_29037__$1;
(statearr_29061_29123[(2)] = inst_29020);

(statearr_29061_29123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29038 === (8))){
var inst_29006 = cljs.core.async.close_BANG_.call(null,to);
var state_29037__$1 = state_29037;
var statearr_29062_29124 = state_29037__$1;
(statearr_29062_29124[(2)] = inst_29006);

(statearr_29062_29124[(1)] = (10));


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
});})(c__23191__auto__,jobs,results,process,async))
;
return ((function (switch__23129__auto__,c__23191__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0 = (function (){
var statearr_29066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__);

(statearr_29066[(1)] = (1));

return statearr_29066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1 = (function (state_29037){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_29037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e29067){if((e29067 instanceof Object)){
var ex__23133__auto__ = e29067;
var statearr_29068_29125 = state_29037;
(statearr_29068_29125[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29126 = state_29037;
state_29037 = G__29126;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__ = function(state_29037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1.call(this,state_29037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__,jobs,results,process,async))
})();
var state__23193__auto__ = (function (){var statearr_29069 = f__23192__auto__.call(null);
(statearr_29069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_29069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__,jobs,results,process,async))
);

return c__23191__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__29128 = arguments.length;
switch (G__29128) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__29131 = arguments.length;
switch (G__29131) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__29134 = arguments.length;
switch (G__29134) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23191__auto___29186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___29186,tc,fc){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___29186,tc,fc){
return (function (state_29160){
var state_val_29161 = (state_29160[(1)]);
if((state_val_29161 === (7))){
var inst_29156 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29162_29187 = state_29160__$1;
(statearr_29162_29187[(2)] = inst_29156);

(statearr_29162_29187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (1))){
var state_29160__$1 = state_29160;
var statearr_29163_29188 = state_29160__$1;
(statearr_29163_29188[(2)] = null);

(statearr_29163_29188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (4))){
var inst_29137 = (state_29160[(7)]);
var inst_29137__$1 = (state_29160[(2)]);
var inst_29138 = (inst_29137__$1 == null);
var state_29160__$1 = (function (){var statearr_29164 = state_29160;
(statearr_29164[(7)] = inst_29137__$1);

return statearr_29164;
})();
if(cljs.core.truth_(inst_29138)){
var statearr_29165_29189 = state_29160__$1;
(statearr_29165_29189[(1)] = (5));

} else {
var statearr_29166_29190 = state_29160__$1;
(statearr_29166_29190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (13))){
var state_29160__$1 = state_29160;
var statearr_29167_29191 = state_29160__$1;
(statearr_29167_29191[(2)] = null);

(statearr_29167_29191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (6))){
var inst_29137 = (state_29160[(7)]);
var inst_29143 = p.call(null,inst_29137);
var state_29160__$1 = state_29160;
if(cljs.core.truth_(inst_29143)){
var statearr_29168_29192 = state_29160__$1;
(statearr_29168_29192[(1)] = (9));

} else {
var statearr_29169_29193 = state_29160__$1;
(statearr_29169_29193[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (3))){
var inst_29158 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29160__$1,inst_29158);
} else {
if((state_val_29161 === (12))){
var state_29160__$1 = state_29160;
var statearr_29170_29194 = state_29160__$1;
(statearr_29170_29194[(2)] = null);

(statearr_29170_29194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (2))){
var state_29160__$1 = state_29160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29160__$1,(4),ch);
} else {
if((state_val_29161 === (11))){
var inst_29137 = (state_29160[(7)]);
var inst_29147 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29160__$1,(8),inst_29147,inst_29137);
} else {
if((state_val_29161 === (9))){
var state_29160__$1 = state_29160;
var statearr_29171_29195 = state_29160__$1;
(statearr_29171_29195[(2)] = tc);

(statearr_29171_29195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (5))){
var inst_29140 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29141 = cljs.core.async.close_BANG_.call(null,fc);
var state_29160__$1 = (function (){var statearr_29172 = state_29160;
(statearr_29172[(8)] = inst_29140);

return statearr_29172;
})();
var statearr_29173_29196 = state_29160__$1;
(statearr_29173_29196[(2)] = inst_29141);

(statearr_29173_29196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (14))){
var inst_29154 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29174_29197 = state_29160__$1;
(statearr_29174_29197[(2)] = inst_29154);

(statearr_29174_29197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (10))){
var state_29160__$1 = state_29160;
var statearr_29175_29198 = state_29160__$1;
(statearr_29175_29198[(2)] = fc);

(statearr_29175_29198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (8))){
var inst_29149 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
if(cljs.core.truth_(inst_29149)){
var statearr_29176_29199 = state_29160__$1;
(statearr_29176_29199[(1)] = (12));

} else {
var statearr_29177_29200 = state_29160__$1;
(statearr_29177_29200[(1)] = (13));

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
});})(c__23191__auto___29186,tc,fc))
;
return ((function (switch__23129__auto__,c__23191__auto___29186,tc,fc){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_29181 = [null,null,null,null,null,null,null,null,null];
(statearr_29181[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_29181[(1)] = (1));

return statearr_29181;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_29160){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_29160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e29182){if((e29182 instanceof Object)){
var ex__23133__auto__ = e29182;
var statearr_29183_29201 = state_29160;
(statearr_29183_29201[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29202 = state_29160;
state_29160 = G__29202;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_29160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_29160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___29186,tc,fc))
})();
var state__23193__auto__ = (function (){var statearr_29184 = f__23192__auto__.call(null);
(statearr_29184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___29186);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___29186,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__){
return (function (state_29249){
var state_val_29250 = (state_29249[(1)]);
if((state_val_29250 === (1))){
var inst_29235 = init;
var state_29249__$1 = (function (){var statearr_29251 = state_29249;
(statearr_29251[(7)] = inst_29235);

return statearr_29251;
})();
var statearr_29252_29267 = state_29249__$1;
(statearr_29252_29267[(2)] = null);

(statearr_29252_29267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (2))){
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29249__$1,(4),ch);
} else {
if((state_val_29250 === (3))){
var inst_29247 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29249__$1,inst_29247);
} else {
if((state_val_29250 === (4))){
var inst_29238 = (state_29249[(8)]);
var inst_29238__$1 = (state_29249[(2)]);
var inst_29239 = (inst_29238__$1 == null);
var state_29249__$1 = (function (){var statearr_29253 = state_29249;
(statearr_29253[(8)] = inst_29238__$1);

return statearr_29253;
})();
if(cljs.core.truth_(inst_29239)){
var statearr_29254_29268 = state_29249__$1;
(statearr_29254_29268[(1)] = (5));

} else {
var statearr_29255_29269 = state_29249__$1;
(statearr_29255_29269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (5))){
var inst_29235 = (state_29249[(7)]);
var state_29249__$1 = state_29249;
var statearr_29256_29270 = state_29249__$1;
(statearr_29256_29270[(2)] = inst_29235);

(statearr_29256_29270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (6))){
var inst_29235 = (state_29249[(7)]);
var inst_29238 = (state_29249[(8)]);
var inst_29242 = f.call(null,inst_29235,inst_29238);
var inst_29235__$1 = inst_29242;
var state_29249__$1 = (function (){var statearr_29257 = state_29249;
(statearr_29257[(7)] = inst_29235__$1);

return statearr_29257;
})();
var statearr_29258_29271 = state_29249__$1;
(statearr_29258_29271[(2)] = null);

(statearr_29258_29271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (7))){
var inst_29245 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29259_29272 = state_29249__$1;
(statearr_29259_29272[(2)] = inst_29245);

(statearr_29259_29272[(1)] = (3));


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
});})(c__23191__auto__))
;
return ((function (switch__23129__auto__,c__23191__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23130__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23130__auto____0 = (function (){
var statearr_29263 = [null,null,null,null,null,null,null,null,null];
(statearr_29263[(0)] = cljs$core$async$reduce_$_state_machine__23130__auto__);

(statearr_29263[(1)] = (1));

return statearr_29263;
});
var cljs$core$async$reduce_$_state_machine__23130__auto____1 = (function (state_29249){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_29249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e29264){if((e29264 instanceof Object)){
var ex__23133__auto__ = e29264;
var statearr_29265_29273 = state_29249;
(statearr_29265_29273[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29274 = state_29249;
state_29249 = G__29274;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23130__auto__ = function(state_29249){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23130__auto____1.call(this,state_29249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23130__auto____0;
cljs$core$async$reduce_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23130__auto____1;
return cljs$core$async$reduce_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__))
})();
var state__23193__auto__ = (function (){var statearr_29266 = f__23192__auto__.call(null);
(statearr_29266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_29266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__))
);

return c__23191__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__29276 = arguments.length;
switch (G__29276) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__){
return (function (state_29301){
var state_val_29302 = (state_29301[(1)]);
if((state_val_29302 === (7))){
var inst_29283 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
var statearr_29303_29327 = state_29301__$1;
(statearr_29303_29327[(2)] = inst_29283);

(statearr_29303_29327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (1))){
var inst_29277 = cljs.core.seq.call(null,coll);
var inst_29278 = inst_29277;
var state_29301__$1 = (function (){var statearr_29304 = state_29301;
(statearr_29304[(7)] = inst_29278);

return statearr_29304;
})();
var statearr_29305_29328 = state_29301__$1;
(statearr_29305_29328[(2)] = null);

(statearr_29305_29328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (4))){
var inst_29278 = (state_29301[(7)]);
var inst_29281 = cljs.core.first.call(null,inst_29278);
var state_29301__$1 = state_29301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29301__$1,(7),ch,inst_29281);
} else {
if((state_val_29302 === (13))){
var inst_29295 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
var statearr_29306_29329 = state_29301__$1;
(statearr_29306_29329[(2)] = inst_29295);

(statearr_29306_29329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (6))){
var inst_29286 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
if(cljs.core.truth_(inst_29286)){
var statearr_29307_29330 = state_29301__$1;
(statearr_29307_29330[(1)] = (8));

} else {
var statearr_29308_29331 = state_29301__$1;
(statearr_29308_29331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (3))){
var inst_29299 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29301__$1,inst_29299);
} else {
if((state_val_29302 === (12))){
var state_29301__$1 = state_29301;
var statearr_29309_29332 = state_29301__$1;
(statearr_29309_29332[(2)] = null);

(statearr_29309_29332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (2))){
var inst_29278 = (state_29301[(7)]);
var state_29301__$1 = state_29301;
if(cljs.core.truth_(inst_29278)){
var statearr_29310_29333 = state_29301__$1;
(statearr_29310_29333[(1)] = (4));

} else {
var statearr_29311_29334 = state_29301__$1;
(statearr_29311_29334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (11))){
var inst_29292 = cljs.core.async.close_BANG_.call(null,ch);
var state_29301__$1 = state_29301;
var statearr_29312_29335 = state_29301__$1;
(statearr_29312_29335[(2)] = inst_29292);

(statearr_29312_29335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (9))){
var state_29301__$1 = state_29301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29313_29336 = state_29301__$1;
(statearr_29313_29336[(1)] = (11));

} else {
var statearr_29314_29337 = state_29301__$1;
(statearr_29314_29337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (5))){
var inst_29278 = (state_29301[(7)]);
var state_29301__$1 = state_29301;
var statearr_29315_29338 = state_29301__$1;
(statearr_29315_29338[(2)] = inst_29278);

(statearr_29315_29338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (10))){
var inst_29297 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
var statearr_29316_29339 = state_29301__$1;
(statearr_29316_29339[(2)] = inst_29297);

(statearr_29316_29339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (8))){
var inst_29278 = (state_29301[(7)]);
var inst_29288 = cljs.core.next.call(null,inst_29278);
var inst_29278__$1 = inst_29288;
var state_29301__$1 = (function (){var statearr_29317 = state_29301;
(statearr_29317[(7)] = inst_29278__$1);

return statearr_29317;
})();
var statearr_29318_29340 = state_29301__$1;
(statearr_29318_29340[(2)] = null);

(statearr_29318_29340[(1)] = (2));


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
});})(c__23191__auto__))
;
return ((function (switch__23129__auto__,c__23191__auto__){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_29322 = [null,null,null,null,null,null,null,null];
(statearr_29322[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_29322[(1)] = (1));

return statearr_29322;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_29301){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_29301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e29323){if((e29323 instanceof Object)){
var ex__23133__auto__ = e29323;
var statearr_29324_29341 = state_29301;
(statearr_29324_29341[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29342 = state_29301;
state_29301 = G__29342;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_29301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_29301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__))
})();
var state__23193__auto__ = (function (){var statearr_29325 = f__23192__auto__.call(null);
(statearr_29325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_29325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__))
);

return c__23191__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29344 = {};
return obj29344;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18095__auto__ = _;
if(and__18095__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18095__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18743__auto__ = (((_ == null))?null:_);
return (function (){var or__18107__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29346 = {};
return obj29346;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18095__auto__ = m;
if(and__18095__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18095__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18743__auto__ = (((m == null))?null:m);
return (function (){var or__18107__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18095__auto__ = m;
if(and__18095__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18095__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18743__auto__ = (((m == null))?null:m);
return (function (){var or__18107__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18095__auto__ = m;
if(and__18095__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18095__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18743__auto__ = (((m == null))?null:m);
return (function (){var or__18107__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29568 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29568 = (function (mult,ch,cs,meta29569){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29569 = meta29569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29570,meta29569__$1){
var self__ = this;
var _29570__$1 = this;
return (new cljs.core.async.t29568(self__.mult,self__.ch,self__.cs,meta29569__$1));
});})(cs))
;

cljs.core.async.t29568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29570){
var self__ = this;
var _29570__$1 = this;
return self__.meta29569;
});})(cs))
;

cljs.core.async.t29568.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29568.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29568.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29568.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29568.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29568.cljs$lang$type = true;

cljs.core.async.t29568.cljs$lang$ctorStr = "cljs.core.async/t29568";

cljs.core.async.t29568.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t29568");
});})(cs))
;

cljs.core.async.__GT_t29568 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29568(mult__$1,ch__$1,cs__$1,meta29569){
return (new cljs.core.async.t29568(mult__$1,ch__$1,cs__$1,meta29569));
});})(cs))
;

}

return (new cljs.core.async.t29568(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23191__auto___29789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___29789,cs,m,dchan,dctr,done){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___29789,cs,m,dchan,dctr,done){
return (function (state_29701){
var state_val_29702 = (state_29701[(1)]);
if((state_val_29702 === (7))){
var inst_29697 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29703_29790 = state_29701__$1;
(statearr_29703_29790[(2)] = inst_29697);

(statearr_29703_29790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (20))){
var inst_29602 = (state_29701[(7)]);
var inst_29612 = cljs.core.first.call(null,inst_29602);
var inst_29613 = cljs.core.nth.call(null,inst_29612,(0),null);
var inst_29614 = cljs.core.nth.call(null,inst_29612,(1),null);
var state_29701__$1 = (function (){var statearr_29704 = state_29701;
(statearr_29704[(8)] = inst_29613);

return statearr_29704;
})();
if(cljs.core.truth_(inst_29614)){
var statearr_29705_29791 = state_29701__$1;
(statearr_29705_29791[(1)] = (22));

} else {
var statearr_29706_29792 = state_29701__$1;
(statearr_29706_29792[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (27))){
var inst_29649 = (state_29701[(9)]);
var inst_29642 = (state_29701[(10)]);
var inst_29644 = (state_29701[(11)]);
var inst_29573 = (state_29701[(12)]);
var inst_29649__$1 = cljs.core._nth.call(null,inst_29642,inst_29644);
var inst_29650 = cljs.core.async.put_BANG_.call(null,inst_29649__$1,inst_29573,done);
var state_29701__$1 = (function (){var statearr_29707 = state_29701;
(statearr_29707[(9)] = inst_29649__$1);

return statearr_29707;
})();
if(cljs.core.truth_(inst_29650)){
var statearr_29708_29793 = state_29701__$1;
(statearr_29708_29793[(1)] = (30));

} else {
var statearr_29709_29794 = state_29701__$1;
(statearr_29709_29794[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (1))){
var state_29701__$1 = state_29701;
var statearr_29710_29795 = state_29701__$1;
(statearr_29710_29795[(2)] = null);

(statearr_29710_29795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (24))){
var inst_29602 = (state_29701[(7)]);
var inst_29619 = (state_29701[(2)]);
var inst_29620 = cljs.core.next.call(null,inst_29602);
var inst_29582 = inst_29620;
var inst_29583 = null;
var inst_29584 = (0);
var inst_29585 = (0);
var state_29701__$1 = (function (){var statearr_29711 = state_29701;
(statearr_29711[(13)] = inst_29585);

(statearr_29711[(14)] = inst_29582);

(statearr_29711[(15)] = inst_29619);

(statearr_29711[(16)] = inst_29583);

(statearr_29711[(17)] = inst_29584);

return statearr_29711;
})();
var statearr_29712_29796 = state_29701__$1;
(statearr_29712_29796[(2)] = null);

(statearr_29712_29796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (39))){
var state_29701__$1 = state_29701;
var statearr_29716_29797 = state_29701__$1;
(statearr_29716_29797[(2)] = null);

(statearr_29716_29797[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (4))){
var inst_29573 = (state_29701[(12)]);
var inst_29573__$1 = (state_29701[(2)]);
var inst_29574 = (inst_29573__$1 == null);
var state_29701__$1 = (function (){var statearr_29717 = state_29701;
(statearr_29717[(12)] = inst_29573__$1);

return statearr_29717;
})();
if(cljs.core.truth_(inst_29574)){
var statearr_29718_29798 = state_29701__$1;
(statearr_29718_29798[(1)] = (5));

} else {
var statearr_29719_29799 = state_29701__$1;
(statearr_29719_29799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (15))){
var inst_29585 = (state_29701[(13)]);
var inst_29582 = (state_29701[(14)]);
var inst_29583 = (state_29701[(16)]);
var inst_29584 = (state_29701[(17)]);
var inst_29598 = (state_29701[(2)]);
var inst_29599 = (inst_29585 + (1));
var tmp29713 = inst_29582;
var tmp29714 = inst_29583;
var tmp29715 = inst_29584;
var inst_29582__$1 = tmp29713;
var inst_29583__$1 = tmp29714;
var inst_29584__$1 = tmp29715;
var inst_29585__$1 = inst_29599;
var state_29701__$1 = (function (){var statearr_29720 = state_29701;
(statearr_29720[(13)] = inst_29585__$1);

(statearr_29720[(18)] = inst_29598);

(statearr_29720[(14)] = inst_29582__$1);

(statearr_29720[(16)] = inst_29583__$1);

(statearr_29720[(17)] = inst_29584__$1);

return statearr_29720;
})();
var statearr_29721_29800 = state_29701__$1;
(statearr_29721_29800[(2)] = null);

(statearr_29721_29800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (21))){
var inst_29623 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29725_29801 = state_29701__$1;
(statearr_29725_29801[(2)] = inst_29623);

(statearr_29725_29801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (31))){
var inst_29649 = (state_29701[(9)]);
var inst_29653 = done.call(null,null);
var inst_29654 = cljs.core.async.untap_STAR_.call(null,m,inst_29649);
var state_29701__$1 = (function (){var statearr_29726 = state_29701;
(statearr_29726[(19)] = inst_29653);

return statearr_29726;
})();
var statearr_29727_29802 = state_29701__$1;
(statearr_29727_29802[(2)] = inst_29654);

(statearr_29727_29802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (32))){
var inst_29642 = (state_29701[(10)]);
var inst_29641 = (state_29701[(20)]);
var inst_29644 = (state_29701[(11)]);
var inst_29643 = (state_29701[(21)]);
var inst_29656 = (state_29701[(2)]);
var inst_29657 = (inst_29644 + (1));
var tmp29722 = inst_29642;
var tmp29723 = inst_29641;
var tmp29724 = inst_29643;
var inst_29641__$1 = tmp29723;
var inst_29642__$1 = tmp29722;
var inst_29643__$1 = tmp29724;
var inst_29644__$1 = inst_29657;
var state_29701__$1 = (function (){var statearr_29728 = state_29701;
(statearr_29728[(10)] = inst_29642__$1);

(statearr_29728[(22)] = inst_29656);

(statearr_29728[(20)] = inst_29641__$1);

(statearr_29728[(11)] = inst_29644__$1);

(statearr_29728[(21)] = inst_29643__$1);

return statearr_29728;
})();
var statearr_29729_29803 = state_29701__$1;
(statearr_29729_29803[(2)] = null);

(statearr_29729_29803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (40))){
var inst_29669 = (state_29701[(23)]);
var inst_29673 = done.call(null,null);
var inst_29674 = cljs.core.async.untap_STAR_.call(null,m,inst_29669);
var state_29701__$1 = (function (){var statearr_29730 = state_29701;
(statearr_29730[(24)] = inst_29673);

return statearr_29730;
})();
var statearr_29731_29804 = state_29701__$1;
(statearr_29731_29804[(2)] = inst_29674);

(statearr_29731_29804[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (33))){
var inst_29660 = (state_29701[(25)]);
var inst_29662 = cljs.core.chunked_seq_QMARK_.call(null,inst_29660);
var state_29701__$1 = state_29701;
if(inst_29662){
var statearr_29732_29805 = state_29701__$1;
(statearr_29732_29805[(1)] = (36));

} else {
var statearr_29733_29806 = state_29701__$1;
(statearr_29733_29806[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (13))){
var inst_29592 = (state_29701[(26)]);
var inst_29595 = cljs.core.async.close_BANG_.call(null,inst_29592);
var state_29701__$1 = state_29701;
var statearr_29734_29807 = state_29701__$1;
(statearr_29734_29807[(2)] = inst_29595);

(statearr_29734_29807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (22))){
var inst_29613 = (state_29701[(8)]);
var inst_29616 = cljs.core.async.close_BANG_.call(null,inst_29613);
var state_29701__$1 = state_29701;
var statearr_29735_29808 = state_29701__$1;
(statearr_29735_29808[(2)] = inst_29616);

(statearr_29735_29808[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (36))){
var inst_29660 = (state_29701[(25)]);
var inst_29664 = cljs.core.chunk_first.call(null,inst_29660);
var inst_29665 = cljs.core.chunk_rest.call(null,inst_29660);
var inst_29666 = cljs.core.count.call(null,inst_29664);
var inst_29641 = inst_29665;
var inst_29642 = inst_29664;
var inst_29643 = inst_29666;
var inst_29644 = (0);
var state_29701__$1 = (function (){var statearr_29736 = state_29701;
(statearr_29736[(10)] = inst_29642);

(statearr_29736[(20)] = inst_29641);

(statearr_29736[(11)] = inst_29644);

(statearr_29736[(21)] = inst_29643);

return statearr_29736;
})();
var statearr_29737_29809 = state_29701__$1;
(statearr_29737_29809[(2)] = null);

(statearr_29737_29809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (41))){
var inst_29660 = (state_29701[(25)]);
var inst_29676 = (state_29701[(2)]);
var inst_29677 = cljs.core.next.call(null,inst_29660);
var inst_29641 = inst_29677;
var inst_29642 = null;
var inst_29643 = (0);
var inst_29644 = (0);
var state_29701__$1 = (function (){var statearr_29738 = state_29701;
(statearr_29738[(10)] = inst_29642);

(statearr_29738[(27)] = inst_29676);

(statearr_29738[(20)] = inst_29641);

(statearr_29738[(11)] = inst_29644);

(statearr_29738[(21)] = inst_29643);

return statearr_29738;
})();
var statearr_29739_29810 = state_29701__$1;
(statearr_29739_29810[(2)] = null);

(statearr_29739_29810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (43))){
var state_29701__$1 = state_29701;
var statearr_29740_29811 = state_29701__$1;
(statearr_29740_29811[(2)] = null);

(statearr_29740_29811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (29))){
var inst_29685 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29741_29812 = state_29701__$1;
(statearr_29741_29812[(2)] = inst_29685);

(statearr_29741_29812[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (44))){
var inst_29694 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29742 = state_29701;
(statearr_29742[(28)] = inst_29694);

return statearr_29742;
})();
var statearr_29743_29813 = state_29701__$1;
(statearr_29743_29813[(2)] = null);

(statearr_29743_29813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (6))){
var inst_29633 = (state_29701[(29)]);
var inst_29632 = cljs.core.deref.call(null,cs);
var inst_29633__$1 = cljs.core.keys.call(null,inst_29632);
var inst_29634 = cljs.core.count.call(null,inst_29633__$1);
var inst_29635 = cljs.core.reset_BANG_.call(null,dctr,inst_29634);
var inst_29640 = cljs.core.seq.call(null,inst_29633__$1);
var inst_29641 = inst_29640;
var inst_29642 = null;
var inst_29643 = (0);
var inst_29644 = (0);
var state_29701__$1 = (function (){var statearr_29744 = state_29701;
(statearr_29744[(10)] = inst_29642);

(statearr_29744[(30)] = inst_29635);

(statearr_29744[(20)] = inst_29641);

(statearr_29744[(11)] = inst_29644);

(statearr_29744[(29)] = inst_29633__$1);

(statearr_29744[(21)] = inst_29643);

return statearr_29744;
})();
var statearr_29745_29814 = state_29701__$1;
(statearr_29745_29814[(2)] = null);

(statearr_29745_29814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (28))){
var inst_29660 = (state_29701[(25)]);
var inst_29641 = (state_29701[(20)]);
var inst_29660__$1 = cljs.core.seq.call(null,inst_29641);
var state_29701__$1 = (function (){var statearr_29746 = state_29701;
(statearr_29746[(25)] = inst_29660__$1);

return statearr_29746;
})();
if(inst_29660__$1){
var statearr_29747_29815 = state_29701__$1;
(statearr_29747_29815[(1)] = (33));

} else {
var statearr_29748_29816 = state_29701__$1;
(statearr_29748_29816[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (25))){
var inst_29644 = (state_29701[(11)]);
var inst_29643 = (state_29701[(21)]);
var inst_29646 = (inst_29644 < inst_29643);
var inst_29647 = inst_29646;
var state_29701__$1 = state_29701;
if(cljs.core.truth_(inst_29647)){
var statearr_29749_29817 = state_29701__$1;
(statearr_29749_29817[(1)] = (27));

} else {
var statearr_29750_29818 = state_29701__$1;
(statearr_29750_29818[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (34))){
var state_29701__$1 = state_29701;
var statearr_29751_29819 = state_29701__$1;
(statearr_29751_29819[(2)] = null);

(statearr_29751_29819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (17))){
var state_29701__$1 = state_29701;
var statearr_29752_29820 = state_29701__$1;
(statearr_29752_29820[(2)] = null);

(statearr_29752_29820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (3))){
var inst_29699 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29701__$1,inst_29699);
} else {
if((state_val_29702 === (12))){
var inst_29628 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29753_29821 = state_29701__$1;
(statearr_29753_29821[(2)] = inst_29628);

(statearr_29753_29821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (2))){
var state_29701__$1 = state_29701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29701__$1,(4),ch);
} else {
if((state_val_29702 === (23))){
var state_29701__$1 = state_29701;
var statearr_29754_29822 = state_29701__$1;
(statearr_29754_29822[(2)] = null);

(statearr_29754_29822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (35))){
var inst_29683 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29755_29823 = state_29701__$1;
(statearr_29755_29823[(2)] = inst_29683);

(statearr_29755_29823[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (19))){
var inst_29602 = (state_29701[(7)]);
var inst_29606 = cljs.core.chunk_first.call(null,inst_29602);
var inst_29607 = cljs.core.chunk_rest.call(null,inst_29602);
var inst_29608 = cljs.core.count.call(null,inst_29606);
var inst_29582 = inst_29607;
var inst_29583 = inst_29606;
var inst_29584 = inst_29608;
var inst_29585 = (0);
var state_29701__$1 = (function (){var statearr_29756 = state_29701;
(statearr_29756[(13)] = inst_29585);

(statearr_29756[(14)] = inst_29582);

(statearr_29756[(16)] = inst_29583);

(statearr_29756[(17)] = inst_29584);

return statearr_29756;
})();
var statearr_29757_29824 = state_29701__$1;
(statearr_29757_29824[(2)] = null);

(statearr_29757_29824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (11))){
var inst_29582 = (state_29701[(14)]);
var inst_29602 = (state_29701[(7)]);
var inst_29602__$1 = cljs.core.seq.call(null,inst_29582);
var state_29701__$1 = (function (){var statearr_29758 = state_29701;
(statearr_29758[(7)] = inst_29602__$1);

return statearr_29758;
})();
if(inst_29602__$1){
var statearr_29759_29825 = state_29701__$1;
(statearr_29759_29825[(1)] = (16));

} else {
var statearr_29760_29826 = state_29701__$1;
(statearr_29760_29826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (9))){
var inst_29630 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29761_29827 = state_29701__$1;
(statearr_29761_29827[(2)] = inst_29630);

(statearr_29761_29827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (5))){
var inst_29580 = cljs.core.deref.call(null,cs);
var inst_29581 = cljs.core.seq.call(null,inst_29580);
var inst_29582 = inst_29581;
var inst_29583 = null;
var inst_29584 = (0);
var inst_29585 = (0);
var state_29701__$1 = (function (){var statearr_29762 = state_29701;
(statearr_29762[(13)] = inst_29585);

(statearr_29762[(14)] = inst_29582);

(statearr_29762[(16)] = inst_29583);

(statearr_29762[(17)] = inst_29584);

return statearr_29762;
})();
var statearr_29763_29828 = state_29701__$1;
(statearr_29763_29828[(2)] = null);

(statearr_29763_29828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (14))){
var state_29701__$1 = state_29701;
var statearr_29764_29829 = state_29701__$1;
(statearr_29764_29829[(2)] = null);

(statearr_29764_29829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (45))){
var inst_29691 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29765_29830 = state_29701__$1;
(statearr_29765_29830[(2)] = inst_29691);

(statearr_29765_29830[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (26))){
var inst_29633 = (state_29701[(29)]);
var inst_29687 = (state_29701[(2)]);
var inst_29688 = cljs.core.seq.call(null,inst_29633);
var state_29701__$1 = (function (){var statearr_29766 = state_29701;
(statearr_29766[(31)] = inst_29687);

return statearr_29766;
})();
if(inst_29688){
var statearr_29767_29831 = state_29701__$1;
(statearr_29767_29831[(1)] = (42));

} else {
var statearr_29768_29832 = state_29701__$1;
(statearr_29768_29832[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (16))){
var inst_29602 = (state_29701[(7)]);
var inst_29604 = cljs.core.chunked_seq_QMARK_.call(null,inst_29602);
var state_29701__$1 = state_29701;
if(inst_29604){
var statearr_29769_29833 = state_29701__$1;
(statearr_29769_29833[(1)] = (19));

} else {
var statearr_29770_29834 = state_29701__$1;
(statearr_29770_29834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (38))){
var inst_29680 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29771_29835 = state_29701__$1;
(statearr_29771_29835[(2)] = inst_29680);

(statearr_29771_29835[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (30))){
var state_29701__$1 = state_29701;
var statearr_29772_29836 = state_29701__$1;
(statearr_29772_29836[(2)] = null);

(statearr_29772_29836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (10))){
var inst_29585 = (state_29701[(13)]);
var inst_29583 = (state_29701[(16)]);
var inst_29591 = cljs.core._nth.call(null,inst_29583,inst_29585);
var inst_29592 = cljs.core.nth.call(null,inst_29591,(0),null);
var inst_29593 = cljs.core.nth.call(null,inst_29591,(1),null);
var state_29701__$1 = (function (){var statearr_29773 = state_29701;
(statearr_29773[(26)] = inst_29592);

return statearr_29773;
})();
if(cljs.core.truth_(inst_29593)){
var statearr_29774_29837 = state_29701__$1;
(statearr_29774_29837[(1)] = (13));

} else {
var statearr_29775_29838 = state_29701__$1;
(statearr_29775_29838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (18))){
var inst_29626 = (state_29701[(2)]);
var state_29701__$1 = state_29701;
var statearr_29776_29839 = state_29701__$1;
(statearr_29776_29839[(2)] = inst_29626);

(statearr_29776_29839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (42))){
var state_29701__$1 = state_29701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29701__$1,(45),dchan);
} else {
if((state_val_29702 === (37))){
var inst_29660 = (state_29701[(25)]);
var inst_29669 = (state_29701[(23)]);
var inst_29573 = (state_29701[(12)]);
var inst_29669__$1 = cljs.core.first.call(null,inst_29660);
var inst_29670 = cljs.core.async.put_BANG_.call(null,inst_29669__$1,inst_29573,done);
var state_29701__$1 = (function (){var statearr_29777 = state_29701;
(statearr_29777[(23)] = inst_29669__$1);

return statearr_29777;
})();
if(cljs.core.truth_(inst_29670)){
var statearr_29778_29840 = state_29701__$1;
(statearr_29778_29840[(1)] = (39));

} else {
var statearr_29779_29841 = state_29701__$1;
(statearr_29779_29841[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (8))){
var inst_29585 = (state_29701[(13)]);
var inst_29584 = (state_29701[(17)]);
var inst_29587 = (inst_29585 < inst_29584);
var inst_29588 = inst_29587;
var state_29701__$1 = state_29701;
if(cljs.core.truth_(inst_29588)){
var statearr_29780_29842 = state_29701__$1;
(statearr_29780_29842[(1)] = (10));

} else {
var statearr_29781_29843 = state_29701__$1;
(statearr_29781_29843[(1)] = (11));

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
});})(c__23191__auto___29789,cs,m,dchan,dctr,done))
;
return ((function (switch__23129__auto__,c__23191__auto___29789,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23130__auto__ = null;
var cljs$core$async$mult_$_state_machine__23130__auto____0 = (function (){
var statearr_29785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29785[(0)] = cljs$core$async$mult_$_state_machine__23130__auto__);

(statearr_29785[(1)] = (1));

return statearr_29785;
});
var cljs$core$async$mult_$_state_machine__23130__auto____1 = (function (state_29701){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_29701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e29786){if((e29786 instanceof Object)){
var ex__23133__auto__ = e29786;
var statearr_29787_29844 = state_29701;
(statearr_29787_29844[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29845 = state_29701;
state_29701 = G__29845;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23130__auto__ = function(state_29701){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23130__auto____1.call(this,state_29701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23130__auto____0;
cljs$core$async$mult_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23130__auto____1;
return cljs$core$async$mult_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___29789,cs,m,dchan,dctr,done))
})();
var state__23193__auto__ = (function (){var statearr_29788 = f__23192__auto__.call(null);
(statearr_29788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___29789);

return statearr_29788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___29789,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__29847 = arguments.length;
switch (G__29847) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj29850 = {};
return obj29850;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18095__auto__ = m;
if(and__18095__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18095__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18743__auto__ = (((m == null))?null:m);
return (function (){var or__18107__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18095__auto__ = m;
if(and__18095__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18095__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18743__auto__ = (((m == null))?null:m);
return (function (){var or__18107__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18095__auto__ = m;
if(and__18095__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18095__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18743__auto__ = (((m == null))?null:m);
return (function (){var or__18107__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18095__auto__ = m;
if(and__18095__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18095__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18743__auto__ = (((m == null))?null:m);
return (function (){var or__18107__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18095__auto__ = m;
if(and__18095__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18095__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18743__auto__ = (((m == null))?null:m);
return (function (){var or__18107__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19147__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19147__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29855){
var map__29856 = p__29855;
var map__29856__$1 = ((cljs.core.seq_QMARK_.call(null,map__29856))?cljs.core.apply.call(null,cljs.core.hash_map,map__29856):map__29856);
var opts = map__29856__$1;
var statearr_29857_29860 = state;
(statearr_29857_29860[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29856,map__29856__$1,opts){
return (function (val){
var statearr_29858_29861 = state;
(statearr_29858_29861[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29856,map__29856__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29859_29862 = state;
(statearr_29859_29862[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29851){
var G__29852 = cljs.core.first.call(null,seq29851);
var seq29851__$1 = cljs.core.next.call(null,seq29851);
var G__29853 = cljs.core.first.call(null,seq29851__$1);
var seq29851__$2 = cljs.core.next.call(null,seq29851__$1);
var G__29854 = cljs.core.first.call(null,seq29851__$2);
var seq29851__$3 = cljs.core.next.call(null,seq29851__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29852,G__29853,G__29854,seq29851__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t29982 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29982 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29983){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29983 = meta29983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29984,meta29983__$1){
var self__ = this;
var _29984__$1 = this;
return (new cljs.core.async.t29982(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29983__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29984){
var self__ = this;
var _29984__$1 = this;
return self__.meta29983;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29982.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29982.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29982.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29982.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29982.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29982.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29982.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29982.cljs$lang$type = true;

cljs.core.async.t29982.cljs$lang$ctorStr = "cljs.core.async/t29982";

cljs.core.async.t29982.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t29982");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29982 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29982(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29983){
return (new cljs.core.async.t29982(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29983));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29982(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23191__auto___30101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30054){
var state_val_30055 = (state_30054[(1)]);
if((state_val_30055 === (7))){
var inst_29998 = (state_30054[(7)]);
var inst_30003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29998);
var state_30054__$1 = state_30054;
var statearr_30056_30102 = state_30054__$1;
(statearr_30056_30102[(2)] = inst_30003);

(statearr_30056_30102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (20))){
var inst_30013 = (state_30054[(8)]);
var state_30054__$1 = state_30054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30054__$1,(23),out,inst_30013);
} else {
if((state_val_30055 === (1))){
var inst_29988 = (state_30054[(9)]);
var inst_29988__$1 = calc_state.call(null);
var inst_29989 = cljs.core.seq_QMARK_.call(null,inst_29988__$1);
var state_30054__$1 = (function (){var statearr_30057 = state_30054;
(statearr_30057[(9)] = inst_29988__$1);

return statearr_30057;
})();
if(inst_29989){
var statearr_30058_30103 = state_30054__$1;
(statearr_30058_30103[(1)] = (2));

} else {
var statearr_30059_30104 = state_30054__$1;
(statearr_30059_30104[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (24))){
var inst_30006 = (state_30054[(10)]);
var inst_29998 = inst_30006;
var state_30054__$1 = (function (){var statearr_30060 = state_30054;
(statearr_30060[(7)] = inst_29998);

return statearr_30060;
})();
var statearr_30061_30105 = state_30054__$1;
(statearr_30061_30105[(2)] = null);

(statearr_30061_30105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (4))){
var inst_29988 = (state_30054[(9)]);
var inst_29994 = (state_30054[(2)]);
var inst_29995 = cljs.core.get.call(null,inst_29994,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29996 = cljs.core.get.call(null,inst_29994,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29997 = cljs.core.get.call(null,inst_29994,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29998 = inst_29988;
var state_30054__$1 = (function (){var statearr_30062 = state_30054;
(statearr_30062[(11)] = inst_29996);

(statearr_30062[(12)] = inst_29995);

(statearr_30062[(7)] = inst_29998);

(statearr_30062[(13)] = inst_29997);

return statearr_30062;
})();
var statearr_30063_30106 = state_30054__$1;
(statearr_30063_30106[(2)] = null);

(statearr_30063_30106[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (15))){
var state_30054__$1 = state_30054;
var statearr_30064_30107 = state_30054__$1;
(statearr_30064_30107[(2)] = null);

(statearr_30064_30107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (21))){
var inst_30006 = (state_30054[(10)]);
var inst_29998 = inst_30006;
var state_30054__$1 = (function (){var statearr_30065 = state_30054;
(statearr_30065[(7)] = inst_29998);

return statearr_30065;
})();
var statearr_30066_30108 = state_30054__$1;
(statearr_30066_30108[(2)] = null);

(statearr_30066_30108[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (13))){
var inst_30050 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
var statearr_30067_30109 = state_30054__$1;
(statearr_30067_30109[(2)] = inst_30050);

(statearr_30067_30109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (22))){
var inst_30048 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
var statearr_30068_30110 = state_30054__$1;
(statearr_30068_30110[(2)] = inst_30048);

(statearr_30068_30110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (6))){
var inst_30052 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30054__$1,inst_30052);
} else {
if((state_val_30055 === (25))){
var state_30054__$1 = state_30054;
var statearr_30069_30111 = state_30054__$1;
(statearr_30069_30111[(2)] = null);

(statearr_30069_30111[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (17))){
var inst_30028 = (state_30054[(14)]);
var state_30054__$1 = state_30054;
var statearr_30070_30112 = state_30054__$1;
(statearr_30070_30112[(2)] = inst_30028);

(statearr_30070_30112[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (3))){
var inst_29988 = (state_30054[(9)]);
var state_30054__$1 = state_30054;
var statearr_30071_30113 = state_30054__$1;
(statearr_30071_30113[(2)] = inst_29988);

(statearr_30071_30113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (12))){
var inst_30028 = (state_30054[(14)]);
var inst_30014 = (state_30054[(15)]);
var inst_30007 = (state_30054[(16)]);
var inst_30028__$1 = inst_30007.call(null,inst_30014);
var state_30054__$1 = (function (){var statearr_30072 = state_30054;
(statearr_30072[(14)] = inst_30028__$1);

return statearr_30072;
})();
if(cljs.core.truth_(inst_30028__$1)){
var statearr_30073_30114 = state_30054__$1;
(statearr_30073_30114[(1)] = (17));

} else {
var statearr_30074_30115 = state_30054__$1;
(statearr_30074_30115[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (2))){
var inst_29988 = (state_30054[(9)]);
var inst_29991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29988);
var state_30054__$1 = state_30054;
var statearr_30075_30116 = state_30054__$1;
(statearr_30075_30116[(2)] = inst_29991);

(statearr_30075_30116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (23))){
var inst_30039 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
if(cljs.core.truth_(inst_30039)){
var statearr_30076_30117 = state_30054__$1;
(statearr_30076_30117[(1)] = (24));

} else {
var statearr_30077_30118 = state_30054__$1;
(statearr_30077_30118[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (19))){
var inst_30036 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
if(cljs.core.truth_(inst_30036)){
var statearr_30078_30119 = state_30054__$1;
(statearr_30078_30119[(1)] = (20));

} else {
var statearr_30079_30120 = state_30054__$1;
(statearr_30079_30120[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (11))){
var inst_30013 = (state_30054[(8)]);
var inst_30019 = (inst_30013 == null);
var state_30054__$1 = state_30054;
if(cljs.core.truth_(inst_30019)){
var statearr_30080_30121 = state_30054__$1;
(statearr_30080_30121[(1)] = (14));

} else {
var statearr_30081_30122 = state_30054__$1;
(statearr_30081_30122[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (9))){
var inst_30006 = (state_30054[(10)]);
var inst_30006__$1 = (state_30054[(2)]);
var inst_30007 = cljs.core.get.call(null,inst_30006__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30008 = cljs.core.get.call(null,inst_30006__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30009 = cljs.core.get.call(null,inst_30006__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30054__$1 = (function (){var statearr_30082 = state_30054;
(statearr_30082[(10)] = inst_30006__$1);

(statearr_30082[(17)] = inst_30008);

(statearr_30082[(16)] = inst_30007);

return statearr_30082;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30054__$1,(10),inst_30009);
} else {
if((state_val_30055 === (5))){
var inst_29998 = (state_30054[(7)]);
var inst_30001 = cljs.core.seq_QMARK_.call(null,inst_29998);
var state_30054__$1 = state_30054;
if(inst_30001){
var statearr_30083_30123 = state_30054__$1;
(statearr_30083_30123[(1)] = (7));

} else {
var statearr_30084_30124 = state_30054__$1;
(statearr_30084_30124[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (14))){
var inst_30014 = (state_30054[(15)]);
var inst_30021 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30014);
var state_30054__$1 = state_30054;
var statearr_30085_30125 = state_30054__$1;
(statearr_30085_30125[(2)] = inst_30021);

(statearr_30085_30125[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (26))){
var inst_30044 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
var statearr_30086_30126 = state_30054__$1;
(statearr_30086_30126[(2)] = inst_30044);

(statearr_30086_30126[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (16))){
var inst_30024 = (state_30054[(2)]);
var inst_30025 = calc_state.call(null);
var inst_29998 = inst_30025;
var state_30054__$1 = (function (){var statearr_30087 = state_30054;
(statearr_30087[(18)] = inst_30024);

(statearr_30087[(7)] = inst_29998);

return statearr_30087;
})();
var statearr_30088_30127 = state_30054__$1;
(statearr_30088_30127[(2)] = null);

(statearr_30088_30127[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (10))){
var inst_30014 = (state_30054[(15)]);
var inst_30013 = (state_30054[(8)]);
var inst_30012 = (state_30054[(2)]);
var inst_30013__$1 = cljs.core.nth.call(null,inst_30012,(0),null);
var inst_30014__$1 = cljs.core.nth.call(null,inst_30012,(1),null);
var inst_30015 = (inst_30013__$1 == null);
var inst_30016 = cljs.core._EQ_.call(null,inst_30014__$1,change);
var inst_30017 = (inst_30015) || (inst_30016);
var state_30054__$1 = (function (){var statearr_30089 = state_30054;
(statearr_30089[(15)] = inst_30014__$1);

(statearr_30089[(8)] = inst_30013__$1);

return statearr_30089;
})();
if(cljs.core.truth_(inst_30017)){
var statearr_30090_30128 = state_30054__$1;
(statearr_30090_30128[(1)] = (11));

} else {
var statearr_30091_30129 = state_30054__$1;
(statearr_30091_30129[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (18))){
var inst_30014 = (state_30054[(15)]);
var inst_30008 = (state_30054[(17)]);
var inst_30007 = (state_30054[(16)]);
var inst_30031 = cljs.core.empty_QMARK_.call(null,inst_30007);
var inst_30032 = inst_30008.call(null,inst_30014);
var inst_30033 = cljs.core.not.call(null,inst_30032);
var inst_30034 = (inst_30031) && (inst_30033);
var state_30054__$1 = state_30054;
var statearr_30092_30130 = state_30054__$1;
(statearr_30092_30130[(2)] = inst_30034);

(statearr_30092_30130[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (8))){
var inst_29998 = (state_30054[(7)]);
var state_30054__$1 = state_30054;
var statearr_30093_30131 = state_30054__$1;
(statearr_30093_30131[(2)] = inst_29998);

(statearr_30093_30131[(1)] = (9));


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
});})(c__23191__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23129__auto__,c__23191__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23130__auto__ = null;
var cljs$core$async$mix_$_state_machine__23130__auto____0 = (function (){
var statearr_30097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30097[(0)] = cljs$core$async$mix_$_state_machine__23130__auto__);

(statearr_30097[(1)] = (1));

return statearr_30097;
});
var cljs$core$async$mix_$_state_machine__23130__auto____1 = (function (state_30054){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30098){if((e30098 instanceof Object)){
var ex__23133__auto__ = e30098;
var statearr_30099_30132 = state_30054;
(statearr_30099_30132[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30133 = state_30054;
state_30054 = G__30133;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23130__auto__ = function(state_30054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23130__auto____1.call(this,state_30054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23130__auto____0;
cljs$core$async$mix_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23130__auto____1;
return cljs$core$async$mix_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23193__auto__ = (function (){var statearr_30100 = f__23192__auto__.call(null);
(statearr_30100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___30101);

return statearr_30100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj30135 = {};
return obj30135;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18095__auto__ = p;
if(and__18095__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18095__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18743__auto__ = (((p == null))?null:p);
return (function (){var or__18107__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18095__auto__ = p;
if(and__18095__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18095__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18743__auto__ = (((p == null))?null:p);
return (function (){var or__18107__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__30137 = arguments.length;
switch (G__30137) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18095__auto__ = p;
if(and__18095__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18095__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18743__auto__ = (((p == null))?null:p);
return (function (){var or__18107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18095__auto__ = p;
if(and__18095__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18095__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18743__auto__ = (((p == null))?null:p);
return (function (){var or__18107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18743__auto__)]);
if(or__18107__auto__){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18107__auto____$1){
return or__18107__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__30141 = arguments.length;
switch (G__30141) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18107__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18107__auto__,mults){
return (function (p1__30139_SHARP_){
if(cljs.core.truth_(p1__30139_SHARP_.call(null,topic))){
return p1__30139_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30139_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18107__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30142 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30142 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30143){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30143 = meta30143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30144,meta30143__$1){
var self__ = this;
var _30144__$1 = this;
return (new cljs.core.async.t30142(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30143__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30144){
var self__ = this;
var _30144__$1 = this;
return self__.meta30143;
});})(mults,ensure_mult))
;

cljs.core.async.t30142.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30142.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30142.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30142.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30142.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30142.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30142.cljs$lang$type = true;

cljs.core.async.t30142.cljs$lang$ctorStr = "cljs.core.async/t30142";

cljs.core.async.t30142.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t30142");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30142 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30142(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30143){
return (new cljs.core.async.t30142(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30143));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30142(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23191__auto___30265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___30265,mults,ensure_mult,p){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___30265,mults,ensure_mult,p){
return (function (state_30216){
var state_val_30217 = (state_30216[(1)]);
if((state_val_30217 === (7))){
var inst_30212 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
var statearr_30218_30266 = state_30216__$1;
(statearr_30218_30266[(2)] = inst_30212);

(statearr_30218_30266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (20))){
var state_30216__$1 = state_30216;
var statearr_30219_30267 = state_30216__$1;
(statearr_30219_30267[(2)] = null);

(statearr_30219_30267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (1))){
var state_30216__$1 = state_30216;
var statearr_30220_30268 = state_30216__$1;
(statearr_30220_30268[(2)] = null);

(statearr_30220_30268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (24))){
var inst_30195 = (state_30216[(7)]);
var inst_30204 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30195);
var state_30216__$1 = state_30216;
var statearr_30221_30269 = state_30216__$1;
(statearr_30221_30269[(2)] = inst_30204);

(statearr_30221_30269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (4))){
var inst_30147 = (state_30216[(8)]);
var inst_30147__$1 = (state_30216[(2)]);
var inst_30148 = (inst_30147__$1 == null);
var state_30216__$1 = (function (){var statearr_30222 = state_30216;
(statearr_30222[(8)] = inst_30147__$1);

return statearr_30222;
})();
if(cljs.core.truth_(inst_30148)){
var statearr_30223_30270 = state_30216__$1;
(statearr_30223_30270[(1)] = (5));

} else {
var statearr_30224_30271 = state_30216__$1;
(statearr_30224_30271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (15))){
var inst_30189 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
var statearr_30225_30272 = state_30216__$1;
(statearr_30225_30272[(2)] = inst_30189);

(statearr_30225_30272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (21))){
var inst_30209 = (state_30216[(2)]);
var state_30216__$1 = (function (){var statearr_30226 = state_30216;
(statearr_30226[(9)] = inst_30209);

return statearr_30226;
})();
var statearr_30227_30273 = state_30216__$1;
(statearr_30227_30273[(2)] = null);

(statearr_30227_30273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (13))){
var inst_30171 = (state_30216[(10)]);
var inst_30173 = cljs.core.chunked_seq_QMARK_.call(null,inst_30171);
var state_30216__$1 = state_30216;
if(inst_30173){
var statearr_30228_30274 = state_30216__$1;
(statearr_30228_30274[(1)] = (16));

} else {
var statearr_30229_30275 = state_30216__$1;
(statearr_30229_30275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (22))){
var inst_30201 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
if(cljs.core.truth_(inst_30201)){
var statearr_30230_30276 = state_30216__$1;
(statearr_30230_30276[(1)] = (23));

} else {
var statearr_30231_30277 = state_30216__$1;
(statearr_30231_30277[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (6))){
var inst_30197 = (state_30216[(11)]);
var inst_30147 = (state_30216[(8)]);
var inst_30195 = (state_30216[(7)]);
var inst_30195__$1 = topic_fn.call(null,inst_30147);
var inst_30196 = cljs.core.deref.call(null,mults);
var inst_30197__$1 = cljs.core.get.call(null,inst_30196,inst_30195__$1);
var state_30216__$1 = (function (){var statearr_30232 = state_30216;
(statearr_30232[(11)] = inst_30197__$1);

(statearr_30232[(7)] = inst_30195__$1);

return statearr_30232;
})();
if(cljs.core.truth_(inst_30197__$1)){
var statearr_30233_30278 = state_30216__$1;
(statearr_30233_30278[(1)] = (19));

} else {
var statearr_30234_30279 = state_30216__$1;
(statearr_30234_30279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (25))){
var inst_30206 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
var statearr_30235_30280 = state_30216__$1;
(statearr_30235_30280[(2)] = inst_30206);

(statearr_30235_30280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (17))){
var inst_30171 = (state_30216[(10)]);
var inst_30180 = cljs.core.first.call(null,inst_30171);
var inst_30181 = cljs.core.async.muxch_STAR_.call(null,inst_30180);
var inst_30182 = cljs.core.async.close_BANG_.call(null,inst_30181);
var inst_30183 = cljs.core.next.call(null,inst_30171);
var inst_30157 = inst_30183;
var inst_30158 = null;
var inst_30159 = (0);
var inst_30160 = (0);
var state_30216__$1 = (function (){var statearr_30236 = state_30216;
(statearr_30236[(12)] = inst_30158);

(statearr_30236[(13)] = inst_30159);

(statearr_30236[(14)] = inst_30157);

(statearr_30236[(15)] = inst_30182);

(statearr_30236[(16)] = inst_30160);

return statearr_30236;
})();
var statearr_30237_30281 = state_30216__$1;
(statearr_30237_30281[(2)] = null);

(statearr_30237_30281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (3))){
var inst_30214 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30216__$1,inst_30214);
} else {
if((state_val_30217 === (12))){
var inst_30191 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
var statearr_30238_30282 = state_30216__$1;
(statearr_30238_30282[(2)] = inst_30191);

(statearr_30238_30282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (2))){
var state_30216__$1 = state_30216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30216__$1,(4),ch);
} else {
if((state_val_30217 === (23))){
var state_30216__$1 = state_30216;
var statearr_30239_30283 = state_30216__$1;
(statearr_30239_30283[(2)] = null);

(statearr_30239_30283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (19))){
var inst_30197 = (state_30216[(11)]);
var inst_30147 = (state_30216[(8)]);
var inst_30199 = cljs.core.async.muxch_STAR_.call(null,inst_30197);
var state_30216__$1 = state_30216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30216__$1,(22),inst_30199,inst_30147);
} else {
if((state_val_30217 === (11))){
var inst_30157 = (state_30216[(14)]);
var inst_30171 = (state_30216[(10)]);
var inst_30171__$1 = cljs.core.seq.call(null,inst_30157);
var state_30216__$1 = (function (){var statearr_30240 = state_30216;
(statearr_30240[(10)] = inst_30171__$1);

return statearr_30240;
})();
if(inst_30171__$1){
var statearr_30241_30284 = state_30216__$1;
(statearr_30241_30284[(1)] = (13));

} else {
var statearr_30242_30285 = state_30216__$1;
(statearr_30242_30285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (9))){
var inst_30193 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
var statearr_30243_30286 = state_30216__$1;
(statearr_30243_30286[(2)] = inst_30193);

(statearr_30243_30286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (5))){
var inst_30154 = cljs.core.deref.call(null,mults);
var inst_30155 = cljs.core.vals.call(null,inst_30154);
var inst_30156 = cljs.core.seq.call(null,inst_30155);
var inst_30157 = inst_30156;
var inst_30158 = null;
var inst_30159 = (0);
var inst_30160 = (0);
var state_30216__$1 = (function (){var statearr_30244 = state_30216;
(statearr_30244[(12)] = inst_30158);

(statearr_30244[(13)] = inst_30159);

(statearr_30244[(14)] = inst_30157);

(statearr_30244[(16)] = inst_30160);

return statearr_30244;
})();
var statearr_30245_30287 = state_30216__$1;
(statearr_30245_30287[(2)] = null);

(statearr_30245_30287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (14))){
var state_30216__$1 = state_30216;
var statearr_30249_30288 = state_30216__$1;
(statearr_30249_30288[(2)] = null);

(statearr_30249_30288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (16))){
var inst_30171 = (state_30216[(10)]);
var inst_30175 = cljs.core.chunk_first.call(null,inst_30171);
var inst_30176 = cljs.core.chunk_rest.call(null,inst_30171);
var inst_30177 = cljs.core.count.call(null,inst_30175);
var inst_30157 = inst_30176;
var inst_30158 = inst_30175;
var inst_30159 = inst_30177;
var inst_30160 = (0);
var state_30216__$1 = (function (){var statearr_30250 = state_30216;
(statearr_30250[(12)] = inst_30158);

(statearr_30250[(13)] = inst_30159);

(statearr_30250[(14)] = inst_30157);

(statearr_30250[(16)] = inst_30160);

return statearr_30250;
})();
var statearr_30251_30289 = state_30216__$1;
(statearr_30251_30289[(2)] = null);

(statearr_30251_30289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (10))){
var inst_30158 = (state_30216[(12)]);
var inst_30159 = (state_30216[(13)]);
var inst_30157 = (state_30216[(14)]);
var inst_30160 = (state_30216[(16)]);
var inst_30165 = cljs.core._nth.call(null,inst_30158,inst_30160);
var inst_30166 = cljs.core.async.muxch_STAR_.call(null,inst_30165);
var inst_30167 = cljs.core.async.close_BANG_.call(null,inst_30166);
var inst_30168 = (inst_30160 + (1));
var tmp30246 = inst_30158;
var tmp30247 = inst_30159;
var tmp30248 = inst_30157;
var inst_30157__$1 = tmp30248;
var inst_30158__$1 = tmp30246;
var inst_30159__$1 = tmp30247;
var inst_30160__$1 = inst_30168;
var state_30216__$1 = (function (){var statearr_30252 = state_30216;
(statearr_30252[(12)] = inst_30158__$1);

(statearr_30252[(13)] = inst_30159__$1);

(statearr_30252[(14)] = inst_30157__$1);

(statearr_30252[(17)] = inst_30167);

(statearr_30252[(16)] = inst_30160__$1);

return statearr_30252;
})();
var statearr_30253_30290 = state_30216__$1;
(statearr_30253_30290[(2)] = null);

(statearr_30253_30290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (18))){
var inst_30186 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
var statearr_30254_30291 = state_30216__$1;
(statearr_30254_30291[(2)] = inst_30186);

(statearr_30254_30291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (8))){
var inst_30159 = (state_30216[(13)]);
var inst_30160 = (state_30216[(16)]);
var inst_30162 = (inst_30160 < inst_30159);
var inst_30163 = inst_30162;
var state_30216__$1 = state_30216;
if(cljs.core.truth_(inst_30163)){
var statearr_30255_30292 = state_30216__$1;
(statearr_30255_30292[(1)] = (10));

} else {
var statearr_30256_30293 = state_30216__$1;
(statearr_30256_30293[(1)] = (11));

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
});})(c__23191__auto___30265,mults,ensure_mult,p))
;
return ((function (switch__23129__auto__,c__23191__auto___30265,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_30260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30260[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_30260[(1)] = (1));

return statearr_30260;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_30216){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30261){if((e30261 instanceof Object)){
var ex__23133__auto__ = e30261;
var statearr_30262_30294 = state_30216;
(statearr_30262_30294[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30295 = state_30216;
state_30216 = G__30295;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_30216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_30216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___30265,mults,ensure_mult,p))
})();
var state__23193__auto__ = (function (){var statearr_30263 = f__23192__auto__.call(null);
(statearr_30263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___30265);

return statearr_30263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___30265,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__30297 = arguments.length;
switch (G__30297) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__30300 = arguments.length;
switch (G__30300) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__30303 = arguments.length;
switch (G__30303) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__23191__auto___30373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___30373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___30373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30342){
var state_val_30343 = (state_30342[(1)]);
if((state_val_30343 === (7))){
var state_30342__$1 = state_30342;
var statearr_30344_30374 = state_30342__$1;
(statearr_30344_30374[(2)] = null);

(statearr_30344_30374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (1))){
var state_30342__$1 = state_30342;
var statearr_30345_30375 = state_30342__$1;
(statearr_30345_30375[(2)] = null);

(statearr_30345_30375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (4))){
var inst_30306 = (state_30342[(7)]);
var inst_30308 = (inst_30306 < cnt);
var state_30342__$1 = state_30342;
if(cljs.core.truth_(inst_30308)){
var statearr_30346_30376 = state_30342__$1;
(statearr_30346_30376[(1)] = (6));

} else {
var statearr_30347_30377 = state_30342__$1;
(statearr_30347_30377[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (15))){
var inst_30338 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30348_30378 = state_30342__$1;
(statearr_30348_30378[(2)] = inst_30338);

(statearr_30348_30378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (13))){
var inst_30331 = cljs.core.async.close_BANG_.call(null,out);
var state_30342__$1 = state_30342;
var statearr_30349_30379 = state_30342__$1;
(statearr_30349_30379[(2)] = inst_30331);

(statearr_30349_30379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (6))){
var state_30342__$1 = state_30342;
var statearr_30350_30380 = state_30342__$1;
(statearr_30350_30380[(2)] = null);

(statearr_30350_30380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (3))){
var inst_30340 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30342__$1,inst_30340);
} else {
if((state_val_30343 === (12))){
var inst_30328 = (state_30342[(8)]);
var inst_30328__$1 = (state_30342[(2)]);
var inst_30329 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30328__$1);
var state_30342__$1 = (function (){var statearr_30351 = state_30342;
(statearr_30351[(8)] = inst_30328__$1);

return statearr_30351;
})();
if(cljs.core.truth_(inst_30329)){
var statearr_30352_30381 = state_30342__$1;
(statearr_30352_30381[(1)] = (13));

} else {
var statearr_30353_30382 = state_30342__$1;
(statearr_30353_30382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (2))){
var inst_30305 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30306 = (0);
var state_30342__$1 = (function (){var statearr_30354 = state_30342;
(statearr_30354[(7)] = inst_30306);

(statearr_30354[(9)] = inst_30305);

return statearr_30354;
})();
var statearr_30355_30383 = state_30342__$1;
(statearr_30355_30383[(2)] = null);

(statearr_30355_30383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (11))){
var inst_30306 = (state_30342[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30342,(10),Object,null,(9));
var inst_30315 = chs__$1.call(null,inst_30306);
var inst_30316 = done.call(null,inst_30306);
var inst_30317 = cljs.core.async.take_BANG_.call(null,inst_30315,inst_30316);
var state_30342__$1 = state_30342;
var statearr_30356_30384 = state_30342__$1;
(statearr_30356_30384[(2)] = inst_30317);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (9))){
var inst_30306 = (state_30342[(7)]);
var inst_30319 = (state_30342[(2)]);
var inst_30320 = (inst_30306 + (1));
var inst_30306__$1 = inst_30320;
var state_30342__$1 = (function (){var statearr_30357 = state_30342;
(statearr_30357[(7)] = inst_30306__$1);

(statearr_30357[(10)] = inst_30319);

return statearr_30357;
})();
var statearr_30358_30385 = state_30342__$1;
(statearr_30358_30385[(2)] = null);

(statearr_30358_30385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (5))){
var inst_30326 = (state_30342[(2)]);
var state_30342__$1 = (function (){var statearr_30359 = state_30342;
(statearr_30359[(11)] = inst_30326);

return statearr_30359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30342__$1,(12),dchan);
} else {
if((state_val_30343 === (14))){
var inst_30328 = (state_30342[(8)]);
var inst_30333 = cljs.core.apply.call(null,f,inst_30328);
var state_30342__$1 = state_30342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30342__$1,(16),out,inst_30333);
} else {
if((state_val_30343 === (16))){
var inst_30335 = (state_30342[(2)]);
var state_30342__$1 = (function (){var statearr_30360 = state_30342;
(statearr_30360[(12)] = inst_30335);

return statearr_30360;
})();
var statearr_30361_30386 = state_30342__$1;
(statearr_30361_30386[(2)] = null);

(statearr_30361_30386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (10))){
var inst_30310 = (state_30342[(2)]);
var inst_30311 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30342__$1 = (function (){var statearr_30362 = state_30342;
(statearr_30362[(13)] = inst_30310);

return statearr_30362;
})();
var statearr_30363_30387 = state_30342__$1;
(statearr_30363_30387[(2)] = inst_30311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (8))){
var inst_30324 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30364_30388 = state_30342__$1;
(statearr_30364_30388[(2)] = inst_30324);

(statearr_30364_30388[(1)] = (5));


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
});})(c__23191__auto___30373,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23129__auto__,c__23191__auto___30373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_30368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30368[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_30368[(1)] = (1));

return statearr_30368;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_30342){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30369){if((e30369 instanceof Object)){
var ex__23133__auto__ = e30369;
var statearr_30370_30389 = state_30342;
(statearr_30370_30389[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30390 = state_30342;
state_30342 = G__30390;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_30342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_30342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___30373,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23193__auto__ = (function (){var statearr_30371 = f__23192__auto__.call(null);
(statearr_30371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___30373);

return statearr_30371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___30373,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__30393 = arguments.length;
switch (G__30393) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23191__auto___30448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___30448,out){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___30448,out){
return (function (state_30423){
var state_val_30424 = (state_30423[(1)]);
if((state_val_30424 === (7))){
var inst_30403 = (state_30423[(7)]);
var inst_30402 = (state_30423[(8)]);
var inst_30402__$1 = (state_30423[(2)]);
var inst_30403__$1 = cljs.core.nth.call(null,inst_30402__$1,(0),null);
var inst_30404 = cljs.core.nth.call(null,inst_30402__$1,(1),null);
var inst_30405 = (inst_30403__$1 == null);
var state_30423__$1 = (function (){var statearr_30425 = state_30423;
(statearr_30425[(9)] = inst_30404);

(statearr_30425[(7)] = inst_30403__$1);

(statearr_30425[(8)] = inst_30402__$1);

return statearr_30425;
})();
if(cljs.core.truth_(inst_30405)){
var statearr_30426_30449 = state_30423__$1;
(statearr_30426_30449[(1)] = (8));

} else {
var statearr_30427_30450 = state_30423__$1;
(statearr_30427_30450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (1))){
var inst_30394 = cljs.core.vec.call(null,chs);
var inst_30395 = inst_30394;
var state_30423__$1 = (function (){var statearr_30428 = state_30423;
(statearr_30428[(10)] = inst_30395);

return statearr_30428;
})();
var statearr_30429_30451 = state_30423__$1;
(statearr_30429_30451[(2)] = null);

(statearr_30429_30451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (4))){
var inst_30395 = (state_30423[(10)]);
var state_30423__$1 = state_30423;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30423__$1,(7),inst_30395);
} else {
if((state_val_30424 === (6))){
var inst_30419 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30430_30452 = state_30423__$1;
(statearr_30430_30452[(2)] = inst_30419);

(statearr_30430_30452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (3))){
var inst_30421 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30423__$1,inst_30421);
} else {
if((state_val_30424 === (2))){
var inst_30395 = (state_30423[(10)]);
var inst_30397 = cljs.core.count.call(null,inst_30395);
var inst_30398 = (inst_30397 > (0));
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30398)){
var statearr_30432_30453 = state_30423__$1;
(statearr_30432_30453[(1)] = (4));

} else {
var statearr_30433_30454 = state_30423__$1;
(statearr_30433_30454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (11))){
var inst_30395 = (state_30423[(10)]);
var inst_30412 = (state_30423[(2)]);
var tmp30431 = inst_30395;
var inst_30395__$1 = tmp30431;
var state_30423__$1 = (function (){var statearr_30434 = state_30423;
(statearr_30434[(10)] = inst_30395__$1);

(statearr_30434[(11)] = inst_30412);

return statearr_30434;
})();
var statearr_30435_30455 = state_30423__$1;
(statearr_30435_30455[(2)] = null);

(statearr_30435_30455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (9))){
var inst_30403 = (state_30423[(7)]);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30423__$1,(11),out,inst_30403);
} else {
if((state_val_30424 === (5))){
var inst_30417 = cljs.core.async.close_BANG_.call(null,out);
var state_30423__$1 = state_30423;
var statearr_30436_30456 = state_30423__$1;
(statearr_30436_30456[(2)] = inst_30417);

(statearr_30436_30456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (10))){
var inst_30415 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30437_30457 = state_30423__$1;
(statearr_30437_30457[(2)] = inst_30415);

(statearr_30437_30457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (8))){
var inst_30404 = (state_30423[(9)]);
var inst_30403 = (state_30423[(7)]);
var inst_30402 = (state_30423[(8)]);
var inst_30395 = (state_30423[(10)]);
var inst_30407 = (function (){var cs = inst_30395;
var vec__30400 = inst_30402;
var v = inst_30403;
var c = inst_30404;
return ((function (cs,vec__30400,v,c,inst_30404,inst_30403,inst_30402,inst_30395,state_val_30424,c__23191__auto___30448,out){
return (function (p1__30391_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30391_SHARP_);
});
;})(cs,vec__30400,v,c,inst_30404,inst_30403,inst_30402,inst_30395,state_val_30424,c__23191__auto___30448,out))
})();
var inst_30408 = cljs.core.filterv.call(null,inst_30407,inst_30395);
var inst_30395__$1 = inst_30408;
var state_30423__$1 = (function (){var statearr_30438 = state_30423;
(statearr_30438[(10)] = inst_30395__$1);

return statearr_30438;
})();
var statearr_30439_30458 = state_30423__$1;
(statearr_30439_30458[(2)] = null);

(statearr_30439_30458[(1)] = (2));


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
});})(c__23191__auto___30448,out))
;
return ((function (switch__23129__auto__,c__23191__auto___30448,out){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_30443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30443[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_30443[(1)] = (1));

return statearr_30443;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_30423){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30444){if((e30444 instanceof Object)){
var ex__23133__auto__ = e30444;
var statearr_30445_30459 = state_30423;
(statearr_30445_30459[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30460 = state_30423;
state_30423 = G__30460;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_30423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_30423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___30448,out))
})();
var state__23193__auto__ = (function (){var statearr_30446 = f__23192__auto__.call(null);
(statearr_30446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___30448);

return statearr_30446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___30448,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__30462 = arguments.length;
switch (G__30462) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23191__auto___30510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___30510,out){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___30510,out){
return (function (state_30486){
var state_val_30487 = (state_30486[(1)]);
if((state_val_30487 === (7))){
var inst_30468 = (state_30486[(7)]);
var inst_30468__$1 = (state_30486[(2)]);
var inst_30469 = (inst_30468__$1 == null);
var inst_30470 = cljs.core.not.call(null,inst_30469);
var state_30486__$1 = (function (){var statearr_30488 = state_30486;
(statearr_30488[(7)] = inst_30468__$1);

return statearr_30488;
})();
if(inst_30470){
var statearr_30489_30511 = state_30486__$1;
(statearr_30489_30511[(1)] = (8));

} else {
var statearr_30490_30512 = state_30486__$1;
(statearr_30490_30512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (1))){
var inst_30463 = (0);
var state_30486__$1 = (function (){var statearr_30491 = state_30486;
(statearr_30491[(8)] = inst_30463);

return statearr_30491;
})();
var statearr_30492_30513 = state_30486__$1;
(statearr_30492_30513[(2)] = null);

(statearr_30492_30513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (4))){
var state_30486__$1 = state_30486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30486__$1,(7),ch);
} else {
if((state_val_30487 === (6))){
var inst_30481 = (state_30486[(2)]);
var state_30486__$1 = state_30486;
var statearr_30493_30514 = state_30486__$1;
(statearr_30493_30514[(2)] = inst_30481);

(statearr_30493_30514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (3))){
var inst_30483 = (state_30486[(2)]);
var inst_30484 = cljs.core.async.close_BANG_.call(null,out);
var state_30486__$1 = (function (){var statearr_30494 = state_30486;
(statearr_30494[(9)] = inst_30483);

return statearr_30494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30486__$1,inst_30484);
} else {
if((state_val_30487 === (2))){
var inst_30463 = (state_30486[(8)]);
var inst_30465 = (inst_30463 < n);
var state_30486__$1 = state_30486;
if(cljs.core.truth_(inst_30465)){
var statearr_30495_30515 = state_30486__$1;
(statearr_30495_30515[(1)] = (4));

} else {
var statearr_30496_30516 = state_30486__$1;
(statearr_30496_30516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (11))){
var inst_30463 = (state_30486[(8)]);
var inst_30473 = (state_30486[(2)]);
var inst_30474 = (inst_30463 + (1));
var inst_30463__$1 = inst_30474;
var state_30486__$1 = (function (){var statearr_30497 = state_30486;
(statearr_30497[(10)] = inst_30473);

(statearr_30497[(8)] = inst_30463__$1);

return statearr_30497;
})();
var statearr_30498_30517 = state_30486__$1;
(statearr_30498_30517[(2)] = null);

(statearr_30498_30517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (9))){
var state_30486__$1 = state_30486;
var statearr_30499_30518 = state_30486__$1;
(statearr_30499_30518[(2)] = null);

(statearr_30499_30518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (5))){
var state_30486__$1 = state_30486;
var statearr_30500_30519 = state_30486__$1;
(statearr_30500_30519[(2)] = null);

(statearr_30500_30519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (10))){
var inst_30478 = (state_30486[(2)]);
var state_30486__$1 = state_30486;
var statearr_30501_30520 = state_30486__$1;
(statearr_30501_30520[(2)] = inst_30478);

(statearr_30501_30520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30487 === (8))){
var inst_30468 = (state_30486[(7)]);
var state_30486__$1 = state_30486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30486__$1,(11),out,inst_30468);
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
});})(c__23191__auto___30510,out))
;
return ((function (switch__23129__auto__,c__23191__auto___30510,out){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_30505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30505[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_30505[(1)] = (1));

return statearr_30505;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_30486){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30506){if((e30506 instanceof Object)){
var ex__23133__auto__ = e30506;
var statearr_30507_30521 = state_30486;
(statearr_30507_30521[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30522 = state_30486;
state_30486 = G__30522;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_30486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_30486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___30510,out))
})();
var state__23193__auto__ = (function (){var statearr_30508 = f__23192__auto__.call(null);
(statearr_30508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___30510);

return statearr_30508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___30510,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30530 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30530 = (function (map_LT_,f,ch,meta30531){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30531 = meta30531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30532,meta30531__$1){
var self__ = this;
var _30532__$1 = this;
return (new cljs.core.async.t30530(self__.map_LT_,self__.f,self__.ch,meta30531__$1));
});

cljs.core.async.t30530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30532){
var self__ = this;
var _30532__$1 = this;
return self__.meta30531;
});

cljs.core.async.t30530.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30530.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30533 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30533 = (function (map_LT_,f,ch,meta30531,_,fn1,meta30534){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30531 = meta30531;
this._ = _;
this.fn1 = fn1;
this.meta30534 = meta30534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30535,meta30534__$1){
var self__ = this;
var _30535__$1 = this;
return (new cljs.core.async.t30533(self__.map_LT_,self__.f,self__.ch,self__.meta30531,self__._,self__.fn1,meta30534__$1));
});})(___$1))
;

cljs.core.async.t30533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30535){
var self__ = this;
var _30535__$1 = this;
return self__.meta30534;
});})(___$1))
;

cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30523_SHARP_){
return f1.call(null,(((p1__30523_SHARP_ == null))?null:self__.f.call(null,p1__30523_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30533.cljs$lang$type = true;

cljs.core.async.t30533.cljs$lang$ctorStr = "cljs.core.async/t30533";

cljs.core.async.t30533.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t30533");
});})(___$1))
;

cljs.core.async.__GT_t30533 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30533(map_LT___$1,f__$1,ch__$1,meta30531__$1,___$2,fn1__$1,meta30534){
return (new cljs.core.async.t30533(map_LT___$1,f__$1,ch__$1,meta30531__$1,___$2,fn1__$1,meta30534));
});})(___$1))
;

}

return (new cljs.core.async.t30533(self__.map_LT_,self__.f,self__.ch,self__.meta30531,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18095__auto__ = ret;
if(cljs.core.truth_(and__18095__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18095__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30530.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30530.cljs$lang$type = true;

cljs.core.async.t30530.cljs$lang$ctorStr = "cljs.core.async/t30530";

cljs.core.async.t30530.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t30530");
});

cljs.core.async.__GT_t30530 = (function cljs$core$async$map_LT__$___GT_t30530(map_LT___$1,f__$1,ch__$1,meta30531){
return (new cljs.core.async.t30530(map_LT___$1,f__$1,ch__$1,meta30531));
});

}

return (new cljs.core.async.t30530(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30539 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30539 = (function (map_GT_,f,ch,meta30540){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30540 = meta30540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30541,meta30540__$1){
var self__ = this;
var _30541__$1 = this;
return (new cljs.core.async.t30539(self__.map_GT_,self__.f,self__.ch,meta30540__$1));
});

cljs.core.async.t30539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30541){
var self__ = this;
var _30541__$1 = this;
return self__.meta30540;
});

cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30539.cljs$lang$type = true;

cljs.core.async.t30539.cljs$lang$ctorStr = "cljs.core.async/t30539";

cljs.core.async.t30539.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t30539");
});

cljs.core.async.__GT_t30539 = (function cljs$core$async$map_GT__$___GT_t30539(map_GT___$1,f__$1,ch__$1,meta30540){
return (new cljs.core.async.t30539(map_GT___$1,f__$1,ch__$1,meta30540));
});

}

return (new cljs.core.async.t30539(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30545 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30545 = (function (filter_GT_,p,ch,meta30546){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30546 = meta30546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30547,meta30546__$1){
var self__ = this;
var _30547__$1 = this;
return (new cljs.core.async.t30545(self__.filter_GT_,self__.p,self__.ch,meta30546__$1));
});

cljs.core.async.t30545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30547){
var self__ = this;
var _30547__$1 = this;
return self__.meta30546;
});

cljs.core.async.t30545.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30545.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30545.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30545.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30545.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30545.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30545.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30545.cljs$lang$type = true;

cljs.core.async.t30545.cljs$lang$ctorStr = "cljs.core.async/t30545";

cljs.core.async.t30545.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"cljs.core.async/t30545");
});

cljs.core.async.__GT_t30545 = (function cljs$core$async$filter_GT__$___GT_t30545(filter_GT___$1,p__$1,ch__$1,meta30546){
return (new cljs.core.async.t30545(filter_GT___$1,p__$1,ch__$1,meta30546));
});

}

return (new cljs.core.async.t30545(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__30549 = arguments.length;
switch (G__30549) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23191__auto___30592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___30592,out){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___30592,out){
return (function (state_30570){
var state_val_30571 = (state_30570[(1)]);
if((state_val_30571 === (7))){
var inst_30566 = (state_30570[(2)]);
var state_30570__$1 = state_30570;
var statearr_30572_30593 = state_30570__$1;
(statearr_30572_30593[(2)] = inst_30566);

(statearr_30572_30593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (1))){
var state_30570__$1 = state_30570;
var statearr_30573_30594 = state_30570__$1;
(statearr_30573_30594[(2)] = null);

(statearr_30573_30594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (4))){
var inst_30552 = (state_30570[(7)]);
var inst_30552__$1 = (state_30570[(2)]);
var inst_30553 = (inst_30552__$1 == null);
var state_30570__$1 = (function (){var statearr_30574 = state_30570;
(statearr_30574[(7)] = inst_30552__$1);

return statearr_30574;
})();
if(cljs.core.truth_(inst_30553)){
var statearr_30575_30595 = state_30570__$1;
(statearr_30575_30595[(1)] = (5));

} else {
var statearr_30576_30596 = state_30570__$1;
(statearr_30576_30596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (6))){
var inst_30552 = (state_30570[(7)]);
var inst_30557 = p.call(null,inst_30552);
var state_30570__$1 = state_30570;
if(cljs.core.truth_(inst_30557)){
var statearr_30577_30597 = state_30570__$1;
(statearr_30577_30597[(1)] = (8));

} else {
var statearr_30578_30598 = state_30570__$1;
(statearr_30578_30598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (3))){
var inst_30568 = (state_30570[(2)]);
var state_30570__$1 = state_30570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30570__$1,inst_30568);
} else {
if((state_val_30571 === (2))){
var state_30570__$1 = state_30570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30570__$1,(4),ch);
} else {
if((state_val_30571 === (11))){
var inst_30560 = (state_30570[(2)]);
var state_30570__$1 = state_30570;
var statearr_30579_30599 = state_30570__$1;
(statearr_30579_30599[(2)] = inst_30560);

(statearr_30579_30599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (9))){
var state_30570__$1 = state_30570;
var statearr_30580_30600 = state_30570__$1;
(statearr_30580_30600[(2)] = null);

(statearr_30580_30600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (5))){
var inst_30555 = cljs.core.async.close_BANG_.call(null,out);
var state_30570__$1 = state_30570;
var statearr_30581_30601 = state_30570__$1;
(statearr_30581_30601[(2)] = inst_30555);

(statearr_30581_30601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (10))){
var inst_30563 = (state_30570[(2)]);
var state_30570__$1 = (function (){var statearr_30582 = state_30570;
(statearr_30582[(8)] = inst_30563);

return statearr_30582;
})();
var statearr_30583_30602 = state_30570__$1;
(statearr_30583_30602[(2)] = null);

(statearr_30583_30602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30571 === (8))){
var inst_30552 = (state_30570[(7)]);
var state_30570__$1 = state_30570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30570__$1,(11),out,inst_30552);
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
});})(c__23191__auto___30592,out))
;
return ((function (switch__23129__auto__,c__23191__auto___30592,out){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_30587 = [null,null,null,null,null,null,null,null,null];
(statearr_30587[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_30587[(1)] = (1));

return statearr_30587;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_30570){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30588){if((e30588 instanceof Object)){
var ex__23133__auto__ = e30588;
var statearr_30589_30603 = state_30570;
(statearr_30589_30603[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30604 = state_30570;
state_30570 = G__30604;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_30570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_30570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___30592,out))
})();
var state__23193__auto__ = (function (){var statearr_30590 = f__23192__auto__.call(null);
(statearr_30590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___30592);

return statearr_30590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___30592,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30606 = arguments.length;
switch (G__30606) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__){
return (function (state_30773){
var state_val_30774 = (state_30773[(1)]);
if((state_val_30774 === (7))){
var inst_30769 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30775_30816 = state_30773__$1;
(statearr_30775_30816[(2)] = inst_30769);

(statearr_30775_30816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (20))){
var inst_30739 = (state_30773[(7)]);
var inst_30750 = (state_30773[(2)]);
var inst_30751 = cljs.core.next.call(null,inst_30739);
var inst_30725 = inst_30751;
var inst_30726 = null;
var inst_30727 = (0);
var inst_30728 = (0);
var state_30773__$1 = (function (){var statearr_30776 = state_30773;
(statearr_30776[(8)] = inst_30726);

(statearr_30776[(9)] = inst_30728);

(statearr_30776[(10)] = inst_30725);

(statearr_30776[(11)] = inst_30727);

(statearr_30776[(12)] = inst_30750);

return statearr_30776;
})();
var statearr_30777_30817 = state_30773__$1;
(statearr_30777_30817[(2)] = null);

(statearr_30777_30817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (1))){
var state_30773__$1 = state_30773;
var statearr_30778_30818 = state_30773__$1;
(statearr_30778_30818[(2)] = null);

(statearr_30778_30818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (4))){
var inst_30714 = (state_30773[(13)]);
var inst_30714__$1 = (state_30773[(2)]);
var inst_30715 = (inst_30714__$1 == null);
var state_30773__$1 = (function (){var statearr_30779 = state_30773;
(statearr_30779[(13)] = inst_30714__$1);

return statearr_30779;
})();
if(cljs.core.truth_(inst_30715)){
var statearr_30780_30819 = state_30773__$1;
(statearr_30780_30819[(1)] = (5));

} else {
var statearr_30781_30820 = state_30773__$1;
(statearr_30781_30820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (15))){
var state_30773__$1 = state_30773;
var statearr_30785_30821 = state_30773__$1;
(statearr_30785_30821[(2)] = null);

(statearr_30785_30821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (21))){
var state_30773__$1 = state_30773;
var statearr_30786_30822 = state_30773__$1;
(statearr_30786_30822[(2)] = null);

(statearr_30786_30822[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (13))){
var inst_30726 = (state_30773[(8)]);
var inst_30728 = (state_30773[(9)]);
var inst_30725 = (state_30773[(10)]);
var inst_30727 = (state_30773[(11)]);
var inst_30735 = (state_30773[(2)]);
var inst_30736 = (inst_30728 + (1));
var tmp30782 = inst_30726;
var tmp30783 = inst_30725;
var tmp30784 = inst_30727;
var inst_30725__$1 = tmp30783;
var inst_30726__$1 = tmp30782;
var inst_30727__$1 = tmp30784;
var inst_30728__$1 = inst_30736;
var state_30773__$1 = (function (){var statearr_30787 = state_30773;
(statearr_30787[(8)] = inst_30726__$1);

(statearr_30787[(9)] = inst_30728__$1);

(statearr_30787[(14)] = inst_30735);

(statearr_30787[(10)] = inst_30725__$1);

(statearr_30787[(11)] = inst_30727__$1);

return statearr_30787;
})();
var statearr_30788_30823 = state_30773__$1;
(statearr_30788_30823[(2)] = null);

(statearr_30788_30823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (22))){
var state_30773__$1 = state_30773;
var statearr_30789_30824 = state_30773__$1;
(statearr_30789_30824[(2)] = null);

(statearr_30789_30824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (6))){
var inst_30714 = (state_30773[(13)]);
var inst_30723 = f.call(null,inst_30714);
var inst_30724 = cljs.core.seq.call(null,inst_30723);
var inst_30725 = inst_30724;
var inst_30726 = null;
var inst_30727 = (0);
var inst_30728 = (0);
var state_30773__$1 = (function (){var statearr_30790 = state_30773;
(statearr_30790[(8)] = inst_30726);

(statearr_30790[(9)] = inst_30728);

(statearr_30790[(10)] = inst_30725);

(statearr_30790[(11)] = inst_30727);

return statearr_30790;
})();
var statearr_30791_30825 = state_30773__$1;
(statearr_30791_30825[(2)] = null);

(statearr_30791_30825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (17))){
var inst_30739 = (state_30773[(7)]);
var inst_30743 = cljs.core.chunk_first.call(null,inst_30739);
var inst_30744 = cljs.core.chunk_rest.call(null,inst_30739);
var inst_30745 = cljs.core.count.call(null,inst_30743);
var inst_30725 = inst_30744;
var inst_30726 = inst_30743;
var inst_30727 = inst_30745;
var inst_30728 = (0);
var state_30773__$1 = (function (){var statearr_30792 = state_30773;
(statearr_30792[(8)] = inst_30726);

(statearr_30792[(9)] = inst_30728);

(statearr_30792[(10)] = inst_30725);

(statearr_30792[(11)] = inst_30727);

return statearr_30792;
})();
var statearr_30793_30826 = state_30773__$1;
(statearr_30793_30826[(2)] = null);

(statearr_30793_30826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (3))){
var inst_30771 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30773__$1,inst_30771);
} else {
if((state_val_30774 === (12))){
var inst_30759 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30794_30827 = state_30773__$1;
(statearr_30794_30827[(2)] = inst_30759);

(statearr_30794_30827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (2))){
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30773__$1,(4),in$);
} else {
if((state_val_30774 === (23))){
var inst_30767 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30795_30828 = state_30773__$1;
(statearr_30795_30828[(2)] = inst_30767);

(statearr_30795_30828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (19))){
var inst_30754 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30796_30829 = state_30773__$1;
(statearr_30796_30829[(2)] = inst_30754);

(statearr_30796_30829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (11))){
var inst_30725 = (state_30773[(10)]);
var inst_30739 = (state_30773[(7)]);
var inst_30739__$1 = cljs.core.seq.call(null,inst_30725);
var state_30773__$1 = (function (){var statearr_30797 = state_30773;
(statearr_30797[(7)] = inst_30739__$1);

return statearr_30797;
})();
if(inst_30739__$1){
var statearr_30798_30830 = state_30773__$1;
(statearr_30798_30830[(1)] = (14));

} else {
var statearr_30799_30831 = state_30773__$1;
(statearr_30799_30831[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (9))){
var inst_30761 = (state_30773[(2)]);
var inst_30762 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30773__$1 = (function (){var statearr_30800 = state_30773;
(statearr_30800[(15)] = inst_30761);

return statearr_30800;
})();
if(cljs.core.truth_(inst_30762)){
var statearr_30801_30832 = state_30773__$1;
(statearr_30801_30832[(1)] = (21));

} else {
var statearr_30802_30833 = state_30773__$1;
(statearr_30802_30833[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (5))){
var inst_30717 = cljs.core.async.close_BANG_.call(null,out);
var state_30773__$1 = state_30773;
var statearr_30803_30834 = state_30773__$1;
(statearr_30803_30834[(2)] = inst_30717);

(statearr_30803_30834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (14))){
var inst_30739 = (state_30773[(7)]);
var inst_30741 = cljs.core.chunked_seq_QMARK_.call(null,inst_30739);
var state_30773__$1 = state_30773;
if(inst_30741){
var statearr_30804_30835 = state_30773__$1;
(statearr_30804_30835[(1)] = (17));

} else {
var statearr_30805_30836 = state_30773__$1;
(statearr_30805_30836[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (16))){
var inst_30757 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30806_30837 = state_30773__$1;
(statearr_30806_30837[(2)] = inst_30757);

(statearr_30806_30837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (10))){
var inst_30726 = (state_30773[(8)]);
var inst_30728 = (state_30773[(9)]);
var inst_30733 = cljs.core._nth.call(null,inst_30726,inst_30728);
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30773__$1,(13),out,inst_30733);
} else {
if((state_val_30774 === (18))){
var inst_30739 = (state_30773[(7)]);
var inst_30748 = cljs.core.first.call(null,inst_30739);
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30773__$1,(20),out,inst_30748);
} else {
if((state_val_30774 === (8))){
var inst_30728 = (state_30773[(9)]);
var inst_30727 = (state_30773[(11)]);
var inst_30730 = (inst_30728 < inst_30727);
var inst_30731 = inst_30730;
var state_30773__$1 = state_30773;
if(cljs.core.truth_(inst_30731)){
var statearr_30807_30838 = state_30773__$1;
(statearr_30807_30838[(1)] = (10));

} else {
var statearr_30808_30839 = state_30773__$1;
(statearr_30808_30839[(1)] = (11));

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
});})(c__23191__auto__))
;
return ((function (switch__23129__auto__,c__23191__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23130__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23130__auto____0 = (function (){
var statearr_30812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30812[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23130__auto__);

(statearr_30812[(1)] = (1));

return statearr_30812;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23130__auto____1 = (function (state_30773){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30813){if((e30813 instanceof Object)){
var ex__23133__auto__ = e30813;
var statearr_30814_30840 = state_30773;
(statearr_30814_30840[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30841 = state_30773;
state_30773 = G__30841;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23130__auto__ = function(state_30773){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23130__auto____1.call(this,state_30773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23130__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23130__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__))
})();
var state__23193__auto__ = (function (){var statearr_30815 = f__23192__auto__.call(null);
(statearr_30815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_30815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__))
);

return c__23191__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30843 = arguments.length;
switch (G__30843) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__30846 = arguments.length;
switch (G__30846) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__30849 = arguments.length;
switch (G__30849) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23191__auto___30899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___30899,out){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___30899,out){
return (function (state_30873){
var state_val_30874 = (state_30873[(1)]);
if((state_val_30874 === (7))){
var inst_30868 = (state_30873[(2)]);
var state_30873__$1 = state_30873;
var statearr_30875_30900 = state_30873__$1;
(statearr_30875_30900[(2)] = inst_30868);

(statearr_30875_30900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (1))){
var inst_30850 = null;
var state_30873__$1 = (function (){var statearr_30876 = state_30873;
(statearr_30876[(7)] = inst_30850);

return statearr_30876;
})();
var statearr_30877_30901 = state_30873__$1;
(statearr_30877_30901[(2)] = null);

(statearr_30877_30901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (4))){
var inst_30853 = (state_30873[(8)]);
var inst_30853__$1 = (state_30873[(2)]);
var inst_30854 = (inst_30853__$1 == null);
var inst_30855 = cljs.core.not.call(null,inst_30854);
var state_30873__$1 = (function (){var statearr_30878 = state_30873;
(statearr_30878[(8)] = inst_30853__$1);

return statearr_30878;
})();
if(inst_30855){
var statearr_30879_30902 = state_30873__$1;
(statearr_30879_30902[(1)] = (5));

} else {
var statearr_30880_30903 = state_30873__$1;
(statearr_30880_30903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (6))){
var state_30873__$1 = state_30873;
var statearr_30881_30904 = state_30873__$1;
(statearr_30881_30904[(2)] = null);

(statearr_30881_30904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (3))){
var inst_30870 = (state_30873[(2)]);
var inst_30871 = cljs.core.async.close_BANG_.call(null,out);
var state_30873__$1 = (function (){var statearr_30882 = state_30873;
(statearr_30882[(9)] = inst_30870);

return statearr_30882;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30873__$1,inst_30871);
} else {
if((state_val_30874 === (2))){
var state_30873__$1 = state_30873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30873__$1,(4),ch);
} else {
if((state_val_30874 === (11))){
var inst_30853 = (state_30873[(8)]);
var inst_30862 = (state_30873[(2)]);
var inst_30850 = inst_30853;
var state_30873__$1 = (function (){var statearr_30883 = state_30873;
(statearr_30883[(7)] = inst_30850);

(statearr_30883[(10)] = inst_30862);

return statearr_30883;
})();
var statearr_30884_30905 = state_30873__$1;
(statearr_30884_30905[(2)] = null);

(statearr_30884_30905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (9))){
var inst_30853 = (state_30873[(8)]);
var state_30873__$1 = state_30873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30873__$1,(11),out,inst_30853);
} else {
if((state_val_30874 === (5))){
var inst_30850 = (state_30873[(7)]);
var inst_30853 = (state_30873[(8)]);
var inst_30857 = cljs.core._EQ_.call(null,inst_30853,inst_30850);
var state_30873__$1 = state_30873;
if(inst_30857){
var statearr_30886_30906 = state_30873__$1;
(statearr_30886_30906[(1)] = (8));

} else {
var statearr_30887_30907 = state_30873__$1;
(statearr_30887_30907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (10))){
var inst_30865 = (state_30873[(2)]);
var state_30873__$1 = state_30873;
var statearr_30888_30908 = state_30873__$1;
(statearr_30888_30908[(2)] = inst_30865);

(statearr_30888_30908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (8))){
var inst_30850 = (state_30873[(7)]);
var tmp30885 = inst_30850;
var inst_30850__$1 = tmp30885;
var state_30873__$1 = (function (){var statearr_30889 = state_30873;
(statearr_30889[(7)] = inst_30850__$1);

return statearr_30889;
})();
var statearr_30890_30909 = state_30873__$1;
(statearr_30890_30909[(2)] = null);

(statearr_30890_30909[(1)] = (2));


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
});})(c__23191__auto___30899,out))
;
return ((function (switch__23129__auto__,c__23191__auto___30899,out){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_30894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30894[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_30894[(1)] = (1));

return statearr_30894;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_30873){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30895){if((e30895 instanceof Object)){
var ex__23133__auto__ = e30895;
var statearr_30896_30910 = state_30873;
(statearr_30896_30910[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30911 = state_30873;
state_30873 = G__30911;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_30873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_30873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___30899,out))
})();
var state__23193__auto__ = (function (){var statearr_30897 = f__23192__auto__.call(null);
(statearr_30897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___30899);

return statearr_30897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___30899,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30913 = arguments.length;
switch (G__30913) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23191__auto___30982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___30982,out){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___30982,out){
return (function (state_30951){
var state_val_30952 = (state_30951[(1)]);
if((state_val_30952 === (7))){
var inst_30947 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_30953_30983 = state_30951__$1;
(statearr_30953_30983[(2)] = inst_30947);

(statearr_30953_30983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (1))){
var inst_30914 = (new Array(n));
var inst_30915 = inst_30914;
var inst_30916 = (0);
var state_30951__$1 = (function (){var statearr_30954 = state_30951;
(statearr_30954[(7)] = inst_30915);

(statearr_30954[(8)] = inst_30916);

return statearr_30954;
})();
var statearr_30955_30984 = state_30951__$1;
(statearr_30955_30984[(2)] = null);

(statearr_30955_30984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (4))){
var inst_30919 = (state_30951[(9)]);
var inst_30919__$1 = (state_30951[(2)]);
var inst_30920 = (inst_30919__$1 == null);
var inst_30921 = cljs.core.not.call(null,inst_30920);
var state_30951__$1 = (function (){var statearr_30956 = state_30951;
(statearr_30956[(9)] = inst_30919__$1);

return statearr_30956;
})();
if(inst_30921){
var statearr_30957_30985 = state_30951__$1;
(statearr_30957_30985[(1)] = (5));

} else {
var statearr_30958_30986 = state_30951__$1;
(statearr_30958_30986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (15))){
var inst_30941 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_30959_30987 = state_30951__$1;
(statearr_30959_30987[(2)] = inst_30941);

(statearr_30959_30987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (13))){
var state_30951__$1 = state_30951;
var statearr_30960_30988 = state_30951__$1;
(statearr_30960_30988[(2)] = null);

(statearr_30960_30988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (6))){
var inst_30916 = (state_30951[(8)]);
var inst_30937 = (inst_30916 > (0));
var state_30951__$1 = state_30951;
if(cljs.core.truth_(inst_30937)){
var statearr_30961_30989 = state_30951__$1;
(statearr_30961_30989[(1)] = (12));

} else {
var statearr_30962_30990 = state_30951__$1;
(statearr_30962_30990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (3))){
var inst_30949 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30951__$1,inst_30949);
} else {
if((state_val_30952 === (12))){
var inst_30915 = (state_30951[(7)]);
var inst_30939 = cljs.core.vec.call(null,inst_30915);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30951__$1,(15),out,inst_30939);
} else {
if((state_val_30952 === (2))){
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30951__$1,(4),ch);
} else {
if((state_val_30952 === (11))){
var inst_30931 = (state_30951[(2)]);
var inst_30932 = (new Array(n));
var inst_30915 = inst_30932;
var inst_30916 = (0);
var state_30951__$1 = (function (){var statearr_30963 = state_30951;
(statearr_30963[(7)] = inst_30915);

(statearr_30963[(10)] = inst_30931);

(statearr_30963[(8)] = inst_30916);

return statearr_30963;
})();
var statearr_30964_30991 = state_30951__$1;
(statearr_30964_30991[(2)] = null);

(statearr_30964_30991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (9))){
var inst_30915 = (state_30951[(7)]);
var inst_30929 = cljs.core.vec.call(null,inst_30915);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30951__$1,(11),out,inst_30929);
} else {
if((state_val_30952 === (5))){
var inst_30915 = (state_30951[(7)]);
var inst_30924 = (state_30951[(11)]);
var inst_30919 = (state_30951[(9)]);
var inst_30916 = (state_30951[(8)]);
var inst_30923 = (inst_30915[inst_30916] = inst_30919);
var inst_30924__$1 = (inst_30916 + (1));
var inst_30925 = (inst_30924__$1 < n);
var state_30951__$1 = (function (){var statearr_30965 = state_30951;
(statearr_30965[(11)] = inst_30924__$1);

(statearr_30965[(12)] = inst_30923);

return statearr_30965;
})();
if(cljs.core.truth_(inst_30925)){
var statearr_30966_30992 = state_30951__$1;
(statearr_30966_30992[(1)] = (8));

} else {
var statearr_30967_30993 = state_30951__$1;
(statearr_30967_30993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (14))){
var inst_30944 = (state_30951[(2)]);
var inst_30945 = cljs.core.async.close_BANG_.call(null,out);
var state_30951__$1 = (function (){var statearr_30969 = state_30951;
(statearr_30969[(13)] = inst_30944);

return statearr_30969;
})();
var statearr_30970_30994 = state_30951__$1;
(statearr_30970_30994[(2)] = inst_30945);

(statearr_30970_30994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (10))){
var inst_30935 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_30971_30995 = state_30951__$1;
(statearr_30971_30995[(2)] = inst_30935);

(statearr_30971_30995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (8))){
var inst_30915 = (state_30951[(7)]);
var inst_30924 = (state_30951[(11)]);
var tmp30968 = inst_30915;
var inst_30915__$1 = tmp30968;
var inst_30916 = inst_30924;
var state_30951__$1 = (function (){var statearr_30972 = state_30951;
(statearr_30972[(7)] = inst_30915__$1);

(statearr_30972[(8)] = inst_30916);

return statearr_30972;
})();
var statearr_30973_30996 = state_30951__$1;
(statearr_30973_30996[(2)] = null);

(statearr_30973_30996[(1)] = (2));


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
});})(c__23191__auto___30982,out))
;
return ((function (switch__23129__auto__,c__23191__auto___30982,out){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_30977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30977[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_30977[(1)] = (1));

return statearr_30977;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_30951){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_30951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e30978){if((e30978 instanceof Object)){
var ex__23133__auto__ = e30978;
var statearr_30979_30997 = state_30951;
(statearr_30979_30997[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30998 = state_30951;
state_30951 = G__30998;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_30951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_30951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___30982,out))
})();
var state__23193__auto__ = (function (){var statearr_30980 = f__23192__auto__.call(null);
(statearr_30980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___30982);

return statearr_30980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___30982,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31000 = arguments.length;
switch (G__31000) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23191__auto___31073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___31073,out){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___31073,out){
return (function (state_31042){
var state_val_31043 = (state_31042[(1)]);
if((state_val_31043 === (7))){
var inst_31038 = (state_31042[(2)]);
var state_31042__$1 = state_31042;
var statearr_31044_31074 = state_31042__$1;
(statearr_31044_31074[(2)] = inst_31038);

(statearr_31044_31074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (1))){
var inst_31001 = [];
var inst_31002 = inst_31001;
var inst_31003 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31042__$1 = (function (){var statearr_31045 = state_31042;
(statearr_31045[(7)] = inst_31002);

(statearr_31045[(8)] = inst_31003);

return statearr_31045;
})();
var statearr_31046_31075 = state_31042__$1;
(statearr_31046_31075[(2)] = null);

(statearr_31046_31075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (4))){
var inst_31006 = (state_31042[(9)]);
var inst_31006__$1 = (state_31042[(2)]);
var inst_31007 = (inst_31006__$1 == null);
var inst_31008 = cljs.core.not.call(null,inst_31007);
var state_31042__$1 = (function (){var statearr_31047 = state_31042;
(statearr_31047[(9)] = inst_31006__$1);

return statearr_31047;
})();
if(inst_31008){
var statearr_31048_31076 = state_31042__$1;
(statearr_31048_31076[(1)] = (5));

} else {
var statearr_31049_31077 = state_31042__$1;
(statearr_31049_31077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (15))){
var inst_31032 = (state_31042[(2)]);
var state_31042__$1 = state_31042;
var statearr_31050_31078 = state_31042__$1;
(statearr_31050_31078[(2)] = inst_31032);

(statearr_31050_31078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (13))){
var state_31042__$1 = state_31042;
var statearr_31051_31079 = state_31042__$1;
(statearr_31051_31079[(2)] = null);

(statearr_31051_31079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (6))){
var inst_31002 = (state_31042[(7)]);
var inst_31027 = inst_31002.length;
var inst_31028 = (inst_31027 > (0));
var state_31042__$1 = state_31042;
if(cljs.core.truth_(inst_31028)){
var statearr_31052_31080 = state_31042__$1;
(statearr_31052_31080[(1)] = (12));

} else {
var statearr_31053_31081 = state_31042__$1;
(statearr_31053_31081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (3))){
var inst_31040 = (state_31042[(2)]);
var state_31042__$1 = state_31042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31042__$1,inst_31040);
} else {
if((state_val_31043 === (12))){
var inst_31002 = (state_31042[(7)]);
var inst_31030 = cljs.core.vec.call(null,inst_31002);
var state_31042__$1 = state_31042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31042__$1,(15),out,inst_31030);
} else {
if((state_val_31043 === (2))){
var state_31042__$1 = state_31042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31042__$1,(4),ch);
} else {
if((state_val_31043 === (11))){
var inst_31010 = (state_31042[(10)]);
var inst_31006 = (state_31042[(9)]);
var inst_31020 = (state_31042[(2)]);
var inst_31021 = [];
var inst_31022 = inst_31021.push(inst_31006);
var inst_31002 = inst_31021;
var inst_31003 = inst_31010;
var state_31042__$1 = (function (){var statearr_31054 = state_31042;
(statearr_31054[(7)] = inst_31002);

(statearr_31054[(11)] = inst_31022);

(statearr_31054[(12)] = inst_31020);

(statearr_31054[(8)] = inst_31003);

return statearr_31054;
})();
var statearr_31055_31082 = state_31042__$1;
(statearr_31055_31082[(2)] = null);

(statearr_31055_31082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (9))){
var inst_31002 = (state_31042[(7)]);
var inst_31018 = cljs.core.vec.call(null,inst_31002);
var state_31042__$1 = state_31042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31042__$1,(11),out,inst_31018);
} else {
if((state_val_31043 === (5))){
var inst_31010 = (state_31042[(10)]);
var inst_31006 = (state_31042[(9)]);
var inst_31003 = (state_31042[(8)]);
var inst_31010__$1 = f.call(null,inst_31006);
var inst_31011 = cljs.core._EQ_.call(null,inst_31010__$1,inst_31003);
var inst_31012 = cljs.core.keyword_identical_QMARK_.call(null,inst_31003,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31013 = (inst_31011) || (inst_31012);
var state_31042__$1 = (function (){var statearr_31056 = state_31042;
(statearr_31056[(10)] = inst_31010__$1);

return statearr_31056;
})();
if(cljs.core.truth_(inst_31013)){
var statearr_31057_31083 = state_31042__$1;
(statearr_31057_31083[(1)] = (8));

} else {
var statearr_31058_31084 = state_31042__$1;
(statearr_31058_31084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (14))){
var inst_31035 = (state_31042[(2)]);
var inst_31036 = cljs.core.async.close_BANG_.call(null,out);
var state_31042__$1 = (function (){var statearr_31060 = state_31042;
(statearr_31060[(13)] = inst_31035);

return statearr_31060;
})();
var statearr_31061_31085 = state_31042__$1;
(statearr_31061_31085[(2)] = inst_31036);

(statearr_31061_31085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (10))){
var inst_31025 = (state_31042[(2)]);
var state_31042__$1 = state_31042;
var statearr_31062_31086 = state_31042__$1;
(statearr_31062_31086[(2)] = inst_31025);

(statearr_31062_31086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31043 === (8))){
var inst_31010 = (state_31042[(10)]);
var inst_31002 = (state_31042[(7)]);
var inst_31006 = (state_31042[(9)]);
var inst_31015 = inst_31002.push(inst_31006);
var tmp31059 = inst_31002;
var inst_31002__$1 = tmp31059;
var inst_31003 = inst_31010;
var state_31042__$1 = (function (){var statearr_31063 = state_31042;
(statearr_31063[(7)] = inst_31002__$1);

(statearr_31063[(14)] = inst_31015);

(statearr_31063[(8)] = inst_31003);

return statearr_31063;
})();
var statearr_31064_31087 = state_31042__$1;
(statearr_31064_31087[(2)] = null);

(statearr_31064_31087[(1)] = (2));


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
});})(c__23191__auto___31073,out))
;
return ((function (switch__23129__auto__,c__23191__auto___31073,out){
return (function() {
var cljs$core$async$state_machine__23130__auto__ = null;
var cljs$core$async$state_machine__23130__auto____0 = (function (){
var statearr_31068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31068[(0)] = cljs$core$async$state_machine__23130__auto__);

(statearr_31068[(1)] = (1));

return statearr_31068;
});
var cljs$core$async$state_machine__23130__auto____1 = (function (state_31042){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_31042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e31069){if((e31069 instanceof Object)){
var ex__23133__auto__ = e31069;
var statearr_31070_31088 = state_31042;
(statearr_31070_31088[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31089 = state_31042;
state_31042 = G__31089;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
cljs$core$async$state_machine__23130__auto__ = function(state_31042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23130__auto____1.call(this,state_31042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23130__auto____0;
cljs$core$async$state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23130__auto____1;
return cljs$core$async$state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___31073,out))
})();
var state__23193__auto__ = (function (){var statearr_31071 = f__23192__auto__.call(null);
(statearr_31071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___31073);

return statearr_31071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___31073,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map