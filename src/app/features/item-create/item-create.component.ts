import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from "../../core/pipes/name-filter.pipe";
import {NgForOf, NgIf} from "@angular/common";
import {FooterComponent} from "../../core/layout/footer/footer.component";
import {ItemService} from "../../core/service/item/item.service";
import {Item} from "../../core/model/Item";
import {Router} from "@angular/router";
import {ItemDto} from "../../core/model/ItemDto";

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

  errorMessage: string = '';

  constructor(private itemService: ItemService, private router: Router) {
  }

  createItem(): void {
    if (this.item.description.length > 255) {
      this.errorMessage = 'Description must be 255 characters or less';
      return;
    }

    if (this.item.price < 0 || this.item.stockAmount < 0) {
      this.errorMessage = 'Price and stock must be above 0';
    }

    const hardcodedAdminUsername = 'admin';
    const hardcodedAdminPassword = 'adminPassword';

    this.itemService.createItem(this.item, hardcodedAdminUsername, hardcodedAdminPassword).subscribe(
      (response: ItemDto) => {
        console.log('Item created successfully:', response);

        const newItemId = response.id;

        this.router.navigate(['/item-detail', newItemId]);
      },
      (error) => {
        console.error('Error creating item:', error);
        this.errorMessage = 'Error creating item';
        // You can handle error actions here (e.g., show an error message)
      }
    );
  }
}
