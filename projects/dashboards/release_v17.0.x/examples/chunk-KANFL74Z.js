import{a as m}from"./chunk-L6Y33OWD.js";import{pe as g,re as d}from"./chunk-3HSEZOBQ.js";import{Ha as l,Rb as p,Xb as i,Yb as e,Zb as o,vc as t,yb as r}from"./chunk-NNMBFNDY.js";var h=(()=>{class a{constructor(){this.tableConfigurationText=`
        "table": {
            ...
            properties: {
                configuration: {
                    // define paginator configuration here
                    scrollType: ScrollType.paginator,
                    paginatorConfiguration: {
                        pageSize: 10, // Value have to be one of pageSizeSet values
                        pageSizeSet: [10, 20, 30],
                    },
                    // If not specified, default is set to 
                    // pageSize: 10,
                    // pageSizeSet: [10, 20, 50], 
                    hasVirtualScroll: false, // Has to be speciefied because of backward compatibility
                } as ITableWidgetConfig,
            },
        },
    `}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275cmp=l({type:a,selectors:[["nui-table-paginator-docs"]],decls:22,vars:1,consts:[["href","../additional-documentation/anatomy/data-sources.html","target","_blank"],["href","../additional-documentation/widget-types/table.html","target","_blank"],["filenamePrefix","table-widget-paginator","exampleTitle","Table widget with Paginator"],["language","typescript",3,"code"]],template:function(n,s){n&1&&(i(0,"h1"),t(1,"Table Widget with paginator"),e(),i(2,"p"),t(3,` Table Widget can have pagination functionality. This page contains information only about setting up the pagination, so before proceeding get familiar with the following:
`),e(),i(4,"ul")(5,"li")(6,"a",0)(7,"code"),t(8,"Data Sources"),e()(),t(9," - for information about Data Sources and their Features. "),e(),i(10,"li")(11,"a",1)(12,"code"),t(13,"Table Widget"),e()(),t(14," - for configuring a table widget itself. "),e()(),i(15,"nui-example-wrapper",2),o(16,"table-widget-paginator-example"),e(),i(17,"h2"),t(18,"Configuring the Widget"),e(),i(19,"p"),t(20,` To configure the widget you have to enable paginator in the widget configuration:
`),e(),o(21,"nui-example-code",3)),n&2&&(r(21),p("code",s.tableConfigurationText))},dependencies:[d,g,m],encapsulation:2})}}return a})();export{h as a};
