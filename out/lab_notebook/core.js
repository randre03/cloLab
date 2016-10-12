// Compiled by ClojureScript 0.0-3211 {}
goog.provide('lab_notebook.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
if(typeof lab_notebook.core.appstate !== 'undefined'){
} else {
lab_notebook.core.appstate = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof lab_notebook.core.apphistory !== 'undefined'){
} else {
lab_notebook.core.apphistory = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,lab_notebook.core.appstate)], null));
}
cljs.core.add_watch.call(null,lab_notebook.core.appstate,new cljs.core.Keyword(null,"history","history",-247395220),(function (_,___$1,___$2,new_state){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,lab_notebook.core.apphistory)),new_state)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,lab_notebook.core.apphistory,cljs.core.conj,new_state);
}
}));
lab_notebook.core.undo = (function lab_notebook$core$undo(){
if((cljs.core.count.call(null,cljs.core.deref.call(null,lab_notebook.core.apphistory)) > (1))){
var new_history = cljs.core.swap_BANG_.call(null,lab_notebook.core.apphistory,cljs.core.pop);
return cljs.core.reset_BANG_.call(null,lab_notebook.core.appstate,cljs.core.last.call(null,new_history));
} else {
return null;
}
});
lab_notebook.core.item_form = (function lab_notebook$core$item_form(cursor,component,options){
if(typeof lab_notebook.core.t31525 !== 'undefined'){
} else {

/**
* @constructor
*/
lab_notebook.core.t31525 = (function (item_form,cursor,component,options,meta31526){
this.item_form = item_form;
this.cursor = cursor;
this.component = component;
this.options = options;
this.meta31526 = meta31526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lab_notebook.core.t31525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31527,meta31526__$1){
var self__ = this;
var _31527__$1 = this;
return (new lab_notebook.core.t31525(self__.item_form,self__.cursor,self__.component,self__.options,meta31526__$1));
});

lab_notebook.core.t31525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31527){
var self__ = this;
var _31527__$1 = this;
return self__.meta31526;
});

lab_notebook.core.t31525.prototype.om$core$IInitState$ = true;

lab_notebook.core.t31525.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"summary","summary",380847952),""),new cljs.core.Keyword(null,"date-time","date-time",177938180),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"date-time","date-time",177938180),""),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"notes","notes",-1039600523),"")], null);
});

lab_notebook.core.t31525.prototype.om$core$IRenderState$ = true;

lab_notebook.core.t31525.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.form({"className": "form-horizontal"},om.dom.input.call(null,{"type": "text", "className": "form-control", "value": new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"summary","summary",380847952),e.target.value);
});})(this$__$1))
, "placeholder": "Summary"}),om.dom.input.call(null,{"type": "text", "className": "form-control", "value": new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"date-time","date-time",177938180),e.target.value);
});})(this$__$1))
, "placeholder": "Time"}),om.dom.textarea.call(null,{"className": "form-control", "placeholder": "Notes", "value": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"notes","notes",-1039600523),e.target.value);
});})(this$__$1))
, "rows": "5"}),React.DOM.button({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
e.preventDefault();

var temp__4425__auto__ = new cljs.core.Keyword(null,"on-save","on-save",1618176266).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(temp__4425__auto__)){
var on_save = temp__4425__auto__;
return on_save.call(null,new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(state));
} else {
return null;
}
});})(this$__$1))
},"Save"),React.DOM.button({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
e.preventDefault();

var temp__4425__auto___31528 = new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(temp__4425__auto___31528)){
var on_cancel_31529 = temp__4425__auto___31528;
on_cancel_31529.call(null);
} else {
}

return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"summary","summary",380847952),""),new cljs.core.Keyword(null,"date-time","date-time",177938180),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"date-time","date-time",177938180),""),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"notes","notes",-1039600523),"")], null));
});})(this$__$1))
},"Cancel"));
});

lab_notebook.core.t31525.cljs$lang$type = true;

lab_notebook.core.t31525.cljs$lang$ctorStr = "lab-notebook.core/t31525";

lab_notebook.core.t31525.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"lab-notebook.core/t31525");
});

lab_notebook.core.__GT_t31525 = (function lab_notebook$core$item_form_$___GT_t31525(item_form__$1,cursor__$1,component__$1,options__$1,meta31526){
return (new lab_notebook.core.t31525(item_form__$1,cursor__$1,component__$1,options__$1,meta31526));
});

}

return (new lab_notebook.core.t31525(lab_notebook$core$item_form,cursor,component,options,cljs.core.PersistentArrayMap.EMPTY));
});
lab_notebook.core.item_view = (function lab_notebook$core$item_view(cursor,component,options){
if(typeof lab_notebook.core.t31533 !== 'undefined'){
} else {

/**
* @constructor
*/
lab_notebook.core.t31533 = (function (item_view,cursor,component,options,meta31534){
this.item_view = item_view;
this.cursor = cursor;
this.component = component;
this.options = options;
this.meta31534 = meta31534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lab_notebook.core.t31533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31535,meta31534__$1){
var self__ = this;
var _31535__$1 = this;
return (new lab_notebook.core.t31533(self__.item_view,self__.cursor,self__.component,self__.options,meta31534__$1));
});

lab_notebook.core.t31533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31535){
var self__ = this;
var _31535__$1 = this;
return self__.meta31534;
});

lab_notebook.core.t31533.prototype.om$core$IInitState$ = true;

lab_notebook.core.t31533.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});

lab_notebook.core.t31533.prototype.om$core$IRenderState$ = true;

lab_notebook.core.t31533.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(state))){
return React.DOM.div({"style": {"marginTop": "2em"}},om.core.build.call(null,lab_notebook.core.item_form,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (this$__$1){
return (function (summary,date_time,notes){
om.core.transact_BANG_.call(null,self__.cursor,((function (this$__$1){
return (function (entry){
return cljs.core.assoc.call(null,entry,new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"date-time","date-time",177938180),date_time,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
});})(this$__$1))
);

return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(this$__$1))
,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (this$__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(this$__$1))
], null)], null)));
} else {
return React.DOM.div({"style": {"marginTop": "2em"}},React.DOM.button({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true);
});})(this$__$1))
},"Edit"),React.DOM.button({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
e.preventDefault();

var temp__4425__auto__ = new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(temp__4425__auto__)){
var on_delete = temp__4425__auto__;
return on_delete.call(null);
} else {
return null;
}
});})(this$__$1))
},"Delete"),React.DOM.div(null,new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(self__.cursor)),React.DOM.div(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(self__.cursor)),React.DOM.div(null,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
}
});

lab_notebook.core.t31533.cljs$lang$type = true;

lab_notebook.core.t31533.cljs$lang$ctorStr = "lab-notebook.core/t31533";

lab_notebook.core.t31533.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"lab-notebook.core/t31533");
});

lab_notebook.core.__GT_t31533 = (function lab_notebook$core$item_view_$___GT_t31533(item_view__$1,cursor__$1,component__$1,options__$1,meta31534){
return (new lab_notebook.core.t31533(item_view__$1,cursor__$1,component__$1,options__$1,meta31534));
});

}

return (new lab_notebook.core.t31533(lab_notebook$core$item_view,cursor,component,options,cljs.core.PersistentArrayMap.EMPTY));
});
lab_notebook.core.delete$ = (function lab_notebook$core$delete(v,i){
return cljs.core.into.call(null,cljs.core.subvec.call(null,v,(0),i),cljs.core.subvec.call(null,v,(i + (1))));
});
lab_notebook.core.item_table = (function lab_notebook$core$item_table(cursor,component){
if(typeof lab_notebook.core.t31548 !== 'undefined'){
} else {

/**
* @constructor
*/
lab_notebook.core.t31548 = (function (item_table,cursor,component,meta31549){
this.item_table = item_table;
this.cursor = cursor;
this.component = component;
this.meta31549 = meta31549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lab_notebook.core.t31548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31550,meta31549__$1){
var self__ = this;
var _31550__$1 = this;
return (new lab_notebook.core.t31548(self__.item_table,self__.cursor,self__.component,meta31549__$1));
});

lab_notebook.core.t31548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31550){
var self__ = this;
var _31550__$1 = this;
return self__.meta31549;
});

lab_notebook.core.t31548.prototype.om$core$IInitState$ = true;

lab_notebook.core.t31548.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});

lab_notebook.core.t31548.prototype.om$core$IRenderState$ = true;

lab_notebook.core.t31548.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.button({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true);
});})(this$__$1))
},"New entry"),cljs.core.apply.call(null,om.dom.div,null,(function (){var iter__18861__auto__ = ((function (this$__$1){
return (function lab_notebook$core$item_table_$_iter__31551(s__31552){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__31552__$1 = s__31552;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31552__$1);
if(temp__4425__auto__){
var s__31552__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31552__$2)){
var c__18859__auto__ = cljs.core.chunk_first.call(null,s__31552__$2);
var size__18860__auto__ = cljs.core.count.call(null,c__18859__auto__);
var b__31554 = cljs.core.chunk_buffer.call(null,size__18860__auto__);
if((function (){var i__31553 = (0);
while(true){
if((i__31553 < size__18860__auto__)){
var vec__31557 = cljs.core._nth.call(null,c__18859__auto__,i__31553);
var i = cljs.core.nth.call(null,vec__31557,(0),null);
var entry = cljs.core.nth.call(null,vec__31557,(1),null);
cljs.core.chunk_append.call(null,b__31554,om.core.build.call(null,lab_notebook.core.item_view,entry,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),((function (i__31553,vec__31557,i,entry,c__18859__auto__,size__18860__auto__,b__31554,s__31552__$2,temp__4425__auto__,this$__$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"entries","entries",-86943161),((function (i__31553,vec__31557,i,entry,c__18859__auto__,size__18860__auto__,b__31554,s__31552__$2,temp__4425__auto__,this$__$1){
return (function (p1__31536_SHARP_){
return lab_notebook.core.delete$.call(null,p1__31536_SHARP_,i);
});})(i__31553,vec__31557,i,entry,c__18859__auto__,size__18860__auto__,b__31554,s__31552__$2,temp__4425__auto__,this$__$1))
);
});})(i__31553,vec__31557,i,entry,c__18859__auto__,size__18860__auto__,b__31554,s__31552__$2,temp__4425__auto__,this$__$1))
], null)], null)));

var G__31559 = (i__31553 + (1));
i__31553 = G__31559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31554),lab_notebook$core$item_table_$_iter__31551.call(null,cljs.core.chunk_rest.call(null,s__31552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31554),null);
}
} else {
var vec__31558 = cljs.core.first.call(null,s__31552__$2);
var i = cljs.core.nth.call(null,vec__31558,(0),null);
var entry = cljs.core.nth.call(null,vec__31558,(1),null);
return cljs.core.cons.call(null,om.core.build.call(null,lab_notebook.core.item_view,entry,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),((function (vec__31558,i,entry,s__31552__$2,temp__4425__auto__,this$__$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"entries","entries",-86943161),((function (vec__31558,i,entry,s__31552__$2,temp__4425__auto__,this$__$1){
return (function (p1__31536_SHARP_){
return lab_notebook.core.delete$.call(null,p1__31536_SHARP_,i);
});})(vec__31558,i,entry,s__31552__$2,temp__4425__auto__,this$__$1))
);
});})(vec__31558,i,entry,s__31552__$2,temp__4425__auto__,this$__$1))
], null)], null)),lab_notebook$core$item_table_$_iter__31551.call(null,cljs.core.rest.call(null,s__31552__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__18861__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
})()),(cljs.core.truth_((function (){var or__18107__auto__ = new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(self__.cursor));
}
})())?React.DOM.div(null,React.DOM.h3(null,"New entry"),om.core.build.call(null,lab_notebook.core.item_form,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (this$__$1){
return (function (summary,date_time,notes){
om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"entries","entries",-86943161),((function (this$__$1){
return (function (entries){
return cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY).call(null,entries,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"date-time","date-time",177938180),date_time,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null));
});})(this$__$1))
);

return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(this$__$1))
,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (this$__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(this$__$1))
], null)], null))):null));
});

lab_notebook.core.t31548.cljs$lang$type = true;

lab_notebook.core.t31548.cljs$lang$ctorStr = "lab-notebook.core/t31548";

lab_notebook.core.t31548.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"lab-notebook.core/t31548");
});

lab_notebook.core.__GT_t31548 = (function lab_notebook$core$item_table_$___GT_t31548(item_table__$1,cursor__$1,component__$1,meta31549){
return (new lab_notebook.core.t31548(item_table__$1,cursor__$1,component__$1,meta31549));
});

}

return (new lab_notebook.core.t31548(lab_notebook$core$item_table,cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
lab_notebook.core.app_container = (function lab_notebook$core$app_container(cursor,component){
if(typeof lab_notebook.core.t31563 !== 'undefined'){
} else {

/**
* @constructor
*/
lab_notebook.core.t31563 = (function (app_container,cursor,component,meta31564){
this.app_container = app_container;
this.cursor = cursor;
this.component = component;
this.meta31564 = meta31564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lab_notebook.core.t31563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31565,meta31564__$1){
var self__ = this;
var _31565__$1 = this;
return (new lab_notebook.core.t31563(self__.app_container,self__.cursor,self__.component,meta31564__$1));
});

lab_notebook.core.t31563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31565){
var self__ = this;
var _31565__$1 = this;
return self__.meta31564;
});

lab_notebook.core.t31563.prototype.om$core$IRender$ = true;

lab_notebook.core.t31563.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"Lab notebook"),React.DOM.button({"className": "btn btn-warning", "onClick": lab_notebook.core.undo},"Undo"),React.DOM.div({"style": {"marginTop": "12px"}},om.core.build.call(null,lab_notebook.core.item_table,self__.cursor)));
});

lab_notebook.core.t31563.cljs$lang$type = true;

lab_notebook.core.t31563.cljs$lang$ctorStr = "lab-notebook.core/t31563";

lab_notebook.core.t31563.cljs$lang$ctorPrWriter = (function (this__18686__auto__,writer__18687__auto__,opt__18688__auto__){
return cljs.core._write.call(null,writer__18687__auto__,"lab-notebook.core/t31563");
});

lab_notebook.core.__GT_t31563 = (function lab_notebook$core$app_container_$___GT_t31563(app_container__$1,cursor__$1,component__$1,meta31564){
return (new lab_notebook.core.t31563(app_container__$1,cursor__$1,component__$1,meta31564));
});

}

return (new lab_notebook.core.t31563(lab_notebook$core$app_container,cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,lab_notebook.core.app_container,lab_notebook.core.appstate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map