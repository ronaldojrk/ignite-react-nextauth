import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/Home.module.css'
export default function Home() {


  //const [pin, setPin] = useState(0);
  //const [segure, setSegure] = useState(null);
  //const [inputpin, setInputpin] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password
    }

    await signIn(data);


    /*
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button type="submit">entrar</button>
    </form>




    <form onSubmit={handleSubmit} method="POST" action="" className={styles.container}>

        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <br />

        <button type="submit">entrar</button>

        <h2>{pin}</h2>
        <h2>{segure}</h2>
        <button type="button" onClick={geradorDePin}>gerar</button>

        <input type="number" value={inputpin} onChange={e => setInputpin(e.target.value)} />


      </form>
    */

  }

  /* function geradorDePin() {
     const primeironumero = Math.floor(Math.random() * (999999 - 100000)) + 100000;
 
     setPin(primeironumero)
     setSegure(primeironumero)
     console.log(primeironumero);
   }*/


  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <button type="submit">entrar</button>
      </form>
    </>
  )
}
