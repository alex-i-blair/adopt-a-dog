import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test("create elements: div, a, img, and p. Add classlist 'dog-card' to the div. Add name to p, breed img to img, and link to the a. Then append p and img to div and append div to a", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testDog = {
        name: 'Fred',
        breed: 'beagle',
        id: 1
    };
    const expected = '<a href="./detail/?id=1"><div class="dog-card"><p>Fred</p><img src="./assets/beagle.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(testDog);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test("create elements: div*2, img, and p*4. Add classlist 'dog-detail' to the divs. Add name and class 'name' to a p, add text description and class 'description' to a p, and age and class 'age' to a p, and add breed and class list to a p. then append breed and age p's to a div and add class 'age-and'breed and append that div, image, description and name to div", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testDog = {
        name: 'Bennie',
        breed: 'beagle',
        id: 1,
        description: 'test',
        age: 2
    };
    const expected = '<div class="dog-detail"><p class="name">Bennie</p><img src="../assets/beagle.jpeg"><div class="age-and-breed"><p class="age">2 years old</p><p class="breed">beagle</p></div><p class="description">test</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail(testDog);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
