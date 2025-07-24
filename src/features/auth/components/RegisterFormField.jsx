import { Box, Card, CardContent, Typography, Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/ui/InputField';
import ButtonField from '../../../components/ui/ButtonField';
import { useAuthContext } from '../hooks/useAuthContext';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const RegisterFormField = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const res = await register({ ...data });
    if (!res.success) return toast.error(res.message);
    
    toast.success('Registration successfully!');
    navigate(from, { replace: true });
  };

  return (
    <Box sx={{ minHeight: '60vh', display: 'flex', justifyContent: 'center'}}>
      <Card sx={{ width: '100%', maxWidth: 450, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom fontWeight={600}>
            Register
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'Username is required' }}
                render={({ field }) => (
                  <InputField
                    label="Username"
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <InputField
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field }) => (
                  <InputField
                    label="Password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    {...field}
                  />
                )}
              />

              <ButtonField type="submit" fullWidth>
                Register
              </ButtonField>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterFormField;
