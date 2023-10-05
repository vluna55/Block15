
// Function definition
function countFlavors(input) {
  // Split the input into an array of flavors

  const flavors = input.split(',');

  // Create an object to store the flavor counts
  const flavorCount = {};

  // Create the flavor count
  for (const flavor of flavors) {
    // Check if the flavor is present, if not add it to the object
    if (!flavorCount[flavor]) {
      flavorCount[flavor] = 0;
    }

    // Increment the count for the selected flavor
    flavorCount[flavor]++;
  }

  // Display the table to the console with console.log
  console.log('Flavor\tCount')
  for (const flavor in flavorCount) {
    console.log(`${flavor}\t${flavorCount[flavor]}`);
  }
}

// User input
const input = prompt(
  "Input the Flavors you want!"
);

// Call the function
countFlavors(input);