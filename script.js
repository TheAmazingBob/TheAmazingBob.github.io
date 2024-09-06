document.getElementById('fetch-btn').addEventListener('click', () => {
    const output = document.getElementById('output');

    // Use a proxy to fetch data from an external API
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(data => {
            output.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            output.textContent = 'Error: ' + error;
        });
});

