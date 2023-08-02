import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  customerModel = {
    fName: '',
    lName: ''
  }

  handleForm(customerForm: NgForm) {
    console.log(customerForm.value);
    console.log(this.customerModel);
  }

  loadCustomerData() {
    this.customerModel = {
      fName: "Nag",
      lName: "N",
    }
  }

}
