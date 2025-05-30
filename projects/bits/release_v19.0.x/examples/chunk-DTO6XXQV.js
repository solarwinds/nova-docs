import"./chunk-VBFW7A5V.js";var n=`<style>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
    }
    .row {
        margin-right: 0;
        margin-left: -10px;
    }
</style>

<div>
    <h3>Basic menu with different display types and icons</h3>
    <div class="row">
        <div class="col-md-3">
            <nui-menu
                id="nui-demo-basic-menu-with-icon"
                title="Basic menu"
                [itemsSource]="itemsSource"
            >
            </nui-menu>
        </div>
        <div class="col-md-3">
            <nui-menu
                id="nui-demo-primary-menu-with-icon"
                title="Primary menu"
                displayStyle="primary"
                [itemsSource]="itemsSource"
                icon="add"
            >
            </nui-menu>
        </div>
        <div class="col-md-3">
            <nui-menu
                id="nui-demo-action-menu-with-icon"
                title="Action menu"
                displayStyle="action"
                [itemsSource]="itemsSource"
                icon="check"
            >
            </nui-menu>
        </div>
        <div class="col-md-3">
            <div class="pull-right">
                <nui-menu
                    id="nui-demo-destructive-menu-with-icon"
                    title="Dstrctv"
                    displayStyle="destructive"
                    [itemsSource]="itemsSource"
                    icon="run"
                >
                </nui-menu>
            </div>
        </div>
    </div>
    <hr />

    <h3>Menu items variations</h3>
    <div class="row">
        <div class="col-md-3">
            <nui-menu
                id="nui-demo-menu-variants_menu"
                [itemsSource]="itemsSourceVariations"
                icon="menu"
            >
            </nui-menu>
        </div>
        <div class="col-md-3">
            <nui-menu
                id="nui-demo-menu-variants_add"
                [itemsSource]="itemsSourceVariations"
                icon="add"
            >
            </nui-menu>
        </div>
        <div class="col-md-3">
            <nui-menu
                id="nui-demo-menu-variants_gear"
                [itemsSource]="itemsSourceVariations"
                icon="gear"
            >
            </nui-menu>
        </div>
        <div class="col-md-3">
            <div class="pull-right">
                <nui-menu
                    id="nui-demo-menu-variants_run"
                    displayStyle="destructive"
                    [itemsSource]="itemsSourceVariations"
                    icon="run"
                >
                </nui-menu>
            </div>
        </div>
    </div>
    <hr />

    <h3>Menu with multiselection</h3>
    <nui-menu title="Multi-selection" id="nui-demo-multi-selection-menu">
        <nui-menu-group header="section title">
            <nui-menu-option>Menu item with checkbox</nui-menu-option>
            <nui-menu-option>Second item</nui-menu-option>
            <nui-menu-option>Third menu item</nui-menu-option>
            <nui-menu-option>Fourth item</nui-menu-option>
        </nui-menu-group>
        <nui-menu-group header="section 2 title">
            <nui-menu-option>First from second group</nui-menu-option>
            <nui-menu-option>Another menu item</nui-menu-option>
            <nui-menu-option>Menu item with checkbox</nui-menu-option>
        </nui-menu-group>

        <nui-menu-group>
            <nui-menu-link>Browse all properties...</nui-menu-link>
            <nui-menu-action type="destructive" icon="export-pdf"
                >Destructive action</nui-menu-action
            >
        </nui-menu-group>
    </nui-menu>
    <hr />

    <div class="row footer">
        <div class="col-md-1">
            <nui-menu
                id="nui-demo-basic-menu-with-icon-footer"
                title="Basic menu"
                [itemsSource]="itemsSource"
            >
            </nui-menu>
        </div>
        <div class="col-md-11">
            <div class="pull-right">
                <nui-menu
                    id="nui-demo-destructive-menu-with-icon-footer"
                    title="Dstrctv"
                    displayStyle="destructive"
                    [itemsSource]="itemsSource"
                    icon="run"
                >
                </nui-menu>
            </div>
        </div>
    </div>
</div>
`;export{n as default};
