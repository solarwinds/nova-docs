import"./chunk-VBFW7A5V.js";var t=`<button nui-button type="button" (click)="toggleFooter()" i18n>
    Toggle Footer
</button>
<div>
    <nui-panel id="nui-demo-embedded-content-panel" orientation="left">
        <div class="d-flex mr-1" nuiPanelEmbeddedIcon>
            <nui-icon [icon]="headerIcon" iconColor="gray"> </nui-icon>
        </div>
        <div nuiPanelEmbeddedHeading>
            <span>
                <h4 i18n class="my-0">TRANSCLUDED</h4>
            </span>
        </div>
        <div nuiPanelEmbeddedBody>
            <div>
                <p i18n>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer quam nibh, tincidunt non massa quis, efficitur
                    porttitor lacus. In quis tellus euismod, tincidunt libero
                    quis, suscipit nunc. Nulla ac mattis tortor, quis iaculis
                    sapien.
                </p>
            </div>
        </div>
        <div>
            <p i18n>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                efficitur rutrum lacus id vulputate. Integer eu ex eu augue
                efficitur luctus quis ac elit. Nam odio est, iaculis nec varius
                id, congue erat. Nullam mi lectus, gravida quis pretium sit
                amet, accumsan non elit. In tempus commodo sem ac vulputate. Sed
                vel sagittis purus. Integer non ornare felis. Sed aliquam, purus
                et euismod tincidunt, felis ligula fermentum mi, eget commodo
                nisl orci efficitur dui. Etiam interdum justo magna consequat,
                vitae hendrerit mi aliquam. Sed non ex eu purus ornare lobortis
                tempus id est. Aenean dictum at dui sit amet mollis. Phasellus
                mauris arcu, blandit id congue vitae, elementum amet enim.
                Pellentesque et facilisis leo, sit amet rhoncus magna. Integer
                commodo lobortis arcu et bibendum. Pellentesque sagittis magna
                sed tellus volutpat, sed eleifend justo ornare. Fusce porttitor
                laoreet dui a mollis.
            </p>
        </div>
        <div
            *ngIf="displayFooter"
            nuiPanelEmbeddedFooter
            class="d-flex justify-content-between"
        >
            <button nui-button type="button" (click)="onClickCancel()" i18n>
                Cancel
            </button>
            <button
                nui-button
                type="button"
                displayStyle="primary"
                (click)="onClickConfirm()"
                i18n
            >
                Confirm
            </button>
        </div>
    </nui-panel>
</div>
`;export{t as default};
