import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UpdateApplicant() {
    const [ApplicantName, setApplicantName] = useState('');
    const [ApplicationDate, setApplicationDate] = useState('');
    const [PositionDesired, setPositionDesired] = useState('');
    const [DegreeReceived, setDegreeReceived] = useState('');
    const [SpecialSkills, setSpecialSkills] = useState('');
    const [CityAddress, setCityAddress] = useState('');
    const [ProvincialAddress, setProvincialAddress] = useState('');
    const [Email, setEmail] = useState('');
    const [Cellphone, setCellphone] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [BirthDate, setBirthDate] = useState('');
    const [BirthPlace, setBirthPlace] = useState('');
    const [Gender, setGender] = useState('');
    const [CivilStatus, setCivilStatus] = useState('');
    const [Citizenship, setCitizenship] = useState('');
    const [NumChildren, setNumChildren] = useState('');
    const [HeightCM, setHeightCM] = useState('');
    const [WeightKG, setWeightKG] = useState('');
    const [Religion, setReligion] = useState('');
    const [Languages, setLanguages] = useState('');
    const [FatherName, setFatherName] = useState('');
    const [MotherName, setMotherName] = useState('');
    const [EmergencyPerson, setEmergencyPerson] = useState('');
    const [EmergencyPersonAddress, setEmergencyPersonAddress] = useState('');
    const [EmergencyPersonCellphone, setEmergencyPersonCellphone] = useState('');
    const { ApplicantNumber } = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        if (!ApplicantName || !CityAddress || !Email || !BirthDate || !BirthPlace || !Gender || !CivilStatus) {
            alert('Please fill in all required fields.');
            return;
        }

        axios.put('http://localhost:8081/update/'+ApplicantNumber, { ApplicantName, ApplicationDate, PositionDesired, DegreeReceived, SpecialSkills, CityAddress, ProvincialAddress, Email, Cellphone, Telephone, BirthDate, BirthPlace, Gender, CivilStatus, Citizenship, NumChildren, HeightCM, WeightKG, Religion, Languages, FatherName, MotherName, EmergencyPerson, EmergencyPersonAddress, EmergencyPersonCellphone
        })
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.error(err));
    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <div className='container p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Information</h2>

                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setApplicantName(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Date</label>
                        <input type="date" className='form-control' onChange={e => setApplicationDate(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Position Desired</label>
                        <input type="text" placeholder='Enter Position' className='form-control' onChange={e => setPositionDesired(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Degree</label>
                        <input type="text" placeholder='Enter Degree Received' className='form-control' onChange={e => setDegreeReceived(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Special Skills</label>
                        <input type="text" placeholder='Enter Special Skills' className='form-control' onChange={e => setSpecialSkills(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">City Address</label>
                        <input type="text" placeholder='Enter Address' className='form-control' onChange={e => setCityAddress(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Provincial Address</label>
                        <input type="text" placeholder='Enter Address' className='form-control' onChange={e => setProvincialAddress(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' className='form-control' onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Cellphone</label>
                        <input type="number" placeholder='Enter Number' className='form-control' onChange={e => setCellphone(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Telephone</label>
                        <input type="text" placeholder='Enter Number' className='form-control' onChange={e => setTelephone(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Birth Date</label>
                        <input type="date" className='form-control' onChange={e => setBirthDate(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Birth Place</label>
                        <input type="text" placeholder='Enter Birth Place' className='form-control' onChange={e => setBirthPlace(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label>Gender</label><br />
                        <input type="radio" id="male" name="Gender" value="M" onChange={e => setGender(e.target.value)} />
                        <label htmlFor="male">Male</label><br />

                        <input type="radio" id="female" name="Gender" value="F" onChange={e => setGender(e.target.value)} />
                        <label htmlFor="female">Female</label><br />
                    </div>

                    <div className='mb-2'>
                        <label>Civil Status</label><br />
                        <input type="radio" id="single" name="CivilStatus" value="S" onChange={e => setCivilStatus(e.target.value)} />
                        <label htmlFor="single">Single</label><br />

                        <input type="radio" id="married" name="CivilStatus" value="F" onChange={e => setCivilStatus(e.target.value)} />
                        <label htmlFor="married">Married</label><br />

                        <input type="radio" id="widowed" name="CivilStatus" value="W" onChange={e => setCivilStatus(e.target.value)} />
                        <label htmlFor="widowed">Widowed</label><br />

                        <input type="radio" id="divorced" name="CivilStatus" value="D" onChange={e => setCivilStatus(e.target.value)} />
                        <label htmlFor="divorced">Divorced</label><br />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Citizenship</label>
                        <input type="text" placeholder='Enter Citizenship' className='form-control' onChange={e => setCitizenship(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Children</label>
                        <input type="number" className='form-control' onChange={e => setNumChildren(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Height (in cm)</label>
                        <input type="text" placeholder='Enter Height' className='form-control' onChange={e => setHeightCM(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Weight (in kg)</label>
                        <input type="text" placeholder='Enter Weight' className='form-control' onChange={e => setWeightKG(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Religion</label>
                        <input type="text" placeholder='Enter Religion' className='form-control' onChange={e => setReligion(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Language (separated by comma)</label>
                        <input type="text" placeholder='Enter Language' className='form-control' onChange={e => setLanguages(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Father's Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setFatherName(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Mother's Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setMotherName(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Emergency Person's Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setEmergencyPerson(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Emergency Person's Address</label>
                        <input type="text" placeholder='Enter Address' className='form-control' onChange={e => setEmergencyPersonAddress(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Emergency Person's Cellphone</label>
                        <input type="number" className='form-control' onChange={e => setEmergencyPersonCellphone(e.target.value)} />
                    </div>

                    <button type="submit" className='btn btn-success'>UPDATE</button>
                </form>
                <Link to="/create" className='btn btn-primary'>HOME</Link>
                <div>
                <Link to="/" className='btn btn-primary'>UNDO</Link>
                </div>
            </div>
        </div>
    );
}

export default UpdateApplicant
