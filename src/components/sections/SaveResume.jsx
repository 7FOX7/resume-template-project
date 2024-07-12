import Box from "@mui/material/Box";
import DownloadIcon from '@mui/icons-material/Download';
import "../../styles/sections/style.css"; 

function SaveResume({onClick}) {
    return (
        <Box className="container">
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <label style={{fontWeight: "700", fontStyle: "italic", fontSize: "1.2em"}}>Save your resume</label>
                <button onClick={onClick} className="default-button download-button" style={{background: "var(--main-color)"}}>
                    <DownloadIcon />
                    Download
                </button>
            </Box>
        </Box>
    )
}

export default SaveResume; 