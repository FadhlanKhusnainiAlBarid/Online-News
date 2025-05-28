"use server";
import PageComponent from "./page-component";

export default async function Pages({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages } = await params;

  return <PageComponent params={pages} />;
}
