import"./chunk-VBFW7A5V.js";var a=`<div class="container">
    <div class="row custom-header">
        <div class="col-9 p-0">
            <div class="nui-wizard-horizontal-header-container">
                <ng-container
                    *ngFor="let step of steps; let i = index; let isLast = last"
                >
                    <nui-wizard-step-header
                        class="nui-wizard-horizontal-header"
                        (click)="step.select()"
                        (keydown)="_onKeydown($event)"
                        [tabIndex]="_getFocusIndex() === i ? 0 : -1"
                        [id]="_getStepLabelId(i)"
                        [attr.aria-posinset]="i + 1"
                        [attr.aria-setsize]="steps.length"
                        [attr.aria-controls]="_getStepContentId(i)"
                        [attr.aria-selected]="selectedIndex === i"
                        [attr.aria-label]="step.ariaLabel || null"
                        [attr.aria-labelledby]="
                            !step.ariaLabel && step.ariaLabelledby
                                ? step.ariaLabelledby
                                : null
                        "
                        [index]="i"
                        [label]="step.label || step.stepLabel"
                        [selected]="selectedIndex === i"
                        [active]="
                            step.completed || selectedIndex === i || !linear
                        "
                        [step]="step"
                        [errorMessage]="step.errorMessage"
                    >
                    </nui-wizard-step-header>
                    <div
                        *ngIf="!isLast"
                        class="nui-wizard-horizontal-line"
                    ></div>
                </ng-container>
            </div>
            <div class="nui-wizard-horizontal-content-container">
                <h2>
                    <ng-container
                        *ngIf="selected.stepLabel"
                        [ngTemplateOutlet]="selected.stepLabel.template"
                    ></ng-container>
                    <ng-container *ngIf="!selected.stepLabel">{{
                        selected.label
                    }}</ng-container>
                </h2>
                <div
                    *ngFor="let step of steps; let i = index"
                    [attr.tabindex]="selectedIndex === i ? 0 : null"
                    class="nui-wizard-horizontal-content"
                    role="tabpanel"
                    [id]="_getStepContentId(i)"
                    [attr.aria-labelledby]="_getStepLabelId(i)"
                    [attr.aria-expanded]="selectedIndex === i"
                >
                    <ng-container
                        [ngTemplateOutlet]="step.content"
                    ></ng-container>
                </div>
            </div>
        </div>
        <div class="col-3 custom-summary">
            <ng-content select="[summary]"></ng-content>
            <div
                *ngIf="selected.stepFooter"
                class="row nui-wizard-horizontal-footer-container"
            >
                <wizard-footer [footer]="selected.stepFooter"></wizard-footer>
            </div>
        </div>
    </div>
</div>
`;export{a as default};
