import React,{useState} from "react"

function Login () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input value={email} type="email" name="email" placeholder="email"/>
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input value={password} type="password" name="password" placeholder="mot de passe "/>
      </div>
      <button>Connexion</button>
    </form>
    <button>Pas de compte ? Enregistrez-vous ici</button>
    </>
  )
};

export default Login