import React from 'react'
import { Grid, GridItem  } from "@chakra-ui/react";
import { Form, Pagination, Button } from "react-bootstrap";
import { params, handleServerParams } from '../features/Filters/filterSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function Filters() {
    const serverParams = useSelector(params);
    const dispatch = useDispatch();
    
     // handle search
    function handleSearch(e) {
        const newParams = { ...serverParams };
        newParams.s = e.target.value === "" ? "Pokemon" : e.target.value;
        dispatch(handleServerParams(newParams))
    }

    // handle type filter
    function handleType(type) {
        const newParams = { ...serverParams };
        newParams.type = type;
        dispatch(handleServerParams(newParams))
    }

    // handle Release Date
    function handleDate(date){
        const newParams = { ...serverParams };
        newParams.y = date.target.value;
        dispatch(handleServerParams(newParams))
    }

  return (
    <div>
         <Grid templateColumns="repeat(3, 1fr)" gap={6} className="">
        <GridItem w="100%">
          <h4 className="h5 fw-bold text-light m-1">Search</h4>
          <Form.Control
            type="search"
            placeholder="Pokemon"
            className="mb-3 bg-light"
            aria-label="Search"
            onChange={(e) => handleSearch(e)}
          />
        </GridItem>
        <GridItem w="100%">
          <h4 className="h5 fw-bold text-light m-1">Release Date</h4>
          <Form.Control
            type="number"
            placeholder="Release Date"
            className="mb-3 bg-light"
            aria-label="ReleaseDate"
            onChange={(e) => handleDate(e)}
          />
        </GridItem>
        <GridItem w="100%">
          <h4 className="h5 fw-bold text-light m-1">Type</h4>
          <Button
            size="sm"
            className="btn btn-info me-2"
            onClick={() => handleType("")}
          >
            All
          </Button>
          <Button
            size="sm"
            className="btn btn-info me-2"
            onClick={() => handleType("movie")}
          >
            Movie
          </Button>
          <Button
            size="sm"
            className="btn btn-info me-2"
            onClick={() => handleType("series")}
          >
            Series
          </Button>
          <Button
            size="sm"
            className="btn btn-info me-2"
            onClick={() => handleType("episode")}
          >
            Episode
          </Button>
          
        </GridItem>
      </Grid>
    </div>
  )
}
