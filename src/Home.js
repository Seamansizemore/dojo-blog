
import { useState } from "react";

const Home = () => {

    const handelClick = () => {
        const [name, setName] = useState('mario');
        const [age, setAge] = useState(54);
    
    const handelClick = () => {
        setName('luigi');
        setAge(45);
    }

return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age} years old</p>
            <button onClick={handelClick}>Click me</button>
    </div>
    );
}
 
export default Home;