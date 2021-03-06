import { Component, OnInit,Input } from '@angular/core';

import {ICustomer} from '../../shared/interfaces';

//import {CustomersComponent} from '../customers.component';
@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    private _customers: ICustomer[] = [];

    @Input() get customers(): ICustomer[] {
        return this._customers;
    }
    
    set customers(value: ICustomer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    filteredCustomers: any[] = [
       
    ];
    customersOrderTotal: number;
    currencyCode: string = 'INR';
    
    constructor() {}
    
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }
    ngOnInit() {

    }
}