var windowActive = true;

window.addEventListener('focus', () => {windowActive = true});
window.addEventListener('blur', () => {windowActive = false});

export function fpsMeter() {
  let prevTime = Date.now(), frames = 0;
  let element = document.body;

  requestAnimationFrame(function loop() {
    const time = Date.now();
    frames++;
    if (time > prevTime + 1000) {
      let fps = Math.round((frames * 1000) / (time - prevTime));
      prevTime = time;
      frames = 0;

      //console.log(windowActive, (fps < 30 & windowActive));
      (fps < 30 & windowActive) && element.classList.add("noAnimation")
    }

    requestAnimationFrame(loop);
  });
}