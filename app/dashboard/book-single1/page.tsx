'use client'
import Layout from '@/app/Components/Layout'
import SideBar from '@/app/Components/SideBar'
import { Box, Button, Divider, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import PolicyAlert from './PolicyAlert'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import InfoIcon from '@mui/icons-material/Info';

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className='p-0'
      style={{ padding: 0 }}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BookSingle() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event:any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Provider" {...a11yProps(1)} />
          <Tab label="Calendar" {...a11yProps(2)} />
          <Tab label="Policy" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PolicyAlert />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.3571548887385!2d-97.70285302449447!3d30.510938396318057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d358041704c7%3A0xb0eeb091e421b3c8!2s171%20Deep%20Wood%20Dr%2C%20Round%20Rock%2C%20TX%2078681%2C%20USA!5e0!3m2!1sen!2sng!4v1700657288899!5m2!1sen!2sng" width="1200" height="300" className='px-4 md:w-[1200px] md:h-[300px] w-screen' style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        {/* <iframe  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <div className='md:flex justify-between md:w-[1200px] text-[#444444]'>
          <div>
            <div className='flex px-10 py-5 space-x-5'>
              <span>
                <RoomOutlinedIcon className='text-[#767676]' />
              </span>
              <div>
                <span className='text-[#767676] text-[14px]'>Location</span>
                <p className='text-[#444] text-[16px] pt-3'>171 Deep Wood Dr. <br />
                  Suite 102<br />
                  Round Rock, TX, 78681</p>
              </div>

            </div>
            <div className='flex px-10 py-5 space-x-5'>
              <span>
                <LocalPhoneOutlinedIcon className='text-[#767676]' />
              </span>
              <div>
                <span className='text-[#767676] text-[14px]'>Contact</span>
                <p className='text-[#444] text-[16px] pt-3'>(512) 872-6868</p>
              </div>

            </div>
            <div className='flex px-10 py-5 space-x-5'>
              <span>
                <VisibilityOutlinedIcon className='text-[#767676]' />
              </span>
              <div>
                <span className='text-[#767676] text-[14px]'>Specialties</span>
                <p className='text-[#444] text-[16px] pt-3'>General Surgery</p>
              </div>

            </div>
            <div className='flex px-10 py-5 space-x-5'>
              <span>
                <DescriptionOutlinedIcon className='text-[#767676]' />
              </span>
              <div>
                <span className='text-[#767676] text-[14px]'>Office Policies</span>
                <p className='text-[#444] text-[16px] pt-3'>If you have a specific or urgent question, please call the office.

</p>
              </div>

            </div>
          </div>
          <div className='flex px-10 py-5 space-x-5'>
            <span>
              <InfoOutlinedIcon className='text-[#767676]' />
            </span>
            <div className='flex flex-col space-y-5'>
              <span className='text-[#767676] text-[14px]'>Your relationship</span>
              <p className='text-[#444] text-[16px] pt-3'>10 Office Visit every day</p>
              <p>Total appointments booked today: 1</p>
              <p>Appointments booked in past year: 1</p>
              <p>Total upcoming appointments: 102</p>
              {/* <p>Total upcoming appointments with teammates: 0</p> */}
            </div>

          </div>
        </div>


      </CustomTabPanel>




      <CustomTabPanel value={value} index={1}>
        <div className='md:p-10 p-2'>
          <div className=' text-[#444] flex justify-between md:w-[700px]'>
            <div className='flex md:space-x-5 space-x-2 '>
              <div className='w-[50px] h-[50px] bg-[#0071B0] rounded-full text-white text-center flex justify-center items-center font-bold'>V</div>
              <div className='flex flex-col mt-1'>
                <p className='text-[16px] font-bold'>Dr. Vineet Choudhry</p>
                <span className='text-[16px] text-[#767676] mb-2'>General Surgery</span>
                <span className='md:text-[12px] text-[10px]'><InfoIcon className=' text-green-500' fontSize='small' /> Provider usually attends rep meetings</span>
              </div>
            </div>
            <div>
              <Button size='small' variant="contained" className='text-[7px]' disabled>My Provider</Button>
            </div>
          </div>
          <span className=' text-[12px] text-[#444] hidden md:flex'>Office Hours</span>
          <div className=' mt-1 mb-5 flex space-x-3 text-[12px] text-[#444] hidden md:flex'>
            {/* <div className='border px-1 py-2 h-fit w-[120px]'>
              <p>Monday</p>
              <span>8:00 AM - 5:00 PM</span>
            </div> */}
            <div className='border px-1 py-2 h-fit w-[120px]'>
              <p>Tuesday</p>
              <span>1:00 PM - 5:00 PM</span>
            </div>
            {/* <div className='border px-1 py-2 h-fit w-[120px]'>
              <p>Wednesday</p>
              <span>8:00 AM - 5:00 PM</span>
            </div>
            <div className='border px-1 py-2 h-fit w-[120px]'>
              <p>Thursday</p>
              <span>8:00 AM - 5:00 PM</span>
            </div>
            <div className='border px-2 py-2 h-fit w-[120px]'>
              <p>Friday</p>
              <span>8:00 AM - 5:00 PM</span>
            </div> */}

          </div>
          <Divider />

        </div>
        <div className='md:p-10 p-2 my-5'>
          <div className=' text-[#444] flex justify-between md:w-[700px]'>
            <div className='flex md:space-x-5 space-x-2  '>
              <div className='w-[50px] h-[50px] bg-[#0071B0] rounded-full text-white text-center flex justify-center items-center font-bold'>C</div>
              <div className='flex flex-col mt-1'>
                <p className='text-[15px] font-bold'>Dr. Christina Muresuna</p>
                <span className='text-[15px] text-[#767676] mb-2'>General Surgery</span>
                <span className='md:text-[12px] text-[10px]'><InfoIcon className=' text-green-500' fontSize='small' /> Provider usually attends rep meetings</span>
              </div>
            </div>
            <div>
              <Button size='small' variant="contained" className='text-[7px]' disabled>My Provider</Button>
            </div>
          </div>
          <span className=' text-[12px] text-[#444] hidden md:flex'>Office Hours</span>
          <div className=' mt-1 mb-5 flex space-x-3 text-[12px] text-[#444] hidden md:flex '>
            {/* <div className='border px-1 py-2 h-fit w-[120px]'>
              <p>Monday</p>
              <span>8:00 AM - 5:00 PM</span>
            </div> */}
            <div className='border px-1 py-2 h-fit w-[120px]'>
              <p>Tuesday</p>
              <span>1:00 PM - 5:00 PM</span>
            </div>
            {/* <div className='border px-1 py-2 h-fit w-[120px]'>
              <p>Wednesday</p>
              <span>8:00 AM - 5:00 PM</span>
            </div>
            <div className='border px-1 py-2 h-fit w-[120px]'>
              <p>Thursday</p>
              <span>8:00 AM - 5:00 PM</span>
            </div>
            <div className='border px-2 py-2 h-fit w-[120px]'>
              <p>Friday</p>
              <span>8:00 AM - 5:00 PM</span>
            </div> */}

          </div>
          <Divider className='mt-5'/>

        </div>
      </CustomTabPanel>







      <CustomTabPanel value={value} index={2}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </CustomTabPanel>









      <CustomTabPanel value={value} index={3}>
        <PolicyAlert />
        <div className='flex px-10 py-5 space-x-5'>
          <span>
            <VisibilityOutlinedIcon className='text-[#767676]' />
          </span>
          <div>
            <span className='text-[#767676] text-[14px]'>Office Preferences</span>
            <p className='text-[#444] text-[16px] pt-3 font-bold'>If you have a specific or urgent question, please call the office.



            </p>
          </div>

        </div>
        <div className='flex px-10 py-5 space-x-5'>
          <span>
            <DescriptionOutlinedIcon className='text-[#767676]' />
          </span>
          <div>
            <span className='text-[#767676] text-[14px]'>Meal headcount</span>
            <p className='text-[#444] text-[16px] pt-3'>20</p>
          </div>

        </div>
      </CustomTabPanel>
    </Layout>
  )
}

export default BookSingle