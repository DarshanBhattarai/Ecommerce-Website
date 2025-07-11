import bycrpt from "bcrypt";

export const hashPassword = (password) => bycrpt.hash(password, 10);