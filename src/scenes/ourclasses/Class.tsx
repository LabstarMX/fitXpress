import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

type Props = {
    name: string;
    description?: string;
    image: string;
    setSelectedPage: (value: SelectedPage) => void
}

const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center 
                        justify-center whitespace-normanl bg-primary-500 text-center text-white
                        opacity-0 transition duration-500 hover:opacity-90`

const Class = ({ name, description, image, setSelectedPage }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px] ">
        <div className={overlayStyles}>
            <p  className="text-2xl">{name}</p>
            <p className="mt-5 text-sm" >{description}</p>            
        </div> 
        <img src={`${image}`} alt="image" />
    </li>
  )
}

export default Class