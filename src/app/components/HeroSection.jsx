export default function HeroSection() {
	return (
		<>
			<div class='w-screen h-screen bg-[url(https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80)] bg-no-repeat'>
				{/* nav bar start */}
				<section class='flex justify-between content-center px-8 py-4 relative'>
					<div class='flex items-center text-lg font-semibold'>
						KiwiTravel
					</div>
					<section class='flex gap-10 bg-gray-300 px-20 py-3 rounded-full bg-opacity-30'>
						<button>About</button>
						<button>Services</button>
						<button>Tour</button>
						<button>About</button>
						<button>Contact</button>
					</section>
					<section class='flex gap-6'>
						<button className='language-swapper'>EN/SWE</button>
						<button class='px-8 bg-white rounded-full '>
							Login
						</button>
					</section>
				</section>

				{/* hero section start */}
				<section class='relative flex flex-col place-items-center max-w-full max-h-full pt-52 text-center'>
					<div class='text-6xl px-10'>
						Hey, isn't that the place from the Lord of the Rings?
					</div>
					<div>You're probably right</div>
					{/* middle nav */}
					<section class='flex bg-gray-300 rounded-full bg-opacity-30 p-3 max-w-lg'>
						<div class='flex gap-6 border-r-2 px-4'>
							<button>Date</button>
							<button>v</button>
						</div>
						<div class='flex gap-6 border-r-2 px-4'>
							<button>Location</button>
							<button>v</button>
						</div>
						<div class='flex gap-6 border-r-2 px-4'>
							<button>Guests</button>
							<button>v</button>
						</div>
						<div class='pl-4'>
							<button class='px-6 py-2 bg-white rounded-full '>
								Search
							</button>
						</div>
					</section>
				</section>
			</div>
		</>
	)
}
