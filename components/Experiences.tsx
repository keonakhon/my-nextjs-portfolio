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
      className="flex flex-col min-h-screen
      space-y-16 lg:space-y-0 justify-center items-center"
    >
      <Card
        className="flex flex-col pb-4 w-10/12 bg-white opacity-80
        rounded-xl shadow-lg space-y-4 lg:w-6/12 md:w-6/12 p-6"
      >
        <CardHeader>
          <Heading
            className="text-gray-900 text-center text-base font-semibold"
            size="lg"
          >
            2023 - Present: at Magic Tech Solution in Thailand (Remote)
          </Heading>
        </CardHeader>
        <CardBody className="mt-12">
          <ul className="list-disc text-gray-900 text-base font-medium flex items-center underline underline-offset-2">
            <li>Wood Warehouse</li>
          </ul>
        </CardBody>
        <CardBody className="mt-12">
          <ul className="list-disc text-gray-900 text-base font-medium flex items-center underline underline-offset-2">
            <li>Malware Detection on Linux</li>
          </ul>

          <Text className="text-gray-900 text-base font-medium flex items-center">
            Some of the feature I've developed for Malware Detection using
            Python:
          </Text>
          <Text className="text-gray-900 text-base mt-3 font-medium flex items-center">
            {"<command> --help"}
          </Text>
          <Image
            src="/images/malware-detection-arguments.png"
            alt="Package Feature Gif"
            className="mx-auto sm:mx-0 flex items-center"
            width={672}
            height={202}
            priority
          />

          <Text className="text-gray-900 text-base mt-3 font-medium flex text-left">
            {"<command> --monitor all"}
          </Text>
          <Image
            src="/gifs/monitor-scanning.gif"
            alt="Package Feature Gif"
            className="mx-auto sm:mx-0 flex items-center"
            width={672}
            height={373}
            priority
          />
          <Text className="text-gray-900 text-base mt-3 font-medium flex items-center">
            It's one of the project that brought the fund for 30 Million THB in
            Shark Tank Thailand
          </Text>
          <div className="flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BGNEsbaHEOY?si=oi4gcD53D4EHBt-i"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </CardBody>
      </Card>
      <div className="h-20 border-l border-gray-400" />
      <Card
        className="flex flex-col pb-4 w-10/12 bg-white opacity-80
        rounded-xl shadow-lg space-y-4 lg:w-6/12 md:w-6/12 p-6 items-center"
      >
        <CardHeader>
          <Heading
            className="text-gray-900 text-center text-base font-semibold"
            size="lg"
          >
            Mar 2022 - Dec 2022: Outsourcing (Remote)
          </Heading>
        </CardHeader>
      </Card>
      <div className="h-20 border-l border-gray-400" />
      <Card
        className="flex flex-col pb-4 w-10/12 bg-white opacity-80
        rounded-xl shadow-lg space-y-4 lg:w-6/12 md:w-6/12 p-6 items-center"
      >
        <CardHeader>
          <Heading
            className="text-gray-900 text-center text-base font-semibold"
            size="lg"
          >
            Sep 2021 - Feb 2022: DroppinX (On-site)
          </Heading>
        </CardHeader>
        <CardBody className="mt-8">
          <Text className="text-gray-900 text-base font-medium flex items-center">
            {"Later rebranding to OneX and non-related to DroppinX"}
          </Text>
        </CardBody>
      </Card>
      <div className="h-20 border-l border-gray-400" />
      <Card
        className="flex flex-col pb-4 w-10/12 bg-white opacity-80
        rounded-xl shadow-lg space-y-4 lg:w-6/12 md:w-6/12 p-6 items-center"
      >
        <CardHeader>
          <Heading
            className="text-gray-900 text-center text-base font-semibold"
            size="lg"
          >
            Nov 2018 - May 2021: GOTEDDY (On-site)
          </Heading>
        </CardHeader>
      </Card>
      <div className="h-20 border-l border-gray-400" />
      <Card
        className="flex flex-col pb-4 w-10/12 bg-white opacity-80
        rounded-xl shadow-lg space-y-4 lg:w-6/12 md:w-6/12 p-6 items-center"
      >
        <CardHeader>
          <Heading
            className="text-gray-900 text-center text-base font-semibold"
            size="lg"
          >
            Apr 2018 - Nov 2018: Dexter ICT & Graphic Design (On-site)
          </Heading>
        </CardHeader>
      </Card>
      <div className="h-20 border-l border-gray-400" />
      <Card
        className="flex flex-col pb-4 w-10/12 bg-white opacity-80
        rounded-xl shadow-lg space-y-4 lg:w-6/12 md:w-6/12 p-6 items-center"
      >
        <CardHeader>
          <Heading
            className="text-gray-900 text-center text-base font-semibold"
            size="lg"
          >
            Mar 2017 - Aug 2017: Digital Monkey (On-site)
          </Heading>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Experiences;
