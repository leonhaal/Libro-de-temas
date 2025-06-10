import React,{useState} from "react";

// Que nesecito para un formulario ? 
const FormularioNombreApellido = () => (
    //el primer no existe , esta en blanco.

    const [nombre, setNombre] = useState('');
    const [apellido,setApellido] = useState (''); 
)

//handle aplica botom
const handleSubmit = (e) =>{
   // revisa que no se cargue de vuelta la pagina web 
    e.preventDefault();
    alert(' Nombre: ${nombre} o apellido: $(apellido) no cargado ');

};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label > Nombre </label>
            <input type="text" 
            value={nombre}
            onChange={{e} => setNombre{e.target.value}}/>
        </div>
            <div>
                <label> Apellido </label>
                <input type="text" 
                value={apellido}
                onChange={{e} => setApellido{e.target.value}}/>
            </div>
    </form>
);


export default FormularioNombreApellido;