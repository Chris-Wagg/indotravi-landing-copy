import LocationDropdown from './LocationDropdown'

export default function HeroSection() {
	return (
		<>
			<div class='w-screen h-screen bg-[url(https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)] bg-cover bg-center bg-fixed'>
				{/* nav bar start */}
				<nav class='sticky top-0 z-10 flex justify-between content-center px-8 py-4 relative '>
					<div class='flex items-center text-2xl font-semibold text-white'>
						M-E Travel
					</div>
					<section class='flex gap-10 px-16 py-3 rounded-full bg-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-20 border-t border-gray-300 text-white'>
						<button>About</button>
						<button>Services</button>
						<button>Tour</button>
						<button>Insurance</button>
						<button>Contact</button>
					</section>
					<section class='flex gap-6'>
						{/* <button className='language-swapper'>EN/SWE</button> */}
						<button class='px-8 bg-white rounded-full '>
							Login
						</button>
					</section>
				</nav>

				{/* hero section start */}
				<section class='relative flex flex-col place-items-center max-w-full max-h-full pt-52 text-center'>
					<div class='text-6xl font-semibold px-10 text-white pb-4'>
						Hey, isn't that the place from the Lord of the Rings?
					</div>
					<div class='pb-8 text-white'>
						Yea, you're probably right
					</div>
					{/* middle nav */}
					<section class='flex bg-gray-300 rounded-full  p-3 max-w-lg backdrop-filter backdrop-blur-lg bg-opacity-20  border-t border-gray-300 text-white'>
						<div class='flex items-center border-r-2 px-4  '>
							<LocationDropdown />
						</div>
						<div class='flex gap-6 border-r-2 px-4 '>
							<button>Location</button>
							<button>v</button>
						</div>
						<div class='flex gap-6 border-r-2 px-4 '>
							<button>Guests</button>
							<button>v</button>
						</div>
						<div class='pl-4'>
							<button class='px-6 py-2 bg-white rounded-full text-black '>
								Search
							</button>
						</div>
					</section>
				</section>
			</div>
			<div class='h-96'></div>
		</>
	)
}
