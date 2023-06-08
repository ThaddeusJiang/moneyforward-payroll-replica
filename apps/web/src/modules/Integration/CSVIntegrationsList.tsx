import { MockIntegrations } from "../../data/mock/MockIntegrations";

interface Integration {
  img: string;
  name: string;
  integrationURL: string;
}

type CSVIntegrationCardProps = {
  integration: Integration;
};

const CSVIntegrationCard = ({ integration }: CSVIntegrationCardProps) => {
  return (
    <table className="table w-full border">
      <thead>
        <tr>
          <th></th>
          <th>サービス名/連携会社名 </th>
          <th>設定方法 </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={integration.img} alt={integration.name} />
          </td>
          <td>{integration.name}</td>
          <td>
            <a href={integration.integrationURL}>ガイドはこちら</a>
          </td>
          <td>
            <a href="#">サービスへ</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const CSVIntegrationsList = () => {
  const integrations = MockIntegrations.items;
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="py-2">CSV連携</h2>
      </div>

      <section className="space-y-4">
        {integrations.map((integration) => (
          <CSVIntegrationCard
            key={integration.name}
            integration={integration}
          />
        ))}
      </section>
    </section>
  );
};

export default CSVIntegrationsList;
