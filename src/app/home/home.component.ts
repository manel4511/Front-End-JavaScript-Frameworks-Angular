
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/Promotion';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import {Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  dishErrMess : string;
  promotion: Promotion;
  leader :Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice :LeaderService
    ,@Inject('BaseURL') private baseURL) { }

  ngOnInit() {

    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish ,
      errmess=>this.dishErrMess=<any> errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader);
    
  }

}
