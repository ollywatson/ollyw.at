import React, { useState, useEffect } from "react";
import axios from "axios";

const HoverFact = () => {
  const [fact, setFact] = useState("");
  const [typedFact, setTypedFact] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const fetchFact = async () => {
      try {
        let context = "";
        let useTime = Math.random() < 0.5; // Randomly choose time or location

        if (useTime) {
          // ✅ Get current time of day
          const hour = new Date().getHours();
          if (hour >= 6 && hour < 12) context = "morning";
          else if (hour >= 12 && hour < 17) context = "afternoon";
          else if (hour >= 17 && hour < 23) context = "evening";
          else context = "late night";
        } else {
          // ✅ Get user's location
          const locationResponse = await axios.get("https://ipapi.co/json/");
          const region = locationResponse.data.region; // Assuming 'region' gives the nearest major city
          context = `in ${region}`;
        }

        // ✅ OpenAI prompt with dynamic context
        const prompt = `
          Generate exactly one whimsical, self-deprecating fact about Olly, a digital product designer.
          The fact must be based on: **${context}**.

          Strict rules:
          - The fact must be **under 130 characters**.
          - Do **not** repeat or restart the sentence.
          - Only return **one** fact, without additional responses.
          - No introductions like "Here's a fact:".
          - Try not to start the fact with the word "Olly".
          - Try not to start the fact with "In {location}..." or "In {time of day}..."
          - Don't flatter or boast about Olly's design work.
          - Don't mention obvious landmarks such as "Big Ben", "Buckingham Palace", "The London Underground" or "The London Eye".
          - Don't mention the queen.
          - Don't mention pigeons.

          Example:
          - "It’s evening. This is when Olly makes wildly ambitious redesigns he'll regret tomorrow."
          - "You're in Berlin? Olly once spent an entire trip there redesigning street signs in his head."
        `;

        const noContextPrompt = `
          Generate exactly one funny, exaggerated, unflattering, and completely unverifiable, modest fact about Olly, a digital product designer.

          Strict rules:
          - The fact must be **under 130 characters**.
          - Do **not** repeat or restart the sentence.
          - Only return **one** fact, without additional responses.
          - No introductions like "Here's a fact:".
          - Don't flatter or boast about Olly's design work, aim for silliness.
          - Try not to start the fact with the word "Olly".

          Example:
          - "It’s evening. This is when Olly makes wildly ambitious redesigns he'll regret tomorrow."
          - "You're in Berlin? Olly once spent an entire trip there redesigning street signs in his head."
        `;

        // ✅ Call the function in app/api/openai/route.ts
        // Adjusted the API endpoint to a correct path

        const messages = [
          { role: "system", content: "You are a witty AI making up fun, whimsical, self-deprecating facts about Olly's design work. Keep responses concise and unique." },
          { role: "user", content: prompt },
        ];

        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages }),
        });
        
        // ✅ Parse the JSON before accessing it
        const aiResponse = await response.json();
        
        // ✅ Debugging log
        // console.log("OpenAI Response:", aiResponse);
        
        // ✅ Check if OpenAI returned a valid response
        if (!aiResponse || !aiResponse.choices || aiResponse.choices.length === 0) {
          console.error("Invalid API response:", aiResponse);
          return "Error: No response from AI.";
        }
        
        // ✅ Extract the AI response safely
        let aiFact = aiResponse.choices[0]?.message?.content?.trim() || "Error: No content.";
        // console.log("Generated Fact:", aiFact); // Debugging log
        
        // ✅ Clean the fact from unwanted phrases
        const unwantedPhrases = ["Sure thing,", "Here's a fun fact:", "Of course!", "Here's something fun:"];
        for (const phrase of unwantedPhrases) {
          if (aiFact.startsWith(phrase)) {
            aiFact = aiFact.replace(phrase, "").trim();
          }
        }

        // aiFact = trimToWholeWord(aiFact, 130);

        // ✅ Set Fact & Delay Typing Effect
        setFact(aiFact);
        setTypedFact("");
        setTypingIndex(0);
        
        setTimeout(() => {
          setIsTyping(true); // ✅ Start typing effect AFTER delay
        }, 300);

      } catch (error) {
        console.error("Error fetching hover fact:", error);
        setFact("Fun fact: Olly is debugging something at this very moment (probably this).");
        setIsTyping(true);
      }
    };

    fetchFact();
  }, []);

  // ✅ Typing Effect with Delay Before Start
  useEffect(() => {
    if (!fact || !isTyping || typingIndex >= fact.length) return;

    const interval = setInterval(() => {
      setTypedFact((prev) => prev + fact[typingIndex]);
      setTypingIndex((prev) => prev + 1);

      if (typingIndex + 1 >= fact.length) {
        clearInterval(interval);
      }
    }, 30); // Adjust speed (milliseconds per letter)

    return () => clearInterval(interval);
  }, [typingIndex, fact, isTyping]);

  return <span>{typedFact}</span>; // ✅ Returns the typed-out fact
};

export default HoverFact;
