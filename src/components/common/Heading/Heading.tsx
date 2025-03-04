import { memo } from "react";

const Heading = memo(
  ({ title }: { title: string; children?: React.ReactNode }) => {
    return (
      <h2 className="mb-3" style={{ fontSize: "26px", marginTop: "30px" }}>
        {title}
      </h2>
    );
  }
);

export default Heading;
