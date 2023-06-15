/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import { GatsbyBrowser } from "gatsby"
import React, { ReactNode } from "react"
import ErrorBoundary from "./src/components/ErrorBoundary";

const wrappedRootElement = (element: ReactNode) => {
  return (
    <ErrorBoundary>
      {element}
    </ErrorBoundary>
  )
}

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return wrappedRootElement(element)
}
