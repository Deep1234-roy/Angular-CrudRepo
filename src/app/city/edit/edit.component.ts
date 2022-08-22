import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  city!: City;
  form!: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router, public cityservice:CityService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['cityId'];
    this.cityservice.find(this.id).subscribe((data:City) =>{
      this.city = data;
    })
  
  this.form = new FormGroup({
    title: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)
  })
}

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
  this.cityservice.update(this.id,this.form.value).subscribe(res=>{
    console.log("Post Updated Successfully!!");
    this.router.navigateByUrl('city/index');
  })
}

}
