import { useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const SmartImage = ({
  alt,
  className,
  containerClassName,
  loading = "lazy",
  decoding = "async",
  onLoad,
  ...props
}: SmartImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span
      className={cn(
        "relative block overflow-hidden bg-muted",
        containerClassName
      )}
    >
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-muted via-secondary to-muted transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
        aria-hidden="true"
      />
      <img
        {...props}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        className={cn(
          "transition-opacity duration-500 ease-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </span>
  );
};

export default SmartImage;
