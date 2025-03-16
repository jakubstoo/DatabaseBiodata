import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

function Workstatt() {
    const [Workstatt, setWorkStat] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/workstammender')
            .then(res => setWorkStat(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (employmentID) => {
        try {
            await axios.delete('http://localhost:8081/workstat/'+employmentID);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='container'>
            <h1>BioCraft: Work History Table</h1>
                <div className='mb-3'>
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                    <Link to="/create" className='btn btn-primary ms-2'>Back</Link>
                </div>
                <div className='table-responsive'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Company Experience</th>
                                <th>Position from the Company</th>
                                <th>From Year</th>
                                <th>To Year</th>
                                <th>Applicant Number</th>
                                <th>MODIFY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Workstatt.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.expCompanyName}</td>
                                    <td>{data.positionOfCompany}</td>
                                    <td>{data.positionFromYear}</td>
                                    <td>{data.positionToYear}</td>
                                    <td>{data.ApplicantNumber}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`/develop/${data.employmentID}`} className='btn btn-primary ms-2'>UPDATE</Link>
                                            <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.employmentID)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Workstatt;