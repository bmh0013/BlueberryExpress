import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="fixed w-screen bottom-0 mt-10 flex justify-between items-center bg-blue-600 text-white">
      <div className="ml-5">
        <a href="https://twitter.com/" target="_blank"><TwitterIcon className="pr-3" fontSize="large"/></a>
        <a href="https://www.facebook.com/" target="_blank"><FacebookIcon className="pr-3" fontSize="large"/></a>
        <a href="https://www.instagram.com/" target="_blank"><InstagramIcon className="pr-3" fontSize="large"/></a>
      </div>
      <div>
        <p className="tracking-wide text-sm">Copyright &#169;2021 <strong className="border-r pr-1 pl-1 border-l">Blueberry Express Inc.</strong> All Rights Reserved</p>
      </div>
      <div>
        <a className="pr-5 text-md" href="/aboutus">Contact Us</a>
        <a className="mr-10 text-md" href="/aboutus">About Us</a>
      </div>
    </div>
  )
}