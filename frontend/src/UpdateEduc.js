import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UpdateEduc() {
    const [educationalLevel, setEducationalLevel] = useState('');
    const [educationalName, setEducationalName] = useState('');
    const [educationalYrGrad, setEducationalYrGrad] = useState('');
    const [ApplicantNumber, setApplicantNumber] = useState('');
    const { educationalID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the current educational details based on educationalID
        axios.get(`http://localhost:8081/educbg/${educationalID}`)
            .then(res => {
                const data = res.data;
                setEducationalLevel(data.educationalLevel);
                setEducationalName(data.educationalName);
                setEducationalYrGrad(data.educationalYrGrad);
                setApplicantNumber(data.ApplicantNumber);
            })
            .catch(err => console.log(err));
    }, [educationalID]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/modify/${educationalID}`, {
            educationalLevel,
            educationalName,
            educationalYrGrad,
            ApplicantNumber
        })
        .then(res => {
            console.log(res);
            navigate('/educ');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <div className='container p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Education</h2>

                    <div className='mb-2'>
                        <label htmlFor="">Education Level</label>
                        <input type="text" placeholder='Enter Education Level' className='form-control'
                            value={educationalLevel}
                            onChange={e => setEducationalLevel(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">School/University</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                            value={educationalName}
                            onChange={e => setEducationalName(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Year Graduated</label>
                        <input type="number" placeholder='Enter Year' className='form-control'
                            value={educationalYrGrad}
                            onChange={e => setEducationalYrGrad(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Applicant Number</label>
                        <input type="text" placeholder='Enter Number' className='form-control'
                            value={ApplicantNumber}
                            onChange={e => setApplicantNumber(e.target.value)} />
                    </div>

                    <button type='submit' className='btn btn-success'>UPDATE</button>
                </form>
                <Link to="/create" className='btn btn-primary'>HOME</Link>
                <div>
                <Link to="/educ" className='btn btn-primary'>UNDO</Link>
                </div>
            </div>
        </div>
    );
}

export default UpdateEduc;
