import { getProfile, getFeaturedProjects, getProjectById } from "@/lib/content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SentinelLinkStory } from "@/components/story/sentinellink-story";
import { EduArchiveStory } from "@/components/story/eduarchive-story";
import { SkillsSection } from "@/components/skills-section";
import { TrackRecordSection } from "@/components/track-record-section";
import { BeyondCodeSection } from "@/components/beyond-code-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const sentinelLink = getProjectById("sentinellink");
  const eduArchive = getProjectById("eduarchive");

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink selection:bg-accent selection:text-white">
      <Header />

      <main id="main-content" className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16 sm:space-y-20">
        {/* 1. Hero Section with Download Resume */}
        <Hero person={profile.person} />

        {/* 2. Featured Projects & Measurable Outcomes */}
        <ProjectsSection
          projects={featuredProjects}
          otherProjects={profile.otherProjects}
        />

        {/* 3. Deep Dive Architecture Simulations */}
        {sentinelLink && <SentinelLinkStory project={sentinelLink} />}
        {eduArchive && <EduArchiveStory project={eduArchive} />}

        {/* 4. Skills Section (Core Fundamentals at the top) */}
        <SkillsSection skills={profile.skills} />

        {/* 5. Experience, Achievements & Education (Below Projects & Skills) */}
        <TrackRecordSection
          achievements={profile.achievements}
          experience={profile.experience}
          education={profile.education}
        />

        {/* 6. Beyond Code (Short 1-line strip) */}
        <BeyondCodeSection beyondCode={profile.beyondCode} />

        {/* 7. Direct Contact & Communication */}
        <ContactSection person={profile.person} />
      </main>

      <Footer />
    </div>
  );
}
