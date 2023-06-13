import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService, AppService } from 'src/app/_service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  contactData: any;
  viewContactData: any;

  constructor(private toster: ToasterService, private route: ActivatedRoute, private service: AppService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getData(this.id);
  }

  getData(match: number): void {
    this.service.getContactDetails(match).subscribe((res: any) => {
      if(res.status) {
        this.viewData(res.data)
        this.toster.success(res.message, "Success");
      } else {
        this.toster.error(res.message, "Error");
      }
    }),
    (error: any) => {
      this.toster.error(`Technical issue ${error}`, "Error");
    };
  }

  viewData(data: any): void {
    this.viewContactData = data;
    var k: any = [];
    var vKey: any = Object.keys(data[0]);
    vKey.forEach((i: any) => {
      this.viewContactData.forEach((j: any) => {
        k.push({key:i,value:j[i]})
      });
    });
    this.contactData = k;
  }

  refresh(): void {
    this.ngOnInit();
  }

}
