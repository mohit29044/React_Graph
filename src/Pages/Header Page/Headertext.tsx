interface TextType {
  text: string;
}

function Headertext({ text }: TextType) {
  return <div className="font-sans font-medium">{text}</div>;
}

export default Headertext;
