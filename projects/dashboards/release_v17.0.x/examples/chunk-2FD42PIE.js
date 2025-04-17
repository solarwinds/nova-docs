import{b as g}from"./chunk-SCS4EVWF.js";import{b as d}from"./chunk-4QX5LCT7.js";import{Nc as u,pe as c,re as h}from"./chunk-DKNPFPFG.js";import{Ha as m,Pb as o,Vb as t,Wb as i,Xb as n,tc as e,wb as r}from"./chunk-FGVILFLG.js";import{i as p}from"./chunk-T555DFTC.js";var E=(()=>{class s{constructor(){this.widgetFileText="",this.configuratorFileText="",this.predefinedGroping=`
listWidget: {
    providers: {
        [WellKnownProviders.Adapter]: {
            providerId: NOVA_DRILLDOWN_DATASOURCE_ADAPTER,
            properties: {
                ...
                // adapter props
                drillstate: [],
                groupBy: ["regionName", "subregionName"],
                groups: ["regionName", "subregionName"],
                ...
            },
        },
    },
},
`,this.featuredDeclaredText=`
        private supportedFeatures: IDataSourceFeatures = {
        search: { enabled: true },
    };`,this.featuresUsedText=`
        this.features = new DataSourceFeatures(this.supportedFeatures);
    `}ngOnInit(){return p(this,null,function*(){this.widgetFileText=yield import("./chunk-L3H6764T.js").then(d),this.configuratorFileText=yield import("./chunk-L7IFWETA.js").then(d)})}static{this.\u0275fac=function(l){return new(l||s)}}static{this.\u0275cmp=m({type:s,selectors:[["nui-drilldown-docs"]],decls:70,vars:5,consts:[["type","info"],["target","_blank","href","../additional-documentation/anatomy/data-sources.html"],["language","typescript",3,"code"],["filenamePrefix","drilldown-widget","exampleTitle","Basic Drilldown Widget Example"],["href","https://ux.solarwinds.io/nova/docs/nova-bits/latest/sdk/api-docs-ng2/interfaces/IDataSource.html","target","_blank"],["href","https://ux.solarwinds.io/nova/docs/nova-bits/latest/sdk/api-docs-ng2/classes/DataSourceFeatures.html#source","target","_blank"]],template:function(l,a){l&1&&(t(0,"h1"),e(1,"Drilldown Widget"),i(),t(2,"p"),e(3,` A Drilldown widget is used for filtering entities by input parameters. For example, the entity is Country, and you need to find Countries where Region is Asia and Subregion is South Asia. That's the case where it's handy to use a Drilldown widget. As mentioned above, widget configuration requires a user to select a single entity type(Country) and supply group-by properties(Region and Subregion).
`),i(),t(4,"p"),e(5,` When the user clicks on a row, the widget refreshes to show a new state. We call this operation "drilling down."
`),i(),t(6,"p"),e(7,` When the user drills down, we check the group-by property list. If there are more properties below the last-selected property, we move to the next property in the list. The list of values inherits any previously-applied filters.
`),i(),t(8,"p"),e(9,"If there are no more properties in the group-by list, we show entities."),i(),t(10,"nui-message",0),e(11,` DataSource is responsible for data preparation. Entities can be mocked, or obtained once, or obtained on each drilldown. Therefore filtering can be implemented locally or on the server-side.
`),i(),t(12,"nui-message",0),e(13," DataSource must have dataFieldsConfig field for the correct work of the Drilldown widget. See "),t(14,"a",1),e(15,"DataSource"),i(),e(16,`.
`),i(),t(17,"h2"),e(18,"Basic Drilldown"),i(),t(19,"p"),e(20,` The current example makes a request only once, and then apply grouping rules for received data. You can easily predefine grouping rules and drilling state in the widget config or set these properties using the Configurator.
`),i(),t(21,"nui-message",0),e(22," Be aware, "),t(23,"code"),e(24,"groupBy"),i(),e(25," and "),t(26,"code"),e(27,"groups"),i(),e(28,` contain keys of the Entity. Value of the property must be a string.
`),i(),t(29,"nui-message",0)(30,"code"),e(31,"groups"),i(),e(32," field contains possible "),t(33,"code"),e(34,"groupBy"),i(),e(35,` options
`),i(),n(36,"nui-example-code",2)(37,"br"),t(38,"nui-example-wrapper",3),n(39,"drilldown-widget-example"),i(),t(40,"h2"),e(41,"Configuring the Data Source with search"),i(),t(42,"p"),e(43," To use search within the Data Source you need to use data source Features. Data Source should "),t(44,"em"),e(45,"implement"),i(),t(46,"a",4)(47,"code"),e(48,"IDataSource"),i()(),e(49," interface and have "),t(50,"em"),e(51,"features"),i(),e(52,` property set.
`),i(),t(53,"p"),e(54,"Default way to do that is to declare the features:"),i(),n(55,"nui-example-code",2),t(56,"p"),e(57," And then pass it to the "),t(58,"a",5)(59,"code"),e(60,"DataSourceFeatures"),i()()(),n(61,"nui-example-code",2),t(62,"p"),e(63,` This part shows the actual widget definition. It includes, among other things, the components and providers that compose the widget itself.
`),i(),n(64,"nui-example-code",2),t(65,"h2"),e(66,"Configurator"),i(),t(67,"p"),e(68,` This part shows the form that's used for configuring (creating/editing) the widget.
`),i(),n(69,"nui-example-code",2)),l&2&&(r(36),o("code",a.predefinedGroping),r(19),o("code",a.featuredDeclaredText),r(6),o("code",a.featuresUsedText),r(3),o("code",a.widgetFileText),r(5),o("code",a.configuratorFileText))},dependencies:[h,c,u,g],encapsulation:2})}}return s})();export{E as a};
