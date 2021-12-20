import { useEffect, useState } from "react";
import { Form } from "./components/Form.jsx";
import { getDataFromLocalStorage } from "./helpers/getDataFromLocalStorage.js";
import { setDataToLocalStorage } from "./helpers/setDataToLocalStorage.js";

function App() {
  const [user, setUser] = useState({
    userName: "",
    pass: "",
  });
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      userName,
      password,
    };
    setUser(user);
  };
  const handleSetUserName = (e) => {
    const userName = e.target.value;
    setUserName(userName);
  };

  const handleSetPassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  useEffect(() => {
    return () => {
      if (userName || password) {
        setDataToLocalStorage("loginInfo", [userName, password]);
      }
    };
  });
  useEffect(() => {
    const data = getDataFromLocalStorage("loginInfo");
    setUserName(data ? data[0] : null);
    setPassword(data ? data[1] : null);
  }, []);
  return (
    <div>
      <h1>Login Form</h1>
      <Form
        handleSetPassword={handleSetPassword}
        handleSetUserName={handleSetUserName}
        handleSubmit={handleSubmit}
        userName={userName}
        password={password}
      />
    </div>
  );
}

export default App;
