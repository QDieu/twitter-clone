import { PayloadAction } from "@reduxjs/toolkit";
import { TweetsState } from "./state";

export const tweetsReducers = {
  setTweets(state : TweetsState, action: PayloadAction<TweetsState['items']>) {
    state.items = action.payload;
  }
}