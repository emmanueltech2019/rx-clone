'use client'
import React, { useState, useEffect, useRef, ReactNode, MouseEvent } from 'react';
import { Avatar, Button, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Dropdown, MenuButton } from '@mui/base';

interface DropdownProps {
  children: ReactNode;
}

const MyDropDown: React.FC<DropdownProps> = ({ children }) => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick:any = () => {
    setDropDownState(!dropDownState);
  };

  const handleOutsideClick:any = (event: MouseEvent<Document>) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropDownState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <Button className='text-black' onClick={handleButtonClick}>
      <Avatar
          alt="JAMES D."
          src="https://res.cloudinary.com/rxvantage/image/upload/c_thumb,f_auto,g_face,w_40,h_40/production/reps/279731/avatar/0e604574-284a-4115-9743-fd951b5b4308.jpeg"
        />
        <div className="user-greeting px-3 text-center">
          <Typography variant="body1" data-test="user-greeting-text" className='text-[12px]'>
            Hi, James D.
          </Typography>
          <Typography variant="body1" data-test="user-profile-type-text" className='text-[10px] text-[#00000080]'>
            Patient
          </Typography>
        </div>
        <ArrowDropDownOutlinedIcon className="arrow-drop-down" />
      </Button>
      <Menu open={dropDownState} anchorEl={dropdownRef.current} onClose={() => setDropDownState(false)}>
        {children}
      </Menu>
    </div>
  );
};





export default MyDropDown;

