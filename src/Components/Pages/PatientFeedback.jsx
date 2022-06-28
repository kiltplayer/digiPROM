import React, { useState } from "react";
import { Box, Flex, Heading, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";
import PhysicalProms from "./PhysicalProms";
import SocialProms from "./SocialProms";
import EmotionalProms from "./EmotionalProms";
import FunctionalProms from "./FunctionalProms";

export default function PatientFeedback(){

    const [page, setPage] = useState(0)
    const Categories = ['PHYSICAL WELL-BEING','SOCIAL/FAMILY WELL-BEING' ,'EMOTIONAL WELL-BEING','FUNCTIONAL WELL-BEING']

    const [formData, setFormData] = useState({})

    const PromsDisplay = () => {
        if (page == 0)
            return <PhysicalProms formData={formData} setFormData={setFormData}/>
        else if (page == 1)
            return <SocialProms />
        else if (page == 2)
            return <EmotionalProms />
        else 
            return <FunctionalProms />
    }

    return (
        <Flex justify="center" align="center" minH="100vh" w="100vw" bg="green.100">
            <Stack spacing={4} p={[4,4,6,8]} borderRadius="lg" bg="white" w={["100vw","100vw","70vw","50vw"]} h="auto" >
                <Heading fontSize={["20px","20px","22px","24px"]} py="10px" color="#e49273" textAlign={"center"}>
                    {Categories[page]}
                </Heading>
                {PromsDisplay()}

                <Button
                 w="20"
                 disabled={page == Categories.length - 1} 
                 onClick={() => {
                    setPage((currPage) => currPage + 1);
                  }}
                >Next</Button>
                <Button 
                w="20"
                disabled={page == 0} 
                onClick={() => {
                setPage((currPage) => currPage - 1);
                }}
            >Previous</Button>
            
            </Stack>
        
        </Flex>
    )
}