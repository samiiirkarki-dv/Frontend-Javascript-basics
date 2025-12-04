// const product = {
//   name: "shocks",
//   price: 1090,
// };

// console.log(product);
// console.log(product.name);
// console.log(product.price);

// product.name = "cotton shocks";
// console.log(product);

// product.newProperty = true;
// console.log(product); 

const product2 = {
  name:'shirt',
  'deliver-time':'1 day',
  // [deliver-time]:'1 day' this also works
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function finction1() {
    comsole.log('function inside object');
  }
};

console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['deliver-time']);


console.log(product2.rating.count);
product2.fun();


console.log(typeof console.log);

 console.log(JSON.stringify(product2));
 const jsonstring = JSON.stringify(product2);
  console.log(JSON.parse(jsonstring));


