import React, {useState, useEffect} from 'react'

const learnUseEffect = () => {

    const[data,setData] = useState({});
    const [id, setId] = useState(2);
    const[loading, setLoading] = useState(false);

    async function fetchData(abortController) {
       const url = "https://dummyjson.com/products/"+id;
       try{
            setLoading(true);
            const response = await fetch(url, {signal: abortController.signal});
            const jsonData = await response.json();
            setData(jsonData);
       }catch(error){
            console.error("Error fetching data:", error);
       }
       setLoading(false);
    }

    useEffect(() => {
        const abortController = new AbortController();
        fetchData(abortController);

        // setId(prev => prev + 1); // NEVER DO THIS HERE, IT WILL CAUSE INFINITE LOOP

        return () => {
            console.log("cleaning up");
            abortController.abort(); // operation to cancel the fetch request if the component unmounts or id changes before the fetch completes    
        }

    },[id]);

    // fetchData(); // never do this here, it will cause infinite loop

    console.log("rendering...");

  return (
    <>
        {loading && <p>Loading...</p>}
        <p>{id} - {data.title}</p>
        <button onClick={() => setId(id + 1)}>Next</button>
    </>
  )
}

export default learnUseEffect   