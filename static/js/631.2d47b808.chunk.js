"use strict";(self.webpackChunkmoviebe=self.webpackChunkmoviebe||[]).push([[631],{7004:function(e,a,n){n.d(a,{Z:function(){return N}});var t=n(2791),i=n(9434),s=n(7689),r=n(9134),c=n(1413),l=n(4925),o=n(1087),A=n(9439),d=n(1694),h=n.n(d),m=n(1896),g=n(3394),x=n(184),u=function(e){var a=e.id,n=e.title,i=e.year,s=e.plot,r=e.image,c=e.imDbRating,l=e.metacriticRating,d=e.index,u=(0,t.useState)(!1),p=(0,A.Z)(u,2),j=p[0],v=p[1],f=h()({"in-theaters__image_loading":!j}),N=h()("in-theaters__item",{"in-theaters__big":0===d},{"in-theaters__small":1===d},{"in-theaters__small second":2===d}),B=(0,m.Z)(r);return(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("img",{className:"".concat(f),src:B,alt:"in theaters",onLoad:function(){v(!0)}}),j?null:(0,x.jsx)(g.Z,{}),(0,x.jsxs)("div",{className:"in-theaters__info",children:[(0,x.jsx)("h2",{className:"in-theaters__title",children:n}),(0,x.jsx)("div",{className:"in-theaters__year",children:i}),(0,x.jsx)("p",{className:"in-theaters__plot",children:s}),(0,x.jsxs)("div",{className:"in-theaters__ratings",children:[(0,x.jsxs)("div",{className:"in-theaters__ratings-name",children:["IMDB:",(0,x.jsx)("span",{children:c})]}),(0,x.jsxs)("div",{className:"in-theaters__ratings-name",children:["MC:",(0,x.jsx)("span",{children:l})]})]})]}),(0,x.jsx)(o.rU,{to:"/moviebe/".concat(a),children:(0,x.jsx)("button",{className:"btn in-theaters__btn-watch",children:"watch"})})]})},p=n(9950),j=(n(5013),["id"]),v=function(e){var a=e.inTheaters,n=e.inTheatersLoadingStatus;if("loading"===n)return(0,x.jsx)("div",{className:"in-theaters",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h2",{className:"title",children:"In theaters"}),(0,x.jsx)("div",{className:"spinner",children:(0,x.jsx)(g.Z,{})})]})});if("error"===n)return(0,x.jsx)("div",{className:"in-theaters",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h2",{className:"title",children:"In theaters"}),(0,x.jsxs)("div",{className:"error",children:[(0,x.jsx)("img",{src:p,alt:""}),"Error"]})]})});var t=a.map((function(e,a){var n=e.id,t=(0,l.Z)(e,j);if(a<3)return(0,x.jsx)(u,(0,c.Z)({index:a,id:n},t),n)}));return(0,x.jsx)("div",{className:"in-theaters",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsxs)("h2",{className:"title",children:["In theaters ",(0,x.jsx)(o.rU,{to:"/moviebe/intheatre",children:"see more..."})]}),(0,x.jsxs)("div",{className:"in-theaters__wrapper",children:[t,(0,x.jsx)(o.rU,{to:"/moviebe/intheaters",children:(0,x.jsx)("button",{className:"btn in-theaters__btn-link",children:"see more"})})]})]})})},f=n(6636),N=function(){var e=(0,s.TH)().pathname,a=(0,i.v9)((function(e){return e.inTheaters})),n=a.inTheaters,c=a.inTheatersLoadingStatus,l=(0,i.I0)();return(0,t.useEffect)((function(){l((0,r.C)())}),[]),"/moviebe/"===e?(0,x.jsx)(v,{inTheaters:n,inTheatersLoadingStatus:c}):"/moviebe/intheaters"===e?(0,x.jsx)(f.Z,{items:n,inTheatersLoadingStatus:c}):void 0}},1631:function(e,a,n){n.r(a);var t=n(7004),i=n(184);a.default=function(){return(0,i.jsx)(t.Z,{})}},8775:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(9439),i=n(2791),s=n(1087),r=n(1694),c=n.n(r),l=n(1896),o=n(3394),A=n(184),d=function(e){var a=e.title,n=e.year,r=e.image,d=e.id,h=e.imDbRating,m=(0,i.useState)(!1),g=(0,t.Z)(m,2),x=g[0],u=g[1],p=(0,l.Z)(r),j=c()({template__image_loading:!x});return(0,A.jsxs)(s.rU,{to:"/moviebe/".concat(d),onClick:function(){console.log(a,n,d)},children:[(0,A.jsxs)("div",{className:"template__image",children:[(0,A.jsx)("img",{className:"".concat(j),src:p,alt:"movies",onLoad:function(){u(!0)}}),(0,A.jsx)("button",{className:"template__image__btn",children:"watch"}),(0,A.jsxs)("div",{className:"template__image__rating",children:["IMDB: ",(0,A.jsx)("span",{children:h})]}),x?null:(0,A.jsx)(o.Z,{}),(0,A.jsx)("div",{className:"template__image_overlay ".concat(j)})]}),(0,A.jsx)("h2",{className:"template__title",children:a}),(0,A.jsx)("div",{className:"template__year",children:n})]})}},6636:function(e,a,n){n.d(a,{Z:function(){return x}});var t=n(9439),i=n(1413),s=n(4925),r=n(2791),c=n(6048),l=n.n(c),o=n(8775),A=n(3394),d=n(9950),h=n(184),m=["id"],g=function(e){var a=e.currentItems,n=a.map((function(e,a){var n=e.id,t=(0,s.Z)(e,m);if(a<=50)return(0,h.jsx)("div",{className:"template__item",children:(0,h.jsx)(o.Z,(0,i.Z)((0,i.Z)({},t),{},{id:n}))},n)}));return(0,h.jsx)("div",{className:"template-page__wrapper",children:n})},x=function(e){var a=e.items,n=e.loadingStatus,i=(0,r.useState)([]),s=(0,t.Z)(i,2),c=s[0],o=s[1],m=(0,r.useState)(0),x=(0,t.Z)(m,2),u=x[0],p=x[1],j=(0,r.useState)(0),v=(0,t.Z)(j,2),f=v[0],N=v[1];if((0,r.useEffect)((function(){B()}),[a]),(0,r.useEffect)((function(){B(),window.scrollTo(0,0)}),[f,48]),"loading"===n)return(0,h.jsx)("div",{className:"spinner spinner-page",children:(0,h.jsx)(A.Z,{})});if("error"===n)return(0,h.jsxs)("div",{className:"error error-page",children:[(0,h.jsx)("img",{src:d,alt:""}),"Error"]});var B=function(){var e=f+48;o(a.slice(f,e)),p(Math.ceil(a.length/48))};return(0,h.jsx)("div",{className:"template-page",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(g,{currentItems:c}),(0,h.jsx)("div",{className:"template-page__pagination-wrapper",children:(0,h.jsx)(l(),{nextLabel:">",onPageChange:function(e){var n=48*e.selected%a.length;N(n)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:u,previousLabel:"<",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"page-item_active",renderOnZeroPageCount:null})})]})})}},1896:function(e,a){a.Z=function(e){var a=e.indexOf("._");return"".concat(e.slice(0,a),"._V1_Ratio0.6716_AL_.jpg")}},9950:function(e){e.exports="data:image/png;base64,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"},4925:function(e,a,n){function t(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(a,{Z:function(){return t}})}}]);
//# sourceMappingURL=631.2d47b808.chunk.js.map