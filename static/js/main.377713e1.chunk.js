(this.webpackJsonppmo=this.webpackJsonppmo||[]).push([[0],{19:function(e,i,a){},29:function(e,i,a){},30:function(e,i,a){},35:function(e,i,a){},43:function(e,i,a){},44:function(e,i,a){},45:function(e,i,a){},50:function(e,i,a){},58:function(e,i,a){},60:function(e,i,a){},61:function(e,i,a){},62:function(e,i,a){},64:function(e,i,a){},65:function(e,i,a){},66:function(e,i,a){},67:function(e,i,a){},68:function(e,i,a){},69:function(e,i,a){},70:function(e,i,a){},71:function(e,i,a){},72:function(e,i,a){},73:function(e,i,a){},74:function(e,i,a){"use strict";a.r(i);var t=a(0),n=a(1),c=a(12),s=a.n(c),o=(a(43),a(29),a(7)),r=(a(19),a(4)),j=a(5),l=(a(44),a(30),a(45),[{title:"Suknie \u015alubne",path:"/weddingDresses",cName:"dropdownLink"},{title:"Suknie Wieczorowe",path:"/eveningDresses",cName:"dropdownLink"}]),d=function(){var e=Object(n.useState)(!1),i=Object(o.a)(e,2),a=i[0],c=i[1],s=Object(n.useState)(""),j=Object(o.a)(s,2),d=j[0],m=j[1],b=Object(n.useState)(""),u=Object(o.a)(b,2),p=u[0],h=u[1];return Object(t.jsx)("div",{className:"dropdownContainer",children:Object(t.jsx)("ul",{className:a?"dropdownMenu open":"dropdownMenu",onClick:function(){return c(!a)},onMouseMove:function(e){m(-.02*e.nativeEvent.clientX+"px"),h(-.02*e.nativeEvent.clientY+"px")},style:{backgroundPositionX:d,backgroundPositionY:p},children:l.map((function(e,i){return Object(t.jsx)("li",{children:Object(t.jsx)(r.b,{className:e.cName,to:e.path,onClick:function(){return c(!1)},children:e.title})},i)}))})})},m=function(e){var i=e.dropdown,a=e.handleDropdown,n=e.onMouseLeave,c=e.onMouseEnter,s=e.handleMouseMove;return Object(t.jsxs)("ul",{className:"headerLinks ",children:[Object(t.jsx)("li",{className:"navItem",children:Object(t.jsx)(r.b,{to:"/aboutUs",className:"navLinks",children:"O'la"})}),Object(t.jsxs)("li",{className:"navItem",onMouseEnter:c,onMouseLeave:n,children:[Object(t.jsxs)(r.b,{to:"/dresses",className:"navLinks",onClick:a,children:["Suknie",Object(t.jsx)("i",{className:"fas fa-caret-down"})]}),i&&Object(t.jsx)(d,{handleMouseMove:s})]}),Object(t.jsx)("li",{className:"navItem",children:Object(t.jsx)(r.b,{to:"/blog",className:"navLinks",children:"Q & A"})}),Object(t.jsx)("li",{className:"navItem",children:Object(t.jsx)(r.b,{to:"/contact",className:"navLinks",children:"Kontakt"})})]})},b=(a(50),a.p+"static/media/logo.58bb3d7a.svg"),u=function(e){var i=e.navbar;return Object(t.jsx)(r.b,{to:"/",children:Object(t.jsxs)("div",{className:i?"logoContainer":"logoContainer activeLogo ",children:[Object(t.jsx)("img",{src:b,alt:"logoSlaskSuknieSlubne"}),Object(t.jsxs)("div",{className:"logoText",children:[Object(t.jsx)("h1",{children:"Pracownia mody "}),Object(t.jsx)("h2",{children:"\u015blubnej i wieczorowej"})]})]})})},p=a(28),h=a.p+"static/media/icon1.e2e7e94c.svg",O=a.p+"static/media/icon2.8922b92a.svg",x=a.p+"static/media/icon3.e8c9916f.svg",w=a.p+"static/media/icon4.5cee3a3d.svg",z=a.p+"static/media/icon5.21034a73.svg",g=a(76),k=[{path:"weddingDressesM",icon:O,iconAlt:"weddingIcon",cName:"second navItem"},{path:"eveningDressesM",icon:x,iconAlt:"eveningIcon",cName:"third navItem"},{path:"blog",icon:w,iconAlt:"blogIcon",cName:"forth navItem"},{path:"contact",icon:z,iconAlt:"contactIcon",cName:"fifth navItem"}],y=function(e){var i=e.navbar;return Object(t.jsx)("nav",{className:i?"headerLinks":"headerLinks activeHeader",children:Object(t.jsxs)("div",{className:"linkHolder",children:[Object(t.jsx)(p.Link,{className:"navItem",activeClass:"active",to:"main",spy:!0,smooth:!0,duration:500,children:Object(t.jsx)("img",{src:h,className:"first navItem",alt:"mainIcon"})},Object(g.a)()),k.map((function(e){return Object(t.jsx)(p.Link,{className:i?"".concat(e.cName):"".concat(e.cName,"  activeItem '"),activeClass:"active",to:e.path,spy:!0,smooth:!0,duration:500,children:Object(t.jsx)("img",{className:"mobileIcon",src:e.icon,alt:e.iconAlt})},Object(g.a)())}))]})})},v=function(e){var i=e.isMobile,a=Object(n.useState)(!1),c=Object(o.a)(a,2),s=c[0],r=c[1],j=Object(n.useState)(!0),l=Object(o.a)(j,2),d=l[0],b=l[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),O=h[0],x=h[1],w=Object(n.useState)(""),z=Object(o.a)(w,2),g=z[0],k=z[1],v=window.addEventListener,N=function(e){x(-.02*e.nativeEvent.clientX+"px"),k(-.02*e.nativeEvent.clientY+"px")},f=function(){var e=window.scrollY;e<=50?b(!0):e>50&&b(!1)};return Object(n.useEffect)((function(){return v("scroll",f),function(){v("scroll",f)}})),i?Object(t.jsxs)("header",{className:d?"headerContainer":"headerContainer activeHeader",children:[Object(t.jsx)(u,{navbar:d}),Object(t.jsx)("nav",{className:"navbar",children:Object(t.jsx)(y,{navbar:d})})]}):Object(t.jsxs)("header",{className:"headerContainer",children:[Object(t.jsx)(u,{navbar:d}),Object(t.jsx)("nav",{className:"navbar desktop",id:"navbar",onMouseMove:N,style:{backgroundPositionX:O,backgroundPositionY:g},children:Object(t.jsx)(m,{dropdown:s,Dropdown:function(){r(!s)},onMouseEnter:function(){window.innerWidth<1199?r(!1):r(!0)},onMouseLeave:function(){window.innerWidth,r(!1)},handleMouseMove:N})})]})},N=(a(58),a(59),a(9)),f=(a(60),a.p+"static/media/home1.c29e8aae.jpg"),C=a.p+"static/media/home2.cfad7c6b.jpg",T=a.p+"static/media/home3.48af904c.jpg",M=a.p+"static/media/home4.a445a3ad.jpg",I=a.p+"static/media/home5.7150b4b6.jpg",S=a.p+"static/media/home6.29d11baa.jpg",P=function(){return Object(t.jsxs)(N.a,{className:"carouselContainer",interval:4e3,children:[Object(t.jsxs)(N.a.Item,{children:[Object(t.jsx)("img",{className:"d-block w-100",src:f,alt:"Third slide"}),Object(t.jsx)(N.a.Caption,{children:Object(t.jsx)("h1",{children:"Pi\u0119kno tkwi w Tobie, nie w rozmiarze."})})]}),Object(t.jsx)(N.a.Item,{children:Object(t.jsxs)(r.b,{to:"/weddingDresses",children:[Object(t.jsx)("img",{className:"d-block w-100",src:C,alt:"Third slide"}),Object(t.jsxs)(N.a.Caption,{children:[Object(t.jsx)("h2",{className:"text-left",children:"\u015alubne"}),Object(t.jsx)("p",{className:"weddingText",children:"przejd\u017a do pracowni."})]})]})}),Object(t.jsx)(N.a.Item,{children:Object(t.jsxs)(r.b,{to:"/eveningDresses",children:[Object(t.jsx)("img",{className:"d-block w-100",src:T,alt:"Third slide"}),Object(t.jsxs)(N.a.Caption,{children:[Object(t.jsx)("h3",{className:"text-left",children:"Wieczorowe"}),Object(t.jsx)("p",{className:"text-left",children:"przejd\u017a do pracowni."})]})]})}),Object(t.jsx)(N.a.Item,{children:Object(t.jsxs)(r.b,{to:"/blog",children:[Object(t.jsx)("img",{className:"d-block w-100 hoverClass",src:M,alt:"Third slide"}),Object(t.jsx)(N.a.Caption,{children:Object(t.jsxs)("div",{className:"qaText",children:[Object(t.jsx)("h3",{className:"text-left ",children:"Q&A"}),Object(t.jsxs)("p",{className:"align-baseline",children:["Przysz\u0142a Panna M\u0142oda ma wiele pyta\u0144.",Object(t.jsx)("br",{})," Poznaj odpowiedzi na nie."]})]})})]})}),Object(t.jsx)(N.a.Item,{children:Object(t.jsxs)(r.b,{to:"/blog",children:[Object(t.jsx)("img",{className:"d-block w-100 hoverClass",src:I,alt:"Third slide"}),Object(t.jsx)(N.a.Caption,{children:Object(t.jsx)("h4",{className:"text-left ",children:"O nas"})})]})}),Object(t.jsx)(N.a.Item,{className:"hoverClass",children:Object(t.jsxs)(r.b,{to:"/contact",children:[Object(t.jsx)("img",{className:"d-block w-100 hoverClass",src:S,alt:"Third slide"}),Object(t.jsxs)(N.a.Caption,{children:[Object(t.jsxs)("div",{className:"align-baseline hoverText",children:[Object(t.jsxs)("p",{children:["Czekamy na ciebie w pracowni.",Object(t.jsx)("br",{})," Stw\xf3rzmy razem Twoj\u0105 wymarzon\u0105 sukni\u0119 \u015blubn\u0105."]}),Object(t.jsx)("h5",{className:"align-baseline hoverText",children:"Skontaktuj si\u0119 z nami"})]}),Object(t.jsx)("h6",{className:"text-left",children:"Kontakt"})]})]})})]})},D=(a(61),function(){return Object(t.jsxs)("div",{className:"footerConainer",children:[Object(t.jsxs)("div",{className:"column",children:[Object(t.jsx)("p",{children:"ul. Gen. Jerzego Zi\u0119tka 84"}),Object(t.jsx)("p",{children:"41-400 Mys\u0142owice"}),Object(t.jsx)("p",{children:"woj. \u015bl\u0105skie"})]}),Object(t.jsxs)("div",{className:"column",children:[Object(t.jsx)("a",{href:"https://www.facebook.com/pracowniamodyslubnejiwieczorowej",children:Object(t.jsx)("i",{className:"fab fa-facebook-square fa-2x"})}),Object(t.jsx)("p",{children:"tel. 789-346-568"}),Object(t.jsx)("a",{href:"mailto:pracowniaaleksandra@gmail.com",children:"pracowniaaleksandra@gmail.com"})]}),Object(t.jsxs)("div",{className:"column",children:[Object(t.jsx)("p",{children:"Pn-pt: 10:00 - 18:00"}),Object(t.jsx)("p",{children:"Sb: 09:00 - 13:00"}),Object(t.jsx)("p",{children:"Nd: nieczynne"})]})]})}),L=function(){return Object(t.jsxs)("div",{className:"mainContainer",id:"main",children:[Object(t.jsx)(P,{}),Object(t.jsx)(D,{})]})},q=(a(62),a(16)),A=a.n(q),E=function(e){var i=e.itemCount,a=e.pageSize,n=e.currentPage,c=e.onPageChange,s=e.prevPage,o=e.nextPage,r=Math.ceil(i/a);if(1===r)return null;var j=A.a.range(1,r+1);return Object(t.jsx)("div",{className:"paginationContainer",children:Object(t.jsxs)("ul",{className:"pagination",children:[Object(t.jsx)("li",{className:"pageItem",children:Object(t.jsx)("div",{className:"pageLink",onClick:s,children:"Poprzednia"})}),j.map((function(e){return Object(t.jsx)("li",{className:e===n?"pageItem active":"pageItem",children:Object(t.jsx)("div",{className:"pageLink",onClick:function(){return c(e)},children:e})},e)})),Object(t.jsx)("li",{className:"pageItem",children:Object(t.jsx)("div",{className:"pageLink",onClick:o,children:"Nast\u0119pna"})})]})})};a(64);a(65);var W=function(e){var i=e.title;return Object(t.jsx)("div",{className:"decorationBarContainer",children:Object(t.jsx)("p",{children:i})})},B=function(e){var i=e.imageData,a=e.id,c=e.title,s=Object(n.useState)(""),r=Object(o.a)(s,2),j=r[0],l=r[1],d=Object(n.useState)(1),m=Object(o.a)(d,2),b=m[0],u=m[1],p=Object(n.useState)({display:"none"}),h=Object(o.a)(p,2),O=h[0],x=h[1],w=Object(n.useState)(1),z=Object(o.a)(w,2),g=z[0],k=z[1],y=i.length,v=function(e){e.preventDefault(),l(i[Number(e.target.id)].image),u(Number(e.target.id)),x({display:"flex"})},N=function(e){e.preventDefault(),x({display:"none"})},f=function(e,i,a){var t=(i-1)*a;return A()(e).slice(t).take(a).value()}(i.map((function(e,i){return Object(t.jsxs)("div",{className:"cardContainer",children:[Object(t.jsx)("img",{src:e.image,id:i,alt:e.title}),Object(t.jsx)("div",{className:"cardInfo",id:i,onClick:v,children:Object(t.jsx)("h1",{className:"cardTitle",children:e.title})})]},i)})),g,8);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("section",{className:"cardHolder",id:a,children:[Object(t.jsx)(W,{title:c}),f]}),Object(t.jsx)(E,{itemCount:y,pageSize:8,currentPage:g,onPageChange:function(e){k(e)},prevPage:function(e){if(e.preventDefault(),1===g)return null;k((function(e){return e-1}))},nextPage:function(e){if(e.preventDefault(),g===y/8)return null;k((function(e){return e+1}))}}),Object(t.jsxs)("section",{className:"lightbox",style:O,children:[Object(t.jsxs)("div",{className:"carousel left",onClick:function(e){if(e.preventDefault(),0===b)u(y-1),l(i[y-1].image);else{var a=b-1;l(i[a].image),u(a)}},children:[Object(t.jsx)("span",{}),Object(t.jsx)("span",{})]}),Object(t.jsx)("div",{className:"imgHolder",onClick:N,children:Object(t.jsx)("img",{src:j,alt:j,onClick:N})}),Object(t.jsxs)("div",{className:"carousel right",onClick:function(e){if(e.preventDefault(),b===y-1)u(0),l(i[0].image);else{var a=b+1;l(i[a].image),u(a)}},children:[Object(t.jsx)("span",{}),Object(t.jsx)("span",{})]})]}),Object(t.jsx)(D,{})]})},J=(a(66),a(67),function(e){var i=e.buttonName,a=e.handleBack;return Object(t.jsxs)("div",{className:"buttonGallery",onClick:a,children:[Object(t.jsx)("div",{className:"line horizontalOne"}),i,Object(t.jsx)("div",{className:"line horizontalTwo"}),Object(t.jsx)("div",{className:"line arrowOne"}),Object(t.jsx)("div",{className:"line arrowTwo"})]})}),Z=function(e){var i=e.imageData,a=e.id,n=e.title,c="/".concat(a);return Object(t.jsxs)("div",{className:"galeryContainer",id:a,children:[Object(t.jsx)(W,{title:n}),Object(t.jsx)("ul",{children:i.map((function(e,i){return Object(t.jsx)("li",{className:e.cName,children:Object(t.jsx)("img",{src:e.image,alt:e.title})},i)})).slice(0,3)}),Object(t.jsx)(r.b,{to:c,children:Object(t.jsx)(J,{buttonName:"Galeria"})})]})},H=a.p+"static/media/e1.4a9f3a10.jpg",K=a.p+"static/media/e2.4792f1e9.jpg",U=a.p+"static/media/e3.112d16aa.jpg",Y=a.p+"static/media/e4.778d6fac.jpg",G=a.p+"static/media/e5.40e53b62.jpg",X=a.p+"static/media/e6.95d53169.jpg",F=a.p+"static/media/e7.1f3b99c9.jpg",Q=a.p+"static/media/e8.52886323.jpg",R=a.p+"static/media/e9.e5d75883.jpg",V=a.p+"static/media/e10.181bd713.jpg",$=a.p+"static/media/w1.3a3cb423.jpg",_=a.p+"static/media/w2.e6c65280.jpg",ee=a.p+"static/media/w3.e20d67bd.jpg",ie=a.p+"static/media/w4.75f89da4.jpg",ae=a.p+"static/media/w5.f6530389.jpg",te=a.p+"static/media/w6.f2fa828d.jpg",ne=a.p+"static/media/w7.3cfec44e.jpg",ce=a.p+"static/media/w8.2f02318d.jpg",se=a.p+"static/media/w9.60e1ba22.jpg",oe=[{image:H,title:"Title1",index:0,cName:"content"},{image:K,title:"Title2",index:1,cName:"content"},{image:U,title:"Title3",index:2,cName:"content"},{image:Y,title:"Title4",index:3,cName:"content"},{image:G,title:"Title5",index:4,cName:"content"},{image:X,title:"Title6",index:5,cName:"content "},{image:F,title:"Title7",index:6,cName:"content "},{image:Q,title:"Title8",index:7,cName:"content "},{image:R,title:"Title9",index:8,cName:"content "},{image:V,title:"Title10",index:9,cName:"content "},{image:H,title:"Title11",index:10,cName:"content "},{image:K,title:"Title12",index:11,cName:"content "},{image:U,title:"Title13",index:12,cName:"content "},{image:Y,title:"Title14",index:13,cName:"content "},{image:G,title:"Title15",index:14,cName:"content "},{image:X,title:"Title16",index:15,cName:"content "},{image:F,title:"Title17",index:16,cName:"content "},{image:Q,title:"Title18",index:17,cName:"content "},{image:R,title:"Title19",index:18,cName:"content "},{image:V,title:"Title20",index:19,cName:"content "},{image:H,title:"Title21",index:20,cName:"content "},{image:K,title:"Title22",index:21,cName:"content "},{image:U,title:"Title23",index:22,cName:"content "},{image:Y,title:"Title24",index:23,cName:"content "}],re=[{image:$,title:"title1",index:0,cName:"content"},{image:_,title:"Title2",index:1,cName:"content"},{image:ee,title:"tTitle3",index:2,cName:"content"},{image:ie,title:"Title4",index:3,cName:"content"},{image:ae,title:"Title5",index:4,cName:"content hidden "},{image:te,title:"Title6",index:5,cName:"content hidden "},{image:ne,title:"Title7",index:6,cName:"content hidden "},{image:ce,title:"Title8",index:5,cName:"content hidden "},{image:se,title:"Title9",index:6,cName:"content hidden "}],je=function(e){return e.isMobile?Object(t.jsx)(Z,{imageData:re,id:"weddingDressesM",title:"Suknie \u015blubne"}):Object(t.jsx)(B,{imageData:re})},le=function(e){return e.isMobile?Object(t.jsx)(Z,{imageData:oe,id:"eveningDressesM",title:"Suknie wieczorowe"}):Object(t.jsx)(B,{imageData:oe})},de=(a(68),[{question:"Czy musz\u0119 umawia\u0107 si\u0119 na wizyt\u0119? ",answer:"Tak, bardzo prosimy umawia\u0107 si\u0119 wcze\u015bniej telefonicznie. Dzi\u0119ki temu jeste\u015bmy przygotowane na Twoje przyj\u015bcie i mamy wtedy czas tylko dla Ciebie."},{question:"Ile trwa spotkanie? ",answer:"W zale\u017cno\u015bci od potrzeb spotkanie trwa oko\u0142o godziny do p\xf3\u0142torej."},{question:"Czy mog\u0119 przyj\u015b\u0107 z osob\u0105 towarzysz\u0105c\u0105? ",answer:"Jak najbardziej! Mo\u017ce to by\u0107 przyjaci\xf3\u0142ka, mama, siostra lub Tw\xf3j przysz\u0142y m\u0105\u017c. Niech to b\u0119dzie osoba, kt\xf3ra jest dla Ciebie \u017cyczliwa i b\u0119dzie w stanie obiektywnie oceni\u0107, jak suknia prezentuje si\u0119 na Tobie."},{question:"Jak przygotowa\u0107 si\u0119 do wizyty w pracowni? ",answer:"Przede wszystkim zabierz ze sob\u0105 dobre nastawienie! Zbierz r\xf3wnie\u017c inspiracje - zdj\u0119cia sukni, kt\xf3re Ci si\u0119 podobaj\u0105. Okre\u015bl bud\u017cet, jaki chcia\u0142aby\u015b przeznaczy\u0107 na zakup sukni. Najwa\u017cniejsze - zabierz ze sob\u0105 buty na obcasie (je\u015bli w takich b\u0119dziesz sz\u0142a do \u015blubu) oraz dobrze dopasowany biustonosz."},{question:"Mam w\u0142asny pomys\u0142 na sukni\u0119! ",answer:"\u015awietnie! Bardzo ch\u0119tnie go zrealizujemy! Najpierw om\xf3wimy projekt i wykonamy go dla Ciebie."},{question:"Nie wiem, jakiej sukni szukam... ",answer:"Nie martw si\u0119! Ch\u0119tnie Ci doradzimy, b\u0119dziesz mog\u0142a przymierzy\u0107 kilka r\xf3\u017cnych modeli, zobaczy\u0107, jak w nich wygl\u0105dasz, a w ko\u0144cu wybra\u0107 ten idealny."},{question:"Czy jest mo\u017cliwo\u015b\u0107 uszycia sukni \u015blubnej plus size?",answer:"Oczywi\u015bcie! Mamy du\u017ce do\u015bwiadczenie w szyciu sukien plus size. Taka suknia \u015blubna b\u0119dzie dopasowana do Twoich wymiar\xf3w - ukryje mankamenty figury i podkre\u015bli jej atuty.  "},{question:"Ile czasu zajmuje uszycie sukni \u015blubnej? ",answer:"Tak naprawd\u0119 jeste\u015bmy w stanie uszy\u0107 suknie nawet w tydzie\u0144, je\u015bli znajdziesz si\u0119 w takiej potrzebie. Zalecamy jednak umawia\u0107 si\u0119 na przymiarki z rocznym wyprzedzeniem, aby na spokojnie zrealizowa\u0107 wymarzony projekt. Oferujemy r\xf3wnie\u017c ekspresowe us\u0142ugi, wtedy suknie powstaj\u0105 w mgnieniu oka ;)   "},{question:"Czy przy zam\xf3wieniu trzeba wp\u0142aca\u0107 zaliczk\u0119? ",answer:"Tak. W dniu zam\xf3wienia i podpisania umowy wp\u0142acana jest zaliczka."},{question:"Co w razie gdy przytyj\u0119 lub schudn\u0119? ",answer:"Nie ma problemu! 2 tygodnie przed \u015blubem ostatecznie dopasowujemy sukni\u0119 tak, aby w dniu \u015blubu le\u017ca\u0142a idealnie. "},{question:"Ile jest przymiarek?",answer:"\u0141\u0105cznie s\u0105 4 spotkania, z tym \u017ce pierwsze to wybieranie sukni. Samych przymiarek jest 3, a na tej ostatniej jest ju\u017c wydawana suknia.  "},{question:"Czy uszyt\u0105 sukni\u0119 mo\u017cna odda\u0107 do komisu? ",answer:"Jak najbardziej. Je\u015bli z jakiego\u015b powodu nie chcesz zatrzyma\u0107 sukni, mo\u017cesz odda\u0107 j\u0105 do nas do komisu i podarowa\u0107 jej drugie \u017cycie."},{question:"Ile kosztuje uszycie sukni \u015blubnej?",answer:"Cena uzale\u017cniona jest od wybranego fasonu, materia\u0142u, ilo\u015bci zdobie\u0144, rodzaju koronki. Sukni\u0119 mo\u017cemy uszy\u0107 ju\u017c za 1500z\u0142, a g\xf3rnej granicy nie ma - wszystko zale\u017cy od Twojej wyobra\u017ani."},{question:"Jakie s\u0105 zalety szycia sukni \u015blubnej?",answer:"Jedn\u0105 z zalet szycia sukni \u015blubnej na miar\u0119 jest ni\u017csza cena ni\u017c ta oferowana w salonach. Mamy te\u017c mo\u017cliwo\u015b\u0107 dopasowania sukni do figury klientki, a tak\u017ce wprowadzania modyfikacji projektu podczas przymiarek. Sama decydujesz z jakiego materia\u0142u i koronki wykonana jest Twoja suknia, a do tego masz pewno\u015b\u0107 \u017ce jest absolutnie wyj\u0105tkowa."}]),me=function(){var e=de.map((function(e,i){return Object(t.jsxs)("li",{className:"blogList",children:[Object(t.jsx)("div",{className:"decorationBar"}),Object(t.jsx)("p",{children:e.question}),Object(t.jsx)("p",{children:e.answer})]},Object(g.a)())}));return Object(t.jsxs)("div",{className:"blogContainer",id:"blog",children:[Object(t.jsx)(W,{title:"Blog"}),Object(t.jsx)("ul",{className:"questionList",children:e}),Object(t.jsx)(D,{})]})},be=(a(69),function(){return Object(t.jsxs)("div",{className:"contactContainer",id:"contact",children:[Object(t.jsx)(W,{title:"Kontakt"}),Object(t.jsxs)("div",{className:"dataContainer",children:[Object(t.jsx)("div",{className:"image"}),Object(t.jsx)("h2",{children:" Pracownia Mody \u015alubnej i Wieczorowej / Komis sukien \u015blubnych"}),Object(t.jsx)("h1",{children:"O'la"}),Object(t.jsx)("div",{className:"decorateBar2"}),Object(t.jsx)("p",{children:"ul. Gen. Jerzego Zi\u0119tka 84"}),Object(t.jsx)("p",{children:"41-400 Mys\u0142owice"}),Object(t.jsx)("p",{children:"woj. \u015bl\u0105skie"}),Object(t.jsx)("div",{className:"decorateBar2"}),Object(t.jsx)("h3",{children:"tel. 789-346-568"}),Object(t.jsx)("a",{href:"mailto:pracowniaaleksandra@gmail.com",children:"pracowniaaleksandra@gmail.com"}),Object(t.jsx)("div",{className:"decorateBar2"}),Object(t.jsxs)("div",{className:"openingHour",children:[Object(t.jsx)("p",{children:"Pn-pt: 10:00 - 18:00"}),Object(t.jsx)("p",{children:"Sb: 09:00 - 13:00"}),Object(t.jsx)("p",{children:" Nd: nieczynne"})]})]}),Object(t.jsx)(D,{})]})}),ue=(a(70),a(71),a(72),function(e){var i=e.addClass,a=e.showOptinion;return Object(t.jsxs)("div",{className:"buttonContainer",children:[Object(t.jsx)("div",{className:"bottomLine leftLine"}),Object(t.jsx)("div",{className:i("arrow leftArrow"," arrowLeftAction",a)}),Object(t.jsx)("div",{className:i("arrow rightArrow"," arrowRightAction",a)}),Object(t.jsx)("div",{className:"bottomLine rightLine"})]})}),pe=function(e){var i=e.addClass,a=e.handlerShowInfo,n=e.handlerShowInfo2,c=e.handlerShowInfo3,s=[{name:"- Katarzyna",opinion:"Dziewczyny, je\u015bli szukacie magicznej wr\xf3\u017cki, kt\xf3ra wyczaruje dla Was sukni\u0119 niczym wr\xf3\u017cka z kopciuszka, to w\u0142a\u015bnie j\u0105 znalaz\u0142y\u015bcie. Pani Ola to kobieta z pasj\u0105, niesamowit\u0105 energi\u0105, wyczuciem, gustem i ogromn\u0105 sympati\u0105 dla rozkapryszonych przysz\u0142ych pa\u0144 m\u0142odych. Mimo mojej bujnej wyobra\u017ani, przez moment nie poczu\u0142am si\u0119 \u017ale. Pani Aleksandra spe\u0142nia wszystkie marzenia. Z ca\u0142ego serca DZI\u0118KUJ\u0118!!!!! I gor\u0105co POLECAM!!!!!!!!",state:e.showOptinion,handler:a},{name:"- Basia",opinion:"  Pracownia Pani Oli to 10/10! Pomimo tego, \u017ce nie nosz\u0119 najmniejszego rozmiaru, to w tej sukience czu\u0142am si\u0119 najpi\u0119kniejsza na \u015bwiecie - dopasowana do mojej figury, a zarazem ukrywaj\u0105ca jej mankamenty. Wysz\u0142o lepiej, ni\u017c sobie wyobra\u017ca\u0142am. Ka\u017cda panna m\u0142oda na pewno znajdzie tam co\u015b dla siebie.",state:e.showOptinion2,handler:n},{name:"- Zuzanna",opinion:"Salon poleci\u0142a mi moja dobra kole\u017canka. Jej suknia wygl\u0105da\u0142a przepi\u0119knie i te\u017c zapragn\u0119\u0142am tak\u0105 mie\u0107. Zar\xf3wno podczas pierwszej wizyty, jak i p\xf3\u017aniejszych przymiarek panie by\u0142y baaardzo mi\u0142e, wyrozumia\u0142e i pomocne. Moja suknia ju\u017c wisi na wieszaku, a ja nie mog\u0119 si\u0119 doczeka\u0107 tego jedynego wyj\u0105tkowego dnia.",state:e.showOptinion3,handler:c}];return Object(t.jsx)(t.Fragment,{children:s.map((function(e){return Object(t.jsxs)("div",{className:i("optinion"," animationContainer",e.state),children:[Object(t.jsx)("div",{className:"visablePart",children:e.opinion}),Object(t.jsxs)("div",{className:"hidder",onClick:e.handler,children:[Object(t.jsx)(ue,{addClass:i,showOptinion:e.state}),Object(t.jsx)("div",{className:"customerName",children:e.name})]})]},e.name)}))})},he=function(){var e=Object(n.useState)(!1),i=Object(o.a)(e,2),a=i[0],c=i[1],s=Object(n.useState)(!1),r=Object(o.a)(s,2),j=r[0],l=r[1],d=Object(n.useState)(!1),m=Object(o.a)(d,2),b=m[0],u=m[1],p=Object(t.jsxs)("div",{className:"partTexHolder",children:[Object(t.jsxs)("p",{children:["Od 2015 roku szyjemy wymarzone suknie na miar\u0119, wykorzystuj\u0105c w pracy zar\xf3wno w\u0142asne projekty, jak i indywidualne inspiracje, z kt\xf3rymi przychodz\u0105 do nas klientki."," "]}),Object(t.jsx)("p",{children:"Specjalizujemy si\u0119 w szyciu sukien dla panien m\u0142odych plus size. Bez wzgl\u0119du na rozmiar stworzymy dla Ciebie wyj\u0105tkow\u0105 kreacj\u0119, kt\xf3ra b\u0119dzie podkre\u015bla\u0142a Twoje atuty i maskowa\u0142a mankamenty figury."}),Object(t.jsx)("p",{children:"Wiemy, ile emocji wi\u0105\u017ce si\u0119 z przygotowaniami do tego wyj\u0105tkowego dnia, dlatego do ka\u017cdej klientki podchodzimy indywidualnie. Zawsze po\u015bwi\u0119camy maksimum uwagi oraz cierpliwie i z przyjemno\u015bci\u0105 doradzamy, odpowiadamy na pytania i rozwiewamy w\u0105tpliwo\u015bci."}),Object(t.jsx)("p",{children:"Pracownia oferuje r\xf3wnie\u017c szycie sukien wieczorowych, dlatego serdecznie zapraszamy do nas nie tylko Panny M\u0142ode, ale tak\u017ce mamy, \u015bwiadkowe i druhny."}),Object(t.jsx)("p",{children:"Prowadzimy komis sukien \u015blubnych, wi\u0119c je\u015bli chcesz swojej da\u0107 drugie \u017cycie - przynie\u015b j\u0105 do nas!"})]});return Object(t.jsxs)("div",{className:"aboutUsContainer",id:"aboutUs",children:[Object(t.jsxs)("div",{className:"mainAboutUs",children:[Object(t.jsx)(W,{title:"O nas"}),Object(t.jsx)("h1",{children:" O nas"}),Object(t.jsx)("div",{className:"textAboutUs",children:p})]}),Object(t.jsx)("div",{className:"opinionContainer",children:Object(t.jsxs)("div",{className:"titleOpinion",children:[Object(t.jsx)("h1",{children:" Opinie klientek"}),Object(t.jsx)("div",{className:"textOponion",children:Object(t.jsx)(pe,{addClass:function(e,i,a){var t=e;return a&&(t+=i),t},handlerShowInfo:function(){c((function(e){return!e}))},handlerShowInfo2:function(){l((function(e){return!e}))},handlerShowInfo3:function(){u((function(e){return!e}))},showOptinion:a,showOptinion2:j,showOptinion3:b})})]})}),Object(t.jsx)(D,{})]})},Oe=function(e){var i=e.isMobile;return Object(t.jsxs)("div",{className:"version mobile",children:[Object(t.jsx)(v,{isMobile:{isMobile:i}}),Object(t.jsx)(L,{}),Object(t.jsx)(he,{isMobile:{isMobile:i}}),Object(t.jsx)(je,{isMobile:{isMobile:i}}),Object(t.jsx)(le,{isMobile:{isMobile:i}}),Object(t.jsx)(me,{}),Object(t.jsx)(be,{}),Object(t.jsx)(D,{})]})},xe=(a(73),function(){return Object(t.jsxs)("div",{className:"DressesContainer",id:"dresses",children:[Object(t.jsx)("h1",{children:"Wybierz kreacje na Twoj\u0105 wyj\u0105tkow\u0105 okazj\u0119."}),Object(t.jsxs)("section",{className:"imgSection",children:[Object(t.jsx)(r.b,{to:"/weddingDresses",className:"dressesImg first"}),Object(t.jsx)(r.b,{to:"/eveningDresses",className:"dressesImg second"})]}),Object(t.jsx)(D,{})]})}),we=function(){return Object(t.jsxs)("div",{style:{fontSize:"4rem",textAlign:"center",color:"red",backgroundColor:"black",marginTop:"50%"},children:["Erorr 404 !"," "]})},ze=function(e){var i=e.isMobile;return Object(t.jsx)("div",{className:"version desktop",children:Object(t.jsxs)(r.a,{children:[Object(t.jsx)(v,{isMobile:i}),Object(t.jsxs)(j.c,{children:[Object(t.jsx)(j.a,{exact:!0,path:"/",component:L,isMobile:i}),Object(t.jsx)(j.a,{path:"/dresses",component:xe}),Object(t.jsx)(j.a,{path:"/weddingDresses",component:je,isMobile:i}),Object(t.jsx)(j.a,{path:"/eveningDresses",component:le,isMobile:i}),Object(t.jsx)(j.a,{path:"/blog",component:me}),Object(t.jsx)(j.a,{path:"/aboutUs",component:he}),Object(t.jsx)(j.a,{path:"/contact",component:be}),Object(t.jsx)(j.a,{component:we})]})]})})},ge=(a(35),function(e){return Object(t.jsxs)("div",{className:"mainContainer",children:[Object(t.jsx)(W,{title:"Nasze Projekty"}),re.map((function(e,i){return Object(t.jsxs)("div",{className:"imgContainer",children:[Object(t.jsx)("img",{src:e.image,id:i,alt:e.title}),Object(t.jsx)("div",{className:"cardInfo",id:i,children:Object(t.jsx)("h1",{className:"cardTitle",children:e.title})})]},i)})),Object(t.jsx)(J,{handleBack:function(){e.history.push("/")},buttonName:"Wstecz"})]})}),ke=function(e){return Object(t.jsxs)("div",{className:"mainContainer",children:[Object(t.jsx)(W,{title:"Nasze Projekty"}),oe.map((function(e,i){return Object(t.jsxs)("div",{className:"imgContainer",children:[Object(t.jsx)("img",{src:e.image,id:i,alt:e.title}),Object(t.jsx)("div",{className:"cardInfo",id:i,children:Object(t.jsx)("h1",{className:"cardTitle",children:e.title})})]},i)})),Object(t.jsx)(J,{handleBack:function(){e.history.push("/")},buttonName:"Wstecz"})]})},ye=void 0,ve=function(){var e=Object(n.useState)(!1),i=Object(o.a)(e,2),a=i[0],c=i[1],s=function(){var e=window.innerWidth<=767;e!==a&&c(e)};return Object(n.useEffect)((function(){return window.addEventListener("resize",s.bind(ye)),s(),window.removeEventListener("resize",s.bind(ye))})),a?Object(t.jsx)(r.a,{children:Object(t.jsxs)(j.c,{children:[Object(t.jsx)(j.a,{exact:!0,path:"/",component:Oe,isMobile:a}),Object(t.jsx)(j.a,{path:"/weddingDressesM",component:ge}),Object(t.jsx)(j.a,{path:"/eveningDressesM",component:ke}),Object(t.jsx)(j.a,{component:we})]})}):Object(t.jsx)(ze,{isMobile:a})};var Ne=function(){return Object(t.jsx)(ve,{})};s.a.render(Object(t.jsx)(Ne,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.377713e1.chunk.js.map