import"./chunk-7KJRK3NW.js";var o=`<nui-example-wrapper
    filenamePrefix="data-point-selection-prototype"
    exampleTitle="Data Point Selection Prototype"
>
    <nui-message type="critical" [allowDismiss]="false">
        <strong>Note:</strong> This is only a prototype, so its implementation
        is unpolished. Please use discretion when copying the code as there are
        likely solutions more concise and/or elegant than those presented here.
        <strong
            >For assistance, please contact Blake Simmon or Lukas
            Holcik.</strong
        >
    </nui-message>
    <hr />
    <nui-chart
        class="d-flex chart"
        [chart]="statusChart"
        nuiChartCollectionId="collection"
    ></nui-chart>
    <nui-chart
        class="d-flex chart"
        [chart]="barChart"
        nuiChartCollectionId="collection"
    ></nui-chart>
    <hr />
    <button type="button" nui-button (click)="onReset()">Reset</button>
</nui-example-wrapper>
`;export{o as default};
