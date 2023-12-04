"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  StackDivider,
  Text,
  Center
} from "@chakra-ui/react";

const Experiences = () => {
  return (
    <section
      className="flex flex-col lg:flex-row min-h-screen
    space-y-16 lg:space-y-0 lg:space-x-28
    justify-center items-center"
    >
      <Card
        className="flex flex-col pb-4 w-10/12 bg-white opacity-80
      rounded-xl shadow-lg space-y-4 lg:w-6/12 md:w-6/12 p-6 items-center"
      >
        <CardHeader>
          <Heading
            className="text-gray-900 text-center text-base font-medium"
            size="md"
          >
            Some of the feature I've developed for Malware Detection on Linux
            using Python
          </Heading>
        </CardHeader>
        <CardBody className="mt-8">
          <Text className="text-gray-900 text-base font-medium flex items-center">
            {"<command> --help"}
          </Text>
          <Image
            src="/images/malware-detection-arguments.png"
            alt="Package Feature Gif"
            className="mx-auto sm:mx-0"
            width={672}
            height={202}
            priority
          />
        </CardBody>
        <CardBody className="mt-8">
          <Text className="text-gray-900 text-base font-medium flex items-center">
            {"<command> --monitor all"}
          </Text>
          <Image
            src="/gifs/monitor-scanning.gif"
            alt="Package Feature Gif"
            className="mx-auto sm:mx-0"
            width={672}
            height={373}
            priority
          />
        </CardBody>
      </Card>
    </section>
  );
};

export default Experiences;
