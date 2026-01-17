export const prerender = true;

const yaml = `
backend:
  name: git-gateway
  branch: main

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "journal"
    label: "Journal"
    folder: "src/content/journal"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime", format: "YYYY-MM-DD" }
      - { label: "Summary", name: "summary", widget: "text", required: false }
      - { label: "Body", name: "body", widget: "markdown" }
`;

export async function GET() {
  return new Response(yaml.trim() + "\n", {
    headers: { "Content-Type": "text/yaml; charset=utf-8" },
  });
}