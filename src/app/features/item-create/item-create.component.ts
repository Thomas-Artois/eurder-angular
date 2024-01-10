import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from "../../core/pipes/name-filter.pipe";
import {NgForOf, NgIf} from "@angular/common";
import {FooterComponent} from "../../core/layout/footer/footer.component";
import {ItemService} from "../../core/service/item/item.service";
import {Item} from "../../core/model/Item";

@Component({
  selector: 'app-item-create',
  standalone: true,
  imports: [
    FormsModule,
    NameFilterPipe,
    NgForOf,
    NgIf,
    FooterComponent
  ],
  templateUrl: './item-create.component.html',
  styleUrl: './item-create.component.css'
})
export class ItemCreateComponent {
  item: Item = {
    name: '',
    description: '',
    price: 0,
    stockAmount: 0
  };

  constructor(private itemService: ItemService) {
  }

  createItem(): void {
    const hardcodedAdminUsername = 'admin';
    const hardcodedAdminPassword = 'adminPassword';
    console.log('Item data to be sent:', this.item);
    this.itemService.createItem(this.item, hardcodedAdminUsername, hardcodedAdminPassword).subscribe(
      (response) => {
        console.log('Item created successfully:', response);
        // You can handle success actions here (e.g., redirect, show a message)
      },
      (error) => {
        console.error('Error creating item:', error);
        // You can handle error actions here (e.g., show an error message)
      }
    );
  }
}
