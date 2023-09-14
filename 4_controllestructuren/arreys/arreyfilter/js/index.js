let cursisten = ['Tom','Tim','Bart','Els'] ;
// let cursisten = new Array ('Tom','Tim','Bart','Els');
let cursusJaar = ['2017','2018','2019','2020','2021','2022','2023'];

document.write(cursisten);
document.write(cursisten[0]);
document.write(cursisten[3]);
document.write(cursisten[4]);

cursisten[0]='Peter';
document.write(cursisten);
//length of an array
document.write(cursisten.length);
// to enter a cursist
cursisten.push('Marieke');
document.write(cursisten);
document.write(cursisten[4]);
// to enter a cursist in the begining of the array
cursisten.unshift('Thomas');
document.write(cursisten);
// take out a cursist (the last)
cursisten.pop();
document.write(cursisten);
// take out the first cursist
cursisten.shift();
document.write(cursisten);
// index of where the item is placed in the array
document.write(cursisten.indexOf('Bart'));
