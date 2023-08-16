import React, { useEffect, useRef, useState } from "react";
import { MessageText, PromotionContainer } from "../../styles/promotion";
import { Box, Slide } from "@mui/material";

const Index = () => {
  const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store",
    "Please write your opinions :)",
  ];

  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId); 
    };
  }, []); 

  return (
    <PromotionContainer ref={containerRef} >
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionContainer>
  );
};

export default Index;

