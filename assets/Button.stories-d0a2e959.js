import{j as i}from"./jsx-runtime-ffb262ed.js";import{r as C}from"./index-76fb7be0.js";import{$ as E}from"./index-618b7951.js";import{c as O}from"./index-13dc00cb.js";import{a as V}from"./index-69428087.js";import"./_commonjsHelpers-de833af9.js";const z=O("inline-flex items-center gap-2.5 rounded-full font-inter font-semibold transition-all ease-in-out",{variants:{intent:{primary:"bg-electric-blue text-white hover:bg-mid-blue hover:shadow-[0px_2px_6px_0px_#A4A4E4] focus:bg-deep-blue focus:shadow-[0px_2px_6px_0px_#A4A4E4]",secondary:"bg-energy-yellow text-background-black hover:bg-hover-yellow focus:bg-deep-yellow",tertiary:"bg-transparent gap-0 text-copy-grey hover:border-hover-grey hover:text-hover-grey focus:gap-2 focus:text-hover-grey dark:text-energy-yellow hover:dark:text-hover-yellow focus:dark:text-deep-yellow",outline:"bg-transparent border-2 border-copy-grey text-copy-grey hover:border-hover-grey hover:text-hover-grey focus:border-hover-grey focus:bg-faint-grey focus:text-hover-grey hover:dark:border-light-grey hover:dark:text-light-grey focus:dark:border-faded-grey focus:dark:bg-default-grey focus:dark:text-faded-grey"},size:{md:"px-4 py-2",lg:"px-8 py-4"}},defaultVariants:{intent:"primary",size:"md"}}),e=C.forwardRef(({className:r,intent:_,size:B,asChild:j=!1,...L},S)=>{const A=j?E:"button";return i.jsx(A,{className:V(z({intent:_,size:B,className:r})),ref:S,...L})});e.displayName="Button";try{e.displayName="Button",e.__docgenInfo={description:"",displayName:"Button",props:{intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"primary" | "secondary" | "tertiary" | "outline" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"md" | "lg" | null'}},asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"Atoms/Button",component:e,args:{children:"Button"}},t={args:{}},o={args:{}},a={args:{intent:"secondary"}},n={render:r=>i.jsxs(e,{...r,children:["Button",i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:i.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),args:{intent:"tertiary"}},s={args:{intent:"outline"}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,y,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    intent: 'secondary'
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,x,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Button {...args}>
            Button
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Button>,
  args: {
    intent: 'tertiary'
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,w,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    intent: 'outline'
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const W=["Overview","Primary","Secondary","Tertiary","Outline"];export{s as Outline,t as Overview,o as Primary,a as Secondary,n as Tertiary,W as __namedExportsOrder,T as default};
