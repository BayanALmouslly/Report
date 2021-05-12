import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Report } from '../models/report.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer,) { }
  headers: string[] = [' العميل', ' المنتج', 'الكمية', 'السعر', 'التاريخ', '']
  orders: Report[] = []
  Order: Report = new Report()
  ngOnInit(): void {
  }
  addOrder() {
    this.orders.push(this.Order)
    this.Order = new Report()
    this.sumSalary()
  }
  deleteOrder(order: any) {
    this.orders = this.orders.filter(o => o != order)
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
