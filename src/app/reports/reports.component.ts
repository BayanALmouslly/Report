import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Report } from '../models/report.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer,) { }
  headers: string[] = [' العميل', ' المنتج', 'صورة المنتج', 'الكمية', 'السعر', 'الوقت والتاريخ', '']
  orders: Report[] = []
  Order: Report = new Report()
  ngOnInit(): void {
  }
  addOrder() {
    console.log(this.Order)
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
      this.prices += o.price * o.Count
      //this.counts += o.Count
    })
  }
  imagePath: any
  onFileChanged(event: any, order: Report) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      order.ProducerImage = reader.result;
    }
  }
  showAfterPrint:boolean=false
  print() {
   this.showAfterPrint=true
   var divToPrint = document.getElementById('componentID');
  var newWin = window.open('', 'Print-Window');
  newWin?.document.open();
  newWin?.document.write('<html><style>.container{direction: rtl; text-align: center;padding-top: 20px;}</style><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" media="print"/><body onload="window.print()">' + divToPrint?.innerHTML + '</body></html>');
  newWin?.document.close();
  setTimeout(function() {
    newWin?.close();
    location.reload();

  }, 10);

  }
 
}
