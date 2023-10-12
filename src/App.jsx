import { useState } from 'react'
import CardHeader from './Components/CardHeader';
import CardBody from './Components/CardBody';
import CardFooter from './Components/CardFooter';
import axios from 'axios';




function App() {



  const [data, setdata] = useState({
    celsius: '--',
    name: "--",
    humidity: '--',
    spedd: '--',
  });

  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b57fe25d3de9b50fd090d2d39f1bdc08`;
  const handelSubmit = (e) => {
    e.preventDefault();

    axios.get(apiUrl).then(res => {
      setdata({ ...data, celsius: (res.data.main.temp - 273.15).toFixed(), name: res.data.name, humidity: res.data.main.humidity, spedd: res.data.wind.speed });
      setError('')
    }).catch(err => {
      if (err.response.status !== 200) {
        setError('tidak ada data kota')

      }

    });

  }

  return (
    <div className='p-5 lg:px-40'>
      <CardHeader onsubmit={handelSubmit} value={e => setLocation(e.target.value)} />
      <p className='text-red-500 text-center py-2'>{error}</p>
      <CardBody suhu={`${data.celsius}°C`} name={data.name} />
      <CardFooter suhu={`${data.humidity} %`} speed={`${data.spedd}Km/H`} />
    </div>
  );

}

export default App
