"use client";

import React from "react";

import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  InlineCode,
  RevealFx,
  LetterFx,
  GlitchFx,
  Arrow,
  SmartImage,
  Badge,
} from "@/once-ui/components";
import Link from "next/link";

export default function Certification() {
  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
    >
      <Flex
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
        flex={1}
      >
        <Flex
          as="main"
          direction="column"
          justifyContent="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          <Flex mobileDirection="column" direction="column" fillWidth gap="24">
            <Flex
              position="relative"
              flex={4}
              gap="20"
              marginBottom="80"
              direction="column"
              alignItems="center"
              mobileDirection="column"
              padding="20"
            >
              <Heading wrap="balance" variant="display-strong-s">
                <span className="font-code">
                  <LetterFx trigger="instant">Career Skils</LetterFx>
                </span>
              </Heading>
            </Flex>
          </Flex>
          {/* <RevealFx speed="medium" delay={0} translateY={0}> */}
          <Flex
            position="relative"
            flex={4}
            gap="20"
            marginBottom="104"
            direction="column"
            mobileDirection="column"
            padding="20"
          >
            <RevealFx speed="medium" delay={0} translateY={0}>
              <Flex direction="column" padding="24" gap="8">
                <Text variant="heading-strong-m">Programs Using</Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  NodeJS Certification Course - Google Developer Launchpad
                  (March 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  PHP Certification Course - Google Developer Launchpad (June
                  2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Laravel Certification Course: Google Developer Launchpad
                  (March 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  C# Certification Course - Google Developer Launchpad (August
                  2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  SQL Certification Course - Google Developer Launchpad (June
                  2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Kotin Certification Course - Google Developer Launchpad
                  (September 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Kotin Advanced Certification Course - Google Developer
                  Launchpad (September 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Tableau Certification Course - Google Developer Launchpad
                  (September 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Understanding System Analysis - Alison(May 2022)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Computer Networking - Digital Network Security - Alison(April
                  2022)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Programming Foundations : Fundamentals - LinkedIn
                  Learning(August 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  SPECTRUM Spring Boot API on Kotlin Langauge(Maven Version)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Programming Foundations : Beyond the Fundamentals - LinkedIn
                  Learning(September 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Introduction to Career Skills in Software Development -
                  LinkedIn Learning(June 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Career Essentials in Software Development by Microsoft and
                  LinkedIn - LinkedIn Learning & Microsoft(September 2023)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  What is Business Analysis? - LinkedIn Learning & International
                  Institute of Business Analysis(IIBA)&Projecct Management
                  Institute(PMI)(July 2023)
                </Text>
              </Flex>
            </RevealFx>
          </Flex>
          {/* </RevealFx> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
