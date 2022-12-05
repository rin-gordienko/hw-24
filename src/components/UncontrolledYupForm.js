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

const UncontrolledYupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name <input type="text" {...register("firstName")}></input>
        {errors.firstName && (
          <div className="error">{errors.firstName.message}</div>
        )}
      </label>
      <label>
        Last Name <input type="text" {...register("lastName")}></input>
        {errors.lastName && (
          <div className="error">{errors.lastName.message}</div>
        )}
      </label>
      <label>
        Select a country{" "}
        <select {...register("country", { required: true })}>
          <option value="ua">Ukraine</option>
          <option value="usa">The United States</option>
          <option value="ko">South Korea</option>
          <option value="au">Australia</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledYupForm;
