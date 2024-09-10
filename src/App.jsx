import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-center  ">
        <div className="border mt-5 text-2xl px-2 py-2 rounded-2xl border-red-800 text-whitef">
          create account
        </div>
      </div>
      <Input placeholder={"Passord"} type={"password"} className="w-1/2" />
      <Button>Hello Shadcn</Button>
    </div>
  );
}

export default App;
