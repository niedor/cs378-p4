import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import App from './App';
import BucketList from './BucketList.js'

function Root() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');

    const assignUsername = (user) => {
        setUsername(user);
    }

    const assignName = (name) => {
        setName(name);
    }

    return (
        <Router>
            <Routes>
                <Route path="/cs378-p4/" element={<Login passUser={assignUsername} passName={assignName} />} />
                <Route path={`/cs378-p4/${username}/Home`} element={<App name={name} username={username}/>} />
                <Route path={`/cs378-p4/${username}/Weekly`} element={<BucketList title="Weekly" username={username}/>} />
                <Route path={`/cs378-p4/${username}/Monthly`} element={<BucketList title="Monthly" username={username}/>} />
                <Route path={`/cs378-p4/${username}/Yearly`} element={<BucketList title="Yearly" username={username}/>} />
            </Routes>
        </Router>
    )
}

export default Root;