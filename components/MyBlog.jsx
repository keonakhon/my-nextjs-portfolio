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

const MyBlog = () => {
  const [article, setArticle] = useState([]);

  // Iframe URL
  let fbURL = "https://www.facebook.com/";
  let fbIframePath = "plugins/post.php?href=";
  let internalFbURL = "https%3A%2F%2Fwww.facebook.com%2Fthepracticaldev%2F";
  let fbPostURL =
    "posts%2Fpfbid0hcTagybr2ptTQrMYRQYfV2SbCzuTcBb2F3qnUow7HEK8nXQFKhgruFXeY9JwGWs9l&";
  let iframeSize = "width=350&show_text=true";
  let fullIframeURL =
    fbURL + fbIframePath + internalFbURL + fbPostURL + iframeSize;

  useEffect(async () => {
    // article list from dev.to
    const username = "keonakhon";
    const articleList = await fetch(
      `https://dev.to/api/articles?username=${username}`
    );
    const articleListData = await articleList.json();
    setArticle(articleListData);
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-row min-h-screen 
      space-y-16 lg:space-y-0 lg:space-x-28
      justify-center items-center"
    >
      <Card
        className="flex flex-col pb-4 w-10/12 bg-white opacity-70
        rounded-xl shadow-lg space-y-4 lg:w-3/12 md:w-6/12 p-6"
      >
        <CardHeader>
          <Heading
            className="text-gray-900 text-center text-base font-medium"
            size="md"
          >
            My Articles on dev.to
          </Heading>
        </CardHeader>
        <CardBody className="h-40 overflow-auto">
          <Stack divider={<StackDivider />} spacing="4">
            {article &&
              article.map((ar, i) => (
                <Box>
                  <Link
                    className="text-gray-700 hover:text-gray-950 text-sm text-ellipsis h-11"
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
        className="flex flex-col text-gray-900
        space-y-4 rounded-xl shadow-lg p-6"
      >
        <CardHeader className="bg-inherit opacity-70">
          <p className="text-base font-medium">
            My article was shared by dev.to social media
          </p>
        </CardHeader>
        <CardBody>
          <iframe
            src={fullIframeURL}
            width="350"
            height="448"
            className="opacity-60"
            style={{ border: "none", overflow: "hidden", borderRadius: 20 }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </CardBody>
      </Card>
    </section>
  );
};

export default MyBlog;
