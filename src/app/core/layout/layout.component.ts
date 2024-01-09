import { Component } from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
