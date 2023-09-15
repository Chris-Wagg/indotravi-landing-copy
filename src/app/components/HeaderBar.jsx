import { Container } from 'postcss'

export default function HeaderBar() {
	return (
		<div>
			<img src='sophie-turner-unsplash.jpg' alt='' class='absolute' />

			<section class='flex justify-between content-center px-8 py-6 relative'>
				<div class='flex items-center text-lg font-semibold'>
					KiwiTravel
				</div>
				<section class='flex gap-6 bg-gray-300 px-14 py-4 rounded-full bg-opacity-50'>
					<div>About</div>
					<div>Services</div>
					<div>Tour</div>
					<div>About</div>
					<div>Contact</div>
				</section>
				<section class='flex gap-6'>
					<button className='language-swapper'>EN/SWE</button>
					<button class=''>Login</button>
				</section>
			</section>
		</div>
	)
}


