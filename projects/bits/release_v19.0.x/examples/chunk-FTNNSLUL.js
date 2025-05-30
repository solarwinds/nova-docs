import"./chunk-VBFW7A5V.js";var t=`// Provide alternate values for the nova-defined color variables
// Note 1: This is only a subset of all nova-defined colors to provide the desired effect for demo purposes only.
//         The complete set can be found here: https://github.com/solarwinds/nova/blob/main/packages/bits/src/styles/nui-framework-colors.less
// Note 2: The alternate color values can optionally be provided in a separate file from the property assignment shown below.
@page-header-border-color: red;
@nui-color-bg-light: fuchsia;
@nui-color-bg-content: fuchsia;
@nui-color-bg-secondary: #009fc9;
@nui-color-semantic-ok-bg: #009fc9;
@nui-color-text-default: white;
@nui-color-text-link: #fdf40e;

// Assign the alternate colors defined above to the corresponding properties in the theme's CSS class
// Note: Assigning the property values can be automated by the method shown here:
// https://github.com/solarwinds/nova/blob/main/packages/bits/src/styles/nui-framework-theme.less
.clown-party-theme {
    --page-header-border-color: @page-header-border-color;
    --nui-color-bg-light: @nui-color-bg-light;
    --nui-color-bg-content: @nui-color-bg-content;
    --nui-color-bg-secondary: @nui-color-bg-secondary;
    --nui-color-semantic-ok-bg: @nui-color-semantic-ok-bg;
    --nui-color-text-default: @nui-color-text-default;
    --nui-color-text-link: @nui-color-text-link;
}
`;export{t as default};
