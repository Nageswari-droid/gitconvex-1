(this.webpackJsonpgitconvex=this.webpackJsonpgitconvex||[]).push([[399],{490:function(e,t){!function(e){function t(e,t,n){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:n}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(n){var a=e.languages[n],i="language-"+n;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:t("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\w+(?=\s)/,"attr-name":/\w+/}),expression:t("=",a,i),"class-feature":t("\\+",a,i),standard:t("",a,i)}}}}})}(Prism)}}]);
//# sourceMappingURL=399.8933c611.chunk.js.map