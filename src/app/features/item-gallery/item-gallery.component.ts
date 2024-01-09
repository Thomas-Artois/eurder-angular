import {Component, OnInit} from '@angular/core';
import {Item} from "../../core/model/Item";
import {ItemService} from "../../core/service/item.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-item-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-gallery.component.html',
  styleUrl: './item-gallery.component.css'
})
export class ItemGalleryComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(result => this.items = result);
  }

}