import "./App.css";
import SideMenu from "./SideMenu";

import AdminDashboard from './Pages/AdminDashboard';

import StudentManager from './Pages/StudentManager';
import RegisterStudent from './Pages/RegisterStudent';
import CaptureStudent from './Pages/CaptureStudent';
import ViewStudent from './Pages/ViewStudent';
import StaffManager from './Pages/StaffManager';

import RegisterStaff from './Pages/RegisterStaff';
import CaptureStaff from './Pages/CaptureStaff';
import ViewStaff from './Pages/ViewStaff';
import Parents from './Pages/Parents';
import ViewParents from './Pages/ViewParents';
import Classes from './Pages/Classes';
import ManageClassMembers from './Pages/ManageClassMembers';
import AssignFormTeacher from './Pages/AssignFormTeacher';
import SubjectManager from './Pages/SubjectManager';
import AssignSubjectToClass from './Pages/AssignSubjectToClass';
import SelectSubjectMembers from './Pages/SelectSubjectMembers';
import SetSubjectOrder from './Pages/SetSubjectOrder';
import Scores from './Pages/Scores';
import EnterScores from './Pages/EnterScores';
import CommentManager from './Pages/CommentManager';
import MakeComments from './Pages/MakeComments';
import TraitManager from './Pages/TraitManager';
import MakeTraitAssessments from './Pages/MakeTraitAssessments';
import ResultManager from './Pages/ResultManager';
import TimetableManager from './Pages/TimetableManager';
import SchoolSections from './Pages/SchoolSections';
import ViewSections from './Pages/ViewSections';
import InventoryManager from './Pages/InventoryManager';
import ManageCategories from './Pages/ManageCategories';

import CreateNewItem from './Pages/CreateNewItem';
import SellItem from './Pages/SellItem';
import RestockItem from './Pages/RestockItem';
import ViewReports from './Pages/ViewReports';
import HostelManager from './Pages/HostelManager';
import AssignRoomToStudent from './Pages/AssignRoomToStudent';
import ViewHostelMembers from './Pages/ViewHostelMembers';
import ManageHostelFurniture from './Pages/ManageHostelFurniture';
import PayrollManager from './Pages/PayrollManager';
import ManageStaffSalaries from './Pages/ManageStaffSalaries';
import CreateMonthlyPayroll from './Pages/CreateMonthlyPayroll';
import ViewPayrollReports from './Pages/ViewPayrollReports';
import ManagePayrollStructure from './Pages/ManagePayrollStructure';

import SchoolAdmin from './Pages/SchoolAdmin';
import ConfigureSchoolDetails  from './Pages/ConfigureSchoolDetails';
import ManageSchoolTraits from './Pages/ManageSchoolTraits';
import SchoolTraitRating from './Pages/SchoolTraitRating';
import SchoolAssesmentFormats from './Pages/SchoolAssesmentFormats';
import SchoolGradingFormats from './Pages/SchoolGradingFormats';
import RemoveStudent from './Pages/RemoveStudent';
import RemoveStaff from './Pages/RemoveStaff';
import CreateSchoolSection from './Pages/CreateSchoolSection';
import CreateClass from './Pages/CreateClass';
import ManageActiveStudents from './Pages/ManageActiveStudents';
import ManageResults from './Pages/ManageResults';
import UploadTermlyNewsletter from './Pages/UploadTermlyNewsletter';
import ArchiveOfRemovedStudentNDStaff from './Pages/ArchiveOfRemovedStudentNDStaff';
import PromoteStudents from './Pages/PromoteStudents';
import ChangePassword from './Pages/ChangePassword';
import SynchronizeData from './Pages/SynchronizeData';
import AdditionalSettings from './Pages/AdditionalSettings';


import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const StudentManager = () => <h1>Student Manager</h1>;
// const RegisterStudent = () => <h1>Student Manager/RegisterStudent</h1>;
// const CaptureStudent = () => <h1>Student Manager/CaptureStudentPhoto</h1>;
// const ViewStudent = () => <h1>Student Manager/ViewStudent</h1>;

// const StaffManager = () => <h1>Staff Manager</h1>;
// const RegularStaff = () => <h1>StaffManager/RegisterStaff</h1>;
// const CaptureStaff = () => <h1>StaffManager/CaptureStaffPhoto</h1>;
// const ViewStaff = () => <h1>StaffManager/ViewStaff</h1>;

// const Parents = () => <h1>Parents</h1>;
// const ViewParents = () => <h1>Parents/ViewParents</h1>;

// const Classes = () => <h1>Classes</h1>;
// const ManageClassMembers = () => <h1>Classes/ManageClassMembers</h1>;
// const AssignFormTeacher = () => <h1>Classes/AssignFormTeacher</h1>;

// const SubjectManager = () => <h1>Subject Manager</h1>;
// const AssignSubjectToClass = () => <h1>SubjectManager/AssignSubjectToClass</h1>;
// const SelectSubjectMembers = () => <h1>SubjectManager/SelectSubjectMembers</h1>;
// const SetSubjectOrder = () => <h1>SubjectManager/SetSubjectOrder</h1>;

// const Scores = () => <h1>Scores</h1>;
// const EnterScores = () => <h1>Scores/EnterScores</h1>;

// const CommentManager = () => <h1>Comment Manager</h1>;
// const MakeComments = () => <h1>CommentManager/MakeComments</h1>;

// const TraitManager = () => <h1>Trait Manager</h1>;
// const MakeTraitAssessments = () => <h1>TraitManager/MakeTraitAssessments</h1>;

// const ResultManager = () => <h1>Result Manager</h1>;

// const TimetableManager = () => <h1>Timetable Manager</h1>;

// const SchoolSections = () => <h1>School Sections</h1>;
// const ViewSections = () => <h1>SchoolSections/ViewSections</h1>;

// const InventoryManager = () => <h1>Inventory Manager</h1>;
// const ManageCategories = () => <h1>InventoryManager/ManageCategories</h1>;
// const CreateNewItem = () => <h1>InventoryManager/CreateNewItem</h1>;
// const SellItem = () => <h1>InventoryManager/SellItem</h1>;
// const RestockItem = () => <h1>InventoryManager/RestockItem</h1>;
// const ViewReports = () => <h1>InventoryManager/ViewReports</h1>;

// const HostelManager = () => <h1>Hostel Manager</h1>;
// const AssignRoomToStudent = () => <h1>HostelManager/AssignRoomToStudent</h1>;
// const ViewHostelMembers = () => <h1>HostelManager/ViewHostelMembers</h1>;
// const ManageHostelFurniture = () => <h1>HostelManager/ManageHostelFurniture</h1>;

// const PayrollManager = () => <h1>Payroll Manager</h1>;
// const ManageStaffSalaries = () => <h1>PayrollManager/ManageStaffSalaries</h1>;
// const CreateMonthlyPayroll = () => <h1>PayrollManager/CreateMonthlyPayroll</h1>;
// const ViewPayrollReports = () => <h1>PayrollManager/ViewPayrollReports</h1>;
// const ManagePayrollStructure = () => <h1>PayrollManager/ManagePayrollStructure</h1>;

// const SchoolAdmin = () => <h1>School Admin</h1>;


function App() {
  const [inactive, setInactive] = useState(false);
  const onCollapse = (inactive) => {
    // console.log(inactive);
    setInactive(inactive);
  };


  return (
    <div className="App">
      <Router>
      <SideMenu onCollapse={onCollapse} />

      <div className={`container ${inactive ? "inactive" : ""}`}>

      <Switch>
      <Route exact path={"/"}>
              <AdminDashboard />
            </Route>
            <Route exact path={"/StudentManager"}>
              <StudentManager />
            </Route>
            <Route exact path={"/StudentManager/RegisterStudent"}>
              <RegisterStudent />
            </Route>
            <Route exact path={"/StudentManager/CaptureStudent"}>
              <CaptureStudent />
            </Route>
            <Route exact path={"/StudentManager/ViewStudent"}>
              <ViewStudent />
            </Route>

            <Route exact path={"/StaffManager"}>
              <StaffManager />
            </Route>
            <Route exact path={"/StaffManager/RegisterStaff"}>
              <RegisterStaff />
            </Route>
            <Route exact path={"/StaffManager/CaptureStaff"}>
              <CaptureStaff />
            </Route>
            <Route exact path={"/StaffManager/ViewStaff"}>
              <ViewStaff />
            </Route>
            
            <Route exact path={"/Parents"}>
              <Parents />
            </Route>
            <Route exact path={"/Parents/ViewParents"}>
              <ViewParents />
            </Route>
            
            <Route exact path={"/Classes"}>
              <Classes />
            </Route>
            <Route exact path={"/Classes/ManageClassMembers"}>
              <ManageClassMembers />
            </Route>
            <Route exact path={"/Classes/AssignFormTeacher"}>
              <AssignFormTeacher />
            </Route>
            
            <Route exact path={"/SubjectManager"}>
              <SubjectManager />
            </Route>
            <Route exact path={"/SubjectManager/AssignSubjectToClass"}>
              <AssignSubjectToClass />
            </Route>
            <Route exact path={"/SubjectManager/SelectSubjectMembers"}>
              <SelectSubjectMembers />
            </Route>
            <Route exact path={"/SubjectManager/SetSubjectOrder"}>
              <SetSubjectOrder />
            </Route>
            
            <Route exact exact path={"/Scores"}>
              <Scores />
            </Route>
            <Route exact exact path={"/Scores/EnterScores"}>
              <EnterScores />
            </Route>
            
            <Route exact path={"/CommentManager"}>
              <CommentManager />
            </Route>
            <Route exact path={"/CommentManager/MakeComments"}>
              <MakeComments />
            </Route>
            
            <Route exact path={"/TraitManager"}>
              <TraitManager />
            </Route>
            <Route exact path={"/TraitManager/MakeTraitAssessments"}>
              <MakeTraitAssessments />
            </Route>
            
            <Route exact path={"/ResultManager"}>
              <ResultManager />
            </Route>

            <Route exact path={"/TimetableManager"}>
              <TimetableManager />
            </Route>

            <Route exact path={"/SchoolSections"}>
              <SchoolSections />
            </Route>
            <Route exact path={"/SchoolSections/ViewSections"}>
              <ViewSections />
            </Route>
            
            <Route exact path={"/InventoryManager"}>
              <InventoryManager />
            </Route>
            <Route exact path={"/InventoryManager/ManageCategories"}>
              <ManageCategories />
            </Route>
            <Route exact path={"/InventoryManager/CreateNewItem"}>
              <CreateNewItem />
            </Route>
            <Route exact path={"/InventoryManager/SellItem"}>
              <SellItem />
            </Route>
            <Route exact path={"/InventoryManager/RestockItem"}>
              <RestockItem />
            </Route>
            <Route exact path={"/InventoryManager/ViewReports"}>
              <ViewReports />
            </Route>
            
            <Route exact path={"/HostelManager"}>
              <HostelManager />
            </Route>
            <Route exact path={"/HostelManager/AssignRoomToStudent"}>
              <AssignRoomToStudent />
            </Route>
            <Route exact path={"/HostelManager/ViewHostelMembers"}>
              <ViewHostelMembers />
            </Route>
            <Route exact path={"/HostelManager/ManageHostelFurniture"}>
              <ManageHostelFurniture />
            </Route>
            
            <Route exact path={"/PayrollManager"}>
              <PayrollManager />
            </Route>
            <Route exact path={"/PayrollManager/ManageStaffSalaries"}>
              <ManageStaffSalaries />
            </Route>
            <Route exact path={"/PayrollManager/CreateMonthlyPayroll"}>
              <CreateMonthlyPayroll />
            </Route>
            <Route exact path={"/PayrollManager/ViewPayrollReports"}>
              <ViewPayrollReports />
            </Route>
            <Route exact path={"/PayrollManager/ManagePayrollStructure"}>
              <ManagePayrollStructure />
            </Route>
            
            <Route exact path={"/SchoolAdmin"}>
              <SchoolAdmin />
            </Route>
            <Route exact path={"/SchoolAdmin/ConfigureSchoolDetails"}>
              <ConfigureSchoolDetails />
            </Route>
            <Route exact path={"/TraitManager/ManageSchoolTraits"}>
              <ManageSchoolTraits />
            </Route>
            <Route exact path={"/TraitManager/SchoolTraitRating"}>
              <SchoolTraitRating />
            </Route>
            <Route exact path={"/SchoolAdmin/SchoolAssesmentFormats"}>
              <SchoolAssesmentFormats />
            </Route>
            <Route exact path={"/SchoolAdmin/SchoolGradingFormats"}>
              <SchoolGradingFormats />
            </Route>
            <Route exact path={"/StudentManager/RemoveStudent"}>
              <RemoveStudent />
            </Route>
            <Route exact path={"/StaffManager/RemoveStaff"}>
              <RemoveStaff />
            </Route>
            <Route exact path={"/SchoolSections/CreateSchoolSection"}>
              <CreateSchoolSection />
            </Route>
            <Route exact path={"/Classes/CreateClass"}>
              <CreateClass />
            </Route>
            <Route exact path={"/StudentManager/ManageActiveStudents"}>
              <ManageActiveStudents />
            </Route>
            <Route exact path={"/ResultManager/ManageResults"}>
              <ManageResults />
            </Route>
            <Route exact path={"/SchoolAdmin/UploadTermlyNewsletter"}>
              <UploadTermlyNewsletter />
            </Route>
            <Route exact path={"/SchoolAdmin/ArchiveOfRemovedStudentNDStaff"}>
              <ArchiveOfRemovedStudentNDStaff />
            </Route>
            <Route exact path={"/SchoolAdmin/PromoteStudents"}>
              <PromoteStudents />
            </Route>
            <Route exact path={"/SchoolAdmin/ChangePassword"}>
              <ChangePassword />
            </Route>
            <Route exact path={"/AdditionalSettings"}>
              <AdditionalSettings />
            </Route>
            <Route exact path={"/AdditionalSettings/UploadTermlyNewsletter"}>
              <UploadTermlyNewsletter />
            </Route>
            <Route exact path={"/AdditionalSettings/ArchiveOfRemovedStudentNDStaff"}>
              <ArchiveOfRemovedStudentNDStaff />
            </Route>
            <Route exact path={"/AdditionalSettings/ChangePassword"}>
              <ChangePassword />
            </Route>
            <Route exact path={"/AdditionalSettings/SynchronizeData"}>
              <SynchronizeData />
            </Route>
           
          
            
            </Switch>
      </div>

      </Router>
    </div>
  );
}

export default App;
