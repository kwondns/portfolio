import { Link } from 'react-router-dom';

import { Img } from '@/atoms';
import { NoteType } from '@/types';
import { NoteCardInfo } from '@/molecules';

type NoteCardProps = {
  note: NoteType.NoteType;
};
export default function NoteCard(props: NoteCardProps) {
  const { note } = props;
  const { link, img, id, ...others } = note;
  return (
    <Link
      to={link}
      key={id}
      className="group relative flex max-h-[200px] min-h-[100px] w-full overflow-hidden rounded-2xl md:w-[30%] md:min-w-[250px] md:max-w-[400px]"
    >
      <Img
        className="object-cover grayscale-[80%] transition group-hover:scale-150 group-hover:grayscale-0"
        src={img}
      />
      <NoteCardInfo id={id} note={others} />
    </Link>
  );
}
