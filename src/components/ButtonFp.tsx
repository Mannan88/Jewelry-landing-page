type ButtonFpProps = {
  btntext: string
}

const ButtonFp: React.FC<ButtonFpProps> = ({ btntext }) => {
  return (
    <button
      className="
        fp-button
        w-[6em]
        pl-4
        text-left
        bg-transparent
        p-2
        transition-colors
        duration-500
        ease-in-out
        hover:bg-gradient-to-l
        hover:from-transparent
        hover:to-(--color-gold)
      "
    >
      {btntext}
    </button>
  )
}

export default ButtonFp