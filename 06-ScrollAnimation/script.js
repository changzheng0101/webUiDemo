const boxes = document.querySelectorAll(".box");

update();
window.addEventListener("scroll", update);

function update() {
  const triggerHeight = (window.innerHeight * 3) / 5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerHeight) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
}
