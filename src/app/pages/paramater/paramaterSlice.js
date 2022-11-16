import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAll,
  createItem,
  updateItem,
  deleteById,
  getParamGroup,
} from "./parameterAPI";

const initialState = {
  data: [],
  loading: false,
  error: null,
  pageNo: 1,
  pageSize: 10,
  totalRecord: 0,
  selected: null,
  result: null,
  paramGroup: [],
};

export const fetchAll = createAsyncThunk(
  "parameter/fetchAll",
  async (payload) => {
    const response = await getAll(payload);
    return response.data;
  }
);
export const fetchParamGroup = createAsyncThunk(
  "reportHeader/fetchParamGroup",
  async (payload) => {
    const response = await getParamGroup(payload);
    return response.data;
  }
);
export const updateParamGroup = createAsyncThunk(
  "reportHeader/updateParamGroup",
  async (payload) => {
    return payload;
  }
);

export const addItem = createAsyncThunk(
  "parameter/addItem",
  async (payload) => {
    const response = await createItem(payload);
    return response.data;
  }
);

export const editItem = createAsyncThunk(
  "parameter/editItem",
  async ({ params, id }) => {
    const response = await updateItem(params, id);
    return response.data;
  }
);

export const removeById = createAsyncThunk(
  "parameter/removeById",
  async (id) => {
    const response = await deleteById(id);
    return response.data;
  }
);

export const parameterSlice = createSlice({
  name: "parameter",
  initialState,
  reducers: {
    resetData: () => initialState,
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.pageNo = action.payload.pageNo;
        state.pageSize = action.payload.pageSize;
        state.totalRecord = action.payload.totalRecord;
      })
      .addCase(updateParamGroup.fulfilled, (state, action) => {
        state.paramGroup = action.payload;
      })
      .addCase(fetchParamGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchParamGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.paramGroup = action.payload.data;
      })
      .addCase(addItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(editItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(editItem.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(removeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeById.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      });
  },
});

export const { resetData, setSelected } = parameterSlice.actions;

export const selectData = (state) => state.parameter.data;
export const selectLoading = (state) => state.parameter.loading;
export const selectError = (state) => state.parameter.error;
export const selectPageNo = (state) => state.parameter.pageNo;
export const selectPageSize = (state) => state.parameter.pageSize;
export const selectTotalRecord = (state) => state.parameter.totalRecord;
export const selectSelected = (state) => state.parameter.selected;
export const selectResult = (state) => state.parameter.result;
export const selectParamGroup = (state) => state.parameter.paramGroup;

export default parameterSlice.reducer;
