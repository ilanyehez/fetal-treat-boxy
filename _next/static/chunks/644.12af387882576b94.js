"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{3644:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(7437),o=r(2265),i=r(7327),l=r(4542),s=r(20),a=r(7633),u=r(3276),c=r(1102),d=r(1385),f=r(6916),g=r(5903),h=r(1655),m=r(6706),v=r(9883),w=r(4891),p=r(7256),x=r(9213),b=r(9311);let y=(0,x.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),k=o.forwardRef((e,t)=>{let{className:r,variant:o,size:i,asChild:l=!1,...s}=e,a=l?p.g7:"button";return(0,n.jsx)(a,{className:(0,b.cn)(y({variant:o,size:i,className:r})),ref:t,...s})});function Z(e){let{houses:t,onHouseSelect:r,selectedHouse:p}=e,x=(0,o.useRef)(null),[b,y]=(0,o.useState)(null),Z=(0,o.useRef)({}),j=e=>{if(!b)return;let t=b.getView(),r=t.getZoom()||0;t.animate({zoom:r+e,duration:250})};return(0,o.useEffect)(()=>{if(!x.current)return;let e=new i.Z({target:x.current,layers:[new s.Z({source:new a.Z})],view:new l.ZP({center:(0,u.mi)([-98.5795,39.8283]),zoom:4}),controls:[]});return y(e),()=>{e.setTarget(void 0)}},[]),(0,o.useEffect)(()=>{if(!b)return;let e=new d.Z,n=new c.Z({source:e});t.forEach(t=>{let r=new f.Z({geometry:new g.Z((0,u.mi)([t.longitude,t.latitude])),house:t});r.setStyle(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.5;return new h.ZP({image:new m.Z({src:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'),scale:e,color:(null==p?void 0:p.id)===t.id?"#000000":"#666666"})})}()),Z.current[t.id]=r,e.addFeature(r)}),b.addLayer(n);let o=e=>{let t=b.forEachFeatureAtPixel(e.pixel,e=>e);if(t){let e=t.get("house");r(e)}};return b.on("click",o),()=>{b.removeLayer(n),b.un("click",o)}},[b,t,r]),(0,o.useEffect)(()=>{Object.values(Z.current).forEach(e=>{let t=e.get("house"),r=(null==p?void 0:p.id)===t.id;e.setStyle(new h.ZP({image:new m.Z({src:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'),scale:r?2:1.5,color:r?"#000000":"#666666"})}))})},[p]),(0,o.useEffect)(()=>{if(p&&b){let e=b.getView();e.animate({center:(0,u.mi)([p.longitude,p.latitude]),duration:1e3,zoom:12})}},[p,b]),(0,n.jsxs)("div",{className:"relative w-full h-full min-h-[600px]",children:[(0,n.jsxs)("div",{className:"absolute top-2 left-2 z-10 flex flex-col gap-1",children:[(0,n.jsx)(k,{variant:"secondary",size:"icon",className:"w-[30px] h-[30px]",onClick:()=>j(1),children:(0,n.jsx)(v.Z,{className:"h-4 w-4"})}),(0,n.jsx)(k,{variant:"secondary",size:"icon",className:"w-[30px] h-[30px]",onClick:()=>j(-1),children:(0,n.jsx)(w.Z,{className:"h-4 w-4"})})]}),(0,n.jsx)("div",{ref:x,className:"w-full h-full rounded-lg overflow-hidden"})]})}k.displayName="Button"}}]);