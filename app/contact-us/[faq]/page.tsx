"use client";

import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  Answer,
  Inner,
  Question,
  Wrapper,
} from "./styles";
import { ChevronDown } from "lucide-react";
import MaskText from "@/components/mask-text";
import {
  animate,
  desktopHeaderPhrase,
  faqData,
  mobileHeaderPhrase,
} from "./constants";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: "-10%",
    amount: 0.4,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Wrapper className="max-w-5xl mx-auto ">
      <Inner className="max-w-5xl mx-auto">
        {isMobile ? (
          <MaskText phrases={mobileHeaderPhrase} tag="h1" />
        ) : (
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        )}
        <Accordion ref={accordionRef}>
          {faqData.map((item, index) => (
            <AccordionItem
              variants={animate}
              initial="initial"
              animate={isInView ? "open" : ""}
              custom={index}
              key={index}
            >
              <Question onClick={() => toggleItem(index)}>
                {item.question}
                <ChevronDown />
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer.includes("[contact us]") ? (
                      <>
                        Simply{" "}
                        <Link
                          href="/contact-us"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          contact us
                        </Link>{" "}
                        through our website or{" "}
                        <a
                          href="tel:+251965054357"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          give us a call
                        </a>
                        . We&apos;ll discuss your needs and create a customized
                        plan for your business.
                      </>
                    ) : (
                      item.answer
                    )}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;
