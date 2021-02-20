import React, { useEffect, useState } from "react"
import { Button } from "@material-ui/core"
import { db } from "../../config/firebase"
import { StyledDeleteButton } from "./dashboard.style"

export const Dashboard = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    db.collection("ticket").onSnapshot(snapShot => {
      setList(snapShot.docs.map(test => ({
        id: test.id,
        ...test.data()
      })))
      // console.log(snapShot.size);
    })
  }, [])

  const handleClick = () => {
    console.log("click aici");
    db.collection("ticket").add({
      name: "Bogdan Negura",
      age: 45,
      positions: [
        "Starter Developer",
        "Junior Developer",
        "Mid Developer",
        "Senior Developer",
        "Video Editor",
        "Photo Editor"
      ].sort(() => Math.random() - 0.5).slice(0, Math.round(Math.random() * 7))
    })
  }

  const deleteFromFirebase = id => {
    console.log(`Delete this item with the id: ${id}`);
    db.collection("ticket").doc(id).delete()
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="contained" color="secondary" onClick={handleClick}>Add</Button>
      <ul>
        {list.map(({ age, name, positions, id }) => {
          return (
            <li>
              <div>{name}</div>
              <div>{age}</div>
              <div>
                <div>{positions.map(position => <span>{position}</span>)}</div>
                <StyledDeleteButton onClick={() => deleteFromFirebase(id)} className="button__delete">&times;</StyledDeleteButton>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}