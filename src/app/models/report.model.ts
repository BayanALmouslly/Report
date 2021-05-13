import { Data } from '@angular/router'

export class Report {
    constructor() { }
    ClientName: string = ""
    ProducerName: string = ""
    ProducerImage:any
    Count: number = 0
    price: number = 0
    date:Data=new Date()

}
