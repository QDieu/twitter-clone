import { createSlice } from "@reduxjs/toolkit";
import { tweetsReducers } from "./contracts/actionsCreators";
import { LoadingState, TweetsState } from "./contracts/state";

const initialTweetsState : TweetsState = {
  items : [],
  loadingState: LoadingState.NEVER,
}

export const tweetsSlice = createSlice({
  name : "tweets",
  initialState : initialTweetsState,
  reducers: tweetsReducers
})