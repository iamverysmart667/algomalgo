import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Navbar/>
      <main className="flex justify-center items-center w-full h-full">
        {children}
      </main>
    </div>
  );
}

export default Layout;