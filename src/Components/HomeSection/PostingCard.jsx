import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { Verified } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PostingCard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeletePost = () => {
        console.log("delete post")
        handleClose()
    }
    const handleEditPost = () => {
        console.log("edit post")
        handleClose()
    }
    const handleOpenReplyModel = () => {
        console.log("handle open")
        handleClose()
    }
    const handleCreateReshare = () => {
        console.log("re share")
        handleClose()
    }
    const handleLikePost = () => {
        console.log("handle like post")
        handleClose()
    }


    return (
        <div className=''>
            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
                <RepeatIcon />
                <p></p>
            </div>
           */}

            <div className='flex space-x-5'>
                <Avatar onClick={() => navigate(`/profile/${6}`)} alt='username' src='https://i.pinimg.com/originals/67/b4/9a/67b49ade8a57876381e7eb9097a59f80.jpg' className='cursor-pointer' />



                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>

                            <span className='font-semibold'>Regina Georage</span>
                            <span className='text-gray-600'>@regina29</span>
                            <Verified />

                        </div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon sx={{ color: "#F44336" }} />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
                                <MenuItem onClick={handleEditPost}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className='mt-2 '>
                        <div className='cursor-pointer'>
                            <p className='mb-2 p-0'>Hello peeps!</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src='https://i.pinimg.com/control/236x/90/0d/cd/900dcdbf7febe085ce181ffb8ab9757f.jpg' alt='an image' />
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>43</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon onClick={handleCreateReshare} className='cursor-pointer' />
                                <p>6</p>

                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {true ? <FavoriteIcon onClick={handleLikePost} className='cursor-pointer' /> : <FavoriteIcon onClick={handleLikePost} className='cursor-pointer' />}
                                <p>90</p>

                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>300</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default PostingCard