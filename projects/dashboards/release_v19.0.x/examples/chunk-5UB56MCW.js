import"./chunk-VBFW7A5V.js";var i=`<h1>Syncing the Scale Values of the KPI tiles</h1>
<p>
    KPI widget may contain multiple tiles displaying different data which comes
    from various data sources. It is often the case that the values are of
    different sizes, and the ZoomDirective then takes care of fitting the big
    values into the KPI tile container in case the values overflow it. This
    results in KPI tiles values sized differently across the tiles of the same
    KPI widget, which is not pretty.
</p>

<p>
    <code>kpiScaleSyncBroker</code> provider solves this problem. This is a
    special type of provider which works specifically with the KPI widgets to
    sync the scale values of all, or some of the the KPI tiles values, like
    <code>label</code>, <code>units</code>, and <code>value</code>
    across all the tiles of the same widget.
</p>

<p>
    To keep all the values of the KPI tiles in sync, add the
    <code>kpiScaleSyncBroker</code> to your widget's
    <code>tiles</code> configuration as a provider with the list of values to
    sync. It is not mandatory to sync all of the values, you can only leave
    some, in case you do not want to sync all three.
    <nui-example-code language="typescript" [code]="kpiScaleSyncBroker" />
</p>

<p>
    In the example below, you can see that the widget on the right uses the sync
    broker and gets its tiles values synchronized gradually, even if the data
    comes with a significant delay.
</p>

<nui-example-wrapper filenamePrefix="kpi-sync-broker" exampleTitle="KPI widget">
    <kpi-sync-broker-example></kpi-sync-broker-example>
</nui-example-wrapper>

<h1>Apply the Sync Broker for All KPI Widgets across the Dashboards</h1>

<p>
    The example above shows how to apply the <code>kpiScaleSyncBroker</code> to
    only one widget in the configuration. What if we want to apply it to all the
    KPI widgets on the entire dashboards? In this case it is possible to set the
    sync broker for all KPI widgets on the dashboard to sync some values by
    default. To do so consider adding the sync broker provider on the dashboard
    setup and initialization step using the <code>widgetTypesService</code>,
    like this:

    <nui-example-code language="typescript" [code]="defineScaleBrokerOnDashboardSetup" />
</p>

<p>
    It is possible to override this setting later for each individual KPI widget
    in the configuration by setting the sync broker provider and identifying the
    needed value ids to sync the scale for.
</p>

<p>
    On the example below you can see how all the KPI widget values, labels and
    units scales have been synchronized, except of the last widget with no sync
    for the tile value, because this was overridden in the configuration for
    this particular widget to not keep the values sizes in sync.
</p>

<nui-example-wrapper
    filenamePrefix="kpi-sync-broker-for-all-tiles"
    exampleTitle="KPI widget"
>
    <kpi-sync-broker-for-all-tiles-example></kpi-sync-broker-for-all-tiles-example>
</nui-example-wrapper>
`;export{i as default};
