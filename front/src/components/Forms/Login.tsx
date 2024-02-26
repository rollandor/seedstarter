'use client';

import React from 'react';
import {
  Box,
  Typography,
  InputLabel,
  Input,
  FormControl,
  Button,
  FormHelperText,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Login() {
  const [errors, setErrors] = React.useState<{
    email?: boolean;
    password?: boolean;
  }>({});

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={4}
    >
      <Typography variant='h4'>Login</Typography>
      <FormControl required error={errors.email}>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <Input
          // sx={{ gap: theme.spacing(1) }}
          id='email'
          type='email'
          name='email'
          startAdornment={<MailOutlineIcon />}
        />
        {errors.email && (
          <FormHelperText>
            Пользователь с указанным email не найден
          </FormHelperText>
        )}
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
        {errors.password && <FormHelperText>Wrong credentials</FormHelperText>}
      </FormControl>
      <Button type='submit' color='success' >
        Login
      </Button>
    </Box>
  );
}

export default Login;