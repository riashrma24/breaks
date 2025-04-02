import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import { Verified } from '@mui/icons-material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import { TabList } from '@mui/lab';
import { TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
import PostingCard from '../HomeSection/PostingCard';
import ProfileModal from '../Profile/ProfileModal'


const Profile = () => {
    const [tabValue, setTabValue] = useState("1")
    const navigate = useNavigate()

    const [openProfileModal, setOpenProfileModal] = useState(false)
    const handleOpenProfileModel = () => setOpenProfileModal(true)
    const handleClose = () => setOpenProfileModal(false)

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
        if (newValue === 4) {
            console.log("Liked posts")
        }
        else if (newValue === 1) {
            console.log("User tweets")
        }
    }



    const handleFollowUser = () => {
        console.log("Follow user")
    }



    const handleBack = () => navigate(-1)
    return (
        <div>
            <section className='bg-white z-50 flex items-center sticky top-0 bg-opacity-95'>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />

                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Rory Gilmore</h1>

            </section>

            <section>
                <img alt='profile picture' className='w-[100%] h-[15rem] object-cover' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXFxgYGBgYGBgaGRgaGhoaGx0aGhsaHSggHxomGxobITEhJSkrLi8uFx8zODMsNygtLisBCgoKDQ0NFQ8PFS0dFRktLS0tKy0tLS0tLS0tLS0rKy0tLS0rLSsrKy0tLS0tKy0rLS0tLSstLS0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAABAgADBQcE/8QAMhAAAQMDAgUEAgMAAQQDAAAAAQARIQIxQVFhcYGRofASscHRA+EiMvGSE0JiggQFUv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+LgwBpA0bi7M+3/cSghsb8iAR981KpVFVDUvAMfsYMcohik2JJDwAGdwQXL2DMP+WyHjybQtQZuQDBaSxvEIGmqR4NHQNcgjNvnzdDeP46ayfOCK1HB/jfksDu3ut5386pAe3soB/lYAkgXJZgJ2ATIa4I5EG/7WqwXvOuSJ0tbhqgK6SP3dvhBbDpqLnwLIKH4S1Rb+oDyAzlhBvJwodWSGENwF4Adydn5lZi1oQHpz5r0bKwIZmnV+zK6v5VfxpZzAd54nJM81qWEj0nDEd2N/8dkEGysVekvSbGDI4VDQi/JTLbOW4+EdUCDBkGCD7FBQoe3IZx9pqDOAYfMWsSBjg66fjH8aj/2/xDRLl2vpSS7GQBlcnu0CxvmZxjsg1VJpJGbP0MEyJF7qD0XSoXYMGA4lr82J2dtFvxjQl8MPlBzPf44a3ndUwDEyNAWPsddMGyMeW8bwSNbfzzigKi7Rhoh595Vfk/ITdswAAJL49gt+S5cMbcG+Un8p1dwKeQZh2CCCQG7vyjgtU+SYYMXcDno3shAKDHX6w2nvlYdeqWGumNvt+i1Jacw3JBqqnLwH6D9IppJfYPy8KzJFUh5bBfV2iwvbVBKErA6ewOEAsq9R/wAjshAlUPhBSA7AAvbVy5tGjBp+gFTHp+vkjqh58yJQyDqaWFnEh92B7WfjdTVWTzLwAJ2Ajohwx1ccMvDcM4scCoyqoXyzyLceCFTQHe52DRbe/ZQFRtaBp5k3WCar+FCDE+cArNUAEkgO3EgbagPrspItHmfN0tqEG/HS5uBeTAgP+uYSTC6fkYgQQRSc3PqJ6ennmy4uNERREuQwJtpAMcjBRTTb4ubR5lVT8c2fD8rYHFSf4mRy4j/EU00mCz89NVLXPVVUQ0PEy2QH4yByUMgqmq/a3MHSHmccRNIVUldPxs8n+J/sxYsCNYMtrbZBzI69lTu5GkTbX5t8pYPgC2dDMOd/0gWwTP1O3BBNNIzyd2adA8m04N3jUfkYxHC9iCx4Ex1RUP1upqCDWZji484hand89fGTWXJOpzJ5lYiOdunnJBJBhSlYhBua3n+JdmINuRHjJ/HRcs4pDnEGOrkfRQQUjD28f2S5xwjIL9XdSgaaTGSYRTrcD5387rFZ0ErIJSgtvj2/XcJpLO2hFhYhUfxH0+pjdrRZwx1vG3SQgwEzz/aqmouwJs2enB1NJjt5hVUeHRs2gRdA/joyzgEAyAZctrgzjmEA53cbefCa3LEl3AyCWH8QLuGAYA4bDIbDT090CzjPDp+pW84rCCxs4dmMbbqxTAg2J43MHQADugkSABrPdpfQ7LFrZc/DfKHVipjERoDi04ePtAU0zh+Ibqun47NtaLxLnYnSwuy5iE1BmPP4LxqCeBCqJHO3jKzTjMAjpc8cYWpDkB2B1te/m+q6/jpBq4u0CbsfSeHlkE0UggMLf2Jdg5IckOwD04zrfmAGInl7EPq3RaugDL3Yi1g3ympw7m+7vzF+Kippi731jLv2nY6wUksZbrLuMbOOeVVYGC8HFr9s81NdM8Ie4J2OiDNC6VAn+f8AIh2c68VIIZm1L6xGMMTzTT+aoWJEuA8Dh7IIPzyXSomsmz4FhAYAaNAb6UAMAenJb0GTs/dn6wga6IB1tyxxkdVFUOI4jPDZaq6BrwjVBqaCeV9pAfqR1QRxwZWpVerVzaXwHj24Mg5lYqiqpp3D46Fxa5gDmgKwCYBYsGgl2DwNzH6UHrbuFRHAMN5L+87QNb6mnX24PwhAU2McDZjHWI5rBuU+0cnZJ7a6Nw4h+SlAMs3nnBVVTuMd0lrAuOFnvD99kEj89Qj1Ef8AsftZVT+WoQKqg2HIbklBzhdGAcQZiobREWLvyCHLM8FvviLnvdb4/Q5IKBuAbsG1Dv0cDstTQekztjnA5oFelpYGQxg82yGsmpi3BmjHTc5QAPCxFhv334aBJqeMB/Nv0tTp53WLEbvJeNud5eXFmkiqvxni3MWifLLegsWHOYidmLi+yj0lUTjFx0GeQ/Sqmil+U+ftINy+uvj4tlb0h4768NJ9li2uM67e/kkaoXfaQxFtox75V/hJ9VJAkVAj0v6nBd7weDWWDP8A10h+OeLKTUNDhjpE92+wg6fh1pFjGYBe1izjwr0v/rhVT+L8ldNNJHpFNRqMyYqozcgECJBK8kFy8Dg/vddj+auoFsH1lqQJfUCAHLCwJ3VhYj8hYzdwbRD3GvmVNLeWHnwqqrOpk/yyDeWN8z/5YW/JTECL3chscP5DHyshH4iSASRJE2Fp4SHvbdhzqFTAkFg4Gj3IfWRHBfoo/GPSZu3/AG3vYva8t++H5aG4l/H4ug5k6u61NUNh3bdJOb6uM/KKu3XzKKw3lNQEXeenjxw1QDqugpgz4X85oIroyCCP1ka9o4qSF0D+kht3Foj5uprPqMAB+DWHQXKCLdPGWAVcTgteLx5rxQS8oJI8/SqqoEBgxAYz/YvUX2ggN/4oew3PdvpYDDTl8aoABSqLeYQSNG4Ow64QNNTf7uk1SSA0QLsza5zCmPPPGRCCjUJjTOlxAz2U+nSfL9EJc/HfGk+XQSsltlkFfpCwBwkfSBk7nusQtXx0myNkCyoWbic6X7dtk0VETYt15G8OgHw+XQOxhuA6ppLHbgORlaNDbJAzMZjhrssNTrrOvkYRGhhs6SZtiwGgvxyUATBHF+fm61At9tn2VVRvyB21ZBVkABty5DEEhxgkEWka5upBgjvr+voIjpVadtXyAA0RONVIgPxFxb66ZUK6Ti19Zf5wgbgu7sGYDvbGZPun/p5JBYS3tZtocO3FApDNnm/7z05Iszvw1QL3YkOJm5+lFTMGBcXl3d9owLq2EB2m/n2q/HS0EObAGDJwNXz7oOAqH6RXfZWbEAxHxFtVgIMc38woqQfI2VelrjyPt+YRb3CajsOXnjoJADmYxh0h8XNs3OND3WpuHEZYY6/XJV+Wm7EekOxnp/UGWhwOUoOVXKU/jqIMbYByDYwZFlq8gOz2N833b5UIKqL6QMAC3BHqLNjz4KFn+fPP9DVHZn6d0Bkt5v46CPOVusIBYlUTh4e7eXYJpBqgM8mSBYPcltYyd0HMrDzwro7CDcMWjkZspAcgEgOQHaBuRSLDYOghZZZBZDPaNwejGeISBM2z9dAhz2/azz9oH8YBIcsHE3aZLZh4SLPA1vvNm25BTlXTSH2vaQHuRqwdn5oNSecHlwT6Dj/DaOan1Rvr5z67Kq6CCQQQ1wzHmDbmgG306SuhcAReQWv55vNb2d2cOLGXg5/xLDPGNGe3BkCOxeWZ7Eg6tB5hSsKb/fscroAzNmmTHudtNd2VEbeeecLaP6kxeWctpln+kfiocizAhyWADkBzkid04DO8EbPcNq/siAi8eaLN49pnjlDtxDjiD2sV0wx3h4fhybkgkWaY3j9SfdYVksOHg67XWrayxcB3L67zm72PNBbGLt6cNoQ8Ahg05M6oqrgO8ADkHDa6KXd+HyPllvWSf5EnXJjE9OmgQagh/STBLGXAvPDP2sSGb0y4lzP9sHVx/wAd1MzrwHTrputQNL36S6iisMmoxyWN4PTzZSKmQX+f8dVJaoGkwWOlQBBbcEHgyHPpbF8ZZ3hzazw51LhpIwRcdGcdCOq1JHaL+fComr588fTSZGqT555ZSY88woEHh0BWqL/eS7md0DjsVobfz67oLIALVaXAfDhpAYwH0mcw3DRvlZ4Z4ut54UAN/cD4SDBjExaR+hzQRPhSKCQ7QCz4ciA9ng90BTe3Lnb/ABSrEFNbFyH6Du2EEMsgrILfhOhZruNkmmbgwDFpD9vhBO+G5XWAJto9xb/cIA7eftXYwT5HVQUi2I6n7QZWKSNm1Cl+Vv8AU10+kkOCASHpsWNw7Qgr1EAh4IDjUOCPYLBzz990A4fnORI+Ot0t55lBjTx4ebvCslxe8G/F9/1zQzuN+z2Z/bVQDCovydQ0M6OOffW/FX+KklwA8TD5flo/2mgkl2y9nN/L3dES02a3PwhV/wBKpjVgXPEsBxLHoVJPs3JttlNOpmM48siu/phyGLe7MZHPmuU2sWL+7b2VMXtI2sw0bbKxswAsH1h7acPAQi4ZyYg5No5NG6kBiWwWBkHQHHFBLzLQ7zJE9ZWpFtJ88+VFdxR6av5Ug+lnHQh+Rxhcq6QTgA+ohnMTzw08ePSihnI4OC0NI6RbVcqqA85yW8zaFUT+MOWEEx8LEvt7eMhhOu3A7cO/JPMBxdn4tD+B5UU0hzF4ADAu4EcMdEEaWu0aOzu5QT3u2+w9uCKTs/gMaQPdBqqdsefA5qGVmOLXfWPb3Q12t7P4yAcNYu9/03DKDzAx+lnS+hyNeR5T1QFdTkkACXYWD6OVvV2N84yFvBbUXiYHfkd6yWGlur+5KDSNY0x4VNQ7JB8vhspqMWDx2EmTm/VBI0Q3jq/yDhZ43md5UVXlBRr0AbD00u2+6VzdZApFPbnbthJo3+7kSzsYzsinL7e4PJBfqcuZmdxxxgIqM2a0dsq/yfmBFg4qgAAD0kkkEiTLM7woJcuPLW+kGO+13s0dlicNlSl0CKvZWCGtrpeZfHCbKRVcSkTjpwAxv7oE1i4DaMba3m9tN1VFUMbAEDZy/JTTUw5Ha+61NOMm2+3miDoZDk2YTfPaG/xTWRyhp0z5qtTdwHP7z4Ebct+CocYkcx43SoKTjt8tzVO7nj7+32gvz5KCgTiH6l4bhdXVSWewO87i8yAZ0cBcwDwy84D9bTuE0nra2FRvxjS8gW0nMNDRkyGS5vLnrPc5RnR+PRXRXIkDAJsJflMvuUFVekgARkkyNmApcS+SDEBlAZudtuRiOKa/xH1mkHJpDFwWyIsbgsFyIxwnj7/pEWagCZEW67icqKLjRx+5+ViL2jfh2+0E/PmqisTg4DDq+k3PgWd9I7+NxlHT/U04csHAJZ23bLBADh5EcPsrCtnvI4cX1DOOfJBby3VLTBfhJkCANcIJHXULP4ylZ+3+/KC6jAgXPE/1gzbkLm+M15jXPRFdTkwBwwt6SzgQLnR3vxY9EAyxOHjikUk2Dm8aDx1JG77oMKSz4j5TUwEGZwbMPsj/ANVhT7juND/kXkKSUHSn8rQ1P/Gg92SubceiyCSVTGR1HnNY1O1oDBgBkmWuZuZZhYBIA3vNu2/6QDqiYd5O2Neqnzz3SCPfVAEKsZ807If3WI30QVRS8POLySQG+UFIGL4h+0boQVSTJGJ+Plaoz1WgbxL7v7LVeFAVVOrqBBY4xi6KT2B/Vt45rekdsPHF0FUtct/g+0EHrsydzM+Sr/IctGpvZocmIKomqoWDkb37fu5QQG3yGmdDpa7XhXTSAQDGuXeQA2zeWr/rVCmqkf1JDgif4v6SdDOPZEczXmOQZSCrxmX4OADzMvzUUga8POE8lFJ4pqrnZy7aHHnRZ73zy5edkmkGRAi+rT1L9UBUGZmZ7tHDdnxsoNv1pu2+uiqukNYg5chuQ4Mt+P8AIZYtmBkEIOYsyTbzzRV+MS0cYflra32qYzSaoJBLSIf+UTAJPNBJouxB9JAvdyRGo1bXSVDx5rjaXQSfNkDggSgBURfF40bEyjwoAn2b/WvxSLZ8shvjIz5yTSd2sDw4ZQPognFj++h6KQfYrPoY886rADX9/SCiGJd/6xbIcbM+dFDp9O+PYW10AwtZiL3790EipsBZDIQXTZrv1E43+0LUnzTLqvTwZnEgxpGeSBqJgWIjL56ftSCt5psks2/K33foLvAYDn2mW7+ZWZXSH43Dco5SVzCChuPjF+V0kg2AFuV763dzoFJ7XVVibEag62PfCAJ4KqN7eRz+UHXwXbsFgOZPvCDDz680VepuWmuC/FFHJXRRrT6gR/2mxqBFLwZefTlmjAM8IfJkP3+1NIduNumOakaq5uDkS8znXzgg1JEXva2T96dU074GDr/tkAsIPES44w2B24C6abeklxN/S1mIm8C02VHOrQw3v/qfVt4POyBTiBa+FfptI8kiefNQBpLyJF/ZALN9ppja3JdHNJgtuDgjVUc/QSHg8w7WduJF9U/jry4sXcPGk5UzeW4RDPtkdQgM/wA+eSoMKXu8uxx1WrM+dbnCwWA7b2EwMST15uEgHf8AyeyKvLt9q/SWEFjIi7OCR7Fv/wA7KJvy879Dogaau9/uc3nCKgzi84ftsVjVDdPNFgzTykd0ARnRkUpIGrxjGxf41QfgM3K/Lugaqibm0TyF9IRWzkC2tn3IctwQywp6ZywdkACupIcsRDsJI5P2eVxVeq8fDSC4HUNugEJfx1kGjkfv3+1p884LPbMmMY3z8KqgYJLkh7gwC0y4LgwcMbEIMS8kl7ToAwnsy1MtHEa9LR3lSL3ZVRWxhrHuPOaDVVPJLkkv7vpnskl3+vr6QZcky+7l3c/bl5zLNOm+3Y4QJhpLg2ZmIPuk1DR4OYc94fqFNNDy4vqAZ443wtSHdtMDcCdJIHNA0HX244SADff2gNx99lNhcvDNbL7u7NzV1EY1MgmRpM7ICjPB2bSTwgEvo+HToNb6bdj3Uke+iwEee3VBQvI5CEim+ItL38vgFFNcWHGPLpqDcGfTl1hVC5kTvyt0WJi2jHl7T2W9JsxeIaduaxL2bBJzabizn/boNVV23SKIeGdrh+Q0+wpqqcmAH0sEmosAbSRGtyDyRV0ETmIsGIbsw5vzXX8n5AaagKKQDUCC5NVIar+ILyC8wT/AWl+JEbgnw4WDOCR/F+oEkdCArLiNXSzO39b6PxA/kHbNlyqEs+nnFWWhx8Pw8ypbOHbwLKtSdn2t3C1J7j5t1APJA6EA+Bhxn2W9JvjXCDDiyaTzeff99UeojViNbz9jspJ1Qakanh4Tb75IqbAYaO7c2CxQyBq8ykzDSwZjmLvzDRJ2Zb8lc3cCASGgQIXNBfngU1ef716BJKPPPNNUCS7dOQUJCyDErLIQIOz+bLOssgr1HHkfs9VXpOSzc5IcDmssqgpOWdhIPTbJ7pofY8QNllkVVNQcwCTAG5yGs3yoqAG9vl0rKCzSYJDAuIaSNuY/1SDjGUrKiScKhS44A6CPPZZZA1VuSXd3f3VcMMX3v5wWWRDXUPTv6je51scR/wAs4aqTEklh0NMDg3mmWRRUKb0klgLxLUvbHq9Qd7NZRVUssgxMYluz9voLA+cv2ssoMxZ/LStSRlCyBpDrqabG7hwLR6m6EuGE3MQ+WVHAUPCwplqnEsWDka5D9eayygPx0kkABySAJzbhcqQM3t1I4rLILr/FUA7Q/pfUieNiuZ4/7Djl8LLIK/JX6j2jt5dTVU+nIAeyyyCXTSOkcllkHWj/AOJXUHFMHcfayyyuJr//2Q==' />

            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar className='transform -translate-y-24' alt='rory gilmore' src='' sx={{ width: "10rem", height: "10rem", border: "4px solid white" }} />
                    {true ? <Button onClick={handleOpenProfileModel} variant='contained' sx={{ borderRadius: "20px", backgroundColor: "#F44336", '&:hover': { bgcolor: '#9C2B23' } }}> Edit Profile </Button> :
                        <Button onClick={handleFollowUser} variant='contained' sx={{ borderRadius: "20px", backgroundColor: "#F44336", '&:hover': { bgcolor: '#9C2B23' } }}> {true ? "Follow" : "Unfollow"} </Button>}


                </div>

                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Rory gilmore</h1>
                        {true && <Verified className='p-1' />}
                    </div>
                </div>

                <h1 className='text-gray-500'>@rorynotlory</h1>

                <div className='mt-2 space-y-3'>
                    <p>Hello, my name is Rory and I'm a Gilmore girl</p>
                    <div className='flex py-1 space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>

                        </div>
                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>Indian</p>

                        </div>
                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined Jun 2003</p>

                        </div>
                    </div>

                    <div>
                        <div className='flex items-center space-x-5'>
                            <div className='flex items-center space-x-1 font-semibold'>
                                <span>30</span>
                                <span className='text-gray-500'>Following</span>
                            </div>
                            <div className='flex items-center space-x-1 font-semibold'>
                                <span>590</span>
                                <span className='text-gray-500'>Followers</span>
                            </div>
                        </div>



                    </div>

                </div>

            </section>

            <section className='py-5'>

                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                            <Tab label="Your Posts" value="1" />
                            <Tab label="Replies" value="2" />
                            <Tab label="Media" value="3" />
                            <Tab label="Likes" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        {[1, 1, 1, 1].map((item) => <PostingCard />)}
                    </TabPanel>
                    <TabPanel value="2">User Replies</TabPanel>
                    <TabPanel value="3">Media</TabPanel>
                    <TabPanel value="4">Likes</TabPanel>
                </TabContext>
            </section>

            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal} />
            </section>

        </div>
    )
}

export default Profile