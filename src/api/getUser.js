export default () =>
  fetch("http://localhost:8080/user").then((response) => response.json());
