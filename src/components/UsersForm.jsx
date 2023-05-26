import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({addUser, userSelected, editUser, hideForm}) => {
  const { register, handleSubmit, reset } = useForm();

const emptyUser = {
    email: "",
    password: "",
    first_name: "", 
    last_name: "",
    birthday: "" 
}

  useEffect(() => {
    if (userSelected) {
        reset(userSelected)
    }else{
        reset(emptyUser)
    }
  }, [userSelected]);

  const submit = data => {
    if (userSelected) {
      editUser(data)
    }else{
      addUser(data)
      reset(emptyUser)
    }
  }

  return (
    <div className="form-container">   
      <form onSubmit={handleSubmit(submit)} className="form">
        <button className="close-form" 
        onClick={() => hideForm()}><i className='bx bx-x'></i></button>
        <h2>Nuevo usuario</h2>
        <div className="form-label">
          <label htmlFor="first_name">Nombre</label>
          <input type="text" id="first_name" {...register("first_name")} />
        </div>
        <div className="form-label">
          <label htmlFor="last_name">Apellido</label>
          <input type="text" id="last_name" {...register("last_name")} />
        </div>
        <div className="form-label">
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="form-label">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div className="form-label">
          <label htmlFor="birthday">Cumpleaños</label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>

        <button className="form-button" type="submit">
          Agregar nuevo usuario
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
