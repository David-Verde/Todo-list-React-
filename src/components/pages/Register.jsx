import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextInput, Label } from 'flowbite-react';
import { authServices } from '../services/authServices';
import { toast } from 'react-hot-toast';




const Register = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {username, email, password} = userData;
            await authServices.register({username, email, password});
            toast.success('Registration successful');
            navigate('/login');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='mx-auto mt-10 max-w-md'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <h2 className= "text-center text-2xl">Registrarse</h2>

                <div>
                    <Label htmlFor='username'>Nombre de Usuario</Label>
                    <TextInput
                    id="username"
                    type="text"
                    placeholder="Nombre de Usuario"
                    value={userData.username}
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                    required
                    />
                </div>

                <div>
                    <Label htmlFor='username'>Correo Electronico</Label>
                    <TextInput
                    id="email"
                    type="email"
                    placeholder="Correo Electronico"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    required
                    />
                </div>

                <div>
                    <Label htmlFor='username'>Contraseña</Label>
                    <TextInput
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    required
                    />
                </div>

                <div>
                    <Label htmlFor='username'>Confirmar contraseña</Label>
                    <TextInput
                    id="confirmpassword"
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={userData.confirmPassword}
                    onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                    required
                    />
                </div>

                <Button type="submit">Registrarse</Button>

                <div className='text-center'>
                    <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesion</Link></p>
                </div>
            </form>

                </div>
    );

    };

    export default Register;
    