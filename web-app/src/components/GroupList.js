import React from "react";
import MaterialTable from "material-table";

export default function GroupList(props) {
  const [state, setState] = React.useState(props.tableData.groupList);
  React.useEffect(() => {
    setState(prevState => {
      const data = [...prevState.data];
      const newData = props.tableData.groupList;

      data.length = 0;
      for (let index = 0; index < newData.data.length; index++) {
        data.push(newData.data[index]);
      }
      console.log(data);

      return { ...prevState, data };
    });
  }, [props.tableData.groupList.data.length]);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <MaterialTable
        title="Group List"
        columns={state.columns}
        data={state.data}
        options={{ selection: true }}
        actions={[
          {
            tooltip: "Remove All Selected Groups",
            icon: "delete",
            onClick: (evt, dataArray) =>
              setState(prevState => {
                const data = [...prevState.data];
                for (var i = 0; i < dataArray.length; i++) {
                  data.splice(data.indexOf(dataArray[i]), 1);
                }
                return { ...prevState, data };
              })
          }
        ]}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
    </div>
  );
}
