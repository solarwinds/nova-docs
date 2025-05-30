import"./chunk-B7O3QC5Z.js";var i=`<nui-example-wrapper
    filenamePrefix="data-point-popovers-prototype"
    exampleTitle="Data Point Popovers Prototype"
>
    <nui-chart class="d-flex" [chart]="chart"></nui-chart>

    <div class="my-3 d-flex align-items-center">
        <nui-switch
            class="ml-3 py-2"
            (valueChange)="onToggleClickHandling($event)"
            >Enable Click Handling</nui-switch
        >
        <button
            *ngIf="renderer.config.markerInteraction?.clickable"
            class="ml-3"
            type="button"
            displayStyle="action"
            (click)="onReset()"
            nui-button
        >
            Reset Popover
        </button>
    </div>

    <nui-chart-popover
        [plugin]="popoverPlugin"
        [template]="popoverTemplate"
    ></nui-chart-popover>

    <ng-template let-dataPoints="dataPoints" #popoverTemplate>
        <div class="p-3">
            <div *ngFor="let item of dataPoints | keyvalue">
                <div>
                    <strong>{{ item.key }}:</strong>
                </div>
                <div>
                    <code>Data: {{ item.value.data | json }}</code>
                </div>
                <div>
                    <code>Position: {{ item.value.position | json }}</code>
                </div>
            </div>
        </div>
    </ng-template>
</nui-example-wrapper>
`;export{i as default};
