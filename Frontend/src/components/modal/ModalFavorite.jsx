import { ModalBase } from './index';
import Button from '../button';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { FavoriteContext } from '@/contexts/favoriteContext';

const ModalFavorite = ({
  setIsFavorite,
  heading = 'Do you want to remove this item from your favorites list?',
  ...props
}) => {
  const { removeFavorite } = useContext(FavoriteContext);
  const handleRemoveFavorite = () => {
    removeFavorite(props.id);
    setIsFavorite(false);
    props.onClose();
    toast.success('Removed item from wish list !');
  };

  return (
    <ModalBase {...props}>
      <div className="relative z-[1] rounded-lg bg-white p-5 shadow-md max-w-[350px] w-full">
        <p className="text-lg">{heading}</p>
        <div className="flex items-center justify-between gap-[10px] mt-[50px]">
          <Button
            classname="leading-none rounded-md border-[#d2d1d6] text-dark hover:bg-transparent hover:text-dark"
            onClick={props.onClose}
          >
            Cancel
          </Button>
          <Button
            classname="leading-none rounded-md border-none text-white bg-red-500 hover:bg-red-400"
            onClick={handleRemoveFavorite}
          >
            Remove
          </Button>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalFavorite;
