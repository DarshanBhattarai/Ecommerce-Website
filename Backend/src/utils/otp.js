import otpGenerator from "otp-generator";
const otpGenerate = () => {
  const otp = otpGenerator.generate(4, {
    digits: true,
    alphabets: true,
    upperCase: true,
    specialChars: true,
  });
  console.log(otp);
  return otp;
};

export {otpGenerate};
