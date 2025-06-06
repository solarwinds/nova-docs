import"./chunk-XR34LRGE.js";var i=`<nui-example-wrapper
    filenamePrefix="runtime-i18n-example"
    exampleTitle="Runtime i18n"
>
    <div class="m-5" style="border: 1px lightgrey dashed; padding: 30px">
        <div class="row">
            <div class="col-2">
                <button btn nui-button type="button" (click)="setLocale('es')">
                    Espa\xF1ol
                </button>
            </div>
            <div class="col-2">
                <button btn nui-button type="button" (click)="setLocale('fr')">
                    Franc\xE9s
                </button>
            </div>
            <div class="col-2">
                <button btn nui-button type="button" (click)="setLocale('de')">
                    Deutsch
                </button>
            </div>
            <div class="col-6">
                <button
                    btn
                    nui-button
                    type="button"
                    (click)="setDefaultLocale()"
                >
                    English
                </button>
            </div>
        </div>
        <div class="row">
            <div class="d-flex justify-content-center align-items-center">
                <h1 i18n>Greetings!</h1>
            </div>
        </div>
        <div class="row">
            <p i18n>
                This is a random text written to show that runtime translations
                are actually working. Every single line in this example will be
                translated using Google Translator.
            </p>
        </div>
        <div class="row">
            <form>
                <nui-form-field
                    caption="First Name"
                    i18n-caption
                    hint="Please enter your first name"
                    i18n-hint
                >
                    <nui-textbox
                        [placeholder]="firstNamePlaceholder"
                        i18n-placeholder
                    ></nui-textbox>
                </nui-form-field>
                <nui-form-field
                    caption="Second Name"
                    i18n-caption
                    hint="Please enter your second name"
                    i18n-hint
                >
                    <nui-textbox
                        [placeholder]="lastNamePlaceholder"
                        i18n-placeholder
                    ></nui-textbox>
                </nui-form-field>
                <nui-form-field
                    caption="Email address"
                    i18n-caption
                    hint="Please enter a valid e-mail address"
                    i18n-hint
                >
                    <nui-textbox
                        [placeholder]="email"
                        i18n-placeholder
                    ></nui-textbox>
                </nui-form-field>
                <button btn nui-button type="button" i18n>Submit</button>
            </form>
        </div>
    </div>
</nui-example-wrapper>
`;export{i as default};
