function debounce<Params extends any[]>(callback: () => any, wait = 500) {
  let timer: NodeJS.Timeout;

  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, wait);
  };
}

function throttle<Params extends any[]>(callback: () => any, wait = 1000) {
  let timer: NodeJS.Timeout | null;

  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        callback();
      }, wait);
    }
  };
}

export { debounce, throttle };
