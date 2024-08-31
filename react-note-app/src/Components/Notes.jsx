// import React, { useEffect, useState } from 'react'
// import CreateNote from './CreateNote'
// import './notes.css'
// import {v4 as uuid} from 'uuid'
// import Note from './Note'

// const Notes = () => {
//     const [inputText, setInputText] = useState("")
//     const [notes, setNotes] = useState([])
//     const [editToggle, setEditToggle] = useState(null)

//     const editHandler = (id,text) => {
//         setEditToggle(id)
//         setInputText(text)
//     }
//     const saveHandler = () => {
//         if(editToggle) {
//             setNotes(notes.map((note) => (
//                 note.id === editToggle ?
//                 {...note, text: inputText}
//                 : note
//             )))
//         } else {
//             setNotes((prevNotes) => [
//                 ...prevNotes, {
//                     id: uuid(),
//                     text: inputText
//                 }
//             ])
//         }
        
//         setInputText("")
//         setEditToggle(null)
//     }

//     const deleteHandler = (id) => {
//         const newNotes = notes.filter(n => n.id !== id)
//         setNotes(newNotes)
//     }

//     useEffect(() => {
//         const data = JSON.parse(localStorage.getItem("Notes"));
//         if (data) {
//           setNotes(data);
//         }
//       }, []);

//   useEffect(() => {
//     localStorage.setItem("Notes", JSON.stringify(notes));
//   }, [notes]);
//   return (
//     <div className='notes'>
//         {
//             notes.map((note) => (
//                 editToggle === note.id ?
//                 <CreateNote 
//                         inputText={inputText}
//                         setInputText = {setInputText} 
//                         saveHandler = {saveHandler}
//                         />
//                 :
//                 <Note
//                     key={note.id}
//                     id={note.id}
//                     text={note.text}
//                     editHandler = {editHandler}
//                     deleteHandler= {deleteHandler}
//                 >
//                 </Note>
//             ))
//         }
//         {
//             editToggle === null ? 
//             <CreateNote 
//             inputText={inputText}
//             setInputText = {setInputText} 
//             saveHandler = {saveHandler}
//         /> : <></>
//         }
        
//     </div>
//   )
// }

// export default Notes


import React, { useEffect, useState } from 'react';
import CreateNote from './CreateNote';
import './notes.css';
import { v4 as uuid } from 'uuid';
import Note from './Note';

const Notes = () => {
    const [inputText, setInputText] = useState("");
    const [notes, setNotes] = useState([]);
    const [editToggle, setEditToggle] = useState(null);

    // Load notes from localStorage on component mount
    useEffect(() => {
        const storedNotes = localStorage.getItem("Notes");
        if (storedNotes) {
            try {
                const parsedNotes = JSON.parse(storedNotes);
                // Check if parsedNotes is an array
                if (Array.isArray(parsedNotes)) {
                    setNotes(parsedNotes);
                } else {
                    console.error('Stored notes are not an array.');
                }
            } catch (error) {
                console.error('Failed to parse stored notes:', error);
            }
        }
    }, []);

    // Save notes to localStorage whenever the notes state changes
    useEffect(() => {
        try {
            localStorage.setItem("Notes", JSON.stringify(notes));
        } catch (error) {
            console.error('Failed to save notes to localStorage:', error);
        }
    }, [notes]);

    // Handle editing a note
    const editHandler = (id, text) => {
        setEditToggle(id);
        setInputText(text);
    };

    // Save a new or edited note
    const saveHandler = () => {
        if (inputText.trim() === "") {
            return; // Prevent saving empty notes
        }

        if (editToggle) {
            // Update existing note
            setNotes(notes.map(note =>
                note.id === editToggle ? { ...note, text: inputText } : note
            ));
        } else {
            // Add new note
            setNotes(prevNotes => [
                ...prevNotes,
                { id: uuid(), text: inputText }
            ]);
        }

        // Reset input and editToggle
        setInputText("");
        setEditToggle(null);
    };

    // Handle deleting a note
    const deleteHandler = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className='notes'>
            {notes.map((note) => (
                editToggle === note.id ?
                <CreateNote
                    key={note.id}
                    inputText={inputText}
                    setInputText={setInputText}
                    saveHandler={saveHandler}
                /> :
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                />
            ))}
            {editToggle === null && (
                <CreateNote
                    inputText={inputText}
                    setInputText={setInputText}
                    saveHandler={saveHandler}
                />
            )}
        </div>
    );
};

export default Notes;
