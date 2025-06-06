import"./chunk-VBFW7A5V.js";var n=`<nui-example-wrapper>
    <h3>XSS + self highlight</h3>
    <p *ngFor="let item of xss" [innerHTML]="item | nuiHighlight : item"></p>
    <nui-divider></nui-divider>
    <h3>XSS + search</h3>
    <label for="search" i18n>Search Term:</label><br />
    <input [(ngModel)]="search" id="search" /><br />
    <nui-divider></nui-divider>
    search = {{ search }}
    <p *ngFor="let item of xss" [innerHTML]="item | nuiHighlight : search"></p>
    <nui-divider></nui-divider>
    <p [innerHTML]="contentString | nuiHighlight : search"></p>
    <section class="nui-ignore-highlight">
        <p class="nui-text-label" i18n>
            Text below is piped via filter as well. But highlight doesn't
            appear. <br />
            Class <i>nui-ignore-highlight</i> on container prevents it.
        </p>
        <p [innerHTML]="contentStringIgnore | nuiHighlight : search"></p>
    </section>
</nui-example-wrapper>
`;export{n as default};
