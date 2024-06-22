import React, { useState } from "react";
import { Table, Pagination } from "@mantine/core";
import { getAverageDataByCrop } from "../helper/utils";

const TableByCrop = () => {
  const data = getAverageDataByCrop();
  const rowsPerPage = 10;
  const [activePage, setActivePage] = useState(1);

  const startIndex = (activePage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
      <Table
        withColumnBorders
        withTableBorder
        withRowBorders
        striped
        highlightOnHover
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ textAlign: "center" }}>Crop</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>
              Average Yield (Kg/Ha)
            </Table.Th>
            <Table.Th style={{ textAlign: "center" }}>
              Average Cultivation Area (Ha)
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedData?.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td style={{ textAlign: "center" }}>{item.Crop}</Table.Td>
              <Table.Td style={{ textAlign: "center" }}>
                {item.AverageYield}
              </Table.Td>
              <Table.Td style={{ textAlign: "center" }}>
                {item.AverageArea}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <Pagination
          page={activePage}
          onChange={setActivePage}
          total={Math.ceil(data.length / rowsPerPage)}
        />
      </div>
    </>
  );
};

export default TableByCrop;
