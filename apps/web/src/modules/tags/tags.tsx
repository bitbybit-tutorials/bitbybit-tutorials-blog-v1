import { css } from "@emotion/react";

import Tag from "./tag";

const listStyles = css`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  altStyle?: boolean;
  names: string[];
  size?: "small" | "medium" | "big";
};

export default function Tags({ altStyle, names, size }: Props) {
  return (
    <ul css={listStyles}>
      {names?.map((name, index) => (
        <li key={`${index}`}>
          <Tag altStyle={altStyle} size={size} name={name} />
        </li>
      ))}
    </ul>
  );
}
