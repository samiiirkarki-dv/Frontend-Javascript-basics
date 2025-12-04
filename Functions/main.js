// function function1 () {
//     console.log('hello');
//     console.log(2 + 2);
// }

// calling the function
// function1();
// function1();

 
function calclulateTax(cost, taxPercent = 0.1)
{
    // console.log(taxPercent); undefined
    console.log(cost * taxPercent);
}

calclulateTax(2000, 0.2);
calclulateTax(5000);