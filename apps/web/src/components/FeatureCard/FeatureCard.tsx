type Props = {
  title: string;
  description: string;
  description2?: string;
  icon?: string;
};

const FeatureCard = ({ title, description, icon, ...props }: Props) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-medium text-gray-700">{title}</h2>
      <p className="text-base text-gray-600">{description}</p>
      <p className="text-base text-gray-600">{props.description2}</p>
    </div>
  );
};

export default FeatureCard;
