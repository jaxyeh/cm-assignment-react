const getUser = () =>
  fetch("http://localhost:8080/user").then((response) => response.json());

export default getUser;
