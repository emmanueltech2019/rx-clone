// 'use client'

// // import React from 'react'
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import HelpIcon from '@mui/icons-material/Help';
// import GroupsIcon from '@mui/icons-material/Groups';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import ForumIcon from '@mui/icons-material/Forum';
// import EventIcon from '@mui/icons-material/Event';
// import BookIcon from '@mui/icons-material/Book';

// function SideBar() {
//   return (
//     <div className=" sidebar-external-bg  md:w-[100px]  top-0 fixed md:text-white text-black ">
//       <div className='md:px-0 pl-5 md:bg-[#00448A] bg-white md:w-[100px] h-screen '>
//         <div className='flex flex-col justify-center items-center py-8'>
//             {/* <DateRangeIcon className='text-3xl'/> */}
//             <span className='text-[30px] md:bg-white  bg-[#00448A] h-[35px] w-[35px] rounded-full'></span>
//           </div>

//         <div className='flex flex-col w-screen md:w-full'>
//           <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5 '>
//             <DateRangeIcon className='text-3xl'/>
//             <span className='text-[12px]'>My Appts</span>
//           </div>

//           <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
//             <BookIcon className='text-3xl'/>
//             <span className='text-[12px]'>Book</span>
//           </div>

//           <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
//             <EventIcon className='text-3xl'/>
//             <span className='text-[12px]'>Events</span>
//           </div>

//           <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
//             <ForumIcon className='text-3xl'/>
//             <span className='text-[12px]'>Messages</span>
//           </div>

//           <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
//             <AddBoxIcon className='text-3xl'/>
//             <span className='text-[12px]'>Providers</span>
//           </div>

//           <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
//             <GroupsIcon className='text-3xl'/>
//             <span className='text-[12px]'>My Team</span>
//           </div>
//         </div>

//         <div className='flex flex-col justify-center items-center py-8 absolute bottom-0 left-8'>
//             <HelpIcon className='text-3xl'/>
//             <span className='text-[12px]'>Help</span>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default SideBar

'use client'

// import React from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import HelpIcon from '@mui/icons-material/Help';
import GroupsIcon from '@mui/icons-material/Groups';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ForumIcon from '@mui/icons-material/Forum';
import EventIcon from '@mui/icons-material/Event';
import BookIcon from '@mui/icons-material/Book';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Badge, Box, Button, Divider, Menu, MenuItem, Modal, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import MyDropDown from "@/app/Components/DropDown"
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/app/assets/NSS 2.png"

function SideBar() {
  const [modalState, setModalState] = useState(false)
  const [dropDownState, setDropDownState] = useState(false)
  const handleClose = () => {
    setModalState(!modalState)
  }
  return (
    <>
      <div className='md:bg-[#f7f7f7] bg-[#00448A] h-[75px] w-screen top-0 absolute z-10 text-white justify-center items-center'>
        <div className='flex flex-row mt-5 ml-4 space-x-16 md:space-x-3 md:justify-end '>
          <button onClick={handleClose}>
            <MenuIcon fontSize='large' className=' md:hidden ' />
          </button>
          <span className='text-[30px] h-[35px] w-[35px] rounded-full block md:hidden'>
            <Image src={Logo} alt=''/>
          </span>
          <div className=''>
            <Button className='bg-[#0072B0] text-white mr-4 text-[12px]' size='medium'>Upgrade</Button>
            <Badge 
              badgeContent={5} 
              color="error"
              overlap="circular">
            <NotificationsNoneOutlinedIcon fontSize='large' className='md:text-black' />

            </Badge>
          </div>
          <Divider orientation="vertical" className='hidden md:block' flexItem />
          <div className='hidden md:block'>
            <MyDropDown>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuItem>Territories</MenuItem>
              <MenuItem>Products</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuItem>Notification Settings</MenuItem>
              <MenuItem>Product Portal</MenuItem>
              <MenuItem href='/'>
                <Link href='/'>Logout</Link>
              </MenuItem>
            </MyDropDown>

          </div>

          {/* <MyDropDown>
            <Button className='text-black' onClick={()=> setDropDownState(!dropDownState)}>My account</Button>
            <Menu open={dropDownState}>
              <MenuItem >Profile</MenuItem>
              <MenuItem >
                Language settings
              </MenuItem>
              <MenuItem >Log out</MenuItem>
            </Menu>
          </MyDropDown> */}

        </div>
      </div>
      <div className=" top-0 md:fixed  z-20">
        <div className=' md:px-0 pl-5 md:bg-[#00448A] bg-white h-screen md:w-[100px] md:text-white text-black z-50 hidden md:block'>
          <div className='flex flex-col justify-center items-center py-8 hidden md:flex'>
            {/* <DateRangeIcon className='text-3xl'/> */}
            <Image src={Logo} alt='' className='text-[30px]  bg-[#00448A] h-[35px] w-[35px] rounded-full'/>
          </div>
          <div className='flex flex-col w-screen md:w-full'>
            <Link href={"/dashboard/appointments"}>
              <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5 '>
                <DateRangeIcon className='text-3xl' />
                <span className='text-[12px]'>My Appts</span>
              </div>
            </Link>
            <Link href={"/dashboard/"}>
              <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
                <BookIcon className='text-3xl' />
                <span className='text-[12px]'>Book</span>
              </div>
            </Link>

            <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
              <EventIcon className='text-3xl' />
              <span className='text-[12px]'>Events</span>
            </div>

            <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
              <ForumIcon className='text-3xl' />
              <span className='text-[12px]'>Messages</span>
            </div>

            <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
              <AddBoxIcon className='text-3xl' />
              <span className='text-[12px]'>Providers</span>
            </div>

            <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
              <GroupsIcon className='text-3xl' />
              <span className='text-[12px]'>My Team</span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center py-8 absolute bottom-0 left-8'>
            <HelpIcon className='text-3xl' />
            <span className='text-[12px]'>Help</span>
          </div>
        </div>


      </div>
      {
        <Modal
          open={modalState}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          hideBackdrop
        >
          <Box sx={{ width: 400 }}>
            <div className='flex'>
              <div className='bg-white h-screen w-[80vw]'>
                <div className='md:px-0 pl-5 md:bg-[#00448A] bg-white md:w-[100px] h-screen '>
                  <div className='flex flex-col justify-center items-center py-8 hidden md:flex'>
                    {/* <DateRangeIcon className='text-3xl'/> */}
                    <span className='text-[30px] md:bg-white  bg-[#00448A] h-[35px] w-[35px] rounded-full'></span>
                  </div>

                  <div className='flex flex-col w-screen md:w-full'>
                  <Link href={"/dashboard/appointments"}>
                    <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5 '>
                      <DateRangeIcon className='text-3xl' />
                      <span className='text-[12px]'>My Appts</span>
                    </div>
                    </Link>

                    <Link href={"/dashboard/"}>
                      <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
                        <BookIcon className='text-3xl' />
                        <span className='text-[12px]'>Book</span>
                      </div>

                    </Link>

                    <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
                      <EventIcon className='text-3xl' />
                      <span className='text-[12px]'>Events</span>
                    </div>

                    <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
                      <ForumIcon className='text-3xl' />
                      <span className='text-[12px]'>Messages</span>
                    </div>

                    <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
                      <AddBoxIcon className='text-3xl' />
                      <span className='text-[12px]'>Providers</span>
                    </div>

                    <div className='flex md:flex-col flex-row md:space-x-0 space-x-1 md:justify-center items-center py-5'>
                      <GroupsIcon className='text-3xl' />
                      <span className='text-[12px]'>My Team</span>
                    </div>
                  </div>

                  <div className='flex flex-col justify-center items-center py-8 absolute bottom-0 left-8'>
                    <HelpIcon className='text-3xl' />
                    <span className='text-[12px]'>Help</span>
                  </div>
                </div>
              </div>
              <div className='sidebar-external-bg h-screen w-[100vw] md:hidden ' onClick={handleClose}>

              </div>

            </div>
          </Box>
        </Modal>
      }
    </>
  )
}

export default SideBar