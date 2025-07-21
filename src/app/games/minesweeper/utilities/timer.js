function getCurrentTime() {
  return new Date();
}

function getElapsedTime(startTime) {
  const total = Date.parse(getCurrentTime()) - Date.parse(startTime);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);

  return {
    total,
    hours,
    minutes,
    seconds,
  };
}

export { getCurrentTime, getElapsedTime };
