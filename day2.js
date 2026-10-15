
/*
1. EVEN OR ODD
Pseudocode:
GET number

IF number MOD 2 = 0
    SHOW "even"
ELSE
    SHOW "odd"
END IF
*/

let number = 8;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}


/*
2. GRADE CALCULATOR
Pseudocode:
GET score

IF score < 0 OR score > 100
    SHOW "Invalid score"
ELSE IF score >= 80
    SHOW "A"
ELSE IF score >= 70
    SHOW "B"
ELSE IF score >= 60
    SHOW "C"
ELSE IF score >= 50
    SHOW "D"
ELSE
    SHOW "F"
END IF
*/

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 80) {
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

console.log(getGrade(85));
console.log(getGrade(45));
console.log(getGrade(105));


/*
3. TICKET PRICE
Pseudocode:
GET age
GET isStudent

IF age > 65
    price = 0
ELSE IF age < 12
    price = 2000
ELSE IF isStudent = TRUE
    price = 3000
ELSE
    price = 5000
END IF

SHOW price
*/

let age = 20;
let isStudent = true;
let ticketPrice;

if (age > 65) {
    ticketPrice = 0;
} else if (age < 12) {
    ticketPrice = 2000;
} else if (isStudent) {
    ticketPrice = 3000;
} else {
    ticketPrice = 5000;
}

console.log("Ticket price:", ticketPrice, "RWF");


/*
4. DAY PLANNER
Pseudocode:
GET day

SWITCH day
    CASE "Monday"
        SHOW Monday class activity
    CASE "Tuesday"
        SHOW Tuesday class activity
    CASE "Wednesday"
        SHOW Wednesday class activity
    CASE "Thursday"
        SHOW Thursday class activity
    CASE "Friday"
        SHOW Friday class activity
    DEFAULT
        SHOW "No class"
END SWITCH
*/

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Linux class");
        break;
    case "Tuesday":
        console.log("OOP class");
        break;
    case "Wednesday":
        console.log("Web design class");
        break;
    case "Thursday":
        console.log("Database class");
        break;
    case "Friday":
        console.log("English class");
        break;
    case "Saturday":
    case "Sunday":
        console.log("No class");
        break;
    default:
        console.log("Invalid day");
}


/*
5. COUNTDOWN
Pseudocode:
SET number = 10

WHILE number >= 1
    SHOW number
    number = number - 1
END WHILE

SHOW "Liftoff!"
*/

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Liftoff!");


/*
6. SUM AND AVERAGE
Pseudocode:
SET numbers = [45, 78, 90, 62, 88]
SET sum = 0

FOR EACH number IN numbers
    sum = sum + number
END FOR

average = sum / LENGTH(numbers)

SHOW sum
SHOW average
*/

let numbers = [45, 78, 90, 62, 88];
let sum = 0;

for (let num of numbers) {
    sum += num;
}

let average = sum / numbers.length;

console.log("Sum:", sum);
console.log("Average:", average);


/*
7. FIND THE FIRST NUMBER GREATER THAN 100
Pseudocode:
SET numbers = [25, 60, 105, 150, 200]

FOR EACH number IN numbers
    IF number > 100
        SHOW number
        BREAK
    END IF
END FOR
*/

let values = [25, 60, 105, 150, 200];

for (let value of values) {
    if (value > 100) {
        console.log("First number greater than 100:", value);
        break;
    }
}


/*
8. SKIP NEGATIVES
Pseudocode:
SET numbers = [5, -3, 8, -10, 12, -1, 4]

FOR EACH number IN numbers
    IF number < 0
        CONTINUE
    END IF

    SHOW number
END FOR
*/

let mixedNumbers = [5, -3, 8, -10, 12, -1, 4];

for (let num of mixedNumbers) {
    if (num < 0) {
        continue;
    }

    console.log(num);
}


/*
9. MULTIPLICATION TABLE
Pseudocode:
SET number = 7

FOR i = 1 TO 12
    result = number * i
    SHOW number, " x ", i, " = ", result
END FOR
*/

for (let i = 1; i <= 12; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


/*
10. FIZZBUZZ + KIGALI
Pseudocode:
FOR number = 1 TO 30
    IF number MOD 7 = 0
        SHOW "Kigali"
    ELSE IF number MOD 15 = 0
        SHOW "FizzBuzz"
    ELSE IF number MOD 3 = 0
        SHOW "Fizz"
    ELSE IF number MOD 5 = 0
        SHOW "Buzz"
    ELSE
        SHOW number
    END IF
END FOR
*/

for (let i = 1; i <= 30; i++) {
    if (i % 7 === 0) {
        console.log("Kigali");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
