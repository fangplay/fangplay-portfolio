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

export default function Channel() {
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
                  <LetterFx trigger="instant">NeoXFANGPLAY Channel</LetterFx>
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
              <Flex direction="column">
                <SmartImage
                  src="/images/channel.png"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
              </Flex>
              <Flex direction="column" padding="24" gap="8">
                <Link
                  target="_blank"
                  style={{ padding: "var(--responsive-space-l)" }}
                  href="https://www.facebook.com/neoxfangplay"
                >
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Facebook Fanpage
                  </Text>
                </Link>
                <Link
                  target="_blank"
                  style={{ padding: "var(--responsive-space-l)" }}
                  href="https://www.youtube.com/channel/UCTfcciUBkQH7ecExH7Qloaw"
                >
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Youtube Live Channel
                  </Text>
                </Link>
                <Link
                  target="_blank"
                  style={{ padding: "var(--responsive-space-l)" }}
                  href="https://www.twitch.tv/neoxfangplay"
                >
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Twitch Live Channel
                  </Text>
                </Link>
              </Flex>
            </RevealFx>
          </Flex>
          {/* </RevealFx> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
