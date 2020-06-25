import validator from "validator";

export function ValidateData(data, rules) {
  let errors = {};
  Object.keys(data).forEach(field => {
    if (rules.hasOwnProperty(field)) {
      let fielderrors = [];
      let val = data[field];
      if (rules[field].true) {
        if (!val) {
          fielderrors.push("Pole musi być zaznaczone!");
        }
      } else {
        if (rules[field].required && validator.isEmpty(val)) {
          fielderrors.push("Wartość jest wymagana!");
        }
        if (!validator.isEmpty(data[field])) {
          if (rules[field].minlength
            && !validator.isLength(val, rules[field].minlength)) {
            fielderrors.push(`Proszę wpisać co najmniej ${rules[field].minlength}`
              + " znaków!");
          }
          if (rules[field].alpha && !validator.isAlpha(val)) {
            fielderrors.push("Można używać wyłącznie liter!");
          }
          if (rules[field].email && !validator.isEmail(val)) {
            fielderrors.push("Proszę wpisać poprawny adres e-mail!");
          }
          if (rules[field].equals
            && !validator.equals(val, data[rules[field].equals])) {
            fielderrors.push("Wartości nie są takie same!");
          }
        }
      }
      if (fielderrors.length > 0) {
        errors[field] = fielderrors;
      }
    }
  })
  return errors;
}