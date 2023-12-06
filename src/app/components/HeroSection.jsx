import LocationDropdown from './LocationDropdown'
import GuidesDropdown from './GuidesDropdown'
import GuestsDropdown from './GuestsDropdown'
import StatsCards from './StatsCards'

export default function HeroSection() {
	return (
		<>
			<section class='hero-section'>
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
						<button class='px-8 bg-white rounded-full '>
							Login
						</button>
					</section>
				</nav>

				{/* hero section start */}
				<section class='content-grid'>
					<h1 class='text-8xl font-semibold px-10 text-white pb-4'>
						Middle Earth Travel Agency
					</h1>
					<p class='text-4xl font-semibold px-10 text-white pb-4'>
						Hey, isn't that the place from the Lord of the Rings?
					</p>
					<p class='pb-8 text-2xl text-white'>
						Yea, you're probably right
					</p>
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
			</section>
		</>
	)
}
