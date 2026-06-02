import { Github, Linkedin } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/jainam-15",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jainam-shah",
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jainam Shah
        </p>

        <div className="flex items-center gap-6">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {s.icon && <s.icon className="w-4 h-4" />}
              {s.label}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
