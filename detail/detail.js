import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
// get the id from URL
window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const dog = await getDog(id);
    const dogCard = renderDogDetail(dog);
    dogDetailContainer.append(dogCard);
});
// use the id to fetch the dog
// render and append this dog's details to the container
