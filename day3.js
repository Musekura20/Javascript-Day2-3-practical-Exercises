
/*
1. SQUARE
Pseudocode:
GET number
RETURN number multiplied by number
*/

const square = (n) => n * n;

console.log("1. Square:", square(4));   
console.log("1. Square:", square(5));   
console.log("1. Square:", square(0));   


/*
2. IS EVEN
Pseudocode:
GET number
IF number MOD 2 = 0
    RETURN TRUE
ELSE
    RETURN FALSE
END IF
*/

function isEven(n) {
    return n % 2 === 0;
}

console.log("2. Even:", isEven(4));   
console.log("2. Even:", isEven(7));   
console.log("2. Even:", isEven(0));   


/*
3. CELSIUS TO FAHRENHEIT
Pseudocode:
GET Celsius temperature
SET Fahrenheit = Celsius * 9 / 5 + 32
RETURN Fahrenheit

FAHRENHEIT TO CELSIUS
GET Fahrenheit temperature
SET Celsius = (Fahrenheit - 32) * 5 / 9
RETURN Celsius
*/

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

console.log("3. C to F:", celsiusToFahrenheit(0));    
console.log("3. C to F:", celsiusToFahrenheit(25));   
console.log("3. C to F:", celsiusToFahrenheit(-40));   

console.log("3. F to C:", fahrenheitToCelsius(32));   
console.log("3. F to C:", fahrenheitToCelsius(212));  
console.log("3. F to C:", fahrenheitToCelsius(-40));  


/*
4. FORMAT PRICE
Pseudocode:
GET amount
GET currency, default = "RWF"
FORMAT amount using thousands separators
RETURN formatted amount followed by currency
*/

function formatPrice(amount, currency = "RWF") {
    return `${amount.toLocaleString("en-US")} ${currency}`;
}

console.log("4. Price:", formatPrice(5000));            
console.log("4. Price:", formatPrice(125000));          
console.log("4. Price:", formatPrice(0, "USD"));        


/*
5. GET GRADE
Pseudocode:
GET score
IF score < 0 OR score > 100 OR score is not a number
    RETURN "Invalid score"
ELSE IF score >= 80
    RETURN "A"
ELSE IF score >= 70
    RETURN "B"
ELSE IF score >= 60
    RETURN "C"
ELSE IF score >= 50
    RETURN "D"
ELSE
    RETURN "F"
END IF
*/

function getGrade(score) {
    if (!Number.isFinite(score) || score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

console.log("5. Grade:", getGrade(85));    
console.log("5. Grade:", getGrade(55));    
console.log("5. Grade:", getGrade(101));   


/*
6. MAX
Pseudocode:
GET a list of numbers
IF the list is empty
    RETURN undefined
END IF
SET largest = first number
FOR EACH number in the list
    IF number > largest
        SET largest = number
    END IF
END FOR
RETURN largest
*/

function max(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log("6. Maximum:", max(4, 9, 2));       
console.log("6. Maximum:", max(-5, -2, -10));   
console.log("6. Maximum:", max());              


/*
7. CAPITALIZE
Pseudocode:
GET word
IF word is empty
    RETURN word
END IF
SET first letter = uppercase first letter
SET remaining letters = lowercase remaining letters
RETURN first letter joined with remaining letters
*/

function capitalize(word) {
    if (word.length === 0) {
        return word;
    }

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log("7. Capitalize:", capitalize("kigali"));   
console.log("7. Capitalize:", capitalize("RWANDA"));   
console.log("7. Capitalize:", capitalize(""));         


/*
8. COUNT VOWELS
Pseudocode:
GET text
SET count = 0
CONVERT text to lowercase
FOR EACH character in text
    IF character is a, e, i, o, or u
        INCREASE count by 1
    END IF
END FOR
RETURN count
*/

function countVowels(text) {
    let count = 0;
    let lowerText = text.toLowerCase();

    for (let character of lowerText) {
        if ("aeiou".includes(character)) {
            count++;
        }
    }

    return count;
}

console.log("8. Vowels:", countVowels("Kigali"));      
console.log("8. Vowels:", countVowels("EDUCATION"));   
console.log("8. Vowels:", countVowels("rhythm"));      


/*
9. IS PALINDROME
Pseudocode:
GET word
CONVERT word to lowercase
REVERSE the characters in the word
IF reversed word equals original word
    RETURN TRUE
ELSE
    RETURN FALSE
END IF
*/

function isPalindrome(word) {
    let original = word.toLowerCase();
    let reversed = original.split("").reverse().join("");

    return original === reversed;
}

console.log("9. Palindrome:", isPalindrome("racecar"));  
console.log("9. Palindrome:", isPalindrome("Hello"));    
console.log("9. Palindrome:", isPalindrome(""));          


/*
10. REPEAT ACTION
Pseudocode:
GET times and callback
FOR round = 1 TO times
    CALL callback with round
END FOR
*/

function repeatAction(times, callback) {
    for (let round = 1; round <= times; round++) {
        callback(round);
    }
}

console.log("10. Repeat 3 times:");
repeatAction(3, (round) => console.log("Round", round));

console.log("10. Repeat 1 time:");
repeatAction(1, (round) => console.log("Round", round));

console.log("10. Repeat 0 times:");
repeatAction(0, (round) => console.log("Round", round));
// Edge case: nothing is printed by the callback


/*
11. CREATE COUNTER
Pseudocode:
GET start, default = 0
SET count = start
CREATE increment function that increases count by 1
CREATE decrement function that decreases count by 1
CREATE getValue function that returns count
RETURN an object containing the three functions
*/

function createCounter(start = 0) {
    let count = start;

    return {
        increment: () => {
            count++;
        },
        decrement: () => {
            count--;
        },
        getValue: () => count
    };
}

const counter1 = createCounter(5);
counter1.increment();
console.log("11. Counter:", counter1.getValue());  

counter1.decrement();
console.log("11. Counter:", counter1.getValue());  

const counter2 = createCounter();
console.log("11. Counter:", counter2.getValue());  


/*
12. MAKE DISCOUNT
Pseudocode:
GET discount percentage
CREATE a function that receives a price
    SET discount amount = price * percentage / 100
    RETURN price - discount amount
END FUNCTION
RETURN the created function
*/

function makeDiscount(percent) {
    return function (price) {
        let discountAmount = price * percent / 100;
        return price - discountAmount;
    };
}

const tenPercentOff = makeDiscount(10);
const twentyPercentOff = makeDiscount(20);
const fullPrice = makeDiscount(0);

console.log("12. Discount:", tenPercentOff(10000));       
console.log("12. Discount:", twentyPercentOff(50000));    
console.log("12. Discount:", fullPrice(0));               
