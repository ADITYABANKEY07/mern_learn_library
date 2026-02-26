import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const Update = () => {
  let navigate = useNavigate()
  let [mydata, setMyData] = useState([]);
  // let [form, setForm] = useState({
  //   empno: "",
  //   name: "",
  //   designation: "",
  //   salary: "",
  // });
  // let [editOpen, setEditOpen] = useState(false);
  let loadData = async () => {
    let api = "http://localhost:6001/employee/update";
    axios.get(api).then((res) => {
      setMyData(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  let myDel = async (id) => {
    let api = `http://localhost:6001/employee/recorddel/?id=${id}`;
    let response = await axios.get(api);
    console.log(response.data);
    alert("Data deleted");
    loadData();
  };
  let myEdit = (id) => {
    navigate(`/edit/${id}`)
  }
  // let myEdit = async (id) => {
  //   let api = `http://localhost:6001/employee/getrec/?id=${id}`;
  //   let response = await axios.get(api);
  //   setForm(response.data);
  //   setEditOpen(true);
  // };

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let api = "http://localhost:6001/employee/editedDataRec";
  //   let response = await axios.post(api, form);
  //   console.log("Form edited", response.data);
  //   alert("Updated successfully")
  //   loadData()
  //   setEditOpen(false)
  // };

  // let handleChange = (e) => {
  //   let { name, value } = e.target;
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  //   console.log(form);
  // };
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Update Employee Data
      </h1>
      <table>
        <thead>
          <th className="uppercase">empno</th>
          <th className="uppercase">name</th>
          <th className="uppercase">designation</th>
          <th className="uppercase">salary</th>
          <th className="uppercase">edit</th>
          <th className="uppercase">delete</th>
        </thead>
        <tbody>
          {mydata.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.empno}</td>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>

                <td>
                  <button
                    className="px-3 py-2 bg-green-500 text-white font-semibold rounded-3xl mt-1"
                    onClick={() => {
                      myEdit(item._id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="px-3 py-2 bg-red-500 text-white font-semibold rounded-3xl mt-1"
                    onClick={() => {
                      myDel(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
       {/* {editOpen ? (
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
      ) : (
        <h1>No edit form found</h1>
      )} */}
    </div>
  );
};

export default Update;
