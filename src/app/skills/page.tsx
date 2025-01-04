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

export default function Skills() {
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
            {/* <Flex
              position="relative"
              flex={4}
              gap="20"
              marginBottom="104"
              direction="column"
              mobileDirection="column"
              padding="20"
            > */}
              {/* <Flex
                                                  position="relative"
                                                  flex={2}
                                                  paddingTop="56"
                                                  paddingX="xl"
                                                >
                                                  <SmartImage
                                                    src="/images/profile-2024.jpg"
                                                    alt="Image description"
                                                    aspectRatio="1/1"
                                                    radius="l"
                                                    objectFit="contain"
                                                  />
                                                </Flex> */}
            {/* </Flex> */}

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
                  <Text variant="heading-strong-m">General Skills</Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Team Working
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Communications
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Fast Learner
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Combine and multi-use skills
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Continueting skills
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Willingness to Learn
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Learning and Evolve
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Learning Skills
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Learning and development
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Listening Skills
                  </Text>
                </Flex>
              </RevealFx>

              <RevealFx speed="medium" delay={0} translateY={0}>
                <Flex direction="column" padding="24" gap="8">
                  <Text variant="heading-strong-m">Programming Langauges</Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    JavaScript
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    TypeScript
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    PHP
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    HTML
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    CSS
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Python
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Java
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Kotlin
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Flutter
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Dart
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    C#
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    C
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    C++
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Go
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Framework
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Lowcode
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    SQL
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    NoSQL
                  </Text>
                </Flex>
              </RevealFx>

              <RevealFx speed="medium" delay={0} translateY={0}>
                <Flex direction="column" padding="24" gap="8">
                  <Text variant="heading-strong-m">Programs Using</Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Microsoft Office Suite
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Adobe Photoshop
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Adobe Illustrator
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Adobe Premire Pro
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Adobe Audition
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Adobe After Effects
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Composer(PHP)
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    NodeJS(JavaScript & TypeScript)
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    GIT
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    PostMan
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Docker&Kubernetes
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    MySQL
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    MongoDB
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Tableau
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Microsoft Power BI App
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Adobe Photoshop Lightroom
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Microsoft SQL Server
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    VMware
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Veritus Net Backup
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Oracle Database
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Unity
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Ureal Engine
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Cloud server(AWS,Azure,GCloud)
                  </Text>
                </Flex>
              </RevealFx>

              <RevealFx speed="medium" delay={0} translateY={0}>
                <Flex direction="column" padding="24" gap="8">
                  <Text variant="heading-strong-m">Operating System</Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Windows
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Linux
                  </Text>
                </Flex>
              </RevealFx>

              <RevealFx speed="medium" delay={0} translateY={0}>
                <Flex direction="column" padding="24" gap="8">
                  <Text variant="heading-strong-m">Framework&Tools Using</Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Laravel
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    CodeIgniter
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Symfony
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    ExpressJS
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    VueJS&NuxtJS
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    ReactJS&NextJS
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Fastify
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    SpringBoot
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    FastAPI
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    DJango
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Maven
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Gradle
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    LowDB
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    .Net MVC & .Net Core
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    SQLite
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
