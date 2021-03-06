import React from "react";
import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={src} alt="spinner" />
    </Spinner>
  );
}
Loading.ReleaseBody = function LoadingReleaseBody({ ...restProps }) {
  return <ReleaseBody />;
};
