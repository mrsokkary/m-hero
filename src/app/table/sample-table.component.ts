import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from './productservice';
import { Product } from './product';

@Component({
    selector: 'table-demo',
    templateUrl: 'sample-table.component.html',
    providers: [MessageService]
})
export class SampleTable implements OnInit{
    products!: Product[];

    selectedProduct!: Product;

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    onRowSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
    }

    onRowUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
    }
}