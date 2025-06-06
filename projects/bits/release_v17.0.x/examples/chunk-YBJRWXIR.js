import"./chunk-XR34LRGE.js";var t=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiTabsModule</code>
    </li>
</ul>

<h2>Tabs Overview</h2>
<p>
    The <code>TabHeading</code> and
    <code
        ><a
            href="https://nova-ui.solarwinds.io/bits/main/components/TabHeadingGroupComponent.html#info"
            target="_blank"
        >
            TabHeadingGroup</a
        ></code
    >
    components are the building blocks for setting up the number of tabs that
    can accept data and controlling the content linked to them.
</p>
<p>
    The <code>TabHeading</code> component is an improved version of the legacy
    <code>Tab</code>, which is fully dependent on
    <code
        ><a
            href="https://nova-ui.solarwinds.io/bits/main/components/TabHeadingGroupComponent.html#info"
            target="_blank"
            >TabHeadingGroup</a
        ></code
    >, a descendant of <code>TabGroup</code>. <code>TabHeading</code> delivers a
    proper layout and styling that corresponds to UX requirements, and accepts
    any content. Users are free to put anything inside the
    <code>TabHeading</code>, whether it's an icon, text, or anything else. The
    <code>TabHeading</code> component doesn't provide any layout alignments for
    its content and only styles the text according to UX mockups.
    <code>TabHeading</code> has several inputs that allow you to set the
    component to an active or inactive state or assign a unique index to the tab
    to correlate it with content provided by user. A tab also emits an event via
    its <code>selected</code> output whenever it becomes active.
</p>
<p>
    <code>TabHeadingGroup</code> manages the <code>TabHeading</code> component
    state and placement direction, providing necessary styles and layout for
    properly displaying <code>TabHeading</code> components in a group.
    <code>TabHeadingGroup</code>'s <code>vertical</code> input changes the
    direction of tab placement to vertical mode, and its
    <code>selected</code> output emits the id of the selected
    <code>TabHeading</code>.
</p>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Horizontal Tabs</h2>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Pay Attention!</strong> This and other examples below contain
    <strong>disabled</strong> tabs, which are NOT approved by UX who consider
    using disabled tabs to be a bad practice. Sync with your UX team on the
    matter before using them.
</nui-message>
<p>
    Probably the most common use case is placing tabs horizontally.
    <code>TabHeadingGroup</code> component sets the
    <code>TabHeading</code> direction via its <code>vertical</code> input which
    is set to <code>false</code> by default. Provide a config for each
    <code>TabHeading</code> with the desired tab title and other contents.
    <strong
        >Only the tab title <i>font</i> is being formatted by the
        component!</strong
    >
    This means user is responsible for the layout and styles of any contents
    they put within the tabs except the tab title.
    <br />
    <mark>
        <strong>Note</strong> that the icon color must follow the tab title
        color,
        <a href="https://marvelapp.com/5d7h3hd/screen/46562834" target="_blank"
            >according to UX requirements</a
        >
    </mark>
</p>

<nui-example-wrapper
    filenamePrefix="tab-heading-group-horizontal"
    exampleTitle="Tab Heading Group with Horizontal Alignment of Tabs"
>
    <div class="row">
        <div class="col">
            <nui-tab-heading-group-horizontal-example></nui-tab-heading-group-horizontal-example>
        </div>
    </div>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Horizontal Tabs with Icons</h2>
<p>
    In this examples it is clearly seen how icons can be added to the tab title
    and properly aligned with the text.
</p>

<nui-example-wrapper
    filenamePrefix="tab-heading-group-horizontal-with-icons"
    exampleTitle="Tab Heading Group with Horizontal Alignment of Tabs and Icons"
>
    <div class="row">
        <div class="col">
            <nui-tab-heading-group-horizontal-with-icons-example></nui-tab-heading-group-horizontal-with-icons-example>
        </div>
    </div>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->
<h2>Horizontal Tabs with Icons Only</h2>
<p>
    If icons is the only thing you want tabs to render - this is how you do it.
</p>

<nui-example-wrapper
    filenamePrefix="tab-heading-group-horizontal-with-icons-only"
    exampleTitle="Tab Heading Group with Icons Only Alignened Horizontally"
>
    <div class="row">
        <div class="col">
            <nui-tab-heading-group-horizontal-with-icons-only-example></nui-tab-heading-group-horizontal-with-icons-only-example>
        </div>
    </div>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Vertical Tabs</h2>
<p>
    User is allowed to easily place the tab headings vertically using the
    <code>vertical</code> input of the <code>TabHeadingGroup</code> component.
    <br />
    Note that, for the purposes of this example, each
    <code>TabHeading</code> has <strong>max-width</strong> set to
    <mark>250px</mark>.
</p>
<nui-example-wrapper
    filenamePrefix="tab-heading-group-vertical"
    exampleTitle="Tab Heading Group with Vertical Alignment of Tabs"
>
    <div class="d-flex flex-row">
        <div class="d-flex flex-column">
            <nui-tab-heading-group-vertical-example></nui-tab-heading-group-vertical-example>
        </div>
    </div>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Vertical Tabs with Icons</h2>
<p>Icons can be added to the vertically aligned tabs iwth ease here as well.</p>
<nui-example-wrapper
    filenamePrefix="tab-heading-group-vertical"
    exampleTitle="Tab Heading Group with Icons and Vertical Alignment of Tabs"
>
    <div class="d-flex flex-row">
        <div class="d-flex flex-column">
            <nui-tab-heading-group-vertical-with-icons-example></nui-tab-heading-group-vertical-with-icons-example>
        </div>
    </div>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Vertical Tabs with Icon Only</h2>
<p>This example uses icons as the only <code>TabHeading</code> content.</p>

<nui-example-wrapper
    filenamePrefix="tab-heading-group-with-icons"
    exampleTitle="Vertically Aligned Tab Heading Group with Icon Tabs"
>
    <div class="d-flex flex-row">
        <div class="d-flex flex-column">
            <nui-tab-heading-group-with-icons-example></nui-tab-heading-group-with-icons-example>
        </div>
    </div>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Responsive Tab Headings</h2>
<p>
    If there are too many tabs to fit the parent container, the
    <code>TabHeadingGroup</code> behaves responsively by adding navigation
    arrows to allow the user to scroll back and forth among the tabs.
</p>
<nui-example-wrapper
    filenamePrefix="tab-heading-group-responsive"
    exampleTitle="Responsive Tab Heading Group"
>
    <nui-tab-heading-group-responsive-example></nui-tab-heading-group-responsive-example>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Tab Headings with Content</h2>
<p>
    The following example demonstrates how to display the content associated
    with a tab when the user switches from one tab to another.
</p>

<nui-example-wrapper
    filenamePrefix="tab-heading-group-with-content"
    exampleTitle="Tab Heading Group with Content"
>
    <nui-tab-heading-group-with-content-example
        icon="true"
    ></nui-tab-heading-group-with-content-example>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Dynamic Tabs</h2>
<p>The following example demonstrates how to dynamically add or remove tabs.</p>
<p>
    <mark>
        <strong>Note</strong> that handling switching to another tab, after
        active tab is deleted, happens in example code, not inside the
        framework!
    </mark>
</p>

<nui-example-wrapper
    filenamePrefix="tab-heading-group-dynamic"
    exampleTitle="Dynamic Tabs"
>
    <nui-tab-heading-group-dynamic-example></nui-tab-heading-group-dynamic-example>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------------------ -->

<h2>Tab Headings with Router</h2>
<p>
    For more complex scenarios it might be useful to set up routing for the tabs
    to dynamically change the contents through the <mark>router-outlet</mark>.
    In this case each tab with corresponding content will be accessible via its
    own link.<br />
</p>
<p>
    To successfully add routing one has to add corresponding routing settings to
    the module. Add children router for the tabs.
    <nui-expander i18n-header header="Click to View Configuration">
        <nui-example-code language="typescript" [code]="tabsRouteConfig" />
    </nui-expander>
</p>
<p>
    In the following example it is assumed that the contents for each tab are
    rendered from a separate component and that the tab's unique
    <strong>id</strong> matches its route.
</p>
<p>
    <nui-message type="warning" allowDismiss="true">
        Because this example is in the iframe you won't see the route changes.
        To watch routes change in browser's address bar please navigate to
        <a href="./#/tabgroup" target="_blank">this exmaples page</a>. The link
        opens in a new tab.
    </nui-message>
</p>

<nui-example-wrapper
    filenamePrefix="tab-heading-group-with-router"
    exampleTitle="Tab Heading Group with Router"
>
    <nui-tab-heading-group-with-router-example
        icon="true"
    ></nui-tab-heading-group-with-router-example>
</nui-example-wrapper>
`;export{t as default};
