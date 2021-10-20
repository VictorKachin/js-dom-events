const EXP = document.querySelector('#experiment');
const CR = document.querySelector('#current-result');
const RL = document.querySelector('#result-list');

const createAction = (event) => {
    CR.innerText = event.type;
    RL.innerHTML = '<p>' + event.type + '</p>' + RL.innerHTML;
} 

EXP.addEventListener('click', createAction);

EXP.addEventListener('dblclick', createAction);