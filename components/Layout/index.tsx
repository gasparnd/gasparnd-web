import React, { useState } from "react";

export const Layout = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  return (
    <div className="max-width-screen">
      <main
        style={{ minHeight: "100vh", width: 710, margin: "0 auto" }}
        className=" h-full px-4 py-24"
      >
        {children}
      </main>
    </div>
  );
};
