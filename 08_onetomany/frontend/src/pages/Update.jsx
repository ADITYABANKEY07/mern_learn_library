import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const Update = () => {
  let navigate = useNavigate()
  let [mydata, setMyData] = useState([]);
  let loadData = async () => {
    let api = "http://localhost:6001/employee/display";
    axios.get(api).then((res) => {
      setMyData(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  let addMore = (id) => {
    navigate(`/addbook/${id}`)
  }
return (
  <div>
    <h1 style={{ fontSize: "40px" }}>
      Update Employee Data
    </h1>

    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Author Name</th>
          <th>Email</th>
          <th>Book Name</th>
          <th>Price</th>
          <th>Edit</th>
        </tr>
      </thead>

      <tbody>
        {mydata.map((item, index) => (
          <tr key={index}>
            <td>{item.authorname}</td>
            <td>{item.email}</td>

            <td>
              {item.books?.map((book, i) => (
                <div key={i}>{book.bookname}</div>
              ))}
            </td>

            <td>
              {item.books?.map((book, i) => (
                <div key={i}>{book.price}</div>
              ))}
            </td>

            <td>
              <button className="px-3 py-2 text-white bg-amber-600 font-semibold" onClick={() => addMore(item._id)}>
                Add More
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default Update;
