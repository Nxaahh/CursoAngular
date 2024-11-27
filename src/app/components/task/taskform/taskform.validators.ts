import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

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