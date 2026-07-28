// sistema de navegación
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// estilos
import 'bootstrap/dist/css/bootstrap.min.css'; // estilos generales bootstrap
import './css/styles.css'; // mis estilos (importados detrás de bootstrap para que sobreescriba)
import 'bootstrap-icons/font/bootstrap-icons.css'; // iconos bootstrap


// componentes
import AnimalCards from "./components/AnimalCards";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// paginas
// import Index from "./pages/Index";


function App() {
  return (
    <>
        <NavBar />

        <div className="container mt-4">
            <h1 className="text-center mb-4">Animales en refugio</h1>
            <AnimalCards />
        </div>

        <Footer />
    </>
  );
}

export default App;
