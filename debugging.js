/* The function calculateTotal is supposed to return the total price after applying a 10% discount to the given price. */
function calculateTotal(price) {
    var discount = 10;
    var totalPrice = price - price * discount / 100;
    return totalPrice;
}
// Example usage:
console.log(calculateTotal(100)); // Expected: 90
/* The function multiplyByTwo is supposed to return the number multiplied by 2 if it's positive, otherwise it returns the original number. */
function multiplyByTwo(num) {
    if (num >= 0) {
        return num * 2;
    }
    return num;
}
// Example usage:
console.log(multiplyByTwo(-5)); // Expected: -5
/* The function greetPerson takes a person object and returns a greeting using their name. */
function greetPerson(person) {
    return "Hello " + person.firstName + person.lastName;
}
// Example usage:
console.log(greetPerson({ firstName: "John", lastName: "Doe" })); // Expected: "Hello John Doe"
/* This function attaches a click event to a button, which is supposed to log "Button clicked!" when the button is clicked. */
function attachClickEvent() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        console.log('Button clicked!');
    });
}
// Example usage:
attachClickEvent();
/* The function getInitials should take a full name and return the initials in uppercase. */
function getInitials(name) {
    var words = name.split(' ');
    return words[0].charAt(0) + words[1].charAt(0);
}
// Example usage:
console.log(getInitials('John Doe')); // Expected: "JD"
/* The function getRandomInt should return a random integer between min (inclusive) and max (exclusive). */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Example usage:
console.log(getRandomInt(1, 10)); // Expected: A random number between 1 and 9
/* The function getEvenNumbers should return an array of all even numbers from the given array. */
function getEvenNumbers(arr) {
    return arr.filter(function (num) { return num % 2 == 1; });
}
// Example usage:
console.log(getEvenNumbers([1, 2, 3, 4])); // Expected: [2, 4]
/* The function checkValue should return "low" if a value is less than 10, "high" if it's 10 or greater, and "equal" if it's exactly 10. */
function checkValue(value) {
    if (value < 10) {
        return "low";
    }
    else if (value > 10) {
        return "high";
    }
    else {
        return "equal";
    }
}
// Example usage:
console.log(checkValue(10)); // Expected: "equal"
/* The function sumArray should return the sum of all elements in an array. */
function sumArray(arr) {
    var sum = 0;
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Expected: 10
/* The function safeParseJSON should safely parse a JSON string and return the resulting object. If parsing fails, it should return null. */
function safeParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        return error;
    }
}
// Example usage:
console.log(safeParseJSON('invalid')); // Expected: null
/* The function getDayOfWeek should return the name of the day of the week for a given date. */
function getDayOfWeek(dateString) {
    var date = new Date(dateString);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay() - 1];
}
// Example usage:
console.log(getDayOfWeek('2023-09-15')); // Expected: "Friday"
/* The function isValidEmail should return true if the given string is a valid email, otherwise false. */
function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
// Example usage:
console.log(isValidEmail('test@example.com')); // Expected: true
