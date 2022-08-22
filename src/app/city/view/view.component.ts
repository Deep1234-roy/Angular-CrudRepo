import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city';
import { CityService } from '../city.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  city!: City;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public cityservice:CityService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cityId'];
    this.cityservice.find(this.id).subscribe((data:City) => {
      this.city = data;
    })
  }

}
