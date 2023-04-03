export function nicelyRounded(naughtyNumber) {
  return Math.round((naughtyNumber + Number.EPSILON) * 100) / 100
}

export function playSound(sound) {
  const audio = new Audio(sound);
  audio.play();
}