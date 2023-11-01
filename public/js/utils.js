export function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
}


export function setErrorMessage(el, message) {
  const messageEl = el.closest('.input').querySelector('.message')
  messageEl.textContent = message;
}

export function debounce(fn, delay = 250) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

export default {  }