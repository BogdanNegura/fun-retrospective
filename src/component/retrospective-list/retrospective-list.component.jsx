import { Fab } from "@material-ui/core"
import React, { Fragment } from "react"
import * as RLSTYLE from "./retrospective-list.style"

export const RetrospectiveList = ({ list, directAction }) => (
  <RLSTYLE.Wrapper>
    {list.map(({ id, retrospectName }) => (
      <Fragment key={id}>
        <div>{retrospectName}</div>
        <RLSTYLE.ActionWrapper>
          <Fab
            variant="round"
            color="secondary"
            size="small"
            onClick={() => directAction('select', id)}
          >
            🚀
          </Fab>
          
          <Fab
            variant="round"
            color="secondary"
            size="small"
            onClick={() => directAction('delete', id)}
          >
            &times;
          </Fab>
        </RLSTYLE.ActionWrapper>
      </Fragment>
    ))}
  </RLSTYLE.Wrapper>
)