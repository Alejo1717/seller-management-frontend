import React from 'react'

interface Props {
    title: string
}

const TitlePage = (props: Props) => {
  return (
    <h2 className="section-title">{props.title}</h2>
  )
}

export default TitlePage;