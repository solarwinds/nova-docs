import"./chunk-VBFW7A5V.js";var a=`<!--<nui-example-wrapper filenamePrefix="dragdrop-basic" exampleTitle="Drag and Drop">-->
<!--<nui-dragdrop-validator-example></nui-dragdrop-validator-example>-->
<!--</nui-example-wrapper>-->
<!--<nui-example-wrapper filenamePrefix="dragdrop-cdk" exampleTitle="Drag and Drop CDK">-->
<!--<nui-dragdrop-cdk-example></nui-dragdrop-cdk-example>-->
<!--</nui-example-wrapper>-->

<h2>Basic Usage</h2>

<p>
    Usage is described in example below. FileDrop component is used internally
    to handle dragLeave/dragEnter and encapsulate styling
</p>
<p>Example includes:</p>
<ol>
    <li>
        Browse file using file system dialog with access to input properties
        like "multiple" and "accept".
    </li>
    <li>
        Effect while hovering file with wrong data type (for simplicity, example
        code checks only first item in array) - this is implemented as an input
        in FileDrop component.
    </li>
    <li>List of files with layout that is taken from UX specs</li>
</ol>

<nui-example-wrapper
    filenamePrefix="dragdrop-files"
    exampleTitle="Drag and Drop Files"
>
    <nui-dragdrop-files-example></nui-dragdrop-files-example>
</nui-example-wrapper>

<h2>File Drop Component</h2>
<p>
    Please see FileDrop component source code in this example (note that demo is
    not interactive since this is purely presentational component)
</p>

<nui-example-wrapper
    filenamePrefix="file-drop"
    exampleTitle="File Drop Component"
>
    <nui-file-drop-example><span>Any content</span></nui-file-drop-example>
</nui-example-wrapper>
`;export{a as default};
