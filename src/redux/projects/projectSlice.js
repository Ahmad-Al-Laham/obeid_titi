import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const projectsAdapter = createEntityAdapter();

const initialState = projectsAdapter.getInitialState({
  count: "",
});

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActiveProjects: builder.query({
      query: (args) => ({
        url: `/${
          args?.searchTerm ? `project/search/${args.searchTerm}` : "project-active"
        }?page=${args?.page ? args.page : ""}&limit=${
          args?.limit ? args.limit : ""
        } `,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        const loaded = responseData.project;
        initialState.count = responseData.totalCount;
        return projectsAdapter.setAll(initialState, loaded);
      },
      providesTags: (result, error, arg) => [
        { type: "Projects", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Projects", id })),
      ],
    }),
    getProjectById: builder.query ({
      query:(args) => `/projects/${args.id}`,
      providesTags: (result , error , args ) => [{type: "Project" , id:args.id}],
    })
  }),
});

export const { useGetActiveProjectsQuery, useLazyGetProjectByIdQuery} =
  projectsApiSlice;