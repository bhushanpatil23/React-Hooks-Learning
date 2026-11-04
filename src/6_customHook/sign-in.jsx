import { useForm } from './useForm';

const SignIn = () => {



  function onSubmit(formData){
    console.log('Form submitted:', formData);
  }

  const { handleFormSubmit, register} = useForm({
    email: '',
    password: ''
  }, onSubmit);

   console.log(formData);

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label>
                Email
                <input 
                    type="email" 
                    {...register('email')}
                />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    // name="password" 
                    // onChange={handleChange} 
                    // value={formData.password}
                    {...register('password')}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default SignIn