import axios from "axios";
export class NodeService {
  async getData() {
    const res = await axios.get("http://localhost:3002/data");
    console.log(res);
    console.log(res.data);
    //return "data" in res.data ? res.data["data"] : [];
    return res.data ? res.data : [];
  }
}

/*
export default axios.create({
  baseURL: "http://localhost:3001",
});


*/
