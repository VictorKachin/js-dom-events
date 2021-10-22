const EXP = document.querySelector("#experiment");
const CR = document.querySelector("#current-result");
const RL = document.querySelector("#result-list");

const createAction = (event) => {
  const newRow = document.createElement("p");
  newRow.innerText = event.type;

  CR.innerText = event.type;
  RL.prepend(newRow);
};

EXP.addEventListener("click", createAction);
EXP.addEventListener("dblclick", createAction);
EXP.addEventListener("contextmenu", createAction);

EXP.addEventListener("mouseover", createAction);
EXP.addEventListener("mouseout", createAction);
EXP.addEventListener("mouseenter", createAction);
EXP.addEventListener("mouseleave", createAction);

EXP.addEventListener("focus", createAction);
EXP.addEventListener("blur", createAction);
