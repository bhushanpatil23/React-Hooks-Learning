import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import LearnUseReducer from './1_useReducer/learnUseReducer'
import LearnUseEffect from './2_useEffect/learnUseEffect'
import LearnCustomHook from './6_customHook/LearnCustomHook'

function App() {
  const [user, setUser] = useState({
        name: "Anuj",
        age: 29
    });

    function handleToggleName() {
      setUser({
        ...user,
        name: user.name === 'Anuj' ? 'Shivam': 'Anuj'
      })
    }

    return (
        // <AuthContext.Provider value={{user, setUser}}>
        // <AuthProvider value={{ user, setUser }}>
        //     <>
        //         {/* <LearnUseReducer /> */}
        //         {/* <LearnUseEffect /> */}
        //         {/* <LearnUseId /> */}

        //         {/* <LearnUseRef /> */}

        //         {/* <LearnUseRef2 /> */}

        //         {/* <button onClick={handleToggleName}>Toggle Name In App</button>

        //         <Dashboard /> */}

                

        //         <CreatePostWithRQ />
        //     </>
        // </AuthProvider>
        // </AuthContext.Provider>

        <LearnCustomHook/>

    );
}

export default App
