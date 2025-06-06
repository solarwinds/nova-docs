import"./chunk-VBFW7A5V.js";var u=`<div class="container">
    <div class="row">
        <div class="col" style="height: 150px">
            <h3>Joined Sheet Group with Sheet Cards</h3>
            <nui-sheet-group sheetsType="joined">
                <nui-sheet style="height: 150px">
                    <nui-card-group>
                        <nui-card> </nui-card>
                    </nui-card-group>
                </nui-sheet>
                <nui-sheet style="height: 150px">
                    <nui-card-group>
                        <nui-card> </nui-card>
                    </nui-card-group>
                </nui-sheet>
                <nui-sheet style="height: 150px">
                    <nui-card-group>
                        <nui-card> </nui-card>
                    </nui-card-group>
                </nui-sheet>
                <nui-sheet style="height: 150px">
                    <nui-card-group>
                        <nui-card> </nui-card>
                    </nui-card-group>
                </nui-sheet>
            </nui-sheet-group>
        </div>
        <div class="col">
            <h3>Joined Sheet Group with Sheet Cards</h3>
            <nui-sheet-group sheetsType="separate">
                <nui-sheet style="height: 150px">
                    <nui-card-group>
                        <nui-card> </nui-card>
                    </nui-card-group>
                </nui-sheet>
                <nui-sheet style="height: 150px">
                    <nui-card-group>
                        <nui-card> </nui-card>
                    </nui-card-group>
                </nui-sheet>
                <nui-sheet style="height: 150px">
                    <nui-card-group>
                        <nui-card> </nui-card>
                    </nui-card-group>
                </nui-sheet>
                <nui-sheet style="height: 150px">
                    <nui-card-group>
                        <nui-card> </nui-card>
                    </nui-card-group>
                </nui-sheet>
            </nui-sheet-group>
        </div>
    </div>
    <div>
        <h3>Complex Example</h3>
        <nui-sheet-group
            sheetsType="separate"
            direction="row"
            [isResizable]="true"
            resizeUnit="px"
            style="height: 500px"
            id="nui-visual-test-layout-separated-sheet-group"
        >
            <nui-sheet-group
                sheetsType="separate"
                direction="column"
                [isResizable]="true"
                resizeUnit="%"
            >
                <nui-sheet-group sheetsType="separate">
                    <nui-sheet>
                        <nui-card-group>
                            <nui-card> </nui-card>
                        </nui-card-group>
                    </nui-sheet>
                </nui-sheet-group>
                <nui-sheet-group
                    [isResizable]="true"
                    sheetsType="separate"
                    resizeUnit="%"
                >
                    <nui-sheet>
                        <nui-card-group>
                            <nui-card> </nui-card>
                        </nui-card-group>
                    </nui-sheet>
                    <nui-sheet>
                        <nui-card-group>
                            <nui-card> </nui-card>
                        </nui-card-group>
                    </nui-sheet>
                    <nui-sheet>
                        <nui-card-group>
                            <nui-card> </nui-card>
                        </nui-card-group>
                    </nui-sheet>
                </nui-sheet-group>
            </nui-sheet-group>
            <nui-sheet-group
                sheetsType="joined"
                direction="column"
                [isResizable]="true"
                resizeUnit="%"
                id="nui-visual-test-layout-joined-sheet-group"
            >
                <nui-sheet-group
                    sheetsType="joined"
                    direction="row"
                    [isResizable]="true"
                    resizeUnit="px"
                    style="height: 500px"
                >
                    <nui-sheet-group
                        sheetsType="joined"
                        direction="column"
                        [isResizable]="true"
                        resizeUnit="%"
                    >
                        <nui-sheet-group sheetsType="joined">
                            <nui-sheet>
                                <nui-card> </nui-card>
                            </nui-sheet>
                        </nui-sheet-group>
                        <nui-sheet-group
                            [isResizable]="true"
                            sheetsType="joined"
                            resizeUnit="%"
                        >
                            <nui-sheet>
                                <nui-card> </nui-card>
                            </nui-sheet>
                            <nui-sheet>
                                <nui-card> </nui-card>
                            </nui-sheet>
                            <nui-sheet>
                                <nui-card> </nui-card>
                            </nui-sheet>
                        </nui-sheet-group>
                    </nui-sheet-group>
                    <nui-sheet-group
                        sheetsType="joined"
                        direction="column"
                        [isResizable]="true"
                        resizeUnit="%"
                    >
                        <nui-sheet class="pt-2">
                            <nui-card> </nui-card>
                        </nui-sheet>
                        <nui-sheet class="pt-2">
                            <nui-card> </nui-card>
                        </nui-sheet>
                        <nui-sheet class="pt-2">
                            <nui-card> </nui-card>
                        </nui-sheet>
                    </nui-sheet-group>
                </nui-sheet-group>
            </nui-sheet-group>
        </nui-sheet-group>
    </div>
    <div>
        <h3>Fit Content</h3>
        <div style="height: 300px">
            <nui-sheet-group direction="row">
                <nui-sheet direction="column" [fitContent]="true">
                    <nui-card-group>
                        <nui-card style="min-width: 200px" direction="row">
                        </nui-card>
                        <nui-card style="min-width: 200px" direction="row">
                        </nui-card>
                    </nui-card-group>
                </nui-sheet>
                <nui-sheet direction="column">
                    <nui-card-group direction="column">
                        <nui-card style="min-height: 100px"> </nui-card>
                        <nui-card style="min-height: 100px"> </nui-card>
                        <nui-card style="min-height: 100px"> </nui-card>
                        <nui-card style="min-height: 100px"> </nui-card>
                        <nui-card style="min-height: 100px"> </nui-card>
                        <nui-card style="min-height: 100px"> </nui-card>
                    </nui-card-group>
                </nui-sheet>
            </nui-sheet-group>
        </div>
    </div>
</div>
`;export{u as default};
