import PhoneBookForm from './Components/PhoneBookForm'
import InformationTable from './Components/InformationTable'
import { useState } from "react";
import './App.css'


function App() {
  const [info, setInfo] = useState([]);
  return (
    <div>
      <PhoneBookForm setInfo={setInfo} info={info} />
      <InformationTable info={info} />
    </div>
  );
}

export default App;
