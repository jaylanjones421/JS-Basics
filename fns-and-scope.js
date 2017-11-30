//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = name =>{
  if(name === 'Tyler'){
    return true;
  }else if(name !== 'Tyler'){
    return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = ()=>{
 var name= prompt("What's your name?");
 return name;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome=()=>{
  alert("Welcome, "+ getName());
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// Parameters are like place holders for the arguments. 
function sum(x,y){return x+y};//the x&y are params
sum(5,6);                     //where 5&6 are the arguments 

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//falsy types are: empty strings,NaN,undefined,false,null, and 0
//you check for falsy values with conditional statements?


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

var myName=()=>"Jaylan";


//Now save the function definition of myName into a new variable called newMyName

var newMyName=myName;
//Now alert the result of invoking newMyName
alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn=()=>{
  return function(){return "Jaylan";}
  }

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();
//Now invoke innerFn.
innerFn();