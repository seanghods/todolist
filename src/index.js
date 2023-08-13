import './style.css';



const createButton = document.querySelector(".create");
createButton.addEventListener('click', toggleCreate);

function toggleCreate() {
    const modal = document.querySelector(".create-modal")
    modal.classList.toggle("active");
}
