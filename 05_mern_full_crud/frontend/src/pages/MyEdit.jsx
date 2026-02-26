import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const myEdit = () => {
    let {id} = useParams()
      let [form, setForm] = useState({});
        let loadData = async () => {
    let api = `http://localhost:6001/employee/empedit/?id=${id}`;
    axios.get(api).then((res) => {
      setForm(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
    let handleSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:6001/employee/editedDataRec";
    let response = await axios.post(api, form);
    console.log("Form edited", response.data);
    alert("Updated successfully")
    loadData()
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(form);
  };
  return (
    <div>
        <h1>My Edit Data{id}</h1>
         <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 mt-1"
            onChange={handleChange}
            name="empno"
            value={form.empno}
            placeholder="Enter your empno"
          />{" "}
          <br />
          <input
            type="text"
            className="border-2 mt-1"
            onChange={handleChange}
            name="name"
            value={form.name}
            placeholder="Enter your name"
          />{" "}
          <br />
          <input
            type="text"
            className="border-2 mt-1"
            onChange={handleChange}
            name="designation"
            value={form.designation}
            placeholder="Enter your designation"
          />{" "}
          <br />
          <input
            type="text"
            className="border-2 mt-1"
            onChange={handleChange}
            name="salary"
            value={form.salary}
            placeholder="Enter your salary"
          />{" "}
          <br />
          <button
            type="submit"
            className="px-3 py-2 bg-orange-800 text-white font-semibold"
          >
            Update
          </button>
        </form>
    </div>
  )
}

export default myEdit