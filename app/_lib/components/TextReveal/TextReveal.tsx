import  './TextReveal.css'
interface TextRevealProps {
    text: string;
  }
  
  const TextReveal: React.FC<TextRevealProps> = ({ text }) => {
    return (
      <h1 className="text-reveal">
        {text.match(/./gu)!.map((char, index) => (
          <span
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    );
  };
  
  export default TextReveal;