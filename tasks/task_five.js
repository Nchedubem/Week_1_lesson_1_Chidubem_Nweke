let person = {
    name: "Ncheta",
    age: 28,
    location: "Anambra"
  };
  
  console.log(person.name); 
  console.log(person.age); 
  console.log(person["location"]); 
  
  person.gender = "Male"; 
  person["age"] = 35; 
  
  console.log(person.gender); 
  console.log(person.age); 
