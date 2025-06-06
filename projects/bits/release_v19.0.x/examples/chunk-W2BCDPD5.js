import"./chunk-VBFW7A5V.js";var t=`<cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
    <cdk-nested-tree-node *cdkTreeNodeDef="let node" class="nui-tree__leaf">
        <button
            nui-button
            displayStyle="action"
            type="button"
            disabled
        ></button>
        <nui-icon
            class="nui-tree__icon"
            *ngIf="node.icon"
            [icon]="node.icon"
        ></nui-icon>
        <span class="{{ node.textStyle || textStyles.DEFAULT }}">{{
            node.name
        }}</span>
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
            <nui-icon
                class="nui-tree__icon"
                *ngIf="node.icon"
                [icon]="node.icon"
            ></nui-icon>
            <span
                i18n
                class="nui-tree__header-title {{
                    node.textStyle || textStyles.LABEL
                }}"
                >{{ node.name }}</span
            >
        </div>
        <div
            class="nui-tree__body"
            [class.nui-tree__body--collapsed]="!treeControl.isExpanded(node)"
            [@expandedState]="
                treeControl.isExpanded(node) ? 'expanded' : 'collapsed'
            "
        >
            <ng-container cdkTreeNodeOutlet></ng-container>
        </div>
    </cdk-nested-tree-node>
</cdk-tree>
`;export{t as default};
