import React from 'react'
import './userinfo.scss';
import Single from '../components/Single';
import { singleUser } from '../components/menudata';

export const Userinfo = () => {
  return (
    <div>
      <Single { ...singleUser} />
    </div>

  )
}
