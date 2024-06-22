import React from "react";
import { Table } from "@mantine/core";
import { getAggregatedDataByYear } from "../helper/utils";

const TableByYear = () => {
  const data = getAggregatedDataByYear();

  return (
    <Table
      withColumnBorders
      withTableBorder
      withRowBorders
      striped
      highlightOnHover
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{ textAlign: "center" }}>Year</Table.Th>
          <Table.Th style={{ textAlign: "center" }}>
            Crop with Maximum Production
          </Table.Th>
          <Table.Th style={{ textAlign: "center" }}>
            Crop with Minimum Production
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data?.map((item, index) => (
          <Table.Tr key={index}>
            <Table.Td style={{ textAlign: "center" }}>{item.Year}</Table.Td>
            <Table.Td style={{ textAlign: "center" }}>{item.CropMax}</Table.Td>
            <Table.Td style={{ textAlign: "center" }}>{item.CropMin}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TableByYear;
