export interface Payment {
  id: string;
  cardNumber: string;
  nameSurname: string;
  email: string;
  expDate: string;
  cvv: string;
  paypalNameSurname: string;
  paypalEmail: string;
}

export interface CreatePaymentRequest {
  cardNumber: string;
  nameSurname: string;
  email: string;
  expDate: string;
  cvv: string;
  paypalNameSurname: string;
  paypalEmail: string;
}

export interface DeletePaymentRequest {
  id: string;
}

import { apiSlice } from "../apiSlice/apiSlice";

const PAYMENTS_URL = "/api/payments";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation<Payment, CreatePaymentRequest>({
      query: (body) => ({
        url: `${PAYMENTS_URL}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Payment"],
    }),
    getUserPayments: builder.query<Payment[], void>({
      query: () => ({
        url: `${PAYMENTS_URL}`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),
    deletePayment: builder.mutation<void, DeletePaymentRequest>({
      query: (id) => ({
        url: `${PAYMENTS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payment"],
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useGetUserPaymentsQuery,
  useDeletePaymentMutation,
} = paymentApiSlice;
