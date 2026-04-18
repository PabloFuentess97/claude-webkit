import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

export type TestimonialsBlockData = {
  blockType: "testimonials";
  eyebrow?: string | null;
  heading: string;
  items: Array<{
    id?: string | null;
    quote: string;
    author: string;
    role?: string | null;
    company?: string | null;
  }>;
};

export default function TestimonialsBlock({
  data,
}: {
  data: TestimonialsBlockData;
}) {
  return (
    <Section>
      <SectionHeading
        eyebrow={data.eyebrow ?? undefined}
        title={data.heading}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {data.items.map((t) => (
          <figure
            key={t.id ?? t.author}
            className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-7"
          >
            <Quote className="h-6 w-6 text-brand/60" aria-hidden />
            <blockquote className="mt-4 text-[15px] leading-relaxed text-fg">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <div className="font-display font-semibold">{t.author}</div>
              {(t.role || t.company) && (
                <div className="mt-0.5 text-sm text-fg-muted">
                  {[t.role, t.company].filter(Boolean).join(" · ")}
                </div>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
