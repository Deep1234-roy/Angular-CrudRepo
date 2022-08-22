import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CityService } from '../city.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(public cityservice:CityService,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title: new FormControl('',Validators.required),
      body: new FormControl('',Validators.required)
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.cityservice.create(this.form.value).subscribe(res => {
      console.log("Post Created Successfully!!");
      this.router.navigateByUrl("city/index");
    })
  }

}
