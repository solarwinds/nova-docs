import"./chunk-VBFW7A5V.js";var e=`<h3>Highlighting a portion of text:</h3>
<p [innerHTML]="'hello world' | nuiHighlight : 'world'"></p>

<h3>Dynamic highlighting (for example, with search):</h3>
<nui-search
    (inputChange)="changeSearchValue($event)"
    [value]="term"
></nui-search>
<p [innerHTML]="searchString | nuiHighlight : term"></p>
`;export{e as default};
