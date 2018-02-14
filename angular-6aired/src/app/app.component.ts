import { OnInit,Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular 5';
  total = {
    label: 'Total Due',
    amount: {currency: 'USD', value: '65.00'}
  }
  shippingOptions = [{
    id: 'delivery',
    label: 'Free Delivery',
    amount: {currency: 'USD', value: '0.00'},
    selected: true
  }]
  // items: PaymentDetails[]
  items = [
    {label: 'sub-total',
    amount: {currency: 'USD', value: '55.00'}},
    {label: 'tax', 
    amount: {currency: 'USD', value: '5.00'}}
  ]
  paymentMethodData: PaymentMethodData[] = [{
    supportedMethods: ['basic-card'],
    data: {
      supportedNetworks: ["visa", "mastercard"],
      supportedTypes: ["debit", "credit"]
    }
  }];
  details: PaymentDetails = {
    // id: '1',
    total: this.total,

    displayItems: this.items
  }

  ngOnInit(){
   const x = () =>new PaymentRequest(this.paymentMethodData,this.details)

   x();
  }
}
