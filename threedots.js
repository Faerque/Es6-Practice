const ages = [12,14,15,16,17,19];
const ages2 = [15,16,12];
const ages3 = [25,26,28,29]
const allAges = ages.concat(ages2).concat(ages3).concat([5]);
const  allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPaisa = [650,450,250]
const maximum = Math.max(...takaPaisa);
console.log(maximum);