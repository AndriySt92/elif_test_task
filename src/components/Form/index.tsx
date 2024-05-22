import React from "react"
import { Button } from "../Button"
import "./style.css"
import { useForm } from "react-hook-form"
import { RegisterData } from "../../interfaces/participantInterfaces"
import { useRegisterMutation } from "../../redux/eventApi"
import { useNavigate, useParams } from "react-router-dom"

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    defaultValues: {
      fullName: "",
      email: "",
      birth_date: "",
      source: "social media",
    },
    mode: "onChange",
    reValidateMode: "onBlur",
  })
  const { eventId } = useParams()
  const navigate = useNavigate()
  const [registerParticipant, { isLoading, error }] = useRegisterMutation()

  const onSubmit = async (data: RegisterData) => {
    await registerParticipant({ body: data, eventId: eventId as string })
    navigate("/")
  }

  return (
    <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="form__title">Event registration</h4>
      <label htmlFor="fullName">Full name</label>
      <input
        className={`${errors.fullName ? "input__error" : ""} form__input`}
        type="text"
        placeholder="Fullname"
        {...register("fullName", {
          required: "Full name is required",
          minLength: {
            value: 3,
            message: "Full name length must be at least 3 characters",
          },
          maxLength: {
            value: 100,
            message: "Full name length must be no more than 100 characters",
          },
        })}
        id="fullName"
      />

      <label htmlFor="email">Email</label>
      <input
        className={`${errors.email ? "input__error" : ""} form__input`}
        type="text"
        placeholder="Email"
        {...register("email", {
          required: "Email address is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        id="email"
      />

      <label htmlFor="birthday">Birthday</label>
      <input
        className={`${errors.birth_date ? "input__error" : ""} form__input`}
        type="Date"
        placeholder="Birthday"
        {...register("birth_date", {
          required: "Birthday is required",
        })}
        id="birthday"
        max={`${new Date().toISOString().split("T")[0]}`}
      />

      <h4 className="radio-group__title">How did you hear about this event?</h4>
      <div className="radio-group__buttons">
        <label htmlFor="social media">
          <input
            {...register("source")}
            type="radio"
            value="social media"
            id="social media"
          />
          Social media
        </label>
        <label htmlFor="friends">
          <input
            {...register("source")}
            type="radio"
            value="friends"
            id="friends"
          />
          Friends
        </label>
        <label htmlFor="found myself">
          <input
            {...register("source")}
            type="radio"
            value="found myself"
            id="found myself"
          />
          Found myself
        </label>
      </div>

      {errors.email && (
        <span className="form__error">{errors.email.message}</span>
      )}
      {errors.fullName && (
        <span className="form__error">{errors.fullName.message}</span>
      )}
      {error && <span className="form__error">Register error</span>}

      <Button
        disabled={Object.keys(errors).length > 0 || isLoading}
        style={{ width: "100%", marginTop: "20px" }}
        withBackground
      >
        Register
      </Button>
    </form>
  )
}
