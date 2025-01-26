import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextInput, Label } from 'flowbite-react';
import { authServices } from '../services/authServices';
import { toast } from 'react-hot-toast';



const Login = () => {
    const [credentials, setCredentials] = useState({ 
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authServices.login(credentials);
            toast.success('Login successful');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="mx-auto mt-10 max-w-md">

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <h2 className= "text-center text-2xl">Iniciar Sesion</h2>

                <div>
                    <Label htmlFor='email'>Correo Electronico</Label>
                    <TextInput
                        id='email'
                        type='email'
                        placeholder='Correo Electronico'
                        value={credentials.email}
                        onChange={(e) => setCredentials({
                            ...credentials,
                            email: e.target.value

                        })}
                        required
                    />
                    <div>
                        <Label htmlFor='password'>Contraseña</Label>
                        <TextInput
                        id='password'
                        type='password'
                        placeholder='contraseña'
                        value={credentials.password}
                        onChange={(e) => setCredentials({
                            ...credentials,
                            password: e.target.value

                        })}
                        required
                    />
                    </div>

                    <Button type= "submit">Iniciar Sesion</Button>

                    <div className='text-center'>
                        No tienes cuenta?
                        <Link to="/register" className='text-blue-500 hover:underline'>Registrate</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;