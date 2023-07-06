'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"


interface props{
    url_link:string,
    text:string,
    url_img:string,
}


export default function Card( {url_link,text,url_img}: props ){
    return(
        <div className=" p-4 m-4 rounded-3xl shadow-md text-center ">
            <Link href={url_link}>
            <motion.div  whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }} >
                 <Image width={350} height={350} src={url_img} alt="Imagem" 
                    className="mx-auto rounded-3xl p-3"  />
                    <span className='font-bold'> {text}</span>
            </motion.div>   
                </Link>
    </div>
    )
}