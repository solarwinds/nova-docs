import"./chunk-XR34LRGE.js";var d=`<div class="d-flex justify-content-between">
    <cdk-tree
        [@.disabled]="true"
        [dataSource]="dataSource"
        [treeControl]="treeControl"
        style="flex: 50%"
    >
        <cdk-nested-tree-node *cdkTreeNodeDef="let node" class="nui-tree__leaf">
            <button
                nui-button
                displayStyle="action"
                type="button"
                disabled
            ></button>
            <nui-checkbox
                class="leaf-control"
                [checked]="selectionModel.isSelected(node)"
                (valueChange)="leafItemSelectionToggle(node)"
                >{{ node.name }}</nui-checkbox
            >
        </cdk-nested-tree-node>
        <cdk-nested-tree-node
            *cdkTreeNodeDef="let node; when: hasChild"
            class="nui-tree"
        >
            <div class="nui-tree__header" cdkTreeNodeToggle>
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
                    [checked]="descendantsAllSelected(node)"
                    [indeterminate]="descendantsPartiallySelected(node)"
                    (valueChange)="branchItemSelectionToggle(node)"
                    >{{ node.item }}</nui-checkbox
                >
                <span class="nui-tree__header-title">{{ node.name }}</span>
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
`;export{d as default};
