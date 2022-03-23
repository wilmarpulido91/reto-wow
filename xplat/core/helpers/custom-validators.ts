import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ValidateNumbers(control: AbstractControl): any {
  const numberREGX = /^([0-9])*$/;

  if (!numberREGX.test(control.value)) {
    return { onlyNumbers: true };
  }
  return null;
}