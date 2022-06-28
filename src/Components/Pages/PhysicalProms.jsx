import React, { useState } from "react";
import { Box, Flex, Heading, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";

export default function PhysicalProms({formData, setFormData}){

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(values => ({...values, [name]: value}))
        console.log(formData)
    }

    const PhysicalQuestions = [
        {
          'id': 'GP1',
          'name': 'I have a lack of energy',
        },
        {
          'id': 'GP2',
          'name': 'I have nausea ',
        },
        {
          'id': 'GP3',
          'name': 'Because of my physical condition, I have trouble meeting the needs of my family',
        },
        // {
        //   'id': 'GP4',
        //   'name': 'I have pain ',
        // },
        // {
        //   'id': 'GP5',
        //   'name': 'I am bothered by side effects of treatment',
        // },
        // {
        //   'id': 'GP6',
        //   'name': 'I feel ill',
        // },
        // {
        //   'id': 'GP7',
        //   'name': 'I am forced to spend time in bed',
        // }
    
      ];

    return (
        <div>
            {PhysicalQuestions.map((PhysicalQuestion, index) => (
            <QuestionBox question={PhysicalQuestion}  />
            ))}

        </div>
    )}



    function QuestionBox(props) {

        const {question, onChange} = props;
        return (
          <Box bg="#F6F7F8" pt="10px" px="5" pb="5" rounded={"5px"} >
          
            <Heading fontSize={["16px","16px","18px","20px"]} py="10px" borderBottom={"2px"} borderColor="gray.400" >
              {question.name}
      
            </Heading>
      
            <RadioGroup onChange={onChange} >
              <Stack pt="15px" >
                <Radio size='md' name='0' value={"0"}>
                  Not at all
                </Radio>
                <Radio size='md' name='1' value={"1"} >
                  A little bit
                </Radio>
                <Radio size='md' name='2' value={"2"} >
                  Somewhat
                </Radio>
      
                <Radio size='md' name='3' value={"3"} >
                  Quite a bit
                </Radio>
      
                <Radio size='md' name='4' value={"4"} >
                  Very much
                </Radio>
              </Stack>
            </RadioGroup>
      
      
          </Box>
        )
      }