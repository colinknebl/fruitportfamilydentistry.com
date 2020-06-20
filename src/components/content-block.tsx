import React from 'react';

import type { MarkDef } from '../models/content/MarkDef';
import type { Block } from '../models/content/Block';
import type { Child } from '../models/content/Child';
import { List } from '../models/content/List';

export function ContentBlock({ block }: { block: Block }) {
    const { tag, children, markDefs } = block;

    const childElements = parseChildren(children, markDefs);
    return React.createElement(tag, {}, childElements);
}

export function ContentList({ list }: { list: List }) {
    return parseList(list);
}

function parseList(list: List) {
    const listItems = list.children.map((child) => {
        if (child instanceof List) {
            return parseList(child);
        }
        return React.createElement(
            child.tag,
            {
                key: child.key,
            },
            parseChildren(child.children, child.markDefs)
        );
    });

    return React.createElement(
        list.tag,
        {
            key: list.key,
        },
        listItems
    );
}

function createNestedElements(
    tags: string[],
    innerText: string
): React.ReactNode {
    if (tags.length > 1) {
        return React.createElement(
            tags[0],
            {},
            createNestedElements(tags.slice(1), innerText)
        );
    } else {
        return React.createElement(tags[0], {}, innerText);
    }
}

function parseChildren(children: Child[], markDefs: MarkDef[]) {
    return children.map((child) => {
        let content: React.ReactNode = child.text;

        if (child.tags.length) {
            const def = markDefs.find((mark) => mark.key === child.tags[0]);
            if (def) {
                content = React.createElement(
                    def.tag,
                    {
                        href: def.href,
                        key: def.key,
                    },
                    child.text
                );
            } else {
                content = createNestedElements(child.tags, child.text);
            }
        }

        return React.createElement(
            child.tag,
            {
                key: child.key,
            },
            content
        );
    });
}
