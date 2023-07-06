import type { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
	title: 'Tax Contabilidade',
	description: '',
};

export default function Page() {
	return (
		<main className='bg-white'>
			<div className="flex justify-center items-center h-screen">
				<div className="bg-gray-100 p-4 m-4 rounded shadow-md text-center">
					<Image width={350} height={350} src="/img.jpg" alt="Imagem" className="mx-auto" />
					<button className="mt-4 bg-blue-500 text-white p-2 rounded">
						Login
					</button>
				</div>
				<div className="bg-gray-100 p-4 m-4 rounded shadow-md text-center">
					<Image width={350} height={350} src="/img.jpg" alt="Imagem" className="mx-auto" />
					<button className="mt-4 bg-blue-500 text-white p-2 rounded">
						Login
					</button>
				</div>
			</div>
		</main>
	);
}
