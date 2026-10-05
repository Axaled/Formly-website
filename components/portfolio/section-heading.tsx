import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

type Props = {
  index: string
  eyebrow: string
  title: React.ReactNode
  description?: string
  className?: string
}

/** Numbered editorial section header: hairline, index + label, serif title. */
export function SectionHeading({ index, eyebrow, title, description, className }: Props) {
  return (
    <Reveal className={cn("border-t border-foreground pt-5", className)}>
      <div className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <span className="text-foreground">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">{title}</h2>
      {description ? (
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  )
}
