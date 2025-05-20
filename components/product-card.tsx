import Image, { StaticImageData } from "next/image";

export default function ProductCard({
  product,
  cloned = false,
  className,
  children,
}: {
  product: {
    img: string;
    name: string;
    description?: string;
    specs: string;
    details: string;
    channel?: string;
  };
  cloned?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const channelIcon = (channel: string) => {
    switch (channel) {
      case "Amazon":
        return (
          <Image
            src="/images/amazon.svg"
            width={16}
            height={16}
            alt="Amazon logo"
            className="fill-current"
          />
        );
      default:
        return "";
    }
  };

  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:odd:-rotate-1 md:even:rotate-1 ${className}`}
    >
      <header className="mb-4 flex items-center gap-3">
        <Image
          className="shrink-0 rounded-full"
          src={product.img}
          width={44}
          height={44}
          alt={product.name}
        />
        <div>
          <div className="font-bold">{product.name}</div>
          {product.description && (
            <div className="text-sm text-gray-500/80">
              {product.description}
            </div>
          )}
        </div>
      </header>
      <div className="grow text-sm text-gray-700">
        <p className="mb-2 font-medium">{children}</p>
        <p className="text-xs text-gray-500">{product.specs}</p>
      </div>
      <footer className="mt-4 flex items-center gap-2.5 text-gray-700">
        {product.channel && channelIcon(product.channel)}
        <div className="text-xs">{product.channel}</div>
      </footer>
    </article>
  );
}
