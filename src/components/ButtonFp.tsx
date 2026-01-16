import { forwardRef } from "react"
type ButtonFpProps = {
  btntext: string
}


const ButtonFp = forwardRef<HTMLButtonElement, ButtonFpProps>(({ btntext }, ref) => {
  return (

    <button
      ref={ref}
      className="
        fp-button
        w-[6em]
        text-left
        p-2
      "
    >
      {btntext}
    </button>

  )
})

export default ButtonFp
  // transition-colors
  //       duration-500
  //       ease-in-out
  //       hover:bg-gradient-to-l
  //       hover:from-transparent
  //       hover:to-(--color-gold)