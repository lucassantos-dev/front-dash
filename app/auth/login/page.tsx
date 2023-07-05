import Link from 'next/link';
import { LoginForm } from '@/components/forms';
// import { SocialButtons } from '@/components/common';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Full Auth | Login',
	description: 'Full Auth login page',
};

export default function Page() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold text-primary-color'>
				Conecte-se
				</h2>
			</div>
			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<LoginForm />
			</div>
		</div>
	);
}
