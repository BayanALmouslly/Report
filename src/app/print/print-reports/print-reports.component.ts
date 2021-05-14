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
  headers: string[] = [ ' المنتج', 'صورة المنتج', 'الكمية', 'السعر','الإجمالي',  '']
  @Input() orders: any[] = []
  Order: Report = new Report()
  @Input() ClientName:any
  @Input() date: any 
  ngOnInit(): void {
    this.sumSalary()
  }
  
  prices: number = 0
  counts: number = 0
  sumSalary() {
    this.orders.forEach(o => {
      this.counts = 0
      this.prices = 0
      this.prices += o.price 
      this.counts += o.Count
    })
  }
 
 
}
