import {useState} from "react"; 
import {useRef} from "react"; 
import {useEffect} from "react"; 
import Box from "@mui/material/Box";
import SchoolIcon from '@mui/icons-material/School';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import * as All from "../../data/data.js";
import "../../styles/sections/style.css"; 

function EducationExperience({onClick, onChange, onSubmit, formValues, formData}) {
    const saveButtonRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false); 
    const [isReflected, setIsReflected] = useState(false); 
    const localData = All.data[1]; 
    const educationInfoData = formData.length !== 0 ? formData[1] : []; 

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
            filledFields.length === Object.keys(formValues).length ? (enableSaveButton()) : (disableSaveButton()); 
        }
    }, [formValues])

    useEffect(() => {
        handleReflection(); 
    }, [formData]); 

    function handleReflection() {
        const filledFields = Object.values(educationInfoData).filter((value) => {
            return value !== ''; 
        })
        if(isReflected === false && Object.values(educationInfoData).length !== 0) {
            filledFields.length === Object.values(educationInfoData).length && (setIsVisible(false), setIsReflected(true)); 
        }
        else if(isReflected === true) {
            if(filledFields.length !== Object.values(educationInfoData).length) {
                setIsReflected(false); 
            }
            setIsVisible(false);  
        }
    }

    function enableSaveButton() {
        saveButtonRef.current.disabled = false; 
        saveButtonRef.current.className = "default-button save-button--enabled"; 
    }

    function disableSaveButton() {
        saveButtonRef.current.disabled = true; 
        saveButtonRef.current.className = "default-button save-button--disabled"
    }

    const viewTemplate = (
        <Box sx={All.DropDown} component="form" onSubmit={onSubmit} id="EducationInformationForm">
            <label style={All.FormTitle}>{localData.degree}</label>
            <input style={All.InputField} type="text" name="degree" value={formValues.degree} onChange={onChange} placeholder={localData.degree}/>
            <label style={All.FormTitle}>{localData.school}</label>
            <input style={All.InputField} type="text" name="school" value={formValues.school} onChange={onChange} placeholder={localData.school}/>
            <label style={All.FormTitle}>{localData.city}</label>
            <input style={All.InputField} type="text" name="city" value={formValues.city} onChange={onChange} placeholder={localData.city}/>
            <label style={All.FormTitle}>{localData.country}</label>
            <input style={All.InputField} type="text" name="country" value={formValues.country} onChange={onChange} placeholder={localData.country}/>
            <Box sx={All.DateInputFields}>
                <Box sx={All.DateInputField}>
                    <label style={All.FormTitle}>{localData.startDate}</label>
                    <input style={All.InputField} type="date" name="startDate" value={formValues.startDate} onChange={onChange}/>
                </Box>
                <Box sx={All.DateInputField}> 
                    <label style={All.FormTitle}>{localData.endDate}</label>
                    <input style={All.InputField} type="date" name="endDate" value={formValues.endDate} onChange={onChange}/>
                </Box>
            </Box>
            
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                {isReflected ? <button className="clear-button default-button" onClick={onClick}>
                    <DeleteIcon />
                    Clear
                </button> : null}
                <button className="default-button save-button--disabled" type="submit" disabled ref={saveButtonRef}>
                    <CheckIcon />
                    Save
                </button>
            </Box>
        </Box>
    )   

    const reflectionTemplate = (
        <Box sx={{marginTop: "25px", display: "flex", flexDirection: "column", fontSize: "1.1em"}}>
            <Box sx={{width: "100%", height: "6px", background: "rgb(120, 120, 120)"}}></Box>
            <label style={{fontWeight: "700"}}>{educationInfoData.degree}</label>
            <label style={{fontStyle: "italic"}}>{educationInfoData.school}</label>
            <label>{educationInfoData.city}</label>
            <label>{educationInfoData.country}</label>
            <label>{educationInfoData.startDate}</label>
            <label>{educationInfoData.endDate}</label>
            <button className="edit-button default-button" onClick={() => toggle()}>Edit</button>
        </Box>
    )

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
                {isVisible ? viewTemplate : null}
                {isReflected ? reflectionTemplate : null}
            </Box>
        </Box>
    )
}

export default EducationExperience; 