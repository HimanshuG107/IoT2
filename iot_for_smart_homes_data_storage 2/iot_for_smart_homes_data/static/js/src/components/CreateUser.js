    // frontend/src/components/CreateUser.js

    import React, { useState } from 'react';

    const CreateUser = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();

            fetch('http://127.0.0.1:5002/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                console.log('User created:', data);
            })
            .catch(error => console.error('Error creating user:', error));
        };

        return (
            <form onSubmit={handleSubmit}>
                <h2>Create User</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Create User</button>
            </form>
        );
    };

    export default CreateUser;