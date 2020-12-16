import React from "react";
import { render, act } from "@testing-library/react";
import Post from "../views/Post";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { posts } from "./__data__/testData";

it("Renders out a post widget", async () => {
  const post = post[0];
  let container;
  jest
    .styOn(axios, "get")
    .mockImplementation(() => Promise.resolve({ data: post }));
});
