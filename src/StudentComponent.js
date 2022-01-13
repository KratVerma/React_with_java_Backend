import React, { useState, useEffect } from 'react';
import fetchStudents from './APIService';


export default function StudentComponent() {
    let [students, setStudents] = useState([]);
    let [val, setVal] = useState(0);
    useEffect(() => {
        fetchStudents()
            .then(data => {
                console.log(data.data)
                let obj = data.data;
                setStudents([obj])
            })

    }, [val])
    useEffect(() => {
        console.log("val updated", val)
        return () => {
            console.log("cleanup done")
        }
    }, [val])

    return (
        <div>
            <button onClick={() => { setVal(val + 1) }}>Clicked {val} times </button>
            <h2 className="text-center">student Details</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Student dob</th>
                        <th>Student email</th>
                        <th>Student age</th>
                    </tr>
                </thead>
                <tbody>

                    {students.map(std => RowData(std))}

                </tbody>

            </table>
        </div>
    )
}

function RowData(row) {
    return (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.dob}</td>
            <td>{row.email}</td>
            <td>{row.age}</td>
        </tr>
    )
}