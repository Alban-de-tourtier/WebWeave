interface Props {
  text: any;
}

const HTMLRender: React.FC<Props> = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

export default HTMLRender;
