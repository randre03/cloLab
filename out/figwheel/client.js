// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26790__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26791__i = 0, G__26791__a = new Array(arguments.length -  0);
while (G__26791__i < G__26791__a.length) {G__26791__a[G__26791__i] = arguments[G__26791__i + 0]; ++G__26791__i;}
  args = new cljs.core.IndexedSeq(G__26791__a,0);
} 
return G__26790__delegate.call(this,args);};
G__26790.cljs$lang$maxFixedArity = 0;
G__26790.cljs$lang$applyTo = (function (arglist__26792){
var args = cljs.core.seq(arglist__26792);
return G__26790__delegate(args);
});
G__26790.cljs$core$IFn$_invoke$arity$variadic = G__26790__delegate;
return G__26790;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26793){
var map__26795 = p__26793;
var map__26795__$1 = ((cljs.core.seq_QMARK_.call(null,map__26795))?cljs.core.apply.call(null,cljs.core.hash_map,map__26795):map__26795);
var message = cljs.core.get.call(null,map__26795__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26795__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18107__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18095__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18095__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18095__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23191__auto___26924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___26924,ch){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___26924,ch){
return (function (state_26898){
var state_val_26899 = (state_26898[(1)]);
if((state_val_26899 === (7))){
var inst_26894 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26900_26925 = state_26898__$1;
(statearr_26900_26925[(2)] = inst_26894);

(statearr_26900_26925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (1))){
var state_26898__$1 = state_26898;
var statearr_26901_26926 = state_26898__$1;
(statearr_26901_26926[(2)] = null);

(statearr_26901_26926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (4))){
var inst_26862 = (state_26898[(7)]);
var inst_26862__$1 = (state_26898[(2)]);
var state_26898__$1 = (function (){var statearr_26902 = state_26898;
(statearr_26902[(7)] = inst_26862__$1);

return statearr_26902;
})();
if(cljs.core.truth_(inst_26862__$1)){
var statearr_26903_26927 = state_26898__$1;
(statearr_26903_26927[(1)] = (5));

} else {
var statearr_26904_26928 = state_26898__$1;
(statearr_26904_26928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (13))){
var state_26898__$1 = state_26898;
var statearr_26905_26929 = state_26898__$1;
(statearr_26905_26929[(2)] = null);

(statearr_26905_26929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (6))){
var state_26898__$1 = state_26898;
var statearr_26906_26930 = state_26898__$1;
(statearr_26906_26930[(2)] = null);

(statearr_26906_26930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (3))){
var inst_26896 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26898__$1,inst_26896);
} else {
if((state_val_26899 === (12))){
var inst_26869 = (state_26898[(8)]);
var inst_26882 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26869);
var inst_26883 = cljs.core.first.call(null,inst_26882);
var inst_26884 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26883);
var inst_26885 = console.warn("Figwheel: Not loading code with warnings - ",inst_26884);
var state_26898__$1 = state_26898;
var statearr_26907_26931 = state_26898__$1;
(statearr_26907_26931[(2)] = inst_26885);

(statearr_26907_26931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (2))){
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26898__$1,(4),ch);
} else {
if((state_val_26899 === (11))){
var inst_26878 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26908_26932 = state_26898__$1;
(statearr_26908_26932[(2)] = inst_26878);

(statearr_26908_26932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (9))){
var inst_26868 = (state_26898[(9)]);
var inst_26880 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26868,opts);
var state_26898__$1 = state_26898;
if(cljs.core.truth_(inst_26880)){
var statearr_26909_26933 = state_26898__$1;
(statearr_26909_26933[(1)] = (12));

} else {
var statearr_26910_26934 = state_26898__$1;
(statearr_26910_26934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (5))){
var inst_26868 = (state_26898[(9)]);
var inst_26862 = (state_26898[(7)]);
var inst_26864 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26865 = (new cljs.core.PersistentArrayMap(null,2,inst_26864,null));
var inst_26866 = (new cljs.core.PersistentHashSet(null,inst_26865,null));
var inst_26867 = figwheel.client.focus_msgs.call(null,inst_26866,inst_26862);
var inst_26868__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26867);
var inst_26869 = cljs.core.first.call(null,inst_26867);
var inst_26870 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26868__$1,opts);
var state_26898__$1 = (function (){var statearr_26911 = state_26898;
(statearr_26911[(9)] = inst_26868__$1);

(statearr_26911[(8)] = inst_26869);

return statearr_26911;
})();
if(cljs.core.truth_(inst_26870)){
var statearr_26912_26935 = state_26898__$1;
(statearr_26912_26935[(1)] = (8));

} else {
var statearr_26913_26936 = state_26898__$1;
(statearr_26913_26936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (14))){
var inst_26888 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26914_26937 = state_26898__$1;
(statearr_26914_26937[(2)] = inst_26888);

(statearr_26914_26937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (10))){
var inst_26890 = (state_26898[(2)]);
var state_26898__$1 = (function (){var statearr_26915 = state_26898;
(statearr_26915[(10)] = inst_26890);

return statearr_26915;
})();
var statearr_26916_26938 = state_26898__$1;
(statearr_26916_26938[(2)] = null);

(statearr_26916_26938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (8))){
var inst_26869 = (state_26898[(8)]);
var inst_26872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26873 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26869);
var inst_26874 = cljs.core.async.timeout.call(null,(1000));
var inst_26875 = [inst_26873,inst_26874];
var inst_26876 = (new cljs.core.PersistentVector(null,2,(5),inst_26872,inst_26875,null));
var state_26898__$1 = state_26898;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26898__$1,(11),inst_26876);
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
});})(c__23191__auto___26924,ch))
;
return ((function (switch__23129__auto__,c__23191__auto___26924,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23130__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23130__auto____0 = (function (){
var statearr_26920 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26920[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23130__auto__);

(statearr_26920[(1)] = (1));

return statearr_26920;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23130__auto____1 = (function (state_26898){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_26898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e26921){if((e26921 instanceof Object)){
var ex__23133__auto__ = e26921;
var statearr_26922_26939 = state_26898;
(statearr_26922_26939[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26940 = state_26898;
state_26898 = G__26940;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23130__auto__ = function(state_26898){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23130__auto____1.call(this,state_26898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23130__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23130__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___26924,ch))
})();
var state__23193__auto__ = (function (){var statearr_26923 = f__23192__auto__.call(null);
(statearr_26923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___26924);

return statearr_26923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___26924,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26941_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26941_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26948 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26948){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26946 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26947 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26946,_STAR_print_newline_STAR_26947,base_path_26948){
return (function() { 
var G__26949__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26950__i = 0, G__26950__a = new Array(arguments.length -  0);
while (G__26950__i < G__26950__a.length) {G__26950__a[G__26950__i] = arguments[G__26950__i + 0]; ++G__26950__i;}
  args = new cljs.core.IndexedSeq(G__26950__a,0);
} 
return G__26949__delegate.call(this,args);};
G__26949.cljs$lang$maxFixedArity = 0;
G__26949.cljs$lang$applyTo = (function (arglist__26951){
var args = cljs.core.seq(arglist__26951);
return G__26949__delegate(args);
});
G__26949.cljs$core$IFn$_invoke$arity$variadic = G__26949__delegate;
return G__26949;
})()
;})(_STAR_print_fn_STAR_26946,_STAR_print_newline_STAR_26947,base_path_26948))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26947;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26946;
}}catch (e26945){if((e26945 instanceof Error)){
var e = e26945;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26948], null));
} else {
var e = e26945;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26948))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26952){
var map__26957 = p__26952;
var map__26957__$1 = ((cljs.core.seq_QMARK_.call(null,map__26957))?cljs.core.apply.call(null,cljs.core.hash_map,map__26957):map__26957);
var opts = map__26957__$1;
var build_id = cljs.core.get.call(null,map__26957__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26957,map__26957__$1,opts,build_id){
return (function (p__26958){
var vec__26959 = p__26958;
var map__26960 = cljs.core.nth.call(null,vec__26959,(0),null);
var map__26960__$1 = ((cljs.core.seq_QMARK_.call(null,map__26960))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var msg = map__26960__$1;
var msg_name = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26959,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26959,map__26960,map__26960__$1,msg,msg_name,_,map__26957,map__26957__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26959,map__26960,map__26960__$1,msg,msg_name,_,map__26957,map__26957__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26957,map__26957__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26964){
var vec__26965 = p__26964;
var map__26966 = cljs.core.nth.call(null,vec__26965,(0),null);
var map__26966__$1 = ((cljs.core.seq_QMARK_.call(null,map__26966))?cljs.core.apply.call(null,cljs.core.hash_map,map__26966):map__26966);
var msg = map__26966__$1;
var msg_name = cljs.core.get.call(null,map__26966__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26965,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26967){
var map__26975 = p__26967;
var map__26975__$1 = ((cljs.core.seq_QMARK_.call(null,map__26975))?cljs.core.apply.call(null,cljs.core.hash_map,map__26975):map__26975);
var on_compile_warning = cljs.core.get.call(null,map__26975__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26975__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26975,map__26975__$1,on_compile_warning,on_compile_fail){
return (function (p__26976){
var vec__26977 = p__26976;
var map__26978 = cljs.core.nth.call(null,vec__26977,(0),null);
var map__26978__$1 = ((cljs.core.seq_QMARK_.call(null,map__26978))?cljs.core.apply.call(null,cljs.core.hash_map,map__26978):map__26978);
var msg = map__26978__$1;
var msg_name = cljs.core.get.call(null,map__26978__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26977,(1));
var pred__26979 = cljs.core._EQ_;
var expr__26980 = msg_name;
if(cljs.core.truth_(pred__26979.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26980))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26979.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26980))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26975,map__26975__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__,msg_hist,msg_names,msg){
return (function (state_27181){
var state_val_27182 = (state_27181[(1)]);
if((state_val_27182 === (7))){
var inst_27115 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27183_27224 = state_27181__$1;
(statearr_27183_27224[(2)] = inst_27115);

(statearr_27183_27224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (20))){
var inst_27143 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27143)){
var statearr_27184_27225 = state_27181__$1;
(statearr_27184_27225[(1)] = (22));

} else {
var statearr_27185_27226 = state_27181__$1;
(statearr_27185_27226[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (27))){
var inst_27155 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27156 = figwheel.client.heads_up.display_warning.call(null,inst_27155);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(30),inst_27156);
} else {
if((state_val_27182 === (1))){
var inst_27103 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27103)){
var statearr_27186_27227 = state_27181__$1;
(statearr_27186_27227[(1)] = (2));

} else {
var statearr_27187_27228 = state_27181__$1;
(statearr_27187_27228[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (24))){
var inst_27171 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27188_27229 = state_27181__$1;
(statearr_27188_27229[(2)] = inst_27171);

(statearr_27188_27229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (4))){
var inst_27179 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27181__$1,inst_27179);
} else {
if((state_val_27182 === (15))){
var inst_27131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27132 = figwheel.client.format_messages.call(null,inst_27131);
var inst_27133 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27134 = figwheel.client.heads_up.display_error.call(null,inst_27132,inst_27133);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(18),inst_27134);
} else {
if((state_val_27182 === (21))){
var inst_27173 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27189_27230 = state_27181__$1;
(statearr_27189_27230[(2)] = inst_27173);

(statearr_27189_27230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (31))){
var inst_27162 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(34),inst_27162);
} else {
if((state_val_27182 === (32))){
var state_27181__$1 = state_27181;
var statearr_27190_27231 = state_27181__$1;
(statearr_27190_27231[(2)] = null);

(statearr_27190_27231[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (33))){
var inst_27167 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27191_27232 = state_27181__$1;
(statearr_27191_27232[(2)] = inst_27167);

(statearr_27191_27232[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (13))){
var inst_27121 = (state_27181[(2)]);
var inst_27122 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27123 = figwheel.client.format_messages.call(null,inst_27122);
var inst_27124 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27125 = figwheel.client.heads_up.display_error.call(null,inst_27123,inst_27124);
var state_27181__$1 = (function (){var statearr_27192 = state_27181;
(statearr_27192[(7)] = inst_27121);

return statearr_27192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(14),inst_27125);
} else {
if((state_val_27182 === (22))){
var inst_27145 = figwheel.client.heads_up.clear.call(null);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(25),inst_27145);
} else {
if((state_val_27182 === (29))){
var inst_27169 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27193_27233 = state_27181__$1;
(statearr_27193_27233[(2)] = inst_27169);

(statearr_27193_27233[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (6))){
var inst_27111 = figwheel.client.heads_up.clear.call(null);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(9),inst_27111);
} else {
if((state_val_27182 === (28))){
var inst_27160 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27160)){
var statearr_27194_27234 = state_27181__$1;
(statearr_27194_27234[(1)] = (31));

} else {
var statearr_27195_27235 = state_27181__$1;
(statearr_27195_27235[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (25))){
var inst_27147 = (state_27181[(2)]);
var inst_27148 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27149 = figwheel.client.heads_up.display_warning.call(null,inst_27148);
var state_27181__$1 = (function (){var statearr_27196 = state_27181;
(statearr_27196[(8)] = inst_27147);

return statearr_27196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(26),inst_27149);
} else {
if((state_val_27182 === (34))){
var inst_27164 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27197_27236 = state_27181__$1;
(statearr_27197_27236[(2)] = inst_27164);

(statearr_27197_27236[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (17))){
var inst_27175 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27198_27237 = state_27181__$1;
(statearr_27198_27237[(2)] = inst_27175);

(statearr_27198_27237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (3))){
var inst_27117 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27117)){
var statearr_27199_27238 = state_27181__$1;
(statearr_27199_27238[(1)] = (10));

} else {
var statearr_27200_27239 = state_27181__$1;
(statearr_27200_27239[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (12))){
var inst_27177 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27201_27240 = state_27181__$1;
(statearr_27201_27240[(2)] = inst_27177);

(statearr_27201_27240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (2))){
var inst_27105 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27105)){
var statearr_27202_27241 = state_27181__$1;
(statearr_27202_27241[(1)] = (5));

} else {
var statearr_27203_27242 = state_27181__$1;
(statearr_27203_27242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (23))){
var inst_27153 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27153)){
var statearr_27204_27243 = state_27181__$1;
(statearr_27204_27243[(1)] = (27));

} else {
var statearr_27205_27244 = state_27181__$1;
(statearr_27205_27244[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (19))){
var inst_27140 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27141 = figwheel.client.heads_up.append_message.call(null,inst_27140);
var state_27181__$1 = state_27181;
var statearr_27206_27245 = state_27181__$1;
(statearr_27206_27245[(2)] = inst_27141);

(statearr_27206_27245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (11))){
var inst_27129 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27129)){
var statearr_27207_27246 = state_27181__$1;
(statearr_27207_27246[(1)] = (15));

} else {
var statearr_27208_27247 = state_27181__$1;
(statearr_27208_27247[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (9))){
var inst_27113 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27209_27248 = state_27181__$1;
(statearr_27209_27248[(2)] = inst_27113);

(statearr_27209_27248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (5))){
var inst_27107 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(8),inst_27107);
} else {
if((state_val_27182 === (14))){
var inst_27127 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27210_27249 = state_27181__$1;
(statearr_27210_27249[(2)] = inst_27127);

(statearr_27210_27249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (26))){
var inst_27151 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27211_27250 = state_27181__$1;
(statearr_27211_27250[(2)] = inst_27151);

(statearr_27211_27250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (16))){
var inst_27138 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27138)){
var statearr_27212_27251 = state_27181__$1;
(statearr_27212_27251[(1)] = (19));

} else {
var statearr_27213_27252 = state_27181__$1;
(statearr_27213_27252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (30))){
var inst_27158 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27214_27253 = state_27181__$1;
(statearr_27214_27253[(2)] = inst_27158);

(statearr_27214_27253[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (10))){
var inst_27119 = figwheel.client.heads_up.clear.call(null);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27181__$1,(13),inst_27119);
} else {
if((state_val_27182 === (18))){
var inst_27136 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27215_27254 = state_27181__$1;
(statearr_27215_27254[(2)] = inst_27136);

(statearr_27215_27254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (8))){
var inst_27109 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27216_27255 = state_27181__$1;
(statearr_27216_27255[(2)] = inst_27109);

(statearr_27216_27255[(1)] = (7));


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
});})(c__23191__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23129__auto__,c__23191__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto____0 = (function (){
var statearr_27220 = [null,null,null,null,null,null,null,null,null];
(statearr_27220[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto__);

(statearr_27220[(1)] = (1));

return statearr_27220;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto____1 = (function (state_27181){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_27181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e27221){if((e27221 instanceof Object)){
var ex__23133__auto__ = e27221;
var statearr_27222_27256 = state_27181;
(statearr_27222_27256[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27257 = state_27181;
state_27181 = G__27257;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto__ = function(state_27181){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto____1.call(this,state_27181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__,msg_hist,msg_names,msg))
})();
var state__23193__auto__ = (function (){var statearr_27223 = f__23192__auto__.call(null);
(statearr_27223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__,msg_hist,msg_names,msg))
);

return c__23191__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23191__auto___27320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___27320,ch){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___27320,ch){
return (function (state_27303){
var state_val_27304 = (state_27303[(1)]);
if((state_val_27304 === (1))){
var state_27303__$1 = state_27303;
var statearr_27305_27321 = state_27303__$1;
(statearr_27305_27321[(2)] = null);

(statearr_27305_27321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (2))){
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27303__$1,(4),ch);
} else {
if((state_val_27304 === (3))){
var inst_27301 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27303__$1,inst_27301);
} else {
if((state_val_27304 === (4))){
var inst_27291 = (state_27303[(7)]);
var inst_27291__$1 = (state_27303[(2)]);
var state_27303__$1 = (function (){var statearr_27306 = state_27303;
(statearr_27306[(7)] = inst_27291__$1);

return statearr_27306;
})();
if(cljs.core.truth_(inst_27291__$1)){
var statearr_27307_27322 = state_27303__$1;
(statearr_27307_27322[(1)] = (5));

} else {
var statearr_27308_27323 = state_27303__$1;
(statearr_27308_27323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (5))){
var inst_27291 = (state_27303[(7)]);
var inst_27293 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27291);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27303__$1,(8),inst_27293);
} else {
if((state_val_27304 === (6))){
var state_27303__$1 = state_27303;
var statearr_27309_27324 = state_27303__$1;
(statearr_27309_27324[(2)] = null);

(statearr_27309_27324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (7))){
var inst_27299 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27310_27325 = state_27303__$1;
(statearr_27310_27325[(2)] = inst_27299);

(statearr_27310_27325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (8))){
var inst_27295 = (state_27303[(2)]);
var state_27303__$1 = (function (){var statearr_27311 = state_27303;
(statearr_27311[(8)] = inst_27295);

return statearr_27311;
})();
var statearr_27312_27326 = state_27303__$1;
(statearr_27312_27326[(2)] = null);

(statearr_27312_27326[(1)] = (2));


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
});})(c__23191__auto___27320,ch))
;
return ((function (switch__23129__auto__,c__23191__auto___27320,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23130__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23130__auto____0 = (function (){
var statearr_27316 = [null,null,null,null,null,null,null,null,null];
(statearr_27316[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23130__auto__);

(statearr_27316[(1)] = (1));

return statearr_27316;
});
var figwheel$client$heads_up_plugin_$_state_machine__23130__auto____1 = (function (state_27303){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_27303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e27317){if((e27317 instanceof Object)){
var ex__23133__auto__ = e27317;
var statearr_27318_27327 = state_27303;
(statearr_27318_27327[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27328 = state_27303;
state_27303 = G__27328;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23130__auto__ = function(state_27303){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23130__auto____1.call(this,state_27303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23130__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23130__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___27320,ch))
})();
var state__23193__auto__ = (function (){var statearr_27319 = f__23192__auto__.call(null);
(statearr_27319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___27320);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___27320,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__){
return (function (state_27349){
var state_val_27350 = (state_27349[(1)]);
if((state_val_27350 === (1))){
var inst_27344 = cljs.core.async.timeout.call(null,(3000));
var state_27349__$1 = state_27349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27349__$1,(2),inst_27344);
} else {
if((state_val_27350 === (2))){
var inst_27346 = (state_27349[(2)]);
var inst_27347 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27349__$1 = (function (){var statearr_27351 = state_27349;
(statearr_27351[(7)] = inst_27346);

return statearr_27351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27349__$1,inst_27347);
} else {
return null;
}
}
});})(c__23191__auto__))
;
return ((function (switch__23129__auto__,c__23191__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23130__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23130__auto____0 = (function (){
var statearr_27355 = [null,null,null,null,null,null,null,null];
(statearr_27355[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23130__auto__);

(statearr_27355[(1)] = (1));

return statearr_27355;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23130__auto____1 = (function (state_27349){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_27349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e27356){if((e27356 instanceof Object)){
var ex__23133__auto__ = e27356;
var statearr_27357_27359 = state_27349;
(statearr_27357_27359[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27360 = state_27349;
state_27349 = G__27360;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23130__auto__ = function(state_27349){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23130__auto____1.call(this,state_27349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23130__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23130__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__))
})();
var state__23193__auto__ = (function (){var statearr_27358 = f__23192__auto__.call(null);
(statearr_27358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_27358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__))
);

return c__23191__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18095__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18095__auto__)){
return ("CustomEvent" in window);
} else {
return and__18095__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27364 = {"detail":url};
return obj27364;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27365){
var map__27371 = p__27365;
var map__27371__$1 = ((cljs.core.seq_QMARK_.call(null,map__27371))?cljs.core.apply.call(null,cljs.core.hash_map,map__27371):map__27371);
var ed = map__27371__$1;
var formatted_exception = cljs.core.get.call(null,map__27371__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27371__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27371__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27372_27376 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27373_27377 = null;
var count__27374_27378 = (0);
var i__27375_27379 = (0);
while(true){
if((i__27375_27379 < count__27374_27378)){
var msg_27380 = cljs.core._nth.call(null,chunk__27373_27377,i__27375_27379);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27380);

var G__27381 = seq__27372_27376;
var G__27382 = chunk__27373_27377;
var G__27383 = count__27374_27378;
var G__27384 = (i__27375_27379 + (1));
seq__27372_27376 = G__27381;
chunk__27373_27377 = G__27382;
count__27374_27378 = G__27383;
i__27375_27379 = G__27384;
continue;
} else {
var temp__4425__auto___27385 = cljs.core.seq.call(null,seq__27372_27376);
if(temp__4425__auto___27385){
var seq__27372_27386__$1 = temp__4425__auto___27385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27372_27386__$1)){
var c__18892__auto___27387 = cljs.core.chunk_first.call(null,seq__27372_27386__$1);
var G__27388 = cljs.core.chunk_rest.call(null,seq__27372_27386__$1);
var G__27389 = c__18892__auto___27387;
var G__27390 = cljs.core.count.call(null,c__18892__auto___27387);
var G__27391 = (0);
seq__27372_27376 = G__27388;
chunk__27373_27377 = G__27389;
count__27374_27378 = G__27390;
i__27375_27379 = G__27391;
continue;
} else {
var msg_27392 = cljs.core.first.call(null,seq__27372_27386__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27392);

var G__27393 = cljs.core.next.call(null,seq__27372_27386__$1);
var G__27394 = null;
var G__27395 = (0);
var G__27396 = (0);
seq__27372_27376 = G__27393;
chunk__27373_27377 = G__27394;
count__27374_27378 = G__27395;
i__27375_27379 = G__27396;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27397){
var map__27399 = p__27397;
var map__27399__$1 = ((cljs.core.seq_QMARK_.call(null,map__27399))?cljs.core.apply.call(null,cljs.core.hash_map,map__27399):map__27399);
var w = map__27399__$1;
var message = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18095__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18095__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18095__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27406 = cljs.core.seq.call(null,plugins);
var chunk__27407 = null;
var count__27408 = (0);
var i__27409 = (0);
while(true){
if((i__27409 < count__27408)){
var vec__27410 = cljs.core._nth.call(null,chunk__27407,i__27409);
var k = cljs.core.nth.call(null,vec__27410,(0),null);
var plugin = cljs.core.nth.call(null,vec__27410,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27412 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27406,chunk__27407,count__27408,i__27409,pl_27412,vec__27410,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27412.call(null,msg_hist);
});})(seq__27406,chunk__27407,count__27408,i__27409,pl_27412,vec__27410,k,plugin))
);
} else {
}

var G__27413 = seq__27406;
var G__27414 = chunk__27407;
var G__27415 = count__27408;
var G__27416 = (i__27409 + (1));
seq__27406 = G__27413;
chunk__27407 = G__27414;
count__27408 = G__27415;
i__27409 = G__27416;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27406);
if(temp__4425__auto__){
var seq__27406__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27406__$1)){
var c__18892__auto__ = cljs.core.chunk_first.call(null,seq__27406__$1);
var G__27417 = cljs.core.chunk_rest.call(null,seq__27406__$1);
var G__27418 = c__18892__auto__;
var G__27419 = cljs.core.count.call(null,c__18892__auto__);
var G__27420 = (0);
seq__27406 = G__27417;
chunk__27407 = G__27418;
count__27408 = G__27419;
i__27409 = G__27420;
continue;
} else {
var vec__27411 = cljs.core.first.call(null,seq__27406__$1);
var k = cljs.core.nth.call(null,vec__27411,(0),null);
var plugin = cljs.core.nth.call(null,vec__27411,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27421 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27406,chunk__27407,count__27408,i__27409,pl_27421,vec__27411,k,plugin,seq__27406__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27421.call(null,msg_hist);
});})(seq__27406,chunk__27407,count__27408,i__27409,pl_27421,vec__27411,k,plugin,seq__27406__$1,temp__4425__auto__))
);
} else {
}

var G__27422 = cljs.core.next.call(null,seq__27406__$1);
var G__27423 = null;
var G__27424 = (0);
var G__27425 = (0);
seq__27406 = G__27422;
chunk__27407 = G__27423;
count__27408 = G__27424;
i__27409 = G__27425;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__27427 = arguments.length;
switch (G__27427) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19147__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19147__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27430){
var map__27431 = p__27430;
var map__27431__$1 = ((cljs.core.seq_QMARK_.call(null,map__27431))?cljs.core.apply.call(null,cljs.core.hash_map,map__27431):map__27431);
var opts = map__27431__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27429){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27429));
});

//# sourceMappingURL=client.js.map