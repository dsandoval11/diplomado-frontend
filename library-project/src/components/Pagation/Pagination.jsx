import TablePagination from "@mui/material/TablePagination";

export const Pagination = ({
  page,
  count,
  rowsPerPage,
  changePage,
  changeRowsPerPage,
}) => {
  const handleChangePage = (event, newPage) => {
    changePage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const rows = parseInt(event.target.value, 10);
    changeRowsPerPage(rows);
  };

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
