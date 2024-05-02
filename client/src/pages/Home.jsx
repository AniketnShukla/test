import React, {useEffect, useState } from 'react';
import axios from "axios";

const Home = () => {
  const [notes, setNotes] = useState([]);

useEffect(() => {
  const fetchNotes = async() => {
    try {
      const res = await axios.get("http://localhost:3000/notes");
      setNotes(res.data); 
    } catch (error) {
      console.error("Error fetching notes: ", error);
    }
  }
  fetchNotes();
}, []);  

const handleAddNote = async () => {
  const title = window.prompt("Enter note title:");
  const note_content = window.prompt("Enter note content:");
  if (!title || !note_content) {
    // Exit early if title or note_content is empty
    return;
  }
  try {
    const res = await axios.post('http://localhost:3000/notes', {
      title,
      note_content,
    });
    setNotes(prev => [...prev, res.data.note])
  } catch (error) {
    console.error('Error adding note:', error);
  }
};

const handleEdit = async (id) => {
  //Implement edit functionalityx
  const noteToEdit = notes.find((note) => note.note_id === id);
  const newTitle = prompt('Enter new title:', noteToEdit.title);
  const newContent = prompt('Enter new content:', noteToEdit.note_content);
  try {
    await axios.put(`http://localhost:3000/notes/${id}`, {
      title: newTitle,
      note_content: newContent,
    });
    const updatedNotes = notes.map((note) => {
      if (note.note_id === id) {
        return { ...note, title: newTitle, note_content: newContent };
      }
      return note;
    });
    setNotes(updatedNotes);
  } catch (error) {
    console.error('Error updating note:', error);
  }
};

const handleDelete = async (id) => {
  //Implement delete functionality
  try {
    await axios.delete(`http://localhost:3000/notes/${id}`);
    setNotes(notes.filter((note) => note.note_id !== id));
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};

  return (
    <>
  <button className="btn btn-primary m-2" onClick={handleAddNote}>Add Note</button>
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Note Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => (
          <tr key={note.note_id}>
            <td>{note.title}</td>
            <td>{note.note_content}</td>
            <td className="d-flex">
              <button className="btn btn-primary mr-2" onClick={() => handleEdit(note.note_id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDelete(note.note_id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
  </table>
    </>
  )
}

export default Home