const pickup_location = 42;

// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  //returns the number of blocks given a value
  return Math.abs(value - pickup_location); // Math.asb() return unassigned value
}

function distanceFromHqInFeet(value) {
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  return distanceFromHqInBlocks(value) * 264; // Each block in Manhattan is 264 feet long.
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  const number_of_blocks = Math.abs(destination - start);
  return number_of_blocks * 264; // Math.asb() return unassigned value
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const uncharged_feet = 400;
  const total_feet = distanceTravelledInFeet(start, destination);

  if (total_feet <= 400) {
    return 0;
  } else if (total_feet > 400 && total_feet <= 2000) {
    return ((total_feet - uncharged_feet) * 2) / 100;
  } else if (total_feet > 2000 && total_feet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
