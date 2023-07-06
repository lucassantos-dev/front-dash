import { ChangeEvent } from 'react';

interface Props {
	labelId: string;
	type: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	children: React.ReactNode;
	required?: boolean;
}

export default function Input({
	labelId,
	type,
	onChange,
	value,
	children,
	required = false,
}: Props) {
	return (
		<div>
			<div className='flex justify-between align-center'>
				<label
					htmlFor={labelId}
					className='block text-sm font-medium leading-6 text-gray-900'
				>
					{children}
				</label>

			</div>
			<div className='mt-2'>
				<input
					id={labelId}
					className='block w-full rounded-2xl bg-slate-100 px-3 py-2 transition-colors 
					duration-200  hover:bg-blue-200  focus:bg-blue-200 border-0 focus:outline-none'
					name={labelId}
					type={type}
					onChange={onChange}
					value={value}
					required={required}
				/>
			</div>
		</div>
	);
}
