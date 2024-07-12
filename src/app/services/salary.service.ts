// src/app/services/salary-calculation.service.ts
import { Injectable } from '@angular/core';
import { SalaryCalculationRequest } from '../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {

  calculateSalary(data: SalaryCalculationRequest): SalaryCalculationResponse {
    const regularHours = Math.min(data.hoursWorked, 40);
    const overtimeHours = data.hoursWorked > 40 ? data.hoursWorked - 40 : 0;

    const regularSalary = data.hourlyWage * regularHours;
    const overtimeSalary = data.hourlyWage * 1.5 * overtimeHours;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.1; // 10% deductions
    const netSalary = totalSalary - deductions;

    return {
      regularSalary: regularSalary,
      overtimeSalary: overtimeSalary,
      deductions: deductions,
      netSalary: netSalary
    };
  }
}
