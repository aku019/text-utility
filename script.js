const  ip= document.querySelector('#input');
const lowercase = document.querySelector('#Lowercase');
const uppercase = document.querySelector('#Uppercase');
const wordcount = document.querySelector('#wordcount');
const charcount = document.querySelector('#charcount');
const output = document.querySelector('#output');

lowercase.addEventListener('click', () => {
    output.value =  ip.value.toLowerCase();
});

uppercase.addEventListener('click', () => {
    output.value =  ip.value.toUpperCase();
});

wordcount.addEventListener('click', () => {
    output.value =  ip.value.split(" ").length;
});

charcount.addEventListener('click', () => {
    output.value =  ip.value.length;
});