import React from "react"
import { Flex, Link, Stack } from "@chakra-ui/react";
import { InfoIcon } from '@chakra-ui/icons'
import P1 from "./PatientsDataSet.json";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'



export default function PatientsData(){

    const [formValues, setFormValues] = React.useState({});
    const [formErrors, setFormErrors] = React.useState({});

      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues(values => ({...values, [name]: value}))
    }

    const GetIcon = (Total) => {
        if (Total >= 100)
            return <InfoIcon w={6} h={6} color="red.500"/>
        else if (Total > 60 && Total <= 99)
            return <InfoIcon w={6} h={6} color="yellow.500"/>
        else
            return <InfoIcon w={6} h={6} color="green.500"/>
    }
    
    return(
        <Flex minH="100vh" w="100vw">
            <Stack spacing={4} p={[4,4,6,8]} borderRadius="lg" bg="white" w={["100vw","100vw","70vw","80vw"]} h="auto" >
                <TableContainer>
                    <Table >
                        <Thead height={30}>
                            <Tr>
                                <Th w={5}></Th>
                                <Th>Name</Th>
                                <Th>Gender</Th>
                                <Th>DOB</Th>
                                <Th>Physical </Th>
                                <Th>Social </Th>
                                <Th>Emotional </Th>
                                <Th>Functional </Th>
                                <Th>Overall Score</Th>		 
                            </Tr>
                        </Thead>
                        <Tbody>
                
                            {P1.Dataset.map((item, i) => (
                                <Tr key={i}>
                                    <Td>{GetIcon(item.Overall)}</Td>
                                    <Td><Link to ='/home'>{item.Name}</Link></Td>
                                    <Td>{item.Gender}</Td>
                                    <Td>{item.DOB}</Td>
                                    <Td>{item.Physical_PROM}</Td>
                                    <Td>{item.Social_PROM}</Td>
                                    <Td>{item.Emotional_PROM}</Td>
                                    <Td>{item.Functional_PROM}</Td>
                                    <Td>{item.Overall}</Td>
                                </Tr>
                            ))}

                        </Tbody>
                
                    </Table>
                </TableContainer>
            
           
       </Stack>
       </Flex>
    )
}