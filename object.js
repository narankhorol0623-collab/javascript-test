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

// const loop = "This is a loop example";
// console.log(loop);

// students = [
//      {name: "Бат", math: 70, english: 80, science: 90},
//      {name: "Сара", math: 60, english: 85, science: 95},
//      {name: "Наран", math: 100, english: 90, science: 80}
//     ]
// let total= {name: "", average: 0};
//     for (let i=0; i < students.length; i++) {
//         let score = (students[i].math + students[i].english + students[i].science) / 3;
//         if(score > total.average){
//             total.name = students[i].name;
//             total.average = score;
//         }
//     }
//     console.log(total);

// const student = [
//     {name: "Бат", math: 95, english: 100, science: 95},
//     {name: "Сара", math: 92, english: 58, science: 100}
// ]
//  for (let i=0; i < student.length; i++) {
//     let score = (student[i].math + student[i].english + student[i].science);
//     if (score > 270) {
//         console.log(student[i].name + " шилдэг сурагч");

// //     }
// //  }

// //  const students2 = [
// //     {name: "Бат", math: 70, english: 80, science: 90},
// //     {name: "Сара", math: 60, english: 85, science: 95},
// //     {name: "Наран", math: 100, english: 90, science: 80}
// // ]
// // for (let i=0; i < students2.length; i++){
// //     let score = (students2[i].math + students2[i].english + students2[i].science) / 3;
// //     if (score >= 80){
// //         console.log(students2[i].name + " муу оноотой");
// //     }
// // }

// // const products = [
// //     {title: "Уут", price: 500, sold: 10, discount: 0.1},
// //     {title: "Сав", price: 800, sold: 5, discount: 0.2},
// //     {title: "Савх", price: 600, sold: 12, discount: 0.15}
// // ]
// // for (let i=0; i < products.length; i++){
// //     let revenue = products[i].price * products[i].sold * (1 - products[i].discount);
// //     if (revenue < 4000){
// //         console.log(products[i].title + " борлуулалт муу байна");
// //     }
// // }

// // const books = [
// //     {title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5},
// //     {title: "Газар зүй", pages: 150, year: 2010, rating: 4.8},
// //     {title: "Улс төр", pages: 200, year: 2005, rating: 4.2}
// // ]
// // for (let i=0; i < books.length; i++){
// //     if(books[i].rating > books[0].rating){
// //         console.log(books[i].title + " номын үнэлгээ сайн байна");
// //     }
// // }
// // const students3 = [
// //     {name: "Бат", age: 20, math: 70, english: 80},
// //     {name: "Сара", age: 22, math: 60, english: 85},
// //     {name: "Наран", age: 21, math: 90, english: 95}
// // ]
// // for (let i=0; i <students3.length; i++){
// //     if(students3[i].age > 21)[
// //         c = students3[i].math + students3[i].english / 2;
// //         console.log(students3[i].name + " дундаж оноо: " + c);
// //     ]
// // }

// // const employees = [
// //     {name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1},
// //     {name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2},
// //     {name: "Баяр", salary: 1200, bonus: 100, taxRate: 0.15}
// // ]
// // for (let i=0; i < employees.length; i++){
// //     let netSalary = (employees[i].salary + employees[i].bonus) * (1 - employees[i].taxRate);
// //     if (netSalary > 1300){
// //         console.log(employees[i].name + " цалин өндөр байна");
// //     }
// // }

// // const products = [
// //     {title: "Уут", price: 500, sold: 10, category: "Plastic"},
// //     {title: "Сав", price: 800, sold: 5, category: "Metal"},
// //     {title: "Савх", price: 600, sold: 12, category: "Plastic"}
// // ]
// // for (let i=0; i < products.length; i++){
// //     if (products[i].category === "Plastic"){
// //         let revenue = products[i].price * products[i].sold;
// //         console.log(products[i].title + " борлуулалт: " + revenue);
// //     }
// // }
// // const books = [
// //     {title: "Монгол түүх", price: 1200, sold: 10, discount: 0.1},
// //     {title: "Газар зүй", price: 1500, sold: 5, discount: 0.05},
// //     {title: "Улс төр", price: 1000, sold: 20, discount: 0.2}
// // ]
// // for (let i=0; i < books.length; i++){
// //     let totalRevenue = books[i].price * books[i].sold * (1 - books[i].discount);
// //     if (totalRevenue > 10000){
// //         console.log(books[i].title + " нийт орлого их байна");
// //     }
// // }

// // const students = [
// //     {name: "Бат", math: 70, english: 80, science: 90},
// //     {name: "Сара", math: 60, english: 85, science: 95},
// //     {name: "Наран", math: 100, english: 90, science: 80}
// // ]
// // let massive = [];
// // for (let i=0; i < students.length; i++){
// //     if(students[i].math >= 80 && students[i].english >= 80 && students[i].science >= 80){
// //         massive.push(students[i].math);
// //         massive.push(students[i].english);
// //         massive.push(students[i].science);
// // }
// // }
// // console.log(massive);

// // const employees2 = [
// //     {name: "Амгалан", salary: 1000, active: true, department: "IT"},
// //     {name: "Номин", salary: 1500, active: false, department: "HR"},
// //     {name: "Баяр", salary: 1200, active: true, department: "IT"}
// // ]
// // let itEmployees = [];
// // for(let i=0; i < employees2.length; i++){
// //     if(employees2[i].active === true && employees2[i].department === "IT"){
// //        itEmployees.push(employees2[i]);
// //     }
// // }
// // console.log(itEmployees);

// const products = [
//   { title: "Уут", price: 500, sold: 10, category: "Plastic" },
//   { title: "Сав", price: 800, sold: 5, category: "Metal" },
//   { title: "Савх", price: 600, sold: 12, category: "Plastic" },
// ];
// for (let i = 0; i < products.length; i++) {
//   d = products[i].price / products[i].sold;
//   if (d < 55) {
//     console.log(products[i]);
//   }
// }

// const books = [
//   { title: "Монгол түүх", pages: 120, rating: 4.5 },
//   { title: "Газар зүй", pages: 150, rating: 4.8 },
//   { title: "Улс төр", pages: 200, rating: 4.2 },
// ];
// let revenue = { name: "", total: 0 };
// for (let i = 0; i < books.length; i++) {
//   c = (books[i].pages + books[i].rating) / 2;
//   if (c > 100) {
//     c += revenue.total;
//     revenue.name = books[i].title;
//     revenue.total = c;
//     console.log(revenue);
//   }
// }

// const students = [
//   { name: "Бат", math: 70, english: 80, science: 90 },
//   { name: "Сара", math: 60, english: 85, science: 95 },
//   { name: "Наран", math: 100, english: 90, science: 80 },
// ];
// let subjects = { name: "", average: 0 };
// for (let i = 0; i < students.length; i++) {
//   f = (students[i].math + students[i].english + students[i].science) / 3;
//   if (f >= 90) {
//     subjects.name = students[i].name;
//     subjects.average = f;
//     console.log(subjects);
//   }
// }

// const employees = [
//   { name: "Амгалан", salary: 1000, bonus: 200, department: "IT" },
//   { name: "Номин", salary: 1500, bonus: 300, department: "HR" },
//   { name: "Баяр", salary: 1200, bonus: 100, department: "IT" },
// ];

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
