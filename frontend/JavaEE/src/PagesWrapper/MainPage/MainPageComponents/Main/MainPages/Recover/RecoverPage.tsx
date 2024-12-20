import React, { useEffect } from 'react'
import { useModal } from '../../../../../../Hooks/contextHooks'
import EModalContent from '../../../../../../Modal/EModalContent'

export default function RecoverPage() {
    const setModal = useModal()

    useEffect(()=>{
        setModal({type : EModalContent.RECOVER_CONFIRM , data:"" })
    } ,[])

  return (
    <div></div>
  )
}
