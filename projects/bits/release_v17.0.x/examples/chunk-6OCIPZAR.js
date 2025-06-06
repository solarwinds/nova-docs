import"./chunk-XR34LRGE.js";var n=`<nui-form-field
    class="d-block mb-4"
    caption="Form field with string hint"
    i18n-caption
    info="Some info to show"
    i18n-info
    hint="Hint may be useful Some pretty long text with hint."
>
    <nui-textbox></nui-textbox>
</nui-form-field>
<nui-form-field
    caption="Form field with hint template"
    i18n-caption
    info="Some info to show"
    i18n-info
    [hintTemplate]="hintTemplate"
>
    <nui-textbox></nui-textbox>
</nui-form-field>
<ng-template #hintTemplate>
    <ng-container i18n
        >Some pretty long text with hint.
        <a href="" [routerLink]="[]">Example link.</a></ng-container
    >
</ng-template>
`;export{n as default};
