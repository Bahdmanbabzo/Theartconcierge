import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Page() {
    const { scrollY } = useScroll();
    const ref = useRef();

    // Calculate the opacity based on the scroll position
    // If ref is not mounted, use a default height of 150
    const opacity = useTransform(scrollY, [0, ref.current?.offsetHeight / 2 || 150], [1, 0]);

    return (
        <div className="text-red-500 absolute z-40 h-screen w-screen pt-14 px-6">
            <motion.section
                className="text-[#fca311] text-3xl font-semibold relative h-full w-full"
                ref={ref}
                style={{ opacity: opacity }}
            >
                <p className="absolute text-5xl font-semibold top-0 left-0">CRAFTED IN THE </p>
                <p className="absolute text-5xl font-semibold top-1/3 left-1/3"> TRADITION</p>
                <p className="absolute text-5xl font-semibold top-2/3 left-2/3"> OF EXCELLENCE</p>
            </motion.section>
            <motion.section 
                className="text-[#fca311] text-3xl font-semibold relative h-screen w-screen flex flex-none items-center"
              
            >
               <img src="/Lapland,-Finland.jpg" alt="" className="h-1/2 w-1/3 rounded-lg m-6" /><img src="Las-Medulas,-Spain.jpg" alt="" className="h-1/2 w-1/3 rounded-lg m-6" /><img src="Lofoten-Islands- Norway.jpg" alt="" className="h-1/2 w-1/3 rounded-lg m-6" /><img src="Swiss Alps- Switzerland.jpg" alt="" className="h-1/2 w-1/3 rounded-lg m-6" /><img src="Vatnajokull-Iceland.jpg" alt="" className="h-1/2 w-1/3 rounded-lg m-6" />
            </motion.section>
        </div>
    );
}