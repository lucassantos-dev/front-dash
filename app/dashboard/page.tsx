'use client';
import { NavBar, Spinner } from '@/components/common';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useSidebarDimensions } from '@/hooks';
export default function Page() {
	const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
	const isOpen = useSelector((state: RootState) => state.siderbar.isOpen);
	const { width, transitionDuration, isDelay } = useSidebarDimensions()
	// // Calculate width based on whether sidebar is open or not
	// const width = isOpen ? 'calc(100% - 300px)' : 'calc(100% - 80px)';
	// const transitionDuration = '0.4s' // ajuste esses valores conforme necessário
	// const is_delay = isOpen ? '0s' : '.6s';

	if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

	return (
		<div className='absolute right-0' style={{ width, transition: `width ${transitionDuration} linear`, transitionDelay: `${isDelay}` }}>
			<NavBar />
			<div className="flex flex-wrap p-4 px-20">
				<div className="w-1/2 h-80 bg-red-500 rounded-3xl"></div>
				<div className="w-1/2 h-80 bg-blue-500 rounded-3xl"></div>
				<div className="w-1/2 h-80 bg-green-500 rounded-3xl"></div>
				<div className="w-1/2 h-80 bg-yellow-500 rounded-3xl"></div>
			</div>
		</div>
	);
}
