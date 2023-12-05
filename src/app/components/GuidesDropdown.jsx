'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function GuidesDropdown() {
	return (
		<div>
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
							d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
						/>
					</svg>

					<Menu.Button className='flex items-center rounded-md text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 pl-2'>
						Guides
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
										Gandalf
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
										Gollum
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
										Bilbo
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
										Frodo
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
										Boromir
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
										Aragorn
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
										Balrog
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
