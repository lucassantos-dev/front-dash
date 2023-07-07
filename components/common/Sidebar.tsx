'use client'
import { toggle } from '@/redux/features/sideSlice';
import { RootState } from '@/redux/store';
import '@/styles/navbar.css';
import { motion } from "framer-motion";

import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import useDimensions from "./use-dimensions";

const sidebar = {
	open: (height = 1000) => ({
		width: "300px",
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		width: "80px",
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40
		}
	}
};
export default function Siderbar() {
	// const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	const dispatch = useDispatch()
	const isOpen = useSelector((state: RootState) => state.siderbar.isOpen)

	return (
		<>

			<motion.nav
				initial={false}
				animate={isOpen ? "open" : "closed"}
				custom={height}
				ref={containerRef}
				variants={sidebar}
				className='nav-bar'
			>
				<motion.div className="background rounded-r-[60px] shadow-2xl" />
				<Navigation />
				<MenuToggle toggle={() => dispatch(toggle())} />
			</motion.nav>
		</>
	);
}
