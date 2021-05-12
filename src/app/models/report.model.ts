import { Data } from '@angular/router'

export class Report {
    constructor() { }
    ClientName: string = ""
    ProducerName: string = ""
    Count: number = 0
    price: number = 0
    date:Data=new Date()
}
