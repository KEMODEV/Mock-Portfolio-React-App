import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
  return (
    <VStack bgColor="#FFF" align="initial" m={0.5} borderRadius="10px">
      <Image src={imageSrc} borderRadius="10px" />
      <div p={3}>
        <Heading color="black" fontSize="17px" as="h5" my={4} ml={3.5}>
          {title}
        </Heading>
      
        <Text color="gray" fontSize="sm" ml={3.5} mr={4} my={1.5}>
          {description}
        </Text>
      
        <a href="/">
        <Text color="black" fontSize="sm" fontWeight="semibold" ml={3.5} mb={5} mt={3}>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
        </a>
      </div>
    </VStack>
  );
};

export default Card;
