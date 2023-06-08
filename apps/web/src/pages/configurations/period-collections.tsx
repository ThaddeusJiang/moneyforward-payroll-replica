import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  getSettingPeriodCollections,
  updateSettingPeriodCollections,
} from "../../apis/SettingPeriodCollection";
import SettingPeriodCollectionsForm from "../../modules/SettingPeriodCollections/SettingPeriodCollectionsForm";

const Page = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["settings-period-collections"],
    queryFn: getSettingPeriodCollections,
  });

  const mutation = useMutation({
    mutationFn: updateSettingPeriodCollections,
    onSuccess: () => {
      toast.success("保存しました");
      queryClient.invalidateQueries(["settings-period-collections"]);
    },
  });

  const onSave = (data) => {
    mutation.mutate(data);
  };

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError) return <div>Error</div>;

  return (
    <SettingPeriodCollectionsForm
      data={{
        items: query.data?.items || [],
      }}
      onSave={onSave}
    />
  );
};

export default Page;
