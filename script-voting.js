// Константы страницы голосования
let req = new XMLHttpRequest();


// кнопки голосования
// Попугай
voteParrot.onclick = () => {
    req.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/parrots');
    req.send()

    // 4. Этот код сработает после того, как мы получим ответ сервера
    req.onload = function() {
        if (req.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert(`Ошибка ${req.status}: ${req.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
            alert(`Готово, Ваш голос за Попугаев учтен`); // response -- это ответ сервера
        }
    };
}

// Кот
voteCat.onclick = () => {
    req.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/cats');
    req.send()

    // 4. Этот код сработает после того, как мы получим ответ сервера
    req.onload = function() {
        if (req.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert(`Ошибка ${req.status}: ${req.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
            alert(`Готово, Ваш голос за Кошек учтен`); // response -- это ответ сервера
        }
    };
}

// Пес
voteDog.onclick = () => {
    req.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/dogs');
    req.send()

    // 4. Этот код сработает после того, как мы получим ответ сервера
    req.onload = function() {
        if (req.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert(`Ошибка ${req.status}: ${req.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
            alert(`Готово, Ваш голос за псов учтен`); // response -- это ответ сервера
        }
    };
}