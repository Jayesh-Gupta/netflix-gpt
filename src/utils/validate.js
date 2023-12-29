export const checkValidateData = (email, password) => {
    
  const isValidEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(  email );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    
  if (!isValidEmail) return "Email Not Valid!!";
  if (!isValidPassword) return "Password Not Valid!!";

  return null;
};
