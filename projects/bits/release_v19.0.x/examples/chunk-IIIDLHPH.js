import"./chunk-VBFW7A5V.js";var s=`<div id="nui-toast-test" class="container">
    <div class="py-2">
        <h3>Page settings</h3>
        <div>
            <label class="px-3 w-25" for="txtCount">
                Number of toasts to show:
            </label>
            <input type="number" id="txtCount" [(ngModel)]="count" />
        </div>

        <label class="px-3 w-25"> Toast type </label>
        <input
            id="radioError"
            type="radio"
            name="type"
            value="error"
            [(ngModel)]="type"
        />
        <label for="radioError" class="px-3"> error </label>
        <input
            id="radioInfo"
            type="radio"
            name="type"
            value="info"
            [(ngModel)]="type"
        />
        <label for="radioInfo" class="px-3"> info </label>
        <input
            id="radioSuccess"
            type="radio"
            name="type"
            value="success"
            [(ngModel)]="type"
        />
        <label for="radioSuccess" class="px-3"> success </label>
        <input
            id="radioWarning"
            type="radio"
            name="type"
            value="warning"
            [(ngModel)]="type"
        />
        <label for="radioWarning" class="px-3"> warning </label>
    </div>

    <div class="py-2">
        <h3>Toast Configuration</h3>
        <div>
            <label class="px-3 w-25" for="txtMessage"> message </label>
            <input type="text" id="txtMessage" [(ngModel)]="toast.message" />
        </div>
        <div>
            <label class="px-3 w-25" for="txtTitle"> title </label>
            <input type="text" id="txtTitle" [(ngModel)]="toast.title" />
        </div>
    </div>

    <div class="py-2">
        <h3>Options</h3>
        <div>
            <label class="px-3 w-25" for="txtTimeOut"> timeOut </label>
            <input
                type="text"
                id="txtTimeOut"
                [(ngModel)]="toast.options.timeOut"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="txtExtendedTimeOut">
                extendedTimeOut
            </label>
            <input
                type="text"
                id="txtExtendedTimeOut"
                [(ngModel)]="toast.options.extendedTimeOut"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="chbCloseButton">closeButton</label>
            <input
                type="checkbox"
                id="chbCloseButton"
                [(ngModel)]="toast.options.closeButton"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="chbProgressBar">progressBar</label>
            <input
                type="checkbox"
                id="chbProgressBar"
                [(ngModel)]="toast.options.progressBar"
            />
        </div>
        <div>
            <label class="px-3 w-25">progressAnimation</label>
            <input
                id="radioIncreasing"
                type="radio"
                name="progressAnimation"
                value="increasing"
                [(ngModel)]="toast.options.progressAnimation"
            />
            <label for="radioIncreasing" class="px-3"> increasing </label>
            <input
                id="radioDecreasing"
                type="radio"
                name="progressAnimation"
                value="decreasing"
                [(ngModel)]="toast.options.progressAnimation"
            />
            <label for="radioDecreasing" class="px-3"> decreasing </label>
        </div>
        <div>
            <label class="px-3 w-25" for="chbEnableHtml">enableHtml</label>
            <input
                type="checkbox"
                id="chbEnableHtml"
                [(ngModel)]="toast.options.enableHtml"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="txtToastClass">toastClass</label>
            <input
                type="text"
                id="txtToastClass"
                [(ngModel)]="toast.options.toastClass"
            />
        </div>
        <div>
            <label class="px-3 w-25">positionClass</label>
            <span class="d-inline-block" style="vertical-align: middle">
                <input
                    id="radioTopCenter"
                    type="radio"
                    name="positionClass"
                    value="nui-toast--top-center"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioTopCenter" class="px-3"> TOP_CENTER </label>
                <input
                    id="radioTopLeft"
                    type="radio"
                    name="positionClass"
                    value="nui-toast--top-left"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioTopLeft" class="px-3"> TOP_LEFT </label>
                <input
                    id="radioTopRight"
                    type="radio"
                    name="positionClass"
                    value="nui-toast--top-right"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioTopRight" class="px-3"> TOP_RIGHT </label>
                <input
                    id="radioTopFullWidth"
                    type="radio"
                    name="positionClass"
                    value="nui-toast--top-full-width"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioTopFullWidth" class="px-3">
                    TOP_FULL_WIDTH
                </label>
                <br />
                <input
                    id="radioBottomCenter"
                    type="radio"
                    name="positionClass"
                    value="nui-toast--bottom-center"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioBottomCenter" class="px-3">
                    BOTTOM_CENTER
                </label>
                <input
                    id="radioBottomLeft"
                    type="radio"
                    name="positionClass"
                    value="nui-toast--bottom-left"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioBottomLeft" class="px-3"> BOTTOM_LEFT </label>
                <input
                    id="radioBottomRight"
                    type="radio"
                    name="positionClass"
                    value="nui-toast--bottom-right"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioBottomRight" class="px-3">
                    BOTTOM_RIGHT
                </label>
                <input
                    id="radioBottomFullWidth"
                    type="radio"
                    name="positionClass"
                    value="nui-toast--bottom-full-width"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioBottomFullWidth" class="px-3">
                    BOTTOM_FULL_WIDTH
                </label>
                <input
                    id="radioCustomClass"
                    type="radio"
                    name="positionClass"
                    value="demoToastCustomClass"
                    [(ngModel)]="toast.options.positionClass"
                />
                <label for="radioCustomClass" class="px-3">
                    CUSTOM_CLASS
                </label>
            </span>
        </div>
        <div>
            <label class="px-3 w-25" for="chbClickToDismiss"
                >clickToDismiss</label
            >
            <input
                type="checkbox"
                id="chbClickToDismiss"
                [(ngModel)]="toast.options.clickToDismiss"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="chbStickyError">stickyError</label>
            <input
                type="checkbox"
                id="chbStickyError"
                [(ngModel)]="toast.options.stickyError"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="txtMaxOpened">maxOpened</label>
            <input
                type="number"
                id="txtMaxOpened"
                [(ngModel)]="toast.options.maxOpened"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="chbAutoDismiss">autoDismiss</label>
            <input
                type="checkbox"
                id="chbAutoDismiss"
                [(ngModel)]="toast.options.autoDismiss"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="chbNewestOnTop">newestOnTop</label>
            <input
                type="checkbox"
                id="chbNewestOnTop"
                [(ngModel)]="toast.options.newestOnTop"
            />
        </div>
        <div>
            <label class="px-3 w-25" for="chbPreventDuplicates"
                >preventDuplicates</label
            >
            <input
                type="checkbox"
                id="chbPreventDuplicates"
                [(ngModel)]="toast.options.preventDuplicates"
            />
        </div>
    </div>

    <div class="p-5" style="text-align: center">
        <button class="px-5" id="btnFire" (click)="fireToast()">
            Fire Toast(s)!
        </button>
        <button class="px-3 ml-3" id="btnReset" (click)="reset()">
            Reset form
        </button>
    </div>
</div>
`;export{s as default};
