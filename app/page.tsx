'use client'
import Image from 'next/image'
import Logo from "@/app/assets/NorthStar-Surgery-White-logo.png"
import { Box, Button, CircularProgress, FormControl, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [stepOne, setStepOne] = useState(false)

  const setNextPage = ()=>{
    setStepOne(true)
  }
  return (
    <main className="bg-white bg-login-image flex flex-col space-y-4 text-white justify-center items-center	">
      <Image src={Logo} width={300} height={100} alt=''/>
      <p className='font-bold py-5 text-center text-1xl'>Please login to your Appointment account</p>
      <div className='h-fit w-[360px] bg-white rounded-sm px-4 py-5'>
      {/* <Paper elevation={5} className={'progressBar'}>
        <Box sx={{ width: '100%' }}>
          <CircularProgress color="secondary" variant="determinate" value={75} />
        </Box>
      </Paper> */}
        <FormControl fullWidth sx={{ mb: 3 }} className='my-5'>
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><EmailIcon/></InputAdornment>}
            label="Amount"
            placeholder='email@address.com'
          />
        </FormControl>
        {
          stepOne==false?<></>:<><FormControl fullWidth sx={{ mb: 3 }} className='my-5'>
          <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><LockIcon/></InputAdornment>}
            label="Amount"
            placeholder=''
          />
        </FormControl></>
        }

{
          stepOne==false?<Button variant="contained" color='primary' className='py-3 my-5' fullWidth style={{backgroundColor:"#0071B0"}} onClick={setNextPage}>Next</Button>:
          <Link href={"/dashboard"}>
          <Button variant="contained" color='primary' className='py-3 my-5' fullWidth style={{backgroundColor:"#0071B0"}} >Login</Button>
          </Link>}
      </div>
    </main> 
  )
}
