import  Box from "@mui/material/Box"
import GitHubIcon from '@mui/icons-material/GitHub';
import * as All from "../../data/data.js";


function Header() {
    return (
        <Box sx={All.Container__Header}>
            <Box sx={All.Content__Header}>
                <Box>
                    <label style={{fontSize: "2em", fontWeight: "600"}}>CV GENERATOR</label>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "32%"}}>
                    <label style={{fontStyle: "italic", fontWeight: "500"}}>7FOX7 ©</label>
                    <a href="https://github.com/7FOX7">
                        <GitHubIcon />
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default Header; 