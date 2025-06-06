import"./chunk-XR34LRGE.js";var i=`<div class="nui">
    <div id="nui-demo-services-edge-detection">
        <h1>Edge detection Service</h1>
        <div>
            <form class="row">
                <div class="col-md-6">
                    <h2 style="margin-bottom: 30px">
                        Set the size of the element to be placed
                    </h2>
                    <ul>
                        <li>
                            <nui-textbox-number
                                caption="Width in pixels"
                                name="element-name"
                                [(value)]="deposit.width"
                                ngDefaultControl
                            >
                            </nui-textbox-number>
                        </li>
                        <li>
                            <nui-textbox-number
                                caption="Height in pixels"
                                name="element-height"
                                [(value)]="deposit.height"
                                ngDefaultControl
                            >
                            </nui-textbox-number>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h2>
                        Set the size of the component where element is to be
                        placed
                    </h2>
                    <p>
                        <i>Minimum width is 300px and minimum height is 50px</i>
                    </p>
                    <ul>
                        <li>
                            <nui-textbox-number
                                caption="Width in pixels"
                                name="width"
                                [(value)]="parentComponent.width"
                                [disabled]="!addEdgeDefinerClass"
                                ngDefaultControl
                            >
                            </nui-textbox-number>
                        </li>
                        <li>
                            <nui-textbox-number
                                caption="Height in pixels"
                                name="height"
                                [(value)]="parentComponent.height"
                                [disabled]="!addEdgeDefinerClass"
                                ngDefaultControl
                            >
                            </nui-textbox-number>
                        </li>
                    </ul>
                </div>
            </form>
            <button nui-button type="button" (click)="update()">
                Calculate place
            </button>
            <br />
            <h2>Results</h2>
            <p>
                <i
                    >Hover the properties for understanding that exactly what
                    place-availability does it express</i
                >
            </p>
            <div class="col-md-12">
                <h3>
                    <strong *ngIf="!addEdgeDefinerClass"
                        >Placement within window</strong
                    >
                    <strong *ngIf="addEdgeDefinerClass"
                        >Placement within specified component</strong
                    >
                </h3>
                <div class="results">
                    <div>
                        <h3>Can be placed</h3>
                        <ul>
                            <li
                                (mouseover)="showPlaced.top = true"
                                (mouseleave)="showPlaced.top = false"
                            >
                                <b>Top: </b>
                                <span
                                    class="label label-success"
                                    [ngClass]="{
                                        'label-danger': !canBe?.placed.top
                                    }"
                                >
                                    {{ canBe?.placed.top }}
                                </span>
                            </li>
                            <li
                                (mouseover)="showPlaced.right = true"
                                (mouseleave)="showPlaced.right = false"
                            >
                                <b>Right: </b>
                                <span
                                    class="label label-success"
                                    [ngClass]="{
                                        'label-danger': !canBe?.placed.right
                                    }"
                                >
                                    {{ canBe?.placed.right }}
                                </span>
                            </li>
                            <li
                                (mouseover)="showPlaced.bottom = true"
                                (mouseleave)="showPlaced.bottom = false"
                            >
                                <b>Bottom: </b>
                                <span
                                    class="label label-success"
                                    [ngClass]="{
                                        'label-danger': !canBe?.placed.bottom
                                    }"
                                >
                                    {{ canBe?.placed.bottom }}
                                </span>
                            </li>
                            <li
                                (mouseover)="showPlaced.left = true"
                                (mouseleave)="showPlaced.left = false"
                            >
                                <b>Left: </b>
                                <span
                                    class="label label-success"
                                    [ngClass]="{
                                        'label-danger': !canBe?.placed.left
                                    }"
                                    (mouseover)="showPlaced.left = true"
                                    (mouseleave)="showPlaced.left = false"
                                >
                                    {{ canBe?.placed.left }}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Can be aligned</h3>
                        <ul>
                            <li
                                (mouseover)="showAligned.top = true"
                                (mouseleave)="showAligned.top = false"
                            >
                                <b>Top: </b>
                                <span
                                    class="label label-success"
                                    [ngClass]="{
                                        'label-danger': !canBe?.aligned.top
                                    }"
                                >
                                    {{ canBe?.aligned.top }}
                                </span>
                            </li>
                            <li
                                (mouseover)="showAligned.right = true"
                                (mouseleave)="showAligned.right = false"
                            >
                                <b>Right: </b>
                                <span
                                    class="label label-success"
                                    [ngClass]="{
                                        'label-danger': !canBe?.aligned.right
                                    }"
                                >
                                    {{ canBe?.aligned.right }}
                                </span>
                            </li>
                            <li
                                (mouseover)="showAligned.bottom = true"
                                (mouseleave)="showAligned.bottom = false"
                            >
                                <b>Bottom: </b>
                                <span
                                    class="label label-success"
                                    [ngClass]="{
                                        'label-danger': !canBe?.aligned.bottom
                                    }"
                                >
                                    {{ canBe?.aligned.bottom }}
                                </span>
                            </li>
                            <li
                                (mouseover)="showAligned.left = true"
                                (mouseleave)="showAligned.left = false"
                            >
                                <b>Left: </b>
                                <span
                                    class="label label-success"
                                    [ngClass]="{
                                        'label-danger': !canBe?.aligned.left
                                    }"
                                >
                                    {{ canBe?.aligned.left }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <h3>By default edge definer element(container) is window</h3>
                <nui-checkbox
                    name="parent-class"
                    [value]="addEdgeDefinerClass"
                    (valueChange)="switchCheckbox()"
                    ngDefaultControl
                >
                    Add nui-edge-definer class to parent component
                </nui-checkbox>
            </div>
            <br />
            <div
                #parent
                class="parent-component"
                [ngStyle]="{
                    width: parentComponent.width + 'px',
                    height: parentComponent.height + 'px'
                }"
            >
                <div class="base-point">
                    <button nui-button type="button" class="base-point-element">
                        Basepoint of the place investigation
                    </button>
                    <div
                        class="deposit to-be-placed top"
                        [ngStyle]="{
                            height: deposit.height + 'px',
                            display: showPlaced.top ? 'flex' : 'none'
                        }"
                    >
                        <div class="arrow arrow-up"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="deposit to-be-placed left"
                        [ngStyle]="{
                            width: deposit.width + 'px',
                            display: showPlaced.left ? 'flex' : 'none'
                        }"
                    >
                        <div class="arrow arrow-left"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="deposit to-be-placed right"
                        [ngStyle]="{
                            width: deposit.width + 'px',
                            display: showPlaced.right ? 'flex' : 'none'
                        }"
                    >
                        <div class="arrow arrow-right"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="deposit to-be-placed bottom"
                        [ngStyle]="{
                            height: deposit.height + 'px',
                            display: showPlaced.bottom ? 'flex' : 'none'
                        }"
                    >
                        <div class="arrow arrow-down"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="deposit to-be-aligned top"
                        [ngStyle]="{
                            height: deposit.height + 'px',
                            display: showAligned.top ? 'flex' : 'none'
                        }"
                    >
                        <div class="arrow arrow-down"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="deposit to-be-aligned left"
                        [ngStyle]="{
                            width: deposit.width + 'px',
                            display: showAligned.left ? 'flex' : 'none'
                        }"
                    >
                        <div class="arrow arrow-right"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="deposit to-be-aligned right"
                        [ngStyle]="{
                            width: deposit.width + 'px',
                            display: showAligned.right ? 'flex' : 'none'
                        }"
                    >
                        <div class="arrow arrow-left"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="deposit to-be-aligned bottom"
                        [ngStyle]="{
                            height: deposit.height + 'px',
                            display: showAligned.bottom ? 'flex' : 'none'
                        }"
                    >
                        <div class="arrow arrow-up"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="deposit-reference"
                        [ngStyle]="{
                            width: deposit.width + 'px',
                            height: deposit.height + 'px'
                        }"
                        #placementElement
                    ></div>
                </div>
            </div>
        </div>
        <div style="display: inline-block"></div>
    </div>
</div>
`;export{i as default};
