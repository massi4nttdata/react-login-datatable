import React, { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { DataTable } from "primereact/datatable";
import { NodeService } from "./service/NodeService";
import { itemBody } from "./types/datatableType";
import { Column } from "primereact/column";

export function DataTableExample() {
  const [datalist, setDatalist] = useState<Array<itemBody>>([]);
  const nodeService = new NodeService();
  useEffect(() => {
    nodeService.getData().then((data) => {
      console.log(data);
      setDatalist(data);
    });
  }, []);

  return (
    <div>
      <DataTable value={datalist}>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="price" header="Price"></Column>
      </DataTable>
    </div>
  );
}
