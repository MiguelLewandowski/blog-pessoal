import { useState } from "react";

function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!nome || !email || !senha) {
            setMensagem('Preencha todos os campos');
            return;
        }
        setMensagem(`Usuário ${nome} cadastrado com sucesso!`);
        setNome('');
        setEmail('');
        setSenha('');
    }

    return (
        <div className="page">
            <h2>Componente Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome"
                        className="form-field"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="form-field"
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="******"
                        className="form-field"
                    />
                </div>
                <button type="submit" className="btn-center">Cadastrar</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    )
}

export default Register
