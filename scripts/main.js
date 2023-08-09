let inputAge = document.querySelector ('input[name="age"]');

inputAge.addEventListener ('change', (ev) => {
    let val = Number (ev.target.value);

    if ( val < 16 ) {
       console.log ('teen');

    } else if ( val >16 ) {
        console.log ('adult');
    } else {
        console.log ('older');
    }
});
 let inputName = document.querySelector ('input[name="name"]');
 
 inputName.addEventListener ('change', (ev) => {
    let val = (ev.target.value);
    let name = 'Katerinka'

    if (val === name) {
        console.log ('I');
    } else {
        console.log('Not Me');
    }
 });

let inputWik = document.querySelector ('input[name="wik"]');

inputWik.addEventListener('change', (ev) => {
    let val = Number (ev.target.value);
    console.log (val);
});

let gendr = document.querySelector ('select[name="gender"]');

gendr.addEventListener ('change', (ev) => {
    let val = (ev.target.value); 
    console.log (val);
});

let sent = document.querySelector ('button[type="submit"]');

sent.addEventListener('click', (ev) => {
    let val = (ev.target.submit); 
    
});