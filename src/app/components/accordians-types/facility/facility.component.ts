import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../../dialog-component/dialog-component.component';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent {
  panelOpenState = false;

  products: string[] = [
    'Loan',
    'OD/CC',
    'DLOD',
    'Inv.Funding LAS/LAP/LRD/HAM',
  ];

  facility: string[] = [
    'Loan',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
  ];
  parmeet: string[] = [
    'Non-PSL',
    'Direct Agri/Agri/Farm Credit',
    'Small Credit',
    'Micro',
  ];
  sandhu: string[] = [
    'T Bills 14D',
    'T Bills 1M',
    'T Bills 2M',
  ];

  months = new FormControl('', [Validators.required]);
  dtd = new FormControl('', [Validators.required]);
  payment = new FormControl('', [Validators.required]);


  prod = new FormControl('', [Validators.required]);
  faci = new FormControl('', [Validators.required]);
  pa = new FormControl('', [Validators.required]);
  sa = new FormControl('', [Validators.required]);
  amount = new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]+(.)+[0-9]$")]));


  profee = new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]+(.)+[0-9]$")]));
  ibfee = new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]+(.)+[0-9]$")]));


  tenorGroup = this.builder.group({
    months: ['', Validators.required],
    dtd: ['', Validators.required],
    payment: ['', Validators.required],
  });

  facilityGroup = this.builder.group({
    prod: ['', Validators.required],
    faci: ['', Validators.required],
    pa: ['', Validators.required],
    sa: ['', Validators.required],
    amount: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+(.)+[0-9]+[0-9]$")])],
  });


  feeGroup = this.builder.group({
    profee: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+(.)+[0-9]+[0-9]$")])],
    ibfee: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+(.)+[0-9]+[0-9]$")])],
  });


  constructor(private builder: FormBuilder, private dialog: MatDialog) { }

  getMonthsErrorMessage() {
    (this.months.hasError('required'));
    return 'You must select a value';
  }

  getdtdErrorMessage() {
    (this.dtd.hasError('required'));
    return 'You must select a value';
  }

  getpaymentErrorMessage() {
    (this.payment.hasError('required'));
    return 'You must select a value';
  }

  getProdError() {
    this.prod.hasError('required');
    return 'Mandatory Field';
  }

  getFaciError() {
    this.faci.hasError('required');
    return 'Mandatory Field';
  }

  getPaError() {
    this.pa.hasError('required');
    return 'Mandatory Field';
  }

  getSaError() {
    this.sa.hasError('required');
    return 'Mandatory Field';
  }

  getAmountError() {
    this.amount.hasError('required');
    this.amount.hasError('pattern');
    return 'Invalid Field';
  }

  getProFeeError() {
    this.profee.hasError('required');
    this.profee.hasError('pattern')
    return 'Invalid Field'
  }

  getIbFeeError() {
    this.ibfee.hasError('required');
    this.ibfee.hasError('pattern')
    return 'Invalid Field'
  }


  openDialog() {
    this.dialog.open(DialogComponentComponent, { width: '800px', height: '600px' });
  }
}
