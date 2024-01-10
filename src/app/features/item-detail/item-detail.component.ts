import {Component, inject, OnInit} from '@angular/core';
import {Item} from "../../core/model/Item";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ItemService} from "../../core/service/item/item.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit{
  item: Item = {description: "", name: "", price: 0, stockAmount: 0};
  // route: ActivatedRoute = inject(ActivatedRoute);
  // itemService: ItemService = inject(ItemService);

  constructor(private route: ActivatedRoute, private itemService: ItemService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const itemId = params['id'];
      this.loadItem(itemId);
    })
  }

  loadItem(id: string): void {
    this.itemService.getItem(id).subscribe((data) => {
      this.item = data;
    })
  }

}
