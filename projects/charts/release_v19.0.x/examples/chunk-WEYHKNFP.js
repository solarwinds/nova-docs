import"./chunk-B7O3QC5Z.js";var i=`<h1>Domains</h1>

<p>A domain on a scale represents the breadth of visualized data.</p>
<p>
    For continuous data, the scale is represented using two values, which define
    the interval.
</p>
<pre>{{ continuousDomain }}</pre>
<p>
    An ordinal scale, on the other hand, which is used for data divided into
    categories represents its domain as a list of discrete values.
</p>
<pre>{{ ordinalDomain }}</pre>
<h2>Domain Calculation</h2>
<p>
    By default, scale domain calculation is done automatically based on the
    accompanying series data. However, domains can also be configured as fixed
    at two domain endpoints.
</p>

<h3>Fixed Domain</h3>
<p>
    Fixed domains are user-defined domains for scales that are not intended to
    be updated internally by the chart. Examples of those could be:
</p>
<ul>
    <li>
        - Time scale on a time series chart where we want to be in control of
        the displayed time range, which is very often a subset of all data
        provided
    </li>
    <li>
        - Percentage scale representing a fixed range of
        <code>&lt;0%, 100%&gt;</code>
    </li>
    <li>- Ordinal scales such as those for bar chart categories</li>
</ul>
<p>
    A domain can be set to fixed using the
    <code
        ><a href="../classes/Scale.html#fixDomain" target="_blank"
            >fixDomain</a
        ></code
    >
    method.
</p>
<pre>{{ fixedDomainShorthand }}</pre>
<p>
    If a domain is fixed, it's domain calculation behavior is ignored, but by
    switching
    <code>isDomainFixed</code> back and forth, you can switch between automatic
    and fixed domain.
</p>
<pre>{{ disablingFixedDomain }}</pre>
<nui-example-wrapper
    filenamePrefix="fixed-domains"
    exampleTitle="Fixed Domains"
>
    <nui-chart-fixed-domains-example></nui-chart-fixed-domains-example>
</nui-example-wrapper>
<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> The example above initially uses an automatic domain
    to determine the dimensions of the visualized data. When one of the Fix
    Domain buttons is clicked, the target domain is recalculated using a set of
    specified domain endpoints.
</nui-message>
<p>
    An alternate way to fix a domain is to set the domain values directly and
    configure the domain as fixed:
</p>
<pre>{{ fixedDomainExplicit }}</pre>

<h3>Automatic Domain</h3>
<p>
    Scale domains for a chart series are automatically calculated using the
    chart series data and are updated on every chart update. The default
    behavior is to calculate the domain from the range of values that is
    currently visible on the chart. This is implemented in the
    <a
        href="../../../miscellaneous/variables.html#getAutomaticDomain"
        target="_blank"
        >getAutomaticDomain</a
    >
    function, which is the default value of a scale's
    <a href="../../../interfaces/IScale.html#domainCalculator" target="_blank"
        >domainCalculator</a
    >
    property.
</p>
<h4>Setting an Included Interval</h4>
<p>
    In addition to the default automatic domain calculation, it's possible to
    set a min/max interval that is guaranteed to be included in the calculated
    domain. To set a min/max domain interval, assign the
    <code
        ><a
            href="../../../miscellaneous/variables.html#getAutomaticDomainWithIncludedInterval"
            target="_blank"
            >getAutomaticDomainWithIncludedInterval</a
        ></code
    >
    function result to the scale's
    <a href="../../../interfaces/IScale.html#domainCalculator" target="_blank"
        ><code>domainCalculator</code></a
    >
    property:
</p>
<pre>{{ automaticDomainWithIncludedInterval }}</pre>
<h4>A Fixed Domain Scale May Affect a Related Scale's Automatic Domain</h4>
<p>
    A concept worth mentioning is that the automatic domain calculation for a
    scale may be affected by the fixed domain of another related scale. What may
    happen is the data set of a y-axis scale with an automatic domain, is
    truncated by the data on the x-axis scale by virtue of the opposing x
    scale's fixed domain. In this case, only the data within the y scale's
    truncated data set is considered when calculating its domain. In other
    words, if you have an automatic-domain y scale and a fixed-domain time
    series x scale, only data on the y scale that is within the fixed time
    window on the x is considered for y domain calculation.
</p>

<hr />
<nui-message type="info" [allowDismiss]="false">
    For more information on domains, check out the
    <a href="https://github.com/d3/d3-scale" target="_blank"
        >D3 scales documentation</a
    >.
</nui-message>
`;export{i as default};
