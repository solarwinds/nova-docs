import"./chunk-XR34LRGE.js";var i=`<h2>Layout</h2>
<h3>Horizontal Layout Wizard</h3>
<p>
    To use the horizontal wizard component, place a
    <code>nui-wizard-horizontal</code> element in your template and include one
    or more
    <code
        ><a href="../components/WizardStepComponent.html" target="_blank"
            >nui-wizard-step-v2</a
        ></code
    >
    elements as children of the <code>nui-wizard-horizontal</code> element.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-horizontal"
    exampleTitle="Horizontal Layout Wizard"
>
    <nui-wizard-horizontal-example></nui-wizard-horizontal-example>
</nui-example-wrapper>

<h3>Wizard with confirmation dialog</h3>
<p>
    It may be a good idea to ask a user whether they really want to quit a
    wizard, e.g.if they decide to hit \`Cancel\` while some of the wizard step
    fields are already filled in. This example reflects this use case and shows
    how one can add a confirmation dialog to make a user decide whether they
    really want to quit or stay where they are and continue.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-with-confirmation-dialog-on-cancel"
    exampleTitle="Wizard with confirmation dialog on cancel"
>
    <nui-wizard-with-confirmation-dialog-on-cancel-example></nui-wizard-with-confirmation-dialog-on-cancel-example>
</nui-example-wrapper>

<!--Will be updated in scope of the NUI-6099-->

<!--<h3>Vertical Layout Wizard</h3>-->
<!--<nui-example-wrapper filenamePrefix="wizard-vertical-layout" exampleTitle="Vertical Layout Wizard">-->
<!--    <nui-wizard-vertical-example></nui-wizard-vertical-example>-->
<!--</nui-example-wrapper>-->

<h3>Usage with a dialog</h3>
<p>
    You can pass an existing wizard component as content of the dialog window.
    You should insert wizard component in dialog body.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-dialog"
    exampleTitle="wizard in dialog"
>
    <nui-wizard-v2-dialog-example></nui-wizard-v2-dialog-example>
</nui-example-wrapper>

<h3>Busy step</h3>
<p>You can make your step busy to forbid actions.</p>
<nui-example-wrapper
    filenamePrefix="wizard-busy"
    exampleTitle="wizard step busy"
>
    <nui-wizard-v2-busy-example></nui-wizard-v2-busy-example>
</nui-example-wrapper>

<h3>Adding step dynamically</h3>
<p>
    You are able to add wizard steps dynamically. The dynamic step can be
    enabled/disabled programmatically by clicking the "Enable/Disable step
    w/button" under the wizard.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-dynamic"
    exampleTitle="wizard add dynamic step"
>
    <nui-wizard-dynamic-example></nui-wizard-dynamic-example>
</nui-example-wrapper>

<h3>Removing step</h3>
<p>You are able to remove steps by index.</p>
<nui-example-wrapper
    filenamePrefix="wizard-remove-step"
    exampleTitle="wizard remove step"
>
    <nui-wizard-remove-step-example></nui-wizard-remove-step-example>
</nui-example-wrapper>

<!--TODO Fix Custom Layout Wizard in scope NUI-6112 -->
<!--<h3>Custom Layout Wizard</h3>-->
<!--<nui-example-wrapper filenamePrefix="wizard-custom-layout" exampleTitle="Custom Layout Wizard">-->
<!--    <nui-wizard-custom-example></nui-wizard-custom-example>-->
<!--</nui-example-wrapper>-->

<h3>Async Form Validation</h3>
<p>
    To handle async validation check 'PENDING' status of WizardV2Step
    stepControl
</p>
<nui-example-wrapper
    filenamePrefix="wizard-async-form-validation"
    exampleTitle="Async Form Validation"
>
    <nui-wizard-async-form-validation-example></nui-wizard-async-form-validation-example>
</nui-example-wrapper>

<h3>Wizard with custom step state icons</h3>
<p>
    The wizard step can be in four different states: <code>initial</code>,
    <code>selected</code>, <code>completed</code>, and <code>error</code>. For
    each of these steps there is a corresponding icon in the header for a
    certain step, which dynamically changes along with the step state change. It
    is possible to override the default set of step state icons and their
    colors, and there are two ways of doing that.
</p>
<ol>
    <li>Global</li>
    <li>Step Specific</li>
</ol>
<p><u>Global</u></p>
<p>
    Nova provides you with the <code>WIZARD_CONFIG</code> injection token, which
    allows you to override the default wizard settings in a global context. For
    instance, set the necessary icons settings with this token on a module level
    to allow all wizards within a module to receive the same icon configuration.
</p>
<p><u>Step Specific</u></p>
<p>
    Use the <code>stepIconsConfig</code> input of the
    <code>nui-wizard-step-v2</code> component to pass the step icons config
    specifically to this step. It will override the global settings for this
    particular step.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-with-custom-icons"
    exampleTitle="Wizard with custom icons"
>
    <nui-wizard-with-custom-icons-example></nui-wizard-with-custom-icons-example>
</nui-example-wrapper>

<h3>Custom footer</h3>
<p>
    Customizing the footer layout content and style for each step is quite easy,
    as you can see in the example below:
</p>
<nui-example-wrapper
    filenamePrefix="wizard-custom-footer"
    exampleTitle="Wizard with Custom Footer"
>
    <nui-wizard-custom-footer-example></nui-wizard-custom-footer-example>
</nui-example-wrapper>

<h3>Restore Wizard State</h3>
<p>
    To restore the wizard state you need to pass previous wizard steps as input.
    See the example below. You can press the "Reset step" button on the last
    step in the wizard. After that close the dialog and open the wizard again.
    You will see that all steps except the last are restored.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-restore-state"
    exampleTitle="Restore Wizard State"
>
    <nui-wizard-restore-state-example></nui-wizard-restore-state-example>
</nui-example-wrapper>

<h3>Wizard Step Change Event Example</h3>
<p>You are able to subscribe when the selected step has changed.</p>
<nui-example-wrapper
    filenamePrefix="wizard-step-change"
    exampleTitle="Wizard Step Change"
>
    <nui-wizard-step-change-example></nui-wizard-step-change-example>
</nui-example-wrapper>

<h3>Responsive Header</h3>
<p>
    This example shows how Wizard V2 handles the multiple steps. When there are
    a lot of steps in the wizard the step header can overflow the headers
    container. If this happens, Wizard V2 switches to the responsive mode and
    put the overflown items into overflow components, which indicate how many
    items are there hidden. You can try navigating through the items and
    resizing the browser window to see how this responsive behavior works.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-responsive-header"
    exampleTitle="Wizard Header Responsiveness"
>
    <nui-wizard-responsive-header-example></nui-wizard-responsive-header-example>
</nui-example-wrapper>

<h3>Wizard Tooltip</h3>
<p>
    We always show tooltip for string label. If you use custom template for
    label or don't want to see tooltip you could define it inside content
    projection.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-tooltip"
    exampleTitle="Wizard Tooltip"
>
    <nui-wizard-tooltip-example></nui-wizard-tooltip-example>
</nui-example-wrapper>

<h2>Keyboard interaction</h2>
<ul>
    <li>
        <code>TAB/SHIFT+TAB</code> for focusing on the next/previous tabbable
        element
    </li>
    <li>
        <code>LEFT_ARROW/RIGHT_ARROW</code> for navigation on the previous/next
        step header
    </li>
    <li><code>HOME/END</code> for focusing on the first/last step header</li>
    <li><code>ENTER, SPACE</code> to select the step</li>
</ul>
`;export{i as default};
