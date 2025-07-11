const isAdmin = (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "admin") {
      throw new Error("You are not an admin");
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default isAdmin;
