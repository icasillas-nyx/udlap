/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Eyebrow: {},
        Heading: {},
        Body: {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        image: {},
        Right: {},
        HeroLayout: {},
      },
      variantValues: { mode: "Light" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "https://google.com",
  });
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(64,170,191,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Nyx Technology"
              {...getOverrideProps(overrides, "Eyebrow")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Redefinimos lo que es posible, damos forma al futuro y llegamos allí"
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Nuestra pasión es sentirnos orgullososos de lo que hacemos y aportar soluciones en tecnologías de la información para hacer un país mejor."
              {...getOverrideProps(overrides, "Body")}
            ></Text>
          </Flex>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            backgroundColor="rgba(64,170,191,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Conoce más"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Right")}
      >
        <Image
          width="720px"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          src="https://nyx.mx/wp-content/uploads/2022/11/UNAM.jpg"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
