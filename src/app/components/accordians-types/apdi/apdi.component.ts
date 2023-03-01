import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApdiDialogComponent } from '../../dialog-box/apdi-dialog/apdi-dialog.component';


@Component({
  selector: 'app-apdi',
  templateUrl: './apdi.component.html',
  styleUrls: ['./apdi.component.css']
})
export class ApdiComponent {
  panelOpenState = false;
  companyName = ['Facility Name', 'Amount (in Cr)', 'Door to Door Tenor', 
                  'Proposed Rate (ROI) %', 'Date', 'Benchmark/Reset Frequency', 
                  'Final RBP Rate', 'NIM', 'NIM with full PSL Cost', 'Book yield - Previous quater', 
                  'Incremental Yield', 'Product Class', 
                  'If they have a fair share of liability and justification where N is the response', 
                  'Consortium (Y/N)', 'Within assessed Bank Finance/ MPBF (Y/N/ Remarks)', 
                  'End use certificate (Available/Not available/ Remarks)', 'RAROC (in %)', 
                  'Justifications', 'Others (Remarks)'];
                  
constructor(public dialog: MatDialog){}
openDialog() {
  const dialogRef = this.dialog.open(ApdiDialogComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
