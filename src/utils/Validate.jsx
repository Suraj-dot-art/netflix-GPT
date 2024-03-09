 
const Validate = (email,password,fName) => {
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fName);

    if(!isPassValid) return "password is invalid";
    if(!isEmailValid) return "mail is invalid ";
    if(!isNameValid) return "enter your full name";

    return null;
}

export default Validate;