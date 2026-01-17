import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getJournalPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results.map((page) => {
    const props = page.properties;
    return {
      title: props.Title.title[0]?.plain_text || "",
      summary: props.Summary.rich_text[0]?.plain_text || "",
      slug: props.Slug.rich_text[0]?.plain_text || "",
      date: props.Date.date?.start || "",
    };
  });
}