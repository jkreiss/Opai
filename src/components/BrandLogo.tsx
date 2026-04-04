import Image from "next/image";

type BrandLogoProps = {
  className: string;
};

export default function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Image
      src="/images/logo-green-no-outline.svg"
      alt="Opai Flooring logo"
      className={className}
      width={320}
      height={120}
      priority
    />
  );
}
