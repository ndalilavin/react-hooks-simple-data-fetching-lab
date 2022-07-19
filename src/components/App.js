// create your App component here
import React, {useState, useEffect} from "react";

function App(){

    // set state for dog images
    const [image, setImage] = useState("")

    // fetch request to get images once App is rendered
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setImage(data.message)
        })
    }, [])

    // Before image is loaded
    if (!image) return <p>Loading...</p>

    return(
        <div>
            <img src={image} alt="A Random Dog"/>
        </div>
    )
}

export default App