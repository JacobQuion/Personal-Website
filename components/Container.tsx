export default function Container({
  size = "prose",
  className = "",
  children,
}: {
  /** prose: readable text column. wide: nav, footer, and the project grid. */
  size?: "prose" | "wide";
  className?: string;
  children: React.ReactNode;
}) {
  const width = size === "wide" ? "max-w-5xl" : "max-w-2xl";
  return (
    <div className={`mx-auto w-full ${width} px-6 ${className}`}>{children}</div>
  );
}
