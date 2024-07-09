import {useState} from "react"; 
import Box from "@mui/material/Box";
import SchoolIcon from '@mui/icons-material/School';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import * as All from "../../data/data.js";

function EducationExperience() {
    const [isVisible, setIsVisible] = useState(false); 
    const localData = All.data[1]; 

    function toggle() {
        let show = isVisible; 
        show = !show; 
        setIsVisible(show); 
    }

    return (
        <Box sx={All.Container}>
            <Box sx={All.Wrapper}>
                <Box sx={All.Header}>
                    <SchoolIcon />
                    <label style={All.MainTitle}>{localData.title}</label>
                {isVisible ? (
                    <KeyboardArrowUpIcon onClick={toggle} sx={All.Arrow}/>
                ) : (<KeyboardArrowDownIcon onClick={toggle} sx={All.Arrow}/>)}
                </Box>
                {isVisible ? (
                    <Box sx={All.DropDown} component="form">
                        <label style={All.FormTitle}>{localData.degree}</label>
                        <input style={All.InputField} type="text" placeholder={localData.degree}/>
                        <label style={All.FormTitle}>{localData.school}</label>
                        <input style={All.InputField} type="text" placeholder={localData.school}/>
                        <label style={All.FormTitle}>{localData.city}</label>
                        <input style={All.InputField} type="text" placeholder={localData.city}/>
                        <label style={All.FormTitle}>{localData.country}</label>
                        <input style={All.InputField} type="text" placeholder={localData.country}/>
                        <Box sx={All.DateInputFields}>
                            <Box sx={All.DateInputField}>
                                <label style={All.FormTitle}>{localData.startDate}</label>
                                <input style={All.InputField} type="date"/>
                            </Box>
                            <Box sx={All.DateInputField}> 
                                <label style={All.FormTitle}>{localData.endDate}</label>
                                <input style={All.InputField} type="date"/>
                            </Box>
                        </Box>
                        
                        <button style={All.SaveButton}>
                            <CheckIcon />
                            Save
                        </button>
                    </Box>
                ) : null}
            </Box>
        </Box>
    )
}

export default EducationExperience; 