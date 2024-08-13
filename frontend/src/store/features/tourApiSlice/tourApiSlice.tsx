import { apiSlice } from "../apiSlice/apiSlice";

export interface Tour {
  id: string;
  date: Date;
  person: number;
  nameSurname: string;
  email: string;
  ticket: string;
  location?: string;
}

export interface CreateTourRequest {
  date: Date;
  person: number;
  nameSurname: string;
  email: string;
  ticket: string;
  location?: string;
}

export interface DeleteTourRequest {
  id: string;
}

const TOURS_URL = "/api/tours";

export const tourApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTour: builder.mutation<Tour, CreateTourRequest>({
      query: (body) => ({
        url: `${TOURS_URL}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tour"],
    }),
    getUserTours: builder.query<Tour[], void>({
      query: () => ({
        url: `${TOURS_URL}`,
        method: "GET",
      }),
      providesTags: ["Tour"],
    }),
    deleteTour: builder.mutation<void, DeleteTourRequest>({
      query: (id) => ({
        url: `${TOURS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tour"],
    }),
  }),
});

export const {
  useCreateTourMutation,
  useGetUserToursQuery,
  useDeleteTourMutation,
} = tourApiSlice;
