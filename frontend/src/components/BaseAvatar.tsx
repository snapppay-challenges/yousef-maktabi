import { AVATAR_PLACEHOLDER } from "src/constants";

interface Props {
  src: string | null | undefined;
  alt?: string;
  size?: number;
  className?: string;
}

const BaseAvatar = ({ src, alt = "", size = 8, className }: Props) => {
  const validAvatarUrl = src ?? AVATAR_PLACEHOLDER;

  return (
    <img
      src={validAvatarUrl}
      alt={alt}
      className={`w-${size} h-${size} rounded-full object-cover ${className}`}
    />
  );
};

export default BaseAvatar;
