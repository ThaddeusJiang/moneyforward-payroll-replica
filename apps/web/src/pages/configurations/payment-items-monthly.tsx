import PaymentItemsMonthlyForm from "../../modules/configurations/PaymentItemsForm";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  getPaymentItems,
  updatePaymentItemSettings,
} from "../../apis/PaymentItem";
import toast from "react-hot-toast";
import Header from "../../components/Layout/Header";
import MainContent from "../../components/Layout/MainContent";
import ConfigurationTabs from "../../modules/configurations/ConfigurationTabs";
import PaymentItemTypeSwitch from "../../modules/configurations/PaymentItemTypeSwith";

const Page = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["payment-item-settings", "monthly"],
    queryFn: () => getPaymentItems("monthly"),
  });

  const mutation = useMutation({
    mutationFn: updatePaymentItemSettings,
    onSuccess: () => {
      toast.success("保存しました");
      queryClient.invalidateQueries(["payment-item-settings", "monthly"]);
    },
  });

  const onSave = (data) => {
    mutation.mutate({
      type: "monthly",
      data,
    });
  };

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError) return <div>Error</div>;

  return (
    <>
      <Header title="支給項目設定" icon="📝" />
      <MainContent>
        <ConfigurationTabs />
        <PaymentItemTypeSwitch active="monthly" />
        <PaymentItemsMonthlyForm data={query.data?.item} onSave={onSave} />
      </MainContent>
    </>
  );
};

export default Page;
