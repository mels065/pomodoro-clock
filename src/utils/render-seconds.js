function renderSeconds(seconds) {
  if (seconds < 10) return `0${seconds}`;
  else return `${seconds}`;
}

export {renderSeconds};
