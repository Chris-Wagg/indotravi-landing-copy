export default function SectionTwo() {
	return (
		<>
			<section class=' flex flex-col items-center w-4/5 mt-10 mx-20 w-full'>
				<section class='flex justify-around items-between'>
					<div className='w-1/2 flex flex-col'>
						<div class='text-gray-400'>Best Locations</div>
						<div class='text-4xl'>Middle Earth Tourism</div>
					</div>
					<div class='text-center w-1/2 text-gray-400'>
						Explore the amazing sights and scenes of middle earth,
						meet the locals and try not to get eaten!
					</div>
				</section>
				<section class='flex gap-4 flex-wrap'>
					<div>
						<img
							src='brendan-miranda-unsplash.jpg'
							alt='test'
							class='rounded-3xl max-w-md'
						/>
					</div>
					<div>
						<img
							src='ed-maughan-unsplash.jpg'
							alt=''
							class='rounded-3xl max-w-md'
						/>
					</div>
					<div>
						<img
							src='k-b-ul-unsplash.jpg'
							alt=''
							class='rounded-3xl max-w-md'
						/>
					</div>
					<div>
						<img
							src='henry-xu-unsplash.jpg'
							alt=''
							class='rounded-3xl max-w-md'
						/>
					</div>
				</section>
			</section>
		</>
	)
}
