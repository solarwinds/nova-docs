import"./chunk-VBFW7A5V.js";var t=`<div style="width: 360px">
    <cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
        <cdk-nested-tree-node *cdkTreeNodeDef="let node" class="nui-tree__leaf">
            <button
                nui-button
                displayStyle="action"
                type="button"
                disabled
            ></button>
            <span class="nui-tree__leaf-title"> {{ node.name }} </span>
            <nui-menu
                icon="menu"
                id="nui-demo-basic-menu"
                [appendToBody]="true"
                displayStyle="action"
            >
                <nui-menu-action *ngFor="let item of items">
                    {{ item }}
                </nui-menu-action>
            </nui-menu>
        </cdk-nested-tree-node>
        <cdk-nested-tree-node
            *cdkTreeNodeDef="let node; when: hasChild"
            class="nui-tree"
        >
            <div
                class="nui-tree__header"
                cdkTreeNodeToggle
                (click)="onToggleClick()"
            >
                <nui-icon
                    class="nui-tree__header-icon"
                    icon="{{
                        treeControl.isExpanded(node)
                            ? 'triangle-down'
                            : 'triangle-right'
                    }}"
                ></nui-icon>
                <span class="nui-tree__header-title">{{ node.name }}</span>
                <div
                    class="nui-badge-counter"
                    [attr.data-before]="node.children.length"
                ></div>
            </div>
            <div
                class="nui-tree__body"
                [class.nui-tree__body--collapsed]="
                    !treeControl.isExpanded(node)
                "
                [@expandedState]="
                    treeControl.isExpanded(node) ? 'expanded' : 'collapsed'
                "
            >
                <ng-container cdkTreeNodeOutlet></ng-container>
            </div>
        </cdk-nested-tree-node>
    </cdk-tree>
</div>
`;export{t as default};
