import React, { useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import { db } from "../../config/firebase"

export const Room = () => {
  const { pathname } = useLocation()
  const [retrospective, setRetrospective] = useState({})

  const id = pathname.split('/').pop()

  useEffect(() => {
    const getResult = async() => {
      const result = await db
        .collection('ticket')
        .doc(id)
        .get()
        
      setRetrospective({
        id: result.id,
        ...result.data()
      })
    }
    getResult()
  }, [])

  return (
    <div>
      <h1>{retrospective.retrospectiveName}</h1>
      <h1>red</h1>
    </div>
  )
}