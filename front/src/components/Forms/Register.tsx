'use client';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography
} from '@mui/material';
import { useState } from 'react';

export default function RegisterForm() {

  const [errors, setErrors] = useState<{
    email?: boolean;
    password?: boolean;
    passwordConfirm?: boolean;
  }>({});

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={4}
      sx={{
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 4,
      }}
    >
      <Typography variant='h4'>Register</Typography>
      <FormControl required>
        <InputLabel htmlFor='username'>Username</InputLabel>
        <Input
          // sx={{ gap: theme.spacing(1) }}
          id='username'
          name='username'
          startAdornment={<PersonOutlineIcon />}
        />
      </FormControl>
      <FormControl required error={errors.email}>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <Input
          // sx={{ gap: theme.spacing(1) }}
          id='email'
          type='email'
          name='email'
          startAdornment={<MailOutlineIcon />}
        />
        {errors.email && <FormHelperText>Email already in use</FormHelperText>}
      </FormControl>
      <FormControl required error={errors.password}>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <Input
          // sx={{ gap: theme.spacing(1) }}
          id='password'
          type='password'
          name='password'
          startAdornment={<VpnKeyIcon />}
        />
        <FormHelperText>
          Password must be at least 6 characters long
        </FormHelperText>
      </FormControl>
      <FormControl required error={errors.passwordConfirm}>
        <InputLabel htmlFor='password-confirm'>Confirm password</InputLabel>
        <Input
          // sx={{ gap: theme.spacing(1) }}
          id='password-confirm'
          type='password'
          name='passwordConfirm'
          startAdornment={<VpnKeyIcon />}
        />
        {errors?.passwordConfirm && (
          <FormHelperText>Passwords must be the same</FormHelperText>
        )}
      </FormControl>
      <Button type='submit' color='success'>
        Register
      </Button>
    </Box>
  );
}
