import React from 'react'

interface PodcastProps {
  name?: string
  description?: string
  url?: string
  image?: string
  key: string
}

export const Podcast = ({
  name,
  description,
  url,
  image,
  key,
}: PodcastProps) => {
  return (
    <div
      className='flex flex-col p-6 mt-10 bg-white rounded shadow-lg lg:mt-0'
      key={key}
    >
      <div className='flex items-center justify-center'>
        <img src={image} className='w-64' />
      </div>
      <div className='pt-4 mt-4 border-t'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={url}
          className='text-lg font-medium leading-6 text-gray-900 underline'
        >
          {name}
        </a>
        <p className='mt-2 text-base leading-6 text-gray-500'>{description}</p>
      </div>
    </div>
  )
}
