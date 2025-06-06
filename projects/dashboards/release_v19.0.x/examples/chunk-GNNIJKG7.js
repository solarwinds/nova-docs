import"./chunk-VBFW7A5V.js";var a=`<h1>Persistence</h1>

<p>
    In this tutorial we'll cover how to add a persistence handler by binding it
    to the nuiWidgetEditor directive. The persistence handler will allow you to
    run any persistence or other logic before the editor form workflow is
    completed or before a widget is removed from the dashboard. For simplicity's
    sake, in this tutorial we won't perform any actual persistence. Instead,
    we'll display a toast from each of the handler callbacks to indicate mock
    success after a one-second timeout.
</p>

<h2>Fundamental Concepts</h2>
<ul>
    <li>
        <a href="../directives/WidgetEditorDirective.html" target="_blank"
            ><code>nuiWidgetEditor</code></a
        >directive
    </li>
    <li>Persistence handler</li>
</ul>

<h2>Basic Steps</h2>
<ol>
    <li>
        Follow the instructions
        <a
            href="../additional-documentation/getting-started.html"
            target="_parent"
            >here</a
        >
        to set up your environment for dashboard development.
    </li>
    <li>
        Follow the instructions from previous tutorials to get a basic dashboard
        up and running.
    </li>
    <li>
        Create a persistence handler class which implements
        <a
            href="../interfaces/IDashboardPersistenceHandler.html"
            target="_blank"
            ><code>IDashboardPersistenceHandler</code></a
        >. To realize the interface, the class may have a
        <code>trySubmit</code> and/or a <code>tryRemove</code> method.
        <nui-message type="info" [allowDismiss]="false">
            <b>Note:</b> It's recommended to implement the persistence handler
            as a separate class in its own file. It can be added to the
            providers list of either the dashboard component itself or a parent
            module.
        </nui-message>
    </li>
    <li>
        Ensure that the <code>NuiToastModule</code> is included in the imports
        of the module that contains the persistence handler.
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> Importing <code>NuiToastModule</code> is
            required in this example because, in this case, the persistence
            handler uses the <code>ToastService</code>.
        </nui-message>
    </li>
    <li>
        Implement a <code>trySubmit</code> method that will be invoked as a
        callback anytime the widget editor form gets submitted. The parameters
        of the callback are the updated
        <a href="../interfaces/IWidget.html" target="_blank"
            ><code>IWidget</code></a
        >
        and the
        <a href="../interfaces/IConfiguratorSource.html" target="_blank"
            ><code>IConfiguratorSource</code></a
        >
        which contains a reference to the
        <a href="../components/DashboardComponent.html" target="_blank"
            ><code>DashboardComponent</code></a
        >
        and an object containing the original state of the IWidget being edited.
        Its expected return value is an observable that resolves to the updated
        <a href="../interfaces/IWidget.html" target="_blank"
            ><code>IWidget</code></a
        >
        if persistence is successful.
    </li>
    <li>
        Implement a <code>tryRemove</code> method that will be invoked as a
        callback anytime there's a widget removal attempt. The parameter of the
        callback is the string id of the widget being removed. Its expected
        return value is an observable that resolves to the same id of the
        removed widget if persistence is successful.
    </li>
    <li>
        In your template, assign the injected instance of the persistence
        handler to the <code>nuiWidgetEditor</code> directive.
    </li>
</ol>

<nui-message type="info" [allowDismiss]="false">
    For more detailed information about setting up a persistence handler, take a
    look at the inline comments under the source expander of the following
    example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="persistence-handler-setup.component"
    exampleTitle="Adding a persistence handler"
>
    <persistence-handler-setup></persistence-handler-setup>
</nui-example-wrapper>
`;export{a as default};
