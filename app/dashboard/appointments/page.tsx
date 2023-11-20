'use client'
import Layout from '@/app/Components/Layout'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function Appointments() {
    return (
        <Layout>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            /></Layout>
    )
}

export default Appointments