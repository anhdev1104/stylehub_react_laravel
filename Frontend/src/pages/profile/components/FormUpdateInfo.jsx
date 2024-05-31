import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContext } from '@/contexts/AuthContext';
import Input from '@/components/input';
import Button from '@/components/button';
import { Link, useNavigate } from 'react-router-dom';
import { updateUser } from '@/services/auth';
import { toast } from 'react-toastify';

const schema = yup
  .object({
    user_name: yup.string().trim().required('Please enter your full name !'),
    email: yup
      .string()
      .trim()
      .required('Email cannot be blank !')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: 'Email is not in the correct format !',
      }),
    phone: yup.string().trim().required('Please enter your phone numbers !'),
    avatar: yup
      .mixed()
      .test('required', 'Please upload an avatar !', value => value && value.size > 0)
      .required(),
    address: yup.string().trim().required('Please enter your address !'),
  })
  .required();

const FormUpdateInfo = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (user) {
      setValue('user_name', user.user_name || '');
      setValue('email', user.email || '');
      setValue('phone', user.phone || '');
      setValue('address', user.address || '');
    }
  }, [user, setValue]);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setUser({ ...user, preview });
      setValue('avatar', file);
    }
  };

  const onSubmitHandler = async values => {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('id', user?.id);
    formData.append('user_name', values.user_name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('address', values.address);

    if (values && values.avatar) {
      formData.append('avatar', values.avatar);
    }

    if (user) {
      const data = await updateUser(user.id, formData);
      setUser(data);
      toast.success('Personal information has been successfully updated !');
      navigate('/profile');
    }
  };

  return (
    <div className="p-[30px] rounded-[20px] bg-white">
      <div className="flex">
        <div className="w-full flex-shrink-0 flex-grow-0">
          <h2 className="section-heading section-heading-3">
            <Link to="/profile" className="flex items-center gap-[10px]">
              <img src="/assets/icons/arrow-left-large.svg" alt="" />
              Personal info
            </Link>
          </h2>

          <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
            <div className="flex gap-[30px]">
              <div className="mt-[30px] flex-1">
                <label htmlFor="user_name" className="inline-block text-lg font-medium mb-[10px] text-green2">
                  Full name
                </label>
                <div className="flex items-center h-[46px] relative">
                  <Input type="text" name="user_name" id="user_name" placeholder="Full name" control={control} />
                  <div className="absolute right-0 px-4 text-lg text-gray-500">
                    <i className="fa-regular fa-user"></i>
                  </div>
                </div>
                {errors.user_name && (
                  <p className="text-red-500 text-left text-sm font-medium mt-1">{errors.user_name.message}</p>
                )}
              </div>

              <div className="mt-[30px] flex-1">
                <label htmlFor="email" className="inline-block text-lg font-medium mb-[10px] text-green2">
                  Email address
                </label>
                <div className="flex items-center h-[46px] relative">
                  <Input type="email" name="email" id="email" placeholder="Email address" control={control} />
                  <img src="/assets/icons/message.svg" alt="" className="absolute right-0 px-3" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-left text-sm font-medium mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="flex gap-[30px]">
              <div className="mt-[30px] flex-1">
                <label htmlFor="avatar" className="inline-block text-lg font-medium mb-[10px] text-green2">
                  Avatar
                </label>
                <div className="flex items-center h-[46px] relative">
                  <Input type="file" name="avatar" id="avatar" control={control} onChange={handleFileChange} />
                </div>
                {errors.avatar && (
                  <p className="text-red-500 text-left text-sm font-medium mt-1">{errors.avatar.message}</p>
                )}
              </div>

              <div className="mt-[30px] flex-1">
                <label htmlFor="phone" className="inline-block text-lg font-medium mb-[10px] text-green2">
                  Phone number
                </label>
                <div className="flex items-center h-[46px] relative">
                  <Input
                    name="phone"
                    id="phone"
                    placeholder={user?.phone === null ? 'Chưa cập nhập' : ''}
                    control={control}
                  />
                  <div className="absolute right-0 px-4 text-lg text-gray-500">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-left text-sm font-medium mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-end gap-[30px]">
              <div className="mt-[30px] flex-1">
                <label htmlFor="address" className="inline-block text-lg font-medium mb-[10px] text-green2">
                  Address
                </label>
                <div className="flex items-center h-[46px] relative">
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    placeholder={user?.address === null ? 'Chưa cập nhập' : ''}
                    control={control}
                  />
                  <div className="absolute right-0 px-4 text-lg text-gray-500">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                </div>
                {errors.address && (
                  <p className="text-red-500 text-left text-sm font-medium mt-1">{errors.address.message}</p>
                )}
              </div>
              <div className="mt-[30px] flex-1">
                <div className="flex items-center justify-center gap-[30px] ">
                  <Button location="/profile" classname="rounded-3xl hover:bg-opacity-0 hover:text-green">
                    Cancel
                  </Button>
                  <Button classname="rounded-3xl bg-green text-white hover:bg-opacity-80">Save Edit</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUpdateInfo;
