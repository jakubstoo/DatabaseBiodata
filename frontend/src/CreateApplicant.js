import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

function CreateApplicant() {
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
    

    // Educational Background States
    const [EducationalLevel, setEducationalLevel] = useState('');
    const [EducationalName, setEducationalName] = useState('');
    const [EducationalYrGrad, setEducationalYrGrad] = useState('');
    const [ApplicantNumber, setApplicantNumber] = useState('');
    const navigate = useNavigate();

    // Work Recommendation States
    const [RecommendedBy, setRecommendedBy] = useState('');
    const [RecommendeeCompanyName, setRecommendeeCompanyName] = useState('');
    const [RecommendeeContactNo, setRecommendeeContactNo] = useState('');
    const [RecommendeePosition, setRecommendeePosition] = useState('');

    // Workstat States
    const [ExpCompanyName, setExpCompanyName] = useState('');
    const [PositionOfCompany, setPositionOfCompany] = useState('');
    const [PositionFromYear, setPositionFromYear] = useState('');
    const [PositionToYear, setPositionToYear] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!ApplicantName || !CityAddress || !Email || !BirthDate || !BirthPlace || !Gender || !CivilStatus) {
            alert('Please fill in all required fields.');
            return;
        }

        axios.post('http://localhost:8081/applicants/create', {
            ApplicantName,
            ApplicationDate,
            PositionDesired,
            DegreeReceived,
            SpecialSkills,
            CityAddress,
            ProvincialAddress,
            Email,
            Cellphone,
            Telephone,
            BirthDate,
            BirthPlace,
            Gender,
            CivilStatus,
            Citizenship,
            NumChildren,
            HeightCM,
            WeightKG,
            Religion,
            Languages,
            FatherName,
            MotherName,
            EmergencyPerson,
            EmergencyPersonAddress,
            EmergencyPersonCellphone
        })
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.error(err));
    }

    // Adjusted handleSubmitEduc function
    function handleSubmitEduc(event) {
        event.preventDefault();
        
        axios.post('http://localhost:8081/educback/create', {
            EducationalLevel,
            EducationalName,
            EducationalYrGrad,
            ApplicantNumber
        
        })
        .then(res => {
            console.log(res);
            navigate('/educ');
        }).catch(err => console.error(err));
}

function handleSubmitReco(event) {
    event.preventDefault();

    axios.post('http://localhost:8081/workrecommender/create', {
        RecommendedBy,
        RecommendeeCompanyName,
        RecommendeeContactNo,
        RecommendeePosition,
        ApplicantNumber
    })
    .then(res => {
        console.log(res);
        navigate('/reco');
    }).catch(err => console.error(err));
}

// Handle submit for workstat
function handleSubmitStat(event) {
    event.preventDefault();

    axios.post('http://localhost:8081/workstammender/create', {
        ExpCompanyName,
        PositionOfCompany,
        PositionFromYear,
        PositionToYear,
        ApplicantNumber
    })
    .then(res => {
        console.log(res);
        navigate('/stat');
    }).catch(err => console.error(err));
}


    return (
        <div>
            <header>
                <div className="container">
                    <h1 className="bioCraftTitle">BioCraft</h1>
                    <ul>
                        <li><a href="#welcome">Home</a></li>
                        <li><a href="#about">About</a></li>
                        
                    </ul>
                </div>
            </header>

            <div className='d-flex justify-content-center align-items-center' style={{ height: '300vh' }}>
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <section id="welcome" className="container text-center">
                            <h2 className='playfair-font'>PERSONAL BIODATA CREATOR</h2>
                            <p>Your ultimate destination for creating professional and personalized biodata profiles.</p>
                            <p>Follow the simple steps to create and preview your biodata.</p>
                            <Link to="/" className='btn btn-success'>MANAGE APPLICANTS</Link><div></div>
                            <Link to="/educ" className='btn btn-success'>MANAGE EDUCATIONAL BACKGROUND</Link> <div></div>
                            <Link to="/stat" className='btn btn-success'>MANAGE WORK HISTORY</Link><div></div>
                            <Link to="/reco" className='btn btn-success'>MANAGE RECOMMENDERS</Link>
                        </section>

                        <section id="about" className="container">
                            <h2>About Us</h2>
                            <p><strong>BioCraft</strong> is here to help you create professional and personal biodata profiles. We understand the importance of presenting yourself effectively, whether for job applications or personal branding. Our project is designed to give you the tools and guidance to create a strong, professional impression tailored to your needs.</p>
                            <h3>Our History</h3>
                            <p>BioCraft was created in 2024 by a group of passionate students from the Polytechnic University of the Philippines. With a shared vision of making a personal biodata more accessible and effective, the founders combined their expertise to develop a platform that caters to this need.</p>
                            <h3>Our Mission</h3>
                            <p>Our mission at BioCraft is to provide a platform that transforms personal and professional information into beautifully crafted biodata profiles. We empower individuals by providing smart tools and expert guidance to craft compelling biodata profiles that stand out.</p>
                            <ul>
                                <li><strong>WHY CHOOSE US?</strong></li>
                                <li>Our team offers highly personalized services, ensuring your biodata is uniquely yours. BioCraft is user-friendly and straightforward, making it effortless for you to create a professional biodata profile. Simply focus on presenting yourself, and we'll take care of the rest.</li>
                            </ul>
                            <p>Join us at BioCraft and let us help you craft a biodata profile that truly represents who you are. Whether you're just starting out in your career, looking to advance, or simply want to create a personal profile, we're here to support you every step of the way.</p>
                        </section>

                        <section className="container">
                            <h2>Create Your Biodata</h2>

                            <div>Personal Information</div>

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

                            <button type="submit" className='btn btn-success' style={{ width: '100%'}}>SUBMIT APPLICATION DETAIL</button>
                        </section>
                    </form>
                    
                    <form onSubmit={handleSubmitEduc}>
                        <section className="container">
                            <h2>Educational Background</h2>

                            <div className='mb-2'>
                                <label htmlFor="">Level</label>
                                <input type="text" placeholder='Enter Level' className='form-control' onChange={e => setEducationalLevel(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Name of Education</label>
                                <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setEducationalName(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Year Graduated</label>
                                <input type="number" placeholder='Enter Year' className='form-control' onChange={e => setEducationalYrGrad(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="">Applicant Number</label>
                                <input type="number" placeholder='Enter Number' className='form-control' onChange={e => setApplicantNumber(e.target.value)} />
                            </div>

                            <button type='submit' className='btn btn-primary' style={{ width: '100%'}}>SUBMIT EDUCATIONAL BACKGROUND</button>
                        </section>
                    </form>

                    <form onSubmit={handleSubmitReco}>
                        <section className="container">
                            <h2>Work Recommendation</h2>

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

                            <div className='mt-3'>
                            <button type='submit' className='btn btn-primary' style={{ width: '100%'}}>SUBMIT RECOMMENDER</button>
                            </div>
                        </section>
                    </form>

                    <form onSubmit={handleSubmitStat}>
                        <section className="container">
                            <h2>Work Status</h2>
                            <div className='mb-2'>
                                <label htmlFor="">Company Experience</label>
                                <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setExpCompanyName(e.target.value)} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="">Position of the Company</label>
                                <input type="text" placeholder='Enter Position' className='form-control' onChange={e => setPositionOfCompany(e.target.value)} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="">From Year</label>
                                <input type="number" placeholder='Enter From Year' className='form-control' onChange={e => setPositionFromYear(e.target.value)} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="">To Year</label>
                                <input type="number" placeholder='Enter To Year' className='form-control' onChange={e => setPositionToYear(e.target.value)} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="">Applicant Number</label>
                                <input type="number" placeholder='Enter Applicant Number' className='form-control' onChange={e => setApplicantNumber(e.target.value)} />
                            </div>
                            <button type='submit' className='btn btn-primary' style={{ width: '100%'}}>SUBMIT EXPERIENCE</button>
                        </section>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default CreateApplicant;