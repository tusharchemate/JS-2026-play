const user = {
  name: "Tushar",
  age: 28,
  address: {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    location: {
      lat: 18.5204,
      long: 73.8567
    },
    childdata: [
      {
        name: "Tushar",
        age: 28,
        address: {
          city: "Pune",
          state: "Maharashtra",
          country: "India"
        }
      },
      {
        name: "Tushar",
        age: 28,
        address: {
          city: "Pune",
          state: "Maharashtra",
          country: "India"
        }
      },
      {
        name: "Tushar",
        age: 28,
        address: {
          city: "Pune",
          state: "Maharashtra",
          country: "India"
        }
      },
      {
        name: "Tushar",
        age: 28,
        address: {
          city: "Pune",
          state: "Maharashtra",
          country: "India"
        }
      },
      {
        name: "Tushar",
        age: 28,
        address: {
          city: "Pune",
          state: "Maharashtra",
          country: "India"
        }
      },
      {
        name: "Tushar",
        age: 28,
        address: {
          city: "Pune",
          state: "Maharashtra",
          country: "India"
        }
      }
    ]
  }
};





function getAllNames(obj, result = []) {
  if(typeof obj !== 'object') return obj

  // if object has name
  // if (obj.name) {
  //   result.push(obj.name);
  // }

  // loop through all keys
  for (let key in obj) {
    console.log(key)
    const value = obj[key];

    if (Array.isArray(value)) {
      value.forEach(item => getAllNames(item, result));
    } else if (typeof value === "object") {
      getAllNames(value, result);
    }
  }

  return result;
}
console.log(getAllNames(user))
