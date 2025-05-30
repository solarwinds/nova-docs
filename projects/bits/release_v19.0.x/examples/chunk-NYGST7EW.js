import"./chunk-VBFW7A5V.js";var l=`<nui-textbox-number
    [minValue]="-1"
    [maxValue]="11"
    [value]="value"
    [step]="0.1"
    (valueChange)="valueChanged($event)"
></nui-textbox-number>

<br />

<div class="">
    Default font size without title:
    <nui-risk-score [level]="value" minLevel="0" maxLevel="10"></nui-risk-score>
</div>

<div>
    25px font size with title:
    <nui-risk-score
        [level]="value"
        minLevel="0"
        maxLevel="10"
        title="Risk Score"
        style="font-size: 24px"
    ></nui-risk-score>
</div>

<div>
    40px font size with title-score:
    <nui-risk-score
        [level]="value"
        minLevel="0"
        maxLevel="10"
        [title]="value"
        style="font-size: 40px"
    ></nui-risk-score>
</div>
`;export{l as default};
