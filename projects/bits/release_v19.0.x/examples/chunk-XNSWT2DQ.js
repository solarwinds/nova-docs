import"./chunk-VBFW7A5V.js";var r=`<section class="drag-section">
    <nui-draggable
        [payload]="draggableObj"
        [dropTarget]="droppable"
        (dragStart)="onDragStart($event)"
        (dragEnd)="onDragEnd($event)"
        i18n
    >
        <div class="drag">drag me</div>
    </nui-draggable>
    <pre>{{ draggableObj | json }}</pre>

    <nui-draggable
        [payload]="draggableObjHandle"
        [dropTarget]="droppable"
        [dragHandle]="true"
        (dragStart)="onDragStart($event)"
        (dragEnd)="onDragEnd($event)"
        i18n
    >
        <div class="drag">drag me (handle)</div>
    </nui-draggable>
    <pre>{{ draggableObjHandle | json }}</pre>

    <nui-draggable
        [payload]="draggableObjPreview"
        [dragPreview]="dragPreview"
        [dropTarget]="droppable"
        (dragStart)="onDragStart($event)"
        (dragEnd)="onDragEnd($event)"
        i18n
    >
        <div class="drag drag-with-preview">drag me (preview)</div>
    </nui-draggable>
    <pre>{{ draggableObjPreview | json }}</pre>

    <nui-draggable
        *ngFor="let item of draggableList"
        [payload]="item"
        [dropTarget]="droppable"
        (dragStart)="onDragStart($event)"
        (dragEnd)="onDragEnd($event)"
        i18n
    >
        <div class="drag">drag me ({{ item }})</div>
    </nui-draggable>
</section>

<section class="drop-section">
    <nui-droppable
        #droppable
        (dropSuccess)="onDrop($event)"
        (dragOver)="onDragOver($event)"
        (dragEnter)="onDragEnter($event)"
        (dragLeave)="onDragLeave($event)"
        i18n
    >
        <div class="drop">drop here</div>
    </nui-droppable>
    <pre>{{ destObject | json }}</pre>
</section>

<ng-template #dragPreview>
    <pre>
         _,(_)._
    ___,(_______).
  ,'__.           \\    /\\_
 /,' /             \\  /  /
| | |              |,'  /
 \\\`.|                  /
  \`. :           :    /
    \`.            :.,'
      \`-.________,-'</pre
    >
</ng-template>
`;export{r as default};
