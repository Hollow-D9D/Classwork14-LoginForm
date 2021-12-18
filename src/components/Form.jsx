export function Form({ handleSetUserName, handleSetPassword, handleSubmit }) {
  return (
    <form>
      <input type="text" placeholder="UserName" onChange={handleSetUserName} />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={handleSetPassword}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
