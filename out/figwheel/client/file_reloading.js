// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__27888_SHARP_,p2__27889_SHARP_){
var and__18095__auto__ = p1__27888_SHARP_;
if(cljs.core.truth_(and__18095__auto__)){
return p2__27889_SHARP_;
} else {
return and__18095__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18107__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18107__auto__){
return or__18107__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18107__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18107__auto__){
return or__18107__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18107__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19006__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19006__auto__,method_table__19002__auto__,prefer_table__19003__auto__,method_cache__19004__auto__,cached_hierarchy__19005__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27890){
var map__27891 = p__27890;
var map__27891__$1 = ((cljs.core.seq_QMARK_.call(null,map__27891))?cljs.core.apply.call(null,cljs.core.hash_map,map__27891):map__27891);
var file = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27892){
var map__27893 = p__27892;
var map__27893__$1 = ((cljs.core.seq_QMARK_.call(null,map__27893))?cljs.core.apply.call(null,cljs.core.hash_map,map__27893):map__27893);
var namespace = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19006__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19006__auto__,method_table__19002__auto__,prefer_table__19003__auto__,method_cache__19004__auto__,cached_hierarchy__19005__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27894){if((e27894 instanceof Error)){
var e = e27894;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27894;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__27896 = arguments.length;
switch (G__27896) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27898,callback){
var map__27900 = p__27898;
var map__27900__$1 = ((cljs.core.seq_QMARK_.call(null,map__27900))?cljs.core.apply.call(null,cljs.core.hash_map,map__27900):map__27900);
var file_msg = map__27900__$1;
var request_url = cljs.core.get.call(null,map__27900__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27900,map__27900__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27900,map__27900__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27901){
var map__27903 = p__27901;
var map__27903__$1 = ((cljs.core.seq_QMARK_.call(null,map__27903))?cljs.core.apply.call(null,cljs.core.hash_map,map__27903):map__27903);
var file_msg = map__27903__$1;
var namespace = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18107__auto__ = meta_data;
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18095__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18095__auto__){
var or__18107__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
var or__18107__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18107__auto____$1)){
return or__18107__auto____$1;
} else {
var and__18095__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18095__auto____$1){
var or__18107__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18107__auto____$2){
return or__18107__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18095__auto____$1;
}
}
}
} else {
return and__18095__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27904,callback){
var map__27906 = p__27904;
var map__27906__$1 = ((cljs.core.seq_QMARK_.call(null,map__27906))?cljs.core.apply.call(null,cljs.core.hash_map,map__27906):map__27906);
var file_msg = map__27906__$1;
var request_url = cljs.core.get.call(null,map__27906__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27906__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23191__auto___27993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto___27993,out){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto___27993,out){
return (function (state_27975){
var state_val_27976 = (state_27975[(1)]);
if((state_val_27976 === (1))){
var inst_27953 = cljs.core.nth.call(null,files,(0),null);
var inst_27954 = cljs.core.nthnext.call(null,files,(1));
var inst_27955 = files;
var state_27975__$1 = (function (){var statearr_27977 = state_27975;
(statearr_27977[(7)] = inst_27955);

(statearr_27977[(8)] = inst_27954);

(statearr_27977[(9)] = inst_27953);

return statearr_27977;
})();
var statearr_27978_27994 = state_27975__$1;
(statearr_27978_27994[(2)] = null);

(statearr_27978_27994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (2))){
var inst_27955 = (state_27975[(7)]);
var inst_27958 = (state_27975[(10)]);
var inst_27958__$1 = cljs.core.nth.call(null,inst_27955,(0),null);
var inst_27959 = cljs.core.nthnext.call(null,inst_27955,(1));
var inst_27960 = (inst_27958__$1 == null);
var inst_27961 = cljs.core.not.call(null,inst_27960);
var state_27975__$1 = (function (){var statearr_27979 = state_27975;
(statearr_27979[(10)] = inst_27958__$1);

(statearr_27979[(11)] = inst_27959);

return statearr_27979;
})();
if(inst_27961){
var statearr_27980_27995 = state_27975__$1;
(statearr_27980_27995[(1)] = (4));

} else {
var statearr_27981_27996 = state_27975__$1;
(statearr_27981_27996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (3))){
var inst_27973 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27975__$1,inst_27973);
} else {
if((state_val_27976 === (4))){
var inst_27958 = (state_27975[(10)]);
var inst_27963 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27958);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27975__$1,(7),inst_27963);
} else {
if((state_val_27976 === (5))){
var inst_27969 = cljs.core.async.close_BANG_.call(null,out);
var state_27975__$1 = state_27975;
var statearr_27982_27997 = state_27975__$1;
(statearr_27982_27997[(2)] = inst_27969);

(statearr_27982_27997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (6))){
var inst_27971 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27983_27998 = state_27975__$1;
(statearr_27983_27998[(2)] = inst_27971);

(statearr_27983_27998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (7))){
var inst_27959 = (state_27975[(11)]);
var inst_27965 = (state_27975[(2)]);
var inst_27966 = cljs.core.async.put_BANG_.call(null,out,inst_27965);
var inst_27955 = inst_27959;
var state_27975__$1 = (function (){var statearr_27984 = state_27975;
(statearr_27984[(7)] = inst_27955);

(statearr_27984[(12)] = inst_27966);

return statearr_27984;
})();
var statearr_27985_27999 = state_27975__$1;
(statearr_27985_27999[(2)] = null);

(statearr_27985_27999[(1)] = (2));


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
});})(c__23191__auto___27993,out))
;
return ((function (switch__23129__auto__,c__23191__auto___27993,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto____0 = (function (){
var statearr_27989 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27989[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto__);

(statearr_27989[(1)] = (1));

return statearr_27989;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto____1 = (function (state_27975){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_27975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e27990){if((e27990 instanceof Object)){
var ex__23133__auto__ = e27990;
var statearr_27991_28000 = state_27975;
(statearr_27991_28000[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28001 = state_27975;
state_27975 = G__28001;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto__ = function(state_27975){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto____1.call(this,state_27975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto___27993,out))
})();
var state__23193__auto__ = (function (){var statearr_27992 = f__23192__auto__.call(null);
(statearr_27992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto___27993);

return statearr_27992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto___27993,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__28002,p__28003){
var map__28006 = p__28002;
var map__28006__$1 = ((cljs.core.seq_QMARK_.call(null,map__28006))?cljs.core.apply.call(null,cljs.core.hash_map,map__28006):map__28006);
var opts = map__28006__$1;
var url_rewriter = cljs.core.get.call(null,map__28006__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__28007 = p__28003;
var map__28007__$1 = ((cljs.core.seq_QMARK_.call(null,map__28007))?cljs.core.apply.call(null,cljs.core.hash_map,map__28007):map__28007);
var file_msg = map__28007__$1;
var file = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28008){
var map__28011 = p__28008;
var map__28011__$1 = ((cljs.core.seq_QMARK_.call(null,map__28011))?cljs.core.apply.call(null,cljs.core.hash_map,map__28011):map__28011);
var eval_body__$1 = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18095__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18095__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18095__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e28012){var e = e28012;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28017,p__28018){
var map__28219 = p__28017;
var map__28219__$1 = ((cljs.core.seq_QMARK_.call(null,map__28219))?cljs.core.apply.call(null,cljs.core.hash_map,map__28219):map__28219);
var opts = map__28219__$1;
var before_jsload = cljs.core.get.call(null,map__28219__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28219__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__28219__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__28220 = p__28018;
var map__28220__$1 = ((cljs.core.seq_QMARK_.call(null,map__28220))?cljs.core.apply.call(null,cljs.core.hash_map,map__28220):map__28220);
var msg = map__28220__$1;
var files = cljs.core.get.call(null,map__28220__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (state_28344){
var state_val_28345 = (state_28344[(1)]);
if((state_val_28345 === (7))){
var inst_28234 = (state_28344[(7)]);
var inst_28232 = (state_28344[(8)]);
var inst_28233 = (state_28344[(9)]);
var inst_28231 = (state_28344[(10)]);
var inst_28239 = cljs.core._nth.call(null,inst_28232,inst_28234);
var inst_28240 = figwheel.client.file_reloading.eval_body.call(null,inst_28239);
var inst_28241 = (inst_28234 + (1));
var tmp28346 = inst_28232;
var tmp28347 = inst_28233;
var tmp28348 = inst_28231;
var inst_28231__$1 = tmp28348;
var inst_28232__$1 = tmp28346;
var inst_28233__$1 = tmp28347;
var inst_28234__$1 = inst_28241;
var state_28344__$1 = (function (){var statearr_28349 = state_28344;
(statearr_28349[(7)] = inst_28234__$1);

(statearr_28349[(11)] = inst_28240);

(statearr_28349[(8)] = inst_28232__$1);

(statearr_28349[(9)] = inst_28233__$1);

(statearr_28349[(10)] = inst_28231__$1);

return statearr_28349;
})();
var statearr_28350_28419 = state_28344__$1;
(statearr_28350_28419[(2)] = null);

(statearr_28350_28419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (20))){
var inst_28276 = (state_28344[(12)]);
var inst_28280 = (state_28344[(13)]);
var inst_28283 = (state_28344[(14)]);
var inst_28281 = (state_28344[(15)]);
var inst_28277 = (state_28344[(16)]);
var inst_28286 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28288 = (function (){var all_files = inst_28276;
var files_SINGLEQUOTE_ = inst_28277;
var res_SINGLEQUOTE_ = inst_28280;
var res = inst_28281;
var files_not_loaded = inst_28283;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28276,inst_28280,inst_28283,inst_28281,inst_28277,inst_28286,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (p__28287){
var map__28351 = p__28287;
var map__28351__$1 = ((cljs.core.seq_QMARK_.call(null,map__28351))?cljs.core.apply.call(null,cljs.core.hash_map,map__28351):map__28351);
var namespace = cljs.core.get.call(null,map__28351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28276,inst_28280,inst_28283,inst_28281,inst_28277,inst_28286,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
})();
var inst_28289 = cljs.core.map.call(null,inst_28288,inst_28281);
var inst_28290 = cljs.core.pr_str.call(null,inst_28289);
var inst_28291 = figwheel.client.utils.log.call(null,inst_28290);
var inst_28292 = (function (){var all_files = inst_28276;
var files_SINGLEQUOTE_ = inst_28277;
var res_SINGLEQUOTE_ = inst_28280;
var res = inst_28281;
var files_not_loaded = inst_28283;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28276,inst_28280,inst_28283,inst_28281,inst_28277,inst_28286,inst_28288,inst_28289,inst_28290,inst_28291,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28276,inst_28280,inst_28283,inst_28281,inst_28277,inst_28286,inst_28288,inst_28289,inst_28290,inst_28291,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
})();
var inst_28293 = setTimeout(inst_28292,(10));
var state_28344__$1 = (function (){var statearr_28352 = state_28344;
(statearr_28352[(17)] = inst_28291);

(statearr_28352[(18)] = inst_28286);

return statearr_28352;
})();
var statearr_28353_28420 = state_28344__$1;
(statearr_28353_28420[(2)] = inst_28293);

(statearr_28353_28420[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (27))){
var inst_28303 = (state_28344[(19)]);
var state_28344__$1 = state_28344;
var statearr_28354_28421 = state_28344__$1;
(statearr_28354_28421[(2)] = inst_28303);

(statearr_28354_28421[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (1))){
var inst_28223 = (state_28344[(20)]);
var inst_28221 = before_jsload.call(null,files);
var inst_28222 = (function (){return ((function (inst_28223,inst_28221,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (p1__28013_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28013_SHARP_);
});
;})(inst_28223,inst_28221,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
})();
var inst_28223__$1 = cljs.core.filter.call(null,inst_28222,files);
var inst_28224 = cljs.core.not_empty.call(null,inst_28223__$1);
var state_28344__$1 = (function (){var statearr_28355 = state_28344;
(statearr_28355[(21)] = inst_28221);

(statearr_28355[(20)] = inst_28223__$1);

return statearr_28355;
})();
if(cljs.core.truth_(inst_28224)){
var statearr_28356_28422 = state_28344__$1;
(statearr_28356_28422[(1)] = (2));

} else {
var statearr_28357_28423 = state_28344__$1;
(statearr_28357_28423[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (24))){
var state_28344__$1 = state_28344;
var statearr_28358_28424 = state_28344__$1;
(statearr_28358_28424[(2)] = null);

(statearr_28358_28424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (4))){
var inst_28268 = (state_28344[(2)]);
var inst_28269 = (function (){return ((function (inst_28268,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (p1__28014_SHARP_){
var and__18095__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28014_SHARP_);
if(cljs.core.truth_(and__18095__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28014_SHARP_));
} else {
return and__18095__auto__;
}
});
;})(inst_28268,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
})();
var inst_28270 = cljs.core.filter.call(null,inst_28269,files);
var state_28344__$1 = (function (){var statearr_28359 = state_28344;
(statearr_28359[(22)] = inst_28268);

(statearr_28359[(23)] = inst_28270);

return statearr_28359;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28360_28425 = state_28344__$1;
(statearr_28360_28425[(1)] = (16));

} else {
var statearr_28361_28426 = state_28344__$1;
(statearr_28361_28426[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (15))){
var inst_28258 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28362_28427 = state_28344__$1;
(statearr_28362_28427[(2)] = inst_28258);

(statearr_28362_28427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (21))){
var state_28344__$1 = state_28344;
var statearr_28363_28428 = state_28344__$1;
(statearr_28363_28428[(2)] = null);

(statearr_28363_28428[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (31))){
var inst_28311 = (state_28344[(24)]);
var inst_28321 = (state_28344[(2)]);
var inst_28322 = cljs.core.not_empty.call(null,inst_28311);
var state_28344__$1 = (function (){var statearr_28364 = state_28344;
(statearr_28364[(25)] = inst_28321);

return statearr_28364;
})();
if(cljs.core.truth_(inst_28322)){
var statearr_28365_28429 = state_28344__$1;
(statearr_28365_28429[(1)] = (32));

} else {
var statearr_28366_28430 = state_28344__$1;
(statearr_28366_28430[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (32))){
var inst_28311 = (state_28344[(24)]);
var inst_28324 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28311);
var inst_28325 = cljs.core.pr_str.call(null,inst_28324);
var inst_28326 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28325)].join('');
var inst_28327 = figwheel.client.utils.log.call(null,inst_28326);
var state_28344__$1 = state_28344;
var statearr_28367_28431 = state_28344__$1;
(statearr_28367_28431[(2)] = inst_28327);

(statearr_28367_28431[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (33))){
var state_28344__$1 = state_28344;
var statearr_28368_28432 = state_28344__$1;
(statearr_28368_28432[(2)] = null);

(statearr_28368_28432[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (13))){
var inst_28244 = (state_28344[(26)]);
var inst_28248 = cljs.core.chunk_first.call(null,inst_28244);
var inst_28249 = cljs.core.chunk_rest.call(null,inst_28244);
var inst_28250 = cljs.core.count.call(null,inst_28248);
var inst_28231 = inst_28249;
var inst_28232 = inst_28248;
var inst_28233 = inst_28250;
var inst_28234 = (0);
var state_28344__$1 = (function (){var statearr_28369 = state_28344;
(statearr_28369[(7)] = inst_28234);

(statearr_28369[(8)] = inst_28232);

(statearr_28369[(9)] = inst_28233);

(statearr_28369[(10)] = inst_28231);

return statearr_28369;
})();
var statearr_28370_28433 = state_28344__$1;
(statearr_28370_28433[(2)] = null);

(statearr_28370_28433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (22))){
var inst_28283 = (state_28344[(14)]);
var inst_28296 = (state_28344[(2)]);
var inst_28297 = cljs.core.not_empty.call(null,inst_28283);
var state_28344__$1 = (function (){var statearr_28371 = state_28344;
(statearr_28371[(27)] = inst_28296);

return statearr_28371;
})();
if(cljs.core.truth_(inst_28297)){
var statearr_28372_28434 = state_28344__$1;
(statearr_28372_28434[(1)] = (23));

} else {
var statearr_28373_28435 = state_28344__$1;
(statearr_28373_28435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (36))){
var state_28344__$1 = state_28344;
var statearr_28374_28436 = state_28344__$1;
(statearr_28374_28436[(2)] = null);

(statearr_28374_28436[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (29))){
var inst_28310 = (state_28344[(28)]);
var inst_28315 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28310);
var inst_28316 = cljs.core.pr_str.call(null,inst_28315);
var inst_28317 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28316)].join('');
var inst_28318 = figwheel.client.utils.log.call(null,inst_28317);
var state_28344__$1 = state_28344;
var statearr_28375_28437 = state_28344__$1;
(statearr_28375_28437[(2)] = inst_28318);

(statearr_28375_28437[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (6))){
var inst_28265 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28376_28438 = state_28344__$1;
(statearr_28376_28438[(2)] = inst_28265);

(statearr_28376_28438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (28))){
var inst_28310 = (state_28344[(28)]);
var inst_28309 = (state_28344[(2)]);
var inst_28310__$1 = cljs.core.get.call(null,inst_28309,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28311 = cljs.core.get.call(null,inst_28309,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28312 = cljs.core.get.call(null,inst_28309,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28313 = cljs.core.not_empty.call(null,inst_28310__$1);
var state_28344__$1 = (function (){var statearr_28377 = state_28344;
(statearr_28377[(29)] = inst_28312);

(statearr_28377[(24)] = inst_28311);

(statearr_28377[(28)] = inst_28310__$1);

return statearr_28377;
})();
if(cljs.core.truth_(inst_28313)){
var statearr_28378_28439 = state_28344__$1;
(statearr_28378_28439[(1)] = (29));

} else {
var statearr_28379_28440 = state_28344__$1;
(statearr_28379_28440[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (25))){
var inst_28342 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28344__$1,inst_28342);
} else {
if((state_val_28345 === (34))){
var inst_28312 = (state_28344[(29)]);
var inst_28330 = (state_28344[(2)]);
var inst_28331 = cljs.core.not_empty.call(null,inst_28312);
var state_28344__$1 = (function (){var statearr_28380 = state_28344;
(statearr_28380[(30)] = inst_28330);

return statearr_28380;
})();
if(cljs.core.truth_(inst_28331)){
var statearr_28381_28441 = state_28344__$1;
(statearr_28381_28441[(1)] = (35));

} else {
var statearr_28382_28442 = state_28344__$1;
(statearr_28382_28442[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (17))){
var inst_28270 = (state_28344[(23)]);
var state_28344__$1 = state_28344;
var statearr_28383_28443 = state_28344__$1;
(statearr_28383_28443[(2)] = inst_28270);

(statearr_28383_28443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (3))){
var state_28344__$1 = state_28344;
var statearr_28384_28444 = state_28344__$1;
(statearr_28384_28444[(2)] = null);

(statearr_28384_28444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (12))){
var inst_28261 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28385_28445 = state_28344__$1;
(statearr_28385_28445[(2)] = inst_28261);

(statearr_28385_28445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (2))){
var inst_28223 = (state_28344[(20)]);
var inst_28230 = cljs.core.seq.call(null,inst_28223);
var inst_28231 = inst_28230;
var inst_28232 = null;
var inst_28233 = (0);
var inst_28234 = (0);
var state_28344__$1 = (function (){var statearr_28386 = state_28344;
(statearr_28386[(7)] = inst_28234);

(statearr_28386[(8)] = inst_28232);

(statearr_28386[(9)] = inst_28233);

(statearr_28386[(10)] = inst_28231);

return statearr_28386;
})();
var statearr_28387_28446 = state_28344__$1;
(statearr_28387_28446[(2)] = null);

(statearr_28387_28446[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (23))){
var inst_28276 = (state_28344[(12)]);
var inst_28280 = (state_28344[(13)]);
var inst_28303 = (state_28344[(19)]);
var inst_28283 = (state_28344[(14)]);
var inst_28281 = (state_28344[(15)]);
var inst_28277 = (state_28344[(16)]);
var inst_28299 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28302 = (function (){var all_files = inst_28276;
var files_SINGLEQUOTE_ = inst_28277;
var res_SINGLEQUOTE_ = inst_28280;
var res = inst_28281;
var files_not_loaded = inst_28283;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28276,inst_28280,inst_28303,inst_28283,inst_28281,inst_28277,inst_28299,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (p__28301){
var map__28388 = p__28301;
var map__28388__$1 = ((cljs.core.seq_QMARK_.call(null,map__28388))?cljs.core.apply.call(null,cljs.core.hash_map,map__28388):map__28388);
var meta_data = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28276,inst_28280,inst_28303,inst_28283,inst_28281,inst_28277,inst_28299,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
})();
var inst_28303__$1 = cljs.core.group_by.call(null,inst_28302,inst_28283);
var inst_28304 = cljs.core.seq_QMARK_.call(null,inst_28303__$1);
var state_28344__$1 = (function (){var statearr_28389 = state_28344;
(statearr_28389[(19)] = inst_28303__$1);

(statearr_28389[(31)] = inst_28299);

return statearr_28389;
})();
if(inst_28304){
var statearr_28390_28447 = state_28344__$1;
(statearr_28390_28447[(1)] = (26));

} else {
var statearr_28391_28448 = state_28344__$1;
(statearr_28391_28448[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (35))){
var inst_28312 = (state_28344[(29)]);
var inst_28333 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28312);
var inst_28334 = cljs.core.pr_str.call(null,inst_28333);
var inst_28335 = [cljs.core.str("not required: "),cljs.core.str(inst_28334)].join('');
var inst_28336 = figwheel.client.utils.log.call(null,inst_28335);
var state_28344__$1 = state_28344;
var statearr_28392_28449 = state_28344__$1;
(statearr_28392_28449[(2)] = inst_28336);

(statearr_28392_28449[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (19))){
var inst_28276 = (state_28344[(12)]);
var inst_28280 = (state_28344[(13)]);
var inst_28281 = (state_28344[(15)]);
var inst_28277 = (state_28344[(16)]);
var inst_28280__$1 = (state_28344[(2)]);
var inst_28281__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28280__$1);
var inst_28282 = (function (){var all_files = inst_28276;
var files_SINGLEQUOTE_ = inst_28277;
var res_SINGLEQUOTE_ = inst_28280__$1;
var res = inst_28281__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28276,inst_28280,inst_28281,inst_28277,inst_28280__$1,inst_28281__$1,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (p1__28016_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28016_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28276,inst_28280,inst_28281,inst_28277,inst_28280__$1,inst_28281__$1,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
})();
var inst_28283 = cljs.core.filter.call(null,inst_28282,inst_28280__$1);
var inst_28284 = cljs.core.not_empty.call(null,inst_28281__$1);
var state_28344__$1 = (function (){var statearr_28393 = state_28344;
(statearr_28393[(13)] = inst_28280__$1);

(statearr_28393[(14)] = inst_28283);

(statearr_28393[(15)] = inst_28281__$1);

return statearr_28393;
})();
if(cljs.core.truth_(inst_28284)){
var statearr_28394_28450 = state_28344__$1;
(statearr_28394_28450[(1)] = (20));

} else {
var statearr_28395_28451 = state_28344__$1;
(statearr_28395_28451[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (11))){
var state_28344__$1 = state_28344;
var statearr_28396_28452 = state_28344__$1;
(statearr_28396_28452[(2)] = null);

(statearr_28396_28452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (9))){
var inst_28263 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28397_28453 = state_28344__$1;
(statearr_28397_28453[(2)] = inst_28263);

(statearr_28397_28453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (5))){
var inst_28234 = (state_28344[(7)]);
var inst_28233 = (state_28344[(9)]);
var inst_28236 = (inst_28234 < inst_28233);
var inst_28237 = inst_28236;
var state_28344__$1 = state_28344;
if(cljs.core.truth_(inst_28237)){
var statearr_28398_28454 = state_28344__$1;
(statearr_28398_28454[(1)] = (7));

} else {
var statearr_28399_28455 = state_28344__$1;
(statearr_28399_28455[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (14))){
var inst_28244 = (state_28344[(26)]);
var inst_28253 = cljs.core.first.call(null,inst_28244);
var inst_28254 = figwheel.client.file_reloading.eval_body.call(null,inst_28253);
var inst_28255 = cljs.core.next.call(null,inst_28244);
var inst_28231 = inst_28255;
var inst_28232 = null;
var inst_28233 = (0);
var inst_28234 = (0);
var state_28344__$1 = (function (){var statearr_28400 = state_28344;
(statearr_28400[(7)] = inst_28234);

(statearr_28400[(32)] = inst_28254);

(statearr_28400[(8)] = inst_28232);

(statearr_28400[(9)] = inst_28233);

(statearr_28400[(10)] = inst_28231);

return statearr_28400;
})();
var statearr_28401_28456 = state_28344__$1;
(statearr_28401_28456[(2)] = null);

(statearr_28401_28456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (26))){
var inst_28303 = (state_28344[(19)]);
var inst_28306 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28303);
var state_28344__$1 = state_28344;
var statearr_28402_28457 = state_28344__$1;
(statearr_28402_28457[(2)] = inst_28306);

(statearr_28402_28457[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (16))){
var inst_28270 = (state_28344[(23)]);
var inst_28272 = (function (){var all_files = inst_28270;
return ((function (all_files,inst_28270,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function (p1__28015_SHARP_){
return cljs.core.update_in.call(null,p1__28015_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28270,state_val_28345,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
})();
var inst_28273 = cljs.core.map.call(null,inst_28272,inst_28270);
var state_28344__$1 = state_28344;
var statearr_28403_28458 = state_28344__$1;
(statearr_28403_28458[(2)] = inst_28273);

(statearr_28403_28458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (30))){
var state_28344__$1 = state_28344;
var statearr_28404_28459 = state_28344__$1;
(statearr_28404_28459[(2)] = null);

(statearr_28404_28459[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (10))){
var inst_28244 = (state_28344[(26)]);
var inst_28246 = cljs.core.chunked_seq_QMARK_.call(null,inst_28244);
var state_28344__$1 = state_28344;
if(inst_28246){
var statearr_28405_28460 = state_28344__$1;
(statearr_28405_28460[(1)] = (13));

} else {
var statearr_28406_28461 = state_28344__$1;
(statearr_28406_28461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (18))){
var inst_28276 = (state_28344[(12)]);
var inst_28277 = (state_28344[(16)]);
var inst_28276__$1 = (state_28344[(2)]);
var inst_28277__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28276__$1);
var inst_28278 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28277__$1);
var state_28344__$1 = (function (){var statearr_28407 = state_28344;
(statearr_28407[(12)] = inst_28276__$1);

(statearr_28407[(16)] = inst_28277__$1);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28344__$1,(19),inst_28278);
} else {
if((state_val_28345 === (37))){
var inst_28339 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28408_28462 = state_28344__$1;
(statearr_28408_28462[(2)] = inst_28339);

(statearr_28408_28462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (8))){
var inst_28244 = (state_28344[(26)]);
var inst_28231 = (state_28344[(10)]);
var inst_28244__$1 = cljs.core.seq.call(null,inst_28231);
var state_28344__$1 = (function (){var statearr_28409 = state_28344;
(statearr_28409[(26)] = inst_28244__$1);

return statearr_28409;
})();
if(inst_28244__$1){
var statearr_28410_28463 = state_28344__$1;
(statearr_28410_28463[(1)] = (10));

} else {
var statearr_28411_28464 = state_28344__$1;
(statearr_28411_28464[(1)] = (11));

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
});})(c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
;
return ((function (switch__23129__auto__,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto____0 = (function (){
var statearr_28415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28415[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto__);

(statearr_28415[(1)] = (1));

return statearr_28415;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto____1 = (function (state_28344){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_28344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e28416){if((e28416 instanceof Object)){
var ex__23133__auto__ = e28416;
var statearr_28417_28465 = state_28344;
(statearr_28417_28465[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28466 = state_28344;
state_28344 = G__28466;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto__ = function(state_28344){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto____1.call(this,state_28344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
})();
var state__23193__auto__ = (function (){var statearr_28418 = f__23192__auto__.call(null);
(statearr_28418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_28418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__,map__28219,map__28219__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28220,map__28220__$1,msg,files))
);

return c__23191__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28469,link){
var map__28471 = p__28469;
var map__28471__$1 = ((cljs.core.seq_QMARK_.call(null,map__28471))?cljs.core.apply.call(null,cljs.core.hash_map,map__28471):map__28471);
var file = cljs.core.get.call(null,map__28471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28471,map__28471__$1,file){
return (function (p1__28467_SHARP_,p2__28468_SHARP_){
if(cljs.core._EQ_.call(null,p1__28467_SHARP_,p2__28468_SHARP_)){
return p1__28467_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28471,map__28471__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28475){
var map__28476 = p__28475;
var map__28476__$1 = ((cljs.core.seq_QMARK_.call(null,map__28476))?cljs.core.apply.call(null,cljs.core.hash_map,map__28476):map__28476);
var match_length = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28472_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28472_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__28478 = arguments.length;
switch (G__28478) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28480){
var map__28482 = p__28480;
var map__28482__$1 = ((cljs.core.seq_QMARK_.call(null,map__28482))?cljs.core.apply.call(null,cljs.core.hash_map,map__28482):map__28482);
var f_data = map__28482__$1;
var file = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18107__auto__ = request_url;
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28483,files_msg){
var map__28505 = p__28483;
var map__28505__$1 = ((cljs.core.seq_QMARK_.call(null,map__28505))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var opts = map__28505__$1;
var on_cssload = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28506_28526 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28507_28527 = null;
var count__28508_28528 = (0);
var i__28509_28529 = (0);
while(true){
if((i__28509_28529 < count__28508_28528)){
var f_28530 = cljs.core._nth.call(null,chunk__28507_28527,i__28509_28529);
figwheel.client.file_reloading.reload_css_file.call(null,f_28530);

var G__28531 = seq__28506_28526;
var G__28532 = chunk__28507_28527;
var G__28533 = count__28508_28528;
var G__28534 = (i__28509_28529 + (1));
seq__28506_28526 = G__28531;
chunk__28507_28527 = G__28532;
count__28508_28528 = G__28533;
i__28509_28529 = G__28534;
continue;
} else {
var temp__4425__auto___28535 = cljs.core.seq.call(null,seq__28506_28526);
if(temp__4425__auto___28535){
var seq__28506_28536__$1 = temp__4425__auto___28535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28506_28536__$1)){
var c__18892__auto___28537 = cljs.core.chunk_first.call(null,seq__28506_28536__$1);
var G__28538 = cljs.core.chunk_rest.call(null,seq__28506_28536__$1);
var G__28539 = c__18892__auto___28537;
var G__28540 = cljs.core.count.call(null,c__18892__auto___28537);
var G__28541 = (0);
seq__28506_28526 = G__28538;
chunk__28507_28527 = G__28539;
count__28508_28528 = G__28540;
i__28509_28529 = G__28541;
continue;
} else {
var f_28542 = cljs.core.first.call(null,seq__28506_28536__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28542);

var G__28543 = cljs.core.next.call(null,seq__28506_28536__$1);
var G__28544 = null;
var G__28545 = (0);
var G__28546 = (0);
seq__28506_28526 = G__28543;
chunk__28507_28527 = G__28544;
count__28508_28528 = G__28545;
i__28509_28529 = G__28546;
continue;
}
} else {
}
}
break;
}

var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__,map__28505,map__28505__$1,opts,on_cssload){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__,map__28505,map__28505__$1,opts,on_cssload){
return (function (state_28516){
var state_val_28517 = (state_28516[(1)]);
if((state_val_28517 === (1))){
var inst_28510 = cljs.core.async.timeout.call(null,(100));
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28516__$1,(2),inst_28510);
} else {
if((state_val_28517 === (2))){
var inst_28512 = (state_28516[(2)]);
var inst_28513 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28514 = on_cssload.call(null,inst_28513);
var state_28516__$1 = (function (){var statearr_28518 = state_28516;
(statearr_28518[(7)] = inst_28512);

return statearr_28518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28516__$1,inst_28514);
} else {
return null;
}
}
});})(c__23191__auto__,map__28505,map__28505__$1,opts,on_cssload))
;
return ((function (switch__23129__auto__,c__23191__auto__,map__28505,map__28505__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto____0 = (function (){
var statearr_28522 = [null,null,null,null,null,null,null,null];
(statearr_28522[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto__);

(statearr_28522[(1)] = (1));

return statearr_28522;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto____1 = (function (state_28516){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_28516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e28523){if((e28523 instanceof Object)){
var ex__23133__auto__ = e28523;
var statearr_28524_28547 = state_28516;
(statearr_28524_28547[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28548 = state_28516;
state_28516 = G__28548;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto__ = function(state_28516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto____1.call(this,state_28516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__,map__28505,map__28505__$1,opts,on_cssload))
})();
var state__23193__auto__ = (function (){var statearr_28525 = f__23192__auto__.call(null);
(statearr_28525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_28525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__,map__28505,map__28505__$1,opts,on_cssload))
);

return c__23191__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map