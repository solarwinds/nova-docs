import"./chunk-VBFW7A5V.js";var o=`<div class="nui">
    <nui-toolbar>
        <nui-toolbar-group i18n-title title="g1">
            <nui-toolbar-item
                type="primary"
                icon="edit"
                i18n-title
                title="Edit"
            >
            </nui-toolbar-item>
            <nui-toolbar-item
                type="primary"
                icon="export"
                i18n-title
                title="Export"
            >
            </nui-toolbar-item>
            <nui-toolbar-item
                type="primary"
                icon="clear"
                i18n-title
                title="Clear"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item
                type="primary"
                icon="browse"
                i18n-title
                title="Browse"
            >
            </nui-toolbar-item>
            <nui-toolbar-item
                type="primary"
                icon="close"
                i18n-title
                title="Close"
            >
            </nui-toolbar-item>
            <nui-toolbar-item
                type="primary"
                icon="download"
                i18n-title
                title="Download"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group i18n-title title="g2">
            <nui-toolbar-item type="primary" icon="cut" i18n-title title="Cut">
            </nui-toolbar-item>
            <nui-toolbar-item
                type="secondary"
                icon="copy"
                i18n-title
                title="Copy"
            >
            </nui-toolbar-item>
            <nui-toolbar-item
                type="secondary"
                icon="assign"
                i18n-title
                title="Assign"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <nui-toolbar-group>
            <nui-toolbar-item type="primary" icon="add" i18n-title title="Add">
            </nui-toolbar-item>
            <nui-toolbar-item
                type="secondary"
                icon="tag"
                i18n-title
                title="Tag"
            >
            </nui-toolbar-item>
        </nui-toolbar-group>
        <div class="nui-toolbar-embedded">
            <!--mr-1 added as example of user's ability to style embedded content so it looks according to mock-ups -->
            <nui-search
                class="mr-1"
                [value]="value"
                [placeholder]="placeholder"
                (search)="onSearch($event)"
                (cancel)="onCancel($event)"
            >
            </nui-search>
            <nui-menu
                displayStyle="action"
                [itemsSource]="itemsSource"
                icon="menu"
            ></nui-menu>
        </div>
        <nui-toolbar-message>Custom toolbar message.</nui-toolbar-message>
    </nui-toolbar>
</div>
`;export{o as default};
