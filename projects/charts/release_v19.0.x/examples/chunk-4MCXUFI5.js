import"./chunk-B7O3QC5Z.js";var a=`<h1>Chart Events</h1>
<p>
    A chart's
    <code><a href="../classes/EventBus.html" target="_blank">EventBus</a></code>
    events allow your code to potentially keep up to date with events happening
    with your chart. These can include user interactions, such as mouse
    movements, clicks, mouseenter, mouseleave, etc., or things that are
    happening internally with your chart such as refresh events, destroy events,
    setting of domains, etc.
</p>
<p>
    The payload of each event is of type
    <code
        ><a href="../interfaces/IChartEvent.html" target="_blank"
            >IChartEvent</a
        ></code
    >
    and the actual data of the payload is contained in its
    <code>data</code> property.
</p>
<h2>Supported Events</h2>
<h3>Interaction Events</h3>
<h4>
    <a href="../miscellaneous/variables.html#MOUSE_ACTIVE_EVENT" target="_blank"
        >MOUSE_ACTIVE_EVENT</a
    >
</h4>
<p>
    This event is triggered each time the mouse enters or leaves the chart. The
    data is a boolean value: true for mouseenter and false for mouseleave.
</p>
<h4>
    <a
        href="../miscellaneous/variables.html#INTERACTION_VALUES_EVENT"
        target="_blank"
        >INTERACTION_VALUES_EVENT</a
    >
</h4>
<p>
    Triggered when the chart is clicked and as the mouse moves across the chart,
    the data of this event's payload is of type
    <code
        ><a href="../interfaces/IInteractionValuesPayload.html" target="_blank"
            >IInteractionValuesPayload</a
        ></code
    >
    which consists of the raw scale values corresponding to the mouse's position
    over the chart.
</p>
<h4>
    <a
        href="../miscellaneous/variables.html#HIGHLIGHT_DATA_POINT_EVENT"
        target="_blank"
        >HIGHLIGHT_DATA_POINT_EVENT</a
    >
</h4>
<p>
    This event is triggered as the mouse moves across the chart, and the data of
    its payload is of type
    <code
        ><a href="../interfaces/IDataPoint.html" target="_blank"
            >IDataPoint</a
        ></code
    >
    which consists of information about the data point closest to the mouse's
    position within a single data series.
</p>
<h4>
    <a
        href="../miscellaneous/variables.html#SELECT_DATA_POINT_EVENT"
        target="_blank"
        >SELECT_DATA_POINT_EVENT</a
    >
</h4>
<p>
    Triggered when a specific data point is clicked on the chart, the data of
    the payload is of type
    <code
        ><a href="../interfaces/IDataPoint.html" target="_blank"
            >IDataPoint</a
        ></code
    >
    and consists of information about the clicked data point. Currently, this
    event is only supported for bar charts.
</p>
<h4>
    <a
        href="../miscellaneous/variables.html#HIGHLIGHT_SERIES_EVENT"
        target="_blank"
        >HIGHLIGHT_SERIES_EVENT</a
    >
</h4>
<p>
    Triggered when a series is hovered, the payload's <code>data</code> property
    is of type
    <code
        ><a href="../interfaces/IDataPoint.html" target="_blank"
            >IDataPoint</a
        ></code
    >
    which contains information specifically about the target series. This event
    is currently supported for line, bar, pie, and donut charts. For line
    charts, this event can be enabled by setting the
    <code
        ><a href="../interfaces/ILineRendererConfig.html" target="_blank"
            >ILineRendererConfig</a
        ></code
    >
    &nbsp;<code>interactionStrategy</code> property to an instance of
    <code
        ><a
            href="../classes/LineSelectSeriesInteractionStrategy.html"
            target="_blank"
            >LineSelectSeriesInteractionStrategy</a
        ></code
    >. For bar charts, this event can be enabled by setting the
    <code
        ><a href="../interfaces/IBarRendererConfig.html" target="_blank"
            >IBarRendererConfig</a
        ></code
    >
    &nbsp;<code>highlightStrategy</code> property to an instance of
    <code
        ><a href="../classes/BarSeriesHighlightStrategy.html" target="_blank"
            >BarSeriesHighlightStrategy</a
        ></code
    >. Pass the configuration object to the renderer's constructor.
</p>
<h4>
    <a
        href="../miscellaneous/variables.html#INTERACTION_SERIES_EVENT"
        target="_blank"
        >INTERACTION_SERIES_EVENT</a
    >
</h4>
<p>
    Triggered when a series is clicked, it contains information specifically
    about the target series. The
    <code>data</code> property of its payload consists of two sub-properties:
    <code>interactionType</code> and <code>payload</code>. The
    <code>interactionType</code> property is of type
    <code
        ><a
            href="../miscellaneous/enumerations.html#InteractionType"
            target="_blank"
            >InteractionType</a
        ></code
    >
    and indicates the type of interaction that occurred, e.g.
    <code>InteractionType.Click</code>, and the <code>payload</code> property is
    of type
    <code
        ><a href="../interfaces/IDataPoint.html" target="_blank"
            >IDataPoint</a
        ></code
    >.
</p>
<p>
    This event is currently supported only for line charts. Enable this event on
    the chart by setting the
    <code
        ><a href="../interfaces/ILineRendererConfig.html" target="_blank"
            >ILineRendererConfig</a
        ></code
    >
    &nbsp;<code>interactionStrategy</code> property to an instance of
    <code
        ><a
            href="../classes/LineSelectSeriesInteractionStrategy.html"
            target="_blank"
            >LineSelectSeriesInteractionStrategy</a
        ></code
    >. Pass the configuration object to the renderer's constructor.
</p>
<h4>
    <a
        href="../miscellaneous/variables.html#INTERACTION_DATA_POINTS_EVENT"
        target="_blank"
        >INTERACTION_DATA_POINTS_EVENT</a
    >
</h4>
<p>
    Triggered on click or mousemove over the chart, the
    <code>data</code> property for this event is of type
    <code
        ><a
            href="../interfaces/IInteractionDataPointsEvent.html"
            target="_blank"
            >IInteractionDataPointsEvent</a
        ></code
    >
    and consists of information about the data points closest to the mouse's
    position over the chart across all the data series.
</p>
<h4>
    <a
        href="../miscellaneous/variables.html#INTERACTION_DATA_POINT_EVENT"
        target="_blank"
        >INTERACTION_DATA_POINT_EVENT</a
    >
</h4>
<p>
    Triggered on click or hover over a line or area chart's individual data
    point markers, the
    <code>data</code> property of this event is of type
    <code
        ><a href="../interfaces/IInteractionDataPointEvent.html" target="_blank"
            >IInteractionDataPointEvent</a
        ></code
    >
    and consists of information about the data point being hovered or clicked.
</p>
<p>
    This event is currently supported for line and area charts. Enable the event
    by setting the <code>markerInteraction</code> property on the
    <code
        ><a href="../interfaces/ILineRendererConfig.html" target="_blank"
            >ILineRendererConfig</a
        ></code
    >
    or
    <code
        ><a href="../interfaces/IAreaRendererConfig.html" target="_blank"
            >IAreaRendererConfig</a
        ></code
    >
    to an object of type
    <code
        ><a href="../interfaces/IMarkerInteractionConfig.html" target="_blank"
            >IMarkerInteractionConfig</a
        ></code
    >
    with a value of <code>true</code> for the <code>enabled</code> property.
    Pass this configuration object to the renderer's constructor.
</p>
<h4>
    <a
        href="../miscellaneous/variables.html#SERIES_STATE_CHANGE_EVENT"
        target="_blank"
        >SERIES_STATE_CHANGE_EVENT</a
    >
</h4>
<p>
    Triggered on series render state changes such as visibility or emphasis, the
    <code>data</code> property of this event is of type
    <code
        ><a href="../interfaces/IRenderStateData.html" target="_blank"
            >IRenderStateData[]</a
        ></code
    >
    and consists of information about the render state of each series. The event
    will be emitted if the user hovers over or deselects a series on the legend
    for example.
</p>
<h3>Internal Events</h3>
<h4>
    <a href="../miscellaneous/variables.html#DESTROY_EVENT" target="_blank"
        >DESTROY_EVENT</a
    >
</h4>
<p>
    Triggered when the chart instance is destroyed. This event's payload has a
    null <code>data</code>
    property.
</p>
<h4>
    <a href="../miscellaneous/variables.html#SET_DOMAIN_EVENT" target="_blank"
        >SET_DOMAIN_EVENT</a
    >
</h4>
<p>
    This event can be triggered by an entity that wants to request a domain
    change for a set of scales. For example, if a zoom plugin needs to change
    the domain of the x scale on a line chart, it can emit one of these with a
    payload whose <code>data</code> property consists of a mapping of scale id
    to domain (<code
        ><a href="../interfaces/ISetDomainEventPayload.html" target="_blank"
            >ISetDomainEventPayload</a
        ></code
    >).
</p>
<h4>
    <a href="../miscellaneous/variables.html#REFRESH_EVENT" target="_blank"
        >REFRESH_EVENT</a
    >
</h4>
<p>
    Trigger this event to refresh the chart. The payload of this event is null.
</p>

<h4>
    <a
        href="../miscellaneous/variables.html#CHART_VIEW_STATUS_EVENT"
        target="_blank"
        >CHART_VIEW_STATUS_EVENT</a
    >
</h4>
<p>
    Triggered when the chart becomes visible or hidden within its nearest
    scrollable parent. The <code>data</code> property of this event is of type
    <code
        ><a
            href="../interfaces/IChartViewStatusEventPayload.html"
            target="_blank"
            >IChartViewStatusEventPayload</a
        ></code
    >.
</p>

<h4>
    <a
        href="../miscellaneous/variables.html#AXES_STYLE_CHANGE_EVENT"
        target="_blank"
        >AXES_STYLE_CHANGE_EVENT</a
    >
</h4>
<p>
    Triggered when the right or left axis of an XY grid with two Y axes changes
    its opacity due to a change in series emphasis. The
    <code>data</code> property of this event is of type <code></code>
    <code
        ><a
            href="../interfaces/IAxesStyleChangeEventPayload.html"
            target="_blank"
            >IAxesStyleChangeEventPayload</a
        ></code
    >.
</p>

<h2>Basic Event Processing</h2>

<p>
    This example demonstrates the process of subscribing to an event of your
    choice from the chart's event bus. Keep in mind that when you're using an
    OnPush change detection strategy in your component, you need to manually
    check for changes whenever you expect your UI to update.
</p>

<nui-example-wrapper
    filenamePrefix="events-basic-example"
    exampleTitle="Basic Event Processing"
>
    <nui-chart-events-basic></nui-chart-events-basic>
</nui-example-wrapper>

<h2>Interaction Event Sampler</h2>
<p>
    The following event sampler tool allows you to interact with the chart to
    see the resulting event payload.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> INTERACTION_SERIES_EVENT is currently only supported
    for the line chart, and INTERACTION_DATA_POINT_EVENT is currently only
    supported for line and area charts. To see these events in action in the
    sampler, select the line chart and either the INTERACTION_SERIES_EVENT or
    the INTERACTION_DATA_POINT_EVENT.
</nui-message>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> HIGHLIGHT_SERIES_EVENT is currently supported for
    pie, donut, line, bar chart types. The following example only enables the
    event for line and grouped bar charts. To see it in action in the sampler,
    select the line or grouped bar chart and the HIGHLIGHT_SERIES_EVENT.
</nui-message>
<nui-chart-event-sampler></nui-chart-event-sampler>
`;export{a as default};
