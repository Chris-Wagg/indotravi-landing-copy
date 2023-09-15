export default function HeroSection() {
	return (
		<>
			<div class='w-screen h-screen bg-[url(https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80)] bg-no-repeat'>
				{/* <img
					src='sophie-turner-unsplash.jpg'
					alt=''
					class='absolute w-screen h-screen bg-auto'
				/> */}
				{/* Photo by <a href="https://unsplash.com/@sophie_turner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sophie Turner</a> on <a href="https://unsplash.com/photos/LZVmvKlchM0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

				<section class='flex justify-between content-center px-8 py-6 relative'>
					<div class='flex items-center text-lg font-semibold'>
						KiwiTravel
					</div>
					<section class='flex gap-6 bg-gray-300 px-14 py-4 rounded-full bg-opacity-30'>
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
				<section class='relative flex flex-col justify-center'>
					<div>this will be the title text</div>
					<div>this will be undertext</div>
					<section>this will be the calander thing</section>
				</section>
			</div>
		</>
	)
}
