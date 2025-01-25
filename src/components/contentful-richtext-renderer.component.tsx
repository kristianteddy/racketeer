import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, Node } from '@contentful/rich-text-types';
import {ReactNode} from "react";

type RichTextRendererProps = {
    richTextDocument: {
        json: Document
};
};

export default function RichTextRenderer({richTextDocument} : RichTextRendererProps) {
    const options = {
        renderNode: {
            [BLOCKS.HEADING_6]: (node: Node, children: ReactNode) => {
                return <h6 className="mt-2 font-bold">{children}</h6>;
            },
        },
    };
       return <div>{documentToReactComponents(richTextDocument.json, options)}</div>;
};
