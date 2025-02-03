interface TextType {
  text: string;
}

function Commontext({ text }: TextType) {
  return <div className="font-sans font-medium">{text}</div>;
}

export default Commontext;
