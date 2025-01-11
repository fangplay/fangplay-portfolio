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

export default function Contact() {
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
                  <LetterFx trigger="instant">Developer Contact</LetterFx>
                </span>
              </Heading>
            </Flex>
          </Flex>

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
                {/* <Text variant="heading-strong-m">Programs Using</Text> */}
                <Text onBackground="neutral-medium" marginBottom="16">
                  Telephone: (+66)0866911960
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  E-mail:{" "}
                  <Link
                    target="_blank"
                    style={{ padding: "var(--responsive-space-l)" }}
                    href="mailto:sirirak.s@outlook.com"
                  >
                    sirirak.s@outlook.com
                  </Link>
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  LinkedIn :{" "}
                  <Link
                    target="_blank"
                    style={{ padding: "var(--responsive-space-l)" }}
                    href="https://www.linkedin.com/in/sirirak-sophakarn/"
                  >
                    Sirirak Sophakarn
                  </Link>
                </Text>
                <Text onBackground="neutral-medium" marginBottom="16">
                  GitHub :{" "}
                  <Link
                    target="_blank"
                    style={{ padding: "var(--responsive-space-l)" }}
                    href="https://github.com/fangplay"
                  >
                    FANGPLAY Sirirak
                  </Link>
                </Text>
              </Flex>
            </RevealFx>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
