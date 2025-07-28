import React from 'react';
import InputField from '../../../components/ui/InputField';
import { Controller, useForm } from 'react-hook-form';
import ButtonField from '../../../components/ui/ButtonField';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useUserProfileContext } from '../hooks/useUserProfileContext';
import { toast } from 'react-toastify';
const UpdateProfileForm = ({handleClose}) => {
    const {handleSubmit,control,reset}=useForm()
    const {updateProfile}=useUserProfileContext()
    const onSubmit=async(data)=>{
        const formData = new FormData();

        for (const key in data) {
        if (data[key] !== undefined && data[key] !== null) {
            formData.append(key, data[key]);
        }
        }

        const {code}=await updateProfile({formData})
        if(code === 200){
            toast.success('updated successfully!')
            reset()
            handleClose()
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                 <Box sx={{ flexGrow: 1,mt:5}}>
                    <Grid container spacing={2}>
                        <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,sm:6,md:6}}>
                        <Controller 
                    name='username'
                    control={control}
                    render={({field})=><InputField size='small' label='Username' type='text' name='username'  {...field}/>}
                />
                        </Grid>

                        <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,sm:6,md:6}}>
                        <Controller
                        name='firstName'
                        control={control}
                        render={({field})=><InputField size='small' label='First Name' type='text' name='firstname' {...field} />}
                    
                    />
                        </Grid>

                        <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,sm:6,md:6}}>
                        <Controller
                        name='lastName'
                        control={control}
                        render={({field})=><InputField size='small' label='Last Name' type='text' name='lastName' {...field} />}
                    
                    />
                        </Grid>

                        <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,sm:6,md:6}}>
                            <Controller
                        name='phone'
                        control={control}
                        render={({field})=><InputField size='small' label='Phone' type='text' name='phone' {...field} />}
                    
                    />
                        </Grid>

                        <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,sm:6,md:6}}>
                        <Controller
                        name='city'
                        control={control}
                        render={({field})=><InputField size='small' label='City' type='text' name='city' {...field} />}
                    
                    />
                        </Grid>
                        <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,sm:6,md:6}}>
                        <Controller
                        name='village'
                        control={control}
                        render={({field})=><InputField size='small' label='Village' type='text' name='village' {...field} />}
                    
                    />
                        </Grid>

                        <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,sm:6,md:6}}>
                            <Box>
                                <Typography>Date of Birth</Typography>
                    <Controller
                        name='dateOfBirth'
                        control={control}
                        render={({field})=><InputField size='small' label='' type='date' name='dateOfBirth' {...field} />}
                    
                    />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

               <Box sx={{mt:2,textAlign:'center'}}>
                    <ButtonField size='small'>submit</ButtonField>
               </Box>
            </form>
        </>
    );
};

export default UpdateProfileForm;