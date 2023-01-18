import React, { useState, useEffect } from 'react'
import api from '../api';
import { Grid, GridItem, Skeleton, useToast } from "@chakra-ui/react";
import FilmItem from '../components/FilmItem'
import { params } from '../features/Filters/filterSlice'
import { useSelector } from 'react-redux';
import Filters from '../components/Filters';
import Paginations from '../components/Paginations';


export default function HomePage() {
    const [films, setfilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const serverParams = useSelector(params);

    useEffect(()=>{
        setLoading(true)
        api.get("/",{params:serverParams})
        .then(res=>{
            setfilms(res.data.Search)
            setLoading(false)
        })
        .catch(err=>console.error(err))
      },[serverParams])

  return (
    <div>
        <div className='container'>
            <Filters/>
        </div>
         <Grid templateColumns="repeat(5, 1fr)" gap={1} className="mb-1">
         {loading ? (
          [1, 2, 3, 4, 5].map((item) => (
            // Skeleton for loading
            <GridItem key={item} w="100%">
              <Skeleton height="350px" />
            </GridItem>
          ))
        ) : films ? (
          films.map((film, index) => (
            <GridItem key={index} w="100%">
              <FilmItem filmdata={film} />
            </GridItem>
          ))
        ) : (
          <h4 className="h5 fw-bold text-light">No Resault</h4>
        )}
        </Grid>

        <Paginations/>
    </div>
  )
}
