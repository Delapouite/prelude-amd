(function(){function n(n,r){var t,e=function(i){return n.length>1?function(){var u=i?i.concat():[];return t=r?t||this:this,u.push.apply(u,arguments)<n.length&&arguments.length?e.call(t,u):n.apply(t,u)}:n};return e()}function r(n,r){for(var t=-1,e=r.length>>>0;++t<e;)if(n===r[t])return!0;return!1}function t(n){return!n}var e={}.toString,i=[].slice;define(function(){var u,o,a,c,f,l,s,h,p;return u=function(){var r,t,e,i,u;return r=n(function(n,r){return n.apply(null,r)}),t=function(r){return n(r)},e=n(function(n,r,t){return n(t,r)}),i=function(n){return function(r){return function(){return n(r(r)).apply(null,arguments)}}(function(r){return function(){return n(r(r)).apply(null,arguments)}})},u=n(function(n,r,t,e){return n(r(t),r(e))}),{curry:t,flip:e,fix:i,apply:r,over:u}}(),o=function(){var u,o,a,c,f,l,s,h,p,v,g,d,m,y,b,j,M,x,z,W,k,B,I,A,L,q,T,w,N,O,C,P,S,Z,U,E,F,R,V,_,D,G,H,J,K,Q,X,Y,$,nr,rr,tr,er,ir,ur,or,ar,cr,fr,lr,sr,hr,pr,vr,gr,dr,mr,yr,br;return u=n(function(n,r){var t,e,i;for(t=0,e=r.length;e>t;++t)i=r[t],n(i);return r}),o=n(function(n,r){var t,e,i,u=[];for(t=0,e=r.length;e>t;++t)i=r[t],u.push(n(i));return u}),a=function(n){var r,t,e,i=[];for(r=0,t=n.length;t>r;++r)e=n[r],e&&i.push(e);return i},c=n(function(n,r){var t,e,i,u=[];for(t=0,e=r.length;e>t;++t)i=r[t],n(i)&&u.push(i);return u}),f=n(function(n,r){var t,e,i,u=[];for(t=0,e=r.length;e>t;++t)i=r[t],n(i)||u.push(i);return u}),l=n(function(n,r){var t,e,i,u,o;for(t=[],e=[],i=0,u=r.length;u>i;++i)o=r[i],(n(o)?t:e).push(o);return[t,e]}),s=n(function(n,r){var t,e,i;for(t=0,e=r.length;e>t;++t)if(i=r[t],n(i))return i}),h=p=function(n){return n[0]},v=function(n){return n.length?n.slice(1):void 0},g=function(n){return n[n.length-1]},d=function(n){return n.length?n.slice(0,-1):void 0},m=function(n){return!n.length},y=function(n){return n.concat().reverse()},b=function(n){var t,e,i,u;for(t=[],e=0,i=n.length;i>e;++e)u=n[e],r(u,t)||t.push(u);return t},j=function(n,t){var e,i,u,o,a,c=[];for(e=[],i=0,u=t.length;u>i;++i)o=t[i],a=n(o),r(a,e)||(e.push(a),c.push(o));return c},M=x=n(function(n,r,t){var e,i,u;for(e=0,i=t.length;i>e;++e)u=t[e],r=n(r,u);return r}),z=W=n(function(n,r){return M(n,r[0],r.slice(1))}),k=n(function(n,r,t){var e,i;for(e=t.length-1;e>=0;--e)i=t[e],r=n(i,r);return r}),B=n(function(n,r){return k(n,r[r.length-1],r.slice(0,-1))}),I=n(function(n,r){var t,e,i;for(t=[],e=r;null!=(i=n(e));)t.push(i[0]),e=i[1];return t}),A=function(n){return[].concat.apply([],n)},L=n(function(n,r){var t;return[].concat.apply([],function(){var e,i,u,o=[];for(e=0,u=(i=r).length;u>e;++e)t=i[e],o.push(n(t));return o}())}),q=function(n){var r;return[].concat.apply([],function(){var t,i,u,o=[];for(t=0,u=(i=n).length;u>t;++t)r=i[t],o.push("Array"===e.call(r).slice(8,-1)?q(r):r);return o}())},T=function(n){var t,e,u,o,a,c,f,l;t=i.call(arguments,1),e=[];n:for(u=0,o=n.length;o>u;++u){for(a=n[u],c=0,f=t.length;f>c;++c)if(l=t[c],r(a,l))continue n;e.push(a)}return e},w=function(n){var t,e,u,o,a,c,f,l;t=i.call(arguments,1),e=[];n:for(u=0,o=n.length;o>u;++u){for(a=n[u],c=0,f=t.length;f>c;++c)if(l=t[c],!r(a,l))continue n;e.push(a)}return e},N=function(){var n,t,e,u,o,a,c,f;for(n=i.call(arguments),t=[],e=0,u=n.length;u>e;++e)for(o=n[e],a=0,c=o.length;c>a;++a)f=o[a],r(f,t)||t.push(f);return t},O=n(function(n,r){var t,e,i,u,o;for(t={},e=0,i=r.length;i>e;++e)u=r[e],o=n(u),o in t?t[o]+=1:t[o]=1;return t}),C=n(function(n,r){var t,e,i,u,o;for(t={},e=0,i=r.length;i>e;++e)u=r[e],o=n(u),o in t?t[o].push(u):t[o]=[u];return t}),P=function(n){var r,t,e;for(r=0,t=n.length;t>r;++r)if(e=n[r],!e)return!1;return!0},S=function(n){var r,t,e;for(r=0,t=n.length;t>r;++r)if(e=n[r])return!0;return!1},Z=n(function(n,r){var t,e,i;for(t=0,e=r.length;e>t;++t)if(i=r[t],n(i))return!0;return!1}),U=n(function(n,r){var t,e,i;for(t=0,e=r.length;e>t;++t)if(i=r[t],!n(i))return!1;return!0}),E=function(n){return n.concat().sort(function(n,r){return n>r?1:r>n?-1:0})},F=n(function(n,r){return r.concat().sort(n)}),R=n(function(n,r){return r.concat().sort(function(r,t){return n(r)>n(t)?1:n(r)<n(t)?-1:0})}),V=function(n){var r,t,e,i;for(r=0,t=0,e=n.length;e>t;++t)i=n[t],r+=i;return r},_=function(n){var r,t,e,i;for(r=1,t=0,e=n.length;e>t;++t)i=n[t],r*=i;return r},D=G=function(n){var r,t,e,i;for(r=0,t=0,e=n.length;e>t;++t)i=n[t],r+=i;return r/n.length},H=function(n){var r,t,e,i,u;for(r=n[0],t=0,i=(e=n.slice(1)).length;i>t;++t)u=e[t],u>r&&(r=u);return r},J=function(n){var r,t,e,i,u;for(r=n[0],t=0,i=(e=n.slice(1)).length;i>t;++t)u=e[t],r>u&&(r=u);return r},K=n(function(n,r){var t,e,i,u,o;for(t=r[0],e=0,u=(i=r.slice(1)).length;u>e;++e)o=i[e],n(o)>n(t)&&(t=o);return t}),Q=function(n,r){var t,e,i,u,o;for(t=r[0],e=0,u=(i=r.slice(1)).length;u>e;++e)o=i[e],n(o)<n(t)&&(t=o);return t},X=Y=n(function(n,r,t){var e,i;return e=r,[r].concat(function(){var r,u,o,a=[];for(r=0,o=(u=t).length;o>r;++r)i=u[r],a.push(e=n(e,i));return a}())}),$=nr=n(function(n,r){return r.length?X(n,r[0],r.slice(1)):void 0}),rr=n(function(n,r,t){return t=t.concat().reverse(),X(n,r,t).reverse()}),tr=n(function(n,r){return r.length?(r=r.concat().reverse(),X(n,r[0],r.slice(1)).reverse()):void 0}),er=n(function(n,r,t){return t.slice(n,r)}),ir=n(function(n,r){return 0>=n?r.slice(0,0):r.slice(0,n)}),ur=n(function(n,r){return 0>=n?r:r.slice(n)}),or=n(function(n,r){return[ir(n,r),ur(n,r)]}),ar=n(function(n,r){var t,e;if(t=r.length,!t)return r;for(e=0;t>e&&n(r[e]);)e+=1;return r.slice(0,e)}),cr=n(function(n,r){var t,e;if(t=r.length,!t)return r;for(e=0;t>e&&n(r[e]);)e+=1;return r.slice(e)}),fr=n(function(n,r){return[ar(n,r),cr(n,r)]}),lr=n(function(n,r){return fr(function(){return t(n.apply(this,arguments))},r)}),sr=n(function(n,r){var t,e,i,u,o,a;for(t=[],e=r.length,i=0,u=n.length;u>i&&(o=i,a=n[i],o!==e);++i)t.push([a,r[o]]);return t}),hr=n(function(n,r,t){var e,i,u,o,a,c;for(e=[],i=t.length,u=0,o=r.length;o>u&&(a=u,c=r[u],a!==i);++u)e.push(n(c,t[a]));return e}),pr=function(){var n,r,t,e,u,o,a,c,f,l=[];for(n=i.call(arguments),r=9e9,t=0,e=n.length;e>t;++t)u=n[t],r<=(o=u.length)||(r=o);for(t=0;r>t;++t){for(a=t,c=[],f=0,e=n.length;e>f;++f)u=n[f],c.push(u[a]);l.push(c)}return l},vr=function(n){function r(){var n,r,e,i=[];for(n=0,e=(r=t).length;e>n;++n)a=r[n],i.push(a[f]);return i}var t,e,u,o,a,c,f,l=[];for(t=i.call(arguments,1),e=9e9,u=0,o=t.length;o>u;++u)a=t[u],e<=(c=a.length)||(e=c);for(u=0;e>u;++u)f=u,l.push(n.apply(null,r()));return l},gr=n(function(n,r){return 0>n?r[r.length+n]:r[n]}),dr=n(function(n,r){var t,e,i,u;for(t=0,e=r.length;e>t;++t)if(i=t,u=r[t],u===n)return i}),mr=n(function(n,r){var t,e,i,u,o=[];for(t=0,e=r.length;e>t;++t)i=t,u=r[t],u===n&&o.push(i);return o}),yr=n(function(n,r){var t,e,i,u;for(t=0,e=r.length;e>t;++t)if(i=t,u=r[t],n(u))return i}),br=n(function(n,r){var t,e,i,u,o=[];for(t=0,e=r.length;e>t;++t)i=t,u=r[t],n(u)&&o.push(i);return o}),{each:u,map:o,filter:c,compact:a,reject:f,partition:l,find:s,head:h,first:p,tail:v,last:g,initial:d,empty:m,reverse:y,difference:T,intersection:w,union:N,countBy:O,groupBy:C,fold:M,fold1:z,foldl:x,foldl1:W,foldr:k,foldr1:B,unfoldr:I,andList:P,orList:S,any:Z,all:U,unique:b,uniqueBy:j,sort:E,sortWith:F,sortBy:R,sum:V,product:_,mean:D,average:G,concat:A,concatMap:L,flatten:q,maximum:H,minimum:J,maximumBy:K,minimumBy:Q,scan:X,scan1:$,scanl:Y,scanl1:nr,scanr:rr,scanr1:tr,slice:er,take:ir,drop:ur,splitAt:or,takeWhile:ar,dropWhile:cr,span:fr,breakList:lr,zip:sr,zipWith:hr,zipAll:pr,zipAllWith:vr,at:gr,elemIndex:dr,elemIndices:mr,findIndex:yr,findIndices:br}}(),a=function(){var r,t,e,i,u,o,a,c,f,l,s,h,p,v,g,d,m,y,b,j,M,x,z,W,k,B,I,A,L,q,T,w;return r=n(function(n,r){return n>r?n:r}),t=n(function(n,r){return r>n?n:r}),e=function(n){return-n},i=Math.abs,u=function(n){return 0>n?-1:n>0?1:0},o=n(function(n,r){return~~(n/r)}),a=n(function(n,r){return n%r}),c=n(function(n,r){return Math.floor(n/r)}),f=n(function(n,r){var t;return(n%(t=r)+t)%t}),l=function(n){return 1/n},s=Math.PI,h=2*s,p=Math.exp,v=Math.sqrt,g=Math.log,d=n(function(n,r){return Math.pow(n,r)}),m=Math.sin,y=Math.tan,b=Math.cos,j=Math.asin,M=Math.acos,x=Math.atan,z=n(function(n,r){return Math.atan2(n,r)}),W=function(n){return~~n},k=Math.round,B=Math.ceil,I=Math.floor,A=function(n){return n!==n},L=function(n){return n%2===0},q=function(n){return n%2!==0},T=n(function(n,r){var t;for(n=Math.abs(n),r=Math.abs(r);0!==r;)t=n%r,n=r,r=t;return n}),w=n(function(n,r){return Math.abs(Math.floor(n/T(n,r)*r))}),{max:r,min:t,negate:e,abs:i,signum:u,quot:o,rem:a,div:c,mod:f,recip:l,pi:s,tau:h,exp:p,sqrt:v,ln:g,pow:d,sin:m,tan:y,cos:b,acos:M,asin:j,atan:x,atan2:z,truncate:W,round:k,ceiling:B,floor:I,isItNaN:A,even:L,odd:q,gcd:T,lcm:w}}(),c=function(){var r,t,e,i,u,o,a,c,f,l,s,h,p,v;return r=function(n){var r,t,e=[];for(r in n)t=n[r],e.push(t);return e},t=function(n){var r,t=[];for(r in n)t.push(r);return t},e=function(n){var r,t,e,i={};for(r=0,t=n.length;t>r;++r)e=n[r],i[e[0]]=e[1];return i},i=function(n){var r,t,e=[];for(r in n)t=n[r],e.push([r,t]);return e},u=n(function(n,r){var t,e,i,u,o={};for(t=0,e=n.length;e>t;++t)i=t,u=n[t],o[u]=r[i];return o}),o=function(n){var r,t,e,i;r=[],t=[];for(e in n)i=n[e],r.push(e),t.push(i);return[r,t]},a=function(n){var r;for(r in n)return!1;return!0},c=n(function(n,r){var t,e;for(t in r)e=r[t],n(e,t);return r}),f=n(function(n,r){var t,e,i={};for(t in r)e=r[t],i[t]=n(e,t);return i}),l=function(n){var r,t,e={};for(r in n)t=n[r],t&&(e[r]=t);return e},s=n(function(n,r){var t,e,i={};for(t in r)e=r[t],n(e,t)&&(i[t]=e);return i}),h=n(function(n,r){var t,e,i={};for(t in r)e=r[t],n(e,t)||(i[t]=e);return i}),p=n(function(n,r){var t,e,i,u;t={},e={};for(i in r)u=r[i],(n(u,i)?t:e)[i]=u;return[t,e]}),v=n(function(n,r){var t,e;for(t in r)if(e=r[t],n(e))return e}),{values:r,keys:t,pairsToObj:e,objToPairs:i,listsToObj:u,objToLists:o,empty:a,each:c,map:f,filter:s,compact:l,reject:h,partition:p,find:v}}(),f=function(){var r,t,e,i,u,o,a,c,f,l,s,h,p;return r=n(function(n,r){return r.split(n)}),t=n(function(n,r){return r.join(n)}),e=function(n){return n.length?n.split("\n"):[]},i=function(n){return n.join("\n")},u=function(n){return n.length?n.split(/[ ]+/):[]},o=function(n){return n.join(" ")},a=function(n){return n.split("")},c=function(n){return n.join("")},f=function(n){return n.split("").reverse().join("")},l=n(function(n,r){var t,e;for(t="",e=0;n>e;++e)t+=r;return t}),s=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},h=function(n){return n.replace(/[-_]+(.)?/g,function(n,r){return(null!=r?r:"").toUpperCase()})},p=function(n){return n.replace(/([^-A-Z])([A-Z]+)/g,function(n,r,t){return r+"-"+(t.length>1?t:t.toLowerCase())}).replace(/^([A-Z]+)/,function(n,r){return r.length>1?r+"-":r.toLowerCase()})},{split:r,join:t,lines:e,unlines:i,words:u,unwords:o,chars:a,unchars:c,reverse:f,repeat:l,capitalize:s,camelize:h,dasherize:p}}(),l=function(n){return n},s=n(function(n,r){return e.call(r).slice(8,-1)===n}),h=n(function(n,r){var t,e=[];for(t=0;n>t;++t)e.push(r);return e}),f.empty=o.empty,f.slice=o.slice,f.take=o.take,f.drop=o.drop,f.splitAt=o.splitAt,f.takeWhile=o.takeWhile,f.dropWhile=o.dropWhile,f.span=o.span,f.breakStr=o.breakList,p={Func:u,List:o,Obj:c,Str:f,Num:a,id:l,isType:s,replicate:h},p.each=o.each,p.map=o.map,p.filter=o.filter,p.compact=o.compact,p.reject=o.reject,p.partition=o.partition,p.find=o.find,p.head=o.head,p.first=o.first,p.tail=o.tail,p.last=o.last,p.initial=o.initial,p.empty=o.empty,p.reverse=o.reverse,p.difference=o.difference,p.intersection=o.intersection,p.union=o.union,p.countBy=o.countBy,p.groupBy=o.groupBy,p.fold=o.fold,p.foldl=o.foldl,p.fold1=o.fold1,p.foldl1=o.foldl1,p.foldr=o.foldr,p.foldr1=o.foldr1,p.unfoldr=o.unfoldr,p.andList=o.andList,p.orList=o.orList,p.any=o.any,p.all=o.all,p.unique=o.unique,p.uniqueBy=o.uniqueBy,p.sort=o.sort,p.sortWith=o.sortWith,p.sortBy=o.sortBy,p.sum=o.sum,p.product=o.product,p.mean=o.mean,p.average=o.average,p.concat=o.concat,p.concatMap=o.concatMap,p.flatten=o.flatten,p.maximum=o.maximum,p.minimum=o.minimum,p.maximumBy=o.maximumBy,p.minimumBy=o.minimumBy,p.scan=o.scan,p.scanl=o.scanl,p.scan1=o.scan1,p.scanl1=o.scanl1,p.scanr=o.scanr,p.scanr1=o.scanr1,p.slice=o.slice,p.take=o.take,p.drop=o.drop,p.splitAt=o.splitAt,p.takeWhile=o.takeWhile,p.dropWhile=o.dropWhile,p.span=o.span,p.breakList=o.breakList,p.zip=o.zip,p.zipWith=o.zipWith,p.zipAll=o.zipAll,p.zipAllWith=o.zipAllWith,p.at=o.at,p.elemIndex=o.elemIndex,p.elemIndices=o.elemIndices,p.findIndex=o.findIndex,p.findIndices=o.findIndices,p.apply=u.apply,p.curry=u.curry,p.flip=u.flip,p.fix=u.fix,p.over=u.over,p.split=f.split,p.join=f.join,p.lines=f.lines,p.unlines=f.unlines,p.words=f.words,p.unwords=f.unwords,p.chars=f.chars,p.unchars=f.unchars,p.repeat=f.repeat,p.capitalize=f.capitalize,p.camelize=f.camelize,p.dasherize=f.dasherize,p.values=c.values,p.keys=c.keys,p.pairsToObj=c.pairsToObj,p.objToPairs=c.objToPairs,p.listsToObj=c.listsToObj,p.objToLists=c.objToLists,p.max=a.max,p.min=a.min,p.negate=a.negate,p.abs=a.abs,p.signum=a.signum,p.quot=a.quot,p.rem=a.rem,p.div=a.div,p.mod=a.mod,p.recip=a.recip,p.pi=a.pi,p.tau=a.tau,p.exp=a.exp,p.sqrt=a.sqrt,p.ln=a.ln,p.pow=a.pow,p.sin=a.sin,p.tan=a.tan,p.cos=a.cos,p.acos=a.acos,p.asin=a.asin,p.atan=a.atan,p.atan2=a.atan2,p.truncate=a.truncate,p.round=a.round,p.ceiling=a.ceiling,p.floor=a.floor,p.isItNaN=a.isItNaN,p.even=a.even,p.odd=a.odd,p.gcd=a.gcd,p.lcm=a.lcm,p.VERSION="1.1.0",p})}).call(this);