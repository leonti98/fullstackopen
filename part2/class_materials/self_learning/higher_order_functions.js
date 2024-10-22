// https://www.youtube.com/watch?v=rRgD1yVwIvE
// forEach, filter, map, sort, reduce

const companies = [
  { name: 'Company one', category: 'Finanace', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//==================================
// forEach
//==================================

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

companies.forEach((company) => console.log(company));

//==================================
//Filter
//==================================

// get older than 18
//==================================
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// const canDrink = ages.filter((age) => {
//   if (age >= 18) {
//     return true;
//   }
// });

const canDrink = ages.filter((age) => age >= 18);

console.log(canDrink);

// filer retail companies
//==================================
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
console.log(retailCompanies);

// filter companies from 80s
//==================================
const companiesFromEighties = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1990
);
console.log(companiesFromEighties);

// filter companies that lasted more than 10 years
//==================================
const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastedTenYears);

//==================================
// MAP
//==================================

//create array of company names
//==================================
// const companyNames = companies.map((company) => {
//   return company.name;
// });
// console.log(companyNames);

//create array of name and start to end date
//==================================
// const testMap = companies.map((company) => {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
console.log(testMap);

// create array of sqaure root and time two
//==================================
const agesSquareRoot = ages.map((age) => Math.sqrt(age));
console.log(agesSquareRoot);
const agesTimesTwo = ages.map((age) => age * 2);
console.log(agesTimesTwo);

//
const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(ageMap);

//==================================
// sort
//==================================

// sort companies by start date
//==================================
// const sortedCompanies = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((a, b) => {
  a.start > b.start ? 1 : -1;
});
console.log(sortedCompanies);

// sort ages
//==================================
const sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges);

//==================================
// reduce
//==================================

//age sum
//==================================
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// get total years for companies operated
//==================================
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);

// combine Methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
