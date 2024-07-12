import {useState} from "react"; 
import {useRef} from "react"; 
import {useEffect} from "react"; 
import Box from "@mui/material/Box"; 
import Person from "@mui/icons-material/Person"; 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import * as All from "../../data/data.js";
import CheckIcon from '@mui/icons-material/Check';
import "../../styles/sections/style.css"; 

function GeneralInformation({onClick, onChange, onSubmit, formValues, formData}) { 
    const saveButtonRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false); 
    const [isReflected, setIsReflected] = useState(false); 
    const localData = All.data[0];  
    const generalInfoData = formData.length !== 0 ? formData[0] : []; 

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
        const filledFields = Object.values(generalInfoData).filter((value) => {
            return value !== ''; 
        })
        if(isReflected === false && Object.values(generalInfoData).length !== 0) {
            filledFields.length === Object.values(generalInfoData).length && (setIsVisible(false), setIsReflected(true)); 
        }
        else if(isReflected === true) {
            if(filledFields.length !== Object.values(generalInfoData).length) {
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
        <Box sx={All.DropDown} component="form" onSubmit={onSubmit} id="GeneralInformationForm">
            <label style={All.FormTitle}>{localData.firstName}</label>
            <input style={All.InputField} name="firstName" type="text" value={formValues.firstName} onChange={onChange} placeholder={localData.firstName}/>
            <label style={All.FormTitle}>{localData.lastName}</label>
            <input style={All.InputField} name="lastName" type="text" value={formValues.lastName} onChange={onChange} placeholder={localData.lastName}/>
            <label style={All.FormTitle}>{localData.email}</label>
            <input style={All.InputField} name="email" type="text" value={formValues.email} onChange={onChange} placeholder={localData.email}/>
            <label style={All.FormTitle}>{localData.phoneNumber}</label>
            <input style={All.InputField} name="phoneNumber" type="text" value={formValues.phoneNumber} onChange={onChange} placeholder={localData.phoneNumber}/>
            <label style={All.FormTitle}>{localData.city}</label>
            <input style={All.InputField} name="city" type="text" value={formValues.city} onChange={onChange} placeholder={localData.city}/>
            <label style={All.FormTitle}>{localData.province}</label>
            <input style={All.InputField} name="province" type="text" value={formValues.province} onChange={onChange} placeholder={localData.province}/>

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
            <label style={{fontWeight: "700"}}>{generalInfoData.firstName}</label>
            <label style={{fontStyle: "italic"}}>{generalInfoData.lastName}</label>
            <label>{generalInfoData.email}</label>
            <label>{generalInfoData.phoneNumber}</label>
            <label>{generalInfoData.city}</label>
            <label>{generalInfoData.province}</label>
            <button className="edit-button default-button" onClick={() => toggle()}>Edit</button>
        </Box>
    )

    return (
        <Box sx={All.Container}>
            <Box sx={All.Wrapper}>
                <Box sx={All.Header}>
                    <Person />
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

export default GeneralInformation; 