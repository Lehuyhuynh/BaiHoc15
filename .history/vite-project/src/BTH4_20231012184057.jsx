import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  address: yup.string().required("address is required"),
  phone: yup.number(),
  email: yup.string().required("Email is required").email("Email is invalid"),
});
export default function BT1() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
      phone: 0,
      email: "",

      soreThroat: false,
      cough: false,
      fever: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmitFormCallback = (values) => {
    console.log("values", values);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmitFormCallback)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <div>
              <input {...field} type="text" placeholder="nhập ten" />
              {errors["name"] && <p>{errors.name.message}</p>}
            </div>
          )}
        ></Controller>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <div>
              <input {...field} type="text" placeholder="nhập dia chi" />
              {errors["address"] && <p>{errors.address.message}</p>}
            </div>
          )}
        ></Controller>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div>
              <input {...field} type="text" placeholder="nhập so dien thoai" />
              {errors["phone"] && <p>{errors.phone.message}</p>}
            </div>
          )}
        ></Controller>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <input {...field} type="email" placeholder="nhập email" />
              {errors["email"] && <p>{errors.email.message}</p>}
            </div>
          )}
        ></Controller>

        <label htmlFor="">
          <div>
            <Controller
              name="cough"
              control={control}
              render={({ field }) => (
                <div>
                  <input {...field} type="checkbox" />
                  ho
                </div>
              )}
            ></Controller>

            <Controller
              name="fever"
              control={control}
              render={({ field }) => (
                <div>
                  <input {...field} type="checkbox" />
                  sot
                </div>
              )}
            ></Controller>

            <Controller
              name="soreThroat"
              control={control}
              render={({ field }) => (
                <div>
                  <input {...field} type="checkbox" />
                  dau hong
                </div>
              )}
            ></Controller>
          </div>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
