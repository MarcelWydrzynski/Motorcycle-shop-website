import { useState } from "react";
import data from "../motorcycles.json";

function App() {
  const [motorcyclesList, setMotorcyclesList] = useState(data.motorcycles);

  return (
    <>
      <ul className="w-4/5">
        {motorcyclesList.map((motorcycle) => {
          return (
            <li className="w-3/5 text-buttonTwo" key={motorcycle.id}>
              <h2>
                {motorcycle.brand} {motorcycle.model}
              </h2>
              <div className="bg-slate-400"><img
                src={motorcycle.image}
                alt={motorcycle.brand}
              /></div>
              
              <p>
                <strong>{motorcycle.category}</strong>
              </p>
              <p>{motorcycle.short_description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
