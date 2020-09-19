
const button = document.getElementById('button').addEventListener('click', () => {

    const first = document.getElementById('color-1');
    const second = document.getElementById('color-2');
    const third = document.getElementById('color-3');
    const forth = document.getElementById('color-4');
    const fifth = document.getElementById('color-5');

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const num3 = Math.floor(Math.random() * 10);
    const num4 = Math.floor(Math.random() * 10);
    const num5 = Math.floor(Math.random() * 10);
    const num6 = Math.floor(Math.random() * 10);
    const num7 = Math.floor(Math.random() * 10);

    const one = first.style.backgroundColor = '#' + num3 + num2 + num5 + num4 + num1 + num6;
    const two = second.style.backgroundColor = '#' + num6 + num5 + num7 + num4 + num1 + num2;
    const three = third.style.backgroundColor = '#' + num7 + num2 + num3 + num4 + num1 + num5;
    const four = forth.style.backgroundColor = '#' + num1 + num6 + num5 + num3 + num2 + num4;
    const five = fifth.style.backgroundColor = '#' + num7 + num6 + num4 + num1 + num2 + num3;

    first.getElementsByTagName("P")[0].innerHTML = one; 
    second.getElementsByTagName("P")[0].innerHTML = two;
    third.getElementsByTagName("P")[0].innerHTML = three;
    forth.getElementsByTagName("P")[0].innerHTML = four;
    fifth.getElementsByTagName("P")[0].innerHTML = five;
    
})