import React, { useEffect } from "react"
import "./style.css"
import { useForm } from "react-hook-form"

interface Props {
  handleSort: (sortBy:string) => void
  sortValue: string
}

export const Sort: React.FC<Props> = ({handleSort, sortValue}) => {
  const {
    register,
    watch,
  } = useForm({
    defaultValues: {
      sort: "",
    },})

  const watchSort = watch("sort")

  useEffect(() => {
    const handleChange = () => {
      handleSort(watchSort)
    }
    handleChange()
  }, [watchSort]);


  return (
    <div className="sort">
      <select className="sort__select"
        {...register("sort")}
        value={sortValue}
      >
        <option value="" disabled>Sort by</option>
        <option value="date">Date</option>
        <option value="title">Title</option>
        <option value="organizer">Organizer</option>
      </select>
    </div>
  )
}
