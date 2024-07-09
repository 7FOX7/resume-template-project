import GeneralInformation from "./components/sections/GeneralInformation"
import EducationExperience from "./components/sections/EducationExperience"
import ProfessionExperience from "./components/sections/ProfessionExperience"
import Box from "@mui/material/Box"
import './App.css'

function App() {
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
  const CVSection = {
    width: "45%", 
    height: "80%", 
    backgroundColor: "red"
  }
  const GeneralInformationField = {
    marginTop: "20px", 
    paddingBlock: "5px", 
    paddingInline: "25px", 
  }
  return (
    <Box sx={Content}>
      <Box sx={SectionFields}>
        <GeneralInformation />
        <EducationExperience />
        <ProfessionExperience />
      </Box>
      <Box sx={CVSection}>
        <Box sx={GeneralInformationField}>
          
        </Box>
      </Box>
    </Box>
  )
}

export default App
