import { useState } from "react";
import { Box, Flex, Heading, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";

function App() {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    
    const name = e.target.name;
    const value = e.target.value;
    setFormValues(values => ({ ...values, [name]: value }))
    console.log(formValues);

  }

  const Categories = ['PHYSICAL WELL-BEING','SOCIAL/FAMILY WELL-BEING' ,'EMOTIONAL WELL-BEING','FUNCTIONAL WELL-BEING']

  

  function onChange(value) {
    console.log(value)
  }


  return (
    <Flex justify="center" align="center" minH="100vh" w="100vw" bg="green.100">
        <Stack spacing={4} p={[4,4,6,8]} borderRadius="lg" bg="white" w={["100vw","100vw","70vw","50vw"]} h="auto" >
        <Heading fontSize={["20px","20px","22px","24px"]} py="10px" color="#e49273" textAlign={"center"}>
            {Categories[0]} {Categories.length}
        </Heading>
            {PhysicalQuestions.map((PhysicalQuestion, index) => (
            <QuestionBox question={PhysicalQuestion} onChange={onChange} />
            ))}

        </Stack>
        </Flex>
  );
}

function Contents(props) {
    const {index} = props;
    <Box bg='tomato' w='100%' p={4} color='white'>
        This is content {index}
    </Box>
}

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

export default App;