import"./chunk-VBFW7A5V.js";var d=`<cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
    <cdk-nested-tree-node *cdkTreeNodeDef="let node" class="nui-tree__leaf">
        <button
            nui-button
            displayStyle="action"
            type="button"
            title="action"
            disabled
        ></button>
        <nui-checkbox
            class="leaf-control"
            [checked]="isParentNodeCheckedOn(node)"
            (valueChange)="leafItemSelectionToggle(node)"
            >{{ node.name }}</nui-checkbox
        >
    </cdk-nested-tree-node>
    <cdk-nested-tree-node
        #nestedNode="cdkNestedTreeNode"
        *cdkTreeNodeDef="let node; when: hasChild"
        class="nui-tree"
    >
        <div
            class="nui-tree__header"
            cdkTreeNodeToggle
            (click)="loadMore(node, nestedNode)"
        >
            <nui-icon
                class="nui-tree__header-icon"
                icon="{{
                    treeControl.isExpanded(node)
                        ? 'triangle-down'
                        : 'triangle-right'
                }}"
            ></nui-icon>
            <nui-checkbox
                class="branch-control"
                (click)="$event.stopPropagation()"
                [checked]="
                    descendantsAllSelected(node) || isParentNodeCheckedOn(node)
                "
                [indeterminate]="descendantsPartiallySelected(node)"
                (valueChange)="branchItemSelectionToggle(node)"
            >
                <span class="nui-tree__header-title"
                    >{{ node.name }} ({{ node.length }})</span
                >
            </nui-checkbox>
        </div>
        <div
            class="nui-tree__body"
            [class.nui-tree__body--collapsed]="!treeControl.isExpanded(node)"
            [@expandedState]="
                treeControl.isExpanded(node) ? 'expanded' : 'collapsed'
            "
        >
            <nui-spinner
                *ngIf="node.isLoading"
                [show]="node.isLoading"
                [delay]="0"
            ></nui-spinner>
            <ng-container cdkTreeNodeOutlet></ng-container>
        </div>
    </cdk-nested-tree-node>
</cdk-tree>
`;export{d as default};
