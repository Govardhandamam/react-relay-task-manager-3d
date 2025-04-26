declare module "react-relay/lib/relay-hooks/MatchContainer" {
  import { ComponentType } from "react";

  interface MatchContainerProps {
    match: Record<string, unknown>;
    loader: (name: string) => Promise<unknown>;
  }

  const MatchContainer: ComponentType<MatchContainerProps>;
  export default MatchContainer;
}
