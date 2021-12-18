export function Form({
  handleSetUserName,
  handleSetPassword,
  handleSubmit,
  userName,
  password,
}) {
  // const isEmpty = { false: "REQUIRED", true: "" };
  return (
    <form>
      <label style={{ color: "red" }}>
        <input
          type="text"
          placeholder="UserName"
          required
          onChange={handleSetUserName}
        />
        <br />
        {!!userName || "Required!"}
      </label>
      <br />
      <label style={{ color: "red" }}>
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleSetPassword}
        />
        <br />
        {!!password || "Required!"}
      </label>
      <br />
      <button onClick={handleSubmit} disabled={!userName || !password}>
        Submit
      </button>
    </form>
  );
}
