import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000";

export default {
  getData(page) {
    return axios
      .get(`http://localhost:3000`, {
        params: {
          type: "dog",
          page: page,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  },
};
