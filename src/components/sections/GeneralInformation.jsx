import {useState} from "react"; 
import Box from "@mui/material/Box"
import Person from "@mui/icons-material/Person"; 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as All from "../../data/data.js";
import CheckIcon from '@mui/icons-material/Check';

function GeneralInformation() {
    const [formValue, setFormValue] = useState({firstName: '', lastName: '', email: '', phoneNumber: '', cityAndProvince: ''}); 
    const [isVisible, setIsVisible] = useState(false); 
    const localData = All.data[0];  

    function toggle() {
        let show = isVisible; 
        show = !show; 
        setIsVisible(show); 
    }

    const handleInput = (e) => {
        // a good technique to get the name and the value (you cannot use the invalid names for {name, value}. the names should always match)
        const {name, value} = e.target; 
        setFormValue({...formValue, [name]: value}); 
        
        console.log(formValue); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
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
                    <Box sx={All.DropDown} component="form" onSubmit={handleSubmit} id="GeneralInformationForm">
                        <label style={All.FormTitle}>{localData.firstName}</label>
                        <input style={All.InputField} name="firstName" type="text" onChange={handleInput} placeholder={localData.firstName}/>
                        <label style={All.FormTitle}>{localData.lastName}</label>
                        <input style={All.InputField} name="lastName" type="text" onChange={handleInput} placeholder={localData.lastName}/>
                        <label style={All.FormTitle}>{localData.email}</label>
                        <input style={All.InputField} name="email" type="text" onChange={handleInput} placeholder={localData.email}/>
                        <label style={All.FormTitle}>{localData.phoneNumber}</label>
                        <input style={All.InputField} name="phoneNumber" type="text" onChange={handleInput} placeholder={localData.phoneNumber}/>
                        <label style={All.FormTitle}>{localData.cityAndProvince}</label>
                        <input style={All.InputField} name="cityAndProvince" type="text" onChange={handleInput} placeholder={localData.cityAndProvince}/>

                        <button style={All.SaveButton} type="submit">
                            <CheckIcon />
                            Save
                        </button>
                    </Box>
                ) : null}
            </Box>
        </Box>
    )
}

export default GeneralInformation; 