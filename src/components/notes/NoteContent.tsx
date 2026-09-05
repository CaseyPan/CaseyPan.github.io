import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Callout } from "./Callout";

const components = { Callout };

export function NoteContent({ content }: { content: string }) {
  return (
    <div className="prose-note">
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeHighlight],
          },
        }}
      />
    </div>
  );
}
