import type { Metadata } from 'next';
import { CardHome } from '@/components/common'; 

export const metadata: Metadata = {
	title: 'Tax Contabilidade',
	description: '',
};

export default function Page() {
	return (
		<main className='bg-white'>
			<div className="flex justify-center items-center h-screen">
				<CardHome url_link='/auth/login' text="Dasboard Tax" url_img="/dasboard.jpg" ></CardHome>
				<CardHome url_link="/" text="" url_img='/client.jpg' ></CardHome>
			</div>
		</main>
	);
}
