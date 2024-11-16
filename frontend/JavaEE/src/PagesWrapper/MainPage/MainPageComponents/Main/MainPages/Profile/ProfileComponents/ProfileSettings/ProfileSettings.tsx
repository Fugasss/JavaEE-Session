import PasswordChange from './PasswordChange'
import AvatarChange from './AvatarChange'
import { useLoginStatus } from '../../../../../../../../Hooks/contextHooks';
import axiosApi from '../../../../../../../../utils/axiosApi';
import { EApi } from '../../../../../../../../api/EApi';
import { isAxiosError } from 'axios';

let profileImage = localStorage.getItem("avatar");

if(!profileImage?.length){
  try{
    const response : {email : string , iconUrl : string} = (await axiosApi.get(EApi.PROFILE)).data
    profileImage = response.iconUrl;
    console.log("Было загружено изображение с СЕРВЕРА")
    localStorage.setItem("avatar" , response.iconUrl)
  }
  catch(err){
    if(isAxiosError(err)){
      console.log(err.code)
    }
  }
}
else{
  console.log("Было загружено изображение из кэша")
}

export default function ProfileSettings() {


  const {isLogined , setIsLogined} = useLoginStatus();

  const logOut = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.clear();
    setIsLogined(false);
  }

  return (
    <div className='flex flex-col bg-passive p-4'>
      <div className='flex flex-col w-full'>
        <div className='w-1/2'>
          <img className="w-full" src={profileImage!} alt="" />
        </div>
        <button className='p-1 text-warn font-bold text-left hover:underline' onClick={ e => logOut(e) }>Выйти из записи</button>
      </div>  
      <div className='mt-3'>
        <form action="">
          <div className='flex flex-col gap-1'>
            <PasswordChange/>
            <AvatarChange/>
          </div>
        </form>
      </div>
    </div>
  )
}
