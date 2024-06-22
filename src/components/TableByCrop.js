import React from "react";
import { Table } from "@mantine/core";
import { getAverageDataByCrop } from "../helper/utils";

const TableByCrop = () => {
  const data = getAverageDataByCrop();

  return (
    <Table
      withColumnBorders
      withTableBorder
      withRowBorders
      striped
      highlightOnHover
    >
      <Table.Thead >
        <Table.Tr>
          <Table.Th style={{textAlign: "center"}}>Crop</Table.Th>
          <Table.Th style={{textAlign: "center"}}>Average Yield (Kg/Ha)</Table.Th>
          <Table.Th style={{textAlign: "center"}}>Average Cultivation Area (Ha)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data?.map((item, index) => (
          <Table.Tr key={index}>
            <Table.Td style={{textAlign: "center"}}>{item.Crop}</Table.Td>
            <Table.Td style={{textAlign: "center"}}>{item.AverageYield}</Table.Td>
            <Table.Td style={{textAlign: "center"}}>{item.AverageArea}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TableByCrop;
