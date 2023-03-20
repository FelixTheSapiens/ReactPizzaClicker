export function nicelyRounded(naughtyNumber) {
  return Math.round((naughtyNumber + Number.EPSILON) * 100) / 100
}

export function playSound(sound) {
  let audio = new Audio(sound);
  audio.play();
}