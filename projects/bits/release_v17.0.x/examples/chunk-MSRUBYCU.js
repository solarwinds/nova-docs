import"./chunk-XR34LRGE.js";var a=`<style>
    .searchservice {
        width: 100%;
    }
    .searchservice-demo-data-left {
        width: 50%;
    }
</style>

<nui-search-service-example>
    <h1>Search Service</h1>
    <h3>Original items</h3>
    <pre class="searchservice-demo-data-left">{{ itemsFormatted }}</pre>
    <p>Search this value</p>
    <input
        [(ngModel)]="searchValue"
        class="searchservice"
        placeholder="Type something to search"
    /><br />
    <nui-checkbox-group
        [(values)]="props"
        (valuesChange)="valuesChanged($event)"
    >
        <nui-checkbox [value]="1">Property 'stringContainer'</nui-checkbox>
        <nui-checkbox [value]="2">Property 'numberContainer'</nui-checkbox>
        <nui-checkbox [value]="3">Property 'dateContainer'</nui-checkbox>
    </nui-checkbox-group>
    <button nui-button type="button" displayStyle="primary" (click)="search()">
        Search
    </button>
    <br /><br />
    <h3>Search result</h3>
    <pre class="searchservice-demo-data-left">{{ searchResultFormatted }}</pre>
    <nui-divider></nui-divider>
</nui-search-service-example>
`;export{a as default};
