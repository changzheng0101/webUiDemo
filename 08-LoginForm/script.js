const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map((item, index) => `<span style="transition-delay:${index*20}ms">${item}</span>`)
        .join("")
})