let credits = 23580;
        let pricePerDroir = 3000;
        let totalPrice;
        let result;
 
        let count = prompt("Введите число");
        if(count === null) { 
            console.log("Отменено пользователем!");
        } else { 
            totalPrice = pricePerDroir * count;
        }
 
        if(!result) {
            // Проверяет сможет ли пользователь оплатить заказ:
            if((credits - totalPrice) <= 0) {  
                // если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
                window.console.log("Недостаточно средств на счету!.");
            } else {
                // в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение.
                credits = credits - totalPrice;
                window.console.log(`Вы купили ${count} дроида(ов), на счету осталось ${credits}`);
            }
        } else {
            window.console.log(result);
        }
        
   