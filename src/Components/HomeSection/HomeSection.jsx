import React from 'react'
import { Avatar } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image'
import { useState } from 'react';
import FindGoodIcon from '@mui/icons-material/FmdGood'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import Button from '@mui/material/Button';
import PostingCard from './PostingCard'


const validationSchema = Yup.object().shape({
    content: Yup.string().required("Content required ")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState("")

    const handleSubmit = (values) => {
        console.log(values)

    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },

        onSubmit: handleSubmit,
        validationSchema,
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true)
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl)
        setSelectedImage(imgUrl)
        setUploadingImage(false)
    }

    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={`pb-10`}>
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
            <section>
                {[1, 1, 1, 1, 1].map((item) => <PostingCard />)}
            </section>

        </div>
    )
}

export default HomeSection