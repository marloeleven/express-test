const formEl = document.querySelector('form');
const messageEl = document.querySelector('.message');
const loginBtn = document.querySelector('.login button');

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);

  const username = formData.get('username');
  const password = formData.get('password');

  if (!username || !password) {
    showMessage('Username or password is empty');
    return;
  }

  try {
    loginBtn.disabled = true;
    const result = await login(username, password);

    messageEl.classList.remove('text-error');
    messageEl.classList.remove('text-success');
    if (result.errors) {
      messageEl.textContent = result.errors[0];
      messageEl.classList.add('text-error');

      loginBtn.disabled = false;
      return;
    }

    messageEl.textContent = 'Login successful';
    messageEl.classList.add('text-success');

    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  } catch (err) {
    console.log('err', err);
  }

  loginBtn.disabled = false;
});

const login = async (username, password) => {
  const response = await fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.json();
}