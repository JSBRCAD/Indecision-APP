var nameVar = "Justus";
var nameVar = "Mike";
console.log("nameVar", nameVar);


let nameLet = "Jennifer"
nameLet = "Julie";
console.log("nameLet", nameLet);


const nameConst = "Jay";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Just Santanna";
let firstName;

if (fullName) {
     firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);