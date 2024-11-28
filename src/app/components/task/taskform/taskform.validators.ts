//login.validator.ts
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

//Ejemplo estructura función
export function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let valorCampo = control.value
    let expirationDate  = new Date (valorCampo)

    let today = new Date()
    if(expirationDate>=today){
      return null
    }
    return{invalidDate : true}

    const isValid = true /* condición para validar el valor */;
    return isValid ? null : { customErrorKey: true }; // Error si no es válido
  };
}



