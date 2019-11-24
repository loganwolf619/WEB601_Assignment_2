import React from 'react'
import './PageTitle.css'

export default function Title({name,title}) {
    return (
        <div className="title-container">
          <div className="text-title">
              <h1 className="text-capitalize font-weight-bold">
                 <strong className="text-red">{name} </strong>
                  <strong className="text-bright">{title}</strong>
              </h1>
          </div>
        </div>
    )
}
