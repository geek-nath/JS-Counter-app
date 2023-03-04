let counter = 0;
let increamentBtn = document.getElementById('increamentBtn');
let countEl = document.getElementById('count_el');

increamentBtn.addEventListener('click', ()=> {
    counter++;

    if(counter >= 1) {
        countEl.innerHTML = counter;
    }
});

// refresh tab onclik
const refreshBtn = document.getElementById('refreshBtn');

refreshBtn.onclick = ()=> {
    location.reload();
}