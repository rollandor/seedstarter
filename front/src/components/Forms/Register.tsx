'use client';

import type { UserResponseData } from '@/types';
import storageLocal from '@/utils/storageLocal';
import { useUser } from '@/utils/swr';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { User } from '@prisma/client';
// import { usePathname } from 'next/navigation';
import { useState } from 'react';
import FormFieldsWrapper from './Wrapper';

type Props = {
  closeModal?: () => void;
};

export default function RegisterForm({ closeModal }: Props) {
  const theme = useTheme();
  // метод для мутирования данных пользователя
  const { mutate } = useUser();

  // состояние ошибок
  const [errors, setErrors] = useState<{
    email?: boolean;
    password?: boolean;
    passwordConfirm?: boolean;
  }>({});

  // обработчик отправки формы
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // данные пользователя в виде объета
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    ) as unknown as Pick<User, 'username' | 'email' | 'password'> & {
      passwordConfirm?: string;
    };

    // валидация формы
    const _errors: typeof errors = {};
    if (formData.password.length < 6) {
      _errors.password = true;
    }
    if (formData.password !== formData.passwordConfirm) {
      _errors.passwordConfirm = true;
    }
    // если имеются ошибки
    if (Object.keys(_errors).length) {
      return setErrors({ ..._errors });
    }

    // удаляем лишние данные
    delete formData.passwordConfirm;

    try {
      // отправляем данные на сервер
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      // если ответ имеет статус-код 409,
      // значит, пользователь уже зарегистрирован
      if (res.status === 409) {
        return setErrors({ email: true });
      } else if (!res.ok) {
        throw res;
      }

      // извлекаем данные пользователя и токен доступа из ответа
      const data = await res.json() as UserResponseData;
      // инвалидируем кэш
      mutate(data);
      // фиксируем факт регистрации пользователя в локальном хранилище
      storageLocal.set('user_has_been_registered', true);

      // закрываем модалку
      if (closeModal) {
        closeModal();
      }

      // перенаправляем пользователя на главную страницу
      // if (router.pathname !== '/') {
      //   router.push('/');
      // }
    } catch (e) {
      console.error(e);
    }
  };

  // обработчик ввода
  const handleInput: React.FormEventHandler<HTMLFormElement> = () => {
    // сбрасываем ошибки при наличии
    if (Object.keys(errors).length) {
      setErrors({});
    }
  };

  return (
    <FormFieldsWrapper handleSubmit={handleSubmit} handleInput={handleInput}>
      <Typography variant='h4'>Register</Typography>
      <FormControl required>
        <InputLabel htmlFor='username'>Username</InputLabel>
        <Input
          sx={{ gap: theme.spacing(1) }}
          id='username'
          name='username'
          startAdornment={<PersonOutlineIcon />}
        />
      </FormControl>
      <FormControl required error={errors.email}>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <Input
          sx={{ gap: theme.spacing(1) }}
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
          sx={{ gap: theme.spacing(1) }}
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
          sx={{ gap: theme.spacing(1) }}
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
    </FormFieldsWrapper>
  );
}