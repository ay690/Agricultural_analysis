import React, { useState } from "react";
import { Table, Pagination } from "@mantine/core";
import { getAggregatedDataByYear } from "../helper/utils";

const TableByYear = () => {
  const data = getAggregatedDataByYear();
  const rowsPerPage = 10; // Number of rows per page
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
          {paginatedData?.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td style={{ textAlign: "center" }}>{item.Year}</Table.Td>
              <Table.Td style={{ textAlign: "center" }}>
                {item.CropMax}
              </Table.Td>
              <Table.Td style={{ textAlign: "center" }}>
                {item.CropMin}
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

export default TableByYear;
