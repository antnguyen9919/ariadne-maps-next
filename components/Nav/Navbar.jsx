import React,{useRef} from 'react'
import Link from 'next/link' 
import {Popover,Transition} from '@headlessui/react'



import {DiGoogleAnalytics} from 'react-icons/di'
import {BiNavigation,BiNotification} from 'react-icons/bi'
import {BsMap} from 'react-icons/bs'


import {MdLocalAirport,MdStoreMallDirectory,
  MdEmojiTransportation,MdLocationCity,MdRoomService, MdMenu} from 'react-icons/md'
import {AiOutlineShopping} from 'react-icons/ai'


const solutions=[
  {title:"Ariadne Analytics",icon:DiGoogleAnalytics, descriptions:"analytics",href:"/analytics"},
  {title:"Ariadne Mapping",icon:BsMap, descriptions:"mapping",href:"#"},
  {title:"Ariadne Navigation",icon:BiNavigation, descriptions:"navigation",href:"#"},
  {title:"Ariadne Engagement",icon:BiNotification, descriptions:"engagement",href:"#"},
  
]
const industries=[
  {title:"Retail stores",icon:MdStoreMallDirectory, descriptions:"retail",href:"#"},
  {title:"Shopping centers",icon:AiOutlineShopping, descriptions:"malls",href:"#"},
  {title:"Airports",icon:MdLocalAirport, descriptions:"airports",href:"#"},
  {title:"Transportation",icon:MdEmojiTransportation, descriptions:"transports",href:"#"},
  {title:"Cities",icon:MdLocationCity, descriptions:"cities",href:"#"},
  {title:"Hospitality",icon:MdRoomService, descriptions:"hospitality",href:"#"},
  
]
const company=[
  {title:"About Us",href:"#"},
  {title:"Blog",href:"/blog"},
  {title:"Careers",href:"#"},
  {title:"Contact",href:"#"},
  {title:"Privacy",href:"#"}
  // {title:"Hospitality",icon:BsInfoSquare, descriptions:"hospitality",href:"#"},
  
]

const  Navbar = () => {
  let solutionRef = useRef(null)
  let industriesRef = useRef(null)
  let companyRef = useRef(null)
  
  return (
    <Popover className='sticky top-0 w-full bg-black z-50'>
      
      <div className="max-w-4xl px-4 mx-auto md:px-6">
      
          <div className="flex items-center justify-between h-16">

          <Link href="/" class="flex items-center" ><a>
        <img src="/Photos/Asset16.png" class="mr-3 h-6 sm:h-9" alt="Ariadne Logo" /></a></Link>
            <div className='-my-2 -mr-2 md:hidden'>
              
          <Popover.Button className="inline-flex items-center justify-center text-gray-400 
          bg-white rounded-sm p-2
          "  >
          <span className='sr-only'>Open Menu</span>
            <MdMenu className='w-6 h-6' aria-hidden="true"   />
          </Popover.Button>

        
          
     

            </div>
            

            <div className='hidden w-3/4 md:flex md:w-3/4 xl:w-2/4 '>
              
            <Popover.Group as='nav' className='flex w-full justify-evenly ' >
             

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={solutionRef}
                 onMouseEnter={()=>solutionRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms'
                 >
                   <span className='text-white font-bold ring-0'>Solutions</span>

                 </Popover.Button>

                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-md px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                      {solutions.map((solution,index)=>(
                        <a key = {index} href = {solution.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black ' >
                          <solution.icon className='w-6 h-6 text-slate-500 '/>
                          <div className='ml-4 '>
                            <p className='text-md font-semibold'>{solution.title}</p>
                            <p className='text-base  font-medium'>{solution.descriptions}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={industriesRef}
                 onMouseEnter={()=>industriesRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms'
                 >
                   <span className='text-white font-bold ring-0'>Industries</span>

                 </Popover.Button>
                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-md px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 '>
                      {industries.map((solution,index)=>(
                        <a key = {index} href = {solution.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black  ' >
                          <solution.icon className='w-6 h-6 text-slate-500 '/>
                          <div className='ml-4 '>
                            <p className='text-md  font-semibold'>{solution.title}</p>
                            <p className='text-base  font-medium'>{solution.descriptions}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>

              <a href='#' className='text-base font-bold text-white hover:underline' >Why Ariadne</a>

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={companyRef}
                 onMouseEnter={()=>companyRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms'
                 >
                   <span className='text-white font-bold ring-0 '>Company</span>

                 </Popover.Button>
                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-md px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 '>

                      {company.map((comp,index)=>(
                        <Link key = {index} href = {comp.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black ' ><a>
<div className='ml-4 '>
                            <p className='text-md  font-semibold'>{comp.title}</p>
                            
                          </div>
                        </a></Link>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>


            </Popover.Group>

            </div>

            
            
            <div className='items-center justify-end hidden md:flex'>
            <a href='#' className='text-base font-bold text-white' >Lets talks</a>
            
            </div>

            
          </div>
          
        </div>
        <div className='md:hidden '>
        {/* <h1 className='text-white'>sas</h1> */}
        <Popover.Panel className="absolute z-10 bg-black w-full text-white">
                            <h1 className='text-center'>Solutions</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>
                      {solutions.map((solution,index)=>(
                        <a key = {index} href = {solution.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white' >
                         
                          <div className='ml-1 '>
                            <p className='text-sm font-normal'>{solution.title}</p>
                            
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    <h1 className='text-center'>Industries</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>

                      {industries.map((solution,index)=>(
                        <a key = {index} href = {solution.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white  ' >
                         
                          <div className='ml-1 '>
                            <p className='text-sm  font-normal'>{solution.title}</p>
                          
                          </div>
                        </a>
                      ))}
                    </div>

                    <h1 className='text-center'>Company</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>
                                  <a href='#' className='text-sm p-2 -m-3 font-normal text-white' >Why Ariadne?</a>
                            {company.map((comp,index)=>(
                        <a key = {index} href = {comp.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white ' >
                          
                          <div className='ml-1 '>
                            <p className='text-sm  font-normal'>{comp.title}</p>
                          
                          </div>
                        </a>
                      ))}
                    </div>


        
      </Popover.Panel>
            </div>
      
        
    </Popover>
  )
}

export default Navbar