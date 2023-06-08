import React, { useState } from "react";
import validation from "./validation";

export default function Forms({login}) {

    const [userData, setUserData] = useState ({
        email: "",
        password: ""
    })

    const handleChange = (text) => {
        const { name, value } = text.target;
        setUserData({ ...userData,
            [name]: value });

        setErrors(
            validation({
                ...userData,
                [name]: value
            })
        )
    };


    const [errors, setErrors] = useState ({
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Correo Electronico</label>
                <input
                    name="email"
                    placeholder="Escribe tu Email..." 
                    type="text"
                    value={userData.email} 
                    onChange={handleChange}
                />
                <label>Contraseña</label>
                <input
                    name="password"
                    placeholder="Escribe tu Contraseña..."
                    type="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <button type="submit"> ENVIAR </button>
            </form>
        </div>
    )
}