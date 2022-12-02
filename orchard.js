///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE



// 7 is nubmer of days but the indexes in arrays start with 0 , so i is strictly less than 7. I used an addition assignment operator (+=) to reasssing the value of totalAres to the sum of the i indexes every loop.

let totalAcres = 0

for (let i = 0; i < 7; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}

console.log (`Total Acres: `+ totalAcres)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE



// That was a pretty easy one, I'm not sure what to comment. The average formula is m = sum of terms/number of terms. So I diveded totalAcres by 7 days of the week, that's our daily average.

let averageDailyAcres = totalAcres / 7

console.log (`Average Daily Acres: `+ averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE


// while loop is because I don't know how many times the loop runs. The instructions explaing pretty well what the loop should do, so as long as we have the acres left we work. even when it's just 3 acres for the last day instead of 9. Every loop 9 is substracted from the acresLeft and goes down to 0. And every loop we add 1 day to the total of days. Btw I commented out a console.log of every loop. Just wanted to see how it runs every time.



while (acresLeft > 0) {
   acresLeft = acresLeft - averageDailyAcres
    days++
    // console.log (days + ` ` + acresLeft)
}

console.log (`Days left: ` + days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE


// Yeah, I know it said I could use slice buuut... I feel like my way was easier. I avoided extra arrays and just pushed the final number into the given arrays. It stil isn't the most efficient probably but it works and I left it as it was.

let tonsPerAcre = 6.5
let t = 0
let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0; i < fujiAcres.length; i++) {
    t = fujiAcres[i] * tonsPerAcre
    fujiTons.push (t)
}

for (let i = 0; i < galaAcres.length; i++) {
    t = galaAcres[i] * tonsPerAcre
    galaTons.push (t)
}

for (let i = 0; i < pinkAcres.length; i++) {
    t = pinkAcres[i] * tonsPerAcre
    pinkTons.push (t)
}

console.log (`Tons of Fuji Apples: ` + fujiTons)
console.log (`Tons of Gala Apples: ` + galaTons)
console.log (`Tons of Pink Apples: ` + pinkTons)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 



// This one uses exactly the same loop I used in Problem 1, except it's tons now not acres and I had to separate them into different variables by variety. And yeah, a ton is actually more than 2000 pounds but since that's the value they give here, i just multiplied it by 2000 to get `pounds`.



let totalTonsFuji = 0
let totalTonsGala = 0
let totalTonsPink = 0

for (let i = 0; i < 7; i++) {
    totalTonsFuji += fujiTons[i]
    totalTonsGala += galaTons[i]
    totalTonsPink += pinkTons[i]
}

// console.log (totalTonsFuji)
// console.log (totalTonsGala)
// console.log (totalTonsPink)

let fujiPounds = totalTonsFuji * 2000
let galaPounds = totalTonsGala * 2000
let pinkPounds = totalTonsPink * 2000

console.log (`Pounds of Fuji Apples: ` + fujiPounds)
console.log (`Pounds of gala Apples: ` + galaPounds)
console.log (`Pounds of Pink Apples: ` + pinkPounds)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE


// Was that actually so easy or have I messed up somewhere and didn't understand the task? ^__^''' Obviously you multiply number of pounds by the price per pound... and you get a profit number. Unless you're an actual accountant and have a whole list of thing to consider before calling profits. :)


let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log (`Fuji Apples Profit: ` + fujiProfit)
console.log (`Gala Apples Profit: ` + galaProfit)
console.log (`Pink Apples Profit: ` + pinkProfit)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// Ahem. Well. Here's my meaningful comment. You, guys, rock! I'm enjoying the course and this is just total profit that consists of adding all the profits together. Is it meaningful enough? :)

totalProfit = fujiProfit + galaProfit + pinkProfit

console.log (`Total Profit: ` + totalProfit)