const findMyLocation = () => {

    const status = document.getElementById('status');
    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
             status.textContent = data.locality + '  ' + data.city
        })

    }
    const error = (position) => {
        status.textContent = 'Please allow the pop up to mark your attendence';
    }
    navigator.geolocation.getCurrentPosition(success, error);
}
window.onload = function() {

    document.getElementById('findLocation-btn').addEventListener('click', findMyLocation);
}