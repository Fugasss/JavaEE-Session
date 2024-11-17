import React, { useEffect } from 'react'
import { useModal } from '../../../../../../Hooks/contextHooks'
import EModalContent from '../../../../../../Modal/EModalContent'

export default function RecoverPage() {
    const setModal = useModal()

    useEffect(()=>{
        setModal(EModalContent.RECOVER_CONFIRM)
    } ,[])

  return (
    <div></div>
  )
}
