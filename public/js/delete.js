function deleteEvent() {
    const slug = document.getElementById('slug').value;
    const name = document.getElementById('name').value;

    axios.delete(`/api/events/${slug}/delete`)
        .then((result) => {            
            alert(`Response in console.`);
            console.log(result.data);
        })
        .catch((err) => {
            console.error(err);
        });
}