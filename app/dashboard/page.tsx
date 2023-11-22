'use client'
import React, { useState } from 'react'
import SideBar from "@/app/Components/SideBar"
import MenuAppBar from '../Components/AppBar'
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import { Box, Button, Divider, Modal, TextareaAutosize, Typography } from '@mui/material';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';

function Dashboard() {
  const [bookingState, setBookingState] = useState("booking-request")
  const [open, setOpen] = useState(false)

  const handleModal=()=>{
    setOpen(!open)
  }

  const surgeons = [
    {
      name:"Dr. Vineet Choudhry",
      specialty: "General Surgery",
      requestStatus: "tentative-request",
      officeName:"North Austin Office — Main Office Location", 
      address: "2217 Park Bend Dr. Suite 220, Austin, TX 78758",
      availabitly:[
        {
          day: 'Monday',
          time: '8AM - 5PM'
        },
        {
          day: 'Tuesday',
          time: '8AM - 5PM'
        },
        {
          day: 'Wednesday',
          time: '8AM - 5PM'
        },
        {
          day: 'Thursday',
          time: '8AM - 5PM'
        },
        {
          day: 'Friday',
          time: '8AM - 5PM'
        }
      ],
      url:"/dashboard/book-single"
    },
    {
      name:"Dr. Christina Muresuna",
      specialty: "General Surgery",
      requestStatus: "tentative-request",
      officeName:"Round Rock Office",
      address: "171 Deep Wood Dr. Suite 102      Round Rock, TX, 78681",
      availabitly:[

        {
          day: 'Tuesday',
          time: '1PM - 5PM'
        }
      ],
      url:"/dashboard/book-single1"
    },
    {
      name:"Dr. Vineet Choudhry",
      specialty: "General Surgery",
      requestStatus: "booking-request",
      officeName:"South Austin Office",
      address: "2500 W. William Cannon Dr. Suite 401 Austin, TX, 78745",
      availabitly:[

        {
          day: 'Friday',
          time: '8AM - 12PM'
        }
      ],
      url:"/dashboard/book-single2"
    },
    {
      name:"Dr. Christina Muresuna",
      specialty: "General Surgery",
      requestStatus: "tentative-request",
      officeName:"West Austin Office — River Place",
      address: "6611 River Place Blvd. Suite 202 Austin, TX 78730",
      availabitly:[

        {
          day: 'Wednesday',
          time: '1PM - 5PM'
        }
      ],
      url:"/dashboard/book-single3"
    },

  ]
  return (
    <div>
      {/* hello */}
      <SideBar />
      <div className='md:pl-[110px] pt-[80px] '>
        {
          surgeons.map((surgeon, index)=>(
            <div key={index}>
            <Divider/>
              <div className='flex md:flex-row flex-col md:justify-between px-6 py-5'>
                <div className='flex flex-col md:space-y-3 space-y-1'>
                  <Link href={surgeon.url}>
                  <h4 className='text-[16px] text-[#0071b0]'>{surgeon.officeName}</h4>
                  </Link>
                  <span className='text-[12px] text-[#aaaaaa]'>{surgeon.address}</span>
                  <span className='text-[12px] text-[#aaaaaa]'>Specialties: <span className='text-[12px] text-[#000] '>{surgeon.specialty}</span></span>
                  <span className='text-[12px] text-[#884cb8]'><SelfImprovementOutlinedIcon/>My Providers</span>
                </div>
                <div className='flex flex-col md:space-y-3 space-y-1 md:text-right'>
                  <span className='text-[12px] text-[#0071b0]'>View office details to book {`>`}</span>
                  <span className='text-[12px] text-[#aaaaaa]'>Calendar open through: November, 2024</span>
                  <span className='text-[12px] text-green-600 font-bold'>(10% booked)</span>
                </div>
              </div>
              <div className='flex flex-row overflow-x-auto justify-center items-center md:w-[1300px] w-screen h-[80px] text-center mb-5 '>
                {
                  surgeon.requestStatus=="booking-request"?
                  <>
                  <p className='text-[#444]'>You need approval to book. <Button variant="contained" onClick={handleModal} className='bg-[#ecf6fc] text-[#0085d6] mx-2 my-2'>Request to Book</Button></p>
                  </>
                  : surgeon.requestStatus=="tentative-request"?
                  <>
                  <div className='flex w-[1250px] overflow-x-auto my-element  space-x-2' >
                    {surgeon.availabitly.map((available, index)=>(
                     <div key={index} className='h-[60px] w-[150px] px-2 bg-[#ecf6fc] text-[#0085d6] flex flex-col justify-center items-center'>
                      <span className='text-[10px]'>{available.day}</span>
                      <span className='text-[15px] font-semibold flex'>{available.time}</span>
                    </div>
                    ))}


                  </div>
                  </>
                  : surgeon.requestStatus=="pending-confirm"?"pending": "confirmed"
                }
              </div>
    
            <Divider/>
            </div>
          ))
        }




<Modal
  open={open}
  onClose={handleModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='flex justify-center items-center'
>
  <div className='bg-white w-[640px] h-[445px] p-10'>
    <div className='flex justify-between'>
      <Typography id="modal-modal-title" variant="h6" component="h2" className='text-[#444] font-light text-[26px]'>
      Request approval with this Surgeon?
      </Typography>
      <button onClick={handleModal}>
      <CloseIcon fontSize='large'/>

      </button>

    </div>
    <Typography id="modal-modal-description " sx={{ mt: 2 }}>
    The office requires that all patient be approved prior to booking. Once you request approval, we will notify you when you are approved. Once you are approved, you will be able to book appointments with NorthStar Surgery.
    </Typography>

    <textarea 
    aria-label="Add Message (required)" 
    placeholder="Add Message (required)" 

    className="w-[550px] mt-5 h-[200px] text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white text-slate-900 dark:text-slate-300 focus-visible:outline-0"
    />
  </div>
</Modal>
      </div>
    </div>
  )
}

export default Dashboard