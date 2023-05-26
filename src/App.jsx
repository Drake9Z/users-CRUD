import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";
import "./App.css";
import axios from "axios";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [hiddenForm, setHiddenForm] = useState(false);
  const [ createEdit, setCreateEdit] = useState(false);

  const hideForm = () => {
    setHiddenForm(false)
  }

  const showForm = () => {
    setHiddenForm(true)
    setCreateEdit(true)
  }

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setUsersList(resp.data))
      .catch((error) => console.error(error));
  };

  const addUser = (data) => {
    axios
      .post("https://users-crud.academlo.tech/users/", data)
      .then(() => {
        getUsers();
        hideForm()
      })
      .catch((error) => console.error(error));
  };

  const deleteUser = (user) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${user}/`)
      .then(() => getUsers())
      .catch((error) => console.error(error));
  };

  const selectUser = (selected) => {
    axios
      .get(`https://users-crud.academlo.tech/users/${selected}/`)
      .then((resp) => setUserSelected(resp.data))
      .catch((error) => console.error(error));
  };

  const editUser = dataUser => {
    axios
      .put(`https://users-crud.academlo.tech/users/${dataUser.id}/`, dataUser)
      .then(() => {
        getUsers()
        setUserSelected(null)
        hideForm()
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">Usuarios</h1>
        <button 
        className="plus-button"
        onClick={() => showForm()}
        >
          <i className="bx bx-plus"></i>Crear nuevo usuario
        </button>
      </header>
      {
        hiddenForm && <UsersForm 
      addUser={addUser} 
      userSelected={userSelected}
      editUser={editUser} 
      hideForm={hideForm}
      createEdit={createEdit}
      />
      }
      <UsersList
        usersList={usersList}
        deleteUser={deleteUser}
        selectUser={selectUser}
        showForm={showForm}
      />
    </div>
  );
}

export default App;

/* 
 - mejor forma de ocultar fomulario
 - texto dinámico en el form
 - pop sobre acciones realizadas
*/
