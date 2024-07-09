import Box from "@mui/material/Box"
import Person from "@mui/icons-material/Person"; 
import "../../styles/sections/GeneralInformation.css"; 

function GeneralInformation() {
    return (
        <div className="general-information--section">
            <div className="header">
                <Person /> 
                <label style={{fontSize: "1.8em", fontWeight: "700"}}>General Information</label>
            </div>
            <Box component="form" sx={{
                display: "flex",
                flexDirection: "column"
            }}>
                <label>First Name</label>
                <input type="text" placeholder="First Name"/>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name"/>
                <label>Email</label>
                <input type="text" placeholder="Email"/>
                <label>Phone Number</label>
                <input type="text" placeholder="Phone"/>
                <label>City and Province</label>
                <input type="text" placeholder="City, Province"/>
            </Box>
        </div>
    )
}

export default GeneralInformation; 