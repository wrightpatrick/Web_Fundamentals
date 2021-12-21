// fizz buzz For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally

var number =0;
while(number <= 100){
    // console.log(number);
    if(number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz")
    } 
    else if(number % 3 == 0){
        console.log("Fizz")
    }
    else if(number % 5 == 0){
        console.log("Buzz")
    }
    else 
    console.log(number);
    number += 1;
}