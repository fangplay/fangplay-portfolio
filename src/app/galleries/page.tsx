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

export default function Galleries() {
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
                  <LetterFx trigger="instant">Galleries</LetterFx>
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
                <SmartImage
                  src="/images/galleries/38257349_10211374346266695_1448191465300688896_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/38404984_10211374347066715_7706687383760011264_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/42883491_1672188816225313_6032796787213860864_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/58462599_2077217282325644_3461426534550601728_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/59426704_2654171391322051_7140359893826928640_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/355085899_10222144571475594_7667173828853440542_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/464264126_8780950538634536_1624980947398824651_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/464524296_8476583909061795_538952395897178447_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/464682440_3294119074053780_4487795650411551837_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/464730904_3294119410720413_4955674865305033812_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/464740214_3294120377386983_2642240863523581247_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/464748291_3294120960720258_5684465703758278916_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
                <SmartImage
                  src="/images/galleries/465989187_10225221755043260_6457086200136776866_n.jpg"
                  alt="Image description"
                  aspectRatio="16/9"
                  radius="l"
                  objectFit="contain"
                />
              </Flex>
            </RevealFx>
          </Flex>
          {/* </RevealFx> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
