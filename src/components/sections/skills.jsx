import { useRef } from "react"
import { Icon } from "@iconify/react"
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion"
import { wrap } from "@motionone/utils"
import { ROW1, ROW2, ROW3 } from "@/assets/assets"

function ParallaxRow({ items, baseVelocity = 10, size = 56, repeat = 4 }) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    })

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 4000)

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                {Array.from({ length: repeat }).map((_, outer) =>
                    items.map((name, inner) => (
                        <motion.span
                            key={`${outer}-${inner}`}
                            className="skill-icon"
                            whileHover={{ scale: 1.2 }}
                        >
                            <Icon icon={name} width={size} height={size} />
                        </motion.span>
                    ))
                )}
            </motion.div>
        </div>
    )
}

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-[12%] py-10 scroll-mt-20"
            id="skills"
        >
            <motion.h4
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-2 text-lg font-ovo"
            >
                Tech Stack
            </motion.h4>

            <motion.h2
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-ovo mb-20"
            >
                My Skills
            </motion.h2>

            <div className="skills">
                <section className="max-w-7xl mx-auto space-y-8">
                    <ParallaxRow items={ROW1} baseVelocity={-5} size={72} />
                    <ParallaxRow items={ROW2} baseVelocity={5} size={72} />
                    <ParallaxRow items={ROW3} baseVelocity={-6} size={72} />
                </section>
            </div>
        </motion.div>
    )
}
