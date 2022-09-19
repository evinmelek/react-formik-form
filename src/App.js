import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {ThemeProvider} from "./context/ThemeContext";  
import Container from "./components/Container";

function App() { 

  return (
    <div> 
      <ThemeProvider> 
        <Container>
        <div className="App" id="#app">  
        <img src='https://avatars.mds.yandex.net/i?id=73a8d63dca783e0ed7101a886835b472-4142142-images-thumbs&n=13'/>
        <div className="signin">
        <SignIn>SignIn</SignIn>
        </div> 
        <div className="signup">
          <p>If You Are Not A User</p>
        <SignUp>SignUp</SignUp>
        </div>
        </div> 
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
