import TextField from "./TextField";

function Form({ label, children }) {
  return (
    <div className="flex flex-col items-center p-3 bg-white w-1/2 m-10 rounded-2xl shadow font-sans">
      <h1 className="text-2xl">{label} Form</h1>
      {children}
      <div className="flex flex-col items-center w-full bg-blue-300 text-white w-full p-3 rounded-2xl text-2xl m-4 hover:opacity-90">
        <a href="#">{label}</a>
      </div>
    </div>
  )
}

export function SignIn() {
  return (
    <Form label="Sign In">
      <TextField label="username"/>
      <TextField label="password" password />
      <div className="w-full p-1">
        <a href="#" className="font-medium text-md">forgot password?</a>
      </div>
    </Form>
  )
}

export function SignUp() {
  return (
    <Form label="Sign Up">
      <TextField label="username"/>
      <TextField label="email"/>
      <TextField label="password" password />
      <TextField label="repeat password" password />
    </Form>
  );
}