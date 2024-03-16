import {
  useMaterialReactTable,
  type MRT_ColumnDef,
  MRT_Row,
} from "material-react-table";
import React, { useMemo } from "react";
import { TeacherModel } from "../model/TeacherModel";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Constant } from "../util/ConstantKey";
import { getAllTeacher } from "../service/TeacherService";

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import { setTeacher } from "../state/slice-creater/editStateSlice";
import { useAppDispatch } from "../state/hook";

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

  const query = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["AllTeacher"],
    queryFn: getAllTeacher,
  });

  const nagivate = useNavigate();

  const openDeleteConfirmModal = (row: MRT_Row<TeacherModel>) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // deleteUser(row.original.teacherId);
    }
  };

  const table = useMaterialReactTable({
    data: data?.data ?? [],
    columns, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowActions: true,
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton
            onClick={() => {
              dispatch(setTeacher(row.original));
              nagivate("../edit-teacher");
            }}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });

  return { table, isLoading, isError };
};
