import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

function Applicatn() {
    const [Applicatn, setApplicant] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/applicants')
            .then(res => setApplicant(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (ApplicantNumber) => {
        try {
            await axios.delete('http://localhost:8081/applicant/'+ApplicantNumber);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='container'>
                <h1>BioCraft: Applicant Table</h1>
                <div className='mb-3'>
                    <Link to="/create" className='btn btn-success'>ADD +</Link>
                    <Link to="/create" className='btn btn-primary ms-2'>HOME</Link>
                </div>
                <div className='table-responsive'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Date Applied</th>
                                <th>Degree</th>
                                <th>Skills</th>
                                <th>City Address</th>
                                <th>Provincial Address</th>
                                <th>Email</th>
                                <th>Cellphone</th>
                                <th>Telephone</th>
                                <th>BirthDate</th>
                                <th>BirthPlace</th>
                                <th>Gender</th>
                                <th>CivilStatus</th>
                                <th>Citizenship</th>
                                <th>NumChildren</th>
                                <th>HeightKG</th>
                                <th>WeightCM</th>
                                <th>Religion</th>
                                <th>Languages</th>
                                <th>FatherName</th>
                                <th>MotherName</th>
                                <th>EmergencyPerson</th>
                                <th>EmergencyPersonAddress</th>
                                <th>EmergencyPersonCellphone</th>
                                <th>MODIFY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Applicatn.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ApplicantName}</td>
                                    <td>{data.PositionDesired}</td>
                                    <td>{data.ApplicationDate}</td>
                                    <td>{data.DegreeReceived}</td>
                                    <td>{data.SpecialSkills}</td>
                                    <td>{data.CityAddress}</td>
                                    <td>{data.ProvincialAddress}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.Cellphone}</td>
                                    <td>{data.Telephone}</td>
                                    <td>{data.Birthdate}</td>
                                    <td>{data.BirthPlace}</td>
                                    <td>{data.Gender}</td>
                                    <td>{data.CivilStatus}</td>
                                    <td>{data.Citizenship}</td>
                                    <td>{data.NumChildren}</td>
                                    <td>{data.HeightCM}</td>
                                    <td>{data.WeightKG}</td>
                                    <td>{data.Religion}</td>
                                    <td>{data.Languages}</td>
                                    <td>{data.FatherName}</td>
                                    <td>{data.MotherName}</td>
                                    <td>{data.EmergencyPerson}</td>
                                    <td>{data.EmergencyPersonAddress}</td>
                                    <td>{data.EmergencyPersonCellphone}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`update/${data.ApplicantNumber}`} className='btn btn-primary ms-2'>UPDATE</Link>
                                            <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ApplicantNumber)}>DELETE</button>
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

export default Applicatn;
