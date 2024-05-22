import React from "react"
import "./style.css"
import { useForm } from "react-hook-form"

interface Props {
  setFilterValue: (filterValue: string) => void
}

export const Filter: React.FC<Props> = ({setFilterValue}) => {
  const {
    register,
  } = useForm()

  const handleChange = (e: any) => {
    setFilterValue(e.currentTarget.value)
  }

  return (
    <div className="filter">
      <input
        className="filter__input"
        type="text"
        placeholder="Filter..."
        {...register("filter", {
          onChange: e => handleChange(e),
        })}
      />
    </div>
  )
}
