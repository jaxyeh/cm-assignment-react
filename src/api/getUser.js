const getUser = () =>
  fetch("http://localhost:8080/user")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });

export default getUser;
