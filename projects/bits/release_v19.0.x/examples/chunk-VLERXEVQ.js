import"./chunk-VBFW7A5V.js";var o=`<div>
    <nui-popover [template]="popoverUnlimited" [unlimited]="true" i18n>
        Hover over me!
    </nui-popover>
</div>

<div>
    <nui-popover [template]="popoverDefaultRestrictions" i18n>
        Hover over me!
    </nui-popover>
</div>

<ng-template #popoverUnlimited i18n>
    I'm implemented without restrictions on my width and height! That's why I'm
    taking up as much space as I have available on the page. Expand my source
    code above to see how!
</ng-template>

<ng-template #popoverDefaultRestrictions i18n>
    I'm implemented with respect to the default <code>max-width</code> and
    <code>max-height</code> restrictions defined by the Nova Design Language!
    That's why my text will nicely wrap when it exceeds the
    <code>max-width</code> limit. Expand my source code above to see how!
</ng-template>
`;export{o as default};
