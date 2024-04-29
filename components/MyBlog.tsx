"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  StackDivider
} from "@chakra-ui/react";

type Article = {
  id: string;
  url: string;
  title: string;
  published_timestamp: string;
};

const MyBlog = () => {
  const [articles, setArticle] = useState<Article[]>([]);

  // Iframe URL
  let fbURL = "https://www.facebook.com/";
  let fbIframePath = "plugins/post.php?href=";
  let internalFbURL = "https%3A%2F%2Fwww.facebook.com%2Fthepracticaldev%2F";
  let fbPostURL =
    "posts%2Fpfbid0hcTagybr2ptTQrMYRQYfV2SbCzuTcBb2F3qnUow7HEK8nXQFKhgruFXeY9JwGWs9l&";
  let iframeSize = "width=350&show_text=true";
  let fullIframeURL =
    fbURL + fbIframePath + internalFbURL + fbPostURL + iframeSize;

  useEffect(() => {
    // article list from dev.to
    (async () => {
      const username = "keonakhon";
      const articleList = await fetch(
        `https://dev.to/api/articles?username=${username}`
      );
      const articleListData = await articleList.json();

      setArticle(articleListData);
    })();
  }, []);

  return (
    <section
      className="flex flex-col max-h-screen my-10
      justify-center items-center"
    >
      <div
        className="flex flex-col lg:flex-row w-10/12 md:w-6/12 bg-inherit
        rounded-xl shadow-lg overflow-hidden"
      >
        <Card
          className="flex flex-col bg-slate-100
          space-y-4 lg:w-6/12 md:w-6/12 p-3 shadow-lg"
        >
          <CardHeader>
            <Heading
              className="text-gray-900 text-center text-base font-medium"
              size="md"
            >
              My articles on dev.to
            </Heading>
          </CardHeader>
          <CardBody className="h-40 lg:h-min overflow-auto">
            <Stack divider={<StackDivider />} spacing="4">
              {articles &&
                articles.map((ar, i) => (
                  <Box key={ar.id}>
                    <Link
                      className="text-gray-700 hover:text-gray-600 hover:font-bold
                      text-sm text-ellipsis h-11"
                      href={ar.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {ar.title} (
                      {dayjs(ar.published_timestamp).format("YYYY-MM-DD")})
                    </Link>
                  </Box>
                ))}
            </Stack>
          </CardBody>
        </Card>
        <Card
          className="flex flex-col text-gray-900 bg-gray-200 items-center
          space-y-0 lg:w-6/12 md:w-6/12 p-0 md:p-3 shadow-lg"
        >
          <CardHeader>
            <Heading
              className="text-gray-900 text-center text-base font-medium"
              size="md"
            >
              My article was shared by dev.to and recieved over 700 reactions
            </Heading>
          </CardHeader>
          <CardBody>
            <iframe
              src={fullIframeURL}
              width="350"
              height="448"
              className="opacity-80"
              style={{ border: "none", overflow: "hidden", borderRadius: 20 }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default MyBlog;
