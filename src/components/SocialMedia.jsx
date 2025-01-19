import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faYoutube,faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const  socialMedia = () => {
  const Links=[
    {
      id:4,
      child:(
        <>linkedlin<FontAwesomeIcon size='xl'icon={faLinkedinIn}/></>
      ),
      href:'https://www.linkedin.com/in/sriram45',
      style:'hover:bg-blue-500 rounded-tr-md '
    },
    {
      id:5,
      child:(
        <>youtube<FontAwesomeIcon size='xl'icon={faYoutube}/></>
      ),
      href:'https://www.youtube.com/.com',
      style:'hover:bg-red-500'
    },
    {
      id:6,
      child:(
        <>github<FontAwesomeIcon size='xl'icon={faGithub}/></>
      ),
      href:'https://github.com/Sriram756',
      style:'hover:bg-green-600 '
    },
    {
      id:1,
      child:(
        <>Instagram<FontAwesomeIcon size='xl'icon={faInstagram}/></>
      ),
      href:'https://www.instagram.com/_sriram_lit/',
      style:'hover:bg-pink-600 '
    }
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 z-40 fixed'>
      <ul>
         {Links.map(({id,child,href,style})=>(
          <li key={id} className={'flex justify-between items-center w-40 h-14 px-4  hover:ml-[-10px] bg-gray-500 duration-300 ml-[-110px]' + " " +style}>
          <a className='flex justify-between w-full text-zinc-50 items-center' href={href} target='blank'>{child}</a>
        </li>
         ))}
        
      </ul>
      
    </div>
  )
}

export default socialMedia

