let iceCream = prompt(
    "Input the Flavors you want!"
  );

const flavors = iceCream.split(',');

const flavor_aaray = [flavors];
let flavor_results = {};
flavors.forEach((x) => {
  flavor_results[x] = flavor_results[x] || 0;
  flavor_results[x]++
});
console.log (flavor_aaray);
window.alert('Are these the correct flavors ' + flavor_aaray);