import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    let date = new Date();
    let strTime = date.toLocaleString("en-US", {
      timeZone: "America/Argentina/Mendoza",
    });

    setTime(strTime.split(",")[1]);
    setInterval(() => {
      let date = new Date();
      let strTime = date.toLocaleString("en-US", {
        timeZone: "America/Argentina/Mendoza",
      });

      setTime(strTime.split(",")[1]);
    }, 1000);
  }, []);

  return (
    <footer className="mt-32 ">
      <p className="text-white text-lg">
        Currently in Argentina (GMT-3) - {time}{" "}
      </p>
    </footer>
  );
};
