import axios from "axios";

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const MICROSOFT_API_KEY = 'Aic08I13b00KYBf4vx6NjXboo-Nq9Q8UqHXsbj8DAIRR91oDdWLe0ZnvJEzuELGk';

function searchAdressHandler(event: Event) {
    event.preventDefault();
    const enteredAdress = addressInput.value;

    axios.get(`http://dev.virtualearth.net/REST/v1/Locations?countryRegion=${encodeURI(enteredAdress)}&key=${MICROSOFT_API_KEY}`)
        .then(response => {
    console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
        ;
    
} 

form.addEventListener('submit', searchAdressHandler);