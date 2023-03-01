import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css']
})
export class CdComponent {
  panelOpenState = false;

  method(first: any, stepper: any) {
    first.completed = true;
    stepper.next();
  }
  public show1: boolean = false;
  public show: boolean = true;
  public button: any = 'Show';
  ngOnInit() { }

  toggle_NTB() {
    this.show1 = !this.show1;
  }

  constructor(private builder: FormBuilder) { }
  drop = new FormControl(null, Validators.required);
  drop1 = new FormControl(null, Validators.required);
  select = new FormControl('', Validators.required);
  form = this.builder.group({

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    pan: new FormControl('', [Validators.minLength(10)]),
    raroc: new FormControl('', Validators.required),


  })


  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }



  private snackBarDuration: number = 2000;
  private ratingArr = [];


  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  isMouseover = true;

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
  }

  removeClass() {
    if (this.isMouseover) {
      this.selectedValue = 0;
    }
  }
  toggle() {
    this.show = !this.show;
    // this.show_int = 1
  }
}
