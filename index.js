let customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    favoriteFlavors: "32",
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
  };
  
  // Modify properties with correct information
  customer.email = "Jak3Smith1992@email.com";
  customer.phone = 3195551234;
  customer.zipCode = "63132";
  customer.favoriteFlavors = ["coffee", "strawberry", "matcha"];
  
  // Delete unnecessary properties
  delete customer.zipCode;
  delete customer.favoriteStore;
  
  // Add new properties
  customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
  customer.futureFlavors = "mango";
  customer.todaysPurchaseCost = 5.32;
  
  // Print array of keys in the survey
  let surveyKeys = Object.keys(customer);
  console.log(surveyKeys);
  