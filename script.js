function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");

    // Convert input to number
    radius = Number(radius);

    // Calculate area of the circle
    let area = Math.PI * radius * radius;

    // Round off to two decimal places
    area = area.toFixed(2);

    // Display the result to the user
    alert(`The area of the circle with radius ${radius} is ${area}`);
}

calculateArea();
