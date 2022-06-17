import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_GITHUB,
});

const getGitHubUsers = (user) => {
  return axiosClient.get(`/search/users?q=${user}`);
};

const getGitHubUser = (login) => {
  return axiosClient.get(`/users/${login}`);
};

export { getGitHubUsers, getGitHubUser };
