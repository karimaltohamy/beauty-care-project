import React, { useEffect, useState } from "react";
import "./mainTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const RootContainer = styled("div")({
  "& .MuiDataGrid-columnsContainer": {
    direction: "ltr",
  },
  "& .MuiDataGrid-virtualScroller": {
    direction: "ltr",
  },
});

const MainTable = ({
  columns,
  rows,
  setSelectedRowData,
  setPerPage,
  perPage,
  currentPage,
  setCurrentPage,
  lastPage,
  rowId,
  showToolbar = true,
  uniqueIdentifier,
  normalPagination = true,
  needBoxSelection = true,
}) => {
  const direction = localStorage.getItem("direction");
  const localStorageKey = `${uniqueIdentifier}_columns`;
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const [siblingCount, setSiblingCount] = useState(0);
  const totalPages = Array.from({ length: lastPage }, (_, i) => i + 1).splice(
    siblingCount,
    5
  );

  useEffect(() => {
    const savedColumnVisibilityModel = localStorage.getItem(localStorageKey);
    if (savedColumnVisibilityModel && uniqueIdentifier) {
      setColumnVisibilityModel(JSON.parse(savedColumnVisibilityModel));
    }
  }, [localStorageKey]);

  const handleColumnChange = (newModel) => {
    // Update the columnVisibilityModel state variable
    setColumnVisibilityModel(newModel);
    // Save it to localStorage
    uniqueIdentifier &&
      localStorage.setItem(localStorageKey, JSON.stringify(newModel));
  };

  // handle select row
  const handleRowSelectionModelChange = (newRowSelectionModel) => {
    setSelectedRowData(newRowSelectionModel);
  };

  const handleRowClick = (params) => {};

  return (
    <div className={`container_table ${direction == "rtl" ? "ar" : ""}`}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) =>
          typeof rowId == "object" ? row[rowId].id : rowId ? row[rowId] : row.id
        }
        checkboxSelection={needBoxSelection}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        noRowsOverlay={<div>No rows found!</div>}
        loading={false}
        slots={showToolbar ? { toolbar: GridToolbar } : {}}
        onColumnVisibilityModelChange={handleColumnChange}
        columnVisibilityModel={columnVisibilityModel}
        onRowClick={handleRowClick}
      />
      {normalPagination ? (
        <div className="pagination">
          <div className="page_count_component">
            <div
              className={`page_item ${perPage == 5 && "active"}`}
              onClick={() => {
                setPerPage(5);
                localStorage.setItem("perPageCount", 5);
              }}
            >
              5
            </div>
            <div
              className={`page_item ${perPage == 10 && "active"}`}
              onClick={() => {
                setPerPage(10);
                localStorage.setItem("perPageCount", 10);
              }}
            >
              10
            </div>
            <div
              className={`page_item ${perPage == 50 && "active"}`}
              onClick={() => {
                setPerPage(50);
                localStorage.setItem("perPageCount", 50);
              }}
            >
              50
            </div>
            <div
              className={`page_item ${perPage == 100 && "active"}`}
              onClick={() => setPerPage(100)}
            >
              100
            </div>
            <div
              className={`page_item ${perPage == 500 && "active"}`}
              onClick={() => {
                setPerPage(500);
                localStorage.setItem("perPageCount", 500);
              }}
            >
              500
            </div>
          </div>
          <div className="per_page_component">
            <div
              className="page_item"
              onClick={() =>
                setSiblingCount(siblingCount - 5 <= 0 && siblingCount - 5)
              }
            >
              <i className="fa-solid fa-angles-left"></i>
            </div>
            <div
              className="page_item"
              onClick={() =>
                setCurrentPage(currentPage - 1 >= 1 && currentPage - 1)
              }
            >
              <i className="fa-solid fa-angle-left"></i>
            </div>
            {totalPages &&
              totalPages.map((item, i) => {
                return (
                  <div
                    className={`page_item ${currentPage == item && "active"}`}
                    onClick={() => setCurrentPage(item)}
                    key={i}
                  >
                    {item}
                  </div>
                );
              })}
            <div
              className="page_item"
              onClick={() =>
                setCurrentPage(currentPage + 1 <= lastPage && currentPage + 1)
              }
            >
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div
              className="page_item"
              onClick={() =>
                setSiblingCount(siblingCount + 5 < lastPage && siblingCount + 5)
              }
            >
              <i className="fa-solid fa-angles-right"></i>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer"></div>
      )}
    </div>
  );
};

export default MainTable;
