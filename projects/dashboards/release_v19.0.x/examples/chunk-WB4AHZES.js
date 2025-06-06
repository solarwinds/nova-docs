import"./chunk-VBFW7A5V.js";var a=`<h1>Dynamic Header Links</h1>
<p>
    Widget headers provide a possibility to configure a link URL that shows a
    link icon and makes the header clickable. This URL is static, but there is
    an option to implement a dynamic URL. This is done by implementing a custom
    class and defining it as a provider associated with the widget header in
    targeted widget types. This custom class has to implement the
    <code
        ><a href="../interfaces/IHeaderLinkProvider.html" target="_blank"
            >IHeaderLinkProvider</a
        ></code
    >
    interface which defines a method returning a dynamic link URL. This URL can
    be based on the <code>template</code> input, which is the static URL that
    was configured by the user. This can be used as a template string where
    specific parameters can be injected or appended at the end. Custom header
    link provider has to be registered using the
    <code
        ><a href="../miscellaneous/variables.html#HEADER_LINK_PROVIDER"
            >HEADER_LINK_PROVIDER</a
        ></code
    >
    injection token.
</p>
<p>
    Internal
    <code
        ><a
            target="_blank"
            href="https://github.com/solarwinds/nova/blob/main/packages/dashboards/examples/src/components/prototypes/prototype-1/prototype-1.component.ts"
            >prototype-1</a
        >
    </code>
    page demonstrates the implementation of a dynamic link URL that includes a
    value of an external textbox.
</p>
`;export{a as default};
