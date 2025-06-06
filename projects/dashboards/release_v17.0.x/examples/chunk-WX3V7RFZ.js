import"./chunk-T555DFTC.js";var t=`<h1>Overview</h1>

<p>
    Nova Dashboards provide feature developers with a common solution for
    presenting data coming from various sources within a single view, as well as
    a set of predefined widget visualizations that are 100% configuration-driven
    and designed specifically to conform to the Nova Design Language (NDL).
</p>
<p>
    Even though NDL-prescriptive features are provided out of the box, the
    framework and its set of widgets are made to be flexible! Individual parts
    of it can be overridden, and custom widgets can be implemented without an
    inordinate amount of effort. However, as with any flexible framework, it's
    important to remember that the more customizations you create, the more
    initial work and maintenance effort you'll absorb into your product's code
    base.
</p>

<h2>Why?</h2>
<p>
    For Solarwinds, the summary-style dashboard is arguably the centerpiece of
    many of our products. As such, it's important to have a common way to
    fulfill the dashboard use-case for as many of those products as possible.
    Our primary goals are to:
</p>
<ol>
    <li>
        Prevent developers from having to reinvent dashboard systems from
        product to product, while losing the lessons learned from other
        implementations.
    </li>
    <li>
        Minimize the overhead of building and maintaining custom widget
        visualizations that can easily be solved by a common visualization.
    </li>
    <li>
        Accelerate development of dashboard features by providing a framework
        that can be quickly bootstrapped and populated by configuration.
    </li>
    <li>
        Empower end-users to leverage our visualizations by injecting any data
        into our widgets, as long as it's properly formatted.
    </li>
</ol>
<p>
    But the reasons for having a common dashboarding framework are not just
    technical. With the goal of proliferating the One Solarwinds philosophy, a
    common dashboard solution makes it easier to work towards achieving a
    singular look and feel across product lines.
</p>

<div class="pt-5">
    <hero-dashboard></hero-dashboard>
</div>

<h2>Architectural Goals</h2>
<ul>
    <li>
        To allow partial changes of widget behavior/layout without having to
        re-implement an entire widget.
    </li>
    <li>To implement stateless widgets that allow for easy reuse.</li>
    <li>
        To allow the entire state of the dashboard to be serializable and easily
        stored in a database.
    </li>
    <li>
        To provide an easy-to-use API for communicating within a widget and
        between the dashboard and its widgets.
    </li>
    <li>
        To allow for a tiered prioritization of widget state in which runtime
        data takes precedence over the stored widget configuration.
    </li>
    <li>
        To have a pure, self-contained widget configurator for use in widget
        editing and cloning.
    </li>
    <li>
        To have widgets that are infinitely resizable, movable, editable,
        clonable, and removable. The widgets can span multiple rows and columns,
        can refresh themselves, and can be updated in real time.
    </li>
    <li>To provide a predefined "starter pack" of widget types.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li>
        <a href="https://angular.io/" target="_blank">Angular</a> - Provides the
        project structure, dependency injection, etc. for development. Apps
        employing Nova Dashboards currently must also be Angular-based.
    </li>
    <li>
        <a
            href="https://github.com/tiberiuzuld/angular-gridster2/blob/master/README.md"
            target="_blank"
            >angular-gridster2</a
        >
        - Also known simply as Gridster, angular-gridster2 is a package used by
        Nova Dashboards that simplifies the process of creating and maintaining
        intuitive, draggable grid layouts of DOM elements. In the case of Nova
        Dashboards, these elements take the form of widgets which can span one
        or more rows and columns. In addition to draggability, Nova Dashboards'
        use of Gridster allows users to dynamically add or remove widgets from
        the the dashboard grid.
    </li>
</ul>

<h2>Supported Widgets</h2>
<ul>
    <li>
        <a
            href="../additional-documentation/widget-types/table.html"
            target="_blank"
            >Table</a
        >
        - For presenting a sortable set of data in rows and columns
    </li>
    <li>
        <a
            href="../additional-documentation/widget-types/proportional.html"
            target="_blank"
            >Proportional</a
        >
        - For presenting related data points as part of a whole
    </li>
    <li>
        <a
            href="../additional-documentation/widget-types/kpi.html"
            target="_blank"
            >KPI</a
        >
        (Key Performance Indicator) - For displaying one or more key values
    </li>
    <li>
        <a
            href="../additional-documentation/widget-types/risk-score.html"
            target="_blank"
            >Risk Score</a
        >
        - For displaying one or more score values
    </li>
    <li>
        <a
            href="../additional-documentation/widget-types/timeseries.html"
            target="_blank"
            >Timeseries</a
        >
        - For displaying changes in values over time
    </li>
    <li>
        <a
            href="../additional-documentation/widget-types/embedded-content.html"
            target="_blank"
            >Embedded Content</a
        >
        - For displaying web layouts
    </li>
</ul>

<h2>Planned Widgets</h2>
<ul>
    <li>Maps/Graph - to provide a visualization of related nodes</li>
    <li>Drill-down - to provide a view of statuses within hierarchical data</li>
</ul>
`;export{t as default};
