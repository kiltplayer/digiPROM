import React, { useState } from "react";
import { Box, Flex, Heading, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";

export default function SocialProms(){

    const SocialQuestions = [
        {
          'id': 'GS1',
          'name': 'I feel close to my friends',
        },
        {
          'id': 'GS2',
          'name': 'I get emotional support from my family',
        },
        // {
        //   'id': 'GS3',
        //   'name': 'I get support from my friends',
        // },
        // {
        //   'id': 'GS4',
        //   'name': 'My family has accepted my illness',
        // },
        // {
        //   'id': 'GS5',
        //   'name': 'I am satisfied with family communication about my illness',
        // },
        // {
        //   'id': 'GS6',
        //   'name': 'I feel close to my partner (or the person who is my main support)',
        // },
        // {
        //   'id': 'GS7',
        //   'name': 'I am satisfied with my sex life',
        // }
    
      ];


    return (
        <div> {SocialQuestions.map((SocialQuestions, index) => (
            <QuestionBox question={SocialQuestions}  />
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