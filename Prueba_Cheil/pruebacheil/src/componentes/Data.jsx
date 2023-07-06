import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/data.css";


let url = "http://localhost:3030";
const Data = () => {
  const [listHoteles, setListHoteles] = useState([]);
  useEffect(() => {
    const getHotelesList = async () => {
      try {
        const res = await axios.get(url);
        setListHoteles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHotelesList();
  }, []);

  const [filter, setFilter] = useState("");
  const [data, setData] = useState(listHoteles);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value !== "") {
      const filteredData = listHoteles.filter((row) =>
        row.destino.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filteredData);
    } else {
      setData(listHoteles);
    }
  };

  return (
    <div className="container-Data">
      <h1>Elige tu siguiente viaje!!!</h1>
      <input
        type="text"
        placeholder="Bogotá, Cartagena y Medellin"
        value={filter}
        onChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre Del Hotel</th>
            <th>Destino</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.nombreHotel}</td>
              <td>{row.destino}</td>
              <td>{row.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
