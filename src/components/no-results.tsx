import Image from "next/image";
import noResultImg from "@public/no-result.svg";

interface NoResultsProps {
  title?: string;
  description?: string;
}

export function NoResults({
  title = "No Results Found",
  description = "Try adjusting your search terms",
}: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <Image src={noResultImg} alt="No results illustration" className="mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}
