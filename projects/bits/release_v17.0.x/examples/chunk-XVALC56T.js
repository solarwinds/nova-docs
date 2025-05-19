import{a as u}from"./chunk-R2KYZHUG.js";import{c as d,g as c}from"./chunk-BCBJTPRO.js";import{Qb as l,Wb as i,Xb as t,Yb as r,nb as o,yc as e,zb as m}from"./chunk-MC3BMXIX.js";var E=(()=>{class n{constructor(){this.routesExample=`{
        path: "breadcrumb",
        component: components.BreadcrumbDocsExampleComponent,
        data: { breadcrumb: "Root" },
        children: [
            {
                path: "first-subroute",
                component: components.BreadcrumbFirstSubviewComponent,
                data: {
                    breadcrumb: "First Level",
                    url: "https://spacex.com"
                },
                children: [
                    {
                        path: "second-subroute",
                        component: components.BreadcrumbSecondSubviewComponent,
                        data: { breadcrumb: "Second Level" },
                    },
                ],
            },
        ],
    }`}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=m({type:n,selectors:[["nui-breadcrumb-docs-example"]],standalone:!1,decls:72,vars:1,consts:[["language","typescript",3,"code"],["href","../injectables/BreadcrumbStateService.html","target","_blank"],["filenamePrefix","breadcrumb-basic","exampleTitle","Basic Usage"]],template:function(a,p){a&1&&(i(0,"p"),e(1," The "),i(2,"code"),e(3,"<nui-breadcrumb>"),t(),e(4,` component represents a structure of nested items. Its state is based on data from each route that takes part in this structure.
`),t(),i(5,"h2"),e(6,"Required Modules"),t(),i(7,"ul")(8,"li")(9,"code"),e(10,"NuiBreadcrumbModule"),t()()(),i(11,"h2"),e(12,"Basic Usage"),t(),i(13,"p"),e(14,"To use breadcrumb do the following:"),t(),i(15,"ol")(16,"li"),e(17," Place an "),i(18,"code"),e(19,"<nui-breadcrumb>"),t(),e(20," in the template of a top level component. "),t(),i(21,"li"),e(22," Configure a RoutingModule with a tree structure of routes similar to the following: "),r(23,"nui-example-code",0),t(),i(24,"li"),e(25," Specify a "),i(26,"code"),e(27,"breadcrumb"),t(),e(28," item name in the "),i(29,"code"),e(30,"route.data"),t(),e(31," object. "),t(),i(32,"li"),e(33," Optionally, specify a "),i(34,"code"),e(35,"url"),t(),e(36," - the external url for the breadcrumb to navigate (using CTRL + Click, or simple Middle Click events). This setting should also be in the "),i(37,"code"),e(38,"route.data"),t(),e(39," object."),r(40,"br"),i(41,"mark"),e(42,"NOTE: regular left mouse click events will still navigate you using the angular router."),t()(),i(43,"li"),e(44," Get the initial data set for the breadcrumb via "),i(45,"code")(46,"a",1),e(47," BreadcrumbStateService"),t(),e(48,".getBreadcrumbState(routerState: ActivatedRoute)"),t(),e(49,". "),t(),i(50,"li"),e(51," Subscribe to router changes using "),i(52,"code")(53,"a",1),e(54," BreadcrumbStateService"),t(),e(55,".getNavigationSubscription(router: Router)"),t(),e(56," and update input data for the "),i(57,"code"),e(58,"BreadcrumbComponent"),t(),e(59,". "),t(),i(60,"li"),e(61," To perform navigation via "),i(62,"code"),e(63,"<nui-breadcrumb>"),t(),e(64," component items, subscribe to the "),i(65,"code"),e(66,"navigation"),t(),e(67," output. The subscription event payload is an absolute route path that can be used to trigger the navigation. "),t()(),i(68,"p"),e(69,` In addition to the above, the following example also illustrates how to perform a relative navigation.
`),t(),i(70,"nui-example-wrapper",2),r(71,"nui-breadcrumb-basic-example"),t()),a&2&&(o(23),l("code",p.routesExample))},dependencies:[c,d,u],encapsulation:2})}}return n})();export{E as a};
