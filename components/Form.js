import TextField from "./TextField";

function Form({ label, children }) {
  return (
    <div className="flex flex-col items-center px-4 py-6 bg-white w-[448px] rounded-2xl shadow font-sans">
      <div className="flex flex-col w-full h-full items-center">
        <h1 className="text-3xl">{label}</h1>
        <br/>
        {children}
        <div className="flex flex-col items-center w-full bg-blue-500 font-[Gilroy-Light] text-2xl text-white rounded-2xl hover:opacity-80 py-4 mt-10">
          <a href="#">{label}</a>
        </div>
      </div>
    </div>
  )
}

export function SignIn() {
  return (
    <Form label="Sign In">
      <TextField label="Username"/>
      <TextField label="Password" password />
      <div className="w-full px-1 pt-4">
        <a href="#" className="font-medium text-md">Forgot password?</a>
      </div>
    </Form>
  )
}

export function SignUp() {
  return (
    <Form label="Sign Up">
      <TextField label="Username"/>
      <TextField label="Email"/>
      <TextField label="Password" password />
      <TextField label="Repeat password" password />
    </Form>
  );
}