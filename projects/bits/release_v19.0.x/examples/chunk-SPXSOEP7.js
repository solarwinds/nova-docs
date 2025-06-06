import"./chunk-VBFW7A5V.js";var i=`<h2>Required Modules</h2>
<ul>
    <li>
        <code> NuiDialogModule </code>
    </li>
</ul>

<h2>Basic Usage</h2>

<p>
    Dialog can be added by passing <code>template</code> to the
    <code>DialogService's open</code> method. You can pass the result of the
    dialog or the reason why dialog is dismissed by using <code>close</code> or
    <code>dismiss</code> methods in your ng-template. All passed data can be
    handled by <code>result</code> property of dialog's
    <code>open</code> method.
</p>
<nui-example-wrapper
    filenamePrefix="simple-dialog"
    exampleTitle="Simple dialog"
>
    <nui-simple-dialog-example></nui-simple-dialog-example>
</nui-example-wrapper>

<h2>Usage as a Component</h2>

<p>You can pass an existing component as content of the dialog window.</p>
<p>
    In this case remember to add content component as an entryComponents section
    of your NgModule.
</p>
<p>
    For this case you need to pass the component's class name to the
    <code>open</code> method of <code>DialogService</code>.
</p>
<p>See both example panels below.</p>
<nui-example-wrapper
    filenamePrefix="component-as-content"
    exampleTitle="Component as content for dialog"
>
    <nui-component-as-content-example></nui-component-as-content-example>
</nui-example-wrapper>
<nui-example-wrapper
    filenamePrefix="dialog-content"
    exampleTitle="Dialog Content Example Component"
>
    <p>
        The code of this example panel is related to the example above. It only
        shows code.
    </p>
</nui-example-wrapper>

<h2>Severity</h2>

<p>
    You can pass <code>severity</code> property to the
    <code>dialog-header</code> component and it will show different severity
    styles. Possible values are: <code>critical, warning, info.</code>
</p>
<p>You can also add custom action buttons to the Dialog header.</p>
<p>
    In order to do so, you need to define them inside
    <code>dialog-header</code> component, as shown in the example below.
</p>
<nui-example-wrapper
    filenamePrefix="dialog-severity"
    exampleTitle="Dialog Severity"
>
    <nui-dialog-severity-example></nui-dialog-severity-example>
</nui-example-wrapper>

<h2>Custom Dialog header</h2>

<p>You can add custom action buttons to the Dialog header.</p>
<p>
    In order to do so, you need to define them inside
    <code>dialog-header</code> component, as shown in the example below.
</p>
<nui-example-wrapper
    filenamePrefix="header-buttons"
    exampleTitle="Custom Dialog Header"
>
    <nui-header-buttons-example></nui-header-buttons-example>
</nui-example-wrapper>

<h2>Dialog Sizes</h2>

<p>
    You can define size of the dialog by passing it as second argument to
    <code>DialogService's</code> <code>open</code> method. Possible sizes are:
    <code>sm,</code><code>md,</code> and <code>lg</code>. Default size is
    <code>md</code>.
</p>
<nui-example-wrapper filenamePrefix="dialog-sizes" exampleTitle="Dialog Sizes">
    <nui-dialog-sizes-example></nui-dialog-sizes-example>
</nui-example-wrapper>

<h2>Position on screen</h2>

<p>
    When content is longer than available screen, dialog grows vertically by
    default.
</p>
<p>
    By adding <code>responsive-mode</code> class to the
    <code>dialog-body</code>, dialog will fit the available screen and content
    will be scrollable inside the dialog. Also it's possible to remove padding
    from content in <code>dialog-body</code>by adding
    <code>compact-mode</code> class
</p>
<nui-example-wrapper
    filenamePrefix="dialog-position"
    exampleTitle="Dialog Positions"
>
    <nui-dialog-position-example></nui-dialog-position-example>
</nui-example-wrapper>

<h2>Custom class</h2>

<p>
    It is possible to add custom class to the dialog window. In order to do it,
    you need to pass <code>windowClass</code> option into
    <code>DialogService open</code> method as second argument.
</p>
<p>
    Here's an example:
    <code
        >DialogService.open(content, {{ "{" }} windowClass: "myCustomClass"
        {{ "}" }})
    </code>
</p>
<p>It will allow you to apply custom styles to the dialog if needed.</p>
<p>Example below shows dialog with custom width (500px).</p>
<p>
    NOTE: custom class is applied to the dialog component which appended into
    the <code>body</code> element.
</p>
<p>
    That's why this class must be specified as <code>body</code> descendant
    class.
</p>
<nui-message type="info">
    Custom class styles can be overriden by default styles of
    <code>nui-dialog</code> component. In this case please make custom class
    selector more specific in your styles.
</nui-message>
<nui-example-wrapper
    filenamePrefix="dialog-custom-class"
    exampleTitle="Custom Class"
>
    <nui-dialog-custom-class-example></nui-dialog-custom-class-example>
</nui-example-wrapper>

<h2>Confirmation Dialog</h2>

<p>
    You can use Confirmation Dialog by calling the <code>confirm</code> method
    of DialogService. Set the <code>message</code> input to a string value that
    will serve as the confirmation message. Optionally, you can customize the
    title and button labels using the <code>title</code>,
    <code>confirmText</code>, <code>dismissText</code> and
    <code>severity</code> properties defined in
    <a target="_parent" href="../interfaces/IConfirmationDialogOptions.html"
        >IConfirmationDialogOptions</a
    >.

    <nui-message type="info">
        By default, when the confirmation dialog opens, the
        <code>Confirm</code> button is focused. Use <code>setFocus</code> input
        to set the <code>Dismiss</code> button focused on dialog open.
    </nui-message>
</p>
<nui-example-wrapper
    filenamePrefix="confirmation-dialog"
    exampleTitle="Confirmation Dialog"
>
    <nui-confirmation-dialog-example></nui-confirmation-dialog-example>
</nui-example-wrapper>

<h2>Keyboard Options</h2>

<p>
    There is a field in <code>options</code> that allows dialog to be interacted
    with via keyboard. Usage: <code>{{ "{" }} keyboard: false {{ "}" }}</code>
</p>

<nui-example-wrapper
    filenamePrefix="dialog-with-keyboard"
    exampleTitle="Dialog With Keyboard"
>
    <nui-dialog-with-keyboard-example></nui-dialog-with-keyboard-example>
</nui-example-wrapper>

<h2>Static Backdrop</h2>
<p>
    By default, nui-dialog closes if user clicks outside the dialog. It is handy
    though to keep the dialog on no matter where user clicks. To achieve this
    behavior, it is recommended to use the <code>backdrop</code> input of the
    component and set <code>static</code> string to it.
</p>

<nui-example-wrapper
    filenamePrefix="dialog-with-static-backdrop"
    exampleTitle="Dialog With Static Backdrop"
>
    <nui-dialog-with-static-backdrop-example></nui-dialog-with-static-backdrop-example>
</nui-example-wrapper>

<h2>Dialog Inside Overlay</h2>
<p>
    The implementation of the <code>nui-dialog</code> is not currently based on
    <code>nui-overlay</code>, which means there might be a need to display the
    dialog properly with overlay-based components, including nested ones. To
    make the dialog open inside the overlay container it is enough to passe in
    the <code>useOverlay</code> option when opening the dialog.
</p>

<nui-example-wrapper
    filenamePrefix="dialog-inside-overlay"
    exampleTitle="Dialog Inside Overlay"
>
    <nui-dialog-inside-overlay-example></nui-dialog-inside-overlay-example>
</nui-example-wrapper>

<h2>Dialog Closure Actions</h2>
<p>
    The <code>nui-dialog</code> provides you with a number of ways to perform
    actions on it's closure. There are two built-in events <code>ESC</code> and
    <code>BACKDROP_CLICK</code>
    which are triggered by the keyboard escape key and clicking the dialog's
    backdrop respectively. However, the user is able to create their own events,
    which they can pass as an argument into the
    <code>dismiss(event)</code> method of the <code>dialogRef</code>. To capture
    the events there are two types of EventEmitters of the
    <code>dialogRef</code> - <code>closed$</code> and
    <code>beforeDismissed$</code>. As can be determined from their names, the
    <code>closed$</code> event emitter will emit an event right after the dialog
    window is closed, while the <code>beforeDismissed$</code> emits right before
    the dialog is dismissed.
</p>
<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> <code>beforeDissmissed$</code> is only emitted on
    dialog dismissal (or cancellation); it is not emitted on dialog submission.
    <code>beforeDismissed$</code>works best in conjunction with the special
    <code>beforeDismiss</code> function, which can be configured as an optional
    configuration parameter of the dialog. This function, if it returns
    <code>false</code>, will prevent the dialog from closing, until the
    <code>close</code>
    method is called. All this lets you be very flexible in how exactly you want
    the dialog to be dismissed and when to perform certain actions.
</nui-message>
<p>
    The example of the dialog's closure actions below shows how flexible a
    simple dialog can be in terms of performing certain actions at certain
    points of the dialog's lifecycle
</p>

<p>For this example:</p>
<ol>
    <li>
        <strong>BACKDROP click</strong> - The logic specific to the backdrop
        click is performed, and the dialog stays open in this case.
    </li>
    <li>
        <strong>ESC key pressed</strong> - First, the logic specific to the ESC
        button click is performed. Then, general logic before the dialog
        dismissal is performed. And, finally, the logic to perform right after
        dialog closure is run.
    </li>
    <li>
        <strong>ACTION button pressed</strong> - The logic specific to the
        ACTION button click is performed. Then, the custom DONE event is sent,
        and finally the event is captured and custom logic is run in response.
        The dialog stays open in this case.
    </li>
    <li>
        <strong>CANCEL button pressed</strong> - The logic specific to the
        CANCEL button click is performed. Then, general logic before the dialog
        dismissal is performed. And, finally, the logic to perform right after
        dialog closure is run.
    </li>
    <li>
        <strong>Header Close button pressed</strong> - The logic specific to the
        header Close button click is performed. Then, general logic before the
        dialog dismissal is performed. And, finally, the logic to perform right
        after dialog closure is run.
    </li>
</ol>

<nui-example-wrapper
    filenamePrefix="dialog-actions-before-closure"
    exampleTitle="Dialog Actions Before Closure"
>
    <nui-dialog-actions-before-closure-example></nui-dialog-actions-before-closure-example>
</nui-example-wrapper>

<h2>Dialog Open Actions</h2>
<p>
    It's possible to perform some actions in your code when a dialog is opened
    by subscribing to the
    <code>DialogService</code>'s <code>afterOpened$</code> observable. It emits
    a <code>NuiDialogRef</code> that contains the component's data. This works
    for both a confirmation dialog and a dialog containing a consumer-defined
    component. The examples below trigger a toast on the top right of the page
    when each dialog is opened.
</p>
<nui-message type="info" [allowDismiss]="false">
    To see the source code of the consumer-defined component used in this
    example, open the source expander of the second example panel in this
    section.
</nui-message>

<nui-example-wrapper
    filenamePrefix="dialog-after-opened"
    exampleTitle="Perform an action on dialog open"
>
    <nui-dialog-after-opened-example></nui-dialog-after-opened-example>
</nui-example-wrapper>
<nui-example-wrapper
    filenamePrefix="dialog-content"
    exampleTitle="Dialog Content Example Component"
>
    <p>
        The code of this example panel is related to the example above. It only
        shows code.
    </p>
</nui-example-wrapper>
`;export{i as default};
