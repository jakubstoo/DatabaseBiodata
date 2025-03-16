import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UpdateWorkStatu() {
    const [expCompanyName, setExpCompanyName] = useState('');
    const [positionOfCompany, setPositionOfCompany] = useState('');
    const [positionFromYear, setPositionFromYear] = useState('');
    const [positionToYear, setPositionToYear] = useState('');
    const [ApplicantNumber, setApplicantNumber] = useState('');
    const { employmentID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the current educational details based on educationalID
        axios.get(`http://localhost:8081/workstat/${employmentID}`)
            .then(res => {
                const data = res.data;
                setExpCompanyName(data.expCompanyName);
                setPositionOfCompany(data.positionOfCompany);
                setPositionFromYear(data.positionFromYear);
                setPositionToYear(data.positionToYear);
                setApplicantNumber(data.ApplicantNumber);
            })
            .catch(err => console.log(err));
    }, [employmentID]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/develop/${employmentID}`, {
            expCompanyName,
            positionOfCompany,
            positionFromYear,
            positionToYear,
            ApplicantNumber
        })
        .then(res => {
            console.log(res);
            navigate('/stat');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <div className='container p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Work Status</h2>

                    <div className='mb-2'>
                                <label htmlFor="">Company Experience</label>
                                <input type="text" placeholder='Enter Company Name' className='form-control' onChange={e => setExpCompanyName(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Position from the Company</label>
                                <input type="text" placeholder='Enter Position' className='form-control' onChange={e => setPositionOfCompany(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">From Year</label>
                                <input type="number" placeholder='Enter Contact Number' className='form-control' onChange={e => setPositionFromYear(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">To Year</label>
                                <input type="number" placeholder='Enter Position' className='form-control' onChange={e => setPositionToYear(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Applicant Number</label>
                                <input type="text" placeholder='Enter Applicant Number' className='form-control' onChange={e => setApplicantNumber(e.target.value)} />
                            </div>

                    <button type='submit' className='btn btn-success'>UPDATE</button>
                </form>
                <Link to="/create" className='btn btn-primary'>HOME</Link>
                <div>
                <Link to="/stat" className='btn btn-primary'>UNDO</Link>
                </div>
                
            </div>
        </div>
    );
}

export default UpdateWorkStatu;

/*import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UpdateWorkStatu() {
    const [expCompanyName, setExpCompanyName] = useState('');
    const [positionOfCompany, setPositionOfCompany] = useState('');
    const [positionFromYear, setPositionFromYear] = useState('');
    const [positionToYear, setPositionToYear] = useState('');
    const [ApplicantNumber, setApplicantNumber] = useState('');
    const { employmentID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/workstat/${employmentID}`)
            .then(res => {
                console.log('Response data:', res.data); // Debugging log
                const data = res.data;
                setExpCompanyName(data.expCompanyName);
                setPositionOfCompany(data.positionOfCompany);
                setPositionFromYear(data.positionFromYear);
                setPositionToYear(data.positionToYear);
                setApplicantNumber(data.ApplicantNumber);
            })
            .catch(err => console.log(err));
    }, [employmentID]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/develop/${employmentID}`, {
            expCompanyName,
            positionOfCompany,
            positionFromYear,
            positionToYear,
            ApplicantNumber
        })
        .then(res => {
            console.log(res);
            navigate('/stat');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <div className='container p-3'>
                <h2>Update Work Status</h2>
                <h4>Applicant Number: {ApplicantNumber}</h4>
                <form onSubmit={handleSubmit}>

                    <div className='mb-2'>
                        <label htmlFor="expCompanyName">Company Experience</label>
                        <input 
                            type="text" 
                            id="expCompanyName"
                            placeholder='Enter Company Name' 
                            className='form-control' 
                            value={expCompanyName} 
                            onChange={e => setExpCompanyName(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="positionOfCompany">Position from the Company</label>
                        <input 
                            type="text" 
                            id="positionOfCompany"
                            placeholder='Enter Position' 
                            className='form-control' 
                            value={positionOfCompany} 
                            onChange={e => setPositionOfCompany(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="positionFromYear">From Year</label>
                        <input 
                            type="number" 
                            id="positionFromYear"
                            placeholder='Enter Start Year' 
                            className='form-control' 
                            value={positionFromYear} 
                            onChange={e => setPositionFromYear(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="positionToYear">To Year</label>
                        <input 
                            type="number" 
                            id="positionToYear"
                            placeholder='Enter End Year' 
                            className='form-control' 
                            value={positionToYear} 
                            onChange={e => setPositionToYear(e.target.value)} 
                        />
                    </div>

                    <button type='submit' className='btn btn-success'>UPDATE</button>
                </form>
                <Link to="/create" className='btn btn-primary'>HOME</Link>
                <div>
                    <Link to="/stat" className='btn btn-primary'>UNDO</Link>
                </div>
            </div>
        </div>
    );
}

export default UpdateWorkStatu;
*/