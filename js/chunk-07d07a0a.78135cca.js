(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07d07a0a"],{"3a8b":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[a("div",{staticClass:"loading-blue"},[a("div",{staticClass:"ldio-loading"},[a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")]),a("div",[a("div")])])])]),a("div",{staticClass:"container my-4"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-11 boder-db"},[a("nav",{staticClass:"pl-0",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb pl-0 mb-0"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"Index"}}},[t._v("\n                首頁\n              ")])],1),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"ShoppingCart"}}},[t._v("\n                購物車\n              ")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("結帳確認")])])]),a("div",{staticClass:"container-75 pt-5"},[t._m(0),t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"accordion",attrs:{id:"accordionExample"}}),a("div",{staticClass:"card pb-1"},[a("div",{staticClass:"card-header d-sm-flex justify-content-between py-1",attrs:{id:"headingOne"}},[t._m(2),a("h2",{staticClass:"mb-0 pl-3 pl-sm-0 d-flex font-1 align-items-center"},[a("p",{staticClass:"d-inline-block mb-0 pr-3"},[t._v("應付金額")]),t._v("\n                    "+t._s(t._f("currency")(t.order.total||0))+"\n                  ")])]),a("div",{staticClass:"collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[a("div",{staticClass:"shopping-table"},[a("table",{staticClass:"table"},[t._m(3),t._l(t.products,(function(s){return a("tr",{key:s.id},[a("td",{staticClass:"table-img"},[a("img",{staticClass:"img-fluid",attrs:{src:s.product.imageUrl,alt:s.product.title}})]),a("td",[t._v(t._s(s.product.title))]),a("td",{staticClass:"text-center"},[t._v(t._s(s.qty)+t._s(s.product.unit))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(s.total||0)))])])})),t._m(4),a("tr",[a("th",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("優惠折抵")]),a("th",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.couponsmoney||0)))])]),a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("合計")]),a("th",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total||0)))])])],2)])])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"p-4 boder-db mt-3 mt-md-0 shopping-table"},[a("table",{staticClass:"table"},[a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v("付款方式")]),a("td",[t._v(t._s(t.order.user.paymethod))])]),a("tr",[a("th",[t._v("付款狀態")]),a("th",{directives:[{name:"show",rawName:"v-show",value:t.order.is_paid,expression:"order.is_paid"}],staticClass:"text-c1"},[t._v("完成付款")]),a("td",{directives:[{name:"show",rawName:"v-show",value:!t.order.is_paid,expression:"!order.is_paid"}],staticClass:"text-danger"},[t._v("尚未付款")])])])])])]),a("div",{staticClass:"text-right my-2"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.order.is_paid,expression:"!order.is_paid"}],staticClass:"btn new-btn new-btn-order2",attrs:{type:"button"},on:{click:function(s){return t.pay()}}},[t._v("\n              確認付款\n            ")]),a("router-link",{attrs:{to:{name:"Index"}}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.order.is_paid,expression:"order.is_paid"}],staticClass:"btn new-btn new-btn-index mr-2",attrs:{type:"button"}},[t._v("\n                回首頁\n              ")])]),a("router-link",{attrs:{to:{name:"Products"}}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.order.is_paid,expression:"order.is_paid"}],staticClass:"btn new-btn new-btn-buy",attrs:{type:"button"}},[t._v("\n                繼續購買\n              ")])])],1)])])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"timeline timeline-color-100 position-relative mb-5"},[a("div",{staticClass:"timepoint position-relative timepoint-color"},[a("i",{staticClass:"far fa-sticky-note"})]),a("div",{staticClass:"timepoint position-relative timepoint-color"},[a("i",{staticClass:"fas fa-edit"})]),a("div",{staticClass:"timepoint position-relative timepoint-color"},[a("i",{staticClass:"fas fa-truck"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"line-name d-flex justify-content-between"},[a("p",{staticClass:"text-c1 w-1 pt-1"},[t._v("確認購買")]),a("p",{staticClass:"text-c1 w-1 pt-1"},[t._v("填寫資料")]),a("p",{staticClass:"text-c1 w-1 pt-1"},[t._v("完成訂單")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link btn-block text-left",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                      顯示訂單資訊"),a("i",{staticClass:"fas fa-angle-down ml-1 text-c1"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("th",{staticClass:"text-center",attrs:{scope:"col",colspan:"2"}},[t._v("商品名稱")]),a("th",{staticClass:"text-center",attrs:{scope:"col",width:"150"}},[t._v("數量")]),a("th",{attrs:{scope:"col",width:"200"}},[t._v("小計")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("th",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("運費")]),a("th",{staticClass:"text-right"},[t._v("$0")])])}],r=(a("456d"),a("ac6a"),{data:function(){return{isLoading:!1,orderId:"",order:{user:{name:""}},products:[]}},computed:{couponsmoney:function(){var t=this.order.total,s=0;return this.products.forEach((function(t){s+=t.total})),s-t}},methods:{getorder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/order/").concat(this.orderId);t.isLoading=!0,t.$http.get(s).then((function(s){t.order=s.data.order,t.isLoading=!1;var a=Object.keys(t.order.products);a.forEach((function(s){t.products.push(t.order.products[s])}))}))},pay:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("chi","/pay/").concat(this.OrderId);t.isLoading=!0,t.$http.post(s).then((function(){t.order.is_paid=!0,t.isLoading=!1,t.alertDisplay("付款成功","success")}))},alertDisplay:function(t,s){var a=t,e=s;this.$dlg.toast(a,{messageType:e,closeTime:2,position:"topCenter",language:"en"})}},created:function(){this.orderId=this.$route.params.orderId,this.getorder()}}),n=r,o=(a("ba29"),a("2877")),c=Object(o["a"])(n,e,i,!1,null,"8f3e28f4",null);s["default"]=c.exports},8425:function(t,s,a){},ba29:function(t,s,a){"use strict";a("8425")}}]);
//# sourceMappingURL=chunk-07d07a0a.78135cca.js.map