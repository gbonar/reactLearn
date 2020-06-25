export function ValidateForm(data) {
  let errors = [];
  if (!data.email.endsWith("@mojsajt.pl")) {
    errors.push("Tylko dla użytkowników mojsajt.pl!");
  }
  if (!data.email.toLowerCase().startsWith(data.name.toLowerCase())) {
    errors.push("Adres e-mail musi zaczynać się od imienia!");
  }
  if (data.name.toLowerCase() === "adrian") {
    errors.push("Spadaj Adrianie!")
  }
  return errors;
}