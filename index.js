

const showChild = async (e) => {
    e.target.classList.toggle('hidden')
    e.target.nextElementSibling.classList.toggle('hidden')
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('hidden')
}

const showParent  = (e) => {
    e.target.classList.toggle('hidden')
    e.target.previousElementSibling.classList.toggle('hidden')
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('hidden')
}


const plusIcons = document.querySelectorAll(".acc-item-plus-icon");
for(let i = 0; i < plusIcons.length; i++){
  plusIcons[i].addEventListener("click",showChild);
}

const minusIcons = document.querySelectorAll(".acc-item-minus-icon");
for(let i = 0; i < minusIcons.length; i++){
  minusIcons[i].addEventListener("click",showParent);
}



