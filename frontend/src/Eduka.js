import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

function Eduka() {
    const [Eduka, setEducBG] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/educback')
            .then(res => setEducBG(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (educationalID) => {
        try {
            await axios.delete('http://localhost:8081/educbg/'+educationalID);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='container'>
            <h1>BioCraft: Education Table</h1>
                <div className='mb-3'>
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                    <Link to="/create" className='btn btn-primary ms-2'>Back</Link>
                </div>
                <div className='table-responsive'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Educational Level</th>
                                <th>Educational Name</th>
                                <th>Educational Year Graduated</th>
                                <th>Applicant Number</th>
                                <th>MODIFY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Eduka.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.educationalLevel}</td>
                                    <td>{data.educationalName}</td>
                                    <td>{data.educationalYrGrad}</td>
                                    <td>{data.ApplicantNumber}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`/modify/${data.educationalID}`} className='btn btn-primary ms-2'>UPDATE</Link>
                                            <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.educationalID)}>Delete</button>
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

export default Eduka;
