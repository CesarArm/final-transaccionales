// register-employee.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryCalculationRequest } from '../../models/salary-calculation-request.model';
import { SalaryCalculationService } from '../../services/salary.service';

@Component({
  selector: 'app-register-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private salaryService: SalaryCalculationService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      hourlyWage: ['', [Validators.required, Validators.min(0.01)]],
      hoursWorked: ['', [Validators.required, Validators.min(0)]],
      overtimeHours: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const salaryData: SalaryCalculationRequest = this.employeeForm.value;
      const salaryResult = this.salaryService.calculateSalary(salaryData);
      console.log(salaryResult);
      alert(`Salario neto: ${salaryResult.netSalary}`);
    } else {
      alert('Todos los campos son requeridos y deben ser números positivos.');
    }
  }
}
