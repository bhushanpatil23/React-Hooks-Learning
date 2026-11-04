import React from 'react'
import { useTheme } from './UseTheme'
import SignIn from './sign-in';

const LearnCustomHook = () => {

    const {theme, setTheme} = useTheme('dark');


  return (
    <div>
        {/* <p>{theme}</p>
        <button onClick={() => 
                setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
            }
        >
                Toggle Theme
        </button> */}

        <SignIn/>

    </div>
  );
};

export default LearnCustomHook  