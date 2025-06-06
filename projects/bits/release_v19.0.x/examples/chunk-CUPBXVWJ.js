import"./chunk-VBFW7A5V.js";var i=`<p>
    <code>&lt;nui-image&gt;</code>, as the name implies, allows you to display
    an image within your html. Settings for
    <code>&lt;nui-image&gt;</code> include size, alignment, and margins.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiImageModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To use <code>&lt;nui-image&gt;</code> you can set the
    <code>image</code> input to the id of one of the available images provided
    as part of Nova. See the <strong>Available Images</strong> section on this
    page. Alternately, you can set the <code>image</code> input to an external
    URL.
</p>
<nui-example-wrapper filenamePrefix="image-basic" exampleTitle="Basic Usage">
    <nui-image-basic-example></nui-image-basic-example>
</nui-example-wrapper>

<h2>Changing Image's Size</h2>
<p>
    Setting the <code>autoFill</code> input to <code>true</code> changes the
    pre-set <code>svg</code> height and width values to 100%, which allows the
    <code>svg</code> to properly fill the parent container and conform to its
    size.
</p>
<p>
    The <code>autoFill</code> only applies to <code>svg</code> image types. It
    will not do any effect to the rest of images used.
</p>
<p>
    The <code>height</code> and <code>width</code> inputs allow manual control
    of the image container's dimensions. Together, these three inputs allow you
    to properly resize the <code>nui-image</code> component using either
    <code>px</code> or <code>%</code> units.
</p>
<p>
    If not set, default value for <code>width</code> is <code>auto</code>. The
    <code>height</code>, if not set, does not have a default value, therefore,
    it's not applied by default. The user has to set its value explicitly, if
    needed.
</p>
<nui-example-wrapper
    filenamePrefix="image-width-height-and-autoFill"
    exampleTitle="Custom Image Size"
>
    <nui-image-width-height-autofill-example></nui-image-width-height-autofill-example>
</nui-example-wrapper>

<h2>Custom Alignment</h2>
<p>
    <code>&lt;nui-image&gt;</code> can be aligned to the left or the right by
    passing the either "left" or "right" to the <code>float</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="image-float"
    exampleTitle="Custom Alignment"
>
    <nui-image-float-example></nui-image-float-example>
</nui-example-wrapper>
<h2>Custom Margin</h2>
<p>
    <code>&lt;nui-image&gt;</code> can have custom margins. Available values
    are: 'centered', 'small', 'large'. By default no margins are used.
</p>
<nui-example-wrapper filenamePrefix="image-margin" exampleTitle="Custom Margin">
    <nui-image-margin-example></nui-image-margin-example>
</nui-example-wrapper>
<h2>Opacity</h2>
<p>
    <code>&lt;nui-image&gt;</code> can be "watermarked" to have 30% opacity. By
    default the image does not have any opacity.
</p>
<nui-example-wrapper
    filenamePrefix="image-watermarked"
    exampleTitle="Watermarked Image"
>
    <nui-image-watermarked-example></nui-image-watermarked-example>
</nui-example-wrapper>
<h2>External Source</h2>
<p>
    To load an image from an external source, set the <code>image</code> input
    either to the image's url or to an object of type
    <code
        ><a href="../interfaces/IImagesPresetItem.html" target="_blank"
            >IImagesPresetItem</a
        ></code
    >
    in which the code property is an svg element. The example below demonstrates
    a hard-coded object for its <code>IImagesPresetItem</code>, but in a
    real-world situation the entire object or the svg contained within it would
    likely originate from an external source.
</p>
<nui-example-wrapper
    filenamePrefix="image-external"
    exampleTitle="Image from external repo"
>
    <nui-image-external-example></nui-image-external-example>
</nui-example-wrapper>
<h2>Available Images</h2>
<p>
    Nova provides a limited set of images out of the box. To use them, set the
    <code>image</code> input on the <code>nui-image</code> element using the
    name shown underneath each of images below.
</p>
<nui-example-wrapper
    filenamePrefix="image-list"
    exampleTitle="Available Images"
>
    <nui-image-list-example></nui-image-list-example>
</nui-example-wrapper>
`;export{i as default};
