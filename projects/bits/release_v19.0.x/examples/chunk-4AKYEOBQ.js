import"./chunk-VBFW7A5V.js";var d=`<div style="max-width: 600px">
    <cdk-tree
        class="nui-tree"
        [dataSource]="dataSource"
        [treeControl]="treeControl"
    >
        <cdk-nested-tree-node *cdkTreeNodeDef="let node" class="nui-tree__leaf">
            <button
                nui-button
                displayStyle="action"
                type="button"
                disabled
            ></button>
            <div class="d-flex justify-content-between w-100">
                <span>Node: {{ node.name }}</span>
                <span> Status: {{ node.status }}</span>
            </div>
        </cdk-nested-tree-node>
        <cdk-nested-tree-node
            #nestedNode="cdkNestedTreeNode"
            *cdkTreeNodeDef="let node; when: hasChild"
            class="nui-tree__branch"
        >
            <div
                class="nui-tree__header"
                (click)="onToggleClick(node, nestedNode)"
                cdkTreeNodeToggle
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
                <div nui-busy [busy]="node.isLoading" style="min-height: 20px">
                    <ng-container cdkTreeNodeOutlet></ng-container>
                    <a
                        *ngIf="node.hasChildren && nodesTotalItems[node.name]"
                        class="nui-tree__show-all"
                        (click)="showAll(node)"
                        >Show All ({{ nodesTotalItems[node.name] }})</a
                    >
                </div>
            </div>
        </cdk-nested-tree-node>
    </cdk-tree>
</div>
`;export{d as default};
