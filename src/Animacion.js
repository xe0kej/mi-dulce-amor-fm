import React, { useState } from "react";

const Animacion = () => {
const [mostrarAnimacion, setMostrarAnimacion] = useState(false);

const handleClick = () => {
    setMostrarAnimacion(!mostrarAnimacion);
};

return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1 style={{ color: "#8c00ff", marginBottom: "20px" }}>Para mi dulce amor...FM</h1>
    <button
        onClick={handleClick}
        style={{
            display: "inline-block",
            marginTop: "20px",
            marginRight: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4c0c67",
            color: "#fff",
            textDecoration: "none",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#4c0c67")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#701099")}
    >
        {mostrarAnimacion ? "Dejar de ver" : "Ver Animación"}
    </button>

    {mostrarAnimacion && (
        <div style={{ marginTop: "20px" }}>
        <video
            src="/Corazon.mp4"
            width="640"
            height="480"
            controls
            autoPlay
            loop
        >
            Tu navegador no soporta la etiqueta de video.
        </video>
        </div>
    )}
    <a
            href="https://www.youtube.com/watch?v=9wgyKMfy5oQ&list=PLMm8SW9verMZ56mVDOKW156HfmIZ1PIHD"
            target="_blank"
            rel="noopener noreferrer"
            style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4c0c67",
            color: "#fff",
            textDecoration: "none",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#3820a3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3c1dc8")}
        >
            Special playlist
        </a>
    </div>
);
};

export default Animacion;