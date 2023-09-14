import axios from "axios";

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const MICROSOFT_API_KEY = 'Aic08I13b00KYBf4vx6NjXboo-Nq9Q8UqHXsbj8DAIRR91oDdWLe0ZnvJEzuELGk';

type BingResponse = 
    {
        resourceSets: { resources: { geocodePoints:{ coordinates:{} []}[] }[] }[]
    };
;

function searchAdressHandler(event: Event) {
    event.preventDefault();
    const enteredAdress = addressInput.value;

    axios.get<BingResponse>(`
    http://dev.virtualearth.net/REST/v1/Locations/${enteredAdress}?key=${MICROSOFT_API_KEY}`)
        .then(response => {

            const coordinates = response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates;

            console.log(response)

            new Microsoft.Maps.Map('#map', {
                credentials: MICROSOFT_API_KEY,
                center: new Microsoft.Maps.Location(coordinates[0],coordinates[1]),
                zoom: 10
            })
        
        })
        .catch(err => {
            console.log(err);
        })
        ;
    
} 

form.addEventListener('submit', searchAdressHandler);