import"./chunk-7KJRK3NW.js";var a=`<ng-content></ng-content>
<div class="ml-3 mt-4">
    <div class="d-flex align-items-center">
        <input
            class="mb-2"
            type="checkbox"
            id="dark-theme"
            [ngModel]="themeSwitcher.isDarkModeEnabledSubject | async"
            (ngModelChange)="themeSwitcher.setDarkTheme($event)"
        />
        <label class="px-3" for="dark-theme">Dark Theme</label>
    </div>
</div>
`;export{a as default};
