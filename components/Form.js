import TextField from "./TextField";
import { useRouter } from "next/router";
import { userService } from "../services";

function Form({ label, children, onSubmit, ...props }) {
  return (
    // TODO: Implement form submission
    <form className="flex flex-col items-center px-4 py-6 bg-white w-[448px] rounded-2xl shadow font-sans"
          onSubmit={onSubmit}
          {...props}>
      <div className="flex flex-col w-full h-full items-center gap-6">
        <h1 className="text-3xl pb-4">{label}</h1>
        {children}
        <div className="flex flex-col items-center
                        w-full bg-primary
                        font-[Gilroy-Light] text-2xl text-white rounded-2xl hover:opacity-80 py-4 mt-10">
          <input type="submit" className="w-full text-center" value={label}/>
        </div>
      </div>
    </form>
  )
}

export function SignIn() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const e = event.target;
    const [username, password, email] = [e.username.value, e.password.value, e.email?.value];
    return userService.login(username, password)
      .then(() => {
        const returnUrl = router.query.returnUrl || '/';
        router.push(returnUrl);
      })
      .catch(alert)
  }
  return (
    <Form label="Sign In" onSubmit={handleSubmit}>
      <TextField label="Username" name='username'/>
      <TextField label="Password" name='password' password/>
      <div className="w-full px-1">
        <a href="#" className="font-medium text-md">Forgot password?</a>
      </div>
    </Form>
  )
}

export function SignUp() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const e = event.target;
    const [username, password, email] = [e.username.value, e.password.value, e.email?.value];
    return userService.register({ username, password, email })
      .then(() => {
        alert('Registration successful. Please sign in.');
        router.push('/signIn');
      })
      .catch(alert)
  }
  return (
    <Form label="Sign Up" onSubmit={handleSubmit}>
      <TextField label="Username" name='username'/>
      <TextField label="Email"  name='email'/>
      <TextField label="Password" name='password' password/>
      <TextField label="Repeat password" password/>
    </Form>
  );
}