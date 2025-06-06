import"./chunk-VBFW7A5V.js";var o=`<div class="container">
    <div class="row"><h3>Basic button</h3></div>
    <div class="row">
        <button nui-button id="basic-button" type="button">Click me!</button>
    </div>

    <div class="row"><h3>Primary, Action, and Destructive buttons</h3></div>
    <div class="row">
        <button
            nui-button
            id="primary-button"
            type="button"
            displayStyle="primary"
        >
            Click me!
        </button>
        <button
            nui-button
            id="action-button"
            type="button"
            displayStyle="action"
        >
            Click me!
        </button>
        <button nui-button type="button" displayStyle="destructive">
            Click me!
        </button>
    </div>

    <div class="row"><h3>Sized buttons</h3></div>
    <!-- nui-button is vulnerable to bootstrap 'row' class which sets 'display: flex'. Consider removing the inline style
         from the following div either when the issue is resolved or shadow dom is applied to the component-->
    <div class="row" style="display: block">
        <button nui-button type="button" size="compact">Compact</button>
        <button nui-button type="button">Default</button>
        <button nui-button type="button" size="large">Large</button>
    </div>

    <div class="row"><h3>Buttons with icons</h3></div>
    <div class="row" style="display: block">
        <button nui-button type="button" icon="add">Click me!</button>
        <button nui-button type="button" icon="reload" [iconRight]="true">
            Click me!
        </button>
        <button nui-button type="button" icon="power-on" iconColor="orange">
            Click me!
        </button>
        <button nui-button type="button" icon="star-full"></button>
        <div class="w-100 mt-2"></div>
        <button
            nui-button
            id="primary-button-with-icon"
            type="button"
            displayStyle="primary"
            icon="add"
        >
            Click me!
        </button>
        <button
            nui-button
            id="action-button-with-icon"
            type="button"
            displayStyle="action"
            icon="status_warning"
        >
            Click me!
        </button>
        <button
            nui-button
            type="button"
            displayStyle="destructive"
            icon="printer"
        >
            Click me!
        </button>
        <div class="w-100 mt-2"></div>
        <button
            nui-button
            type="button"
            size="large"
            displayStyle="primary"
            icon="add"
            [iconRight]="true"
            [disabled]="true"
            i18n
        >
            Disabled Primary
        </button>
        <button
            nui-button
            type="button"
            size="large"
            displayStyle="action"
            icon="status_warning"
            [iconRight]="true"
            [disabled]="true"
            i18n
        >
            Disabled Action
        </button>
        <button
            nui-button
            type="button"
            size="large"
            displayStyle="destructive"
            icon="printer"
            [iconRight]="true"
            [disabled]="true"
            i18n
        >
            Disabled Destructive
        </button>
    </div>

    <div class="row" style="display: block">
        <h3>Sized buttons with icons</h3>
        <button nui-button type="button" size="compact" icon="add">
            Compact + icon
        </button>
        <button nui-button type="button" icon="add">Default + icon</button>
        <button nui-button type="button" size="large" icon="add">
            Large + icon
        </button>
    </div>

    <div class="row"><h3>Buttons with repeat</h3></div>
    <div class="row">
        <button
            nui-button
            type="button"
            [isRepeat]="true"
            displayStyle="action"
            icon="caret-up"
        ></button>
        <button
            nui-button
            type="button"
            [isRepeat]="true"
            displayStyle="action"
            icon="caret-down"
        ></button>
    </div>

    <div class="row"><h3>Button with busy</h3></div>
    <div class="row">
        <button nui-button type="button" [isBusy]="true">Click me!</button>
    </div>

    <div class="row"><h3>Buttons in a group</h3></div>
    <div class="row">
        <div class="btn-group">
            <button nui-button type="button">First</button>
            <button nui-button type="button">Second</button>
            <button nui-button type="button">Third</button>
            <button nui-button type="button">Fourth</button>
            <button nui-button type="button">Fifth</button>
        </div>
    </div>
</div>
`;export{o as default};
