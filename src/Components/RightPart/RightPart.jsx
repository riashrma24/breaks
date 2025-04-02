import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../Subscription/SubscriptionModal';

const RightPart = () => {
    const handleChangeTheme = () => {
        console.log("change")
    }

    const [openSubscriptionModel, setOpenSubscriptionModel] = React.useState(false);
    const handleOpenSubscriptionModel = () => setOpenSubscriptionModel(true);
    const handleCloseSubscriptionModel = () => setOpenSubscriptionModel(false);
    const [plan, setPlan] = React.useState("Anually")

    return (
        <div className='py-5 sticky top-0'>
            <div className='relative flex items-center'>
                <input type='text' className='py-3 rounded-full text-gray-500 w-full pl-12' />

                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500' />
                </div>


                <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold'>Become a mentor!</h1>
                <h1 className='font-bold my-2'>Subscribe to unlock more features</h1>
                <Button variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px", bgcolor: "#F44336", '&:hover': { bgcolor: '#9C2B23' } }} onClick={handleOpenSubscriptionModel}>Get verified as a mentor</Button>
            </section>
            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>Geeky latest news!</h1>

                <div>
                    <p className='text-sm'>Why does Google offer meals and a variety of perks to its employees? </p>
                    <p className='font-bold'>Tech-gig</p>
                </div>
                {[1, 1, 1, 1, 1].map((item) => <div className='flex justify-between w-full'>
                    <div>
                        <p>Academia</p>
                        <p className='font-bold'>#NerdHerd</p>
                        <p>34.5k posts</p>
                    </div>
                    <MoreHorizIcon />
                </div>)}

            </section>

            <section>
                <SubscriptionModal open={openSubscriptionModel} handleClose={handleCloseSubscriptionModel} />
            </section>


        </div>
    )
}

export default RightPart