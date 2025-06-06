import"./chunk-VBFW7A5V.js";var d=`<cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
    <cdk-nested-tree-node *cdkTreeNodeDef="let node" class="nui-tree__leaf">
        <button
            nui-button
            displayStyle="action"
            type="button"
            disabled
        ></button>
        {{ node.name }}, fromPage: {{ node.page }}
    </cdk-nested-tree-node>
    <cdk-nested-tree-node
        #nestedNode="cdkNestedTreeNode"
        *cdkTreeNodeDef="let node; when: hasChild"
        class="nui-tree"
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
            [class.nui-tree__body--collapsed]="!treeControl.isExpanded(node)"
            [@expandedState]="
                treeControl.isExpanded(node) ? 'expanded' : 'collapsed'
            "
        >
            <div nui-busy [busy]="node.isLoading" style="min-height: 20px">
                <ng-container cdkTreeNodeOutlet></ng-container>
                <nui-paginator
                    *ngIf="node.hasPagination && nodesTotalItems[node.name]"
                    [page]="1"
                    [pageSize]="pageSize"
                    (pagerAction)="loadNodeItems(node, nestedNode, $event)"
                    [total]="nodesTotalItems[node.name]"
                >
                </nui-paginator>
            </div>
        </div>
    </cdk-nested-tree-node>
</cdk-tree>
`;export{d as default};
