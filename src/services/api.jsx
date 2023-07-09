import axios from "axios";

const BASE_URL = 'http://localhost:3000';

function register(body){
  const promise = axios.post(`${BASE_URL}/users`, body);
  return promise;
}

function signIn(body){
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function insertLink(body){
  const promise = axios.post(`${BASE_URL}/links`, body);
  return promise;
}

function getLinks(){
  const promise = axios.get(`${BASE_URL}/links`);
  return promise;
}

const api = { signIn, register, insertLink, getLinks }

export default api;