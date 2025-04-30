declare module "react-relay/lib/relay-hooks/MatchContainer" {
  import { ComponentType } from "react";

  interface MatchContainerProps {
    match: unknown;
    loader: (name: string) => unknown;
  }

  const MatchContainer: ComponentType<MatchContainerProps>;
  export default MatchContainer;
}
