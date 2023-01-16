import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import axios from 'axios'

function App() {
  const [userList, setUserList] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
  axios.get(`https://users-crud.academlo.tech/users/`)
  .then(res => setUserList(res.data))
}, []);

const selectUser = (user) => {
   setUserSelected(user)
  //  modal.style.display = "block";
};

const getUsers = () => {
  axios.get(`https://users-crud.academlo.tech/users/`)
  .then(res => setUserList(res.data))
};

var modal = document.getElementById("ventanaModal");

var boton = document.getElementById("abrirModal");

var span = document.getElementsByClassName("cerrar")[0];


  return (
    <div className="App">
        <UserList userList={userList} selectUser={selectUser} getUsers={getUsers} modal={modal}/>
        <UserForm userSelected={userSelected} getUsers={getUsers} selectUser={selectUser} modal={modal}/>
    </div>
  )
}

export default App
