import Image, { ImageProps } from 'next/image';
import blur from '@/constants/blur';

type ImageBaseProps = Omit<ImageProps, 'src'> & { src: string };
export default function Img(props: ImageBaseProps) {
  const { src, ...others } = props;
  return (
    <Image
      src={src}
      placeholder="blur"
      blurDataURL={
        blur[src] ?? 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='
      }
      {...others}
    />
  );
}
