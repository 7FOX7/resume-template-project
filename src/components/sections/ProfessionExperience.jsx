import {useState} from "react"; 
import {useRef} from "react"; 
import {useEffect} from "react"; 
import Box from "@mui/material/Box"
import WorkIcon from '@mui/icons-material/Work';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import * as All from "../../data/data.js";
import "../../styles/sections/style.css"; 

function ProfessionExperience({onChange, onSubmit, formValues}) {
    const saveButtonRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false); 
    const localData = All.data[2]; 

    function toggle() {
        let show = isVisible; 
        show = !show; 
        setIsVisible(show); 
    }

    useEffect(() => {
        if(saveButtonRef.current !== null) {
            const filledFields = Object.values(formValues).filter((value) => {
                return value !== '';  
            }); 
            filledFields.length === Object.keys(formValues).length ? (saveButtonRef.current.disabled = false, saveButtonRef.current.className = "save-button save-button--enabled") : (saveButtonRef.current.disabled = true, saveButtonRef.current.className = "save-button save-button--disabled")
        }
    })

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
                    <Box sx={All.DropDown} component="form" onSubmit={onSubmit} id="ProfessionInformationForm">
                        <label style={All.FormTitle}>{localData.jobTitle}</label>
                        <input style={All.InputField} type="text" name="jobTitle" onChange={onChange} placeholder={localData.jobTitle}/>
                        <label style={All.FormTitle}>{localData.company}</label>
                        <input style={All.InputField} type="text" name="company" onChange={onChange} placeholder={localData.company}/>
                        <Box sx={All.DateInputFields}>
                            <Box sx={All.DateInputField}>
                                <label style={All.FormTitle}>{localData.startDate}</label>
                                <input style={All.InputField} type="date" name="startDate" onChange={onChange}/>
                            </Box>
                            <Box sx={All.DateInputField}>
                                <label style={All.FormTitle}>{localData.endDate}</label>
                                <input style={All.InputField} type="date" name="endDate" onChange={onChange}/>
                            </Box>
                        </Box>
                        <label style={All.FormTitle}>{localData.description}</label>
                        <input style={All.InputField} type="text" name="description" onChange={onChange} placeholder="Main tasks"/>

                        <button className="save-button save-button--disabled" type="submit" disabled ref={saveButtonRef}>
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