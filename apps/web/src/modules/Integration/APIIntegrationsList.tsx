import { MockIntegrations } from "../../data/mock/MockIntegrations";

interface Integration {
  img: string;
  name: string;
  integrationURL: string;
}

type IntegrationCardProps = {
  integration: Integration;
};

const IntegrationCard = ({ integration }: IntegrationCardProps) => {
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
            <a href={integration.integrationURL}>
              ガイドはこちら（連携項目一覧も含む）
            </a>
          </td>
          <td>
            <button className="btn">連携する</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const APIIntegrationsList = () => {
  const integrations = MockIntegrations.items;
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="py-2">API連携</h2>
      </div>

      <section className="space-y-4">
        {integrations.map((integration) => (
          <IntegrationCard key={integration.name} integration={integration} />
        ))}
      </section>
    </section>
  );
};

export default APIIntegrationsList;
