import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ProfileProvider } from './ProfileProvider';
import { useUserProfileContext } from './hooks/useUserProfileContext';
import { useFetchUserProfile } from './hooks/useFetchUserProfile';
import ModalUi from '../../components/shared/ModalUi';
import LoadingUi from '../../components/shared/LoadingUi';
import UpdateProfile from './components/UpdateProfile';
import ImageField from '../../components/ui/ImageField';
import UploadImageButton from '../../components/ui/UploadImageButton';
import { Controller, useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';

const ProfileRow = ({ label, value }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
    <Typography fontWeight="bold">{label}:</Typography>
    <Typography>{value || 'N/A'}</Typography>
  </Box>
);

export const ProfileManagement = () => (
  <ProfileProvider>
    <ProfileManagementContent />
  </ProfileProvider>
);

ProfileManagement.displayName = 'ProfileManagement';

const ProfileManagementContent = () => {
  const { isLoading } = useFetchUserProfile();
  const { profileData, uploadProfileImage } = useUserProfileContext();
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(null);

  const { control, handleSubmit } = useForm();

  if (isLoading) return <LoadingUi />;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('avator', data.profile[0]);
    uploadProfileImage({ formData });
  };

  return (
    <Box sx={{ mt: 4, p: { xs: 2, sm: 4 }, width: '100%'}}>
      <Grid container spacing={4} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
        {/* Profile Details */}
        <Grid size={{xs:12,md:6}}>
          <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 2 }}>
            <Typography sx={{textAlign:'center'}} variant="h6" gutterBottom>
              Profile Information
            </Typography>

            <Stack spacing={2}>
              <ProfileRow label="Username" value={profileData?.data?.username} />
              <Divider />
              <ProfileRow label="Email" value={profileData?.data?.email} />
              <Divider />
              <ProfileRow label="First Name" value={profileData?.data?.profile?.firstName} />
              <Divider />
              <ProfileRow label="Last Name" value={profileData?.data?.profile?.lastName} />
              <Divider />
              <ProfileRow label="Date of Birth" value={profileData?.data?.profile?.dateOfBirth} />
              <Divider />
              <ProfileRow label="City" value={profileData?.data?.profile?.city} />
              <Divider />
              <ProfileRow label="Village" value={profileData?.data?.profile?.village} />
              <Divider />
              <ProfileRow label="Phone" value={profileData?.data?.profile?.phone} />
              <Divider />
            </Stack>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <Button onClick={handleOpen} variant="contained" color="primary">
                Edit Profile
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Profile Image Upload */}
        <Grid size={{xs:12,md:6}} sx={{display:'flex',justifyContent:'center'}}>
          <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 2, textAlign: 'center' ,width:'80%'}}>
            <ImageField
              img={preview || profileData?.data?.profile?.avator}
              rounded="50px"
              sx={{ width: 150, height: 150, mx: 'auto', mb: 2 }}
            />

            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="profile"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <UploadImageButton
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        field.onChange(e.target.files);
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  >
                    Choose Image
                  </UploadImageButton>
                )}
              />

              <Box sx={{ mt: 2 }}>
                <Button variant="contained" type="submit">
                  Upload Image
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* Modal */}
      <ModalUi open={open} handleClose={handleClose}>
        <UpdateProfile handleClose={handleClose} />
      </ModalUi>
    </Box>
  );
};

ProfileManagementContent.displayName = 'ProfileManagementContent';
