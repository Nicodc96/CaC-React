import { useState } from "react";
import Button from "react-bootstrap/Button";

export const Counter = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <Button onClick={()=>setCount(count+1)} variant="success">+</Button>
            <p>Numero: {count} </p>
            <Button onClick={()=>setCount(count >= 1 ? count-1 : count)} variant="success">-</Button>
        </div>
    );
}
