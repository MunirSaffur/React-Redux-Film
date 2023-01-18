import React from 'react'
import { Pagination } from "react-bootstrap";
import { useToast } from "@chakra-ui/react";
import { params, handleServerParams } from '../features/Filters/filterSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function Paginations() {
  const toast = useToast();
  const serverParams = useSelector(params);
  const dispatch = useDispatch();

 function handlePagination(action) {
  if (serverParams.page == 1 && action == -1) {
    toast({
      title: "Warning!",
      description: "You are in the first page allrady.",
      status: "warning",
      duration: 3000,
      isClosable: true
    });
  } else {
    const newParams = { ...serverParams };
    newParams.page += action;
    dispatch(handleServerParams(newParams))
  }
}

  return (
    <div>
        <Pagination className="my-4">
        <Pagination.Prev onClick={() => handlePagination(-1)} />
        <Pagination.Ellipsis />
        <Pagination.Next onClick={() => handlePagination(+1)} />
      </Pagination>
    </div>
  )
}
