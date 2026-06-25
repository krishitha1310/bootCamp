import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [dept, setDept] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/students');
      const data = await response.json();
      setStudents(data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      // Update student
      try {
        const response = await fetch('http://localhost:5000/students/' + editingId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, course, dept }),
        });
        if (response.ok) {
          const updatedStudent = await response.json();
          setStudents(students.map(student => student._id === editingId ? updatedStudent.student : student));
          setEditingId(null);
          setName('');
          setCourse('');
          setDept('');
        }
      } catch (error) {
        console.error('Error updating student:', error);
      }
    } else {
      // Add new student
      try {
        const response = await fetch('http://localhost:5000/att', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, course, dept }),
        });
        if (response.ok) {
          const newStudent = await response.json();
          setStudents([...students, newStudent.student]);
          setName('');
          setCourse('');
          setDept('');
        }
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };

  const handleEdit = (student) => {
    setEditingId(student._id);
    setName(student.name);
    setCourse(student.course);
    setDept(student.dept);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/students/' + id, {
        method: 'DELETE',
      });
      if (response.ok) {
        setStudents(students.filter(student => student._id !== id));
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h1>Student Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Course'
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Department'
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          required
        />
        <button type='submit'>
          {editingId ? 'Update' : 'Add'}
        </button>
        <button type='button' onClick={() => {
          setEditingId(null);
          setName('');
          setCourse('');
          setDept('');
        }}>
          Cancel
        </button>
      </form>
      <h2>Students List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <span>{student.name} - {student.course} - {student.dept}</span>
            <button onClick={() => handleEdit(student)}>Edit</button>
            <button onClick={() => handleDelete(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;