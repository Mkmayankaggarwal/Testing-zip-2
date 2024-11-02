import React, { useEffect, useState } from "react";

const AnimatedText = ({ onLoad }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoad();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoad]);

  const containerStyle = {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  };

  const keyframes = `
        @keyframes animate {
            0% {
                background-position: -500%;
            }
            100% {
                background-position: 500%;
            }
        }
    `;

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      <img src="images/logo1.png" alt="" />
    </div>
  );
};

export default AnimatedText;
