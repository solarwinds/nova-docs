import"./chunk-VBFW7A5V.js";var t=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiFreeTypeQueryBuilderModule</code>
    </li>
</ul>

<p>
    Freetype Query Builder is a generic component designed as a base for
    creating query input to allow the user to type a query in a defined query
    language.
</p>

<p><code>nui-freetype-query-builder</code> provides:</p>
<ul>
    <li>the input</li>
    <li>highlighting functionality</li>
    <li>options mechanics</li>
    <li>auto multiline resizing</li>
</ul>

<nui-message type="warning" [allowDismiss]="false">
    <code>nui-freetype-query-builder</code> doesn't provide the grammar. It
    should be provided by the consumer.
</nui-message>

<h2>Basic Usage</h2>

<p>To use <code>nui-freetype-query-builder</code> do the following:</p>

<ol>
    <li>
        Add <code>&lt;nui-freetype-query-builder&gt;</code> to your template.
    </li>
    <li>
        Create a tokenizer object that implements the
        <code>
            <a href="../interfaces/Tokenizer.html" target="_blank">Tokenizer</a>
        </code>
        interface and pass it to the tokenizer input of the query-builder
        component. The tokenizeText method is a place, where you can implement
        your custom logic to tokenize the user input. It takes a query string as
        input and should return an array of Token objects which should extend
        QueryToken interface.
        <nui-example-code language="typescript" [code]="tokenizerExample" />
    </li>
    <li>
        Create a renderer object that implements the
        <code>
            <a href="../interfaces/RenderConfigurator.html" target="_blank"
                >RenderConfigurator</a
            >
        </code>
        interface and pass it to the renderer input of the query-builder
        component.
        <ul>
            <li>
                <code>getNotifColor</code> - method takes a Token object as
                input and returns the border color of the token.
            </li>
            <li>
                <code>getHighlightColor</code> - method takes a Token object as
                input and returns the color of the token.
            </li>
            <li>
                <code>enhanceTokens</code> - optional method takes an array of
                Token objects as an input and returns the array of tokens which
                should be focused.
            </li>
        </ul>
        <nui-example-code language="typescript" [code]="rendererExample" />
    </li>
    <li>
        Optionally you can create a help entry array of type
        <code>HelpEntry[]</code> and pass it to the currentHelp input of the
        query-builder component. Depends purely on implementation, how the array
        is build, but as the component notifies about cursor position can be
        generated based on the focused token.
    </li>
</ol>

<nui-example-wrapper
    filenamePrefix="freetype-query-builder-basic"
    exampleTitle="Freetype Query Builder Basic Usage"
>
    <nui-freetype-query-builder-basic-example></nui-freetype-query-builder-basic-example>
</nui-example-wrapper>

<h2>Inputs</h2>
<ul>
    <li><code>value</code> - Input value of type string.</li>
    <li>
        <code>maxLength</code> - Set the maximum allowed value for the input
        field. Defaults to <code>10 000</code>.
    </li>
    <li>
        <code>placeholder</code> - Set the string to use as a placeholder for
        the input field. Default is <code>""</code>.
    </li>
    <li>
        <code>readonly</code> - Set the freetype query builder to readonly
        state. Defaults to <code>false</code>.
    </li>
    <li>
        <code>renderer</code> - The renderer is responsible for marking which
        tokens should be colored and deciding type of coloring (background,
        border).
    </li>
    <li>
        <code>tokenizer</code> - The tokenizer is responsible for parsing user
        input to array of tokens.
    </li>
    <li>
        <code>currentHelp</code> - Array of options for user to select. Depends
        purely on implementation how they are build, but as component notifies
        about cursor position can be generated based on focused token.
    </li>
    <li>
        <code>cursorSetter$</code> - Way to set cursor to specific position.
    </li>
</ul>

<h2>Outputs</h2>
<ul>
    <li>
        <code>helpItemSelected</code> - Emits when user selects option from
        displayed help list.
    </li>
    <li><code>currentValue</code> - Emits when value changed in the input.</li>
    <li><code>cursorPos</code> - Emits on any cursor position change.</li>
    <li>
        <code>submitQuery</code> - Emits when "Enter" is hit with closed
        options.
    </li>
</ul>
`;export{t as default};
