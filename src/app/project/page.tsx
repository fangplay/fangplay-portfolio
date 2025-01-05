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

export default function Projects() {
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
                  Laravel Diary Full Stack)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  NodeJS Diary Full Stack(EJS Files)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  NextJS Portfolio FrontEnd Project
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  NodeJS Money Stack Project(ReactJS&Express)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Science Edu Project(Graduate Project)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  NeoNext SPECTRUM on Fastify NodeJS
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  API Web App on CodeIgniter 4 Framework
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Diary API website on Symfony 6 Framework & ReactJS
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Angular Front-End Web App
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  SPECTRUM Spring Boot API on Java Langauge
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  SPECTRUM Spring Boot API on Kotlin Langauge(Gradle Version)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  SPECTRUM Spring Boot API on Kotlin Langauge(Maven Version)
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Web Application On Fastify&ReactJS Framework
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  VUEJS Front-end Website
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  VUEJS Presentation Website
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  SPECTRUM Next Official Website on NextJS by TypeScript
                  programming Langauge
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Diary API Website on C# Langauge
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Dev Portofrio
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  QRcode Generator By NextJS with JavaScript
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  QRcode Generator By NextJS with TypeScript
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  Gamer Shop by Laravel Framework
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
