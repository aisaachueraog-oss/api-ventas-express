
function procesarTag(tag) {
    console.log("Iniciando Rutina...");
    console.log("Obteniendo datos...");
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            const arma_js = data.posts;
            if (tag) {
                const filteredPosts = arma_js.filter(post => post.tags.includes(tag));
                filteredPosts.forEach(post => console.log(post.title));
            } else {
                console.log("Tag inexistente.");
            }
        });
}

procesarTag("fiction");
