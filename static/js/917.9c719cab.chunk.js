"use strict";(self.webpackChunkmoviebe=self.webpackChunkmoviebe||[]).push([[917],{5415:function(e,a,i){i.r(a);var n=i(7452),s=i(184);a.default=function(){return(0,s.jsx)(n.Z,{})}},7452:function(e,a,i){var n=i(2791),s=i(9434),t=i(7689),r=i(9832),c=i(8621),l=i(6636),A=i(184);a.Z=function(){var e=(0,t.TH)().pathname,a=(0,s.v9)((function(e){return e.series})),i=a.series,o=a.seriesLoadingStatus,m=(0,s.I0)();return(0,n.useEffect)((function(){m((0,r.A)())}),[]),"/moviebe/"===e?(0,A.jsx)(c.Z,{data:i,title:"Series",loadingStatus:o,linkPage:"/moviebe/series"}):"/moviebe/series"===e?(0,A.jsx)(l.Z,{items:i,loadingStatus:o}):void 0}},8775:function(e,a,i){i.d(a,{Z:function(){return m}});var n=i(9439),s=i(2791),t=i(1694),r=i.n(t),c=i(1896),l=i(3394),A=i(1087),o=i(184),m=function(e){var a=e.title,i=e.year,t=e.image,m=e.id,d=(0,s.useState)(!1),g=(0,n.Z)(d,2),p=g[0],h=g[1],u=(0,c.Z)(t),x=r()({template__image_loading:!p});return(0,o.jsxs)(A.rU,{to:"/moviebe/".concat(m),onClick:function(){console.log(a,i,m)},children:[(0,o.jsxs)("div",{className:"template__image",children:[(0,o.jsx)("img",{className:"".concat(x),src:u,alt:"movies",onLoad:function(){h(!0)}}),(0,o.jsx)("button",{className:"template__image__btn",children:"watch"}),p?null:(0,o.jsx)(l.Z,{}),(0,o.jsx)("div",{className:"template__image_overlay ".concat(x)})]}),(0,o.jsx)("h2",{className:"template__title",children:a}),(0,o.jsxs)("div",{className:"template__year",children:["(",i,")"]})]})}},8621:function(e,a,i){i.d(a,{Z:function(){return g}});var n=i(1413),s=i(4925),t=i(8775),r=i(1087),c=i(8563),l=i(1281),A=i(3394),o=i(9950),m=(i(4676),i(184)),d=["id"],g=function(e){var a=e.data,i=e.title,g=e.loadingStatus,p=e.linkPage;if("loading"===g)return(0,m.jsx)("div",{className:"template-swiper",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h2",{className:"title",children:i}),(0,m.jsx)("div",{className:"spinner",children:(0,m.jsx)(A.Z,{})})]})});if("error"===g)return(0,m.jsx)("div",{className:"template-swiper",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h2",{className:"title",children:i}),(0,m.jsx)("div",{className:"eror",children:(0,m.jsx)("img",{src:o,alt:""})})]})});var h=a.map((function(e,a){var i=e.id,r=(0,s.Z)(e,d);if(a<=30)return(0,m.jsx)(c.o5,{className:"template__item",children:(0,m.jsx)(t.Z,(0,n.Z)((0,n.Z)({},r),{},{id:i}))},i)}));return(0,m.jsx)("div",{className:"template-swiper",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("h2",{className:"title",children:[i," ",(0,m.jsx)(r.rU,{to:p,children:"see more..."})]}),(0,m.jsx)(c.tq,{modules:[l.W_,l.Gk,l.N1],pagination:{clickable:!0},slidesPerView:6,spaceBetween:15,navigation:!0,mousewheel:!0,keyboard:!0,className:"mySwiper",children:h})]})})}},6636:function(e,a,i){i.d(a,{Z:function(){return h}});var n=i(9439),s=i(1413),t=i(4925),r=i(2791),c=i(6048),l=i.n(c),A=i(8775),o=i(3394),m=i(9950),d=i(184),g=["id"],p=function(e){var a=e.currentItems,i=a.map((function(e,a){var i=e.id,n=(0,t.Z)(e,g);if(a<=50)return(0,d.jsx)("div",{className:"template__item",children:(0,d.jsx)(A.Z,(0,s.Z)((0,s.Z)({},n),{},{id:i}))},i)}));return(0,d.jsx)("div",{className:"template-page__wrapper",children:i})},h=function(e){var a=e.items,i=e.loadingStatus,s=(0,r.useState)([]),t=(0,n.Z)(s,2),c=t[0],A=t[1],g=(0,r.useState)(0),h=(0,n.Z)(g,2),u=h[0],x=h[1],v=(0,r.useState)(0),f=(0,n.Z)(v,2),j=f[0],N=f[1];if((0,r.useEffect)((function(){B()}),[a]),(0,r.useEffect)((function(){B(),window.scrollTo(0,0)}),[j,48]),"loading"===i)return(0,d.jsx)("div",{className:"spinner spinner-page",children:(0,d.jsx)(o.Z,{})});if("error"===i)return(0,d.jsxs)("div",{className:"error error-page",children:[(0,d.jsx)("img",{src:m,alt:""}),"Error"]});var B=function(){var e=j+48;A(a.slice(j,e)),x(Math.ceil(a.length/48))};return(0,d.jsx)("div",{className:"template-page",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(p,{currentItems:c}),(0,d.jsx)("div",{className:"template-page__pagination-wrapper",children:(0,d.jsx)(l(),{nextLabel:">",onPageChange:function(e){var i=48*e.selected%a.length;N(i)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:u,previousLabel:"<",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"page-item_active",renderOnZeroPageCount:null})})]})})}},1896:function(e,a){a.Z=function(e){var a=e.indexOf("._");return"".concat(e.slice(0,a),"._V1_Ratio0.6716_AL_.jpg")}},9950:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=917.9c719cab.chunk.js.map