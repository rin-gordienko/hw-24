import { useForm } from "react-hook-form";

const UncontrolledForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name{" "}
        <input
          type="text"
          {...register("firstName", {
            required: "First name is required",
            minLength: {
              value: 3,
              message: "Min length must be not less than 3 characters",
            },
          })}
        ></input>
        {errors.firstName && (
          <div className="error">{errors.firstName.message}</div>
        )}
      </label>
      <label>
        Last Name{" "}
        <input
          type="text"
          {...register("lastName", {
            required: "Last name is required",
            minLength: {
              value: 3,
              message: "Min length must be not less than 3 characters",
            },
          })}
        ></input>
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

export default UncontrolledForm;
