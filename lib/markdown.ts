import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypePrism from "@mapbox/rehype-prism";
import remarkGfm from "remark-gfm";
import rehypeImgSize from "rehype-img-size";
import rehypeExternalLinks from "rehype-external-links";



export async function parseMarkdown(content: string) {

    


    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeFormat)
        // @ts-ignore
        .use(rehypePrism)
        .use(rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
        .use(rehypeImgSize, { dir: "./public" })
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(content);

    return processedContent.toString();
}