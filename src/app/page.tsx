import Link from "next/link";

interface SocialLink {
  name: string;
  url: string;
}

function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
      {links.map((link) => (
        <Link
          key={link.name}
          className="hover:text-foreground transition-colors"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  const socialLinks: SocialLink[] = [
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/yourusername",
    // },
    {
      name: "GitHub",
      url: "https://github.com/ikvarxt",
    },
    // {
    //   name: "LinkedIn",
    //   url: "https://linkedin.com/in/yourusername",
    // },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Hi, I&apos;m ikvarxt</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-center sm:text-left">
            Welcome to my personal space on the web. I&apos;m a passionate developer
            who loves building beautiful and functional applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              I&apos;m a software developer with a focus on mobile technologies,
              specializing in both Android and iOS development. I enjoy creating
              elegant solutions to complex problems and learning new
              technologies.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
            href="/projects"
          >
            View My Projects
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
            href="mailto:your.email@example.com"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
      </main>

      <footer className="row-start-3">
        <SocialLinks links={socialLinks} />
      </footer>
    </div>
  );
}
