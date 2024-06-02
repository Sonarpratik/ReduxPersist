import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useCustom = () => {

    const dispatch =useDispatch()
    const navigate = useNavigate()
  return [navigate,dispatch];
}

export default useCustom
