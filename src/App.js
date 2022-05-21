import logo from './logo.svg';
import './App.css';

function MyButton () {
  return(
    <button> Clica-me</button>
  
  );
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile () {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.imageSize
        }}
      />
    </>
  );
}
function App() {
  return (
    <div>
      <h1> Bem-vindo a minha aplicação</h1>
       <MyButton/>
       <Profile/>
      </div>     
  );
}

export default App;
