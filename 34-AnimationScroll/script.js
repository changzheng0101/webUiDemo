// Store progress bar in var
const progressBar = document.querySelector(".progressBar");


function updateProgress() {
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScrollHeight = scrollHeight - windowHeight;
    progressBar.style.width = `${(window.scrollY / maxScrollHeight) * 100}%`;
}


// Call function on page scroll
window.addEventListener('scroll', () => {
    updateProgress();
})


