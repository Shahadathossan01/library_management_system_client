import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import ModalUi from '../../../components/shared/ModalUi';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/ui/InputField';
import Grid from '@mui/material/Grid';
import UploadImageButton from '../../../components/ui/UploadImageButton';
import ImageField from '../../../components/ui/ImageField';
import { useBookContext } from '../hooks/useBookContext';
import { toast } from 'react-toastify';


const CreateBookForm=({handleClose})=>{
    const {handleSubmit,control,reset,formState:{errors}}=useForm()
    const {createBook}=useBookContext()
    const [preview,setPreview]=useState(null)


    const onSubmit=async(data)=>{
        const formData=new FormData()

        formData.append('name',data?.bookName)
        formData.append('authorName',data?.authorName)
        formData.append('summary',data?.summary)
        formData.append('inStock',data?.inStock)
        formData.append('image',data?.bookImage[0])
        formData.append('status','available')

        await createBook({formData})
        toast.success('Book created successfully!')

        handleClose()
        reset()
        
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography>Add new Book</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12,sm:6}}>
                                <Controller
                                    name="bookName"
                                    control={control}
                                    rules={{required: "Book name is required!"}}
                                    render={({field})=><InputField
                                        error={!!errors?.bookName}
                                        helperText={errors?.bookName?.message}
                                        size='small'
                                        label='Book Name'  {...field} />}                
                                />
                        </Grid>
                        <Grid size={{xs:12,sm:6}}>
                            <Controller
                                name="authorName"
                                control={control}
                                rules={{required: "Author name is required!"}}
                                render={({field})=><InputField
                                    {...field}
                                    label='Author Name'
                                    size='small'
                                    error={!!errors?.authorName}
                                    helperText={errors?.authorName?.message}
                                />}
                            
                            />
                        </Grid>
                        <Grid size={{xs:12}}>
                            <Controller
                                name='summary'
                                control={control}
                                rules={{required: "Summary is required!"}}
                                render={({field})=><InputField
                                    {...field}
                                    label='Summary'
                                    size='small'
                                    error={!!errors?.summary}
                                    helperText={errors?.summary?.message}
                                    fullWidth
                                />}
                            />
                        </Grid>
                        <Grid size={{xs:12}}>
                            <Controller
                                name='inStock'
                                control={control}
                                rules={{required: "InStock is required!"}}
                                render={({field})=><InputField
                                    {...field}
                                    label='InStock'
                                    size='small'
                                    error={!!errors?.inStock}
                                    helperText={errors?.inStock?.message}
                                />}
                            />
                        </Grid>
                        <Grid size={{xs:12}}>
                            <Controller
                                name='bookImage'
                                control={control}
                                rules={{required: 'Book Image is required!'}}
                                defaultValue={null}
                                render={({field})=><UploadImageButton
                                    onChange={(e)=>{
                                        const file=e.target.files?.[0]
                                        if(file){
                                            field.onChange(e.target.files);
                                            setPreview(URL.createObjectURL(file))
                                        }
                                    }}
                                >Upload Book Image</UploadImageButton>}
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

const CreateBook = () => {
    const [open,setOpen]=useState(false)

    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return (
        <Box sx={{mt:1}}>
            <Button sx={{height:'40px',width:'100px'}} onClick={handleOpen} size='small' variant='contained' color='secondary'>Create</Button>

            <ModalUi open={open} handleClose={handleClose}
            >
                <CreateBookForm handleClose={handleClose}></CreateBookForm>
             </ModalUi>
        </Box>
    );
};

export default CreateBook;