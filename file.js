const members = [
    { name: "Evi", age: 24 },
    { name: "Alice", age: 14 },
    { name: "Nakos", age: 44 },
    { name: "Lassoi", age: 29 },
];

const result = members.find((member) => {
    return member.age > 25;
});
console.log(result);


/*
const cat = ["mimi", "mama", "momo"];

const newCat = cat.forEach((element) => console.log(element));
console.log(newCat);*/