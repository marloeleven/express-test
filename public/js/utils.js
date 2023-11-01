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


export function inputError(selector, message) {
  const el = document.querySelector(selector);
  el.classList.add('is-invalid');
  el.nextElementSibling.textContent = message;
}

export default { post }