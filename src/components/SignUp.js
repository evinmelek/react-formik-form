import { useFormik } from 'formik'; 

function SignUp() {
  const { handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      hobbies: [],
      country: ''
    },
    onSubmit: (values) => {
      console.log(values); 
    },
  });

  return (
    <div className="App"> 
      <h1>Sign Up</h1> 
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name
        <input 
        id="firstName" 
        name="firstName"
        value={values.firstName} 
        placeholder="Jane" 
        onChange={handleChange} /></label>

        <label htmlFor="lastName">Last Name
        <input 
        id="lastName" 
        name="lastName"
        value={values.lastName} 
        placeholder="Doe" 
        onChange={handleChange}/></label>

        <label htmlFor="email">Email
        <input
          id="email"
          name="email"
          value={values.email}
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
        /></label>

        <label htmlFor='male'>Male
        <input 
          type="radio" 
          name="gender"
          value="male"
          onChange={handleChange} 
          checked={values.gender === "male"}
        />
        </label>

        <label htmlFor='female'>Female
        <input 
          type="radio" 
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        /> 
        </label>

        <label>Swimming
        <input type="checkbox" name="hobbies" value="Swimming" onChange={handleChange}/></label>
        <label>Drawing
        <input type="checkbox" name="hobbies" value="Drawing" onChange={handleChange}/>
        </label>
        <label>Codding
        <input type="checkbox" name="hobbies" value="Codding" onChange={handleChange}/>
        </label>

        <label>Country
          <select name='country' value={values.country} onChange={handleChange}>
            <option value="turkey">Turkey</option>
            <option value="italy">Italy</option>
            <option value="england">England</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>  
    </div> 
  );
}

export default SignUp;
