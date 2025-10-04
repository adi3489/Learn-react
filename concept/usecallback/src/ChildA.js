import { memo } from "react";

function ChildA({ Learning }) {
  console.log("Child A Rendered");
  return (
    <div>
      <h1>This is Child A component</h1>
    </div>
  );
}
export default memo(ChildA);
