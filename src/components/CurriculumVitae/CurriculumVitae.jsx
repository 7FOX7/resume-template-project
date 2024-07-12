import Box from "@mui/material/Box"; 

function CurriculumVitae({formData}) { 
    if(formData.length > 0) {
        const [generalInfo, educationInfo, professionInfo] = formData;
        console.log(generalInfo);  
        return (
            <>
                <Box sx={{display: "flex", flexDirection: "column", width: "100%", height: "12%"}}>
                    <label style={{fontSize: "1.4em", fontWeight: "700", margin: "auto"}}>{generalInfo.firstName} {generalInfo.lastName}</label>
                    <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
                        <label>{generalInfo.email}</label>
                        <label>{generalInfo.phoneNumber}</label>
                        <label>{generalInfo.city}, {generalInfo.province}</label>
                    </Box>
                </Box>
                <Box sx={{marginTop: "25px", height: "25%"}}>
                    {educationInfo.degree !== '' && (
                        <>
                            <label style={{fontSize: "1.4em", fontWeight: "700"}}>Education</label>
                            <Box sx={{width: "100%", height: "2px", background: "rgb(0, 0, 0)"}}></Box>
                            <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "12px"}}>
                                <Box sx={{display: "flex", flexDirection: "row"}}>
                                    <label style={{fontWeight: "700"}}>{educationInfo.degree},</label>
                                    <label style={{fontStyle: "italic"}}>{educationInfo.school}</label>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "column"}}>
                                    <label>{educationInfo.startDate} - {educationInfo.endDate}</label>
                                    <label>{educationInfo.city}, {educationInfo.country}</label>
                                </Box>
                            </Box>
                        </>
                    )}
                </Box>
                <Box sx={{marginTop: "35px", height: "25%"}}>
                    {professionInfo.jobTitle !== '' && (
                        <>
                            <label style={{fontSize: "1.4em", fontWeight: "700"}}>Professional Experience</label>
                            <Box sx={{width: "100%", height: "2px", background: "rgb(0, 0, 0)"}}></Box>
                            <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "12px"}}>
                                <Box sx={{display: "flex", flexDirection: "row"}}>
                                    <label style={{fontWeight: "700"}}>{professionInfo.jobTitle},</label>
                                    <label style={{fontStyle: "italic"}}>{professionInfo.company}</label>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "column"}}>
                                    <label>{professionInfo.startDate} - {professionInfo.endDate}</label>
                                </Box>
                            </Box>
                            <Box sx={{fontSize: "0.9em"}}>
                                <p>{professionInfo.description}</p>
                            </Box>
                        </>
                    )}
                </Box>
            </>
        )
    }
}

export default CurriculumVitae; 