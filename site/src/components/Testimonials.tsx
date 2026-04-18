import { Quote } from "lucide-react";
import { testimonials } from "../lib/data";

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.author}
          className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-7"
        >
          <Quote className="h-6 w-6 text-brand/60" aria-hidden />
          <blockquote className="mt-4 text-[15px] leading-relaxed text-fg">
            {t.quote}
          </blockquote>
          <figcaption className="mt-6 border-t border-border pt-4">
            <div className="font-display font-semibold">{t.author}</div>
            <div className="mt-0.5 text-sm text-fg-muted">
              {t.role} · {t.company}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
