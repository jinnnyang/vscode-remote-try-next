/// <reference types="types" />

import { ReactNode } from 'react'


export interface LayoutProps<T> {
  props: T
  children: ReactNode
}

