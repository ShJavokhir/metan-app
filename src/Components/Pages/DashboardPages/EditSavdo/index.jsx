import React from 'react';
import DashboardLayout from "../../../Layouts/Dashboard";
import EditTable from "./EditTable";

const EditSavdo = ({outletId}) => {
  return (
    <DashboardLayout>
      <EditTable id={outletId}/>
    </DashboardLayout>
  );
};

export default EditSavdo;