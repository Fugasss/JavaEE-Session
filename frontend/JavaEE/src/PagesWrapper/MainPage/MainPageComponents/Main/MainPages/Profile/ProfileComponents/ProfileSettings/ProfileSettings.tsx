import PasswordChange from './PasswordChange'
import AvatarChange from './AvatarChange'

export default function ProfileSettings() {
  return (
    <div className='flex flex-col bg-passive p-4'>
      <img className="w-1/2" src="https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13" alt="" />
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
