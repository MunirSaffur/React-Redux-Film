import React from 'react'
import { Text, Badge, Code } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FilmItem({filmdata}) {
  return (
    <div
      className="cardBody"
      style={{ backgroundImage: `url(${filmdata.Poster})` }}
    >
      <div className="cardContent">
      <Link
          to={{
            pathname: `/film/${filmdata.Title}`,
            state: filmdata
          }}
          className="text-white"
        >
          <Text fontSize="xl" fontWeight="bold">
          {filmdata.Title.length > 17
            ? `${filmdata.Title?.substring(0, 17)}...`
            : filmdata.Title}
        </Text>
        </Link>
        <Badge mx="1" colorScheme="green">
          {filmdata.Year}
        </Badge>
        <Code mx="1" colorScheme="red" children={filmdata.imdbID} />
       
      </div>
    </div>
  )
}
