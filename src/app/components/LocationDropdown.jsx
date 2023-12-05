'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function LocationDropdown() {
	return (
		<div className=''>
			<Menu as='div' className='relative inline-block text-left'>
				<div class='flex'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z'
						/>
					</svg>

					<Menu.Button className='flex items-center rounded-md text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 pl-2'>
						Locations
						<ChevronDownIcon
							className='ml-2 -mr-1 h-5 w- text-white hover:text-white'
							aria-hidden='true'
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'>
					<Menu.Items className='absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
						<div className='px-1 py-1 '>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active
												? 'bg-gray-900 text-white'
												: 'text-gray-900'
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										The Shire
									</button>
								)}
							</Menu.Item>
						</div>
						<div className='px-1 py-1 '>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active
												? 'bg-gray-900 text-white'
												: 'text-gray-900'
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										Riveldell
									</button>
								)}
							</Menu.Item>
						</div>
						<div className='px-1 py-1 '>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active
												? 'bg-gray-900 text-white'
												: 'text-gray-900'
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										Helm's Deep
									</button>
								)}
							</Menu.Item>
						</div>
						<div className='px-1 py-1 '>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active
												? 'bg-gray-900 text-white'
												: 'text-gray-900'
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										Minas Tirith
									</button>
								)}
							</Menu.Item>
						</div>
						<div className='px-1 py-1 '>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active
												? 'bg-gray-900 text-white'
												: 'text-gray-900'
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										Mt Doom
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
