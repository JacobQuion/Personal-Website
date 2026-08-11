import { tagColor } from "@/content/tags";

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const color = tagColor(tag);
        return (
          <li
            key={tag}
            // Hex + alpha suffix: 40 ≈ 25% border, 14 ≈ 8% fill.
            style={{
              color,
              borderColor: `${color}40`,
              backgroundColor: `${color}14`,
            }}
            className="rounded border px-2 py-0.5 text-[11px] leading-5 lowercase"
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
