/** @jsx jsx */
import React from 'react'
import { Link,  Button, jsx } from "theme-ui"

type CTAProps = {
  text?: string | any
  link?: string | any
  type: string | any
  children?: React.ReactNode | any
  icon?: React.ReactNode | any
  onClick: any
}

const CTA = ({ text, link, type, children, icon, onClick }:CTAProps) => {
  return (
    <>
      { type === 'button' ? (
        <Button variant="buttons.primary" onClick={onClick}>{icon} {text ? text : children}</Button>
      ) : (
        <Link variant="links.primary" href={link}>{text ? text : children}</Link>
      )}

    </>
  )
}

export default CTA
