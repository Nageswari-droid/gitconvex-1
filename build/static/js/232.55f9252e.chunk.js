(this.webpackJsonpgitconvex=this.webpackJsonpgitconvex||[]).push([[232],{310:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(o>=r.length);u++){var g=i[u];if("string"==typeof g||g.content&&"string"==typeof g.content){var s=r[o],p=t.tokenStack[s],l="string"==typeof g?g:g.content,f=n(a,s),k=l.indexOf(f);if(-1<k){++o;var h=l.substring(0,k),v=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),m=l.substring(k+f.length),d=[];h&&d.push.apply(d,c([h])),d.push(v),m&&d.push.apply(d,c([m])),"string"==typeof g?i.splice.apply(i,[u,1].concat(d)):g.content=d}}else g.content&&c(g.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=232.55f9252e.chunk.js.map