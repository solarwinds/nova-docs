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
            <ng-container cdkTreeNodeOutlet></ng-container>
            <div *ngIf="node.hasPagination">
                <button
                    nui-button
                    displayStyle="action"
                    type="button"
                    disabled
                ></button>
                <a
                    *ngIf="!node.isLoading"
                    (click)="loadMoreItems(node, nestedNode)"
                    >Load another {{ pageSize }} (of
                    {{ remainingItemsCount[node.name] }})</a
                >
                <nui-spinner
                    *ngIf="node.isLoading"
                    [show]="node.isLoading"
                    [delay]="0"
                ></nui-spinner>
            </div>
        </div>
    </cdk-nested-tree-node>
</cdk-tree>
`;export{d as default};
