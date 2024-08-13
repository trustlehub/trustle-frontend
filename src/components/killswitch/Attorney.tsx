import { Icons, IconNames } from "./attorneyContents";

function Attorney({ name, url }: { name: IconNames; url: string }) {
  return <>{Icons[name](url)}</>;
}

export default Attorney;
