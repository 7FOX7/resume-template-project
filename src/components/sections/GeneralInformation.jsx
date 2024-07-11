import {useState} from "react"; 
import {useRef} from "react"; 
import {useEffect} from "react"; 
import Box from "@mui/material/Box"; 
import Person from "@mui/icons-material/Person"; 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as All from "../../data/data.js";
import CheckIcon from '@mui/icons-material/Check';
import "../../styles/sections/style.css"; 

function GeneralInformation({onChange, onSubmit, formValues, formData}) { 
    const saveButtonRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false); 
    const [isEditing, setIsEditing] = useState(false); 
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
            filledFields.length === Object.keys(formValues).length ? (handleEdit()) : (saveButtonRef.current.disabled = true, saveButtonRef.current.className = "save-button save-button--disabled")
        }
    })

    function handleEdit() {

        saveButtonRef.current.disabled = false; 
        saveButtonRef.current.className = "save-button save-button--enabled"; 
        if(isEditing === false && generalInfoData.length !== 0) {
            setIsEditing(true);
        }  
    }
   
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
                {isVisible ? (
                    <Box sx={All.DropDown} component="form" onSubmit={onSubmit} id="GeneralInformationForm">
                        <label style={All.FormTitle}>{localData.firstName}</label>
                        <input style={All.InputField} name="firstName" type="text" onChange={onChange} placeholder={localData.firstName}/>
                        <label style={All.FormTitle}>{localData.lastName}</label>
                        <input style={All.InputField} name="lastName" type="text" onChange={onChange} placeholder={localData.lastName}/>
                        <label style={All.FormTitle}>{localData.email}</label>
                        <input style={All.InputField} name="email" type="text" onChange={onChange} placeholder={localData.email}/>
                        <label style={All.FormTitle}>{localData.phoneNumber}</label>
                        <input style={All.InputField} name="phoneNumber" type="text" onChange={onChange} placeholder={localData.phoneNumber}/>
                        <label style={All.FormTitle}>{localData.city}</label>
                        <input style={All.InputField} name="city" type="text" onChange={onChange} placeholder={localData.city}/>
                        <label style={All.FormTitle}>{localData.province}</label>
                        <input style={All.InputField} name="province" type="text" onChange={onChange} placeholder={localData.province}/>

                        <button className="save-button save-button--disabled" type="submit" disabled ref={saveButtonRef}>
                            <CheckIcon />
                            Save
                        </button>
                    </Box>
                ) : null}
                {isEditing ? (
                    <Box sx={{backgroundColor: "red"}}>
                        <label>{generalInfoData.firstName}</label>
                        <label>{generalInfoData.lastName}</label>
                        <label>{generalInfoData.email}</label>
                        <label>{generalInfoData.phoneNumber}</label>
                        <label>{generalInfoData.city}</label>
                        <label>{generalInfoData.province}</label>
                    </Box>
                ) : null}
            </Box>
        </Box>
    )
}

export default GeneralInformation; 