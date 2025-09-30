import Hello from "./components/hello";

export default function Home() {
  console.log("I am home");
  
  return (
    <h1 className="text-3xl">
      Welcome to Next.js
      <Hello/>
    </h1>
  );
}
