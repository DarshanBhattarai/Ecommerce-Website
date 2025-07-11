import jwt from "jsonwebtoken";

const isLoggedIn = (req, res, next) => {
  try {
    console.log(req.cookies);
    const token = req.cookies.authToken;

    if (!token) {
      throw new Error("User not Authenticated");
    }
    console.log(token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    res.send(error.message);
  }
};

export default isLoggedIn;
