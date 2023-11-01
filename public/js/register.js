import * as utils from './utils.js';

const formEl = document.querySelector('form');
const messageEl = document.querySelector('.message');
const registerBtn = document.querySelector('.register button');

const usernameInput = document.querySelector('input[name=username]');
const passwordInput = document.querySelector('input[name=password]');
const verifyPasswordInput = document.querySelector('input[name=verify_password]');

const validation = {
  first_name: false,
  middle_name: true, // optional
  last_name: false,
  birth_date: false,
  description: true, // optional
  avatar: false,
  username: false,
  password: false,
}

usernameInput.addEventListener('input', utils.debounce(async (event) => {
  const value = event.target.value.trim();
  if (value.length < 3) {
    utils.setErrorMessage(usernameInput, '');
    return;
  }

  try {
    const result = await utils.post('/api/username', { username: value });

    if (result.exists) {
      utils.setErrorMessage(usernameInput, 'Username already exists');
      return;
    }
  } catch (err) {
    console.log('err', err);
  }
}))
// utils.setErrorMessage(usernameInput, 'Username must be at least 3 characters long');

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);

  const first_name = formData.get('first_name');
  const middle_name = formData.get('middle_name');
  const last_name = formData.get('last_name');
  const birth_date = formData.get('birth_date');
  const description = formData.get('description');

  const username = formData.get('username');
  const password = formData.get('password');
  const verify_password = formData.get('verify_password');

  return

  if (!username || !password) {
    showMessage('Username or password is empty');
    return;
  }

  try {
    registerBtn.disabled = true;
    const result = await login(username, password);

    messageEl.classList.remove('text-error');
    messageEl.classList.remove('text-success');
    if (result.errors) {
      messageEl.textContent = result.errors[0];
      messageEl.classList.add('text-error');

      registerBtn.disabled = false;
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

  registerBtn.disabled = false;
});


// AVATAR

const avatarContainer = document.querySelector('.avatar-container');
const left = avatarContainer.querySelector('.left');
const right = avatarContainer.querySelector('.right');
const avatarList = avatarContainer.querySelector('ul');
const avatars = avatarContainer.querySelectorAll('.avatar');

const width = 100;
const gap = 25;
let avatarIndex = 0;

const avatarEnum = [
  'boy-1',
  'boy-2',
  'boy-3',
  'boy-4',
  'girl-1',
  'girl-2',
  'girl-3',
  'girl-4',
]

const computeScroll = (index) => {
  return (width + gap) * index;
}

left.onclick = () => {
  const scrollLeft = avatarList.scrollLeft;
  avatarIndex = Math.max(0, avatarIndex - 1)

  avatarList.scrollTo({
    left: computeScroll(avatarIndex),
    behavior: 'smooth'
  });
}

right.onclick = () => {
  const scrollLeft = avatarList.scrollLeft;
  avatarIndex = Math.min(avatars.length, avatarIndex + 1)

  avatarList.scrollTo({
    left: computeScroll(avatarIndex),
    behavior: 'smooth'
  });

}