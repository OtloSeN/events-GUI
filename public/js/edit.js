

function editEvent() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const slug = document.getElementById('slug').value;

    axios.put(`/api/events/${slug}/edit`, {
            name: name,
            description: description
        })
        .then((result) => {
            alert(`Response in console.`);
            console.log(result.data);
        })
        .catch((err) => {
            console.log('на фронте ошибка!!!!!');
            console.error(err);
        });
}