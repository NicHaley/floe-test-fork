import React from "react";
import { getFloeClient } from "@/app/floe-client";
import { withFloeServerPages, FloePageProps } from "@floe/next";
import Link from "next/link";
import DocItem from "./DocPage";
import ErrorPage from "./_components/ErrorPage";

export const revalidate = 10;

// export const generateMetadata = gm("Docs");

async function DocsPage({
  isError,
  isNode,
  post,
  posts,
  isNotFound,
}: FloePageProps & {
  params: {
    subdomain: string;
    datasource: string;
    path: string[];
  };
}) {
  if (isNotFound || isError) {
    return <ErrorPage message="Not found ¯\_(ツ)_/¯" />;
  }

  const renderPostOrPosts = async () => {
    return (
      <div className="flex flex-col flex-1 gap-24">
        {isNode ? (
          <div className="w-full">
            <DocItem doc={post} />
          </div>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="mb-2 no-underline"
            >
              <DocItem doc={post} />
            </Link>
          ))
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col-reverse w-full max-w-screen-xl gap-8 px-6 pt-24 pb-8 mx-auto md:px-8 md:flex-row">
      {await renderPostOrPosts()}
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ params }: { params: any }) => {
  const floeClient = getFloeClient(params.subdomain);

  const path = decodeURIComponent((params.path ?? []).join("/"));

  return withFloeServerPages({
    Page: DocsPage,
    floeClient,
    path,
    datasourceSlug: params.datasource,
  })({ params });
};