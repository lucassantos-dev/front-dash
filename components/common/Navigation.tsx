import { motion } from 'framer-motion';
import Image from 'next/image';
import MenuItem from './MenuItem';
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3, 4];

export default function Navigation() {
  return (
    <>
      <Image width={150} height={150} src='/logo.png' alt="Imagem" className='absolute left-16 ' />
      <motion.ul variants={variants}>

        {itemIds.map(i => (
          <MenuItem i={i} key={i} />
        ))}
      </motion.ul>
    </>
  );
}
