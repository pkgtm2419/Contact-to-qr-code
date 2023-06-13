import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ToasterService {

  constructor(private toastr: ToastrService) { }

  success(title: string | undefined, msg: string | undefined): void {
    this.toastr.success(title, msg);
  }

  warning(title: string | undefined, msg: string | undefined): void {
    this.toastr.warning(title, msg);
  }

  error(title: string | undefined, msg: string | undefined): void {
    this.toastr.error(title, msg);
  }

  info(title: string | undefined, msg: string | undefined): void {
    this.toastr.info(title, msg);
  }
}
