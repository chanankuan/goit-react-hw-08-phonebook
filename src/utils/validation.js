// Email validation
export const validateEmail = email => {
  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegexp.test(email);
};

export const validatePass = password => {
  const passRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{7,}$/;
  return passRegex.test(password);
};
