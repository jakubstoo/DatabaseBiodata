import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

function Workrecc() {
    const [Workrecc, setWorkReco] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/workrecommender')
            .then(res => setWorkReco(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (characterRefID) => {
        try {
            await axios.delete('http://localhost:8081/workreco/'+characterRefID);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='container'>
            <h1>BioCraft: Recommender Table</h1>
                <div className='mb-3'>
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                    <Link to="/create" className='btn btn-primary ms-2'>Back</Link>
                </div>
                <div className='table-responsive'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Recommender</th>
                                <th>Company of Recommender</th>
                                <th>Contact Number of Recommender</th>
                                <th>Position of Recommender</th>
                                <th>Applicant Number</th>
                                <th>MODIFY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Workrecc.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.recommendedBy}</td>
                                    <td>{data.recommendeeCompanyName}</td>
                                    <td>{data.recommendeeContactNo}</td>
                                    <td>{data.recommendeePosition}</td>
                                    <td>{data.ApplicantNumber}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`/change/${data.characterRefID}`} className='btn btn-primary ms-2'>UPDATE</Link>
                                            <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.characterRefID)}>Delete</button>
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

export default Workrecc;