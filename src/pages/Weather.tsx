import { useState } from "react";
import axios from 'axios';

const Weather = () => {
    const [data, setData] = useState([]);

    const onClick = async () => {
        try {
            const response = await axios.get('https://openmarket.weniv.co.kr/products/');
            setData(response.data.results);
        } catch (e) {
            console.log(e);
        }
    }
    return <h1>
        Weather
        <button onClick={onClick}>GET</button>
        <ul>
            {data && data.map((item: { product_name: string }, i) => (
                <li key={i}>
                    {item.product_name}
                </li>
            ))}
        </ul>
    </h1>
}

export default Weather;