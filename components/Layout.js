import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full h-screen font-[Gilroy-Medium]">
      <Nav/>
      <main className="flex justify-center w-full h-full">
        {children}
      </main>
    </div>
  );
}