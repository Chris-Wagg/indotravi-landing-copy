'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function GuestsDropdown() {
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
							d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
						/>
					</svg>

					<Menu.Button className='flex items-center rounded-md text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 pl-2'>
						Guests
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
										1-5
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
										5-10
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
										10-20
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
										20+
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
