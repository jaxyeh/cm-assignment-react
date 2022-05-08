export default () =>
  fetch("http://localhost:8080/recipes").then((response) => response.json());
