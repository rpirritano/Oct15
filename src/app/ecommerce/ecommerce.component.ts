import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "../ecommerce/components/products/products.component";
import {ShoppingCartComponent} from "../ecommerce/components/shopping-cart/shopping-cart.component";
import {OrdersComponent} from "../ecommerce/components/orders/orders.component";

@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
    collapsed = true;
    orderFinished = false;

    @ViewChild('productsC')
    productsC: ProductsComponent;

    @ViewChild('shoppingCartC')
    shoppingCartC: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;

    constructor() {
    }

    ngOnInit() {
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }

    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    }
}
