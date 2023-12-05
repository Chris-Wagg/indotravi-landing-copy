import LocationDropdown from './LocationDropdown'
import GuidesDropdown from './GuidesDropdown'
import GuestsDropdown from './GuestsDropdown'
import StatsCards from './StatsCards'

export default function HeroSection() {
	return (
		<>
			<div class='w-screen h-screen bg-[url(https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)] bg-cover bg-center bg-fixed flex flex-col justify-between'>
				{/* adjust the background image size to be like w-11/12 */}
				{/* at tablet size there is a slight shrimking of the background, fix this later. Also generally fix the background so it sits behind the elements at like 95% height somehow*/}
				{/* nav bar start */}
				<nav class='sticky top-0 z-10 flex justify-between content-center px-8 py-4 relative '>
					<div class='flex items-center text-2xl font-semibold text-white'>
						M-E Travel
					</div>
					<section class='flex gap-2 px-10 py-1 rounded-full bg-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-20 border-t border-gray-300 text-white'>
						<button class=' rounded-full px-2 py-1 hover:bg-gray-500 active:bg-gray-700'>
							About
						</button>
						<button class=' rounded-full px-3 py-1 hover:bg-gray-500 active:bg-gray-700'>
							Services
						</button>
						<button class=' rounded-full px-3 py-1 hover:bg-gray-500 active:bg-gray-700'>
							Tour
						</button>
						<button class=' rounded-full px-3 py-1 hover:bg-gray-500 active:bg-gray-700'>
							Insurance
						</button>
						<button class=' rounded-full px-3 py-1 hover:bg-gray-500 active:bg-gray-700'>
							Contact
						</button>
					</section>
					<section class='flex gap-6'>
						{/* <button className='language-swapper'>EN/SWE</button> */}
						<button class='px-8 bg-white rounded-full '>
							Login
						</button>
					</section>
				</nav>

				{/* hero section start */}
				<section class='relative flex flex-col justify-center items-center max-w-full max-h-full text-center'>
					<div class='text-6xl font-semibold px-10 text-white pb-4'>
						Hey, isn't that the place from the Lord of the Rings?
					</div>
					<div class='pb-8 text-white'>
						Yea, you're probably right
					</div>
					{/* middle nav */}
					<section class='flex bg-gray-300 rounded-full  p-3 backdrop-filter backdrop-blur-lg bg-opacity-20  border-t border-gray-300 text-white'>
						<div class='flex items-center border-r-2 px-4'>
							<LocationDropdown />
						</div>
						<div class='flex items-center border-r-2 px-4'>
							<GuidesDropdown />
						</div>
						<div class='flex items-center border-r-2 px-4'>
							<GuestsDropdown />
						</div>
						<div class='pl-4'>
							<button class='px-6 py-2 bg-white rounded-full text-black '>
								Search
							</button>
						</div>
					</section>
				</section>
				<div></div>
			</div>
		</>
	)
}
