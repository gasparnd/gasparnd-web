import React, { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Layaut = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  return (
    <div className="max-width-screen">
      {/* <header className="border-b border-border py-4 px-6">
        <div>
          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? (
              <BsFillSunFill size={26} />
            ) : (
              <BsFillMoonFill size={26} />
            )}
          </button>
        </div>
      </header> */}
      <main
        style={{ height: "100vh" }}
        className="m-0Auto w-maxWidth flex items-center h-full"
      >
        {children}
      </main>
    </div>
  );
};

export default Layaut;
