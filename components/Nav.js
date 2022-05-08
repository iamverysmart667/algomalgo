import Link from "next/link"
import { userService } from "../services";
import { useEffect, useState } from "react";
import { Logo } from "./svg/Logo";
import { Github } from "./svg/Github";
import { Telegram } from "./svg/Telegram";
import { Avatar } from "./svg/Avatar";
import { Logout } from "./svg/Logout";

const MyLink = ({secondary, children, to= "#", ...props}) => {
  return (
    <Link href={to} {...props}>
      {secondary
        ? <a className="px-4 py-2 text-black text-base font-sans">{children}</a>
        : <a className="bg-primary rounded-3xl px-6 py-2 text-white text-base font-sans hover:opacity-80">{children}</a>
      }
    </Link>
  );
}

const AuthLinks = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe(x => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  return user ? (
    <div className="flex items-center">
      <Avatar/>
      <MyLink to="/Profile" secondary>{user.username}</MyLink>
      <a onClick={logout}><Logout/></a>
    </div>
  ) : (
    <>
      <MyLink secondary to="/signUp">Sign Up</MyLink>
      <MyLink to="/signIn">Sign In</MyLink>
    </>
  )
}

export default function Nav() {
  return (
    <nav className="flex justify-between px-20 py-2 bg-white w-full">
      <Link href='/'><a><Logo/></a></Link>
      <div className="flex px-2 space-x-4">
        <AuthLinks/>
        <Github/>
        <Telegram/>
      </div>
    </nav>
  )
}