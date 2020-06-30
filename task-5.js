let country = prompt("Выберите страну");
country = country.toLowerCase();

let resultы;

switch (country) {
  case null:
    break;

  case "китай":
    result = "100";
    break;

  case "чили":
    result = 250;
    break;

  case "австралия":
    result = 170;
    break;

  case "индия":
    result = 80;
    break;

  case "ямайка":
    result = 120;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

console.log(`Доставка в ${country} будет стоить ${result} кредитов`);
