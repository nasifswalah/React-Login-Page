
import './App.css';

function App() {
  return (
    <div className="App">
      <img className='bg-img' src='https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706227200&semt=ais'/>
      <div className='login'>
        <input className='input' id='name' placeholder='Email'></input>
        <input id='name' className='input' placeholder='Password'></input>
        <p className='new'>Create new account <p className='signup new'>Singup</p></p>
        <button className='login-btn'>Login</button>
      </div>
    </div>
  );
}
export default App;
