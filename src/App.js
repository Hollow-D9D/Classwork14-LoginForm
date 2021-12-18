import { useEffect, useState } from "react";
import { Form } from "./components/Form.jsx";

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
    if (user) {
      document.title = user.userName;
    }
  }, [user]);

  return (
    <div>
      <h1>Login Form</h1>
      <Form
        handleSetPassword={handleSetPassword}
        handleSetUserName={handleSetUserName}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
