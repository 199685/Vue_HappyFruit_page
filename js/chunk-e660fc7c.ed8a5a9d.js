(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e660fc7c"],{"0a49":function(t,e,a){var i=a("9b43"),n=a("626a"),s=a("4bf8"),r=a("9def"),o=a("cd1c");t.exports=function(t,e){var a=1==t,c=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d,h=e||o;return function(e,o,p){for(var v,g,m=s(e),P=n(m),b=i(o,p,3),w=r(P.length),D=0,C=a?h(e,w):c?h(e,0):void 0;w>D;D++)if((f||D in P)&&(v=P[D],g=b(v,D,m),t))if(a)C[D]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return D;case 2:C.push(v)}else if(l)return!1;return d?-1:u||l?l:C}}},1169:function(t,e,a){var i=a("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"20d6":function(t,e,a){"use strict";var i=a("5ca1"),n=a("0a49")(6),s="findIndex",r=!0;s in[]&&Array(1)[s]((function(){r=!1})),i(i.P+i.F*r,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(s)},"2f21":function(t,e,a){"use strict";var i=a("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"2fdb":function(t,e,a){"use strict";var i=a("5ca1"),n=a("d2c8"),s="includes";i(i.P+i.F*a("5147")(s),"String",{includes:function(t){return!!~n(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,a){var i=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[i]=!1,!"/./"[t](e)}catch(n){}}return!0}},"55dd":function(t,e,a){"use strict";var i=a("5ca1"),n=a("d8e8"),s=a("4bf8"),r=a("79e5"),o=[].sort,c=[1,2,3];i(i.P+i.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!a("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),n(t))}})},"61fb":function(t,e,a){"use strict";a("b73d")},6762:function(t,e,a){"use strict";var i=a("5ca1"),n=a("c366")(!0);i(i.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"81b1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"row mb-xl-5"},[a("div",{staticClass:"col-lg-3"},[a("ProductsNavbar",{attrs:{select:t.select},on:{touchKind:t.touchKind}})],1),a("div",{staticClass:"col-lg-9 mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],staticClass:"sort text-c1 mb-3 py-1",attrs:{name:"sortProducts",id:"sortProducts"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sort=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:"default"}},[t._v("商品排序")]),a("option",{attrs:{value:"hight"}},[t._v("價格由高至低")]),a("option",{attrs:{value:"low"}},[t._v("價格由低至高")])]),a("TopProducts",{staticClass:"row",attrs:{TopProductsData:t.TopProductsData}})],1)])]),a("Carticon")],1)},n=[],s=(a("55dd"),a("bb6d")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"fruit-item pl-0 text-center"},[a("li",{staticClass:"list-style-none"},[a("a",{staticClass:"fruit p-3 d-block h6 m-0",class:{active:"all"===t.select},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.touchKind("all")}}},[t._v("全部")])]),a("li",{staticClass:"list-style-none"},[a("a",{staticClass:"fruit p-3 d-block h6 m-0",class:{active:"spring"===t.select},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.touchKind("spring")}}},[t._v("春季水果")])]),a("li",{staticClass:"list-style-none"},[a("a",{staticClass:"fruit p-3 d-block h6 m-0",class:{active:"summer"===t.select},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.touchKind("summer")}}},[t._v("夏季水果")])]),a("li",{staticClass:"list-style-none"},[a("a",{staticClass:"fruit p-3 d-block h6 m-0",class:{active:"autumn"===t.select},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.touchKind("autumn")}}},[t._v("秋季水果")])]),a("li",{staticClass:"list-style-none"},[a("a",{staticClass:"fruit p-3 d-block h6 m-0",class:{active:"winter"===t.select},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.touchKind("winter")}}},[t._v("冬季水果")])])])])},o=[],c={props:["select"],methods:{touchKind:function(t){var e=t,a=this;a.beforeSelect!==e&&(a.$store.commit("UPDATELOADING",!0),a.$emit("touchKind",e),setTimeout((function(){a.$store.commit("UPDATELOADING",!1)}),500))}},computed:{beforeSelect:function(){return this.select}}},u=c,l=a("2877"),d=Object(l["a"])(u,r,o,!1,null,"488ae6a1",null),f=d.exports,h=a("e155"),p={data:function(){return{cartsNumber:0,cartsID:[],select:"all",sort:"default"}},components:{Carticon:s["a"],ProductsNavbar:f,TopProducts:h["a"]},computed:{TopProductsData:function(){var t={className:{"col-md-6":!0,"col-lg-6":!0,"col-xl-4":!0,"mb-3":!0},howFilter:[this.select,this.sort,"page"],openPagination:!0};return t}},methods:{touchKind:function(t){var e=t;this.select=e},Top:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},mounted:function(){this.Top()},watch:{sort:function(){var t=this;this.$store.commit("UPDATELOADING",!0),setTimeout((function(){t.$store.commit("UPDATELOADING",!1)}),500)}}},v=p,g=(a("61fb"),Object(l["a"])(v,i,n,!1,null,"29b0d9a8",null));e["default"]=g.exports},a701:function(t,e,a){"use strict";a("e8d2")},aae3:function(t,e,a){var i=a("d3f4"),n=a("2d95"),s=a("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},b73d:function(t,e,a){},bb6d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"cart-icon position-fixed"},[a("p",{directives:[{name:"show",rawName:"v-show",value:t.carts,expression:"carts"}],staticClass:"pointer h5 cart-bg m-0"},[a("router-link",{attrs:{to:{path:"/shoppingcart"}}},[a("i",{staticClass:"fas fa-shopping-cart position-relative shopping-cart"},[a("span",{staticClass:"position-absolute h8 circle text-light fw-700"},[t._v("\n            "+t._s(t.carts)+"\n          ")])])])],1),a("p",{staticClass:"pointer topiocn-size text-center m-0"},[a("i",{staticClass:"fas fa-arrow-circle-up hide",on:{click:function(e){return t.Top()}}})])])])},n=[],s={data:function(){return{changebar:!1}},methods:{Top:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},addhide:function(){var t=document.querySelector(".cart-icon"),e=document.querySelector(".fa-arrow-circle-up");window.pageYOffset>t.offsetTop/2?e.classList.remove("hide"):e.classList.add("hide")}},mounted:function(){window.addEventListener("scroll",this.addhide)},beforeDestroy:function(){window.removeEventListener("scroll",this.addhide)},computed:{carts:function(){return this.$store.getters.cartsNumber}}},r=s,o=(a("a701"),a("2877")),c=Object(o["a"])(r,i,n,!1,null,"d3caf730",null);e["a"]=c.exports},cb77:function(t,e,a){"use strict";a("dd80")},cd1c:function(t,e,a){var i=a("e853");t.exports=function(t,e){return new(i(t))(e)}},d2c8:function(t,e,a){var i=a("aae3"),n=a("be13");t.exports=function(t,e,a){if(i(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(t))}},dd80:function(t,e,a){},e155:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("title"),t._l(t.productsFilter,(function(e){return a("div",{key:e.id,class:t.TopProductsData.className},[a("div",{staticClass:"topProducts pb-2",staticStyle:{background:"white"}},[a("router-link",{staticClass:"topProducts-link",attrs:{to:{name:"ProductDetail",params:{productId:e.id}}},nativeOn:{click:function(e){return t.changeproductsID()}}},[a("div",{staticClass:"topProducts"},[t.productsFilter?a("img",{staticClass:"img-fluid",attrs:{src:e.imageUrl,alt:"水果"}}):t._e()]),a("h4",{staticClass:"topProducts-name h8 p-2 text-c1 fw-700 mb-0"},[t._v(t._s(e.title))])]),a("div",{staticClass:"px-2"},[a("div",{staticClass:"d-flex align-items-center justify-content-between mb-1"},[a("small",{staticClass:"text-line-through d-block pt-1"},[t._v("原價"+t._s(e.origin_price||t.currency))]),a("i",{staticClass:"far fa-heart d-inline-block h6 pointer mb-0 p-2 heart-icon",class:{heartStyle:t.favourite.includes(e.id)},on:{click:function(a){return t.addFavourite(e)}}})]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("strong",{staticClass:"h7 text-c4 mb-0"},[t._v("特價"+t._s(e.price||t.currency))]),a("p",{staticClass:"mb-0 p-1 radius-1\n            pointer touch-shopping-icon",on:{click:function(a){return t.addCart(e)}}},[a("i",{staticClass:"fas fa-shopping-cart d-inline-block pr-1"}),t._v("加入購物車\n          ")])])])],1)])})),t.TopProductsData.openPagination?a("ProductsPagination",{attrs:{PaginationData:t.pageData},on:{"pagination-event":t.changePage}}):t._e()],2)},n=[],s=(a("55dd"),a("20d6"),a("6762"),a("2fdb"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-flex justify-content-center"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("div",{staticClass:"loading-blue"},[a("div",{staticClass:"ldio-loading"},[a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")])])])]),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination mt-xl-5"},[a("li",{staticClass:"page-item",class:{disabled:1===t.PaginationData.nowPage}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("reduce")}}},[t._v("上一頁")])]),t._l(t.PaginationData.allPage,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.PaginationData.nowPage===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.PaginationData.nowPage===t.PaginationData.allPage}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("add")}}},[t._v("下一頁")])])],2)])],1)}),r=[],o={data:function(){return{isLoading:!1}},props:["PaginationData"],methods:{changePage:function(t){var e=this.PaginationData.nowPage;switch(t){case"add":var a=this.PaginationData.nowPage<this.PaginationData.allPage;a&&(this.PaginationData.nowPage+=1,this.isLoading=!0,this.Top());break;case"reduce":var i=this.PaginationData.nowPage>1;i&&(this.PaginationData.nowPage-=1,this.isLoading=!0,this.Top());break;default:this.PaginationData.nowPage=parseInt(t,10),e!==this.PaginationData.nowPage&&(this.isLoading=!0,this.Top());break}this.$emit("pagination-event",this.PaginationData.nowPage)},Top:function(){var t=this;window.scrollTo({top:0,left:0}),setTimeout((function(){t.isLoading=!1}),500)}},mounted:function(){}},c=o,u=(a("cb77"),a("2877")),l=Object(u["a"])(c,s,r,!1,null,"c1622070",null),d=l.exports,f={data:function(){return{quantityValue:1,completefilter:[],season:"",page:{nowPage:1,allPage:1},favouriteID:[]}},components:{ProductsPagination:d},props:["TopProductsData"],computed:{productsFilter:function(){var t=this,e=[];return this.TopProductsData.howFilter.forEach((function(a){switch(a){case"random":e=t.randomproducts();break;case"all":case"spring":case"summer":case"autumn":case"winter":t.seasonFilter(a);break;case"default":case"low":case"hight":t.sortFilter(a);break;case"page":e=t.pageCount();break;case"favourite":e=t.favouriteProducts;break;default:return""}return""})),e},pageData:function(){var t={nowPage:this.page.nowPage,allPage:this.page.allPage};return t},products:function(){return this.$store.state.products},favourite:function(){return this.favouriteID},favouriteProducts:function(){var t=this;return this.products.filter((function(e){return t.favourite.includes(e.id)}))},alert:function(){return this.$store.state.alert},cartsID:function(){return this.$store.getters.cartsID}},methods:{alertDisplay:function(t,e){var a=t,i=e;this.$dlg.toast(a,{messageType:i,closeTime:2,position:"topCenter",language:"en"})},getProducts:function(){this.$store.dispatch("getProducts")},getFavourite:function(){this.favouriteID=JSON.parse(localStorage.getItem("Favourite"))||[],this.$store.commit("FAVOURITE",this.favouriteID.length)},addFavourite:function(t){var e=this.favouriteID.indexOf(t.id);e>-1?(this.favouriteID.splice(e,1),this.alertDisplay("".concat(t.title,"已移除我的最愛"),"warning")):(this.favouriteID.push(t.id),this.alertDisplay("".concat(t.title,"已加入我的最愛"),"info")),localStorage.setItem("Favourite",JSON.stringify(this.favouriteID)),this.getFavourite()},addCart:function(t){if(this.$store.state.run){var e=this;e.$store.commit("RUN",!1);var a=parseInt(this.quantityValue,10),i=e.cartsID.map((function(t){return t.productID})),n=i.findIndex((function(e){return e===t.id})),s={product_id:t.id,qty:a};n>=0?(a+=parseInt(e.cartsID[n].qty,10),s.qty=a,e.removeProduct(e.cartsID[n].id).then((function(){e.$store.dispatch("addCart",{Newproduct:s,alert:["".concat(t.title,"已加入購物車"),"info"]})}))):e.$store.dispatch("addCart",{Newproduct:s,alert:["".concat(t.title,"已加入購物車"),"info"]}),e.quantityValue=1}},removeProduct:function(t){var e=this;return e.$store.dispatch("removeProduct",t)},randomproducts:function(){if(this.products.length)while(this.completefilter.length<this.TopProductsData.randomCount){var t=Math.floor(Math.random()*Math.floor(this.products.length)),e=this.completefilter.map((function(t){return t.id})),a=e.includes(this.products[t].id);a||this.completefilter.push(this.products[t])}return this.completefilter},seasonFilter:function(t){var e=this,a=JSON.parse(JSON.stringify(this.products));this.season=t,"all"===this.season?this.completefilter=a:this.completefilter=a.filter((function(t){return t.season.includes(e.season)})),this.pageCount()},sortFilter:function(t){switch(t){case"hight":this.completefilter.sort((function(t,e){return e.price-t.price}));break;case"low":this.completefilter.sort((function(t,e){return t.price-e.price}));break;case"default":this.seasonFilter(this.season);break;default:return""}return this.pageCount(),""},changePage:function(t){this.page.nowPage=t},pageCount:function(){this.page.allPage=Math.ceil(this.completefilter.length/6);var t=6*this.page.nowPage,e=t-6;t>this.completefilter.length&&(t=this.completefilter.length);var a=[];for(e;e<t;e+=1)a.push(this.completefilter[e]);return a},Top:function(){window.scrollTo({top:0,left:0})},changeproductsID:function(){this.$emit("getcarts-event","changeProductID")},getCarts:function(){this.$store.dispatch("getCarts")}},created:function(){this.getProducts(),this.getFavourite(),this.getCarts()},watch:{season:function(){this.page.nowPage=1},alert:function(){this.alertDisplay(this.alert[0],this.alert[1])}},mounted:function(){}},h=f,p=Object(u["a"])(h,i,n,!1,null,"78eb58b2",null);e["a"]=p.exports},e853:function(t,e,a){var i=a("d3f4"),n=a("1169"),s=a("2b4c")("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)||(e=void 0),i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}},e8d2:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e660fc7c.ed8a5a9d.js.map