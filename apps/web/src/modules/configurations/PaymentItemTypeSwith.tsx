import Link from "next/link";
import { PaymentItemType } from "../../apis/PaymentItem";
import classNames from "classnames";

type Props = {
  active: PaymentItemType;
};

const PaymentItemTypeSwitch = ({ active }: Props) => {
  return (
    <ul className="flex space-x-4">
      <li>
        <Link
          href={"/configurations/payment-items-monthly"}
          className={classNames("btn ", {
            "btn-outline": active !== "monthly",
          })}
        >
          月給
        </Link>
      </li>
      <li>
        <Link
          href={"/configurations/payment-items-hourly"}
          className={classNames("btn ", {
            "btn-outline": active !== "hourly",
          })}
        >
          時給
        </Link>
      </li>
      <li>
        <Link
          href={"/configurations/payment-items-daily"}
          className={classNames("btn ", {
            "btn-outline": active !== "daily",
          })}
        >
          日給
        </Link>
      </li>
      <li>
        <Link
          href={"/configurations/payment-items-bonus"}
          className={classNames("btn ", {
            "btn-outline": active !== "bonus",
          })}
        >
          賞与
        </Link>
      </li>
    </ul>
  );
};

export default PaymentItemTypeSwitch;
