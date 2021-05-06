import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model: any = {};
  submitted: boolean = false;
  passwordMismatch: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model)
  }
}
