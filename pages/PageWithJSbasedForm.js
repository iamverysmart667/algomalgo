import { alertService, userService } from "../services";
import { useRouter } from "next/router";

export default function PageWithJSbasedForm() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    const {username, password} = data;
    return userService.login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || '/';
        router.push(returnUrl);
      })
      .catch((error) => {
        alert(error);
      })
  }
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="first" name="username" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="password" required />

      <button type="submit">Submit</button>
    </form>
  )
}
