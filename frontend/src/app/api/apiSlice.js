import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//Using this fetchBaseQuery is essentially what we would use axios for in another project or something similar.
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Note", "User"],
  endpoints: (builder) => ({}),
});
