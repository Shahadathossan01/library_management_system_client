import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import ModalUi from '../../../components/shared/ModalUi';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/ui/InputField';
import Grid from '@mui/material/Grid';
import UploadImageButton from '../../../components/ui/UploadImageButton';
import ImageField from '../../../components/ui/ImageField';
import { useBookContext } from '../hooks/useBookContext';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import SelectField from '../../../components/ui/SelectField';

const EditBookForm=({id,handleClose})=>{
    const {handleSubmit,control,reset,formState:{errors}}=useForm()
    const {editBook}=useBookContext()
    const [preview,setPreview]=useState(null)

    const onSubmit=async(data)=>{

        console.log(data)
        console.log(id)
        const formData=new FormData()
        data?.bookName && formData.append('name', data?.bookName)
        data?.authorName && formData.append('authorName', data?.authorName)
        data?.summary && formData.append('summary', data?.summary)
        data?.inStock && formData.append('inStock', data?.inStock)
        data?.bookImage && formData.append('image', data?.bookImage[0])
        data?.status && formData.append('status', data?.status)

        await editBook({id,formData})
        toast.success('Book Edited successfully!')
        handleClose()
        reset()
        
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography>Edit Book</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12,sm:6}}>
                                <Controller
                                    name="bookName"
                                    control={control}
                                    render={({field})=><InputField
                                        size='small'
                                        label='Book Name'  {...field} />}                
                                />
                        </Grid>
                        <Grid size={{xs:12,sm:6}}>
                            <Controller
                                name="authorName"
                                control={control}
                        
                                render={({field})=><InputField
                                    {...field}
                                    label='Author Name'
                                    size='small'
                                   
                                />}
                            
                            />
                        </Grid>
                        <Grid size={{xs:12}}>
                            <Controller
                                name='summary'
                                control={control}
                                render={({field})=><InputField
                                    {...field}
                                    label='Summary'
                                    size='small'
                                    fullWidth
                                />}
                            />
                        </Grid>
                        <Grid size={{xs:6}}>
                            <Controller
                                name='inStock'
                                control={control}
                                render={({field})=><InputField
                                    {...field}
                                    label='InStock'
                                    size='small'
                                />}
                            />
                        </Grid>
                        <Grid size={{xs:6}}>
                            <Controller
                                name='status'
                                control={control}
                                render={({field})=><SelectField 
                                    {...field}
                                    label='Status'
                                    size='small'
                                    options={[{label:'available',value:'available'},{label:'out_of_stock',value:'out_of_stock'}]}                              
                                />}
                            />
                        </Grid>
                        <Grid size={{xs:12}}>
                            <Controller
                                name='bookImage'
                                control={control}
                                defaultValue={null}
                                render={({field})=><UploadImageButton
                                    onChange={(e)=>{
                                        const file=e.target.files?.[0]
                                        if(file){
                                            field.onChange(e.target.files);
                                            setPreview(URL.createObjectURL(file))
                                        }
                                    }}
                                >Choose Book Image</UploadImageButton>}
                            />

                            <Box sx={{mt:2}}>
                                <ImageField img={preview} height='80px' width='80px' rounded='10%'></ImageField>
                            </Box>
 
                        </Grid>
                    </Grid>
                </Box>
                



                <Button type='submit' variant='contained' size='small'>Submit</Button>
            </form>
        </>
    )
}

const EditBook = ({id}) => {
    const [open,setOpen]=useState(false)

    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return (
        <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <IconButton onClick={handleOpen}>
                    <EditIcon></EditIcon>
            </IconButton>

            <ModalUi open={open} handleClose={handleClose}
            >
                <EditBookForm id={id} handleClose={handleClose}></EditBookForm>
             </ModalUi>
        </Box>
    );
};

export default EditBook;