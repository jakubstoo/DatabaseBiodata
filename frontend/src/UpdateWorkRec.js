import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UpdateWorkRec() {
    const [recommendedBy, setRecommendedBy] = useState('');
    const [recommendeeCompanyName, setRecommendeeCompanyName] = useState('');
    const [recommendeeContactNo, setRecommendeeContactNo] = useState('');
    const [recommendeePosition, setRecommendeePosition] = useState('');
    const [ApplicantNumber, setApplicantNumber] = useState('');
    const { characterRefID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the current educational details based on educationalID
        axios.get(`http://localhost:8081/workreco/${characterRefID}`)
            .then(res => {
                const data = res.data;
                setRecommendedBy(data.recommendedBy);
                setRecommendeeCompanyName(data.recommendeeCompanyName);
                setRecommendeeContactNo(data.recommendeeContactNo);
                setRecommendeePosition(data.recommendeePosition);
                setApplicantNumber(data.ApplicantNumber);
            })
            .catch(err => console.log(err));
    }, [characterRefID]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/change/${characterRefID}`, {
            recommendedBy,
            recommendeeCompanyName,
            recommendeeContactNo,
            recommendeePosition,
            ApplicantNumber
        })
        .then(res => {
            console.log(res);
            navigate('/reco');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <div className='container p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Recommender</h2>

                    <div className='mb-2'>
                                <label htmlFor="">Recommended By</label>
                                <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setRecommendedBy(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Company Name</label>
                                <input type="text" placeholder='Enter Company Name' className='form-control' onChange={e => setRecommendeeCompanyName(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Contact Number</label>
                                <input type="number" placeholder='Enter Contact Number' className='form-control' onChange={e => setRecommendeeContactNo(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Position</label>
                                <input type="text" placeholder='Enter Position' className='form-control' onChange={e => setRecommendeePosition(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Applicant Number</label>
                                <input type="text" placeholder='Enter Applicant Number' className='form-control' onChange={e => setApplicantNumber(e.target.value)} />
                            </div>

                    <button type='submit' className='btn btn-success'>UPDATE</button>
                </form>
                <Link to="/create" className='btn btn-primary'>HOME</Link>
                <div>
                <Link to="/reco" className='btn btn-primary'>UNDO</Link>
                </div>
            </div>
        </div>
    );
}

export default UpdateWorkRec;