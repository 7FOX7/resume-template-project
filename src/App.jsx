import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useRef } from "react";
import SaveResume from "./components/sections/SaveResume";
import Header from "./components/Header/Header";
import GeneralInformation from "./components/sections/GeneralInformation"; 
import CurriculumVitae from "./components/CurriculumVitae/CurriculumVitae";
import EducationExperience from "./components/sections/EducationExperience"; 
import ProfessionExperience from "./components/sections/ProfessionExperience"; 
import Box from "@mui/material/Box"; 
import './App.css'; 

const CVSection = {
  padding: "25px", 
  flexGrow: "4", 
  height: "80%", 
  background: "var(--CVTemplateColor)", 
  overflow: "hidden", 
  boxShadow: "0px 0px 1px rgb(0, 0, 0)"
}
const SectionFields = {
  marginInline: "100px", 
  flexGrow: "2", 
  display: "flex", 
  flexDirection: "column", 
}
const Content = {
  background: "var(--page-color)", 
  paddingInline: "30px", 
  width: "100vw", 
  height: "100vh", 
  display: "flex",
  alignItems: "center", 
  justifyContent: "space-between"
}
const HeaderSection = {
  flexGrow: "0.5", 
  height: "60%"
}

const defaultForm__GeneralInfo = {firstName: '', lastName: '', email: '', phoneNumber: '', city: '', province: ''}; 
const defaultForm__EducationInfo = {degree: '', school: '',  city: '', country: '', startDate: '', endDate: ''}; 
const defaultForm__ProfessionInfo = {jobTitle: '', company: '', startDate: '', endDate: '', description: ''}; 

function App() {
  const CVTemplateRef = useRef(null); 
  const [formData, setFormData] = useState([]); 
  const [form__GeneralInfo, setForm__GeneralInfo] = useState(defaultForm__GeneralInfo);
  const [form__EducationInfo, setForm__EducationInfo] = useState(defaultForm__EducationInfo);
  const [form__ProfessionInfo, setForm__ProfessionInfo] = useState(defaultForm__ProfessionInfo); 

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

  const handleClear__GeneralInfo = (e) => {
    e.preventDefault(); 
    const copy = []; 
    copy.push(defaultForm__GeneralInfo); 
    copy.push(form__EducationInfo); 
    copy.push(form__ProfessionInfo); 
    setForm__GeneralInfo(defaultForm__GeneralInfo); 
    setFormData(copy); 
  }

  const handleClear__EducationInfo = (e) => {
    e.preventDefault(); 
    const copy = []; 
    copy.push(form__GeneralInfo); 
    copy.push(defaultForm__EducationInfo); 
    copy.push(form__ProfessionInfo); 
    setForm__EducationInfo(defaultForm__EducationInfo); 
    setFormData(copy); 
  }

  const handleClear__ProfessionInfo = (e) => {
    e.preventDefault(); 
    const copy = []; 
    copy.push(form__GeneralInfo); 
    copy.push(form__EducationInfo); 
    copy.push(defaultForm__ProfessionInfo); 
    setForm__ProfessionInfo(defaultForm__ProfessionInfo); 
    setFormData(copy); 
  }

  function downloadPDF() {
    const input = CVTemplateRef.current; 
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); 
      const pdf = new jsPDF('p', 'mm', 'a4', true); 
      const pdfWidth = pdf.internal.pageSize.getWidth(); 
      const pdfHeight = pdf.internal.pageSize.getHeight(); 
      const imgWidth = canvas.width; 
      const imgHeight = canvas.height; 
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight); 
      const imgX = (pdfWidth - imgWidth * ratio) / 2; 
      const imgY = 30; 
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio); 
      pdf.save('invoice.pdf'); 
    });
  }

  return (
    <Box sx={Content}>
      <Box sx={HeaderSection}> 
        <Header />
      </Box>
      <Box sx={SectionFields}>
        <SaveResume onClick={downloadPDF} />
        <GeneralInformation onClick={handleClear__GeneralInfo} onChange={handleInput__GeneralInfo} onSubmit={handleSubmit} formValues={form__GeneralInfo} formData={formData}/>
        <EducationExperience onClick={handleClear__EducationInfo} onChange={handleInput__EducationInfo} onSubmit={handleSubmit} formValues={form__EducationInfo} formData={formData}/>
        <ProfessionExperience onClick={handleClear__ProfessionInfo} onChange={handleInput__ProfessionInfo} onSubmit={handleSubmit} formValues={form__ProfessionInfo} formData={formData}/>
      </Box>
      <Box sx={CVSection} ref={CVTemplateRef}>
        <CurriculumVitae formData={formData} />
      </Box>
    </Box>
  )
}

export default App
