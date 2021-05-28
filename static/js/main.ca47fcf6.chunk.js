(this["webpackJsonpreact-weblog"]=this["webpackJsonpreact-weblog"]||[]).push([[0],{60:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(13),a=c.n(s),l=c(3),i=c(8),o=c(30),r=c.n(o),d=c(80),u=c(16),j=Object(u.b)({name:"user",initialState:{isSignedIn:!1,userData:null,searchInput:"tech",blogData:null},reducers:{setSignedIn:function(e,t){e.isSignedIn=t.payload},setUserData:function(e,t){e.userData=t.payload},setInput:function(e,t){e.searchInput=t.payload},setBlogData:function(e,t){e.blogData=t.payload}}}),b=j.actions,h=b.setSignedIn,O=b.setUserData,g=b.setInput,v=b.setBlogData,m=function(e){return e.user.isSignedIn},p=function(e){return e.user.userData},x=function(e){return e.user.searchInput},f=j.reducer,_=(c(60),c(2));function N(){var e,t=Object(l.c)(x),c="https://gnews.io/api/v4/search?q=".concat(t,"&token=").concat("3bc1a0644d3422f7cf7e00cee32a017a"),s=Object(n.useState)([]),a=Object(i.a)(s,2),o=a[0],u=a[1],j=Object(n.useState)(!0),b=Object(i.a)(j,2),h=b[0],O=b[1],g=Object(l.b)();return Object(n.useEffect)((function(){r.a.get(c).then((function(e){g(v(e.data)),u(e.data),O(!1)})).catch((function(e){return console.log(e)}))}),[c,g,t]),Object(_.jsxs)("div",{className:"blog__container",children:[0===(null===o||void 0===o?void 0:o.totalArticles)?"":Object(_.jsxs)("h1",{className:"blog__header",children:[t," News Today"]}),h&&Object(_.jsx)("h3",{className:"loading",children:"Loading..."}),Object(_.jsxs)("div",{className:"blogs",children:[null===o||void 0===o||null===(e=o.articles)||void 0===e?void 0:e.map((function(e){return Object(_.jsxs)("a",{className:"blog",href:e.url,target:"_blank",rel:"noreferrer",children:[Object(_.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.title}),Object(_.jsxs)("div",{className:"blog__content",children:[Object(_.jsxs)("h3",{className:"source-name",children:[Object(_.jsx)("span",{children:e.source.name}),Object(_.jsx)("p",{children:e.publishedAt})]}),Object(_.jsx)("h1",{className:"blog__title",children:e.title}),Object(_.jsx)("p",{className:"blog__description",children:e.description})]})]},Object(d.a)())})),0===(null===o||void 0===o?void 0:o.totalArticles)&&Object(_.jsx)("h1",{className:"no__blogs",children:"No news available \u2639\ufe0e. Try your search again."})]})]})}var S=c(15);c(62);function I(){var e=Object(l.b)(),t=function(t){e(h(!0)),e(O(t.profileObj))},c=Object(l.c)(m);return Object(_.jsx)("div",{className:"home",style:{display:c?"none":""},children:!c&&Object(_.jsxs)("div",{className:"login__message",children:[Object(_.jsx)("h2",{children:"The"}),Object(_.jsxs)("h1",{children:["Sk",Object(_.jsx)("span",{children:"\u29bf\u29bf"}),"p"]}),Object(_.jsx)("p",{children:"To inspire.. EMPOWER.. and educate the world."}),Object(_.jsx)(S.GoogleLogin,{clientId:"811401601178-7707hv93lh1q037dbmdskjjndcut3ufv.apps.googleusercontent.com",render:function(e){return Object(_.jsx)("button",{onClick:e.onClick,disabled:e.disabled,className:"login__button",children:"Login with Google"})},onSuccess:t,onFailure:t,isSignedIn:!0,cookiePolicy:"single_host_origin"})]})})}var k=c(79);c(63);function y(){var e=Object(n.useState)("tech"),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(l.c)(m),o=Object(l.c)(p),r=Object(l.b)();return Object(_.jsxs)("div",{className:"navbar",children:[Object(_.jsx)("h1",{className:"navbar__header",children:"Sk\u29bf\u29bfp"}),a&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"blog__search",children:[Object(_.jsx)("input",{className:"search__input",placeholder:"Search for news",value:c,onChange:function(e){return s(e.target.value)}}),Object(_.jsx)("button",{className:"search-button",onClick:function(e){e.preventDefault(),r(g(c))},children:"Search"})]}),Object(_.jsxs)("div",{className:"navbar__user-data",children:[Object(_.jsx)(k.a,{className:"user",src:null===o||void 0===o?void 0:o.imageUrl,alt:null===o||void 0===o?void 0:o.name}),Object(_.jsx)("h1",{className:"signedIn",children:null===o||void 0===o?void 0:o.givenName}),Object(_.jsx)(S.GoogleLogout,{clientId:"811401601178-7707hv93lh1q037dbmdskjjndcut3ufv.apps.googleusercontent.com",render:function(e){return Object(_.jsx)("button",{className:"logout__button",onClick:e.onClick,disabled:e.disabled,children:"Logout"})},onLogoutSuccess:function(){r(h(!1)),r(O(null))}})]})]})]})}c(64);function w(){var e=Object(l.c)(m);return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(y,{}),Object(_.jsx)(I,{}),e&&Object(_.jsx)(N,{})]})}var D=Object(u.a)({reducer:{user:f}});a.a.render(Object(_.jsx)(l.a,{store:D,children:Object(_.jsx)(w,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ca47fcf6.chunk.js.map