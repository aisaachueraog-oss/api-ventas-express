function fetchQuotes() {
    console.log("Iniciando Rutina...");
    console.log("Obtener datos...");

    return fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            const quotes = data.quotes;
                const filteredQuotes = quotes.filter(quotes => quotes.author === "Muhammad Ali");
                const result = {
                    quotes: filteredQuotes,
                    total : filteredQuotes.length
                };
                console.log(result);
                return result;
            })
            .catch(error => {
                ("Error sl obtener los quotes;" , error);
            })}
            fetchQuotes("Muhammad Ali")




        