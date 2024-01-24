export default function Blockquote(props: any) {
  const { node, ...others } = props;
  return (
    <blockquote
      className="my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800"
      {...others}
    />
  );
}
