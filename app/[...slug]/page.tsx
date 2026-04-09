import type { Metadata } from "next";
import { routeComponentMap } from "@/routeComponentMap";
import { getRouteMetadata } from "@/routeMetadata";
import { notFound } from "next/navigation";

type SlugPageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  return getRouteMetadata(slug.join("/"));
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const routeKey = slug.join("/");
  const RouteComponent = routeComponentMap[routeKey];

  if (!RouteComponent) {
    notFound();
  }

  return <RouteComponent />;
}
