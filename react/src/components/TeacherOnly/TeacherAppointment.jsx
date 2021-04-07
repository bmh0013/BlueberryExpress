import React from 'react';
import {MessageBtn} from '../Buttons/MessageBtn'
import { LargeBtn } from '../Buttons/LargeBtn'

export const TeacherAppointment = ({ appointment }) => {

  return (
    <div className="individual-appointment">
      <div className="appointment-info">
        <p className="pb-1 text-lg"><span>Student:</span> {appointment.with}</p>
        <p className="pb-1"><span>Lang:</span> {appointment.lang}</p>
        <p className="pb-1">4/5/21 {appointment.start}</p>
      </div>

      <div className="flex appointment-button">
        <MessageBtn/>
        <LargeBtn label="Reschedule" />
      </div>
    </div>
  )
}