import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

type UseFindParam = {
  param: string
  value: string
}

export function useFindParam(
  { param, value }: UseFindParam,
  dependencies: unknown[]
): boolean {
  const [isParamSet, setIsParamSet] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)

    const isEditParamSet = params.get(param) === value
    setIsParamSet(isEditParamSet)
  }, [...dependencies])

  return isParamSet
}
