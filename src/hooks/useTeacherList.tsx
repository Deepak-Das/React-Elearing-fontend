import {
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import React, { useMemo } from "react";
import { TeacherModel } from "../model/TeacherModel";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Constant } from "../util/ConstantKey";
import { getAllTeacher } from "../service/TeacherService";

export const useTeacherList = () => {
  const columns = useMemo<MRT_ColumnDef<TeacherModel>[]>(
    () => [
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

  const { data, isLoading,isError } = useQuery({
    queryKey: ["AllTeacher"],
    queryFn: getAllTeacher,
  });

  const table = useMaterialReactTable({
    data: data?.data ?? [],
    columns, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return { table, isLoading,isError };
};
