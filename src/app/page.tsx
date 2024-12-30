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

export default function Home() {
  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Themes",
      description: "Style your app in minutes.",
    },
    {
      href: "https://once-ui.com/docs/flexComponent",
      title: "Layout",
      description: "Build responsive layouts.",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Typography",
      description: "Scale text automatically.",
    },
  ];

  const currentYear = new Date().getFullYear(); // Get the current year dynamically

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
          <Flex mobileDirection="column" fillWidth gap="24">
            <RevealFx speed="medium" delay={0} translateY={0}>
              <Flex position="relative" flex={2} paddingTop="56" paddingX="xl">
                <SmartImage
                  src="/images/profile-2024.jpg"
                  alt="Image description"
                  aspectRatio="1/1"
                  radius="l"
                  objectFit="contain"
                />
              </Flex>

              <Flex
                position="relative"
                flex={4}
                gap="20"
                marginBottom="104"
                mobileDirection="column"
                direction="row"
                padding="20"
              >
                <Flex direction="column" padding="24" gap="8">
                  <Text variant="heading-strong-m">About Myself</Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Name : Sirirak Sophakarn
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Chinese Name : 西裡拉克·索法卡恩
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Japanese Name : シリラク・ソファカーン
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Korean Name : 시라크 소타카르
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Nickname : Fangplay
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Chinese Nickname : 方普拉
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Japanese Nickname : ファングプレイ
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Korean Nickname : 팡플레이
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Birth Date : 5 August 1995
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    Blood Line : B
                  </Text>
                </Flex>

                <Flex direction="column" padding="24" gap="8">
                  <Text variant="heading-strong-m">Score Langauge</Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    TOEIC Score : 515(On 21 November 2023)
                  </Text>
                  <Text onBackground="neutral-medium" marginBottom="16">
                    CU-TEP Score : 43(On 27 May 2023)
                  </Text>
                </Flex>
              </Flex>
            </RevealFx>

            <Flex
              position="relative"
              flex={4}
              gap="24"
              marginBottom="104"
              direction="column"
            >
              <InlineCode
                className="shadow-m"
                style={{
                  width: "fit-content",
                  padding: "var(--static-space-8) var(--static-space-16)",
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                This web was creation&developing on{" "}
                <span className="brand-on-background-medium">
                  NextJS&OnceUI
                </span>
              </InlineCode>

              <GlitchFx
                speed="medium"
                interval={2500}
                trigger="instant"
                continuous
              >
                <Heading wrap="balance" variant="display-strong-s">
                  <span className="font-code">
                    <LetterFx trigger="instant">
                      I'm developer devops and system administrator who can
                      continue work evolve & study include practice for my
                      carreer to be advanced skills. FANGPLAY Sirirak
                    </LetterFx>
                  </span>
                </Heading>

                {/* <Button
                  id="sendmail"
                  href="mailto:sirirak.s@outlook.com"
                  variant="secondary"
                > */}
                  <Flex alignItems="center">
                    <Badge arrow effect
                    id="sendmail"
                    href="mailto:sirirak.s@outlook.com">
                    Send Mail
                    </Badge>
                    {/* Send Mail
                    <Arrow trigger="#sendmail" /> */}
                  </Flex>
                {/* </Button> */}
              </GlitchFx>
              <a href="https://app.daily.dev/fangplay">
                <img
                  src="https://api.daily.dev/devcards/v2/z04Ml86W6sXFPQJyBEh3E.png?type=default&r=txx"
                  width="356"
                  alt="Sirirak Sophakarn's Dev Card"
                />
              </a>
            </Flex>
          </Flex>
          {/* <GlitchFx speed="medium" interval={7500} trigger="instant" continuous> */}
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="repeat(3, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth
          >
            <Link
              target="_blank"
              style={{ padding: "var(--responsive-space-l)" }}
              href="#"
            >
              <Flex fillWidth paddingY="8" gap="8" direction="column">
                <Flex fillWidth gap="12" alignItems="center">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    Projects
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  The projects was editing and/or making by me.
                </Text>
              </Flex>
            </Link>

            <Link
              target="_blank"
              style={{ padding: "var(--responsive-space-l)" }}
              href="#"
            >
              <Flex fillWidth paddingY="8" gap="8" direction="column">
                <Flex fillWidth gap="12" alignItems="center">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    Skills
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Work soft and hard skills on career.
                </Text>
              </Flex>
            </Link>

            <Link
              target="_blank"
              style={{ padding: "var(--responsive-space-l)" }}
              href="#"
            >
              <Flex fillWidth paddingY="8" gap="8" direction="column">
                <Flex fillWidth gap="12" alignItems="center">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    Contact
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Contact on work and/or other interesting on my presentation
                  data.
                </Text>
              </Flex>
            </Link>

            <Link
              target="_blank"
              style={{ padding: "var(--responsive-space-l)" }}
              href="#"
            >
              <Flex fillWidth paddingY="8" gap="8" direction="column">
                <Flex fillWidth gap="12" alignItems="center">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    NeoXFANGPLAY Channel
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Channel video and steaming online my channel.
                </Text>
              </Flex>
            </Link>

            <Link
              target="_blank"
              style={{ padding: "var(--responsive-space-l)" }}
              href="#"
            >
              <Flex fillWidth paddingY="8" gap="8" direction="column">
                <Flex fillWidth gap="12" alignItems="center">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    My Certification
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  My certification from all courses.
                </Text>
              </Flex>
            </Link>

            <Link
              target="_blank"
              style={{ padding: "var(--responsive-space-l)" }}
              href="#"
            >
              <Flex fillWidth paddingY="8" gap="8" direction="column">
                <Flex fillWidth gap="12" alignItems="center">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    My Galleries
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Picture memories on my story.
                </Text>
              </Flex>
            </Link>
          </Grid>
          {/* </GlitchFx> */}
        </Flex>
      </Flex>
      <Flex
        as="footer"
        position="relative"
        fillWidth
        paddingX="l"
        paddingY="m"
        justifyContent="space-between"
      >
        <Text variant="body-default-s" onBackground="neutral-weak">
          © {currentYear} Once UI, Developed&Designed By FANGPLAY SIRIRAK
        </Text>
        <Flex gap="12">
          <Button
            href="https://github.com/fangplay"
            prefixIcon="github"
            size="s"
            variant="tertiary"
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/sirirak-sophakarn/"
            prefixIcon="linkedin"
            size="s"
            variant="tertiary"
          >
            LinkedIn
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
