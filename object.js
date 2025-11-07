// // const bod1 = "false";
// // const bod11= "true";

// // let ages = 0;
// // const students = [
// //   { name: "Бат", age: 20 },
// //   { name: "Сарa", age: 22 },
// // ];
// // for (let i = 0; i < students.length; i++) {
// //   ages += students[i].age;
// // }
// // console.log(ages);

// // let unetei = 0;
// // const products = [
// //   { title: "Уут", price: 500 },
// //   { title: "Сав", price: 800 },
// // ];
// // for (let i = 0; i < products.length; i++) {
// //   products[i].price > 600;
// //   unetei = products[i].price;
// // }
// // console.log(unetei);

// // const employees = [
// //   { name: "Амгалан", department: "IT" },
// //   { name: "Номин", department: "HR" },
// // ];
// // for (let i = 0; i < employees.length; i++) {
// //   console.log(employees[i].name);
// // }

// // let olon = 0;
// // const books = [
// //   { title: "Монгол түүх", pages: 120 },
// //   { title: "Газар зүй", pages: 150 },
// // ];
// // for (let i = 0; i < books.length; i++) {
// //   if (books[0].pages < books[1].pages) {
// //   }
// // }
// // console.log(books[1]);

// // let ner = 90;
// // const students2 = [
// //   { name: "Бат", score: 85 },
// //   { name: "Сара", score: 92 },
// // ];
// // for (let i = 0; i < students2.length; i++) {
// //   if (students2[i].score > 90) {
// //     console.log(students2[i].name);
// //   }
// // }
// // console.log(ner);

// // const products1 = [
// //   { title: "Уут", stock: 5 },
// //   { title: "Сав", stock: 0 },
// // ];
// // let a = 0;
// // for (let i = 0; i < products1.length; i++) {
// //   if (products1[i].stock > a) {
// //     console.log(products1[i]);
// //   }
// // }

// // const employees1 = [
// //   { name: "Амгалан", salary: 1000 },
// //   { name: "Номин", salary: 1500 },
// // ];
// // let tsalin = 0;
// // for (let i = 0; i < employees1.length; i++) {
// //   tsalin += employees1[i].salary;
// // }
// // console.log(tsalin);

// // const books1 = [
// //   { title: "Монгол түүх", year: 2000 },
// //   { title: "Газар зүй", year: 2010 },
// // ];
// // let on = 2005;
// // for (let i = 0; i < books1.length; i++) {
// //   if (books1[i].year > 2005) {
// //     console.log(books1[i]);
// //   }
// // }

// // const students3 = [
// //   { name: "Бат", age: 20 },
// //   { name: "Сара", age: 22 },
// //   { name: "Сара", age: 30 },
// // ];
// // let a = students3.length;
// // let niilber = 0;
// // for (let i = 0; i < students3.length; i++) {
// //   niilber += students3[i].age;
// // }
// // console.log(niilber / a);

// // const products = [
// //   { title: "Уут", price: 500 },
// //   { title: "Сав", price: 800 },
// // ];

// // const students4 = [
// //   { name: "Бат", math: 85, english: 90, science: 95 },
// //   { name: "Сара", math: 92, english: 88, science: 100 },
// //   { name: "Сара1", math: 98, english: 88, science: 100 },
// // ];

// // let max = { name: "", score: 0 };

// // for (let i = 0; i < students4.length; i++) {
// //   let a = students4[i].math + students4[i].english + students4[i].science;

// //   if (max.score < a) {
// //     max.score = a;
// //     max.name = students4[i].name;
// //   }
// // }

// // console.log(max);

// // const employees = [
// //   { name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1 },
// //   { name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2 },
// // ];
// // let max1 = { name: "", score: 0 };
// // for (let i = 0; i < employees.length; i++) {
// //   b = employees[i].salary + employees[i].bonus + employees[i].taxRate;
// //   if (max1.score < b) {
// //     max1.score = b;
// //     max1.name = employees[i].name;
// //   }
// // }
// // console.log(max1);

// // const products = [
// //   { title: "Уут", price: 500, sold: 10, discount: 0.1 },
// //   { title: "Сав", price: 800, sold: 5, discount: 0.2 },
// // ];
// // let max2 = { name: "", score: 0 };

// // for (let i = 0; i < products.length; i++) {
// //   d = products[i].price * products[i].sold + products[i].discount;
// //   if (max2.score < d) {
// //     max2.score = d;
// //     max2.name = products[i].title;
// //   }
// // }
// // console.log(max2);

// const books = [
//   { title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5 },
//   { title: "Газар зүй", pages: 150, year: 2010, rating: 4.8 },
// ];
// let undur = { name: "", score: 0 };

// for (let i = 0; i < books.length; i++) {
//   a = books[i].pages + books[i].rating;
//   if (undur.score < a) {
//     undur.score = a;
//     undur.name = books[i].title;
//   }
// }
// console.log(undur);

// const students = [
//   { name: "Бат", math: 100, english: 95, science: 90 },
//   { name: "Сара", math: 60, english: 85, science: 95 },
//   { name: "Наран", math: 100, english: 90, science: 80 },
// ];
// let m = { name: "", score: 0 };
// for (let i = 0; i < students.length; i++) {
//   b = (students[i].math + students[i].english + students[i].science) / 3;
//   if (m.score < b) {
//     m.score = b;
//     m.name = students[i].name;
//   }
// }
// console.log(m);

// const employees = [
//   { name: "Амгалан", salary: 1000, active: true, department: "IT" },
//   { name: "Номин", salary: 1500, active: false, department: "HR" },
//   { name: "Баяр", salary: 1200, active: true, department: "IT" },
// ];
// let tsalin = 0;
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].active == true) {
//     tsalin += employees[i].salary;
//     tsalin / 2;
//   }
// }
// console.log(tsalin / 2, "DundajTsalin");

// const products = [
//   { title: "Уут", price: 500, sold: 10, category: "Plastic" },
//   { title: "Сав", price: 800, sold: 5, category: "Metal" },
//   { title: "Савх", price: 600, sold: 12, category: "Plastic" },
//   { title: "Уут", price: 500, sold: 10, category: "Plastic" },
//   { title: "Сав", price: 800, sold: 5, category: "Metal" },
//   { title: "Савх", price: 600, sold: 12, category: "Plastic" },
// ];
// let niit = {};

// for (let i = 0; i < products.length; i++) {
//   const value = niit[products[i].title];

//   if (value) {
//     niit[products[i].title] =
//       niit[products[i].title] + products[i].price * products[i].sold;
//   } else {
//     niit[products[i].title] = products[i].price * products[i].sold;
//   }
// }
// console.log(niit);

// const ehnii = [2, 3, 4];
// let hariu = [];

// for (let i = 0; i < ehnii.length; i++) {
//   for (let j = i + 1; j < ehnii.length; j++) {
//     hariu.push(ehnii[i] * ehnii[j]);
//   }
// }

// console.log(hariu);

// let h = {};
// const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// for (let i = 0; i < array.length; i++) {
//   let counter = 0;

//   for (let j = 1; j < array.length; j++) {
//     if (array[i] === array[j]) {
//       counter++;
//     }
//   }

//   if (counter > 1) {
//     h[array[i]] = counter;
//   }
// }

// console.log(h);

// const massive1 = [1, 2, 3, 4, 5];
// const massive2 = [3, 4, 5, 3, 4, 5, 1, 6];
// let unique = [];

// for (let i = 0; i < massive1.length; i++) {
//   for (let j = 0; j < massive2.length; j++) {
//     if (massive1[i] === massive2[j] && !unique.includes(massive1[i])) {
//       unique.push(massive1[i]);
//     }
//   }
// }
// console.log(unique);

let array = [];
let value = 3;

for (let i = 0; i < value; i++) {
  let star = "";

  for (let j = 0; j <= i; j++) {
    star += ` *`;
  }
  console.log(star);
}

const ug1 = "silent";
const ug2 = "listen";
let anagramm = false;

if (ug1.length !== ug2.length) {
  console.log("true");
} else {
  for (let i = 0; i < ug1.length; i++) {
    for (let j = 0; j < ug2.length; j++) {
      if (ug1[i] === ug2[j]) {
        anagramm = true;
        break;
      }
    }
    if (!anagramm) {
      break;
    }
  }
}
console.log(anagramm);

// const usnu = [4, 3, 2, 1];
