import TOC from "@/components/TOC";
import getLastSegment from "@/utils/getLastSegment";
import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import {useMDXComponent} from "next-contentlayer/hooks";

interface PostDetailProps {
  params: {
    category: string;
    detail: string;
  };
}

function PostDetail({params}: PostDetailProps) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const detailPost = posts.find(
    (post) => getLastSegment(post._raw.flattenedPath) === params.detail
  );

  const MDXComponent = useMDXComponent(detailPost?.body.code || "");

  return (
    <>
      <div className="max-w-full mx-auto my-auto pt-12 detail-contents">
        <div className="text-center pb-8">
          <h1 className="text-3xl text-center font-bold">
            {detailPost?.title}
          </h1>
          <span>{detailPost?.date}</span>
          <TOC />
        </div>
        <hr className="pb-8" />
        <div className="js-toc-content">
          <MDXComponent />
        </div>
      </div>
    </>
  );
}

export default PostDetail;
