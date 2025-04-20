import React, { useState } from 'react';
// Assuming CSS is scoped or global

const PasswordVault = () => {
  const [site, setSite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [vault, setVault] = useState([]);

  const handleAdd = () => {
    if (!site || !username || !password) return;
    setVault([...vault, { site, username, password }]);
    setSite('');
    setUsername('');
    setPassword('');
  };

  const handleDelete = (index) => {
    const updated = vault.filter((_, i) => i !== index);
    setVault(updated);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Password copied!');
  };

  return (
    <div className="section password-vault">
      <h2>Password Vault</h2>
      <input
        type="text"
        placeholder="Website"
        value={site}
        onChange={(e) => setSite(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username or Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAdd}>Save Credential</button>

      <ul>
        {vault.map((entry, index) => (
          <li key={index}>
            <div>
              <strong>{entry.site}</strong><br />
              <small>{entry.username}</small>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => handleCopy(entry.password)}>Copy</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordVault;
