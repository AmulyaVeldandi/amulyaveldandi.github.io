import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/shared/Badge";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Scholarships & Awards | Amulya Veldandi",
  description:
    "Educational grants and scholarships awarded during my Master's program in Health Informatics at Indiana University, including recognition from SIIM, Women & Hi-Tech, and IU Luddy School.",
  openGraph: {
    title: "Scholarships & Awards | Amulya Veldandi",
    description:
      "Educational grants and scholarships awarded during my Master's program in Health Informatics at Indiana University, including recognition from SIIM, Women & Hi-Tech, and IU Luddy School.",
  },
};

const scholarships = [
  {
    name: "SIIM NIIC Alumni Scholarship",
    organization: "Society for Imaging Informatics in Medicine",
    year: "May 2025",
    description:
      "Prestigious scholarship recognizing exceptional promise in imaging informatics. Awarded by SIIM's National Institute of Imaging Informatics (NIIC) program, supporting attendance at SIIM 2025 Annual Meeting in Nashville, TN.",
    category: "Professional Recognition",
    link: "https://www.siim.org/",
    hasImage: true,
  },
  {
    name: "Women & Hi-Tech SIM Indy Leading the Future Scholarship",
    organization: "Women & Hi-Tech",
    year: "October 2024",
    description:
      "Scholarship supporting women in technology and informatics with emphasis on leadership potential. Awarded in partnership with Society for Information Management (SIM) Indianapolis chapter.",
    category: "Diversity & Leadership",
    link: "https://www.womenhitech.org/",
    hasImage: true,
  },
  {
    name: "Ruth Walker Health Informatics Scholarship",
    organization: "Indiana University School of Informatics and Computing",
    year: "June 2024",
    description:
      "Merit-based scholarship honoring Ruth Walker, pioneer in health informatics education. Recognizes academic excellence, research potential, and dedication to improving healthcare through informatics.",
    category: "Merit-Based",
  },
  {
    name: "Biohealth Informatics Research Travel Grant",
    organization: "IU Luddy School of Informatics, Computing, and Engineering",
    year: "April 2024",
    description:
      "Competitive research travel grant supporting attendance and presentation at IEEE International Symposium on Biomedical Imaging (ISBI) 2024 in Athens, Greece.",
    category: "Research Travel",
  },
  {
    name: "IUI Luddy MS Student Scholarship",
    organization: "Indiana University Luddy School",
    year: "January 2023 – December 2024",
    description:
      "Two-year merit-based scholarship providing significant tuition support throughout Master's program in Health Informatics. Renewable award granted to students demonstrating strong academic credentials and research potential.",
    category: "Merit-Based",
  },
];

export default function ScholarshipsPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      {/* Hero Section */}
      <AnimatedSection className="space-y-4 lg:space-y-5">
        <div className="flex items-center gap-3">
          <Badge variant="neutral">Academic Recognition</Badge>
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">2023-2025</span>
        </div>
        <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl lg:text-4xl">
          Scholarships & Awards
        </h1>
        <p className="max-w-3xl text-sm text-[var(--muted)] leading-relaxed sm:text-base">
          Educational grants and scholarships awarded during my Master&apos;s program in Health Informatics at Indiana
          University. These awards enabled me to focus on academic excellence, attend premier conferences, and
          contribute to the healthcare informatics community.
        </p>

        {/* Read Full Story CTA */}
        <div className="flex gap-4">
          <Button href="/blog/educational-grants-scholarships" variant="primary">
            Read Full Story →
          </Button>
          <Button
            href="https://www.siim.org/"
            variant="outline"
            className="flex items-center gap-2"
          >
            <span>About SIIM</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Button>
        </div>
      </AnimatedSection>

      {/* Quick Stats */}
      <AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-3 rounded-2xl border border-[var(--border-muted)] bg-[var(--surface)]/90 p-6 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Awards Received</p>
            <p className="text-2xl font-semibold text-[var(--accent)]">{scholarships.length}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Organizations</p>
            <p className="text-2xl font-semibold text-[var(--foreground)]">4</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Duration</p>
            <p className="text-2xl font-semibold text-[var(--foreground)]">2+ Years</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Scholarships List */}
      <div className="space-y-4 lg:space-y-5">
        <AnimatedSection>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4 sm:text-2xl">Awards & Recognition</h2>
        </AnimatedSection>

        {scholarships.map((scholarship, index) => (
          <AnimatedSection key={index}>
            <Card className="p-4 sm:p-5 lg:p-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">{scholarship.name}</h3>
                      <Badge variant="neutral">{scholarship.category}</Badge>
                      {scholarship.hasImage && (
                        <Badge variant="outline" className="text-[0.6rem]">
                          📸 Photo Available
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
                      <span>{scholarship.organization}</span>
                      <span>•</span>
                      <span className="font-semibold text-[var(--accent)]">{scholarship.year}</span>
                      {scholarship.link && (
                        <>
                          <span>•</span>
                          <a
                            href={scholarship.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                          >
                            Visit Website
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{scholarship.description}</p>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* Gratitude Section */}
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 text-center backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Gratitude</h2>
        <p className="max-w-2xl mx-auto text-sm text-[var(--muted)] leading-relaxed">
          I am deeply grateful to SIIM, Women & Hi-Tech, Indiana University, and all the scholarship committees and
          donors who made these awards possible. These scholarships were more than financial support—they were
          investments in the future of health informatics and validation of my career transition from medicine to
          informatics.
        </p>
        <p className="max-w-2xl mx-auto text-sm text-[var(--muted)] leading-relaxed mt-4">
          I am committed to paying this forward by mentoring future students, contributing to the health informatics
          community, and developing AI solutions that improve healthcare for all.
        </p>
        <div className="mt-8">
          <Link
            href="/blog/educational-grants-scholarships"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
          >
            Read the full story with photos and details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}