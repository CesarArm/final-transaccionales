import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-transaccionales';
}
