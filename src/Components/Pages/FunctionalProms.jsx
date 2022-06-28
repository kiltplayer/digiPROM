import React, { useState } from "react";
import { Box, Flex, Heading, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";

export default function FunctionalProms(){
    const FunctionalQuestions = [
        {
          'id': 'GF1',
          'name': 'I am able to work (include work at home)',
        },
        {
          'id': 'GF2',
          'name': 'My work (include work at home) is fulfilling',
        },
        {
          'id': 'GF3',
          'name': 'I am able to enjoy life',
        },
        // {
        //   'id': 'GF4',
        //   'name': 'I have accepted my illness',
        // },
        // {
        //   'id': 'GF5',
        //   'name': 'I am sleeping well',
        // },
        // {
        //   'id': 'GF6',
        //   'name': 'I am enjoying the things I usually do for fun',
        // },
        // {
        //   'id': 'GF7',
        //   'name': 'I am content with the quality of my life right now',
        // }
    
      ];
    return (
        <div>{FunctionalQuestions.map((FunctionalQuestions, index) => (
            <QuestionBox question={FunctionalQuestions}  />
            ))}</div>
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
                <Radio size='md' name={question.id} value={"0"}>
                  Not at all
                </Radio>
                <Radio size='md' name={question.id} value={"1"}>
                  A little bit
                </Radio>
                <Radio size='md' name={question.id} value={"2"}>
                  Somewhat
                </Radio>
      
                <Radio size='md' name={question.id} value={"3"}>
                  Quite a bit
                </Radio>
      
                <Radio size='md' name={question.id} value={"4"}>
                  Very much
                </Radio>
              </Stack>
            </RadioGroup>
      
      
          </Box>
        )
      }