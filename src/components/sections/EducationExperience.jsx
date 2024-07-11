import {useState} from "react"; 
import {useRef} from "react"; 
import {useEffect} from "react"; 
import Box from "@mui/material/Box";
import SchoolIcon from '@mui/icons-material/School';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import * as All from "../../data/data.js";
import "../../styles/sections/style.css"; 

function EducationExperience({onChange, onSubmit, formValues}) {
    const saveButtonRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false); 
    const localData = All.data[1]; 

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
                    <SchoolIcon />
                    <label style={All.MainTitle}>{localData.title}</label>
                {isVisible ? (
                    <KeyboardArrowUpIcon onClick={toggle} sx={All.Arrow}/>
                ) : (<KeyboardArrowDownIcon onClick={toggle} sx={All.Arrow}/>)}
                </Box>
                {isVisible ? (
                    <Box sx={All.DropDown} component="form" onSubmit={onSubmit} id="EducationInformationForm">
                        <label style={All.FormTitle}>{localData.degree}</label>
                        <input style={All.InputField} type="text" name="degree" onChange={onChange} placeholder={localData.degree}/>
                        <label style={All.FormTitle}>{localData.school}</label>
                        <input style={All.InputField} type="text" name="school" onChange={onChange} placeholder={localData.school}/>
                        <label style={All.FormTitle}>{localData.city}</label>
                        <input style={All.InputField} type="text" name="city" onChange={onChange} placeholder={localData.city}/>
                        <label style={All.FormTitle}>{localData.country}</label>
                        <input style={All.InputField} type="text" name="country" onChange={onChange} placeholder={localData.country}/>
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

export default EducationExperience; 