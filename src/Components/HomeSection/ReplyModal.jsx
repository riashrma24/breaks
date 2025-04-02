import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BorderAll } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { Verified } from '@mui/icons-material';
import FindGoodIcon from '@mui/icons-material/FmdGood'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import ImageIcon from '@mui/icons-material/Image'
import { imageListClasses } from '@mui/material';
import { useFormik } from 'formik';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: "none",
    outline: "none",
    borderRadius: 4
};

export default function ReplyModal({ handleClose, open }) {
    const navigate = useNavigate();

    const [uploadingImage, setUploadingImage] = React.useState(false);
    const [selectImage, setSelectedImage] = React.useState("")

    const handleSubmit = (values) => {
        console.log("handleSubmit", values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            postingId: 4
        },
        onSubmit: handleSubmit
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true)
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl)
        setSelectedImage(imgUrl)
        setUploadingImage(false)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex space-x-5'>
                        <Avatar onClick={() => navigate(`/profile/${6}`)} alt='username' src='https://i.pinimg.com/originals/67/b4/9a/67b49ade8a57876381e7eb9097a59f80.jpg' className='cursor-pointer' />



                        <div className='w-full'>
                            <div className='flex justify-between items-center'>
                                <div className='flex cursor-pointer items-center space-x-2'>

                                    <span className='font-semibold'>Regina George</span>
                                    <span className='text-gray-600'>@regina29</span>
                                    <Verified />

                                </div>


                            </div>

                            <div className='mt-2 '>
                                <div onClick={() => navigate('/posting/${3}')} className='cursor-pointer'>
                                    <p className='mb-2 p-0'>Hello peeps!</p>
                                </div>

                            </div>


                        </div>
                    </div>
                    <section className={`py-10`}>
                        <div className='flex space-x-5 '>
                            <Avatar alt='username' src='https://i.pinimg.com/originals/67/b4/9a/67b49ade8a57876381e7eb9097a59f80.jpg' />
                            <div className='w-full'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input type='text' name='content' placeholder='Take a break, share your thoughts!' className={`border-none outline-none text-xl bg-transparent`} {...formik.getFieldProps("content")} />
                                        {formik.errors.content && formik.touched.content && (
                                            <span className='text-red-500'>{formik.errors.content}</span>
                                        )}
                                    </div>


                                    {/* <div>
                                <img src='' alt='' />
                            </div>
                            */}

                                    <div className='flex justify-between items-center mt-5'>
                                        <div className='flex space-x-5 items-center'>
                                            <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                <ImageIcon className='text-[#F44336]' />
                                                <input type='file' name='fileImage' className='hidden' onChange={handleSelectImage} />
                                            </label>

                                            <FindGoodIcon className='text-[#F44336]' />
                                            <TagFacesIcon className='text-[#F44336]' />

                                        </div>

                                        <div>
                                            <Button sx={{ width: "100%", borderRadius: "29px", paddingY: "8px", paddingX: "20px", bgcolor: "#F44336", color: "white", '&:hover': { bgcolor: '#9C2B23' } }} variant='contained' type='submit'>post</Button>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </section>
                </Box>
            </Modal>
        </div>
    );
}