import"./chunk-VBFW7A5V.js";var o=`<div class="container">
    <h3>Basic toolbar usage</h3>
    <nui-toolbar id="nui-toolbar-test">
        <nui-toolbar-group title="g1">
            <nui-toolbar-item
                id="nui-toolbar-test-button-primary"
                displayStyle="main"
                type="primary"
                icon="edit"
                title="Edit"
            >
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="filter" title="Filter">
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="lock" title="Lock">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="browse" title="Browse">
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="clear" title="Clear">
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="download" title="Download">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group title="g2">
            <nui-toolbar-item type="primary" icon="copy" title="Copy">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="enable" title="Enable">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="execute" title="Execute">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="hide" title="Hide">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="ignore" title="Ignore">
            </nui-toolbar-item>
            <nui-toolbar-item
                displayStyle="destructive"
                type="secondary"
                icon="delete"
                title="Delete"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
    </nui-toolbar>
</div>

<div class="container">
    <h3>Toolbar with embedded content</h3>
    <nui-toolbar id="nui-toolbar-test-embedded">
        <nui-toolbar-group title="g1">
            <nui-toolbar-item
                id="nui-toolbar-embedded-test-button-primary"
                displayStyle="main"
                type="primary"
                icon="edit"
                title="Edit"
            >
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="filter" title="Filter">
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="lock" title="Lock">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="browse" title="Browse">
            </nui-toolbar-item>
            <nui-toolbar-item
                id="nui-toolbar-embedded-test-button"
                type="primary"
                icon="clear"
                title="Clear"
            >
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="download" title="Download">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group title="g2">
            <nui-toolbar-item type="primary" icon="copy" title="Copy">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="enable" title="Enable">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="execute" title="Execute">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="hide" title="Hide">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="ignore" title="Ignore">
            </nui-toolbar-item>
            <nui-toolbar-item
                id="nui-toolbar-embedded-test-destructive-button"
                displayStyle="destructive"
                type="secondary"
                icon="delete"
                title="Delete"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <div class="nui-toolbar-embedded">
            <nui-search
                class="mr-1"
                id="nui-toolbar-embedded-test-search"
                (search)="search()"
            ></nui-search>
            <nui-menu
                id="nui-toolbar-embedded-test-menu"
                displayStyle="action"
                [itemsSource]="itemsSource"
                [icon]="'menu'"
            ></nui-menu>
        </div>
    </nui-toolbar>
</div>

<div class="container">
    <h3>Toolbar with selected section</h3>
    <nui-toolbar
        id="nui-toolbar-test-selected"
        [selectionEnabled]="true"
        [selectedItems]="select"
    >
        <nui-toolbar-group title="g1">
            <nui-toolbar-item
                id="nui-toolbar-selected-test-button-primary"
                displayStyle="main"
                type="primary"
                icon="edit"
                title="Edit"
            >
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="filter" title="Filter">
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="lock" title="Lock">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="browse" title="Browse">
            </nui-toolbar-item>
            <nui-toolbar-item
                id="nui-toolbar-selected-test-button"
                type="primary"
                icon="clear"
                title="Clear"
            >
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="download" title="Download">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group title="g2">
            <nui-toolbar-item type="primary" icon="copy" title="Copy">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="enable" title="Enable">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="execute" title="Execute">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="hide" title="Hide">
            </nui-toolbar-item>
            <nui-toolbar-item type="secondary" icon="ignore" title="Ignore">
            </nui-toolbar-item>
            <nui-toolbar-item
                id="nui-toolbar-selected-test-destructive-button"
                displayStyle="destructive"
                type="secondary"
                icon="delete"
                title="Delete"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <div class="nui-toolbar-embedded">
            <nui-search
                class="mr-1"
                id="nui-toolbar-selected-test-search"
                (search)="search()"
            ></nui-search>
            <nui-menu
                id="nui-toolbar-selected-test-menu"
                displayStyle="action"
                [itemsSource]="itemsSource"
                [icon]="'menu'"
            ></nui-menu>
        </div>
    </nui-toolbar>
</div>
<div class="container">
    <h3>Toolbar with no menu</h3>
    <nui-toolbar id="nui-toolbar-no-menu-with-search">
        <nui-toolbar-group>
            <nui-toolbar-item
                displayStyle="main"
                type="primary"
                icon="add"
                title="Add"
            >
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="edit" title="Edit">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item
                displayStyle="destructive"
                type="primary"
                icon="delete"
                title="Delete"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <div class="nui-toolbar-embedded">
            <nui-search [value]="value" [placeholder]="placeholder">
            </nui-search>
        </div>
    </nui-toolbar>
</div>

<div class="container">
    <h3>Toolbar with selection and no menu</h3>
    <nui-toolbar
        id="nui-toolbar-with-selection-no-menu-with-search"
        [selectionEnabled]="true"
        [selectedItems]="select"
        #toolbar
    >
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="deselect" title="Deselect">
            </nui-toolbar-item>
            <nui-toolbar-item
                type="primary"
                icon="deselect-all"
                title="Deselect All"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item
                displayStyle="destructive"
                type="primary"
                icon="delete"
                title="Delete"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <div class="nui-toolbar-embedded">
            <nui-search [value]="value" [placeholder]="placeholder">
            </nui-search>
        </div>
    </nui-toolbar>
</div>

<div class="container">
    <h3>Toolbar with no menu</h3>
    <nui-toolbar id="nui-toolbar-no-menu">
        <nui-toolbar-group>
            <nui-toolbar-item
                displayStyle="main"
                type="primary"
                icon="add"
                title="Add"
            >
            </nui-toolbar-item>
            <nui-toolbar-item type="primary" icon="edit" title="Edit">
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item
                displayStyle="destructive"
                type="primary"
                icon="delete"
                title="Delete"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
    </nui-toolbar>
</div>

<div class="container">
    <h3>Toolbar with selection and no menu</h3>
    <nui-toolbar
        id="nui-toolbar-with-selection-no-menu"
        [selectionEnabled]="true"
        #toolbar
    >
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="deselect" title="Deselect">
            </nui-toolbar-item>
            <nui-toolbar-item
                type="primary"
                icon="deselect-all"
                title="Deselect All"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item
                displayStyle="destructive"
                type="primary"
                icon="delete"
                title="Delete"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
    </nui-toolbar>
</div>
`;export{o as default};
