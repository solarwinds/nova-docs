import{d as h}from"./chunk-7MRSYDVE.js";import{d as m}from"./chunk-W3P73PFO.js";import{pe as c,re as p}from"./chunk-3HSEZOBQ.js";import{Ha as d,Rb as s,Xb as i,Yb as t,Zb as n,vc as e,yb as r}from"./chunk-NNMBFNDY.js";var k=(()=>{class o{constructor(){this.kpiScaleSyncBroker=`
"tiles": {
    "providers": {
        kpiScaleSyncBroker: {
            providerId: NOVA_KPI_SCALE_SYNC_BROKER,
            properties: {
                scaleSyncConfig: [
                    { id: "value" },
                    { id: "label" },
                    { id: "units" },
                ],
            },
        },
    },
},
`,this.defineScaleBrokerOnDashboardSetup=`
// To add the sync broker globally to all the kpi tiles you may start with setting up the broker config
// Here you define which values to keep in sync
const brokerConfig = {
            providerId: NOVA_KPI_SCALE_SYNC_BROKER,
            properties: {
                scaleSyncConfig: [
                    { id: "value" },
                    { id: "label" },
                    { id: "units" },
                ],
            },
        };

// And here is how you set the sync broker for every KPI widget in the dashboard.
// Later, you will be able to override this setting for each separate KPI widget in the configuration (just like it is shown in the third
// width of the example with the 'kpiWidgetId3')
this.widgetTypesService.setNode(
    widgetTemplate,
    "widget",
    "tiles.providers.kpiScaleSyncBroker",
    brokerConfig
);
`}static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275cmp=d({type:o,selectors:[["kpi-sync-broker-docs"]],decls:47,vars:2,consts:[["language","typescript",3,"code"],["filenamePrefix","kpi-sync-broker","exampleTitle","KPI widget"],["filenamePrefix","kpi-sync-broker-for-all-tiles","exampleTitle","KPI widget"]],template:function(a,l){a&1&&(i(0,"h1"),e(1,"Syncing the Scale Values of the KPI tiles"),t(),i(2,"p"),e(3,` KPI widget may contain multiple tiles displaying different data which comes from various data sources. It is often the case that the values are of different sizes, and the ZoomDirective then takes care of fitting the big values into the KPI tile container in case the values overflow it. This results in KPI tiles values sized differently across the tiles of the same KPI widget, which is not pretty.
`),t(),i(4,"p")(5,"code"),e(6,"kpiScaleSyncBroker"),t(),e(7," provider solves this problem. This is a special type of provider which works specifically with the KPI widgets to sync the scale values of all, or some of the the KPI tiles values, like "),i(8,"code"),e(9,"label"),t(),e(10,", "),i(11,"code"),e(12,"units"),t(),e(13,", and "),i(14,"code"),e(15,"value"),t(),e(16,` across all the tiles of the same widget.
`),t(),i(17,"p"),e(18," To keep all the values of the KPI tiles in sync, add the "),i(19,"code"),e(20,"kpiScaleSyncBroker"),t(),e(21," to your widget's "),i(22,"code"),e(23,"tiles"),t(),e(24," configuration as a provider with the list of values to sync. It is not mandatory to sync all of the values, you can only leave some, in case you do not want to sync all three. "),n(25,"nui-example-code",0),t(),i(26,"p"),e(27,` In the example below, you can see that the widget on the right uses the sync broker and gets its tiles values synchronized gradually, even if the data comes with a significant delay.
`),t(),i(28,"nui-example-wrapper",1),n(29,"kpi-sync-broker-example"),t(),i(30,"h1"),e(31,"Apply the Sync Broker for All KPI Widgets across the Dashboards"),t(),i(32,"p"),e(33," The example above shows how to apply the "),i(34,"code"),e(35,"kpiScaleSyncBroker"),t(),e(36," to only one widget in the configuration. What if we want to apply it to all the KPI widgets on the entire dashboards? In this case it is possible to set the sync broker for all KPI widgets on the dashboard to sync some values by default. To do so consider adding the sync broker provider on the dashboard setup and initialization step using the "),i(37,"code"),e(38,"widgetTypesService"),t(),e(39,", like this: "),n(40,"nui-example-code",0),t(),i(41,"p"),e(42,` It is possible to override this setting later for each individual KPI widget in the configuration by setting the sync broker provider and identifying the needed value ids to sync the scale for.
`),t(),i(43,"p"),e(44,` On the example below you can see how all the KPI widget values, labels and units scales have been synchronized, except of the last widget with no sync for the tile value, because this was overridden in the configuration for this particular widget to not keep the values sizes in sync.
`),t(),i(45,"nui-example-wrapper",2),n(46,"kpi-sync-broker-for-all-tiles-example"),t()),a&2&&(r(25),s("code",l.kpiScaleSyncBroker),r(15),s("code",l.defineScaleBrokerOnDashboardSetup))},dependencies:[p,c,h,m],encapsulation:2})}}return o})();export{k as a};
