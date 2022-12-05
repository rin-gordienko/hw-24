import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required("This field is required!")
    .min(3, "Should be at least 3 characters"),
  lastName: yup
    .string()
    .trim()
    .required("This field is required!")
    .min(3, "Should be at least 3 characters"),
  country: yup.string().required("Select a country"),
});

const PersonalInfoYupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="title">Personal Information</h3>
      <label className="label">
        First Name <input className="input" type="text" {...register("firstName")}></input>
        {errors.firstName && (
          <div className="error">{errors.firstName.message}</div>
        )}
      </label>
      <label className="label">
        Last Name <input className="input" type="text" {...register("lastName")}></input>
        {errors.lastName && (
          <div className="error">{errors.lastName.message}</div>
        )}
      </label>
      <label className="label select-display">
        Select a country{" "}
        <select className="select" {...register("country", { required: true })}>
          <option value="ua">Ukraine</option>
          <option value="usa">The United States</option>
          <option value="ko">South Korea</option>
          <option value="au">Australia</option>
        </select>
      </label>
      <button className="submit" type="submit">Submit</button>
    </form>
  );
};

export default PersonalInfoYupForm;
