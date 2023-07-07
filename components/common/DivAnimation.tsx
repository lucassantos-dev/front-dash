'use client'
import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode
}

export default function DivAnimation({ children }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      {children}
    </motion.div>
  )
};
