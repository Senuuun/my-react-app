import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import './App.css'; // Para estilos globais

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário a ser enviado: ', form);

    // Limpar o formulário após o envio
    setForm({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        {}
        <ContactForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default App;
