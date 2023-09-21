interface Props {
  text: string | undefined;
}

const HTMLRender: React.FC<Props> = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

export default HTMLRender;
