import { Footer, Navbar } from '@/components/common';
import { Setup } from '@/components/utils';
import Provider from '@/redux/provider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Tax Contabilidade',
	description: 'Tax contabilidade',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Provider>
					<Setup />
					<Navbar />
					<div className='mx-auto max-w-7xl'>
						{children}
					</div>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
