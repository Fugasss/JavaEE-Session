import BucketItem from './BucketItem'

export default function Bucket() {
  return (
    <div className='flex flex-col bg-passive p-4 w-full'>
        <div className='flex w-full justify-between  mb-2'>
          <p className='font-bold text-2xl'>Корзина</p>
          <button className='bg-active p-2 px-4'>Заказать все</button>
        </div>
        <ul className='flex flex-col gap-4 overflow-scroll'>
            <BucketItem title='RTX2080' image='https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13' desc='PCI-E Gigabyte GeForce RTX 2080 AORUS 8192MB 256bit GDDR6 [GV-N2080AORUS-8GC] HDMI DP' price='320000' status='OK'/>
            <BucketItem title='RTX2080' image='https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13' desc='PCI-E Gigabyte GeForce RTX 2080 AORUS 8192MB 256bit GDDR6 [GV-N2080AORUS-8GC] HDMI DP' price='320000' status='OK'/>
            <BucketItem title='RTX2080' image='https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13' desc='PCI-E Gigabyte GeForce RTX 2080 AORUS 8192MB 256bit GDDR6 [GV-N2080AORUS-8GC] HDMI DP' price='320000' status='OK'/>
            <BucketItem title='RTX2080' image='https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13' desc='PCI-E Gigabyte GeForce RTX 2080 AORUS 8192MB 256bit GDDR6 [GV-N2080AORUS-8GC] HDMI DP' price='320000' status='OK'/>
            <BucketItem title='RTX2080' image='https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13' desc='PCI-E Gigabyte GeForce RTX 2080 AORUS 8192MB 256bit GDDR6 [GV-N2080AORUS-8GC] HDMI DP' price='320000' status='OK'/>
            <BucketItem title='RTX2080' image='https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13' desc='PCI-E Gigabyte GeForce RTX 2080 AORUS 8192MB 256bit GDDR6 [GV-N2080AORUS-8GC] HDMI DP' price='320000' status='OK'/>
            <BucketItem title='RTX2080' image='https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13' desc='PCI-E Gigabyte GeForce RTX 2080 AORUS 8192MB 256bit GDDR6 [GV-N2080AORUS-8GC] HDMI DP' price='320000' status='OK'/>
            <BucketItem title='RTX2080' image='https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13' desc='PCI-E Gigabyte GeForce RTX 2080 AORUS 8192MB 256bit GDDR6 [GV-N2080AORUS-8GC] HDMI DP' price='320000' status='OK'/>
        </ul>
    </div>
  )
}
