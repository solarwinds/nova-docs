import{b as u}from"./chunk-2IXY727T.js";import{pe as c,re as m}from"./chunk-3HSEZOBQ.js";import{Ha as d,Rb as l,Xb as a,Yb as t,Zb as i,vc as e,yb as r}from"./chunk-NNMBFNDY.js";var x=(()=>{class n{constructor(){this.featuredDeclaredText=`
        private supportedFeatures: IDataSourceFeatures = {
        search: { enabled: true },
        pagination: { enabled: true },
    };`,this.featuresUsedText=`
        this.features = new DataSourceFeatures(this.supportedFeatures);
    `,this.tableConfigurationText=`
        "table": {
            ...
            properties: {
                configuration: {
                    // define search configuration here
                    searchConfiguration: {
                        enabled: true,
                        // following optional properties below can be configured as well
                        // searchTerm: "search criteria here",
                        // searchDebounce: 300,
                    },
                } as ITableWidgetConfig,
            },
        },
    `}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=d({type:n,selectors:[["nui-table-search-docs"]],decls:44,vars:3,consts:[["href","../additional-documentation/anatomy/data-sources.html","target","_blank"],["href","../additional-documentation/widget-types/table.html","target","_blank"],["filenamePrefix","table-widget-search","exampleTitle","Table widget with Search"],["href","https://ux.solarwinds.io/nova/docs/nova-bits/latest/sdk/api-docs-ng2/interfaces/IDataSource.html","target","_blank"],["language","typescript",3,"code"],["href","https://ux.solarwinds.io/nova/docs/nova-bits/latest/sdk/api-docs-ng2/classes/DataSourceFeatures.html#source","target","_blank"]],template:function(o,s){o&1&&(a(0,"h1"),e(1,"Table Widget with Search Functionality"),t(),a(2,"p"),e(3,` Table Widget can have search functionality. This page contains information only about setting up the search, so before proceeding get familiar with the following:
`),t(),a(4,"ul")(5,"li")(6,"a",0)(7,"code"),e(8,"Data Sources"),t()(),e(9," - for information about Data Sources and their Features. "),t(),a(10,"li")(11,"a",1)(12,"code"),e(13,"Table Widget"),t()(),e(14," - for configuring a table widget itself. "),t()(),a(15,"nui-example-wrapper",2),i(16,"table-widget-search-example"),t(),a(17,"h2"),e(18,"Configuring the Data Source"),t(),a(19,"p"),e(20," To use search within the Data Source you need to use data source Features. Data Source should "),a(21,"em"),e(22,"implement"),t(),a(23,"a",3)(24,"code"),e(25,"IDataSource"),t()(),e(26," interface and have "),a(27,"em"),e(28,"features"),t(),e(29,` property set.
`),t(),a(30,"p"),e(31,"Default way to do that is to declare the features:"),t(),i(32,"nui-example-code",4),a(33,"p"),e(34," And then pass it to the "),a(35,"a",5)(36,"code"),e(37,"DataSourceFeatures"),t()()(),i(38,"nui-example-code",4),a(39,"h2"),e(40,"Configuring the Widget"),t(),a(41,"p"),e(42,` To configure the widget you have to enable search in the widget configuration:
`),t(),i(43,"nui-example-code",4)),o&2&&(r(32),l("code",s.featuredDeclaredText),r(6),l("code",s.featuresUsedText),r(5),l("code",s.tableConfigurationText))},dependencies:[m,c,u],encapsulation:2})}}return n})();export{x as a};
