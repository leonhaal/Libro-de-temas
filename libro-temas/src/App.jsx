import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioNombreApellido from "./components/FormularioNombreApellido";
import PantallaDestino from "./components/PantallaDestino";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormularioNombreApellido titulo="Formulario Nombre y Apellido" />} />
                <Route path="/resultado" element={<PantallaDestino />} />
            </Routes>
        </Router>
    );
}

export default App;