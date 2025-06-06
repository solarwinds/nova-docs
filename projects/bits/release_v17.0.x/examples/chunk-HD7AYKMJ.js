import"./chunk-XR34LRGE.js";var o=`<div class="nui">
    Toolbar that always has some items.
    <nui-toolbar
        [boxShadow]="false"
        [selectionEnabled]="selectionEnabled"
        [selectedItems]="select"
        [noEmptyMessage]="noEmptyMessage"
        #toolbar
    >
        <ng-container *ngIf="selectionEnabled">
            <nui-toolbar-group>
                <nui-toolbar-item
                    type="primary"
                    icon="deselect"
                    i18n-title
                    title="Deselect"
                >
                </nui-toolbar-item>
                <nui-toolbar-item
                    type="primary"
                    icon="deselect-all"
                    i18n-title
                    title="Deselect All"
                >
                </nui-toolbar-item>
            </nui-toolbar-group>
            <nui-toolbar-group>
                <nui-toolbar-item
                    displayStyle="destructive"
                    type="primary"
                    icon="delete"
                    i18n-title
                    title="Delete"
                >
                </nui-toolbar-item>
            </nui-toolbar-group>
        </ng-container>

        <ng-container *ngIf="!selectionEnabled">
            <nui-toolbar-group>
                <nui-toolbar-item
                    type="primary"
                    icon="enable"
                    i18n-title
                    title="Enable"
                >
                </nui-toolbar-item>
                <nui-toolbar-item
                    type="primary"
                    icon="export"
                    i18n-title
                    title="Execute"
                >
                </nui-toolbar-item>
                <nui-toolbar-item
                    type="primary"
                    icon="hide"
                    i18n-title
                    title="Hide"
                >
                </nui-toolbar-item>
                <nui-toolbar-item
                    type="primary"
                    icon="edit"
                    i18n-title
                    title="Edit"
                >
                </nui-toolbar-item>
            </nui-toolbar-group>
        </ng-container>
        <div class="nui-toolbar-embedded">
            <nui-search
                [value]="value"
                [placeholder]="placeholder"
                (search)="onSearch($event)"
                (cancel)="onCancel($event)"
            >
            </nui-search>
        </div>
    </nui-toolbar>
    Toolbar that does not have items.
    <nui-toolbar
        [boxShadow]="false"
        [selectionEnabled]="selectionEnabled"
        [selectedItems]="select"
        [noEmptyMessage]="noEmptyMessage"
        #toolbar2
    >
        <div class="nui-toolbar-embedded">
            <nui-search
                [value]="value"
                [placeholder]="placeholder"
                (search)="onSearch($event)"
                (cancel)="onCancel($event)"
            >
            </nui-search>
        </div>
    </nui-toolbar>
    <button
        nui-button
        type="button"
        class="mt-3"
        (click)="toggleSelectedChange()"
    >
        <span>Toggle Selected State</span>
    </button>
    <button
        nui-button
        type="button"
        class="mt-3"
        (click)="toggleEmptyMessage()"
    >
        <span>Toggle Empty Message</span>
    </button>
</div>
`;export{o as default};
