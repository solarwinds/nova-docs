import"./chunk-VBFW7A5V.js";var i=`<div>
    <nui-popover
        icon="application"
        [template]="iconPopoverTemplateNoTitle"
        i18n
    >
        Hover over me!
    </nui-popover>
</div>
<div>
    <nui-popover
        popoverTitle="Popover with Icon"
        i18n-popoverTitle
        icon="application"
        [template]="iconPopoverTemplateWithTitle"
        i18n
    >
        Hover over me, too!
    </nui-popover>
</div>

<ng-template #iconPopoverTemplateNoTitle i18n
    >I have an application icon and no title!</ng-template
>
<ng-template #iconPopoverTemplateWithTitle i18n
    >I have an application icon and a title!</ng-template
>
`;export{i as default};
