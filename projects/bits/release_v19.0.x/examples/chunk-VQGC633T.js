import"./chunk-VBFW7A5V.js";var e=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic Textbox</h3>
            <nui-textbox
                id="nui-visual-test-textbox-item"
                value="example value"
            >
            </nui-textbox>
            <hr />
        </div>
        <div class="col">
            <h3>Textbox with Placeholder</h3>
            <nui-textbox
                id="nui-visual-test-placeholder-textbox-item"
                i18n-placeholder
                placeholder="textbox placeholder"
            >
            </nui-textbox>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Disabled Textbox</h3>
            <nui-textbox
                id="nui-visual-test-disabled-textbox-item"
                value="disabled textbox"
                disabled="true"
            >
            </nui-textbox>
            <hr />
        </div>
        <div class="col">
            <h3>Readonly Textbox</h3>
            <nui-textbox
                id="nui-visual-test-readonly-textbox-item"
                value="readonly textbox"
                readonly="true"
            >
            </nui-textbox>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Required Textbox</h3>
            <nui-textbox
                id="nui-visual-test-required-textbox-item"
                [value]="value"
                [isInErrorState]="isInErrorState()"
                (textChange)="textChanged($event)"
            >
            </nui-textbox>
            <hr />
        </div>
        <div class="col">
            <h3>Textbox with Custom Width</h3>
            <nui-textbox
                id="nui-visual-test-custom-width-textbox-item"
                customBoxWidth="200px"
            >
            </nui-textbox>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Textbox with Hint</h3>
            <nui-form-field
                i18n-caption
                caption="Textbox with hint"
                i18n-hint
                hint="custom hint"
            >
                <nui-textbox id="nui-visual-test-hint-textbox-item">
                </nui-textbox>
            </nui-form-field>
            <hr />
        </div>
        <div class="col">
            <h3>Textbox with Info Icon</h3>
            <nui-form-field
                i18n-caption
                caption="Textbox with info"
                i18n-info
                info="This is additional info for textbox"
                id="nui-visual-test-info-formfield-item"
            >
                <nui-textbox
                    id="nui-visual-test-info-textbox-item"
                    value="Textbox with info"
                >
                </nui-textbox>
            </nui-form-field>
            <hr />
        </div>
        <div class="w-100"></div>
        <div class="col">
            <h3>Textbox with Textarea</h3>
            <nui-textbox
                id="nui-visual-test-area-textbox-item"
                value="Text area"
                rows="5"
            >
            </nui-textbox>
            <hr />
        </div>
        <div class="col">
            <h3>Textbox with Textarea and Placeholder</h3>
            <nui-textbox
                id="nui-visual-test-placeholder-area-textbox-item"
                rows="5"
                i18n-placeholder
                placeholder="area textbox placeholder"
            >
            </nui-textbox>
            <hr />
        </div>
    </div>
</div>
`;export{e as default};
