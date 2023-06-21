import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToasterService, VasService } from '../_service';

@Component({
  selector: 'app-helmet-detector',
  templateUrl: './helmet-detector.component.html',
  styleUrls: ['./helmet-detector.component.css']
})
export class HelmetDetectorComponent {
  uploadFile: any;
  WIDTH = 640;
  HEIGHT = 480;
  @ViewChild("video")
  public video!: ElementRef;
  @ViewChild("canvas")
  public canvas!: ElementRef;
  captures: string[] = [];
  error: any;
  isCaptured: boolean = false;
  formData: any = new FormData();
  violationData: any = [];
  listData: any;
  pageData = 1;
  limits = [{ key: '25', value: 25 }, { key: '50', value: 50 }, { key: '100', value: 100 }, { key: '250', value: 250 }, { key: '500', value: 500 }];
  limit: any = this.limits[0].value;
  viewImage: any;
  isCaptureStart: boolean = true;

  constructor( private common: VasService, private toaster: ToasterService) { }

  ngOnInit(): void { }
  
  async ngAfterViewInit() {
    await this.setupDevices();
    setInterval(() => {
      if(this.isCaptureStart) {
        this.capture();
      }
    }, 1000);
  }

  stopCapture(): void {
    this.isCaptureStart = !this.isCaptureStart;
  }

  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }

  capture() {
    this.drawImageToCanvas(this.video.nativeElement);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.setPhoto(this.captures.length-1);
    this.isCaptured = true;
  }

  removeCurrent() {
    this.isCaptured = false;
  }

  setPhoto(idx: number) {
    this.isCaptured = true;
    const image = new Image();
    image.src = this.captures[idx];
    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context: any = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      const dataURL = canvas.toDataURL('image/png');
      this.uploadFile = dataURL;
      this.drawImageToCanvas(image);
      canvas.toBlob((blob: any) => {
        if (this.formData.has('frame')) {
          this.formData.delete('frame');
        }
        this.formData.append('frame', blob, 'captured_image.png');
        this.onSubmit(); 
      });
    });
  }

  onSubmit(): void {
    this.common.uploadImageInVAS(this.formData).subscribe((res: any) => {
      if(res.status) {
        this.violationData.push(res);
      }
    })
  }
  
  drawImageToCanvas(image: any) {
    this.canvas.nativeElement.getContext("2d").drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }

  generateQr(data: any): void {
    this.viewImage = `http://192.168.130.65:8002/${data}`;
  }

  refresh(): void {
    this.ngOnInit();
  }

}
