/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(developerName);

function developerName(item) {
  if(item.profession=="developer"){
    console.log(item.name);
  }
}
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(developerName);

function developerName(item) {
  if(item.profession=="developer"){
    console.log(item.name);
  }
}
}

function addData() {
  //Write your code here
  let obj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let newArr = arr.filter(function remove(val){
    if(val.profession!= "admin"){
      return val;
    }
  });
  console.log(newArr);
}

function concatenateArray() {
  //Write your code here
  let a = [
    { id: 5, name: "Siva", age: "27", profession: "developer" },
    { id: 6, name: "Aravind", age: "27", profession: "designer" },
    { id: 7, name: "Saravanan", age: "29", profession: "SDE" },
  ];
  let result = arr.concat(a);
  console.log(result);
}
