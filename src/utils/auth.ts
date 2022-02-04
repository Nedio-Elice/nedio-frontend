import { getState, setState, removeState } from './localStorage';

const TOKEN = 'NEDIO_JWT';

function getToken() {
  const token = getState(TOKEN);
  return token;
}

function setToken(token: string) {
  setState(TOKEN, token);
  return token;
}

function removeToken() {
  removeState(TOKEN);
}

export { getToken, setToken, removeToken };
