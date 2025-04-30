import type { MetaRecord } from "nextra";

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  index: {
    type: "page",
    title: "Index"
  },
  github_link: {
    type: 'page',
    title: 'Nextra',
    href: 'https://github.com/shuding/nextra'
  }
  // ...
};

export default meta;
