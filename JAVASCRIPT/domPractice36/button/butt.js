
const container = document.querySelector('#container');
// Loop 100 times
for (let i = 0; i < 100; i++) {
    // Create a new button element
    const button = document.createElement('button');
    
    // Add some text inside the button
    button.innerText = "hey";

    // Append the button to the container div
    container.appendChild(button);
}