
import type {
  GeneralInformationBlock,
} from "@/data/generalInformation";

type Props = {
  title: string;
  blocks: GeneralInformationBlock[];
};

export default function GeneralInformationDetails({
  title,
  blocks,
}: Props) {
  return (
    <div className="min-w-0">
      <h2 className="mb-5 text-center text-[17px] font-extralight text-[#a39486]">
        {title}
      </h2>

      <div className="space-y-7">
        {blocks.map((block, index) => (
          <section key={index}>
            {block.title && (
              <h3 className="mb-1 text-[13px] font-semibold text-[#777]">
                {block.title}
              </h3>
            )}

            <div className="space-y-0.5">
              {block.lines.map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className="text-[12px] leading-[1.65] font-light text-[#858585] md:text-[13px]"
                >
                  {line.label && (
                    <span className="font-semibold">
                      {line.label}:{" "}
                    </span>
                  )}
                  {line.text}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
