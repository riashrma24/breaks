import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { Height } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import './ProfileModal.css';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 4,

};

export default function ProfileModal({ open, handleClose }) {
    // const [open, setOpen] = React.useState(false);
    const [uploading, setUploading] = React.useState(false)


    const handleSubmit = (values) => {
        console.log("handle submit", values)
    }

    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: ""
        },
        onSubmit: handleSubmit
    })

    const handleImageChange = (event) => {
        setUploading(true)
        const { name } = event.target
        const file = event.target.files[0]
        formik.setFieldValue(name, file)
        setUploading(false)

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
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose} aria-label='delete'>
                                    <CloseIcon />
                                </IconButton>
                                <p className=''>Edit Profile</p>
                            </div>
                            <Button type='submit'>Save</Button>

                        </div>

                        <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
                            <React.Fragment>
                                <div className='w-full'>
                                    <div className='relative'>
                                        <img src='https://i.pinimg.com/474x/41/08/a3/4108a3e41746794922cf214fea20528e.jpg' alt='bg' className='w-full h-[12rem] object-cover object-center' />
                                        <input type='file' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' name='backgroundImage' onChange={handleImageChange} />

                                    </div>
                                </div>
                                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                                    <div className='relative'>
                                        <Avatar
                                            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                                            src='https://i.pinimg.com/736x/b4/17/78/b41778902fe7d0f9dcc9f4d8b7d9eea3.jpg' />

                                        <input type='file' className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer' onChange={handleImageChange} name="image" />
                                    </div>

                                </div>
                            </React.Fragment>

                            <div className='space-y-3'>
                                <TextField
                                    fullWidth
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}

                                />

                                <TextField
                                    multiline
                                    fullWidth
                                    rows={4}
                                    id="bio"
                                    name="bio"
                                    label="Bio"
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}

                                />

                                <TextField
                                    fullWidth
                                    id="website"
                                    name="website"
                                    label="Website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}

                                />

                                <TextField
                                    fullWidth
                                    id="location"
                                    name="location"
                                    label="Location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}

                                />

                                <div className='my-3'>
                                    <p className='text-lg'>Birthdate . Edit</p>
                                    <p className='text-2xl'>October 25, 1999 </p>
                                </div>

                                <p className='py-3 text-lg'>Edit Professional Profile</p>

                            </div>


                        </div>



                    </form>
                </Box>
            </Modal>
        </div>
    );
}