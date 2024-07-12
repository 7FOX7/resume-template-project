import  Box from "@mui/material/Box"
import MediaQuery from "react-responsive";
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
    return (
        <>
            <MediaQuery minDeviceWidth={1480}>
                <Box className="container-header">
                    <Box className="content--Header">
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
            </MediaQuery>
            
            <MediaQuery maxDeviceWidth={1480}>
                <Box className="container-header">
                    <Box className="content--Header">
                        <Box>
                            <label style={{fontSize: "1.5em", fontWeight: "600"}}>CV GENERATOR</label>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "43%"}}>
                            <label style={{fontStyle: "italic", fontWeight: "500"}}>7FOX7 ©</label>
                            <a href="https://github.com/7FOX7">
                                <GitHubIcon />
                            </a>
                        </Box>
                    </Box>
                </Box>
            </MediaQuery>
        </>
    )
}

export default Header; 