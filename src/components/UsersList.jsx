const UsersList = ({usersList, deleteUser, selectUser, showForm}) => {
  

  return (
    <ul className="user-list">
      {usersList?.map((user) => (
        <li key={user.email} className="user-card">
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <div className="card-info">
            <h3>CORREO</h3>
            <p>{user.email}</p>
          </div>
          <div className="card-info">
            <h3>CUMPLEAÑOS</h3>
            <p>{user.birthday}</p>
          </div>
          <div className="button-container">
            <button className="trash" onClick={() => deleteUser(user.id)}>
              <i className="bx bx-trash"></i>
            </button>
            <button className="pencil" 
            onClick={() => {
              showForm()
              selectUser(user.id)
              }}>
              <i className="bx bxs-pencil"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
