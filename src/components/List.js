import Button from "react-bootstrap/Button";
import React from 'react'
import Table from 'react-bootstrap/Table';
const List = ({employees,handleEdit,handleDelete}) => {
  return (
    <div className="table">
    <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>Emp Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>DOB</th>
          <th>Mobile No.</th>
          <th>City</th>
          <th colSpan={2} className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
      {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.address}</td>
                                <td>{employee.date}</td>
                                <td>{employee.mobile} </td>
                                <td>{employee.city} </td>
                                <td className="text-right">
                                    <Button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </Button>
                                </td>
                                <td className="text-left">
                                    <Button variant="danger"
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
      </tbody>
    </Table>

    </div>
  )
}

export default List