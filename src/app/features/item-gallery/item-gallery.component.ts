import {Component, OnInit} from '@angular/core';
import {Item} from "../../core/model/Item";
import {ItemService} from "../../core/service/item/item.service";
import {CommonModule} from "@angular/common";
import {NameFilterPipe} from "../../core/pipes/name-filter.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-item-gallery',
  standalone: true,
  imports: [CommonModule, NameFilterPipe, FormsModule],
  templateUrl: './item-gallery.component.html',
  styleUrl: './item-gallery.component.css'
})
export class ItemGalleryComponent implements OnInit {
  items: Item[] = [];
  searchText: string = "";

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      result => {
        this.items = result
        console.log(this.items)
      }
    );

  }

}
