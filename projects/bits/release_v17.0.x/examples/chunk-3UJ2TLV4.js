import"./chunk-XR34LRGE.js";var t=`<div class="container">
    <h3>Basic Wizard</h3>
    <ng-template #step1>
        <p>Contents of the step 1</p>
    </ng-template>
    <ng-template #step2>
        <p>Contents of the step 2</p>
    </ng-template>
    <ng-template #step3>
        <div class="row">
            <div class="col text-justify">
                <p>
                    Review the entire configurations before performing the final
                    action.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin maximus magna non sem bibendum ultricies. Proin non
                    nisl vel augue eleifend tempor sed sit amet tortor. Nam
                    vitae fermentum lorem, vel sollicitudin metus. Praesent
                    consectetur, metus in venenatis condimentum, libero orci
                    varius justo, maximus efficitur massa ipsum eu quam.
                    Curabitur ac lacus sed neque facilisis dapibus sed non
                    lacus. Praesent rhoncus sem at neque fringilla, non faucibus
                    diam tincidunt. Vestibulum congue sodales elit, quis maximus
                    lectus dapibus ut. Praesent at tellus vel tellus facilisis
                    volutpat. Ut est dolor, molestie vehicula bibendum et,
                    hendrerit non eros. Aliquam erat volutpat. Suspendisse quis
                    interdum turpis. Nunc in nulla lacinia, sagittis metus ut,
                    faucibus ligula. Donec finibus posuere ornare. Suspendisse
                    vel convallis metus, in sodales est. Donec ultricies
                    hendrerit mi sed convallis. Ut vitae arcu in tellus
                    hendrerit sodales.
                </p>
            </div>
        </div>
    </ng-template>
    <ng-template #step4>
        <p>
            Review the entire configurations before performing the final action.
        </p>
    </ng-template>
    <ng-template #busy>
        <p>Set step to busy</p>
        <button
            nui-button
            type="button"
            id="nui-demo-busy-button"
            (click)="makeStepBusy()"
        >
            Make current step busy
        </button>
    </ng-template>

    <nui-wizard #wizardComponent id="nui-demo-wizard">
        <nui-wizard-step
            id="nui-demo-wizard-step1"
            [title]="'First'"
            [stepTemplate]="step1"
        ></nui-wizard-step>
        <nui-wizard-step
            id="nui-demo-wizard-step2"
            [title]="'Second'"
            [stepTemplate]="step2"
        ></nui-wizard-step>
        <nui-wizard-step
            id="nui-demo-wizard-step3"
            [title]="'Summary'"
            [stepTemplate]="step3"
        ></nui-wizard-step>
        <button nui-button type="button" id="nui-demo-additional-button">
            Additional button
        </button>
    </nui-wizard>
    <hr />

    <h3>Wizard in dialog</h3>
    <ng-template #dialogWizard>
        <nui-dialog-header
            title="Wizard dialog"
            (closed)="closeDialog()"
        ></nui-dialog-header>
        <div class="dialog-body compact-mode">
            <nui-wizard id="nui-demo-wizard-dialog" (cancel)="closeDialog()">
                <nui-wizard-step
                    title="Completed"
                    [stepTemplate]="step1"
                ></nui-wizard-step>
                <nui-wizard-step
                    title="Active"
                    [stepTemplate]="step2"
                ></nui-wizard-step>
                <nui-wizard-step
                    title="Not visited"
                    [stepTemplate]="step3"
                ></nui-wizard-step>
                <nui-wizard-step
                    title="Summary"
                    [stepTemplate]="step4"
                ></nui-wizard-step>
            </nui-wizard>
        </div>
    </ng-template>
    <button
        id="nui-demo-dialog-wizard-btn"
        nui-button
        type="button"
        (click)="openDialog(dialogWizard)"
    >
        Open dialog wizard
    </button>
    <hr />

    <h3>Busy wizard in dialog</h3>
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <nui-wizard #dialogWizardBusy id="nui-demo-wizard-busy">
                <nui-wizard-step
                    id="nui-demo-wizard-step1"
                    [title]="'First'"
                    [stepTemplate]="busy"
                ></nui-wizard-step>
                <nui-wizard-step
                    id="nui-demo-wizard-step2"
                    [title]="'Second'"
                    [stepTemplate]="step1"
                ></nui-wizard-step>
            </nui-wizard>
        </div>
    </div>
    <hr />
</div>
`;export{t as default};
