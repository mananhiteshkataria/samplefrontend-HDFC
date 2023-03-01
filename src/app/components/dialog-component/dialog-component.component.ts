import { Component } from '@angular/core';

export interface hdfc {
  no: number;
  month: string;
  p: string;
}

const hdfc_DATA: hdfc[] = [
  { no: 1, month: 'Jan 2023', p: '' },
  { no: 2, month: 'Feb 2023', p: '' },
  { no: 3, month: 'Mar 2023', p: '' }
];

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  displayedColumns: string[] = ['no', 'month', 'principal'];
  dataSource = hdfc_DATA;
}
