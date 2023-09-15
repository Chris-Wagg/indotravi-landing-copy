export default function HeroSection() {
	return (
		<>
			<div>
				<img src='sophie-turner-unsplash.jpg' alt='' class='absolute' />
				{/* Photo by <a href="https://unsplash.com/@sophie_turner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sophie Turner</a> on <a href="https://unsplash.com/photos/LZVmvKlchM0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

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
		</>
	)
}
