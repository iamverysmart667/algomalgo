import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Nav/>
      <main className="flex justify-center items-center w-full h-full">
        {children}
      </main>
    </div>
  );
}

export default Layout;