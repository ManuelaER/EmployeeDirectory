import express from "express";
import employees from "./db/employees.js";

const app = express();

app.route("/").get((req, res) => {
    res.send("Hello employees!")
});

app.route("/employees").get((req, res) => {
    res.send(employees);
});

// app.route("/employees/:id").get((req, res) => {
//     const { id } = req.params;
//     const employee = employees.find((emp) => emp.id === +id);
    
//     res.status(200).send(employee);
// });

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  res.status(200).send(randomEmployee);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((emp) => emp.id == id);  

  if (!employee) {
    return res.status(404).send("This employee does not exist.");
  }

  res.status(200).send(employee);
});

    
export default app;