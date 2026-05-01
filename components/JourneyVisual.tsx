import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Fragment } from "react";
import { FadeIn } from "@/components/FadeIn";
import type {
  JourneyCurrentWorkItem,
  JourneyConnectorNote,
  JourneyConnectorRow,
  JourneyConnectorRowId,
  JourneyVisualItem
} from "@/data/types";

type JourneyVisualProps = {
  items: JourneyVisualItem[];
  connectorRows: JourneyConnectorRow[];
  currentWork: JourneyCurrentWorkItem[];
};

function Connector({
  startX,
  endX,
  size = "regular"
}: {
  startX: number;
  endX: number;
  size?: "short" | "regular" | "long";
}) {
  const direction = startX < endX ? 1 : -1;
  const controlX1 = startX + direction * 2;
  const controlX2 = endX - direction * 2;
  const path = `M ${startX} 4 C ${controlX1} 30, ${controlX2} 70, ${endX} 96`;

  return (
    <div aria-hidden="true" className="flex justify-center">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={
          size === "long"
            ? "h-48 w-10 md:h-72 md:w-14 xl:h-88"
            : size === "short"
              ? "h-24 w-10 md:h-40 md:w-14 xl:h-52"
            : "h-40 w-10 md:h-64 md:w-14 xl:h-80"
        }
      >
        <path
          d={path}
          fill="none"
          className="stroke-accent/18"
          strokeWidth="5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={path}
          fill="none"
          className="stroke-accent/75"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 16"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function getConnectorRowId(index: number, total: number): JourneyConnectorRowId {
  if (index === -1) {
    return "before-first";
  }

  if (index === total - 1) {
    return "after-last";
  }

  return `between-${index}-${index + 1}`;
}

function renderConnectorNotes(
  notes: JourneyConnectorNote[],
  lane: "left" | "right",
  anchor: "start" | "middle" | "end"
) {
  return notes
    .filter((note) => note.lane === lane && note.anchor === anchor)
    .map((note) => (
      <div
        key={`${note.title}-${lane}-${anchor}`}
        className="max-w-[22rem] space-y-2 xl:max-w-[24rem]"
      >
        <h4 className="text-sm font-semibold leading-snug text-text">{note.title}</h4>
        <p className="text-sm leading-6 text-muted">{note.description}</p>
      </div>
    ));
}

function ConnectorRow({
  fromLeft,
  notes,
  size = "regular"
}: {
  fromLeft: boolean;
  notes: JourneyConnectorNote[];
  size?: "short" | "regular" | "long";
}) {
  const startX = fromLeft ? 46 : 54;
  const endX = fromLeft ? 54 : 46;

  return (
    <div
      className={
        size === "long"
          ? "py-14 md:py-20 xl:py-28"
          : size === "short"
            ? "py-4 md:py-8 xl:py-10"
          : "py-12 md:py-18 xl:py-24"
      }
    >
      <div className="grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-x-8 xl:gap-x-12">
        <div
          className={
            size === "long"
              ? "hidden md:grid h-72 grid-rows-[1fr_1fr_1fr] xl:h-88"
              : size === "short"
                ? "hidden md:grid h-40 grid-rows-[1fr_1fr_1fr] xl:h-52"
              : "hidden md:grid h-64 grid-rows-[1fr_1fr_1fr] xl:h-80"
          }
        >
          <div className="flex items-start justify-end text-right">
            {renderConnectorNotes(notes, "left", "start")}
          </div>
          <div className="flex items-center justify-end text-right">
            {renderConnectorNotes(notes, "left", "middle")}
          </div>
          <div className="flex items-end justify-end text-right">
            {renderConnectorNotes(notes, "left", "end")}
          </div>
        </div>

        <Connector startX={startX} endX={endX} size={size} />

        <div
          className={
            size === "long"
              ? "hidden md:grid h-72 grid-rows-[1fr_1fr_1fr] xl:h-88"
              : size === "short"
                ? "hidden md:grid h-40 grid-rows-[1fr_1fr_1fr] xl:h-52"
              : "hidden md:grid h-64 grid-rows-[1fr_1fr_1fr] xl:h-80"
          }
        >
          <div className="flex items-start justify-start text-left">
            {renderConnectorNotes(notes, "right", "start")}
          </div>
          <div className="flex items-center justify-start text-left">
            {renderConnectorNotes(notes, "right", "middle")}
          </div>
          <div className="flex items-end justify-start text-left">
            {renderConnectorNotes(notes, "right", "end")}
          </div>
        </div>

        {notes.length > 0 ? (
          <div className="space-y-4 md:hidden">
            {notes.map((note) => (
              <div key={`${note.title}-mobile`} className="max-w-[26rem] space-y-1">
                <h4 className="text-sm font-semibold leading-snug text-text">{note.title}</h4>
                <p className="text-sm leading-6 text-muted">{note.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function JourneyDestinationLead() {
  return <div className="py-8 md:py-10" aria-hidden="true" />;
}

function CurrentWorkCluster({ items }: { items: JourneyCurrentWorkItem[] }) {
  return (
    <FadeIn>
      <section className="mx-auto max-w-[76rem]">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface/78 px-6 py-7 shadow-soft backdrop-blur-sm md:px-8 md:py-8 xl:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/8 via-accent/4 to-transparent"
          />

          <div className="relative space-y-7 md:space-y-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow">Current Work</div>
              <div className="mt-3 space-y-3">
                <h3 className="text-3xl leading-tight md:text-[2.35rem]">
                  What I’m building now.
                </h3>
                <p className="mx-auto max-w-2xl text-sm leading-7 text-muted md:text-base">
                  These projects reflect where my work is focused now:
                  productized AI, planning systems, and more model-level
                  experimentation.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item, index) => (
                <FadeIn key={item.slug} delay={0.08 + index * 0.05} className="h-full">
                  <article className="flex h-full flex-col justify-between rounded-[1.6rem] border border-border/45 bg-surfaceAlt/28 px-5 py-5 shadow-[0_18px_42px_rgb(var(--accent-shadow)/0.06)] md:px-6 md:py-6">
                    <div className="space-y-5">
                      <div className="space-y-3">
                        <h4 className="text-[1.35rem] leading-tight">{item.title}</h4>
                        <p className="text-sm leading-7 text-muted">
                          {item.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-border/55 bg-surface/72 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7">
                      <Link
                        href={`/case-studies/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
                      >
                        View case study
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export function JourneyVisual({
  items,
  connectorRows,
  currentWork
}: JourneyVisualProps) {
  const connectorRowMap = new Map(connectorRows.map((row) => [row.id, row]));

  return (
    <div className="space-y-0">
      {items.length > 0 ? (
        <ConnectorRow
          fromLeft={false}
          notes={connectorRowMap.get("before-first")?.notes ?? []}
          size="short"
        />
      ) : null}

      {items.map((item, index) => {
        const isCardLeft = index % 2 === 0;
        const connectorRowId = getConnectorRowId(index, items.length);

        const cardColumn = (
          <div
            className={[
              "flex items-center",
              isCardLeft ? "justify-start" : "justify-end"
            ].join(" ")}
          >
            <div className="w-full md:max-w-[28.5rem]">
              <FadeIn delay={index * 0.07}>
                <article className="surface-card relative z-10 overflow-hidden px-6 py-6 md:px-7 md:py-7">
                  <div className="brand-gradient absolute inset-x-0 top-0 h-1 opacity-80" />
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="eyebrow text-accent">{item.period}</div>
                      <h3 className="text-2xl leading-tight md:text-[1.85rem]">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-muted md:text-[0.98rem]">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm leading-7 text-muted md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>

              <div className="pt-5 md:hidden">
                <div className="inline-flex rounded-full border border-border/60 bg-surface/80 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted shadow-soft backdrop-blur-sm">
                  {item.phase}
                </div>
              </div>
            </div>
          </div>
        );

        const phaseColumn = (
          <div className="hidden md:flex items-center justify-center">
            <div className="max-w-[18rem] text-center">
              <div className="space-y-2">
                <div className="eyebrow">Phase</div>
                <div className="text-xl font-display tracking-[-0.03em] text-text/88 xl:text-2xl">
                  {item.phase}
                </div>
              </div>
            </div>
          </div>
        );

        return (
          <Fragment key={item.title}>
            <section>
              <div className="grid items-center gap-6 md:grid-cols-2 md:gap-x-16 xl:gap-x-24">
                {isCardLeft ? (
                  <>
                    {cardColumn}
                    {phaseColumn}
                  </>
                ) : (
                  <>
                    {phaseColumn}
                    {cardColumn}
                  </>
                )}
              </div>
            </section>

            {index < items.length - 1 ? (
              <ConnectorRow
                fromLeft={isCardLeft}
                notes={connectorRowMap.get(connectorRowId)?.notes ?? []}
                size="long"
              />
            ) : null}
          </Fragment>
        );
      })}

      {items.length > 0 ? (
        <ConnectorRow
          fromLeft={(items.length - 1) % 2 === 0}
          notes={connectorRowMap.get("after-last")?.notes ?? []}
          size="long"
        />
      ) : null}

      {currentWork.length > 0 ? (
        <>
          <JourneyDestinationLead />
          <CurrentWorkCluster items={currentWork} />
        </>
      ) : null}
    </div>
  );
}
