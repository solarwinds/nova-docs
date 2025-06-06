import"./chunk-VBFW7A5V.js";var o=`<h1>Theming</h1>

<p>
    Nova currently supports two themes out of the box: <em>light</em> and
    <em>dark</em>. By default, apps using Nova are styled with the light theme.
</p>

<h2>Theme Switch Service</h2>
<p>
    To configure your app to use the dark theme, you can add the
    <code>dark-nova-theme</code> class to the app's root
    <code>html</code> element. But, you don't have to do it manually. Nova
    provides a service that can be used to toggle the root
    <code>html</code> element class on demand. To enable the dark theme, inject
    the
    <code
        ><a href="../injectables/ThemeSwitchService.html" target="_blank"
            >ThemeSwitchService</a
        ></code
    >
    into a component and invoke its
    <code
        ><a
            href="../injectables/ThemeSwitchService.html#setDarkTheme"
            target="_blank"
            >setDarkTheme</a
        ></code
    >
    method with a value of <code>true</code>. To disable the dark theme invoke
    <code
        ><a
            href="../injectables/ThemeSwitchService.html#setDarkTheme"
            target="_blank"
            >setDarkTheme</a
        ></code
    >
    with a value of <code>false</code>.
</p>
<p>
    Additionally, the service can be used to configure your app to respond to
    the user's light/dark mode system preference. To configure your app to do
    this, invoke the service's
    <code
        ><a
            href="../injectables/ThemeSwitchService.html#enableColorSchemePreferenceHandling"
            target="_blank"
            >enableColorSchemePreferenceHandling</a
        ></code
    >
    method. If the user has configured their operating system to use the
    system-wide dark theme, your app will automatically be displayed with the
    dark theme. To disable system preference handling, invoke the
    <code
        ><a
            href="../injectables/ThemeSwitchService.html#disableColorSchemePreferenceHandling"
            target="_blank"
            >disableColorSchemePreferenceHandling</a
        ></code
    >
    method.
</p>
<p>
    The following example configures the service to respond to the user's
    light/dark system preference. To try it out, follow these links on how to
    change the setting for
    <a
        href="https://docs.microsoft.com/en-us/windows-hardware/customize/desktop/set-dark-mode"
        target="_blank"
        >Windows 10</a
    >
    and
    <a href="https://support.apple.com/en-us/HT208976" target="_blank">MacOS</a
    >.
</p>
<p>
    Additionally, the example invokes
    <code
        ><a
            href="../injectables/ThemeSwitchService.html#setDarkTheme"
            target="_blank"
            >setDarkTheme</a
        ></code
    >
    with <code>true</code> or <code>false</code> each time the switch is
    toggled.
</p>
<nui-example-wrapper
    filenamePrefix="theme-switch-service.example"
    exampleTitle="Theme Switch Service"
>
    <theme-switch-service-example></theme-switch-service-example>
</nui-example-wrapper>

<h3>Additional Properties</h3>
<ul>
    <li>
        <code
            ><a
                href="../injectables/ThemeSwitchService.html#isDarkModeEnabledSubject"
                target="_blank"
                >isDarkModeEnabledSubject</a
            ></code
        >
        - The example above uses this <code>BehaviorSubject</code> in its
        template to determine whether dark mode is enabled.
    </li>
    <li>
        <code
            ><a
                href="../injectables/ThemeSwitchService.html#withRefreshRoute"
                target="_blank"
                >withRefreshRoute</a
            ></code
        >
        - Set this boolean to true if you want the route to refresh each time
        the theme changes. This can come in handy if you have elements on the
        page whose styles can't be changed on the fly for some reason.
    </li>
</ul>

<h2>Participation</h2>
<p>
    To have the colors in your app participate in theming, ensure that the
    values of your color-oriented properties such as <code>background</code> or
    <code>border</code> take the form of CSS variables by invoking the CSS
    <code
        ><a
            href="https://www.w3schools.com/css/css3_variables.asp"
            target="_blank"
            >var</a
        ></code
    >
    function with the desired color property name and an optional fallback
    value. This will convert the CSS color properties defined by Nova to CSS
    variables whose values will update to correspond to the active theme.
</p>
<nui-example-code language="less" [code]="lessCode" />

<h2>Custom Themes</h2>
<p>It's possible to create a custom theme by doing the following:</p>
<ol>
    <li>
        Provide alternate values for Nova's Less color variables defined
        <a
            href="https://github.com/solarwinds/nova/blob/main/packages/bits/src/styles/nui-framework-colors.less"
            target="_blank"
            >here</a
        >.
    </li>
    <li>
        Create a CSS class containing color properties that use the alternate
        color values.
    </li>
    <li>
        Use Angular's
        <code
            ><a href="https://angular.io/api/core/Renderer2" target="_blank"
                >Renderer2</a
            ></code
        >
        to add the custom class to the element you want to apply the colors to.
    </li>
</ol>
<p>
    The following example applies a totally unusable clownish party theme to the
    root <code>html</code>
    element when the switch is turned on. To see how the alternate color
    variables and properties are defined, take a look at the less file in the
    source expander.
</p>
<nui-example-wrapper
    filenamePrefix="custom-theme.example"
    exampleTitle="Custom Themes"
>
    <custom-theme-example></custom-theme-example>
</nui-example-wrapper>
`;export{o as default};
