import Image, { StaticImageData } from "next/image";

export default function Testimonial({
  testimonial,
  cloned = false,
  className,
  children,
}: {
  testimonial: {
    img: string;
    name: string;
    username?: string;
    date: string;
    rating?: number;
    videoUrl?: string;
    videoThumb?: StaticImageData;
    channel?: string;
  };
  cloned?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const channelIcon = (channel: string) => {
    switch (channel) {
      case "Twitter":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
            />
          </svg>
        );
      case "Google":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path d="M15.68 6.546H8.044v3.273h4.328c-.692 2.182-2.4 2.909-4.363 2.909a4.728 4.728 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8.01 16.001c4.411 0 8.4-2.909 7.671-9.455Z"></path>
          </svg>
        );
      case "YouTube":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="13"
            fill="none"
          >
            <path d="M16.044 3.416c-.178-1.303-.762-2.213-2.158-2.438C11.693.54 8.294.48 8.294.48s-3.4-.059-5.606.303C1.284.958.568 1.846.446 3.143.223 4.44.19 6.34.19 6.34s-.033 1.9.144 3.203c.178 1.303.762 2.214 2.158 2.438 2.193.438 5.592.498 5.592.498s3.4.059 5.606-.303c1.405-.275 2.02-1.065 2.242-2.36.223-1.297.256-3.197.256-3.197s.033-1.9-.144-3.203ZM6.137 9.444l.105-5.999 4.946 3.087-5.051 2.912Z"></path>
          </svg>
        );
      case "Amazon":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 448 512"
          >
            <path d="M257.2 162.7c-.7-35.4 31.4-56.6 87.5-55.4 28.1.6 58.5 4.9 83.5 11.3v93.3c-28.4-10.2-64.5-20-97.7-20-35.5 0-52.8 12.4-52.8 36.6 0 67.4 160.7 57.5 160.7 169.5 0 60.3-43.6 99.4-118.8 99.4-33.3 0-70.2-6.9-103.5-19.7v-96.4c30.2 14.7 66.8 24.5 96.4 24.5 34.8 0 51.6-11.5 51.6-33.2 0-66.3-160.9-54.9-160.9-170.3zm-54.9-44.2c-9.3-30.9-35.4-41.2-67.7-41.2-61.1 0-97.5 46.3-97.5 130.7 0 85.5 35.7 133.3 97.5 133.3 38.9 0 65.3-15.4 70.2-54.5h-70.2v-71.4H320v34.1c0 85.5-38.7 133.3-99.2 133.3-62.6 0-108.8-44.3-108.8-136.1 0-88.6 47.2-133.3 111.6-133.3 39.6 0 68.5 15.8 76.9 52.1z" />
          </svg>
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
          src={testimonial.img}
          width={44}
          height={44}
          alt={testimonial.name}
        />
        <div>
          <div className="font-bold">{testimonial.name}</div>
          {testimonial.username ? (
            <div>
              <a
                className="text-sm font-medium text-gray-500/80 transition hover:text-gray-500"
                href="#0"
                tabIndex={cloned ? -1 : 0}
              >
                {testimonial.username}
              </a>
            </div>
          ) : null}
        </div>
      </header>
      {testimonial.rating ? (
        <div className="mb-3 inline-flex">
          <span className="sr-only">Rating is 5 out of 5</span>
          <div className="relative">
            <svg
              className="fill-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width={114}
              height={18}
            >
              <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
            </svg>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: "100%" }}
            >
              <svg
                className="fill-amber-400"
                xmlns="http://www.w3.org/2000/svg"
                width={114}
                height={18}
              >
                <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
      {testimonial.videoThumb ? (
        <div className="grow">
          <p className="mb-4 font-semibold">{children}</p>
          <a href={testimonial.videoUrl} tabIndex={cloned ? -1 : 0}>
            <Image
              className="w-full"
              src={testimonial.videoThumb}
              width={312}
              height={180}
              alt="View on YouTuobe"
            />
          </a>
        </div>
      ) : (
        <div className="grow text-sm text-gray-700">{children}</div>
      )}
      <footer className="mt-4 flex items-center gap-2.5 text-gray-700">
        {testimonial.channel && channelIcon(testimonial.channel)}
        <div className="text-xs">{testimonial.date}</div>
      </footer>
    </article>
  );
}
