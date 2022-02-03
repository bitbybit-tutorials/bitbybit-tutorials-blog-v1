import { css, SerializedStyles } from "@emotion/react";

import { THEME } from "modules/theme/theme";

const disabledStyles = (styles: { [key: string]: string }) => css`
  background-color: ${styles.disabledBackground};
  color: ${styles.disabledText};
`;

const buttonStyles = (
  styles: { [key: string]: string },
  additionalStyles?: SerializedStyles,
  disabled?: boolean
) => css`
  align-items: center;
  background-color: ${styles.background};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 3px 8px;
  position: relative;
  transition: all 0.35s;
  &:before {
    background-color: ${styles.background};
    border-radius: 8px;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    transition: all 0.35s;
  }
  ${additionalStyles};
  &:hover {
    opacity: 0.9;
  }
  &:hover:before {
    opacity: 0.9;
    transform: scale(1.07, 1.13);
  }

  span {
    color: ${styles.text};
    transition: all 0.35s;
  }
  &:hover span {
    color: ${styles.textHover};
  }
  ${disabled && disabledStyles(styles)}
`;

type Props = {
  altStyle?: boolean;
  containerStyles?: SerializedStyles;
  disabled?: boolean;
  onClick?: () => void;
  textClassName?: string;
  title?: string;
};

export default function ButtonSecondary({
  altStyle,
  containerStyles: additionalStyles,
  disabled,
  onClick,
  textClassName,
  title,
}: Props) {
  const clickHandler = () => onClick?.();

  return (
    <span
      css={buttonStyles(
        altStyle ? THEME.buttonSecondary.alt : THEME.buttonSecondary.default,
        additionalStyles,
        disabled
      )}
      onClick={clickHandler}
    >
      <span className={textClassName}>{title}</span>
    </span>
  );
}
