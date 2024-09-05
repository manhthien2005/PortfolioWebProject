const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*?";

document.querySelectorAll("p.copyright").forEach(p => {
  let interval = null;
  let effectDone = false;

  p.onmouseover = event => {
    if (effectDone) return; // Bỏ qua nếu hiệu ứng đã được thực hiện

    // Dừng tất cả các interval cũ của thẻ hiện tại
    clearInterval(interval);

    let iteration = 0;

    interval = setInterval(() => {
      event.target.innerText = Array.from(event.target.innerText)
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          // Giữ nguyên ký tự không thay đổi (bao gồm ký tự trong thẻ <i>)
          if (event.target.childNodes[index] && event.target.childNodes[index].nodeName === 'I') {
            return letter;
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
        effectDone = true; // Đánh dấu hiệu ứng đã được thực hiện
      }

      iteration += 1 / 3;
    }, 30);
  };

  p.onclick = event => {
    // Khi nhấp vào, đặt lại trạng thái hiệu ứng và kích hoạt lại
    effectDone = false;
    p.onmouseover(event);
  };
});
