import { DivAnimation } from '@/components/common';
import { LoginForm } from '@/components/forms';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Full Auth | Login',
	description: 'Full Auth login page',
};

export default function Page() {
	return (
		<DivAnimation >
			<div className="flex h-screen items-center justify-center">
				<div className="mx-auto flex flex-col max-w-lg items-center space-x-4 rounded-3xl bg-white p-10 shadow-2xl">
					<div className="flex justify-center p-7 text-2xl font-bold text-primary-color">
						<h1>Conecte-se</h1>
					</div>
					<div>
						<LoginForm />
					</div>
				</div>
			</div>
		</DivAnimation>
	);
}
