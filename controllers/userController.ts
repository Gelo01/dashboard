import { v4 as uuidv4 } from "uuid";
import validator from "validator";

interface Account {
  _id: string;
  username: string;
  email: string;
  password: string;
}

const Accounts: Account[] = [
  {
    _id: "60599e63-383f-4cb0-8ac3-0e9b6e6c63ba",
    username: "test1",
    email: "test1@test.com",
    password: "test1",
  },
  {
    _id: "49a8d2f8-568b-442e-9b91-175fb3cd0f60",
    username: "test2",
    email: "test2@test.com",
    password: "test2",
  },
];

const showAll = () => {
  return Accounts;
};

const showInfo = (id: string) => {
  let account = Accounts.find((acc) => {
    return acc._id == id;
  });

  return account || "user not found"; //null coalescense
};

const login = (usernameParam: string, passwordParam: string) => {
  let index = Accounts.findIndex((acc) => {
    return acc.username == usernameParam && acc.password == passwordParam;
  });

  if (index > -1) {
    return "login success";
  } else {
    return "wrong password";
  }
};

const register = (
  usernameParam: string,
  emailParam: string,
  passwordParam: string,
  confirmpasswordParam: string
) => {
  if (!validator.isEmail(emailParam)) {
    return "email is invalid";
  }

  if (passwordParam == confirmpasswordParam) {
    let newAccount = {
      _id: uuidv4(),
      username: usernameParam,
      email: emailParam,
      password: confirmpasswordParam,
    };

    Accounts.push(newAccount);

    return newAccount;
  } else {
    return false;
  }
};

const changePassword = (
  usernameParam: string,
  oldpasswordParam: string,
  newpasswordParam: string,
  confirmnewpasswordParam: string
) => {
  return "password sucessfully changed";
};

const changeEmail = (emailParam: string, newemailParam: string) => {
  return "email sucessfully changed";
};

const deleteAccount = (id: string) => {
  return "account sucessfully deleted";
};

export {
  Accounts,
  showAll,
  showInfo,
  login,
  register,
  changePassword,
  changeEmail,
  deleteAccount,
  uuidv4,
};
