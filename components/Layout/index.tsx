import React, { useState } from "react";

export const Layout = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  return (
    <div>
      <main
        style={{ minHeight: "100vh" }}
        className="w-full md:w-maxWidth md:m-0Auto h-full px-4 py-24"
      >
        {children}
      </main>
    </div>
  );
};
