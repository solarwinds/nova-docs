import"./chunk-VBFW7A5V.js";var r=`<h1 i18n>Selected color: {{ selectedColor }}</h1>
<nui-radio-group id="color-radio-group" name="color" [(value)]="selectedColor">
    <nui-radio value="Red">
        Red
        <ng-container hint>
            This is some more
            <a
                href="https://en.wiktionary.org/wiki/elaborate"
                target="_blank"
                rel="noopener noreferrer"
                >elaborate</a
            >
            hint.
        </ng-container>
    </nui-radio>
    <nui-radio value="Green">
        Green
        <ng-container hint>
            Well, depends on <strong>your</strong> definition of
            <a
                href="https://en.wiktionary.org/wiki/elaborate"
                target="_blank"
                rel="noopener noreferrer"
                >elaborate</a
            >.
        </ng-container>
    </nui-radio>
    <nui-radio value="Blue">
        Blue
        <ng-container hint>
            At least it does
            <a
                href="https://en.wiktionary.org/wiki/hyperlink"
                target="_blank"
                rel="noopener noreferrer"
                >links</a
            >.
        </ng-container>
    </nui-radio>
    <nui-radio value="Teal">
        Teal
        <!-- links actually don't require click event filtering, unline other elements -->
        <div hint nuiClickFilter (click)="showToast()">
            Can also
            <span>cancel bubble anywhere in hint</span>
            when customized.
        </div>
    </nui-radio>
</nui-radio-group>
`;export{r as default};
