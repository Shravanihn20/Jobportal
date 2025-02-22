import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData("users").then(setEmployees);
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>{employees.map(emp => (<li key={emp.id}>{emp.name}</li>))}</ul>
    </div>
  );
};

export default Employees;
