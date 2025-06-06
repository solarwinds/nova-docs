import"./chunk-VBFW7A5V.js";var c=`<h3>Standalone chips</h3>
<div id="standalone-chips" class="mb-5">
    <nui-chip
        *ngFor="let chip of standaloneChips"
        [item]="chip"
        [customClass]="chip.customClass"
        ><nui-icon
            *ngIf="chip.icon"
            [icon]="chip.icon"
            iconSize="small"
            class="mr-1"
        ></nui-icon>
        {{ chip.label }}
    </nui-chip>
</div>

<h3>nui-chips Group set</h3>
<nui-chips
    id="nui-demo-chips-custom-css"
    title="Statuses"
    orientation="vertical"
    customClass="nui-chips-custom-styles"
    [itemsSource]="nuiChipsSet"
    (chipRemoved)="onClear($event)"
    (removeAll)="onClearAll()"
>
</nui-chips>

<h3>Unset Width</h3>
<div id="chips-width-example" class="mb-5">
    <nui-chip
        *ngFor="let chip of widthChips"
        [item]="chip"
        [customClass]="chip.customClass"
    ></nui-chip>
</div>
`;export{c as default};
