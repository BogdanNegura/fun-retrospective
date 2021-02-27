import React, { useEffect, useState } from "react"
import { Button, TextField } from "@material-ui/core"
import { navigate } from "@reach/router"
import { db, ts } from "../../config/firebase"
import * as DASHSTYLE from "./dashboard.style"
import { RetrospectiveList } from "../retrospective-list/retrospective-list.component"

export const Dashboard = () => {
  const [list, setList] = useState([])
  const [retrospectName, setRetrospectName] = useState("")

  useEffect(() => {
    db
      .collection("ticket")
      .orderBy("ts", "asc")
      .onSnapshot(snapShot => {
        setList(snapShot.docs.map(retrospective => ({
          id: retrospective.id,
          ...retrospective.data()
        })))
    })
  }, [])
  
  const directAction = (action, id) => {
    switch (action) {
      case 'delete':
        deleteFromFirebase(id)
        break;
      case 'select':
        getTheItem(id)
        break;
      default:
        console.log("Actions");
    }
  }

  const getTheItem = id => {
    navigate(`/room/${id}`)
  }

  const deleteFromFirebase = id => {
    console.log(`Delete this item with the id: ${id}`);
    db.collection("ticket").doc(id).delete()
  }

  const handleSubmit = e => {
    const { value } = e.target
    setRetrospectName(value)
  }

  const handleClickTextField = e => {
    e.preventDefault()
    if (retrospectName.length > 3) {
      db
        .collection("ticket")
        .add({
          retrospectName,
          ts
        })
      
      setRetrospectName('')
    }
  }

  console.log(list);
 
  return (
    <form onSubmit={handleClickTextField}>
      <DASHSTYLE.StyledFormWrapper>
        <h1>Dashboard</h1>
        <div>
          <TextField 
            variant="outlined" 
            color="primary" 
            label="Retrospective name"
            value={retrospectName}
            onChange={handleSubmit}
          />
        </div>
        <Button
          variant="contained" 
          color="secondary" 
          type="submit"
        >
          Add
        </Button>
        <RetrospectiveList directAction={directAction} list={list}/>
      </DASHSTYLE.StyledFormWrapper>
    </form>
  )
}