import { useContext } from 'react'; 
import ThemeButton from './ThemeButton';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ThemeContext from '../context/ThemeContext';

function Container() { 
const {theme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme === 'dark' ? theme: 'light'}`}>  
        <ThemeButton></ThemeButton> 
        <div className="signin">
        <SignIn>SignIn</SignIn>
        </div> 
        <div className="signup">
          <p>If You Are Not A User</p>
        <SignUp>SignUp</SignUp>
        </div>
    </div>
  );
}

export default Container;
