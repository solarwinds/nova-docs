import"./chunk-VBFW7A5V.js";var d=`<div class="container">
    <div class="row">
        <div class="col">
            <h3>Basic switch is ON</h3>
            <nui-switch id="nui-switch-simple-example" [(value)]="isOn">
                {{ isOn ? "On" : "Off" }}
            </nui-switch>
        </div>

        <div class="col">
            <h3>Basic switch is ON and disabled</h3>
            <nui-switch
                id="nui-switch-simple-example"
                [(value)]="isOn"
                [disabled]="isDisabled"
            >
                {{ isOn ? "On" : "Off" }}
            </nui-switch>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <h3>Basic switch is OFF</h3>
            <nui-switch id="nui-switch-disabled-example" [(value)]="isEnabled"
                >{{ isEnabled ? "On" : "Off" }}
            </nui-switch>
        </div>

        <div class="col">
            <h3>Basic switch is OFF and disabled</h3>
            <nui-switch
                id="nui-switch-disabled-example"
                [(value)]="isEnabled"
                [disabled]="isDisabled"
                >{{ isEnabled ? "On" : "Off" }}
            </nui-switch>
        </div>
    </div>
</div>
`;export{d as default};
