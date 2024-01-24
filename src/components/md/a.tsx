export default function A(props: any) {
  const { node, ...others } = props;
  return (
    <a
      className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline dark:text-blue-500 dark:hover:text-blue-600"
      {...others}
    />
  );
}
