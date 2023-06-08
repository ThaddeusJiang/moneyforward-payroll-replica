import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import { get } from "lodash";

const defaultItem = {
  used: true,
  name: "",
  calculate: {
    type: "事業員情報で設定",
    divide: 1,
    multiply: 1,
    time: 1,
  },
  options: {},
};

const schema = yup.object().shape({
  items: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required(),
      })
    )
    .min(1)
    .required(),
});

const PaymentItemsForm = ({ data, onSave }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data,
    resolver: yupResolver(schema),
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "items", // unique name for your Field Array
    }
  );

  const addItem = () => {
    append(defaultItem);
  };

  return (
    <div>
      <section className="container">
        {/* <FormProvider {...methods}> */}
        <form className="form-control" onSubmit={handleSubmit(onSave)}>
          <table className=" table">
            <thead>
              <tr>
                <th>支給項目</th>
                <th>計算方法</th>
                <th>時間数/日数</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {fields.map((filed, index) => (
                <tr key={index}>
                  <td className="flex items-center">
                    <input
                      type="checkbox"
                      {...register(`items.${index}.used`)}
                      className="checkbox m-2"
                    />
                    <div>
                      <input
                        type="text"
                        {...register(`items.${index}.name`)}
                        className="input input-bordered"
                      />
                      <p className="">
                        {get(errors, `items.${index}.name.message`)}
                      </p>
                    </div>
                  </td>
                  <td>
                    <select className="select select-bordered">
                      <option value="従業員情報で設定">従業員情報で設定</option>
                    </select>
                    <span>➗</span>
                    <select name="" id="" className="select select-bordered">
                      <option value="1">1</option>
                    </select>
                    <span>✖️</span>
                    <input type="number" className="input input-bordered" />
                  </td>
                  <td>
                    <select name="" id="" className="select select-bordered">
                      <option value="1">1</option>
                    </select>
                  </td>
                  <td>
                    <button>詳細設定</button>
                  </td>
                  <td>
                    <button>削除</button>
                  </td>
                </tr>
              ))}
              <tr className="bg-white">
                <td colSpan={6}>
                  <button
                    type="button"
                    onClick={addItem}
                    className=" btn btn-outline w-auto"
                  >
                    追加
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn my-4">
            保存する
          </button>
        </form>
        {/* </FormProvider> */}
        <DevTool control={control} /> {/* set up the dev tool */}
      </section>
    </div>
  );
};

export default PaymentItemsForm;
