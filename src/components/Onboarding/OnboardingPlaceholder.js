import { Box, Button, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { RiLoginCircleLine } from "react-icons/ri";

const Illustration = "/assets/Illustration.svg";

const OnboardingPlaceholder = ({ logIn, openDemo }) => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NextImage
          src={Illustration}
          alt="Illustration"
          width={220}
          height={100}
        />
      </Box>
      <Text as="b" fontSize="lg">
        Finish Setting up your AIs
      </Text>
      <Text color="#475467">
        To work properly your AI needs to know more about you. Complete the
        onboarding to continue.
      </Text>
      <div>
        <Button
          width={"fit-content"}
          backgroundColor={"#FFFFFF"}
          border={"1px solid #D0D5DD"}
          marginRight={"8px"}
          onClick={() => {
            logIn();
          }}
        >
          Log In
        </Button>
        <Button
          width={"fit-content"}
          color={"#FFFFFF"}
          backgroundColor={"#0E9384"}
          marginLeft={"8px"}
          onClick={() => {
            openDemo();
          }}
        >
          <RiLoginCircleLine
            size={"1.3em"}
            style={{ transform: "rotate(315deg)" }}
          />
          Try as Demo
        </Button>
        <Text
          marginTop={"10px"}
          cursor={"pointer"}
          color="#0E9384"
          onClick={() => {
            window
              .open("https://beta.prifina.com/pri-ai.html", "_blank")
              .focus();
          }}
        >
          About Pri-AI
        </Text>
      </div>
    </Box>
  );
};

export default OnboardingPlaceholder;
