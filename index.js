const count = document.getElementById('counter');
const add = document.getElementById("increment");
const del = document.getElementById("decrement");
const reset = document.getElementById("reset");


add.addEventListener('click', () => {
    count.innerHTML++;
})

del.addEventListener('click', () => {
    count.innerHTML--;
})

reset.addEventListener('click', () => {
    count.innerHTML = 0;
})
