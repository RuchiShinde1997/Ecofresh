/**
 * @author Mugdha Agharkar
 */

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { useNavigate } from 'react-router-dom';
import LocalOffer from '@mui/icons-material/LocalOffer';
import Logout from '@mui/icons-material/Logout';

export default function AdminMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleRouting = (event) => {
    const selectedOption = event.target.innerText;
    if(selectedOption==="Complaints")
    {
      navigate("/complaints")
    }
    if(selectedOption==="Approve Recipes")
    {
      navigate("/adminRecipeRequests")
    }
    if(selectedOption==="View Offers")
    {
      navigate("/adminalloffers")
    }
    if(selectedOption==="Create Offers")
    {
      navigate("/createoffer")
    }
    if(selectedOption === "Logout"){
      localStorage.clear();
      navigate("/login");
    }
    //use the selectedOption and navigate hook to route to different pages.
    //refer to HomeAccountDropdown for an example
    //remove these comments once one option is added
    
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuOptions = [
      {
        icon: <ContactSupportIcon fontSize='small' />,
        text: "Complaints",
      },
      {
        icon: <FactCheckIcon fontSize='small' />,
        text: "Approve Recipes",
      },
      {
        icon: <LocalOffer fontSize='small' />,
        text: "View Offers",
      },
      {
        icon:<LocalOffer fontSize='small' />,
        text: "Create Offers",
      },
      {
        icon: <Logout fontSize='small' />,
        text: "Logout",
        divider: false,
      }
  ];
  return (
    <React.Fragment>
      <button 
        className="buttons"
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
          <AccountCircleRoundedIcon />
      </button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      {
        menuOptions.map(option =>  (
            <MenuItem value={option.text} onClick={(event) => handleRouting(event)}>
                <ListItemIcon>
                    {option.icon}
                </ListItemIcon>
            {option.text}
            </MenuItem>
                )
          )
      }
      </Menu>
    </React.Fragment>
  );
}
