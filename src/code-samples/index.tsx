import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import Create from "./create";
import Download from "./download";
import Sign from "./sign";

const CodeSample = ({ id }: { id: string }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Example <code>{id}.tsx</code>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          background="black"
          color="white"
          pb={4}
          borderBottomEndRadius="lg"
          borderBottomStartRadius="lg"
        >
          <code>
            <pre>
              {id == "create" ? (
                Create
              ) : id == "sign" ? (
                Sign
              ) : id == "download" ? (
                Download
              ) : (
                <></>
              )}
            </pre>
          </code>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CodeSample;
