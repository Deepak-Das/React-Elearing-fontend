import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  MRT_Row,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import { TeacherModel } from "../model/TeacherModel";
import { getAllTeacher } from "../service/TeacherService";

import { Box, IconButton, Tooltip } from "@mui/material";

import { EditNote } from "@mui/icons-material";
import { FaUsersViewfinder } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../state/hook";
import { setTeacher } from "../state/slice-creater/editStateSlice";

export const useTeacherList = () => {
  const dispatch = useAppDispatch();

  const columns = useMemo<MRT_ColumnDef<TeacherModel>[]>(
    () => [
      {
        accessorKey: "teacherId",
        header: "Teacher ID",
        enableEditing: false,
        size: 150,
      },
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "doj",
        header: "DOJ",
        size: 200,
      },
      {
        accessorKey: "qualification",
        header: "Qualification",
        size: 150,
      },
    ],
    []
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["AllTeacher"],
    queryFn: getAllTeacher,
  });

  const nagivate = useNavigate();

  // const openDeleteConfirmModal = (row: MRT_Row<TeacherModel>) => {
  //   if (window.confirm("Are you sure you want to delete this user?")) {
  //     // deleteUser(row.original.teacherId);
  //   }
  // };

  const table = useMaterialReactTable({
    data: data?.data ?? [],
    columns, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton
            onClick={() => {
              dispatch(setTeacher(row.original));
              nagivate("../edit-teacher");
            }}
          >
            <EditNote />
          </IconButton>
        </Tooltip>
        {/* <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <Tooltip title="View">
          <IconButton
            color="success"
            onClick={() => {
              dispatch(setTeacher(row.original));
              nagivate("../teacher-detail");
            }}
          >
            <FaUsersViewfinder />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });

  return { table, isLoading, isError };
};
