import { ReactNode } from "react"

type ProjetType = {
  id: string
  title:string
  thumbnail:string
  image:string[]
  client:string
  location:string
  commenced:string
  completion: string
  description: string
  solution: string
  impact: string
  createdAt: Date
  updatedAt: Date
  category: CategoryType
}

type CategoryType = {
    id: string,
    name: string,
    icon: ReactNode,
    color: string,
    activeColor: string,
}

export type { ProjetType, CategoryType } 