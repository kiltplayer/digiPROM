import React, { useState } from "react";
import { Box, Flex, Heading, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";

export default function EmotionalProms(){

    const EmotionalQuestions = [
        {
          'id': 'GE1',
          'name': 'I feel sad',
        },
        {
          'id': 'GE2',
          'name': 'I am satisfied with how I am coping with my illness',
        },
        // {
        //   'id': 'GE3',
        //   'name': 'I am losing hope in the fight against my illness',
        // },
        // {
        //   'id': 'GE4',
        //   'name': 'I feel nervous',
        // },
        // {
        //   'id': 'GE5',
        //   'name': 'I worry about dying',
        // },
        // {
        //   'id': 'GE6',
        //   'name': 'I worry that my condition will get worse',
        // }
    
      ];

    return (
        <div> {EmotionalQuestions.map((EmotionalQuestions, index) => (
            <QuestionBox question={EmotionalQuestions}  />
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
                <Radio size='md' name='0' value={"0"}>
                  Not at all
                </Radio>
                <Radio size='md' name='1' value={"1"}>
                  A little bit
                </Radio>
                <Radio size='md' name='2' value={"2"}>
                  Somewhat
                </Radio>
      
                <Radio size='md' name='3' value={"3"}>
                  Quite a bit
                </Radio>
      
                <Radio size='md' name='4' value={"4"}>
                  Very much
                </Radio>
              </Stack>
            </RadioGroup>
      
      
          </Box>
        )
      }