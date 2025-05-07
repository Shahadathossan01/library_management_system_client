import { Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/ui/InputField';
import ButtonField from '../../../components/ui/ButtonField';
import { useAuthContext } from '../hooks/useAuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const RegisterFormField = () => {
    const {control,handleSubmit,formState:{errors}}=useForm()
    const {register}=useAuthContext()
    const navigate=useNavigate()
    const onSubmit=async(data)=>{
      const res=await register({...data})
      !res.success && toast.error(res.message)
      res.success && toast.success('Registration successfully!')
    
      res.success && navigate('/')
    }
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{pt:3}}>
                    <Controller
                        name='username'
                        control={control}
                        rules={{required: 'Username is required'}}
                        render={({field})=><InputField label='Username' error={!!errors.username} helperText={errors.username?.message} {...field} />}
                    />
                </Box>

                <Box sx={{pt:3}}>
                    <Controller
                        name='email'
                        control={control}
                        rules={{required: 'Email is required',
                            pattern:{
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address'
                            }
                        }}
                        render={({field})=><InputField label='Email' error={!!errors.email} helperText={errors.email?.message} {...field} />}
                    />
                </Box>

                <Box sx={{pt:3}}>
                    <Controller
                        name='password'
                        control={control}
                        rules={{required: 'Password is required'}}
                        render={({field})=><InputField label='Password' error={!!errors.password} helperText={errors.password?.message} {...field} />}
                    />
                </Box>

                <Box sx={{pt:3}}>
                    <ButtonField type='submit'>register</ButtonField>
                </Box>
            </form>
        </Box>
    );
};

export default RegisterFormField;