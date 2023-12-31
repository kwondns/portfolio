import Image, { ImageProps } from 'next/image';
import blur from '@/constants/blur';

type ImageBaseProps = Omit<ImageProps, 'src'> & { src: string };
export default async function Img(props: ImageBaseProps) {
  const { src, ...others } = props;
  // const blur = await fs.readFile(src.replace('png', 'blur'), { encoding: 'utf-8' });
  // const blur = src.replace('png', 'blur');
  return <Image src={src} placeholder="blur" blurDataURL={blur[src]} {...others} />;
}
