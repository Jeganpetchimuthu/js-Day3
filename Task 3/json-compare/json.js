function compareObj(json1, json2) {
  const obj1 = JSON.stringify(json1, Object.keys(json1).sort());
  const obj2 = JSON.stringify(json2, Object.keys(json2).sort());

  return obj1 === obj2;
}
const objA = { name: "person1", age: 5 };
const objB = { age: 5, name: "person1" };

console.log(compareObj(objA, objB));
