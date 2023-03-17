//import axios from "axios";

/*
export default axios.create({
  baseURL: "https://academic.pcru.ac.th/api",
  headers: {
    "Content-type": "application/json",
  },
});

*/
import axios from "axios";

export default axios.create({
  //baseURL: "https://localhost:8080/api",
  baseURL: "https://academic.pcru.ac.th/dev",
  headers: {
    "Content-type": "application/json",
  },
});

/*
export default axios.create({
  //baseURL: "https://localhost:8080/api",
  baseURL: "https://academic.pcru.ac.th/dev",
});
*/
