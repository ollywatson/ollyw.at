'use client';

import React, { useState, useEffect } from 'react';

let i = 0;
let txt = "Replace this with what you want to say.";
let speed = 75;

const Typed = ({ text }: { text: string }) => {
  i = 0;
  useEffect(() => {
    const typeWriter = () => {
      const headerMessage = document.getElementById("typed-message");
      if (headerMessage && i < text.length) {
        headerMessage.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  })
  return (
    <>
      <span id="typed-message"></span>
    </>
  );
}

export default Typed;