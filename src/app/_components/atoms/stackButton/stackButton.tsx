import Image from 'next/image';
import Link from 'next/link';
import { stackButtonContainerCss } from '@/components/atoms/stackButton/stackButton.css';
import { TagStackType, StackButtonType } from '@/types/stackType';

type StackButtonProps = StackButtonType & { type: TagStackType };
export default function StackButton(props: StackButtonProps) {
  const { value, img, type, link } = props;
  return (
    <Link className={stackButtonContainerCss[type]} href={link}>
      <Image src={img} alt={img} width={100} height={100} />
      {value}
    </Link>
  );
}
