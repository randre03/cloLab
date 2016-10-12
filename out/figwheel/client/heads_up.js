// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19147__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19147__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27584_27592 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27585_27593 = null;
var count__27586_27594 = (0);
var i__27587_27595 = (0);
while(true){
if((i__27587_27595 < count__27586_27594)){
var k_27596 = cljs.core._nth.call(null,chunk__27585_27593,i__27587_27595);
e.setAttribute(cljs.core.name.call(null,k_27596),cljs.core.get.call(null,attrs,k_27596));

var G__27597 = seq__27584_27592;
var G__27598 = chunk__27585_27593;
var G__27599 = count__27586_27594;
var G__27600 = (i__27587_27595 + (1));
seq__27584_27592 = G__27597;
chunk__27585_27593 = G__27598;
count__27586_27594 = G__27599;
i__27587_27595 = G__27600;
continue;
} else {
var temp__4425__auto___27601 = cljs.core.seq.call(null,seq__27584_27592);
if(temp__4425__auto___27601){
var seq__27584_27602__$1 = temp__4425__auto___27601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27584_27602__$1)){
var c__18892__auto___27603 = cljs.core.chunk_first.call(null,seq__27584_27602__$1);
var G__27604 = cljs.core.chunk_rest.call(null,seq__27584_27602__$1);
var G__27605 = c__18892__auto___27603;
var G__27606 = cljs.core.count.call(null,c__18892__auto___27603);
var G__27607 = (0);
seq__27584_27592 = G__27604;
chunk__27585_27593 = G__27605;
count__27586_27594 = G__27606;
i__27587_27595 = G__27607;
continue;
} else {
var k_27608 = cljs.core.first.call(null,seq__27584_27602__$1);
e.setAttribute(cljs.core.name.call(null,k_27608),cljs.core.get.call(null,attrs,k_27608));

var G__27609 = cljs.core.next.call(null,seq__27584_27602__$1);
var G__27610 = null;
var G__27611 = (0);
var G__27612 = (0);
seq__27584_27592 = G__27609;
chunk__27585_27593 = G__27610;
count__27586_27594 = G__27611;
i__27587_27595 = G__27612;
continue;
}
} else {
}
}
break;
}

var seq__27588_27613 = cljs.core.seq.call(null,children);
var chunk__27589_27614 = null;
var count__27590_27615 = (0);
var i__27591_27616 = (0);
while(true){
if((i__27591_27616 < count__27590_27615)){
var ch_27617 = cljs.core._nth.call(null,chunk__27589_27614,i__27591_27616);
e.appendChild(ch_27617);

var G__27618 = seq__27588_27613;
var G__27619 = chunk__27589_27614;
var G__27620 = count__27590_27615;
var G__27621 = (i__27591_27616 + (1));
seq__27588_27613 = G__27618;
chunk__27589_27614 = G__27619;
count__27590_27615 = G__27620;
i__27591_27616 = G__27621;
continue;
} else {
var temp__4425__auto___27622 = cljs.core.seq.call(null,seq__27588_27613);
if(temp__4425__auto___27622){
var seq__27588_27623__$1 = temp__4425__auto___27622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27588_27623__$1)){
var c__18892__auto___27624 = cljs.core.chunk_first.call(null,seq__27588_27623__$1);
var G__27625 = cljs.core.chunk_rest.call(null,seq__27588_27623__$1);
var G__27626 = c__18892__auto___27624;
var G__27627 = cljs.core.count.call(null,c__18892__auto___27624);
var G__27628 = (0);
seq__27588_27613 = G__27625;
chunk__27589_27614 = G__27626;
count__27590_27615 = G__27627;
i__27591_27616 = G__27628;
continue;
} else {
var ch_27629 = cljs.core.first.call(null,seq__27588_27623__$1);
e.appendChild(ch_27629);

var G__27630 = cljs.core.next.call(null,seq__27588_27623__$1);
var G__27631 = null;
var G__27632 = (0);
var G__27633 = (0);
seq__27588_27613 = G__27630;
chunk__27589_27614 = G__27631;
count__27590_27615 = G__27632;
i__27591_27616 = G__27633;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27581){
var G__27582 = cljs.core.first.call(null,seq27581);
var seq27581__$1 = cljs.core.next.call(null,seq27581);
var G__27583 = cljs.core.first.call(null,seq27581__$1);
var seq27581__$2 = cljs.core.next.call(null,seq27581__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27582,G__27583,seq27581__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19006__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19002__auto__,prefer_table__19003__auto__,method_cache__19004__auto__,cached_hierarchy__19005__auto__,hierarchy__19006__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19002__auto__,prefer_table__19003__auto__,method_cache__19004__auto__,cached_hierarchy__19005__auto__,hierarchy__19006__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19006__auto__,method_table__19002__auto__,prefer_table__19003__auto__,method_cache__19004__auto__,cached_hierarchy__19005__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27634 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27634.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27634.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_27634.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27634);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27635,st_map){
var map__27639 = p__27635;
var map__27639__$1 = ((cljs.core.seq_QMARK_.call(null,map__27639))?cljs.core.apply.call(null,cljs.core.hash_map,map__27639):map__27639);
var container_el = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27639,map__27639__$1,container_el){
return (function (p__27640){
var vec__27641 = p__27640;
var k = cljs.core.nth.call(null,vec__27641,(0),null);
var v = cljs.core.nth.call(null,vec__27641,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27639,map__27639__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27642,dom_str){
var map__27644 = p__27642;
var map__27644__$1 = ((cljs.core.seq_QMARK_.call(null,map__27644))?cljs.core.apply.call(null,cljs.core.hash_map,map__27644):map__27644);
var c = map__27644__$1;
var content_area_el = cljs.core.get.call(null,map__27644__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27645){
var map__27647 = p__27645;
var map__27647__$1 = ((cljs.core.seq_QMARK_.call(null,map__27647))?cljs.core.apply.call(null,cljs.core.hash_map,map__27647):map__27647);
var content_area_el = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (1))){
var inst_27674 = (state_27689[(7)]);
var inst_27674__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27675 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27676 = ["10px","10px","100%","68px","1.0"];
var inst_27677 = cljs.core.PersistentHashMap.fromArrays(inst_27675,inst_27676);
var inst_27678 = cljs.core.merge.call(null,inst_27677,style);
var inst_27679 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27674__$1,inst_27678);
var inst_27680 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27674__$1,msg);
var inst_27681 = cljs.core.async.timeout.call(null,(300));
var state_27689__$1 = (function (){var statearr_27691 = state_27689;
(statearr_27691[(7)] = inst_27674__$1);

(statearr_27691[(8)] = inst_27679);

(statearr_27691[(9)] = inst_27680);

return statearr_27691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(2),inst_27681);
} else {
if((state_val_27690 === (2))){
var inst_27674 = (state_27689[(7)]);
var inst_27683 = (state_27689[(2)]);
var inst_27684 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27685 = ["auto"];
var inst_27686 = cljs.core.PersistentHashMap.fromArrays(inst_27684,inst_27685);
var inst_27687 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27674,inst_27686);
var state_27689__$1 = (function (){var statearr_27692 = state_27689;
(statearr_27692[(10)] = inst_27683);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
return null;
}
}
});})(c__23191__auto__))
;
return ((function (switch__23129__auto__,c__23191__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto____0 = (function (){
var statearr_27696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27696[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto__);

(statearr_27696[(1)] = (1));

return statearr_27696;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto____1 = (function (state_27689){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e27697){if((e27697 instanceof Object)){
var ex__23133__auto__ = e27697;
var statearr_27698_27700 = state_27689;
(statearr_27698_27700[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27701 = state_27689;
state_27689 = G__27701;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__))
})();
var state__23193__auto__ = (function (){var statearr_27699 = f__23192__auto__.call(null);
(statearr_27699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_27699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__))
);

return c__23191__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27703 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27703,(0),null);
var ln = cljs.core.nth.call(null,vec__27703,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27706 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27706,(0),null);
var file_line = cljs.core.nth.call(null,vec__27706,(1),null);
var file_column = cljs.core.nth.call(null,vec__27706,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27706,file_name,file_line,file_column){
return (function (p1__27704_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__27704_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__27706,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18107__auto__ = file_line;
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
var and__18095__auto__ = cause;
if(cljs.core.truth_(and__18095__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18095__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27708 = figwheel.client.heads_up.ensure_container.call(null);
var map__27708__$1 = ((cljs.core.seq_QMARK_.call(null,map__27708))?cljs.core.apply.call(null,cljs.core.hash_map,map__27708):map__27708);
var content_area_el = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__){
return (function (state_27755){
var state_val_27756 = (state_27755[(1)]);
if((state_val_27756 === (1))){
var inst_27738 = (state_27755[(7)]);
var inst_27738__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27739 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27740 = ["0.0"];
var inst_27741 = cljs.core.PersistentHashMap.fromArrays(inst_27739,inst_27740);
var inst_27742 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27738__$1,inst_27741);
var inst_27743 = cljs.core.async.timeout.call(null,(300));
var state_27755__$1 = (function (){var statearr_27757 = state_27755;
(statearr_27757[(7)] = inst_27738__$1);

(statearr_27757[(8)] = inst_27742);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27755__$1,(2),inst_27743);
} else {
if((state_val_27756 === (2))){
var inst_27738 = (state_27755[(7)]);
var inst_27745 = (state_27755[(2)]);
var inst_27746 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27747 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27748 = cljs.core.PersistentHashMap.fromArrays(inst_27746,inst_27747);
var inst_27749 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27738,inst_27748);
var inst_27750 = cljs.core.async.timeout.call(null,(200));
var state_27755__$1 = (function (){var statearr_27758 = state_27755;
(statearr_27758[(9)] = inst_27745);

(statearr_27758[(10)] = inst_27749);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27755__$1,(3),inst_27750);
} else {
if((state_val_27756 === (3))){
var inst_27738 = (state_27755[(7)]);
var inst_27752 = (state_27755[(2)]);
var inst_27753 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27738,"");
var state_27755__$1 = (function (){var statearr_27759 = state_27755;
(statearr_27759[(11)] = inst_27752);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27755__$1,inst_27753);
} else {
return null;
}
}
}
});})(c__23191__auto__))
;
return ((function (switch__23129__auto__,c__23191__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23130__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23130__auto____0 = (function (){
var statearr_27763 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27763[(0)] = figwheel$client$heads_up$clear_$_state_machine__23130__auto__);

(statearr_27763[(1)] = (1));

return statearr_27763;
});
var figwheel$client$heads_up$clear_$_state_machine__23130__auto____1 = (function (state_27755){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_27755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e27764){if((e27764 instanceof Object)){
var ex__23133__auto__ = e27764;
var statearr_27765_27767 = state_27755;
(statearr_27765_27767[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27768 = state_27755;
state_27755 = G__27768;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23130__auto__ = function(state_27755){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23130__auto____1.call(this,state_27755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23130__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23130__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__))
})();
var state__23193__auto__ = (function (){var statearr_27766 = f__23192__auto__.call(null);
(statearr_27766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_27766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__))
);

return c__23191__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23191__auto__){
return (function (){
var f__23192__auto__ = (function (){var switch__23129__auto__ = ((function (c__23191__auto__){
return (function (state_27800){
var state_val_27801 = (state_27800[(1)]);
if((state_val_27801 === (1))){
var inst_27790 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(2),inst_27790);
} else {
if((state_val_27801 === (2))){
var inst_27792 = (state_27800[(2)]);
var inst_27793 = cljs.core.async.timeout.call(null,(400));
var state_27800__$1 = (function (){var statearr_27802 = state_27800;
(statearr_27802[(7)] = inst_27792);

return statearr_27802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(3),inst_27793);
} else {
if((state_val_27801 === (3))){
var inst_27795 = (state_27800[(2)]);
var inst_27796 = figwheel.client.heads_up.clear.call(null);
var state_27800__$1 = (function (){var statearr_27803 = state_27800;
(statearr_27803[(8)] = inst_27795);

return statearr_27803;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(4),inst_27796);
} else {
if((state_val_27801 === (4))){
var inst_27798 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27800__$1,inst_27798);
} else {
return null;
}
}
}
}
});})(c__23191__auto__))
;
return ((function (switch__23129__auto__,c__23191__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto____0 = (function (){
var statearr_27807 = [null,null,null,null,null,null,null,null,null];
(statearr_27807[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto__);

(statearr_27807[(1)] = (1));

return statearr_27807;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto____1 = (function (state_27800){
while(true){
var ret_value__23131__auto__ = (function (){try{while(true){
var result__23132__auto__ = switch__23129__auto__.call(null,state_27800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23132__auto__;
}
break;
}
}catch (e27808){if((e27808 instanceof Object)){
var ex__23133__auto__ = e27808;
var statearr_27809_27811 = state_27800;
(statearr_27809_27811[(5)] = ex__23133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27812 = state_27800;
state_27800 = G__27812;
continue;
} else {
return ret_value__23131__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto__ = function(state_27800){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto____1.call(this,state_27800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23130__auto__;
})()
;})(switch__23129__auto__,c__23191__auto__))
})();
var state__23193__auto__ = (function (){var statearr_27810 = f__23192__auto__.call(null);
(statearr_27810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23191__auto__);

return statearr_27810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23193__auto__);
});})(c__23191__auto__))
);

return c__23191__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map