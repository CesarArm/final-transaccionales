// src/app/services/salary-calculation.service.ts
import { Injectable } from '@angular/core';
import { SalaryCalculationRequest } from '../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {

  calculateSalary(data: SalaryCalculationRequest): SalaryCalculationResponse {

    const regularSalary = data.hourlyWage * data.hoursWorked;
    const overtimeSalary = data.hourlyWage * 1.5 * data.overtimeHours;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.1;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary: regularSalary,
      overtimeSalary: overtimeSalary,
      deductions: deductions,
      netSalary: netSalary
    };
  }
}
