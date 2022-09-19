import { useFormik } from 'formik'; 
import Validations from './Validations';

function SignIn() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues: { 
      email: '',
      password: "",
      passwordConfirm: ""
    },
    onSubmit: (values) => {
      console.log(values); 
    },
    validationSchema: Validations
  });

  return (
    <div className="App"> 
      <h1>Sign Up</h1> 
      <form onSubmit={handleSubmit}> 


        <label htmlFor="email">Email
        <input
          id="email"
          name="email"
          value={values.email}
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { errors.email &&  touched.email && (<div>{errors.email}</div>)}
        </label> 
        
        <label htmlFor="password">Password
        <input 
        id="password" 
        name="password"
        type="password"
        value={values.password} 
        placeholder="Password" 
        onChange={handleChange}
        onBlur={handleBlur}/>
        { errors.password &&  touched.password && (<div>{errors.password}</div>)}
        </label>

        <label htmlFor="passwordConfirm">Confirm Password 
        <input 
        id="passwordConfirm" 
        name="passwordConfirm"
        type="password"
        value={values.passwordConfirm} 
        placeholder="Confirm Password" 
        onChange={handleChange}
        onBlur={handleBlur}/>
        { errors.passwordConfirm &&  touched.passwordConfirm && (<div>{errors.passwordConfirm}</div>)}
        </label>

        <button type="submit">Submit</button>
      </form>  
    </div> 
  );
}

export default SignIn;
