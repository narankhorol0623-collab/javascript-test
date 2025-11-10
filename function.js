// const triangleParameter = (a, b, c) => {
//   return a + b + c;
// };
// const bodlogo1 = triangleParameter(2, 4, 4);
// console.log(bodlogo1);

// const bodlogo2 = (a, b, c, d, e) => {
//   return parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);
// };
// const niilber = bodlogo2(1, 3, 5, 7, 8.7);
// console.log(niilber);

// const bodlogo3 = (urt, urgun) => {
//   const parameter = urt + urgun;
//   const talbai = urt * urgun;
//   return [parameter, talbai];
// };
// const b = bodlogo3(10, 5);
// console.log(b);

// const bodlogo4 = (sec) => {
//   let sec1 = parseInt(sec / 60);
//   let min = sec % 60;
//   return { minute: sec1, second: min };
// };
// const second = bodlogo4(98);
// console.log(second);

// const bodlogo5 = (yeo) => {
//   let tsag = parseInt(yeo / 3600);
//   let minut = parseInt(yeo / 60);
//   let secund = yeo % 60;
//   return { hour: tsag, minutes: minut, seconds: secund };

//   // let hour2 = parseInt(seconds2 / 3600);
//   // let minutes2 = parseInt(seconds2 / 60);
//   // let seconds3 = seconds2 % 60;
// };
// const hehh = bodlogo5(1297);
// console.log(hehh);

// const bodlogo6 = (a, b) => {
//   return a * 60 + b;
// };
// const utga = bodlogo6(875, 88);
// console.log(utga);

// const bodlogo7 = (a, b, c) => {
//   return a * 3600 + b * 60 + 85;
// };
// const utga1 = bodlogo7(83, 84, 85);
// console.log(utga1);

// const bodlogo8 = (honog) => {
//   const day = parseInt(honog / 24);
//   const tsag1 = honog % 24;
//   return { day: day, hour: tsag1 };
// };
// const utga2 = bodlogo8(38);
// console.log(utga2);

// const bodlogo9 = (a, b) => {
//   return a * 24 + b;
// };
// const tsag2 = bodlogo9(4, 40);
// console.log(tsag2);

// const bodlogo10 = (sar) => {
//   const jil = parseInt(sar / 12);
//   const sar1 = sar % 12;
//   return { year: jil, month: sar1 };
// };
// const utga3 = bodlogo10(106);
// console.log(utga3);

// const bodlogo11 = (a, b) => {
//   return a *12 + b;
// };
// const utga4 = bodlogo11(90, 98);
// console.log(utga4);

// const bodlogo12 = (b, c, d) => {
//   const min = 0;
//   if (d < b && d < c) {
//     min = d;
//   }
//   return { min: min };
// };
// let utga5 = bodlogo12(9, 8, 7);
// console.log(utga5);

// const bodlogo13 = (a, b, c, d) => {
//   let total = 1;
//   if (a < 5) {
//     total *= a;
//   }
//   if (b < 5) {
//     total *= b;
//   }
//   if (c < 5) {
//     total *= c;
//   }
//   if (d < 5) {
//     total *= d;
//   }
//   return total;
// };
// const utga = bodlogo13(2, 9, 3, 5);
// console.log(utga);

// const bodlogo14 = (a, b, c, d, f, e) => {
//   let hariu = 1;
//   if (a > 5) {
//     hariu *= a;
//   }
//   if (b > 5) {
//     hariu *= b;
//   }
//   if (c > 5) {
//     hariu *= c;
//   }
//   if (d > 5) {
//     hariu *= d;
//   }
//   if (e > 5) {
//     hariu *= e;
//   }
//   if (f > 5) {
//     hariu *= f;
//   }
//   return hariu;
// };
// const utga1 = bodlogo14(1, 1, 1, 5, 6, 7);
// console.log(utga1);

// const bodlogo1 = (a, b) => {
//   let max = 0;
//   if (a < b) {
//     max = b;
//   }
//   if (b < a) {
//     max = a;
//   }
//   return max;
// };
// const utga = bodlogo1(7, 5);
// console.log(utga);

// const isEvenNumber = (a) => {
//   return a % 2 === 0;
// };
// const utga1 = isEvenNumber(4);
// isEvenNumber();

// const bodlogo3 = (a, b, c) => {
//   let max = Math.max(a, b, c);
//   let min = Math.min(a, b, c);
//   return { minimum: min, maximum: max };
// };
// const utga = bodlogo3(5, 2, 3);
// console.log(utga);

// const bodlogo4 = (string) => {
//   let urt = string.length;
//   return urt;
// };
// const utga1 = bodlogo4("hehhahahahe");
// console.log(utga1);

// const bodlogo5 = (string) => {
//   let urtn = string.length;
//   let first = string[0];
//   let last = string[string.length - 1];
//   return { first: first, last: last };
// };
// const utga2 = bodlogo5("Huuuuuuuy");
// console.log(utga2);

// const bodlogo6 = (string) => {
//   return string.toUpperCase();
// };
// const utga = bodlogo6("hisnu");
// console.log(utga);

// const bodlogo7 = (ug, useg) => {
//   return ug.includes(useg);
// };
// console.log(bodlogo7("banana", "n"));

// const bodlogo8 = (b) => {
//   if (b % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (b % 3 === 0) {
//     console.log("Fizz");
//   } else if (b % 5 === 0) {
//     console.log("Buzz");
//   }
//   return bodlogo8;
// };
// const utga = bodlogo8(45);

// const bodlogo9 = (a, b) => {
//   return `${a}${b}`;
// };
// const utga3 = bodlogo9("Hello", "World");
// console.log(utga3);

// const bodlogo10 = (a, b) => {
//   return (a + b) / 2;
// };
// const utga = bodlogo10(2, 6);
// console.log(utga);

// const bodlogo11 = (a) => {
//   if (a > 0) {
//     console.log("eyreg");
//   }
//   if (a < 0) {
//     console.log("surug");
//   }
//   if (a == 0) {
//     console.log("teg");
//   }
//   return bodlogo11;
// };
// const utga2 = bodlogo11(0);

// const bodlogo12 = (a) => {
//   if (a > 10) {
//     console.log("ih");
//   } else {
//     console.log("baga");
//   }
//   return bodlogo12;
// };
// const utga1 = bodlogo12(9);

// const bodlogo13 = (a, b) => {
//   if (a == b) {
//     console.log("tentsuu");
//   } else {
//     console.log("buruu");
//   }
//   return bodlogo13;
// };
// const utga = bodlogo13(2, 2);

// const bodlogo14 = (a) => {
//   if (a < 100 && a > 0) {
//     a = "baigaa";
//   } else {
//     a = "baihgui";
//   }
//   return a;
// };
// const drr = bodlogo14(202);
// console.log(drr);

// const bodlogo15 = (a) => {
//   let b = parseInt(a * 1.1);
//   let c = a * 1.2;
//   let d = a * 1.3;
//   return { b, c, d };
// };
// const yeo = bodlogo15(100);
// console.log(yeo);

// const bodlogo16 = (b) => {
//   if (b > 100) {
//     b = 100;
//   }
//   return b;
// };
// const utga = bodlogo16(1000);
// console.log(utga);

// const bodlogo17 = (a, b) => {
//   if (a === b) {
//     a = "uneen";
//   } else {
//     a = "hud";
//   }
//   return a;
// };
// const yeooo = bodlogo17("3", 3);
// console.log(yeooo);

// const bodlogo18 = (a) => {
//   return `${a[a.length - 1]}${a[0]}`;
// };
// const utga = bodlogo18("27272772");
// console.log(utga);

// const bodlogo19 = (a) => {
//   return a < 0 ? -a : a;
// };
// const utga = bodlogo19(-8);
// console.log(utga);

const bodlogo20 = (a) => {
  if (a[a.length - 1] == 1 || a[a.length - 1] == 6) {
    a = "Monday";
  }
  if (a[a.length - 1] == 2 || a[a.length - 1] == 7) {
    a = "Tuesday";
  }
  if (a[a.length - 1] == 3 || a[a.length - 1] == 8) {
    a = "Wednesday";
  }
  if (a[a.length - 1] == 4 || a[a.length - 1] == 9) {
    console.log("Thursday");
  }
  if (a[a.length - 1] == 5 || a[a.length - 1] == 0) {
    console.log("Friday");
  }
  return a;
};
const yeo = bodlogo20("1376");
console.log(yeo);
