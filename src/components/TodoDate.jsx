import React, { useEffect, useState } from "react";

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center mb-8">
      <h1 className="text-white text-3xl font-medium">{dateTime}</h1>
    </section>
  );
};

export default TodoDate;
