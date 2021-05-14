import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Report } from 'src/app/models/report.model';

@Component({
  selector: 'app-print-reports',
  templateUrl: './print-reports.component.html',
  styleUrls: ['./print-reports.component.css']
})
export class PrintReportsComponent implements OnInit {

  
  constructor(public sanitizer: DomSanitizer,) { }
  headers: string[] = [' العميل', ' المنتج', 'صورة المنتج', 'الكمية', 'السعر', 'الوقت والتاريخ', '']
  @Input() orders: any[] = []
  Order: Report = new Report()
  ngOnInit(): void {
    this.sumSalary()
  }
  
  prices: number = 0
  counts: number = 0
  sumSalary() {
    this.orders.forEach(o => {
      this.counts = 0
      this.prices = 0
      this.prices += o.price * o.Count
      //this.counts += o.Count
    })
  }
 
 
}
