const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

// Endpoint to fetch all applicant
app.get("/applicants", (req, res) => {
    const sql = "SELECT * FROM applicant;";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to fetch all workreco
app.get("/workrecommender", (req, res) => {
    const sql = "SELECT * FROM workreco;";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to fetch all workstat
app.get("/workstammender", (req, res) => {
    const sql = "SELECT * FROM workstat;";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to fetch all educbg
app.get("/educback", (req, res) => {
    const sql = "SELECT * FROM educbg;";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to create a new applicant
app.post('/applicants/create', (req, res) => {
    const sql = "INSERT INTO applicant (`ApplicantName`, `ApplicationDate`, `PositionDesired`, `DegreeReceived`, `SpecialSkills`, `CityAddress`, `ProvincialAddress`, `Email`, `Cellphone`, `Telephone`, `BirthDate`, `BirthPlace`, `Gender`, `CivilStatus`, `Citizenship`, `NumChildren`, `HeightCM`, `WeightKG`, `Religion`, `Languages`, `FatherName`, `MotherName`, `EmergencyPerson`, `EmergencyPersonAddress`, `EmergencyPersonCellphone`) VALUES (?)";

    const values = [
        req.body.ApplicantName,
        req.body.ApplicationDate,
        req.body.PositionDesired,
        req.body.DegreeReceived,
        req.body.SpecialSkills,
        req.body.CityAddress,
        req.body.ProvincialAddress,
        req.body.Email,
        req.body.Cellphone,
        req.body.Telephone,
        req.body.BirthDate,
        req.body.BirthPlace,
        req.body.Gender,
        req.body.CivilStatus,
        req.body.Citizenship,
        req.body.NumChildren,
        req.body.HeightCM,
        req.body.WeightKG,
        req.body.Religion,
        req.body.Languages,
        req.body.FatherName,
        req.body.MotherName,
        req.body.EmergencyPerson, 
        req.body.EmergencyPersonAddress,
        req.body.EmergencyPersonCellphone
    ];
    
    db.query(sql, [values], (err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to create a new educbg
app.post('/educback/create', (req, res) => {
    const sql = "INSERT INTO educbg (`EducationalLevel`, `EducationalName`, `EducationalYrGrad`, `ApplicantNumber`) VALUES (?)";

    const values = [
        req.body.EducationalLevel,
        req.body.EducationalName,
        req.body.EducationalYrGrad,
        req.body.ApplicantNumber
    ];

    db.query(sql, [values], (err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to create a new workreco
app.post('/workrecommender/create', (req, res) => {
    const sql = "INSERT INTO workreco (`RecommendedBy`, `RecommendeeCompanyName`, `RecommendeeContactNo`, `RecommendeePosition`, `ApplicantNumber`) VALUES (?)";

    const values = [
        req.body.RecommendedBy,
        req.body.RecommendeeCompanyName,
        req.body.RecommendeeContactNo,
        req.body.RecommendeePosition,
        req.body.ApplicantNumber
    ];

    db.query(sql, [values], (err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to create a new workstat
app.post('/workstammender/create', (req, res) => {
    const sql = "INSERT INTO workstat (`ExpCompanyName`, `PositionOfCompany`, `PositionFromYear`, `PositionToYear`, `ApplicantNumber`) VALUES (?)";

    const values = [
        req.body.ExpCompanyName,
        req.body.PositionOfCompany,
        req.body.PositionFromYear,
        req.body.PositionToYear,
        req.body.ApplicantNumber
    ];

    db.query(sql, [values], (err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to update an applicant
app.put('/update/:ApplicantNumber', (req, res) => {
    const sql = "UPDATE applicant SET `ApplicantName` = ?, `ApplicationDate` = ?, `PositionDesired` = ?, `DegreeReceived` = ?, `SpecialSkills` = ?, `CityAddress` = ?, `ProvincialAddress` = ?, `Email` = ?, `Cellphone` = ?, `Telephone` = ?, `BirthDate` = ?, `BirthPlace` = ?, `Gender` = ?, `CivilStatus` = ?, `Citizenship` = ?, `NumChildren` = ?, `HeightCM` = ?, `WeightKG` = ?, `Religion` = ?, `Languages` = ?, `FatherName` = ?, `MotherName` = ?, `EmergencyPerson` = ?, `EmergencyPersonAddress` = ?, `EmergencyPersonCellphone` = ? WHERE ApplicantNumber = ?";

    const values = [
        req.body.ApplicantName,
        req.body.ApplicationDate,
        req.body.PositionDesired,
        req.body.DegreeReceived,
        req.body.SpecialSkills,
        req.body.CityAddress,
        req.body.ProvincialAddress,
        req.body.Email,
        req.body.Cellphone,
        req.body.Telephone,
        req.body.BirthDate,
        req.body.BirthPlace,
        req.body.Gender,
        req.body.CivilStatus,
        req.body.Citizenship,
        req.body.NumChildren,
        req.body.HeightCM,
        req.body.WeightKG,
        req.body.Religion,
        req.body.Languages,
        req.body.FatherName,
        req.body.MotherName,
        req.body.EmergencyPerson, 
        req.body.EmergencyPersonAddress,
        req.body.EmergencyPersonCellphone,
        req.params.ApplicantNumber
    ];

    db.query(sql, values, (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// Endpoint to update an educbg
app.put('/modify/:educationalID', (req, res) => {
    const sql = "UPDATE educbg SET `educationalName` = ?, `educationalLevel` = ?, `educationalYrGrad` = ?, `ApplicantNumber` = ? WHERE educationalID = ?";
    const values = [
        req.body.educationalName,
        req.body.educationalLevel,
        req.body.educationalYrGrad,
        req.body.ApplicantNumber,
        req.params.educationalID
    ];

    db.query(sql, values, (err, result) => {
        if(err) {
            console.error("Error updating educational background:", err);
            return res.status(500).json({ error: "Failed to update educational background" });
        }
        return res.status(200).json({ message: "Educational background updated successfully" });
    });
});

// Endpoint to update workreco
app.put('/change/:characterRefID', (req, res) => {
    const sql = "UPDATE workreco SET `recommendedBy` = ?, `recommendeeCompanyName` = ?, `recommendeeContactNo` = ?, `recommendeePosition` = ?, `ApplicantNumber` = ? WHERE characterRefID = ?";
    const values = [
    
        req.body.recommendedBy,
        req.body.recommendeeCompanyName,
        req.body.recommendeeContactNo,
        req.body.recommendeePosition,
        req.body.ApplicantNumber,
        req.params.characterRefID
    ];

    db.query(sql, values, (err, result) => {
        if(err) {
            console.error("Error updating reco:", err);
            return res.status(500).json({ error: "Failed to update reco" });
        }
        return res.status(200).json({ message: "Reco updated successfully" });
    });
});

app.put('/develop/:employmentID', (req, res) => {
    const sql = "UPDATE workstat SET `expCompanyName` = ?, `positionOfCompany` = ?, `positionFromYear` = ?, `positionToYear` = ?, `ApplicantNumber` = ? WHERE employmentID = ?";
    const values = [
        
        req.body.expCompanyName,
        req.body.positionOfCompany,
        req.body.positionFromYear,
        req.body.positionToYear,
        req.body.ApplicantNumber,
        req.params.employmentID
    ];

    db.query(sql, values, (err, result) => {
        if(err) {
            console.error("Error updating stat:", err);
            return res.status(500).json({ error: "Failed to update stat" });
        }
        return res.status(200).json({ message: "Stat updated successfully" });
    });
});


// Endpoint to delete an applicant
app.delete('/applicant/:ApplicantNumber', (req, res) => {
    const ApplicantNumber = req.params.ApplicantNumber;
    const sql = "DELETE FROM applicant WHERE ApplicantNumber = ?";
    
    db.query(sql, [ApplicantNumber], (err, result) => {
        if (err) {
            console.error("Error deleting applicant:", err);
            return res.status(500).json({ error: "Failed to delete applicant" });
        }
        // Check if rows were affected
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "Applicant deleted successfully" });
        } else {
            return res.status(404).json({ error: "Applicant not found" });
        }
    });
});

// Endpoint to delete an educbg
app.delete('/educbg/:educationalID', (req, res) => {
    const sql = "DELETE FROM educbg WHERE educationalID = ?";
    const educationalID = req.params.educationalID;
    
    console.log("Deleting educationalID:", educationalID); // Add this line for logging

    db.query(sql, [educationalID], (err, result) => {
        if (err) {
            console.error("Error deleting educational background:", err);
            return res.status(500).json({ error: "Failed to delete edu" });
        }
        // Check if rows were affected
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "Edu deleted successfully" });
        } else {
            return res.status(404).json({ error: "Edu not found" });
        }
    });
});

// Endpoint to delete an workreco
app.delete('/workreco/:characterRefID', (req, res) => {
    const sql = "DELETE FROM workreco WHERE characterRefID = ?";
    const characterRefID = req.params.characterRefID;
    
    console.log("Deleting characterRefID:", characterRefID); // Add this line for logging

    db.query(sql, [characterRefID], (err, result) => {
        if (err) {
            console.error("Error deleting recommender background:", err);
            return res.status(500).json({ error: "Failed to delete reco" });
        }
        // Check if rows were affected
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "Reco deleted successfully" });
        } else {
            return res.status(404).json({ error: "Reco not found" });
        }
    });
});

// Endpoint to delete an workstat
app.delete('/workstat/:employmentID', (req, res) => {
    const sql = "DELETE FROM workstat WHERE employmentID = ?";
    const employmentID = req.params.employmentID;
    
    console.log("Deleting employmentID:", employmentID); // Add this line for logging

    db.query(sql, [employmentID], (err, result) => {
        if (err) {
            console.error("Error deleting stat:", err);
            return res.status(500).json({ error: "Failed to delete stat" });
        }
        // Check if rows were affected
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "Stat deleted successfully" });
        } else {
            return res.status(404).json({ error: "Stat not found" });
        }
    });
});

// Root endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the CRUD application!");
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

