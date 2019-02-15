
function create() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    axios.post('/api/events/create', {
            name,
            description
        })
        .then((result) => {
            alert(`Response in console.`);
            console.log(result.data);
        })
        .catch((err) => {
            console.error(err);
        });
}