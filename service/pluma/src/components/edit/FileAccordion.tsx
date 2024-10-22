"use client";

import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@byeonghyeon/react-components-accordion";
import { Text, Heading } from "@byeonghyeon/react-components-layout";
import React from "react";

function FileAccordion() {
  const testData = {
    items: [
      {
        name: "목록1",
        content: "내용입니다.",
      },
      {
        name: "목록2",
        content: "내용입니다.\n내용입니다.",
      },
    ],
    defaultActiveItems: [],
  };
  return (
    <div className="bg-blackAlpha-200 w-[200px]">
      <Accordion defaultActiveItems={testData.defaultActiveItems}>
        {testData.items.map((item, index) => (
          <AccordionItem key={item.name} itemName={item.name}>
            <AccordionButton data-testid={`button-${index}`}>
              <Heading color="gray" fontSize="lg">
                {item.name}
              </Heading>
            </AccordionButton>
            <AccordionPanel data-testid={`panel-${index}`}>
              <Text color="gray" fontSize="md">
                {item.content}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FileAccordion;
