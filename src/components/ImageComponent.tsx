import { ImageProps } from "../types/ImageProps";
import Image from "next/image";

// prettier-ignore
export default function ImageComponent({ src, alt, width, height, radius }: ImageProps) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width}
      height={height}
      className={`object-cover ${radius} shadow-lg`}
    />
  )
}
