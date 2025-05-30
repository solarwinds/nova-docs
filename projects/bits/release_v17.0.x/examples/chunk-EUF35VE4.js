import"./chunk-XR34LRGE.js";var t=`<div class="container">
    <h3>Default Image View</h3>
    <div>
        <nui-image image="no-data-to-show"> </nui-image>
    </div>
    <hr />
    <h3>Image 30% custom size</h3>
    <div>
        <nui-image image="no-data-to-show" width="30%"> </nui-image>
    </div>
    <h3>Image 300px custom size</h3>
    <div>
        <nui-image id="image" image="no-data-to-show" width="300px">
        </nui-image>
    </div>
    <hr />

    <h3>Image Custom Alignment</h3>
    <div id="nui-demo-image-custom-alignment-container__left">
        <p>
            <nui-image id="image-float" image="no-data-to-show" float="left">
            </nui-image>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            exercitationem natus non? Amet architecto, asperiores dolor eligendi
            eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem
            rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Aliquam exercitationem natus non? Amet architecto,
            asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio
            perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Aliquam exercitationem natus
            non? Amet architecto, asperiores dolor eligendi eum fugit illum
            ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Aliquam exercitationem natus non? Amet architecto, asperiores
            dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis
            quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aliquam exercitationem natus non? Amet
            architecto, asperiores dolor eligendi eum fugit illum ipsum magni,
            nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            exercitationem natus non? Amet architecto, asperiores dolor eligendi
            eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem
            rem, sit voluptatem.
        </p>
    </div>
    <hr />

    <div id="nui-demo-image-custom-alignment-container__right">
        <p>
            <nui-image id="image-float" image="no-data-to-show" float="right">
            </nui-image>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            exercitationem natus non? Amet architecto, asperiores dolor eligendi
            eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem
            rem, sit voluptatem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Aliquam exercitationem natus non? Amet architecto,
            asperiores dolor eligendi eum fugit illum ipsum magni, nemo optio
            perspiciatis quaerat quidem rem, sit voluptatem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Aliquam exercitationem natus
            non? Amet architecto, asperiores dolor eligendi eum fugit illum
            ipsum magni, nemo optio perspiciatis quaerat quidem rem, sit
            voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Aliquam exercitationem natus non? Amet architecto, asperiores
            dolor eligendi eum fugit illum ipsum magni, nemo optio perspiciatis
            quaerat quidem rem, sit voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aliquam exercitationem natus non? Amet
            architecto, asperiores dolor eligendi eum fugit illum ipsum magni,
            nemo optio perspiciatis quaerat quidem rem, sit voluptatem. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            exercitationem natus non? Amet architecto, asperiores dolor eligendi
            eum fugit illum ipsum magni, nemo optio perspiciatis quaerat quidem
            rem, sit voluptatem.
        </p>
    </div>
    <hr />

    <h3>Available images</h3>
    <div>
        <div class="nui-clearfix row align-items-baseline">
            <div class="mb-3 col-md-3 col-6" *ngFor="let image of images">
                <figure class="d-flex flex-column align-items-center">
                    <nui-image
                        [image]="image.name"
                        width="200px"
                        margin="centered"
                    >
                    </nui-image>
                    <figcaption class="mt-2">{{ image.name }}</figcaption>
                </figure>
            </div>
        </div>
    </div>
    <hr />
</div>
`;export{t as default};
