(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2285)}])},6770:function(e,r,i){"use strict";i.d(r,{Z:function(){return m}});var a=i(5893),s=i(3590),l=i(1664),c=i.n(l),n=i(9332),t=()=>{let e=(0,n.usePathname)();return(0,a.jsx)("nav",{className:"col-span-12 py-4 flex border-b border-solid border-gray-300 handy-nav",children:(0,a.jsxs)("ul",{className:"flex",children:[(0,a.jsx)("li",{className:"pr-10",children:(0,a.jsx)(c(),{className:"ml-6 ".concat("/"===e?"active":""),href:"/",children:"همه"})}),(0,a.jsx)("li",{children:(0,a.jsx)(c(),{className:"ml-6 ".concat("/Burger"===e?"active":""),href:"/Burger",children:"برگر مخصوص"})}),(0,a.jsx)("li",{children:(0,a.jsx)(c(),{className:"ml-6 ".concat("/Barbecue"===e?"active":""),href:"/Barbecue",children:"کباب"})}),(0,a.jsx)("li",{children:(0,a.jsx)(c(),{className:"ml-6 ".concat("/Appetizer"===e?"active":""),href:"/Appetizer",children:"پیش غذا"})}),(0,a.jsx)("li",{children:(0,a.jsx)(c(),{className:"ml-6 ".concat("/Dessert"===e?"active":""),href:"/Dessert",children:"دسر"})}),(0,a.jsx)("li",{children:(0,a.jsx)(c(),{className:"ml-6 ".concat("/Beverages"===e?"active":""),href:"/Beverages",children:"نوشیدنی"})})]})})},o=i(7929),d=i(1758);function m(e){let{children:r}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-12 container mx-auto",children:[(0,a.jsxs)("div",{className:"md:col-span-8 lg:col-span-9 col-span-12 grid grid-cols-12",children:[(0,a.jsx)("div",{className:"col-span-12 py-4 flex border-b border-solid border-gray-300 dis-none",children:(0,a.jsxs)("div",{className:"pr-10",children:[(0,a.jsx)("span",{className:"special ml-5 cursor-pointer",children:"منو"}),(0,a.jsx)("span",{className:"cursor-pointer",children:"درباره ما"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)("div",{className:"col-span-12 grid grid-cols-12 pro-bg box-border lg:pr-10 overflow-auto",children:r})]}),(0,a.jsx)(o.Z,{mainDiv:"dis-none md:col-span-4 lg:col-span-3 2xl:col-span-3 text-center md:border md:border-solid md:border-gray-300 md:border-t-0 md:border-b-0 relative",totalAmountDiv:"py-4 border-t border-solid border-gray-300"})]}),(0,a.jsx)(d.Z,{})]})]})}},5558:function(e,r,i){"use strict";i.d(r,{Z:function(){return m}});var a=i(5893),s=i(5007),l=i(1490),c=i(7294),n=()=>(0,a.jsx)("div",{children:(0,a.jsx)("svg",{fill:"none",height:"22",viewBox:"0 0 22 22",width:"22",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("rect",{fill:"var(--mainOrange)",height:"10",rx:"1",transform:"rotate(90 16 10)",width:"2",x:"16",y:"10"})})}),t=()=>(0,a.jsx)("div",{children:(0,a.jsxs)("svg",{fill:"none",height:"22",viewBox:"0 0 18 27",width:"22",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("rect",{fill:"var(--mainOrange)",height:"11.8182",rx:"1.18182",width:"2.36364",x:"11.8182",y:"7.09094"}),(0,a.jsx)("rect",{fill:"var(--mainOrange)",height:"11.8182",rx:"1.18182",transform:"rotate(90 18.9091 11.8182)",width:"2.36364",x:"18.9091",y:"11.8182"})]})}),o=i(5698),d=e=>{let{id:r,name:i,image:d,detail:m,price:g}=e.items,[f,p]=(0,c.useState)(0),h=(0,s.I0)();return(0,a.jsx)("div",{className:"md:col-span-6 col-span-12 2xl:col-span-4 lg:mt-5 mr-5 mt-5 r-handy md:mx-3 box-border lg:h-40",children:(0,a.jsxs)("div",{className:"grid grid-cols-12 bg-white py-2 shadow-md rounded-xl lg:h-36 lg:w-80 box-border md:pr-3 relative",children:[(0,a.jsx)("div",{className:"col-span-4 lg:col-span-3 lg:w-20 lg:h-20 mt-5 w-24 h-24 md:w-28 md:my-2 lg:mt-5 md:mr-2 mx-auto product-img",children:(0,a.jsx)("img",{src:d,className:"rounded-xl",alt:"prodcut-image"})}),(0,a.jsxs)("div",{className:"col-span-8 md:col-span-12 lg:col-span-9 md:pr-2 product-info lg:mr-4 mt-5 ml-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"font-semibold cursor-pointer",children:i}),(0,a.jsx)("p",{className:"font-light text-gray-400 text-sm mt-2 truncate pro-detail",children:m})]}),(0,a.jsxs)("div",{className:"flex justify-between mt-5",children:[(0,a.jsxs)("span",{className:"text-sm w-24 special",children:[(0,o.T)(g)," تومان"]}),(0,a.jsxs)("div",{className:"overflow-hidden flex add-cart-box justify-between ml-1 ".concat(0===f?"":"addWidth"),children:[(0,a.jsx)("button",{className:"plus cursor-pointer",onClick:()=>{h(l.W.addToCart({id:r,name:i,image:d,detail:m,price:g})),p(f+1)},children:(0,a.jsx)(t,{})}),(0,a.jsx)("input",{className:"",value:f,onChange:e=>{p(e.target.value)}}),(0,a.jsx)("button",{className:"minus cursor-pointer",onClick:()=>{h(l.W.removeFromCart(r)),p(f-1)},children:(0,a.jsx)(n,{})})]})]})]})]})})},m=e=>{let{products:r}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"col-span-12 grid grid-cols-12 ",children:r.map(e=>(0,a.jsx)(d,{items:e},e.id))})})}},8888:function(e,r,i){"use strict";var a=i(5893),s=i(9008),l=i.n(s);r.Z=e=>(0,a.jsx)("div",{children:(0,a.jsx)(l(),{children:(0,a.jsx)("title",{children:e.title})})})},2285:function(e,r,i){"use strict";i.r(r);var a=i(5893),s=i(5558),l=i(6770),c=i(4618),n=i(8888);r.default=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Z,{title:"گشنیز"}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(s.Z,{products:c})})]})},9008:function(e,r,i){e.exports=i(7828)},4618:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"name":"بمب برگر","image":"images/brger.jpg","offPrice":300000,"price":200000,"offSell":"%7","detail":"همبرگر + ژامبون گوشت + ژامبون مرغ + قارچ + سس فرانسوی + نوشابه","category":"Burger"},{"id":2,"name":"کباب نگینی","image":"images/kbbngini.jpg","price":300000,"offPrice":"","offSell":"","detail":" 2 سیخ کوبیده نگینی + 2 سیخ جوجه + ماست + سالاد + نوشابه","category":"Barbecue"},{"id":3,"name":"چلو مرغ","image":"images/morq.jpg","price":250000,"offSell":"","offPrice":"","category":"Barbecue","detail":"2 عدد ران مرغ + 250 گرم سینه مرغ + سالاد + نوشابه + دوغ"},{"id":4,"name":"سینی کباب","image":"images/sinikbb.jpg","price":600000,"offPrice":500000,"category":"Barbecue","offSell":"%15","detail":"6 سیخ کوبیده + 6 سیخ جوجه + 6 گوجه + پیاز + ماست"},{"id":5,"name":"کباب بناب","image":"images/bonab.jpg","price":280000,"offSell":"","category":"Barbecue","offPrice":"","detail":"دو سیخ کباب بناب + دوغ + سالاد + برنج ایرانی تازه + نوشابه + 2 سیخ گوجه"},{"id":6,"name":"فیله مرغ سخاری","image":"images/morqsokhari.jpg","price":310000,"offSell":"","category":"Barbecue","offPrice":"","detail":"5 تکه سینه مرغ سوخاری + سالاد + سبزی"},{"id":7,"name":"مخصوص سر آشپز","image":"images/mkhsoscheaf.jpg","price":370000,"offSell":"","category":"Barbecue","offPrice":"","detail":"سیخ کباب مخصوص سر آشپز + 8 سیخ گوجه + ماست و 8 نوشیدنی رایگان"},{"id":8,"name":"کباب تابه ای","image":"images/tabei.jpg","price":270000,"offPrice":245000,"category":"Barbecue","offSell":"%5","detail":"4 عدد کباب تابه ای + هر کباب 250 گرم گوشت گوسفندی + سس مخصوص سر آشپز"},{"id":9,"name":"سالاد سزار","image":"images/sezar.jpg","price":80000,"offPrice":"","category":"Appetizer","offSell":"","detail":"کاهو + سینه مرغ + قارچ + نون باگت + سس مخصوص"},{"id":10,"name":"کشک و بادمجان","image":"images/kashk-bademjan-photokade-com-1.jpg","price":82000,"offPrice":"","category":"Appetizer","offSell":"","detail":"بادمجان + سیر + پیازداغ + کشک"},{"id":11,"name":"پان اسپانیا","image":"images/pan.jpg","price":60000,"offSell":"","category":"Dessert","offPrice":"","detail":"شیر + گردو + خامه + کره + موز"},{"id":12,"name":"پاناکوتا","image":"images/pomegranate-panna-cotta.jpg","offSell":"","price":40000,"offPrice":"","category":"Dessert","detail":"شیر + خامه + ژلاتین + سس میوه"},{"id":13,"name":"نوشابه خانواده","image":"images/1611832941coca-cola.jpg","price":20000,"offSell":"","category":"Beverages","offPrice":"","detail":"نوشابه 1.5 لیتری خانواده"}]')}},function(e){e.O(0,[664,332,338,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);