const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*?";

document.querySelectorAll("span").forEach(span => {
  let interval = null;

  span.onmouseover = event => {
    // Dừng tất cả các interval cũ của span hiện tại
    clearInterval(interval);

    let iteration = 0;

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 46)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
});
