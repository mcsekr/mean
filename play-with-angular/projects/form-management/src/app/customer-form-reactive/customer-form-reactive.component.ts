import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form-reactive',
  templateUrl: './customer-form-reactive.component.html',
  styleUrls: ['./customer-form-reactive.component.css']
})
export class CustomerFormReactiveComponent {


  customeForm!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customeForm = this.formBuilder.group({
      fName: ['Nag', [Validators.required, Validators.minLength(3)]],
      lName: ['N', [Validators.required]],
      emailGroup: this.formBuilder.group({
        email: ['nag@mail.com', [Validators.required, Validators.email]],
        confirmEmail: ['nag@mail.com', [Validators.required, Validators.email]]
      }, { validator: this.emailMatchValidator }),
      mobile: [''],
      notiType: ['email'],
      addressFormArray: this.formBuilder.array([])
    })


    // this.customeForm.valueChanges
    //   .subscribe(value => console.log(value))
    // this.customeForm.statusChanges
    //   .subscribe(status => console.log(status))


    // this.customeForm.get('fName')?.valueChanges
    //   .subscribe(value => console.log(value))
    // this.customeForm.get('fName')?.statusChanges
    //   .subscribe(status => console.log(status))

  }

  emailMatchValidator(emailGroup: FormGroup) {
    const email = emailGroup.get('email')?.value
    const confirmEmail = emailGroup.get('confirmEmail')?.value
    if (email !== confirmEmail) {
      return { emailMatch: true }
    }
    return null
  }

  handleNotiChange(notiType: string) {
    console.log(notiType)
    const mobileControl = this.customeForm.get('mobile') as FormControl
    if (notiType === 'sms') {
      mobileControl.setValidators([Validators.required, Validators.pattern(/\d{10}/)])
    } else {
      mobileControl.clearValidators()
    }
    mobileControl.updateValueAndValidity()

  }


  createAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      street: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', [Validators.required, Validators.minLength(3)]],
      zip: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  get addressFormArray() {
    return this.customeForm.get('addressFormArray') as FormArray;
  }


  handleNewAddress() {
    this.addressFormArray.push(this.createAddressFormGroup());
  }
  handleRemoveAddress(index: number) {
    this.addressFormArray.removeAt(index);
  }

  handleSubmit() {
    console.log(this.customeForm.value)
  }

}