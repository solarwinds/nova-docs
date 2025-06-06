import"./chunk-XR34LRGE.js";var e=`<div class="row">
    <div class="col-6">
        <div
            class="drag-drop-item"
            id="nui-demo-src-object"
            nuiDraggable
            [payload]="draggableObj"
            adornerDragClass="demo-drag-class"
            (dragStart)="onDragStart($event)"
            (dragEnd)="onDragEnd($event)"
            i18n
        >
            drag me (object)
        </div>
        <pre>{{ draggableObj | json }}</pre>
    </div>
    <div class="col-6">
        <div
            class="drag-drop-item"
            id="nui-demo-dest-object"
            nuiDroppable
            dropIndicatorClass="demo-drop-indicator-class"
            dragOverClass="demo-drag-over-class"
            invalidDragOverClass="demo-invalid-drag-over-class"
            [dropValidator]="isObjectValidator"
            (dropSuccess)="onDropObject($event)"
            (dragOver)="onDragOver($event)"
            (dragEnter)="onDragEnter($event)"
            (dragLeave)="onDragLeave($event)"
            i18n
        >
            drop here - object
        </div>
        <pre>{{ destObject | json }}</pre>
    </div>
</div>
<div class="row">
    <div class="col-6">
        <div
            class="drag-drop-item"
            nuiDraggable
            [payload]="draggableString"
            adornerDragClass="demo-drag-class"
            (dragStart)="onDragStart($event)"
            (dragEnd)="onDragEnd($event)"
            i18n
        >
            drag me (string)
        </div>
        <pre>{{ draggableString }}</pre>
    </div>

    <div class="col-6">
        <div
            class="drag-drop-item"
            nuiDroppable
            [dropValidator]="isStringValidator"
            dropIndicatorClass="demo-drop-indicator-class"
            dragOverClass="demo-drag-over-class"
            invalidDragOverClass="demo-invalid-drag-over-class"
            (dropSuccess)="onDropString($event)"
            (dragOver)="onDragOver($event)"
            (dragEnter)="onDragEnter($event)"
            (dragLeave)="onDragLeave($event)"
            i18n
        >
            drop here - string
        </div>
        <pre>{{ destString }}</pre>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div
            class="drag-drop-item"
            nuiDraggable
            [payload]="draggableExcel"
            (dragStart)="onDragStart($event)"
            (dragEnd)="onDragEnd($event)"
            i18n
        >
            drag me to Excel (htmlTable)
        </div>
        <pre>{{ draggableExcel }}</pre>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div
            class="drag-drop-item"
            nuiDroppable
            dropIndicatorClass="demo-drop-indicator-class"
            dragOverClass="demo-drag-over-class"
            invalidDragOverClass="demo-invalid-drag-over-class"
            (dragOver)="onDragOver($event)"
            (dragEnter)="onDragEnter($event)"
            (dragLeave)="onDragLeave($event)"
            (dropSuccess)="onDropAnything($event)"
            i18n
        >
            drop anything
        </div>
        <pre>{{ destAnything | json }}</pre>
    </div>
</div>
`;export{e as default};
