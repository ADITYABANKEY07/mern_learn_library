import axios from "axios";
import { useState } from "react";

const Display = () => {
  let [mydata, setMyData] = useState([]);
  let [empno, setEmpNo] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let api = `http://localhost:6001/employee/empsearch/?empno=${empno}`;
    let response = await axios.get(api);
    setMyData(response.data);
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Search Employee Data
      </h1>
      <input
        type="text"
        placeholder="Enter empno something..."
        onChange={(e) => {
          setEmpNo(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Search</button>
      <table>
        <thead>
          <th>empno</th>
          <th>name</th>
          <th>designation</th>
          <th>salary</th>
        </thead>
        <tbody>
          {mydata.map((item, index) => {
            return (
              <tr>
                <td>
                  <td>{item.empno}</td>
                  <td>{item.name}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
