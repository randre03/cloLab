// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27827_27839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27828_27840 = null;
var count__27829_27841 = (0);
var i__27830_27842 = (0);
while(true){
if((i__27830_27842 < count__27829_27841)){
var f_27843 = cljs.core._nth.call(null,chunk__27828_27840,i__27830_27842);
cljs.core.println.call(null,"  ",f_27843);

var G__27844 = seq__27827_27839;
var G__27845 = chunk__27828_27840;
var G__27846 = count__27829_27841;
var G__27847 = (i__27830_27842 + (1));
seq__27827_27839 = G__27844;
chunk__27828_27840 = G__27845;
count__27829_27841 = G__27846;
i__27830_27842 = G__27847;
continue;
} else {
var temp__4425__auto___27848 = cljs.core.seq.call(null,seq__27827_27839);
if(temp__4425__auto___27848){
var seq__27827_27849__$1 = temp__4425__auto___27848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27827_27849__$1)){
var c__18892__auto___27850 = cljs.core.chunk_first.call(null,seq__27827_27849__$1);
var G__27851 = cljs.core.chunk_rest.call(null,seq__27827_27849__$1);
var G__27852 = c__18892__auto___27850;
var G__27853 = cljs.core.count.call(null,c__18892__auto___27850);
var G__27854 = (0);
seq__27827_27839 = G__27851;
chunk__27828_27840 = G__27852;
count__27829_27841 = G__27853;
i__27830_27842 = G__27854;
continue;
} else {
var f_27855 = cljs.core.first.call(null,seq__27827_27849__$1);
cljs.core.println.call(null,"  ",f_27855);

var G__27856 = cljs.core.next.call(null,seq__27827_27849__$1);
var G__27857 = null;
var G__27858 = (0);
var G__27859 = (0);
seq__27827_27839 = G__27856;
chunk__27828_27840 = G__27857;
count__27829_27841 = G__27858;
i__27830_27842 = G__27859;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18107__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18107__auto__)){
return or__18107__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27831 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27832 = null;
var count__27833 = (0);
var i__27834 = (0);
while(true){
if((i__27834 < count__27833)){
var vec__27835 = cljs.core._nth.call(null,chunk__27832,i__27834);
var name = cljs.core.nth.call(null,vec__27835,(0),null);
var map__27836 = cljs.core.nth.call(null,vec__27835,(1),null);
var map__27836__$1 = ((cljs.core.seq_QMARK_.call(null,map__27836))?cljs.core.apply.call(null,cljs.core.hash_map,map__27836):map__27836);
var doc = cljs.core.get.call(null,map__27836__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27836__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27860 = seq__27831;
var G__27861 = chunk__27832;
var G__27862 = count__27833;
var G__27863 = (i__27834 + (1));
seq__27831 = G__27860;
chunk__27832 = G__27861;
count__27833 = G__27862;
i__27834 = G__27863;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27831);
if(temp__4425__auto__){
var seq__27831__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27831__$1)){
var c__18892__auto__ = cljs.core.chunk_first.call(null,seq__27831__$1);
var G__27864 = cljs.core.chunk_rest.call(null,seq__27831__$1);
var G__27865 = c__18892__auto__;
var G__27866 = cljs.core.count.call(null,c__18892__auto__);
var G__27867 = (0);
seq__27831 = G__27864;
chunk__27832 = G__27865;
count__27833 = G__27866;
i__27834 = G__27867;
continue;
} else {
var vec__27837 = cljs.core.first.call(null,seq__27831__$1);
var name = cljs.core.nth.call(null,vec__27837,(0),null);
var map__27838 = cljs.core.nth.call(null,vec__27837,(1),null);
var map__27838__$1 = ((cljs.core.seq_QMARK_.call(null,map__27838))?cljs.core.apply.call(null,cljs.core.hash_map,map__27838):map__27838);
var doc = cljs.core.get.call(null,map__27838__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27838__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27868 = cljs.core.next.call(null,seq__27831__$1);
var G__27869 = null;
var G__27870 = (0);
var G__27871 = (0);
seq__27831 = G__27868;
chunk__27832 = G__27869;
count__27833 = G__27870;
i__27834 = G__27871;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map