
import React, {useState, useEffect} from 'react';

import './style.css';

import {Card} from '../../components/card';



export function App(){

  const [studentName,setStudentName] = useState('');
  const [students , setStudents] = useState([]);
  const [user, setUser] = useState({name:'', avatar: ''});
  function handleAddStudent(){
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br", {
      hour: '2-digit',
      minute:'2-digit',
      second:'2-digit'
    })
};
//atualiza o novo objeto + o newStudent
    setStudents(prevState => [...prevState, newStudent]);
  }

useEffect(() => {
fetch('https://api.github.com/users/lauanys')
.then(response => response.json())
.then(data =>{
setUser({
  name: data.name,
  avatar: data.avatar_url,
})
})
}, []);
 return (
  <div className='container'>

    <header>
  
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="foto de perfil" />
      </div>
      <h1>lista de presença</h1>
    </header>
   { /* <h1>nome:{studentName}</h1>  */ }


 <input type="text" 
 placeholder='Digite o nome..'
 onChange={e => setStudentName(e.target.value)} />
 <button type='button' onClick={handleAddStudent}>
  Adicionar
 </button>

{
  students.map(student => 
  <Card 
  key={student.time}
  name={student.name} 
  time={student.time} 
  />)
}



  </div>
  )
}

export default App;
