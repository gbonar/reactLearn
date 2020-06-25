export function GetValidationMessages(elem) {
  let errors = [];
  if (!elem.checkValidity()) {
    if (elem.validity.valueMissing) {
      errors.push("Wartość jest wymagana!");
    }
    if (elem.validity.tooShort) {
      errors.push("Wartość jest zbyt krótka!");
    }
    if (elem.validity.rangeUnderflow) {
      errors.push("Wartość jest zbyt mała!");
    }
  }
  return errors;
}