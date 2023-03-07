import { Store } from "@reduxjs/toolkit"
import React from "react"
import { Provider } from "react-redux"
type ProviderWrapperProps = {
  children: React.ReactNode
  store: Store
}
export const ProviderWrapper: React.FC<ProviderWrapperProps> = ({
  children,
  store,
}) => <Provider store={store}>{children}</Provider>
