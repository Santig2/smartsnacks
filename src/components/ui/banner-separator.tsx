import Image from "next/image";
import Link from "next/link";

interface BannerSeparatorProps {
  src: string;
  alt: string;
  href?: string;
  className?: string;
}

export function BannerSeparator({ src, alt, href = "/menu", className = "" }: BannerSeparatorProps) {
  const imageElement = (
    <div className={`w-full relative overflow-hidden bg-[#FDF9F3] border-y border-[#17343A]/10 shadow-xs ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={550}
        className="w-full h-auto object-cover block transition-transform duration-700 hover:scale-[1.015]"
        sizes="100vw"
        priority={false}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full cursor-pointer group focus:outline-hidden" aria-label={alt}>
        {imageElement}
      </Link>
    );
  }

  return imageElement;
}
