import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/shared/types';
import { LockClosedIcon, EnvelopeIcon, EyeIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/logo.png';
import HText from '@/shared/HText';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2 }
    }
}

// const passwordToggle = () => {
//     const pass = document.querySelector(".password");
//     const eyeIcon = document.querySelector(".eyeIcon");
    
//     if (eyeIcon.type === "password") {
//         console.log("Lot")
//     } else if (eyeIcon.type === "text") {
//         console.log("Tol")
//     } 
// }

const SignIn = ({ setSelectedPage }: Props) => {
  return (
    <section id="signin"
            className="h-full bg-gray-20 flex flex-col mx-8 items-center justify-center 
                        my-auto justify-items-center py-6 ">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{                                
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x:0 },                                
            }}
            className="flex items-center justify-center"
        >
            <img src={Logo} alt="" width="213" height="94" />
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{                                
                hidden: { opacity: 0, x:50 },
                visible: { opacity: 1, x:0 },                                
            }}
            className=" flex flex-col items-center justify-center mb-2">
            <HText> <p className="text-primary-500" >Login to</p>{" "}FitXpress</HText>
            <p className="font-montserrat flex" >We're happy to see 
                <p className="text-primary-500" >you back again!</p>
            </p>
        </motion.div>
        <motion.form action="" className="flex flex-col" 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{                                
                        hidden: { opacity: 0, y:-50 },
                        visible: { opacity: 1, y:0 },                                
                    }}
        >
            <p>E-mail</p>
            <div className="flex border-2 w-[100%] mb-8">
                <button className="rounded-md bg-transparent p-2  "
                        // onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <EnvelopeIcon className="h-6 w-6 text-gray-300" />
                </button>
                <input type="email" className="bg-transparent border-transparent w-full
                            px-4
                "  />
            </div>

            <p>Password</p>
            <div className="flex border-2 bg-transparent mb-4">
                <button className="rounded-md bg-transparent p-2  "
                        // onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <LockClosedIcon className="h-6 w-6 text-gray-300" />
                </button>
                <input type="password" className="bg-transparent border-transparent w-full
                            px-4
                " />
                <button className="rounded-md bg-transparent p-2  "
                        // onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <EyeIcon className="h-6 w-6 text-gray-300" />
                </button>
            </div>

            <div className=" flex justify-between mb-4">
                <div className="flex gap-2" >
                    <input type="checkbox" name='Remember me' 
                            className=" " />
                    <p className="text-[11px] ">Remember me</p>
                </div>
                
                {/* <AnchorLink
                    className={`${selectedPage === "forgottenpassword" ? "text-primary-500" : ""}
                    transition duration-500 hover:text-primary-300
                    active:text-primary-500`}    
                    href={`#${SelectedPage.ForgottenPassword}`}              
                    >
                    Forgotten Password
                </AnchorLink> */}
                <p className="text-[11px] " >Forgotten Passsword</p>
            </div>
            {/* <ActionButton>Login</ActionButton> */}
            <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500
                          hover:text-white text-center"
                    // onClick={() => setSelectedPage(SelectedPage.Dashboard)}
                    // href={`#${SelectedPage.Dashboard}`}
            >
                Login
            </button>
            <div className="flex my-4">
                <hr className="w-1/3 bg-gray-300 h-[2px] my-auto " />
                <p className="text-[11px] w-1/3 mx-5 text-center">or login with</p>
                <hr className="w-1/3 bg-gray-300 h-[2px] my-auto "/>
            </div>
            <div className="flex justify-between mb-4">
                <button className="flex bg-gray-300 text-blue-900 font-bold rounded
                                 px-5 py-1 hover:bg-blue-800 hover:text-white "
                >

                    <p>Facebook</p>
                </button>
                <button className="flex bg-gray-300 text-blue-900 font-bold rounded
                                 px-5 py-1 hover:bg-blue-800 hover:text-white ">
                        Google
                </button>
            </div>
        </motion.form>


        {/* <div>
            <button className="rounded-full bg-secondary-500 p-2  "
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
            <Bars3Icon className="h-6 w-6 text-white" />
            </button>
        </div> */}

    </section>

    
  )
}

export default SignIn