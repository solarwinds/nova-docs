import"./chunk-VBFW7A5V.js";var i=`<nui-file-drop-example
    (drop)="dropHandler($event)"
    (enter)="dragEnterHandler($event)"
    (leave)="invalidateFiles()"
    [state]="fileDropState"
>
    <ng-container *ngIf="gifError">
        <nui-validation-message [show]="true">
            Please upload GIF only!</nui-validation-message
        >
    </ng-container>
    <ng-container *ngIf="!gifError">
        <nui-icon icon="upload" class="pr-2" iconColor="gray"></nui-icon>
        <span class="nui-text-small-secondary">
            Drop only <b>GIF images</b> to upload, or
            <label
                for="uniqueOne"
                class="nui-text-link-small nui-demo-drop-area__browse"
                >browse</label
            >
        </span>
    </ng-container>

    <!--this is hidden file input to handle browse button-->
    <input
        type="file"
        id="uniqueOne"
        [accept]="imageType"
        multiple
        (change)="onFileRead($event)"
        class="hidden"
    />
</nui-file-drop-example>

<span class="nui-text-small-secondary">File types: GIF</span>

<div class="nui-demo-file-area d-flex" *ngFor="let file of files">
    <div class="py-2 px-3 flex-grow-1 flex-row">
        <span class="nui-text-label">{{ file.name }}</span>
        <nui-progress
            [show]="true"
            [stacked]="true"
            [percent]="42"
            [showNumber]="true"
            (cancel)="onCancel()"
        >
        </nui-progress>
    </div>
    <div class="nui-demo-file-area__right flex-grow-0">
        <button
            nui-button
            type="button"
            displayStyle="action"
            icon="close"
            (click)="rmFile(file)"
        ></button>
    </div>
</div>
`;export{i as default};
