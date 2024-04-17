import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { useSearchParams } from 'react-router-dom'

export default function Games() {
  const [games_ar, setgameAr] = useState([]);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const year = searchParams.get("year");

  useEffect(() => {
    doApi(); 
  },[])

const doApi = async () => {
    const url = "http://fs1.co.il/bus/xbox1.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      const filter_ar = data.filter(item => {
       
        return item.Year == year;
      });
      console.log(filter_ar);
      setgameAr(filter_ar);
    } catch (error) {
      console.log(error);
    }
  };
  

 return(
  <div className='container'>
    <h2> Games: {params["year"]}</h2>

    <ul>
      {games_ar.map(item => {
        return(
          <li key={item.Year}> {item.Game}</li>
        )
      }

      )}
    </ul>
    </div>
    )
}