import { useState } from "react";
import GeneralInformation from "./components/sections/GeneralInformation"; 
import CurriculumVitae from "./components/CurriculumVitae/CurriculumVitae";
import EducationExperience from "./components/sections/EducationExperience"; 
import ProfessionExperience from "./components/sections/ProfessionExperience"; 
import Box from "@mui/material/Box"; 
import './App.css'; 

const CVSection = {
  padding: "25px", 
  width: "45%", 
  height: "80%", 
  backgroundColor: "red", 
  overflow: "hidden"
}

function App() {
  const [formData, setFormData] = useState([]); 
  const [form__GeneralInfo, setForm__GeneralInfo] = useState({firstName: '', lastName: '', email: '', phoneNumber: '', city: '', province: ''});
  const [form__EducationInfo, setForm__EducationInfo] = useState({degree: '', school: '',  city: '', country: '', startDate: '', endDate: ''});
  const [form__ProfessionInfo, setForm__ProfessionInfo] = useState({jobTitle: '', company: '', startDate: '', endDate: '', description: ''}); 

  console.log(formData); 

  const handleInput__GeneralInfo = (e) => {
    const {name, value} = e.target; 
    setForm__GeneralInfo({...form__GeneralInfo, [name]: value}); 
  }

  const handleInput__EducationInfo = (e) => {
    const {name, value} = e.target; 
    setForm__EducationInfo({...form__EducationInfo, [name]: value}); 
  }

  const handleInput__ProfessionInfo = (e) => {
    const {name, value} = e.target; 
    setForm__ProfessionInfo({...form__ProfessionInfo, [name]: value}); 
  }

  const addData = () => {
    const copy = []; 
    copy.push(form__GeneralInfo); 
    copy.push(form__EducationInfo); 
    copy.push(form__ProfessionInfo); 
    setFormData(copy); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(); 
  }
  const SectionFields = {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center"
  }
  const Content = {
    paddingInline: "30px", 
    backgroundColor: "green", 
    width: "90vw", 
    height: "100vh", 
    display: "flex",
    justifyContent: "space-between",  
    alignItems: "center"
  }
  return (
    <Box sx={Content}>
      <Box sx={SectionFields}>
        <GeneralInformation onChange={handleInput__GeneralInfo} onSubmit={handleSubmit} formValues={form__GeneralInfo} formData={formData}/>
        <EducationExperience onChange={handleInput__EducationInfo} onSubmit={handleSubmit} formValues={form__EducationInfo}/>
        <ProfessionExperience onChange={handleInput__ProfessionInfo} onSubmit={handleSubmit} formValues={form__ProfessionInfo}/>
      </Box>
      <Box sx={CVSection}>
        <CurriculumVitae formData={formData} />
      </Box>
    </Box>
  )
}

export default App
