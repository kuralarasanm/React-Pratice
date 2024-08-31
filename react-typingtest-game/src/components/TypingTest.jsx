// import React, { useEffect, useReducer, useRef, useState } from "react";
// import "./style.css";

// const paragraph = `A plant is one of the most important living things that develop
// on the earth and is made up of stems, leaves, roots, and so on.Parts of Plants:
// The part of the plant that developed beneath the soil is referred to as root and
// the part that grows utside of the soil is known as shoot. The shoot consists of
// stems, branches,l eaves, fruits, and flowers. Plants are made up of six main parts:
// roots, stems, leaves, flowers, fruits, and seeds.`;

// const TypingTest = () => {
//   const maxTime = 60;
//   const [timeLeft, setTimeLeft] = useState(maxTime);
//   const [mistakes, setMistakes] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(false);
//   const [WPM, setWPM] = useState(0);
//   const [CPM, setCPM] = useState(0);
//   const inputRef = useRef(null);
//   const charRefs = useRef([]);
//   const [correctWrong, setCorrectWrong] = useState([]);

//   useEffect(() => {
//     inputRef.current.focus();
//     setCorrectWrong(Array(charRefs.current.length).fill(""));
//   }, []);

//   useEffect(() => {
//     let interval;
//     if (isTyping && timeLeft > 0) {
//       interval = setInterval(() => {

//         setTimeLeft(timeLeft - 1);
//         let correctChars = charIndex - mistakes;
//         let totalTime = maxTime - timeLeft;

//         let cpm = correctChars * (60 / totalTime);
//         cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
//         setCPM(parseInt(cpm, 10));

//         let wpm = Math.round((correctChars / 5 / totalTime) * 60);
//         wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
//         setWPM(wpm);

//       }, 1000);
//     } else if (timeLeft === 0) {
//       clearInterval(interval);
//       setIsTyping(false);
//     }
//     return () => {
//       clearInterval(interval);
//     };
//   }, [isTyping, timeLeft]);

//   const resetGame = () => {
//     setIsTyping(false);
//     setTimeLeft(maxTime);
//     setCharIndex(0);
//     setMistakes(0);
//     setCPM(0);
//     setWPM(0);
//     setCorrectWrong(Array(charRefs.current.length).fill(''))
//     inputRef.current.focus();
//   }

//   const handleChange = (e) => {
//     const characters = charRefs.current;
//     let currentChar = charRefs.current[charIndex];
//     let typedChar = e.target.value.slice(-1);
//     if (charIndex < characters.length && timeLeft > 0) {
//       if (!isTyping) {
//         setIsTyping(true);
//       }

//       if (typedChar === currentChar.textContent) {
//         setCharIndex(charIndex + 1);
//         correctWrong[charIndex] = " correct ";
//       } else {
//         setCharIndex(charIndex + 1);
//         setMistakes(mistakes + 1);
//         correctWrong[charIndex] = " wrong ";
//       }
//       if (charIndex === characters.length - 1) setIsTyping(false);
//     } else {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="test">
//         <input
//           type="text"
//           className="input-field"
//           ref={inputRef}
//           onChange={handleChange}
//         />
//         {paragraph.split("").map((char, index) => (
//           <span
//             className={`char ${index === charIndex ? " active" : ""} ${
//               correctWrong[index]
//             }`}
//             ref={(e) => (charRefs.current[index] = e)}
//           >
//             {char}
//           </span>
//         ))}
//       </div>
//       <div className="result">
//         <p>
//           Time Left: <strong>{timeLeft}</strong>
//         </p>
//         <p>
//           Mistakes: <strong>{mistakes}</strong>
//         </p>
//         <p>
//           WPM: <strong>{WPM}</strong>
//         </p>
//         <p>
//           CPM: <strong>{CPM}</strong>
//         </p>
//         <button className="btn" onClick={resetGame}>Try Again</button>
//       </div>
//     </div>
//   );
// };

// export default TypingTest;




import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const paragraph = `A plant is one of the most important living things that develop
on the earth and is made up of stems, leaves, roots, and so on. Parts of Plants:
The part of the plant that developed beneath the soil is referred to as root and
the part that grows outside of the soil is known as shoot. The shoot consists of
stems, branches, leaves, fruits, and flowers. Plants are made up of six main parts:
roots, stems, leaves, flowers, fruits, and seeds.`;

const TypingTest = () => {
  const maxTime = 60;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [mistakes, setMistakes] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [WPM, setWPM] = useState(0);
  const [CPM, setCPM] = useState(0);
  const [inputValue, setInputValue] = useState(""); // New state for input value
  const inputRef = useRef(null);
  const charRefs = useRef([]);
  const [correctWrong, setCorrectWrong] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
    setCorrectWrong(Array(paragraph.length).fill(""));
  }, []);

  useEffect(() => {
    let interval;
    if (isTyping && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsTyping(false);
            return 0;
          }
          return prevTime - 1;
        });

        const totalTime = maxTime - timeLeft;
        const correctChars = charIndex - mistakes;

        const cpm = Math.max(0, (correctChars * (60 / totalTime)));
        setCPM(parseInt(cpm, 10));

        const wpm = Math.max(0, Math.round((correctChars / 5 / totalTime) * 60));
        setWPM(wpm);

      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isTyping, timeLeft, charIndex, mistakes]);

  const resetGame = () => {
    setIsTyping(false);
    setTimeLeft(maxTime);
    setCharIndex(0);
    setMistakes(0);
    setCPM(0);
    setWPM(0);
    setCorrectWrong(Array(paragraph.length).fill(''));
    setInputValue(""); // Clear the input field
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const typedChar = e.target.value.slice(-1);
    const characters = charRefs.current;
    const currentChar = characters[charIndex];

    if (charIndex < characters.length && timeLeft > 0) {
      if (!isTyping) {
        setIsTyping(true);
      }

      const newCorrectWrong = [...correctWrong];
      if (typedChar === currentChar.textContent) {
        newCorrectWrong[charIndex] = " correct ";
        setCharIndex(prevIndex => prevIndex + 1);
      } else {
        newCorrectWrong[charIndex] = " wrong ";
        setMistakes(prev => prev + 1);
        setCharIndex(prevIndex => prevIndex + 1);
      }

      setCorrectWrong(newCorrectWrong);
      setInputValue(e.target.value); // Update input value state

      if (charIndex === characters.length - 1) {
        setIsTyping(false);
      }
    } else {
      setIsTyping(false);
    }
  };

  return (
    <div className="container">
      <div className="test">
        <input
          type="text"
          className="input-field"
          ref={inputRef}
          value={inputValue} // Set the value to controlled state
          onChange={handleChange}
        />
        {paragraph.split("").map((char, index) => (
          <span
            key={index}
            className={`char ${index === charIndex ? " active" : ""} ${correctWrong[index]}`}
            ref={el => charRefs.current[index] = el}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="result">
        <p>Time Left: <strong>{timeLeft}</strong></p>
        <p>Mistakes: <strong>{mistakes}</strong></p>
        <p>WPM: <strong>{WPM}</strong></p>
        <p>CPM: <strong>{CPM}</strong></p>
        <button className="btn" onClick={resetGame}>Try Again</button>
      </div>
    </div>
  );
};

export default TypingTest;
