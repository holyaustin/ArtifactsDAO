(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{24473:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/review",function(){return l(38247)}])},38247:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return S}});var n=l(85893),o=l(67294),r=l(62282),s=l(46690),i=l(44961),a=l(39023),c=l(9008),u=l.n(c),d=l(47568),p=l(70655),h=l(9137),f=l(98887),b=l(241),m=l(11466),g=l(9669),x=l.n(g),w=l(11163),Z=l(42484),v=l.n(Z),N=l(59449),y=(l(25675),l(27748),l(92345),l(2127)),k=l(31838),_={position:"relative",overflow:"hidden",width:"100%"},j={position:"absolute",top:"0",left:"0",bottom:"0",right:"0",width:"100%",height:"100%"};function C(){console.log("Entered watching component");var e=(0,w.useRouter)(),t=(0,o.useState)(null),l=(t[0],t[1]),n=(0,o.useState)([]),r=n[0],s=n[1],i=(0,o.useState)([]),a=(i[0],i[1]),c=(0,o.useState)([]),u=(c[0],c[1],(0,o.useState)("not-loaded")),g=u[0],Z=u[1];(0,o.useEffect)((function(){!function(){E.apply(this,arguments)}(),function(){F.apply(this,arguments)}(),console.log("Counter executed")}),[]);function C(){return(C=(0,d.Z)((function(){return(0,p.__generator)(this,(function(e){return alert("This feature is under development because we want to give you the best expereince"),[2]}))}))).apply(this,arguments)}var S=e.query;function E(){return E=(0,d.Z)((function(){var e,t,l,n,o,r,i,c;return(0,p.__generator)(this,(function(u){switch(u.label){case 0:return console.log("loading Article for item",S.pid),e=S.pid,console.log("pid is ",e),[4,new(v())({network:"mainnet",cacheProvider:!0}).connect()];case 1:return t=u.sent(),l=new b.Q(t),n=l.getSigner(),[4,(o=new m.CH(k.O,y.Mt,n)).fetchOneArtifact(e)];case 2:return r=u.sent(),[4,o.fetchItemViews(e)];case 3:return i=u.sent(),[4,Promise.all(r.map(function(){var e=(0,d.Z)((function(e){var t,l,n,r,s,c,u;return(0,p.__generator)(this,(function(d){switch(d.label){case 0:return console.log("inside data mapping"),[4,o.tokenURI(e.tokenId)];case 1:return t=d.sent(),console.log("token Uri is ",t),l=I(t),console.log("Http Uri is ",l),[4,x().get(l)];case 2:return n=d.sent(),r=i.toNumber(),s=e.fileName,console.log("Filename is ",s),c=e.description,console.log("description is ",c),u={tokenId:e.tokenId.toNumber(),image:I(n.data.image),name:n.data.name,description:n.data.description,author:n.data.properties.author,category:n.data.properties.category,type:n.data.type,affiliate:n.data.properties.affiliate,sharelink:l,view:r},console.log("item returned is ",u),a(u.owner),[2,u]}}))}));return function(t){return e.apply(this,arguments)}}()))];case 4:return c=u.sent(),s(c),Z("loaded"),[2]}}))})),E.apply(this,arguments)}console.log("Props result is without ",S.pid);var I=function(e){var t=e.split("/");return"https://".concat(t[2],".ipfs.nftstorage.link/").concat(t[3])};function F(){return F=(0,d.Z)((function(){var e,t,n,o,r,s;return(0,p.__generator)(this,(function(i){switch(i.label){case 0:console.log("loading News for item",S.pid),e=S.pid,console.log("pid is ",e),i.label=1;case 1:return i.trys.push([1,5,,6]),[4,(new(v())).connect()];case 2:return t=i.sent(),n=new b.Q(t),o=new m.CH(k.O,y.Mt,n.getSigner()),console.log("Count variable is ",e),[4,o.createViewItem(e)];case 3:return r=i.sent(),console.log("View Counter successfully retrieved from Blockchain"),[4,r.wait()];case 4:return i.sent(),[2,r];case 5:return s=i.sent(),l("Failed to send tx to Filecoin."),console.log(s),[3,6];case 6:return[2]}}))})),F.apply(this,arguments)}return"loaded"!==g||r.length?(0,h.tZ)(f.xu,{as:"section",sx:A.section,className:"bg-blue-800 "},(0,h.tZ)(o.Fragment,null,(0,h.tZ)("div",{className:" text-2xl text-center text-white font-bold "},(0,h.tZ)("h1",null,"Article Review Details")),(0,h.tZ)("div",{className:"grid grid-cols-3 grid-rows-2 col-gap-2 row-gap-5 mx-20 my-5"},(0,h.tZ)("div",{className:"col-start-1 col-end-3 row-span-2 text-white bg-white text-4xl flex items-center justify-center border-4 border-red-500",style:_},(0,h.tZ)("div",{className:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-1",style:j},r.map((function(e,t){return(0,h.tZ)("div",{key:t,className:"shadow rounded-xl overflow-hidden w-full "},(0,h.tZ)("iframe",{title:e.name,frameBorder:"0",scrolling:"no",height:"950px",width:"100%",objectFit:"cover",src:"".concat(e.image,"#toolbar=0")}))})))),(0,h.tZ)("div",{className:"row-span-3 text-black bg-white text-2xl flex text-left p-3 "},r.map((function(e,t){return(0,h.tZ)("div",{key:t,className:"overflow-auto tect-blue-800 bg-white shadow rounded-xl font-bold"},(0,h.tZ)("div",{className:" bg-white shadow rounded-xl overflow-hidden min-w-full"},(0,h.tZ)(N.b,{title:e.name,src:e.sharelink,objectFit:"fill"})),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"20px"},className:"text-3xl font-semibold underline"},"Article Details")),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"20px"},className:"text-xl font-semibold"}," No. of Views : ",e.view)),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"20px"},className:"text-xl font-semibold"},"Article id: ",e.tokenId)),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"40px"},className:"text-xl font-semibold"},"Article Name : ",e.name)),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"100px"},className:"text-xl font-semibold"},"Abstract: ",e.description)),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"20px"},className:"text-xl font-semibold"},"Author: ",e.author)),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"20px"},className:"text-xl font-semibold"}," Paper Type: ",e.type)),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"20px"},className:"text-xl font-semibold"}," Category: ",e.category)),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1"},(0,h.tZ)("p",{style:{height:"20px"},className:"text-xl font-semibold"},"affiliate: ",e.affiliate)),(0,h.tZ)("br",null),(0,h.tZ)("div",{className:"p-1 mb-5"},(0,h.tZ)("p",{style:{height:"20px"},className:"text-xl font-semibold"},"IPFS Link : ",e.sharelink)),(0,h.tZ)("br",null))}))),(0,h.tZ)("div",{className:"col-span-3 text-white pt-3 text-xl flex items-center justify-center"},(0,h.tZ)("div",{className:"p-4"},(0,h.tZ)("button",{type:"button",className:"w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full",onClick:function(){return function(){return C.apply(this,arguments)}()}},"Drop your comment")),(0,h.tZ)("div",{className:"p-4"},(0,h.tZ)("button",{type:"button",className:"w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full"},(0,h.tZ)("a",{className:"social-icon-link github",href:"https://streamagenic-meeting.vercel.app/",target:"_blank",rel:"noopener noreferrer","aria-label":"chat"},"Vote NO"))),(0,h.tZ)("div",{className:"p-4"},(0,h.tZ)("button",{type:"button",className:"w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full"},(0,h.tZ)("a",{className:"social-icon-link github",href:"https://web3chat-holyaustin.vercel.app/",target:"_blank",rel:"noopener noreferrer","aria-label":"chat"},"Vote YES"))))))):(0,h.tZ)("div",null,(0,h.tZ)("h1",{className:"px-20 py-10 text-3xl"},"You have not selected anyvideo to watch"))}var A={section:{backgroundColor:"primary",pt:[17,null,null,20,null],pb:[6,null,null,12,16]}};function S(){return(0,n.jsxs)(r.f,{theme:s.Z,children:[(0,n.jsx)(u(),{children:(0,n.jsx)("link",{rel:"shortcut icon",href:"/images/logo.png"})}),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.Z,{title:"Add new file",description:"add a new file"}),(0,n.jsx)(C,{})]})]})}}},function(e){e.O(0,[277,412,662,548,54,656,675,525,362,345,449,748,474,881,774,888,179],(function(){return t=24473,e(e.s=t);var t}));var t=e.O();_N_E=t}]);