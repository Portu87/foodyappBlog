interface Props {
    text: string;
}

const PageHeader = ({text}:Props) => {
  return (
    <h1 className="text-center text-5xl font-extrabold dark:text-white mb-4">{text}</h1>
  )
}

export default PageHeader