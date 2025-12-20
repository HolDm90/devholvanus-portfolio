"use client";
import { motion } from "framer-motion";


type Props = { text: string };


export default function AnimatedTitle({ text }: Props) {
return (
<motion.h1
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}
className="text-4xl md:text-6xl font-bold text-center tracking-wide"
>
{text}
</motion.h1>
);
}