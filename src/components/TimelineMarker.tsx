export default function TimelineMarker() {
  const defaultMarker =
    'absolute shadow-[0_0_0_4px_var(--color-secondary)] bg-timeline-marker size-4 rounded-full max-xl:-translate-y-1/2 xl:-translate-x-1/2';
  return <div className={`${defaultMarker} timeline-marker`} />;
}
