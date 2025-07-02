import userServices from "../services/userServices.js";
const createUser = async (req, res) => {
 try{
   const { name, email, password, phone, confirmPassword } = req.body;
  if (!name || !email || !password || !phone || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  
  const data = await userServices.createUser(req.body);
  res.send(data);
 }catch(err){
 console.log(err.message);
 res.status(500).json({ message: err.message });
 }
};
export { createUser };
