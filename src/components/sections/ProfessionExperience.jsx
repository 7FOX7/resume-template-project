import {useState} from "react"; 
import {useRef} from "react"; 
import {useEffect} from "react"; 
import Box from "@mui/material/Box"
import WorkIcon from '@mui/icons-material/Work';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import * as All from "../../data/data.js";
import "../../styles/sections/style.css"; 

function ProfessionExperience({onClick, onChange, onSubmit, formValues, formData}) {
    const saveButtonRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false); 
    const [isReflected, setIsReflected] = useState(false); 
    const localData = All.data[2]; 
    const professionInfoData = formData.length !== 0 ? formData[2] : []; 

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
        const filledFields = Object.values(professionInfoData).filter((value) => {
            return value !== ''; 
        })
        if(isReflected === false && Object.values(professionInfoData).length !== 0) {
            filledFields.length === Object.values(professionInfoData).length && (setIsVisible(false), setIsReflected(true)); 
        }
        else if(isReflected === true) {
            if(filledFields.length !== Object.values(professionInfoData).length) {
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
        <Box sx={All.DropDown} component="form" onSubmit={onSubmit} id="ProfessionInformationForm">
            <label style={All.FormTitle}>{localData.jobTitle}</label>
            <input style={All.InputField} type="text" name="jobTitle" value={formValues.jobTitle} onChange={onChange} placeholder={localData.jobTitle}/>
            <label style={All.FormTitle}>{localData.company}</label>
            <input style={All.InputField} type="text" name="company" value={formValues.company} onChange={onChange} placeholder={localData.company}/>
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
            <label style={All.FormTitle}>{localData.description}</label>
            <input style={All.InputField} type="text" name="description" value={formValues.description} onChange={onChange} placeholder="Main tasks"/>

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
            <label style={{fontWeight: "700"}}>{professionInfoData.jobTitle}</label>
            <label style={{fontStyle: "italic"}}>{professionInfoData.company}</label>
            <label>{professionInfoData.startDate}</label>
            <label>{professionInfoData.endDate}</label>
            <label>{professionInfoData.description}</label>
            <button className="edit-button default-button" onClick={() => toggle()}>Edit</button>
        </Box>
    )

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
                {isVisible ? viewTemplate : null}
                {isReflected ? reflectionTemplate : null}
            </Box>
        </Box>
    )
}

export default ProfessionExperience; 