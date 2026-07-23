import { projects } from "@/lib/portfolio-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyClient from "./case-study-client";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Kanwer Abdull Rahman`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) notFound();
  return <CaseStudyClient project={project} />;
}
