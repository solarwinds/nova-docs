import"./chunk-B7O3QC5Z.js";var a=`<div class="nui-thresholds-summary-test-harness">
    <nui-thresholds-summary-test
        [data]="data"
        [zones]="zones"
        [startDate]="startDate"
    ></nui-thresholds-summary-test>
    <br />
    <h2>Data</h2>
    <input
        id="data-input"
        type="text"
        class="w-100 mt-5"
        [ngModel]="data | json"
        (ngModelChange)="dataChanged($event)"
    />
    <h2>Zones</h2>
    <textarea
        id="zones-input"
        rows="13"
        cols="30"
        [ngModel]="zones | json"
        (ngModelChange)="zonesChanged($event)"
    ></textarea>
</div>
`;export{a as default};
