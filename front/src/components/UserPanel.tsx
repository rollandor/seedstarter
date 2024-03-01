import { Divider } from '@mui/material';
import LogoutButton from './Buttons/Logout';

type Props = {
  closeModal?: () => void;
};

export default function UserPanel({ closeModal }: Props) {
  return (
    <>
      <LogoutButton closeModal={closeModal} />
    </>
  );
}
