import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import { get } from "lodash";

import { v4 as uuidv4 } from "uuid";

const defaultItem = {
  name: "",
  nextMonth: false,
  payDate: 1,
  periodDate: 1,
  socialInsurance: 1,
  valid: true,
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

const SettingPeriodCollectionsForm = ({ data, onSave }) => {
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
    const id = uuidv4();
    append({
      id: `PeriodCollection:${id}`,
      ...defaultItem,
    });
  };

  const removeItem = (index: number) => {
    remove(index);
  };

  return (
    <div>
      <h1 className=" text-2xl">締め日グループ設定</h1>
      <section className="container">
        {/* <FormProvider {...methods}> */}
        <form className="form-control" onSubmit={handleSubmit(onSave)}>
          <table className=" table">
            <thead>
              <tr>
                <th>名称</th>
                <th>締め日</th>
                <th>支給日</th>
                <th>社会保険料徴収方法</th>
                <th>最終給与の翌月に退職者を表示する</th>
                <th>有効</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={field.id}>
                  <td className="flex items-center">
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
                    <select
                      className="select select-bordered"
                      {...register(`items.${index}.periodDate`)}
                    >
                      <option value={1}>5日</option>
                      <option value={2}>10日</option>
                      <option value={3}>15日</option>
                      <option value={4}>20日</option>
                      <option value={5}>25日</option>
                      <option value={6}>末日</option>
                    </select>
                  </td>
                  <td>
                    <select
                      id=""
                      className="select select-bordered"
                      {...register(`items.${index}.payDate`)}
                    >
                      <option value={1}>当月5日</option>
                      <option value={2}>当月10日</option>
                      <option value={3}>当月15日</option>
                      <option value={4}>当月20日</option>
                      <option value={5}>当月25日</option>
                      <option value={6}>当月末日</option>
                      <option value={7}>翌月5日</option>
                      <option value={8}>翌月10日</option>
                      <option value={9}>翌月15日</option>
                      <option value={10}>翌月20日</option>
                      <option value={11}>翌月25日</option>
                      <option value={12}>翌月末日</option>
                      <option value={13}>翌々月5日</option>
                      <option value={14}>翌々月10日</option>
                      <option value={15}>翌々月15日</option>
                      <option value={16}>翌々月20日</option>
                      <option value={17}>翌々月25日</option>
                      <option value={18}>翌々月末日</option>
                    </select>
                  </td>
                  <td>
                    <div>
                      <label className="label justify-start cursor-pointer">
                        <input
                          type="radio"
                          {...register(`items.${index}.socialInsurance`)}
                          className="radio"
                          value={1}
                        />
                        <span className="">当月徴収</span>
                      </label>
                      <label className="label !justify-start cursor-pointer">
                        <input
                          type="radio"
                          {...register(`items.${index}.socialInsurance`)}
                          className="radio"
                          value={2}
                        />
                        <span className="">翌月徴収</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input
                        type="checkbox"
                        id=""
                        className="checkbox"
                        {...register(`items.${index}.nextMonth`)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <input
                        type="checkbox"
                        id=""
                        className="checkbox"
                        {...register(`items.${index}.valid`)}
                      />
                    </div>
                  </td>
                  <td>
                    <button className="btn" onClick={() => removeItem(index)}>
                      remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <button
                    type="button"
                    onClick={addItem}
                    className=" btn btn-outline w-auto"
                  >
                    項目追加
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn ">
            Submit
          </button>
        </form>
        {/* </FormProvider> */}
        <DevTool control={control} /> {/* set up the dev tool */}
      </section>
    </div>
  );
};

export default SettingPeriodCollectionsForm;
