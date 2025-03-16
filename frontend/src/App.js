import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Applicant from './Applicatn';
import CreateApplicant from './CreateApplicant';
import UpdateApplicant from './UpdateApplicant';
import EducBG from './Eduka';
import UpdateEduc from './UpdateEduc';
import UpdateWorkRec from './UpdateWorkRec';
import WorkReco from './Workrecc';
import WorkStat from './Workstatt';
import UpdateWorkStatu from './UpdateWorkStatu';
import Logged from './Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Logged />}></Route>
          <Route path='/' element={<Applicant />}></Route>
          <Route path='/educ' element={<EducBG />}></Route>
          <Route path='/reco' element={<WorkReco />}></Route>
          <Route path='/stat' element={<WorkStat />}></Route>
          <Route path='/create' element={<CreateApplicant />}></Route>
          <Route path='/update/:ApplicantNumber' element={<UpdateApplicant />}></Route>
          <Route path='/modify/:educationalID' element={<UpdateEduc />}></Route>
          <Route path='/change/:characterRefID' element={<UpdateWorkRec />}></Route>
          <Route path='/develop/:employmentID' element={<UpdateWorkStatu />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
