import {useState} from "react"; 
import Box from "@mui/material/Box"
import WorkIcon from '@mui/icons-material/Work';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as All from "../../data/data.js";
import CheckIcon from '@mui/icons-material/Check';

function ProfessionExperience() {
    const [isVisible, setIsVisible] = useState(false); 
    const localData = All.data[2]; 

    function toggle() {
        let show = isVisible; 
        show = !show; 
        setIsVisible(show); 
    }

    return (
        <Box sx={All.Container}>
            <Box sx={All.Wrapper}>
                <Box sx={All.Header}>
                    <WorkIcon />
                    <label style={All.MainTitle}>{localData.title}</label>
                {isVisible ? (
                    <KeyboardArrowUpIcon onClick={toggle} sx={All.Arrow}/>
                ) : (<KeyboardArrowDownIcon onClick={toggle} sx={All.Arrow}/>)}
                </Box>
                {isVisible ? (
                    <Box sx={All.DropDown} component="form">
                        <label style={All.FormTitle}>{localData.jobTitle}</label>
                        <input style={All.InputField} type="text" placeholder={localData.jobTitle}/>
                        <label style={All.FormTitle}>{localData.company}</label>
                        <input style={All.InputField} type="text" placeholder={localData.company}/>
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
                        <label style={All.FormTitle}>{localData.description}</label>
                        <input style={All.InputField} type="text" placeholder="Main tasks"/>

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

export default ProfessionExperience; 