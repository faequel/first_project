const member = [
    { name: "a", money:"500" },
    { name: "b", money:"400" },
    { name: "c", money:"5200" },
    { name: "d", money:"1200" },
];
const result = member.filter((moneys) => moneys.money > 1000);

const result2 = result.map((result) => result.name);
console.log(result);