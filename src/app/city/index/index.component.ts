import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cities : City[] = [];

  constructor(public cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getAll().subscribe((data : City[])=>{
      this.cities = data;
      console.log(this.cities);
    })
  }

  deletePost(id:number){
    this.cityService.delete(id).subscribe(res => {
         this.cities = this.cities.filter(item => item.id !== id);
         console.log('City deleted successfully!');
    })
  }

}
