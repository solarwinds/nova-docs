import{b as x}from"./chunk-5L3XI3NE.js";import{a as h}from"./chunk-DP6M2T73.js";import{Eb as C,Qb as s,Tc as T,Wb as m,Xb as n,Yb as r,ac as O,mc as E,nb as i,xa as _,xc as M,ya as d,yc as p,zb as u,zc as c}from"./chunk-MC3BMXIX.js";import{g as f}from"./chunk-VBFW7A5V.js";var b=f(h());function y(t,g){if(t&1&&(r(0,"nui-icon",2),m(1,"div",3)(2,"h2"),p(3),n(),m(4,"h5"),p(5),n(),r(6,"nui-progress",4),n()),t&2){let e=g.context;s("icon",e.icon),i(3),c(e.value),i(2),c(e.name),i(),s("showProgress",!0)("show",!0)("percent",e.progress)}}var w=(()=>{class t{constructor(){this.dataset={displayValue:"value",selectedItem:"",items:[{name:"item_1",value:"Bonobo 112",icon:"severity_ok",progress:78},{name:"item_2",value:"Zelda 113",icon:"severity_ok",progress:66},{name:"item_3",value:"Max 123",icon:"severity_critical",progress:7},{name:"item_4",value:"Apple 234",icon:"severity_ok",progress:24},{name:"item_5",value:"Quartz 124",icon:"severity_warning",progress:89}]},this.displayedItems=this.dataset.items}textboxChanged(e){this.displayedItems=(0,b.default)(this.dataset.items),this.displayedItems=this.displayedItems.filter(o=>o.value.includes(e.newValue))}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=u({type:t,selectors:[["nui-combobox-custom-template-example"]],standalone:!1,decls:3,vars:4,consts:()=>{let e;return e=$localize`:␟67f44542ec05ae560bd4a45c9e26a0d834489f4a␟7558413604919060916:Select item`,[["customComboboxTemplate",""],["placeholder",e,3,"changed","value","itemsSource","displayValue","customTemplate"],[3,"icon"],[1,"combobox-examples-custom-template"],[3,"showProgress","show","percent"]]},template:function(o,a){if(o&1){let l=O();C(0,y,7,6,"ng-template",null,0,T),m(2,"nui-combobox",1),E("changed",function(v){return _(l),d(a.textboxChanged(v))}),n()}if(o&2){let l=M(1);i(2),s("value",a.dataset.selectedItem)("itemsSource",a.displayedItems)("displayValue",a.dataset.displayValue)("customTemplate",l)}},dependencies:[x],styles:[".combobox-examples-custom-template[_ngcontent-%COMP%]{min-width:300px}"]})}}return t})();export{w as a};
