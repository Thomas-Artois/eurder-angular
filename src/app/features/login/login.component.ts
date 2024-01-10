import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Add logic to authenticate the user (compare with your backend database)
    // For simplicity, you can check hard-coded credentials for now
    if (this.email === 'maarten@gmail.com' && this.password === 'defaultPassword') {
      // Authentication successful
      console.log('Login successful');
    } else {
      // Authentication failed
      console.log('Login failed');
    }
  }
}
