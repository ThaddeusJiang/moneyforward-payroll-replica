// TODO: use npm
const DataTable = ({ data, columns, ...props }) => {
  return (
    <table className="table border w-full">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>月次</td>
            <td>末日</td>
            <td>翌月末日</td>
            <td>締め月次</td>
            <td>表示する</td>
            <td>有効</td>
            <td>0</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
