let input;
let total = 0;

do {
    input = prompt('введите число');
    
        if (input === null) {
        break;
         }

    input = Number(input);
    total += input;
} while (true);


console.log(`Oбщая сумма ${total}`);
