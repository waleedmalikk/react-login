import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import axios from "axios";
import useLogin from "./Context";
import { useNavigate } from "react-router-dom";

function Table() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const stuff = useLogin();
    const navigate = useNavigate();
    const local_token = JSON.parse(localStorage.getItem('user_token'))

  const config = {
    headers: {
      authorization: `bearer ${local_token}`,
    },
  };
    
    function handleSignOut() {
        localStorage.clear();
        navigate('/login')
    }

    async function handleDelete(row) {
    const client = axios.create({
      baseURL: "http://localhost:5000/api/users/delete/" + row.email,
    });
    try {
      const response = await client.delete("", config);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  }

  async function handleUpdate(row) {
    stuff.set_email_to_upd(row.email);
    navigate("/update");
  }

    async function getTableData() {
    const client = axios.create({ baseURL: "http://localhost:5000/api/users" });
    try {
      const response = await client.get("", config);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTableData();
  }, []);
  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Action",
      selector: (row) => (
        <button
          onClick={() => {
            handleDelete(row);
          }}
        >
          Delete
        </button>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <button
          onClick={() => {
            handleUpdate(row);
          }}
        >
          Update
        </button>
      ),
    }
  ];
  return (
      <div className="table">
          <button onClick={handleSignOut}>Sign Out</button>
      <DataTable className="table" title="Users:" columns={columns} data={data} pagination />
      </div>
  );
}
export default Table;
